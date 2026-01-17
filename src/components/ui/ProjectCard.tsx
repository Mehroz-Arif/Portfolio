"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import ImageViewer from "./ImageViewer";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    images: string[];
    links: {
        demo: string;
        github: string;
    };
}

export default function ProjectCard({ project }: { project: ProjectCardProps }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    return (
        <>
            <motion.div
                className="group relative h-[500px] md:h-[450px] w-[85vw] md:w-[650px] flex-shrink-0 rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4 }}
                onClick={() => setIsViewerOpen(true)}
            >
                {/* Carousel Section (Top 60%) */}
                <div className="relative h-[60%] w-full">
                    <ImageCarousel
                        images={project.images}
                        currentIndex={currentIndex}
                        onIndexChange={setCurrentIndex}
                        onOpenViewer={() => setIsViewerOpen(true)}
                    />
                </div>

                {/* Content Section (Bottom 40%) */}
                <div className="relative h-[40%] w-full p-6 flex flex-col justify-between bg-zinc-900">
                    <div>
                        <h3 className="text-2xl font-bold font-heading text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-primary border border-primary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3">
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            <ImageViewer
                isOpen={isViewerOpen}
                imageSrc={project.images[currentIndex]}
                onClose={() => setIsViewerOpen(false)}
            />
        </>
    );
}
