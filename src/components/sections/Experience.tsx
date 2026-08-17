"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        number: "01",
        company: "SoftHeight",
        role: "Full Stack Developer",
        period: "Jun 2024 – Present",
        description: [
            "Led end-to-end development of Ticketlabel, providing high-performance ticketing solutions.",
            "Built real-time Virtual Queue System with seat locking to eliminate bottlenecks during peak event traffic.",
            "Designed and shipped role-based dashboards for admins and promoters with automated ticket generation.",
        ],
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#4a3b2e] fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 18L12 6L20 18" />
                <path d="M7 13.5H17" />
            </svg>
        ),
    },
    {
        number: "02",
        company: "SpiralSols",
        role: "Full Stack Developer",
        period: "Sep 2025 – April 2026",
        description: [
            "We Love Joe: Engineered frontend & backend for an AI Business Agent platform with Twilio phone integrations.",
            "Stable Summit & Vault Summit: Delivered two complete 10-page responsive web applications from Figma designs.",
            "Klyno AI: Developed dynamic multi-model AI tiering, chat summarization, and token usage history analytics.",
        ],
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#4a3b2e] fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4V12L16 14" />
            </svg>
        ),
    },
    {
        number: "03",
        company: "Hattrick Solution",
        role: "Backend Intern",
        period: "Mar 2024 – May 2024",
        description: [
            "Engineered School Management and Chemical Inventory systems using Node.js, TypeScript, and PostgreSQL.",
            "Architected RESTful and GraphQL APIs with optimized relational data queries and validation.",
        ],
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#4a3b2e] fill-none stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M9 3V21" />
                <path d="M3 9H21" />
            </svg>
        ),
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 sm:py-28 bg-[#fbf7f0] select-none overflow-hidden">
            <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
                
                {/* 1. EXPERIENCE Watermark Title (Left-aligned, enlarged - Matching Reference) */}
                <div className="text-left mb-12 sm:mb-16 select-none">
                    <h2 className="text-7xl sm:text-8xl lg:text-[8.5rem] xl:text-[9.5rem] font-black tracking-normal text-[#c6b7a6] uppercase font-bebas leading-none">
                        EXPERIENCE
                    </h2>
                </div>

                {/* 2. Timeline List (Matching Exact Reference Layout) */}
                <div className="space-y-12 sm:space-y-16">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8"
                        >
                            {/* Big Number: 01, 02, 03 */}
                            <span className="text-6xl sm:text-7xl lg:text-8xl font-black font-heading text-[#4a3b2e] leading-none select-none shrink-0 w-24 sm:w-28">
                                {exp.number}
                            </span>

                            {/* Details Content Adjacent to Number */}
                            <div className="space-y-1.5 pt-1">
                                {/* Company Logo Icon + Company Name */}
                                <div className="flex items-center gap-2.5">
                                    <div className="shrink-0">{exp.icon}</div>
                                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#3c2f24]">
                                        {exp.company}
                                    </h3>
                                    <span className="text-xs sm:text-sm font-mono text-[#8c7b6c] ml-2">
                                        ({exp.period})
                                    </span>
                                </div>

                                {/* Role Title */}
                                <h4 className="text-base sm:text-lg font-bold text-[#3c2f24] font-sans">
                                    {exp.role}
                                </h4>

                                {/* Accomplishments Description */}
                                <div className="text-sm sm:text-base text-[#6b5a4b] leading-relaxed max-w-3xl space-y-0.5 pt-1">
                                    {exp.description.map((desc, i) => (
                                        <p key={i}>
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
