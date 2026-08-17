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
    rowSpan = 1,
}: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl p-7",
                "bg-white/[0.03] border border-white/[0.08]",
                "transition-all duration-500",
                "hover:bg-white/[0.05] hover:border-white/[0.15]",
                "hover:shadow-2xl hover:shadow-primary/[0.05]",
                colSpan === 2 && "md:col-span-2",
                colSpan === 3 && "md:col-span-3",
                colSpan === 4 && "md:col-span-4",
                rowSpan === 2 && "md:row-span-2",
                className
            )}
        >
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: "linear-gradient(135deg, rgba(129,140,248,0.12), rgba(192,132,252,0.06), transparent)",
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                {(title || subtitle) && (
                    <div className="mb-5">
                        {subtitle && (
                            <h4 className="text-xs md:text-sm uppercase tracking-[0.15em] text-primary font-bold mb-1.5">
                                {subtitle}
                            </h4>
                        )}
                        {title && (
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading text-foreground">
                                {title}
                            </h3>
                        )}
                    </div>
                )}
                <div className="flex-grow">{children}</div>
            </div>

            {/* Subtle corner glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/[0.08] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );
}
