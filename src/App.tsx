import { About } from "./components/About.tsx";
import { AskAI } from "./components/AskAI.tsx";
import { Contact } from "./components/Contact.tsx";
import { Education } from "./components/Education.tsx";
import { Experience } from "./components/Experience.tsx";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { Nav } from "./components/Nav.tsx";
import { Projects } from "./components/Projects.tsx";
import { ScrollProgress } from "./components/ScrollProgress.tsx";
import { Skills } from "./components/Skills.tsx";
import { useScrollReveal } from "./hooks/useScrollReveal.ts";

export default function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <div className="backdrop" aria-hidden="true">
        <i className="orb o1" />
        <i className="orb o2" />
        <i className="orb o3" />
        <i className="orb o4" />
      </div>

      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AskAI />
    </>
  );
}
