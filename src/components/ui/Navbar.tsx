"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";

interface NavItem {
    label: string;
    href: string;
    isPdf?: boolean;
}

const navLinks: NavItem[] = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "/Full_Stack_Developer_Mehroz_Arif_Resume.pdf", isPdf: true },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (item: NavItem) => {
        setIsMobileOpen(false);
        if (item.isPdf) {
            window.open(item.href, "_blank", "noopener,noreferrer");
            return;
        }
        if (item.href.startsWith("#")) {
            const el = document.querySelector(item.href);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "py-3 bg-[#fbf7f0]/95 backdrop-blur-md border-b border-[#2e2319]/10 shadow-sm"
                        : "py-5 sm:py-6 bg-transparent"
                }`}
            >
                <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
                    {/* Left: Monogram Logo */}
                    <div className="flex items-center gap-8 lg:gap-14">
                        <button
                            onClick={() => handleClick({ label: "Home", href: "#home" })}
                            className="cursor-pointer group flex items-center"
                            aria-label="Home"
                        >
                            <div className="flex items-center text-3xl font-black font-bebas tracking-tighter text-[#2e2319] hover:opacity-80 transition-opacity">
                                <span className="text-[#8c7b6c]">M</span>
                                <span className="text-[#2e2319] -ml-1">A</span>
                            </div>
                        </button>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden md:flex items-center gap-6 lg:gap-9">
                            {navLinks.map((link) =>
                                link.isPdf ? (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base lg:text-lg font-medium text-[#2e2319] hover:text-[#8c7b6c] transition-colors cursor-pointer"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <button
                                        key={link.label}
                                        onClick={() => handleClick(link)}
                                        className="text-base lg:text-lg font-medium text-[#2e2319] hover:text-[#8c7b6c] transition-colors cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                )
                            )}
                        </nav>
                    </div>

                    {/* Right: Get in Touch Button */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="inline-flex items-center px-6 py-2 rounded-xl bg-[#9e8875] hover:bg-[#887360] text-white text-base font-medium transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                        >
                            Get in touch
                        </button>

                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="md:hidden p-2 rounded-lg text-[#2e2319] hover:bg-[#2e2319]/5 transition-colors cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="fixed inset-x-0 top-18 z-40 p-4 md:hidden"
                    >
                        <div className="bg-[#fbf7f0] border border-[#2e2319]/15 rounded-2xl p-5 flex flex-col gap-2 shadow-xl">
                            {navLinks.map((link) =>
                                link.isPdf ? (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMobileOpen(false)}
                                        className="px-4 py-3 text-left text-[#2e2319] hover:bg-[#2e2319]/5 rounded-xl transition-colors text-lg font-semibold cursor-pointer"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <button
                                        key={link.label}
                                        onClick={() => handleClick(link)}
                                        className="px-4 py-3 text-left text-[#2e2319] hover:bg-[#2e2319]/5 rounded-xl transition-colors text-lg font-semibold cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}
