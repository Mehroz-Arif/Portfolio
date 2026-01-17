"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ImageViewerProps {
    isOpen: boolean;
    imageSrc: string;
    onClose: () => void;
}

export default function ImageViewer({ isOpen, imageSrc, onClose }: ImageViewerProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 touch-none"
                    onClick={onClose}
                >
                    <button
                        className="fixed top-4 right-4 z-[70] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-90"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        aria-label="Close Preview"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        src={imageSrc}
                        alt="Project Preview"
                        className="max-h-[80vh] md:max-h-[90vh] max-w-full md:max-w-[90vw] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
