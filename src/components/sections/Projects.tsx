"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "TicketLabel",
        description: "Event ticketing platform with real-time capabilities and secure cloud storage deployment.",
        tags: ["Next.js", "Prisma", "SQLite", "AWS S3"],
        images: ["/img/ticketlabel1.png", "/img/ticketlabel2.png", "/img/ticektlabel3.png", "/img/ticketlabel4.png"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "We Love Joe",
        description: "AI Agent calling platform with high-performance backend architecture.",
        tags: ["Convex", "Next.js", "ElysiaJS", "Monorepo"],
        images: ["/img/welovejoe1.png", "/img/welovejoe2.png", "/img/welovejoe3.png", "/img/welovejoe4.png"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Klyno AI",
        description: "A unified platform providing access to multiple leading AI models in one seamless interface.",
        tags: ["Next.js", "Multiple Models", "AI Integration"],
        images: ["/img/klynoai1.png", "/img/klynoai2.png"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Larya",
        description: "Fully responsive frontend implementation with modern styling.",
        tags: ["Next.js", "Tailwind CSS"],
        images: ["/img/larya1.png", "/img/larya3.png", "/img/larya4.png", "/img/larya5.png", "/img/larya6.png", "/img/larya7.png", "/img/larya8.png"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "VideoSignals",
        description: "Dashboard frontend design and implementation.",
        tags: ["Next.js", "Tailwind CSS"],
        images: ["/img/videosignal1.png", "/img/videosignal2.png"],
        links: { demo: "#", github: "#" },
    },
];

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section id="projects" className="py-24 bg-black relative">
            {/* Background gradient splash */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-6xl font-bold font-heading mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl text-sm md:text-base">
                        A selection of projects that define my engineering journey.
                    </p>
                    {/* Mobile Scroll Hint */}
                    <div className="flex md:hidden items-center gap-2 mt-4 text-primary text-xs animate-pulse">
                        <span>Swipe to explore</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </motion.div>

                <div className="hidden md:flex gap-2 text-gray-400 text-sm font-mono">
                    <span>01</span>
                    <div className="w-20 h-px bg-gray-700 my-auto" />
                    <span>03</span>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-8 px-6 md:px-24 pb-12 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {projects.map((project, idx) => (
                    <div key={idx} className="snap-center">
                        <ProjectCard project={project} />
                    </div>
                ))}
                {/* Padding right to allow last card to be fully visible/centered */}
                <div className="w-12 md:w-24 flex-shrink-0" />
            </div>
        </section>
    );
}
