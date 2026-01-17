"use client";

import { motion } from "framer-motion";
import BentoCard from "@/components/ui/BentoCard";
import { Code2, Server, Database, Globe, Layers, Cpu } from "lucide-react";

const skills = [
    { name: "Next.js", icon: <Globe className="w-6 h-6" /> },
    { name: "MERN", icon: <Code2 className="w-6 h-6" /> },
    { name: "Convex", icon: <Layers className="w-6 h-6" /> },
    { name: "Prisma", icon: <Database className="w-6 h-6" /> },
    { name: "REST/GraphQL", icon: <Server className="w-6 h-6" /> },
    { name: "Tailwind", icon: <Cpu className="w-6 h-6" /> },
];

export default function BentoGrid() {
    return (
        <section className="py-24 px-6 bg-background relative z-10">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Experience & Skills
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl">
                        My journey through the tech landscape, building scalable applications and immersive experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
                    {/* Bio / Intro Card */}
                    <BentoCard
                        colSpan={2}
                        rowSpan={2}
                        title="About Me"
                        subtitle="Full Stack Visionary"
                        className="md:h-full min-h-[300px]"
                    >
                        <div className="prose prose-invert text-gray-300 text-base leading-relaxed">
                            <p>
                                I am a passionate Full Stack Developer with over 2 years of expertise in building scalable,
                                high-performance web applications. My journey started with the MERN stack, but I found my
                                true calling in the Next.js ecosystem, where I blend powerful backend logic with immersive
                                frontend experiences.
                            </p>
                            <p className="mt-4">
                                Currently, I focus on integrating specific backend technologies like <strong>Convex</strong>,
                                <strong>ElysiaJS</strong>, and <strong>Hono</strong> to build ultra-fast, type-safe APIs.
                                I leverage <strong>AI</strong> to integrate intelligent features into systems, drastically
                                increasing specific productivity and system performance.
                            </p>
                            <p className="mt-4">
                                From crafting complex dashboards to architecting real-time agent calling systems,
                                I thrive on solving complex problems with scalable, efficient code.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-2 flex-wrap">
                            {["Next.js Expert", "AI Integration", "Backend Performance", "Problem Solver"].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full text-sm bg-white/10 text-white font-medium border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Tech Stack Marquee (Simplified as grid for now) */}
                    <BentoCard colSpan={2} title="Core Tech Stack" subtitle="Arsenal">
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            {skills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors gap-2 group">
                                    <div className="text-primary group-hover:text-white transition-colors">{skill.icon}</div>
                                    <span className="text-sm font-medium text-gray-400 group-hover:text-white">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Experience 1 - SpiralSols */}
                    <BentoCard colSpan={2} title="Frontend & Full Stack Dev" subtitle="SpiralSols">
                        <p className="text-base text-gray-400 mb-4">2025 - 2026</p>
                        <div className="space-y-4 text-base text-gray-300">
                            <div>
                                <strong className="text-primary block mb-1">We Love Joe (Agent Calling Platform)</strong>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                    <li>Built complete frontend (landing & dashboards) from Figma.</li>
                                    <li>Implemented backend with Convex & Ultra Vox voices for AI agents.</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-primary block mb-1">Other Projects</strong>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                    <li><strong>Klyno AI:</strong> AI-driven features integration.</li>
                                    <li><strong>Video Signal:</strong> Complete dashboard frontend from Figma.</li>
                                    <li><strong>Larya:</strong> 7 fully responsive pages from Figma designs.</li>
                                </ul>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Experience 2 - SoftHeight */}
                    <BentoCard colSpan={2} title="Full Stack Developer" subtitle="SoftHeight">
                        <p className="text-base text-gray-400 mb-4">2024 - 2025</p>
                        <ul className="list-disc list-inside text-base text-gray-300 space-y-1">
                            <li>Developed an Event Ticketing Platform from scratch.</li>
                            <li>Integrated <strong className="text-white">Adyen Payment Gateway</strong> for secure transactions.</li>
                            <li>Designed scalable database schema with Prisma & PostgreSQL.</li>
                        </ul>
                    </BentoCard>

                    {/* Redesigned Kinetic Typography / DNA Card */}
                    <BentoCard colSpan={4} className="relative flex flex-col justify-center overflow-hidden py-12 px-0 bg-black">
                        {/* Background Grid Accent */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                        {/* Edge Fading Masks */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-900 to-transparent z-20" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-900 to-transparent z-20" />

                        <div className="relative space-y-6">
                            {/* Row 1: Forward Scroll */}
                            <div className="flex overflow-hidden group">
                                <div className="animate-marquee whitespace-nowrap flex gap-12 text-5xl md:text-7xl font-bold tracking-tighter items-center italic">
                                    <span className="text-white/40 uppercase transition-all hover:text-primary duration-500 hover:drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">Scalability</span>
                                    <span className="text-primary/40">•</span>
                                    <span className="text-transparent border-t border-b border-white/20 py-1 uppercase text-white/30">Clean Code</span>
                                    <span className="text-white/40 uppercase transition-all hover:text-white duration-500">Efficiency</span>
                                    <span className="text-secondary/40">•</span>
                                    <span className="text-white/40 uppercase transition-all hover:text-secondary duration-500 hover:drop-shadow-[0_0_15px_rgba(112,0,255,0.5)]">Next.js 15</span>
                                </div>
                                <div className="animate-marquee whitespace-nowrap flex gap-12 text-5xl md:text-7xl font-bold tracking-tighter items-center italic pl-12" aria-hidden="true">
                                    <span className="text-white/40 uppercase transition-all hover:text-primary duration-500 hover:drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">Scalability</span>
                                    <span className="text-primary/40">•</span>
                                    <span className="text-transparent border-t border-b border-white/20 py-1 uppercase text-white/30">Clean Code</span>
                                    <span className="text-white/40 uppercase transition-all hover:text-white duration-500">Efficiency</span>
                                    <span className="text-secondary/40">•</span>
                                    <span className="text-white/40 uppercase transition-all hover:text-secondary duration-500 hover:drop-shadow-[0_0_15px_rgba(112,0,255,0.5)]">Next.js 15</span>
                                </div>
                            </div>

                            {/* Row 2: Reverse Scroll */}
                            <div className="flex overflow-hidden group">
                                <div className="animate-marquee2-reverse whitespace-nowrap flex gap-12 text-5xl md:text-7xl font-bold tracking-tighter items-center">
                                    <span className="text-white/20 uppercase">Performance</span>
                                    <span className="text-primary/30">•</span>
                                    <span className="text-white/20 uppercase italic">User Centric</span>
                                    <span className="text-secondary/30">•</span>
                                    <span className="text-transparent border-l border-r border-white/20 px-4 uppercase text-white/10">AI Integrated</span>
                                    <span className="text-white/20 uppercase">Pixel Perfect</span>
                                    <span className="text-white/20 uppercase">Performance</span>
                                    <span className="text-primary/30">•</span>
                                    <span className="text-white/20 uppercase italic">User Centric</span>
                                    <span className="text-secondary/30">•</span>
                                    <span className="text-transparent border-l border-r border-white/20 px-4 uppercase text-white/10">AI Integrated</span>
                                    <span className="text-white/20 uppercase">Pixel Perfect</span>
                                </div>
                                <div className="animate-marquee2-reverse whitespace-nowrap flex gap-12 text-5xl md:text-7xl font-bold tracking-tighter items-center pl-12" aria-hidden="true">
                                    <span className="text-white/20 uppercase">Performance</span>
                                    <span className="text-primary/30">•</span>
                                    <span className="text-white/20 uppercase italic">User Centric</span>
                                    <span className="text-secondary/30">•</span>
                                    <span className="text-transparent border-l border-r border-white/20 px-4 uppercase text-white/10">AI Integrated</span>
                                    <span className="text-white/20 uppercase">Pixel Perfect</span>
                                    <span className="text-white/20 uppercase">Performance</span>
                                    <span className="text-primary/30">•</span>
                                    <span className="text-white/20 uppercase italic">User Centric</span>
                                    <span className="text-secondary/30">•</span>
                                    <span className="text-transparent border-l border-r border-white/20 px-4 uppercase text-white/10">AI Integrated</span>
                                    <span className="text-white/20 uppercase">Pixel Perfect</span>
                                </div>
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
}
