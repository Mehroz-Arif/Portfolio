import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import SocialPresence from "@/components/sections/SocialPresence";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf7f0] text-[#2e2319] overflow-x-hidden selection:bg-[#9e8875] selection:text-white">
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <SocialPresence />
      <Footer />
    </main>
  );
}
