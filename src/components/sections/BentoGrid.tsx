"use client";

import { motion } from "framer-motion";
import BentoCard from "@/components/ui/BentoCard";
import {
    Globe,
    Server,
    Database,
    ShieldCheck,
    GraduationCap,
    Briefcase,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

const skillCategories = [
    {
        category: "Frontend",
        skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap"],
        icon: <Globe className="w-5 h-5 text-primary" />,
    },
    {
        category: "Backend & APIs",
        skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"],
        icon: <Server className="w-5 h-5 text-accent" />,
    },
    {
        category: "Databases & ORM",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
        icon: <Database className="w-5 h-5 text-cyan-400" />,
    },
    {
        category: "Auth, Tools & Cloud",
        skills: ["NextAuth", "RBAC", "Git / GitHub", "Vercel", "Figma"],
        icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
];

export default function BentoGrid() {
    return (
        <section id="experience" className="py-32 px-6 bg-background relative z-10">
            {/* Background accents */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-primary text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-3">
                        Background & Expertise
                    </p>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-5 text-foreground">
                        Experience & Skills
                    </h2>
                    <p className="text-foreground-muted text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        My journey through the tech landscape — designing scalable architectures,
                        AI-integrated platforms, and pixel-perfect digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[minmax(180px,auto)]">
                    {/* About Me Card */}
                    <BentoCard colSpan={2} rowSpan={2} title="About Me" subtitle="Full Stack Developer" className="md:h-full min-h-[380px]">
                        <div className="text-foreground-muted/90 text-base md:text-lg leading-relaxed space-y-4">
                            <p>
                                Results-driven <strong className="text-foreground font-semibold">Full Stack Developer</strong> with deep expertise designing and building scalable web applications using the <strong className="text-primary font-semibold">MERN stack</strong> and <strong className="text-accent font-semibold">Next.js</strong>.
                            </p>
                            <p>
                                Skilled in backend architecture, RESTful APIs, GraphQL, and converting complex Figma designs into responsive, pixel-perfect interfaces. Experienced in end-to-end product ownership, AI platform integrations, and robust role-based system designs.
                            </p>
                            <p>
                                Proficient in <strong className="text-foreground font-semibold">PostgreSQL, MySQL, and MongoDB</strong> with strong data modeling and query optimization expertise.
                            </p>
                        </div>
                        <div className="mt-6 flex gap-2.5 flex-wrap">
                            {[
                                "MERN & Next.js",
                                "AI Platform Integration",
                                "Role-Based Architecture",
                                "Data Modeling & Prisma",
                                "Figma to Pixel-Perfect",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3.5 py-1.5 rounded-xl text-sm md:text-base bg-white/[0.05] text-foreground-muted border border-white/[0.08] flex items-center gap-2 hover:border-primary/30 transition-colors font-medium"
                                >
                                    <Sparkles className="w-4 h-4 text-primary" /> {tag}
                                </span>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Tech Stack */}
                    <BentoCard colSpan={2} rowSpan={2} title="Core Tech Stack" subtitle="Technical Arsenal">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                            {skillCategories.map((group) => (
                                <div
                                    key={group.category}
                                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-2.5 mb-3">
                                        {group.icon}
                                        <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-foreground">
                                            {group.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 rounded-lg text-sm md:text-base font-medium bg-white/[0.04] text-foreground-muted/90 border border-white/[0.06] hover:text-primary hover:border-primary/30 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Experience 1 - SoftHeight */}
                    <BentoCard colSpan={2} title="Full Stack Developer" subtitle="SoftHeight, Multan">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm md:text-base text-foreground-muted/60 font-mono">Jun 2024 – Present</span>
                            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs md:text-sm font-bold bg-success/10 text-success border border-success/20">
                                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                Current Role
                            </span>
                        </div>
                        <div className="space-y-3 text-base text-foreground-muted/80">
                            <div>
                                <strong className="text-primary text-base md:text-lg block font-bold mb-2.5">Ticketlabel — Event Ticketing Platform</strong>
                                <ul className="space-y-2 list-none pl-0">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base leading-relaxed">Led end-to-end development with full ownership from architecture to production deployment.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base leading-relaxed">Engineered automated ticket generation pipeline reducing operational time by 40%.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base leading-relaxed">Built Virtual Queue System with real-time waiting rooms and queue positioning.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base leading-relaxed">Built role-based dashboards with granular access control and secure payment processing.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Experience 2 - SpiralSols */}
                    <BentoCard colSpan={2} title="Full Stack Developer" subtitle="SpiralSols, Multan">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm md:text-base text-foreground-muted/60 font-mono">Sep 2025 – April 2026</span>
                            <span className="px-3.5 py-1 rounded-full text-xs md:text-sm font-semibold bg-white/[0.05] text-foreground-muted/70 border border-white/[0.08]">
                                Previous Role
                            </span>
                        </div>
                        <div className="space-y-3 text-base text-foreground-muted/80">
                            <div>
                                <strong className="text-accent text-base md:text-lg block font-bold mb-2.5">Key Contributions & Platforms</strong>
                                <ul className="space-y-2 list-none pl-0">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base leading-relaxed"><strong className="text-foreground">We Love Joe:</strong> AI Business Agent SaaS (Twilio, custom data training, live customer calls).</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base leading-relaxed"><strong className="text-foreground">Stable Summit & Vault Summit:</strong> Two complete 10-page responsive websites from Figma.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base leading-relaxed"><strong className="text-foreground">Klyno AI:</strong> Multi-model AI tiering, pricing UI, chat summarizer.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base leading-relaxed"><strong className="text-foreground">Larya:</strong> 7 pixel-perfect responsive pages from Figma with high fidelity.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Education & Internship */}
                    <BentoCard colSpan={4} title="Education & Internship" subtitle="Foundation & Academics">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
                                <div className="flex items-center gap-2.5 mb-2.5 text-primary font-bold text-sm md:text-base">
                                    <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                                    <span>Hattrick Solution, Multan</span>
                                </div>
                                <span className="text-xs md:text-sm text-foreground-muted/60 font-mono block mb-2.5">
                                    Mar 2024 – May 2024 · Backend Intern
                                </span>
                                <p className="text-sm md:text-base text-foreground-muted/80 leading-relaxed">
                                    Built School Management and Chemical Inventory Systems using TypeScript, Node.js, PostgreSQL, Prisma ORM, and GraphQL APIs.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
                                <div className="flex items-center gap-2.5 mb-2.5 text-accent font-bold text-sm md:text-base">
                                    <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                                    <span>MPhil Computer Science</span>
                                </div>
                                <span className="text-xs md:text-sm text-foreground-muted/60 font-mono block mb-2.5">
                                    Sep 2025 – Present · USP
                                </span>
                                <p className="text-sm md:text-base text-foreground-muted/80 leading-relaxed">
                                    University of Southern Punjab. First semester <strong className="text-foreground">CGPA 3.2</strong>. Focus on advanced computer science and research.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all">
                                <div className="flex items-center gap-2.5 mb-2.5 text-cyan-400 font-bold text-sm md:text-base">
                                    <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                                    <span>BS Computer Science</span>
                                </div>
                                <span className="text-xs md:text-sm text-foreground-muted/60 font-mono block mb-2.5">
                                    Sep 2021 – Aug 2025 · BZU
                                </span>
                                <p className="text-sm md:text-base text-foreground-muted/80 leading-relaxed">
                                    Bahauddin Zakariya University. <strong className="text-foreground">CGPA: 3.27</strong>. Strong foundation in algorithms, databases, and software engineering.
                                </p>
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
}
