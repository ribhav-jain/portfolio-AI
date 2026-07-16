import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemePicker from "./ThemePicker";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "";
      for (const { href } of NAV_LINKS) {
        const el = document.getElementById(href.slice(1));
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 120) {
            current = href.slice(1);
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-5"
        }`}
      >
        <div
          className={`relative flex items-center justify-between px-5 transition-all duration-500 ease-out-expo ${
            scrolled
              ? "glass-nav h-14 w-[94%] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.35)] md:w-[720px]"
              : "h-18 w-full max-w-7xl border border-transparent bg-transparent py-2"
          }`}
        >
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2.5">
            <div
              className={`rounded-lg p-1.5 transition-colors ${
                scrolled ? "bg-accent/12 text-accent" : "bg-white/5 text-ink group-hover:bg-white/10"
              }`}
            >
              <Terminal className="h-5 w-5" />
            </div>
            <span className="font-mono text-lg font-bold tracking-tight text-ink">
              RJ<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/8"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:block">
              <ThemePicker />
            </div>
            <a
              href="#contact"
              className={`hidden items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all md:flex ${
                scrolled
                  ? "bg-ink text-base shadow-lg shadow-white/5 hover:bg-white"
                  : "border border-white/10 bg-white/5 text-ink backdrop-blur-md hover:bg-white/10"
              }`}
            >
              Contact
            </a>
            <div className="flex items-center gap-1 md:hidden">
              <ThemePicker />
              <button
                className="p-2 text-muted hover:text-ink"
                onClick={() => setIsOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-base/95 px-8 pt-28 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-line/60 py-6 font-display text-4xl font-light text-muted transition-colors hover:text-ink"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 font-display text-4xl font-semibold text-accent"
              >
                Let's talk.
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
