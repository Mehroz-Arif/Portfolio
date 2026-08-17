"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ui/ContactModal";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/Mehroz-Arif/",
        icon: <Github className="w-6 h-6" />,
        handle: "@Mehroz-Arif",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/mehrozarif/",
        icon: <Linkedin className="w-6 h-6" />,
        handle: "mehrozarif",
    },
    {
        name: "Email",
        href: "mailto:mehrozarif1122@gmail.com",
        icon: <Mail className="w-6 h-6" />,
        handle: "mehrozarif1122@gmail.com",
    },
];

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="py-32 bg-background relative">
            {/* Background accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-primary text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4">
                        Get In Touch
                    </p>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading mb-6 text-foreground tracking-tight">
                        Let&apos;s work{" "}
                        <span className="text-gradient-primary">together</span>
                    </h2>
                    <p className="text-foreground-muted text-base sm:text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
                        Have a project in mind? I&apos;m available for freelance work and
                        full-time opportunities. Let&apos;s build something exceptional.
                    </p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-base md:text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/25 cursor-pointer mb-16"
                    >
                        Start a Conversation
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-5"
                >
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 p-6 rounded-3xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 shadow-lg"
                        >
                            <div className="p-3.5 rounded-2xl bg-white/[0.05] text-foreground-muted group-hover:text-primary group-hover:bg-primary/10 transition-all">
                                {link.icon}
                            </div>
                            <div className="flex-grow min-w-0">
                                <p className="text-xs md:text-sm text-foreground-muted font-medium mb-1">{link.name}</p>
                                <p className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                    {link.handle}
                                </p>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-foreground-muted/40 group-hover:text-primary transition-colors shrink-0" />
                        </a>
                    ))}
                </motion.div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
