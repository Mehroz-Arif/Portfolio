"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "UI/UX",
        subtitle: "Design & High-Fidelity Prototypes",
        linkText: "Check Figma & Interfaces",
        href: "#projects",
        isLarge: true,
    },
    {
        title: "FULL STACK DEVELOPMENT",
        subtitle: "Next.js, React, Node & APIs",
        linkText: "Check Projects",
        href: "#projects",
        isLarge: false,
    },
    {
        title: "AI AGENT INTEGRATION",
        subtitle: "LLMs, Twilio & Voice Pipelines",
        linkText: "Check AI Samples",
        href: "#projects",
        isLarge: false,
    },
    {
        title: "BACKEND & DATABASES",
        subtitle: "PostgreSQL, Prisma, MongoDB & Auth",
        linkText: "Check Architecture",
        href: "#experience",
        isLarge: false,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#fbf7f0] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_140px] gap-8 items-center">
                    {/* Left 2x2 Bento Grid of Warm Taupe Cards (Matching Reference) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {services.map((service, idx) => (
                            <motion.a
                                key={service.title}
                                href={service.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group bg-[#d9c7b5] hover:bg-[#cfbcab] p-8 sm:p-10 rounded-3xl transition-all duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] shadow-sm hover:shadow-md cursor-pointer border border-[#2e2319]/10"
                            >
                                <div>
                                    <h3
                                        className={`font-black font-heading text-[#2e2319] tracking-tight mb-2 ${
                                            service.isLarge
                                                ? "text-5xl sm:text-7xl lg:text-8xl leading-none"
                                                : "text-2xl sm:text-3xl lg:text-4xl leading-tight"
                                        }`}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-[#6b5a4b] font-medium">
                                        {service.subtitle}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#2e2319]/10">
                                    <span className="text-sm sm:text-base font-bold text-[#2e2319] group-hover:text-[#2e2319] transition-colors">
                                        {service.linkText}
                                    </span>
                                    <div className="w-10 h-10 rounded-xl bg-[#2e2319] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Side Giant Vertical Watermark Title: SERVICES (Matching Reference) */}
                    <div className="hidden lg:flex justify-center items-center h-full select-none">
                        <span className="text-[7.5rem] font-black tracking-widest text-[#c6b7a6] uppercase font-bebas writing-vertical">
                            SERVICES
                        </span>
                    </div>

                    {/* Mobile Watermark Title */}
                    <div className="lg:hidden mt-4 text-center">
                        <span className="text-6xl sm:text-7xl font-black tracking-wider text-[#c6b7a6] uppercase font-bebas">
                            SERVICES
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
