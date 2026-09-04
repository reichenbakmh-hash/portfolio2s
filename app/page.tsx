import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Petals from "@/components/Petals";
import Qualities from "@/components/Qualities";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Petals />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Qualities />
      <Contact />
    </main>
  );
}
