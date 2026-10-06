import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Container, Glow } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Container className="pb-4">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <div className="relative mt-6 grid gap-6 lg:grid-cols-2">
            <Glow className="-bottom-16 -left-16 opacity-[var(--glow-2)]" />
            <Education />
            <Contact />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
