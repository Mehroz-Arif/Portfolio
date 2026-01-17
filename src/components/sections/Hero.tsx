"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import HeroScene from "@/components/3d/HeroScene";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
            {/* 3D Background */}
            <HeroScene />

            {/* Content Overlay */}
            <div className="container relative z-10 px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit backdrop-blur-sm">
                        <span className="text-primary text-sm font-medium tracking-wide">Available for Hire</span>
                    </div>

                    <h1 className="text-4xl min-[375px]:text-5xl md:text-7xl font-bold font-heading tracking-tight leading-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-xy">
                            Mehroz Arif
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-3xl text-muted-foreground font-light">
                        Full Stack Developer specializing in <span className="text-primary font-medium">Next.js</span> & <span className="text-secondary font-medium">React.js</span>
                    </h2>

                    <p className="max-w-xl text-base md:text-xl text-gray-400 leading-relaxed">
                        Building immersive web experiences with modern technologies.
                        Over 2+ years of expertise in MERN Stack, Next.js 15, and Scalable Architectures.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="group relative px-6 md:px-8 py-3 rounded-full bg-primary text-background font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 text-sm md:text-base">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                View Projects <ArrowRight className="w-4 h-4" />
                            </span>
                        </button>

                        <button className="px-6 md:px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105 active:scale-95 text-sm md:text-base">
                            Contact Me
                        </button>
                    </div>

                    <div className="flex items-center gap-6 pt-6 md:pt-8">
                        <SocialLink href="https://github.com" icon={<Github className="w-5 h-5 md:w-6 md:h-6" />} label="GitHub" />
                        <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5 md:w-6 md:h-6" />} label="LinkedIn" />
                        <SocialLink href="mailto:mehroz@example.com" icon={<Mail className="w-5 h-5 md:w-6 md:h-6" />} label="Email" />
                    </div>
                </motion.div>

                {/* Right side is largely empty to let the 3D element shine, or can contain stats/abstract elements */}
                <div className="hidden lg:block"></div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-widest text-gray-500 uppercase">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
