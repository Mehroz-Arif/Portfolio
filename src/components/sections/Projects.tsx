"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Maximize2, X, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    subtitle: string;
    letter: string;
    images: string[];
    links: { demo: string; github: string };
    gradientBg?: string;
}

const projects: Project[] = [
    {
        title: "Ticketlabel",
        subtitle: "Full Stack Ticketing Platform",
        letter: "T",
        images: [
            "/img/ticketlabelhome.png",
            "/img/ticketlabelstadium.png",
            "/img/ticketlabelsections.png",
            "/img/ticketlabelbrowse.png",
            "/img/ticketlabeladminstadium.png",
            "/img/ticketlabelevents.png",
            "/img/ticektlabel4.png",
        ],
        links: { demo: "#", github: "https://github.com/Mehroz-Arif" },
    },
    {
        title: "We Love Joe",
        subtitle: "AI Business Agent SaaS",
        letter: "W",
        images: ["/img/welovejoe1.png", "/img/welovejoe2.png", "/img/welovejoe3.png", "/img/welovejoe4.png"],
        links: { demo: "#", github: "https://github.com/Mehroz-Arif" },
        gradientBg: "linear-gradient(135deg, #a88be8 0%, #e08ea2 50%, #f3a87c 100%)",
    },
    {
        title: "Stable Summit",
        subtitle: "10-Page Production Platform",
        letter: "S",
        images: ["/img/stablesummithhome.png", "/img/stablesummitarchive.png", "/img/stablesummitabout.png"],
        links: { demo: "#", github: "https://github.com/Mehroz-Arif" },
    },
    {
        title: "Vault Summit",
        subtitle: "Fintech Responsive Web App",
        letter: "V",
        images: ["/img/vaultsummithome.png", "/img/vaulatsummithome1.png", "/img/valultsummitabout.png"],
        links: { demo: "#", github: "https://github.com/Mehroz-Arif" },
    },
    {
        title: "Klyno AI",
        subtitle: "Multi-Model AI Chat System",
        letter: "K",
        images: ["/img/klynoai1.png", "/img/klynoai2.png"],
        links: { demo: "#", github: "https://github.com/Mehroz-Arif" },
    },
    {
        title: "Larya",
        subtitle: "Pixel-Perfect Multi-Page App",
        letter: "L",
        images: [
            "/img/larya1.png",
            "/img/larya3.png",
            "/img/larya4.png",
            "/img/larya5.png",
            "/img/larya6.png",
            "/img/larya7.png",
            "/img/larya8.png",
        ],
        links: { demo: "#", github: "https://github.com/Mehroz-Arif" },
    },
    {
        title: "VideoSignals",
        subtitle: "Metrics & Analytics Dashboard",
        letter: "V",
        images: ["/img/videosignal1.png", "/img/videosignal2.png"],
        links: { demo: "#", github: "https://github.com/Mehroz-Arif" },
    },
];

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [viewerOpen, setViewerOpen] = useState(false);

    const activeProject = projects[activeIndex];
    const nextProjectIndex = (activeIndex + 1) % projects.length;
    const nextProject = projects[nextProjectIndex];

    const handleNextProject = () => {
        setActiveIndex(nextProjectIndex);
        setCurrentImageIndex(0);
    };

    return (
        <section id="projects" className="py-20 sm:py-28 bg-[#fbf7f0] relative overflow-hidden select-none">
            <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[130px_1fr_220px] xl:grid-cols-[150px_1fr_260px] gap-6 lg:gap-8 items-center">
                    
                    {/* 1. Left Giant Vertical Watermark: PROJECTS */}
                    <div className="hidden lg:flex justify-start items-center h-full">
                        <span className="text-[120px] xl:text-[140px] font-black tracking-wider text-[#c6b7a6] uppercase font-bebas writing-vertical leading-none">
                            PROJECTS
                        </span>
                    </div>

                    {/* Mobile Watermark */}
                    <div className="lg:hidden mb-4 text-left">
                        <span className="text-6xl sm:text-7xl font-black tracking-wider text-[#c6b7a6] uppercase font-bebas">
                            PROJECTS
                        </span>
                    </div>

                    {/* 2. Center Expanded Wide Browser Mockup Showcase */}
                    <div className="relative w-full">
                        {/* Browser Mockup Window with Increased Width */}
                        <div
                            className="bg-[#2e2319] rounded-[24px] sm:rounded-[36px] p-2.5 sm:p-4 shadow-2xl shadow-[#2e2319]/25 border border-[#2e2319]/10 relative overflow-hidden group cursor-pointer"
                            onClick={() => setViewerOpen(true)}
                        >
                            {/* Inner Screen Display with Complete Edge-to-Edge Image Visibility */}
                            <div className="relative aspect-[16/9.5] sm:aspect-[16/9] w-full rounded-[18px] sm:rounded-[26px] overflow-hidden bg-white">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${activeIndex}-${currentImageIndex}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="relative w-full h-full bg-white flex items-center justify-center"
                                    >
                                        <Image
                                            src={activeProject.images[currentImageIndex]}
                                            alt={activeProject.title}
                                            fill
                                            priority
                                            className="object-contain sm:object-cover sm:object-top"
                                            sizes="(max-width: 1024px) 100vw, 1200px"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* GitHub Logo Badge inside Mockup */}
                                <a
                                    href={activeProject.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 p-2.5 sm:p-3 rounded-2xl bg-[#8c7b6c] hover:bg-[#726253] text-white hover:scale-105 transition-all shadow-lg cursor-pointer z-10"
                                    title="View GitHub Repository"
                                >
                                    <Github className="w-6 h-6 sm:w-7 sm:h-7" />
                                </a>

                                {/* Image switcher arrows inside preview */}
                                {activeProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
                                            }}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#2e2319]/60 hover:bg-[#2e2319] text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-10"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
                                            }}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#2e2319]/60 hover:bg-[#2e2319] text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-10"
                                            aria-label="Next image"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Decorative Outlined Initial Letter Overlap */}
                        <div className="absolute -bottom-8 sm:-bottom-12 -left-3 sm:-left-6 select-none pointer-events-none z-20">
                            <span className="decorative-initial text-8xl sm:text-[140px] lg:text-[160px] leading-none">
                                {activeProject.letter}
                            </span>
                        </div>

                        {/* Project Title and Subtitle Below */}
                        <div className="pt-6 sm:pt-10 pl-20 sm:pl-32 lg:pl-36">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#3c2f24] tracking-tight mb-3">
                                {activeProject.title}- {activeProject.subtitle}
                            </h3>

                            {/* Project Quick Switcher Tabs */}
                            <div className="flex flex-wrap gap-2">
                                {projects.map((proj, idx) => (
                                    <button
                                        key={proj.title}
                                        onClick={() => {
                                            setActiveIndex(idx);
                                            setCurrentImageIndex(0);
                                        }}
                                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                            idx === activeIndex
                                                ? "bg-[#2e2319] text-white shadow-sm scale-105"
                                                : "bg-[#d9c7b5]/60 hover:bg-[#d9c7b5] text-[#2e2319]"
                                        }`}
                                    >
                                        {proj.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 3. Right Side Peek / Next Project Card */}
                    <div className="hidden lg:block relative">
                        <div
                            onClick={handleNextProject}
                            className="w-full aspect-[4/3] rounded-3xl p-4 shadow-xl border border-[#2e2319]/10 cursor-pointer overflow-hidden group hover:scale-105 transition-all duration-300 relative"
                            style={{
                                background: nextProject.gradientBg || "linear-gradient(135deg, #d9c7b5 0%, #c6b7a6 100%)",
                            }}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/10 flex flex-col justify-between p-4">
                                <div className="flex justify-between items-center text-[#2e2319]">
                                    <span className="text-xs font-bold uppercase tracking-wider bg-white/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                                        Next Project
                                    </span>
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black font-heading text-[#2e2319] leading-tight">
                                        {nextProject.title}
                                    </h4>
                                    <p className="text-xs text-[#2e2319]/80 line-clamp-1">{nextProject.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {viewerOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setViewerOpen(false)}
                    >
                        <button
                            onClick={() => setViewerOpen(false)}
                            className="fixed top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div
                            className="relative max-w-6xl max-h-[90vh] w-full aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={activeProject.images[currentImageIndex]}
                                alt={activeProject.title}
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
