"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2;
}

export default function BentoCard({
    children,
    className,
    title,
    subtitle,
    colSpan = 1,
    rowSpan = 1
}: BentoCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl p-6",
                "bg-white/5 border border-white/10 backdrop-blur-md",
                "transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30",
                colSpan === 2 && "md:col-span-2",
                colSpan === 3 && "md:col-span-3",
                colSpan === 4 && "md:col-span-4",
                rowSpan === 2 && "md:row-span-2",
                className
            )}
        >
            <div className="relative z-10 flex flex-col h-full">
                {(title || subtitle) && (
                    <div className="mb-4">
                        {subtitle && <h4 className="text-xs uppercase tracking-wider text-primary font-bold mb-1">{subtitle}</h4>}
                        {title && <h3 className="text-xl font-bold font-heading text-foreground">{title}</h3>}
                    </div>
                )}
                <div className="flex-grow">{children}</div>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
}
