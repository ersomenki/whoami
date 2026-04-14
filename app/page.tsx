import MatrixRain from "@/components/MatrixRain";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <MatrixRain />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
