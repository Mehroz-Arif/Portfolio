"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Send } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setIsSubmitting(false);
        setIsSent(true);
        setTimeout(() => {
            setIsSent(false);
            setFormState({ name: "", email: "", message: "" });
            onClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-[#2e2319]/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div className="bg-[#fbf7f0] border border-[#2e2319]/15 w-full max-w-lg rounded-3xl p-8 sm:p-10 shadow-2xl pointer-events-auto relative overflow-hidden">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2.5 rounded-2xl hover:bg-[#2e2319]/5 transition-colors text-[#2e2319]/60 hover:text-[#2e2319] cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {!isSent ? (
                                <>
                                    <h2 className="text-3xl font-black font-heading mb-2 text-[#2e2319]">
                                        Get in Touch
                                    </h2>
                                    <p className="text-[#6b5a4b] text-base mb-8 leading-relaxed">
                                        Have a project in mind or looking for a developer? Feel free to reach out directly.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-bold text-[#2e2319] mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                className="w-full bg-white border border-[#2e2319]/15 rounded-2xl px-4.5 py-3.5 text-[#2e2319] text-base focus:border-[#9e8875] focus:ring-2 focus:ring-[#9e8875]/20 outline-none transition-all placeholder:text-[#8c7b6c]/50"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-[#2e2319] mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full bg-white border border-[#2e2319]/15 rounded-2xl px-4.5 py-3.5 text-[#2e2319] text-base focus:border-[#9e8875] focus:ring-2 focus:ring-[#9e8875]/20 outline-none transition-all placeholder:text-[#8c7b6c]/50"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-[#2e2319] mb-2">Message</label>
                                            <textarea
                                                required
                                                rows={4}
                                                value={formState.message}
                                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                                className="w-full bg-white border border-[#2e2319]/15 rounded-2xl px-4.5 py-3.5 text-[#2e2319] text-base focus:border-[#9e8875] focus:ring-2 focus:ring-[#9e8875]/20 outline-none transition-all placeholder:text-[#8c7b6c]/50 resize-none"
                                                placeholder="Tell me about your project or inquiry..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#9e8875] hover:bg-[#887360] text-white font-bold py-4 rounded-2xl active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 text-base cursor-pointer shadow-lg shadow-[#9e8875]/20"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Send Message <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    <div className="mt-8 flex justify-center border-t border-[#2e2319]/10 pt-6">
                                        <a
                                            href="mailto:mehrozarif1122@gmail.com"
                                            className="text-[#6b5a4b] hover:text-[#2e2319] transition-colors flex items-center gap-2 text-sm font-semibold"
                                        >
                                            <Mail className="w-4 h-4 text-[#9e8875]" /> mehrozarif1122@gmail.com
                                        </a>
                                    </div>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-16 h-16 bg-[#9e8875]/15 text-[#9e8875] rounded-3xl flex items-center justify-center mb-5">
                                        <Send className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#2e2319] mb-2">Message Sent!</h3>
                                    <p className="text-[#6b5a4b] text-base">
                                        Thank you for reaching out. I will get back to you shortly.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
