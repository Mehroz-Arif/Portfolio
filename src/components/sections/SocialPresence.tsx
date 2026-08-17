"use client";

import { motion } from "framer-motion";
import { Linkedin, Globe, Github } from "lucide-react";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/mehrozarif/",
        icon: <Linkedin className="w-8 h-8 sm:w-9 sm:h-9" />,
    },
    {
        name: "Website / Portfolio",
        href: "#home",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 stroke-current fill-none stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/Mehroz-Arif/",
        icon: <Github className="w-8 h-8 sm:w-9 sm:h-9" />,
    },
];

export default function SocialPresence() {
    return (
        <section id="social" className="pt-24 pb-16 bg-[#fbf7f0] select-none overflow-hidden text-center">
            <div className="w-full px-6 max-w-7xl mx-auto">
                {/* 1. Smaller Refined Single-Line SOCIAL PRESENCE Title (Matching Reference) */}
                <div className="mb-8 sm:mb-10 select-none">
                    <h2 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-black tracking-wider text-[#c6b7a6] uppercase font-bebas leading-none whitespace-nowrap">
                        SOCIAL PRESENCE
                    </h2>
                </div>

                {/* 2. Three Warm Clay/Chocolate Rounded Square Icon Badges (Matching Reference) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-8 sm:gap-14"
                >
                    {socialLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target={item.href.startsWith("#") ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-[#6b5441] hover:bg-[#574332] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-[#6b5441]/20 cursor-pointer"
                            aria-label={item.name}
                        >
                            {item.icon}
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
