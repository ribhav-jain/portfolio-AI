import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemePicker from "./ThemePicker";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  // Handle Scroll Spy and Navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is visible (top is within middle of screen or active)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          scrolled ? "pt-4" : "pt-6"
        }`}
      >
        <div
          className={`
          relative flex items-center justify-between px-6 
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            scrolled
              ? "w-[92%] md:w-[700px] h-14 rounded-full bg-secondary/80 backdrop-blur-md border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              : "w-full max-w-7xl h-20 bg-transparent border-transparent"
          }
        `}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className={`p-1.5 rounded-lg transition-colors ${
                scrolled ? "bg-accent/10" : "bg-white/5 group-hover:bg-white/10"
              }`}
            >
              <Terminal
                className={`w-5 h-5 ${
                  scrolled ? "text-accent" : "text-slate-200"
                }`}
              />
            </div>
            <span
              className={`font-mono font-bold tracking-tight ${
                scrolled ? "text-lg text-white" : "text-xl text-white"
              }`}
            >
              RJ<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`
                    px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 relative
                    ${
                      isActive
                        ? "text-white bg-white/10"
                        : scrolled
                        ? "text-slate-400 hover:text-white hover:bg-white/5"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {link.name}
                  {isActive && !scrolled && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme Picker */}
            <div className="hidden md:block">
              <ThemePicker />
            </div>

            <a
              href="#contact"
              className={`
                hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all
                ${
                  scrolled
                    ? "bg-white text-black hover:bg-slate-200 shadow-lg shadow-white/10"
                    : "bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20"
                }
              `}
            >
              Contact
            </a>

            <div className="flex items-center gap-2 md:hidden">
              <ThemePicker />
              <button
                className="p-2 text-slate-300 hover:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl md:hidden pt-28 px-8"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-light text-slate-300 hover:text-white border-b border-white/5 pb-6 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="text-4xl font-semibold text-accent mt-4"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk.
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
