import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black overflow-x-hidden">
      <Hero />
      <BentoGrid />
      <Projects />
    </main>
  );
}

