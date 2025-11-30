import React, { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = [
  {
    name: "Indigo",
    colors: {
      accent: "99 102 241",
      accentHover: "79 70 229",
      highlight: "56 189 248",
    },
    class: "bg-indigo-500",
  },
  {
    name: "Emerald",
    colors: {
      accent: "16 185 129",
      accentHover: "5 150 105",
      highlight: "132 204 22",
    },
    class: "bg-emerald-500",
  },
  {
    name: "Rose",
    colors: {
      accent: "244 63 94",
      accentHover: "225 29 72",
      highlight: "251 191 36",
    },
    class: "bg-rose-500",
  },
  {
    name: "Violet",
    colors: {
      accent: "139 92 246",
      accentHover: "124 58 237",
      highlight: "232 121 249",
    },
    class: "bg-violet-500",
  },
  {
    name: "Amber",
    colors: {
      accent: "245 158 11",
      accentHover: "217 119 6",
      highlight: "239 68 68",
    },
    class: "bg-amber-500",
  },
];

const ThemePicker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("Indigo");

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme-preference");
    if (saved) {
      const theme = THEMES.find((t) => t.name === saved);
      if (theme) {
        setTheme(theme);
      }
    }
  }, []);

  const setTheme = (theme: (typeof THEMES)[0]) => {
    const root = document.documentElement;
    root.style.setProperty("--accent", theme.colors.accent);
    root.style.setProperty("--accent-hover", theme.colors.accentHover);
    root.style.setProperty("--highlight", theme.colors.highlight);

    setActiveTheme(theme.name);
    localStorage.setItem("theme-preference", theme.name);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full transition-all duration-300 ${
          isOpen
            ? "bg-white text-primary rotate-45"
            : "text-slate-400 hover:text-white hover:bg-white/10"
        }`}
        aria-label="Change Theme"
      >
        <Palette className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-12 right-0 p-3 bg-secondary/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col gap-3 min-w-[140px] z-50"
          >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider ml-1">
              Theme
            </span>
            <div className="grid grid-cols-5 gap-2">
              {THEMES.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => setTheme(theme)}
                  className={`w-6 h-6 rounded-full ${
                    theme.class
                  } flex items-center justify-center transition-transform hover:scale-110 ring-2 ring-offset-2 ring-offset-secondary ${
                    activeTheme === theme.name
                      ? "ring-white"
                      : "ring-transparent"
                  }`}
                  title={theme.name}
                >
                  {activeTheme === theme.name && (
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemePicker;
