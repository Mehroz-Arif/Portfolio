"use client";

import { motion } from "framer-motion";

const skills = [
    {
        name: "React",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-[#3c2f24] fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="12" rx="10" ry="4" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                <circle cx="12" cy="12" r="1.5" className="fill-[#3c2f24]" />
            </svg>
        ),
    },
    {
        name: "mongoDB",
        icon: (
            <div className="flex flex-col items-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#3c2f24] mb-0.5">
                    <path d="M12 2C12 2 6 8 6 14C6 17.5 8.5 20.5 12 22C15.5 20.5 18 17.5 18 14C18 8 12 2 12 2ZM12 20C9.5 18.8 7.8 16.5 7.8 14C7.8 9.8 11.5 5.5 12 4.5C12.5 5.5 16.2 9.8 16.2 14C16.2 16.5 14.5 18.8 12 20Z" />
                </svg>
                <span className="text-xs font-semibold tracking-tight font-sans text-[#3c2f24]">
                    mongoDB
                </span>
            </div>
        ),
    },
    {
        name: "node JS",
        icon: (
            <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-black font-heading lowercase tracking-tight">node</span>
                <div className="w-5 h-5 rounded-md border-2 border-[#3c2f24] flex items-center justify-center text-[9px] font-black">
                    JS
                </div>
            </div>
        ),
    },
    {
        name: "express",
        icon: (
            <span className="text-2xl sm:text-3xl font-normal lowercase tracking-tight font-sans text-[#3c2f24]">
                express
            </span>
        ),
    },
    {
        name: "Figma",
        icon: (
            <span className="text-2xl sm:text-3xl font-medium tracking-tight font-heading text-[#3c2f24]">
                Figma
            </span>
        ),
    },
    {
        name: "HTML",
        icon: (
            <span className="text-3xl sm:text-4xl font-black uppercase font-bebas tracking-wide text-[#3c2f24]">
                HTML
            </span>
        ),
    },
    {
        name: "CSS",
        icon: (
            <span className="text-3xl sm:text-4xl font-black uppercase font-bebas tracking-wide text-[#3c2f24]">
                CSS
            </span>
        ),
    },
    {
        name: "JS",
        icon: (
            <span className="text-3xl sm:text-4xl font-black uppercase font-bebas tracking-wide text-[#3c2f24]">
                JS
            </span>
        ),
    },
    {
        name: "Next.js",
        icon: (
            <span className="text-2xl sm:text-3xl font-black tracking-tight font-heading text-[#3c2f24]">
                Next.js
            </span>
        ),
    },
    {
        name: "TypeScript",
        icon: (
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#3c2f24]">
                TypeScript
            </span>
        ),
    },
    {
        name: "PostgreSQL",
        icon: (
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#3c2f24]">
                PostgreSQL
            </span>
        ),
    },
    {
        name: "Tailwind",
        icon: (
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#3c2f24]">
                Tailwind CSS
            </span>
        ),
    },
];

export default function Skills() {
    // Duplicate skills for seamless infinite marquee loop
    const marqueeItems = [...skills, ...skills, ...skills, ...skills];

    return (
        <section id="skills" className="pt-20 pb-0 bg-[#fbf7f0] select-none overflow-hidden">
            {/* 1. Giant SKILLS Watermark Title (Matching Reference) */}
            <div className="w-full px-6 sm:px-10 lg:px-16 mb-8 sm:mb-12">
                <h2 className="text-[15vw] sm:text-[13vw] lg:text-[12vw] font-black tracking-wider text-[#c6b7a6] uppercase font-bebas leading-none">
                    SKILLS
                </h2>
            </div>

            {/* 2. Full-Width Solid White Horizontal Ribbon with Infinite Marquee */}
            <div className="w-full bg-white py-8 sm:py-10 border-t border-b border-[#2e2319]/5 shadow-sm overflow-hidden relative">
                {/* Subtle gradient edge fades */}
                <div className="absolute left-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                    className="flex items-center gap-12 sm:gap-20 whitespace-nowrap w-max"
                >
                    {marqueeItems.map((item, idx) => (
                        <div
                            key={`${item.name}-${idx}`}
                            className="flex items-center justify-center text-[#3c2f24] hover:scale-110 transition-transform cursor-default px-2"
                        >
                            {item.icon}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
