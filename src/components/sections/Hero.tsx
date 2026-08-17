"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-[92vh] sm:h-screen w-full flex flex-col justify-between overflow-hidden bg-[#fbf7f0] select-none pt-24 sm:pt-28 lg:pt-32"
        >
            {/* 1. MERN STACK Background Watermark (Properly bounded, not touching screen edges) */}
            <div className="relative w-full text-center px-6 sm:px-12 z-0">
                <div className="relative inline-block max-w-[85vw] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[12.5vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.4vw] font-black tracking-normal text-[#8c7b6c] leading-[0.9] uppercase font-bebas text-center whitespace-nowrap"
                    >
                        MERN STACK
                    </motion.h1>
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute right-0 sm:right-2 lg:right-4 -bottom-3 sm:-bottom-5 lg:-bottom-7 text-2xl sm:text-4xl lg:text-5xl font-medium text-[#8c7b6c] font-oswald tracking-tight"
                    >
                        Developer
                    </motion.span>
                </div>
            </div>

            {/* 2. Massive Transparent Cutout Portrait (Emerging from bottom, head overlapping MERN STACK) */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    className="relative w-[320px] sm:w-[480px] md:w-[580px] lg:w-[680px] xl:w-[760px] h-[68vh] sm:h-[76vh] lg:h-[84vh] flex items-end justify-center"
                >
                    <Image
                        src="/mypic-transparent.png"
                        alt="Mehroz Arif — MERN Stack Developer"
                        fill
                        priority
                        className="object-contain object-bottom pointer-events-auto"
                        sizes="(max-width: 640px) 320px, (max-width: 1024px) 580px, 760px"
                    />
                </motion.div>
            </div>

            {/* 3. Left Info Pillar: BSCS Computer Science */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-6 sm:bottom-12 lg:bottom-16 left-6 sm:left-12 lg:left-20 xl:left-28 z-20 text-left"
            >
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-bebas text-[#8c7b6c] tracking-tight leading-none mb-0.5 sm:mb-1">
                    BSCS.
                </h2>
                <p className="text-xl sm:text-2xl lg:text-3xl font-light font-oswald text-[#8c7b6c] tracking-tight">
                    Computer Science
                </p>
            </motion.div>

            {/* 4. Right Info Pillar: Mehroz Arif */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-6 sm:bottom-12 lg:bottom-16 right-6 sm:right-12 lg:right-20 xl:right-28 z-20 text-left"
            >
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-bebas text-[#8c7b6c] tracking-tight leading-none mb-0.5 sm:mb-1">
                    Mehroz
                </h2>
                <p className="text-xl sm:text-2xl lg:text-3xl font-light font-oswald text-[#8c7b6c] tracking-tight">
                    Arif
                </p>
            </motion.div>
        </section>
    );
}
