import React, { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = [
  { name: "Iris", accent: "108 99 255", hover: "79 70 229", highlight: "45 212 191", swatch: "#6c63ff" },
  { name: "Emerald", accent: "16 185 129", hover: "5 150 105", highlight: "132 204 22", swatch: "#10b981" },
  { name: "Cyan", accent: "34 211 238", hover: "6 182 212", highlight: "129 140 248", swatch: "#22d3ee" },
  { name: "Rose", accent: "244 63 94", hover: "225 29 72", highlight: "251 191 36", swatch: "#f43f5e" },
  { name: "Amber", accent: "245 158 11", hover: "217 119 6", highlight: "56 189 248", swatch: "#f59e0b" },
];

type Theme = (typeof THEMES)[number];

const ThemePicker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("Iris");

  useEffect(() => {
    const saved = localStorage.getItem("theme-preference");
    const theme = THEMES.find((t) => t.name === saved);
    if (theme) applyTheme(theme);
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--accent-hover", theme.hover);
    root.style.setProperty("--highlight", theme.highlight);
    setActiveTheme(theme.name);
    localStorage.setItem("theme-preference", theme.name);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={`rounded-full p-2 transition-all duration-300 ${
          isOpen
            ? "rotate-45 bg-ink text-base"
            : "text-muted hover:bg-white/5 hover:text-ink"
        }`}
        aria-label="Change accent color"
      >
        <Palette className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass absolute right-0 top-12 z-50 flex min-w-[150px] flex-col gap-3 rounded-2xl p-3.5 shadow-2xl"
          >
            <span className="kicker ml-1 text-faint">Accent</span>
            <div className="flex gap-2.5">
              {THEMES.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => applyTheme(theme)}
                  style={{ backgroundColor: theme.swatch }}
                  className={`flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-offset-2 ring-offset-surface transition-transform hover:scale-110 ${
                    activeTheme === theme.name ? "ring-white" : "ring-transparent"
                  }`}
                  title={theme.name}
                >
                  {activeTheme === theme.name && (
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
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
