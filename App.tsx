import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AIChatModal from "./components/AIChatModal";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-base text-ink font-sans antialiased">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent to-highlight"
        style={{ scaleX }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <AIChatModal />
    </div>
  );
}

export default App;
