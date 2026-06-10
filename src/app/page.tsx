import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Venture from "@/components/Venture";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Impact from "@/components/Impact";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Venture />
        <About />
        <Experience />
        <Projects />
        <Impact />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
