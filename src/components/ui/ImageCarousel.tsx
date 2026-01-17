"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ImageCarouselProps {
    images: string[];
    currentIndex: number;
    onIndexChange: (index: number) => void;
    onOpenViewer: () => void;
}

export default function ImageCarousel({ images, currentIndex, onIndexChange, onOpenViewer }: ImageCarouselProps) {
    const nextImage = () => {
        onIndexChange((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-full group">
            {/* Image Display */}
            <div className="relative w-full h-full overflow-hidden bg-zinc-800">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                >
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700">
                        {images[currentIndex] && (
                            <img
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                className="w-full h-full object-cover cursor-zoom-in"
                                onClick={(e) => { e.stopPropagation(); onOpenViewer(); }}
                            />
                        )}
                    </div>
                </motion.div>

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>

            {/* Controls - Only show if multiple images */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-black z-30"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-black z-30"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); onIndexChange(idx); }}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-primary w-4" : "bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Fullscreen Trigger (Top Right) */}
            <button
                onClick={(e) => { e.stopPropagation(); onOpenViewer(); }}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-black z-30"
            >
                <Maximize2 className="w-4 h-4" />
            </button>
        </div>
    );
}
