"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Award } from "lucide-react";

const educationItems = [
    {
        title: "MPHIL CS",
        fullTitle: "MPhil in Computer Science",
        institution: "University of Southern Punjab (USP)",
        period: "Sep 2025 – Present · In Progress",
        description: "Focusing on advanced distributed systems, scalable architectures, and computing research.",
        badge: "Current Degree",
        isLarge: true,
        icon: <GraduationCap className="w-6 h-6 text-[#2e2319]" />,
    },
    {
        title: "BSCS",
        fullTitle: "BS in Computer Science",
        institution: "Bahauddin Zakariya University (BZU)",
        period: "Sep 2021 – Aug 2025 · CGPA 3.27",
        description: "Core foundation in algorithms, data structures, database design, and software engineering.",
        badge: "Graduated",
        isLarge: false,
        icon: <GraduationCap className="w-6 h-6 text-[#2e2319]" />,
    },
    {
        title: "FULL STACK DEVELOPER",
        fullTitle: "Full Stack Web Development",
        institution: "Apna College",
        period: "Certified MERN Developer",
        description: "Comprehensive training in React, Node.js, Express, MongoDB, RESTful APIs, and frontend architecture.",
        badge: "Apna College",
        isLarge: false,
        icon: <Award className="w-6 h-6 text-[#2e2319]" />,
    },
    {
        title: "FULL STACK DEVELOPER",
        fullTitle: "Full Stack Web Development Program",
        institution: "PFTP (Pakistan Freelancing Training Program)",
        period: "Certified Professional",
        description: "Hands-on professional program covering full-stack web engineering, client workflows, and project delivery.",
        badge: "PFTP",
        isLarge: false,
        icon: <Award className="w-6 h-6 text-[#2e2319]" />,
    },
];

export default function Education() {
    return (
        <section id="education" className="py-24 bg-[#fbf7f0] relative overflow-hidden select-none">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_160px] xl:grid-cols-[1fr_180px] gap-8 items-center">
                    
                    {/* 1. Left 2x2 Bento Grid of Warm Taupe Education & Certification Cards (Matching Reference) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {educationItems.map((item, idx) => (
                            <motion.div
                                key={`${item.title}-${idx}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group bg-[#d9c7b5] hover:bg-[#cfbcab] p-8 sm:p-10 rounded-3xl transition-all duration-300 flex flex-col justify-between min-h-[240px] sm:min-h-[270px] shadow-sm hover:shadow-md border border-[#2e2319]/10"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-3 mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider bg-[#2e2319]/10 text-[#2e2319] px-3 py-1 rounded-full">
                                            {item.badge}
                                        </span>
                                        {item.icon}
                                    </div>

                                    <h3
                                        className={`font-black font-heading text-[#2e2319] tracking-tight mb-2 ${
                                            item.isLarge
                                                ? "text-4xl sm:text-6xl lg:text-7xl leading-none"
                                                : "text-2xl sm:text-3xl lg:text-4xl leading-tight"
                                        }`}
                                    >
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-base sm:text-lg font-bold text-[#3c2f24] mb-1">
                                        {item.institution}
                                    </p>
                                    
                                    <p className="text-xs sm:text-sm font-mono text-[#6b5a4b] mb-2">
                                        {item.period}
                                    </p>

                                    <p className="text-xs sm:text-sm text-[#4a3b2e] leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#2e2319]/10">
                                    <span className="text-sm sm:text-base font-bold text-[#2e2319] transition-colors">
                                        {item.fullTitle}
                                    </span>
                                    <div className="w-10 h-10 rounded-xl bg-[#2e2319] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* 2. Right Side Giant Vertical Watermark: EDUCATION (Matching Reference) */}
                    <div className="hidden lg:flex justify-center items-center h-full select-none">
                        <span className="text-[120px] xl:text-[140px] font-black tracking-wider text-[#c6b7a6] uppercase font-bebas writing-vertical leading-none">
                            EDUCATION
                        </span>
                    </div>

                    {/* Mobile Watermark Title */}
                    <div className="lg:hidden mt-4 text-center">
                        <span className="text-5xl sm:text-6xl font-black tracking-wider text-[#c6b7a6] uppercase font-bebas">
                            EDUCATION
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
