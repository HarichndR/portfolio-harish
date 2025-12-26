import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Philosophy from "./sections/Philosophy";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Hero />
      <Skills />
      <Projects />
      <Philosophy />
      <Footer />
    </div>
  );
}
