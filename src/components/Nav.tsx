import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile.ts";
import { useActiveSection } from "../hooks/useActiveSection.ts";
import { useLens } from "../hooks/useLens.ts";
import { toggleTheme } from "../lib/theme.ts";
import { Icon } from "./Icon.tsx";
import "./Nav.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
];

export function Nav() {
  const activeSection = useActiveSection();
  const lens = useLens<HTMLDivElement>(activeSection);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // While the mobile menu is open, close it on Escape or a press outside it.
  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !menuButtonRef.current?.contains(target)) {
        setMenuOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="nav-wrap">
        <nav className="nav glass" aria-label="Primary">
          <a className="brand" href="#top" aria-label={`${profile.name}, back to top`}>
            <i className="mark" aria-hidden="true">
              {profile.initials}
            </i>
            <span>{profile.name}</span>
          </a>
          <div className="seg links" {...lens}>
            <i className="lens" aria-hidden="true" />
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                aria-current={href === `#${activeSection}` ? "true" : undefined}
              >
                {label}
              </a>
            ))}
          </div>
          <button
            className="icon-btn"
            type="button"
            aria-label="Switch colour theme"
            onClick={toggleTheme}
          >
            <Icon name="sun" className="i-sun" />
            <Icon name="moon" className="i-moon" />
          </button>
          <a className="btn primary" href="#contact">
            Contact
          </a>
          <button
            ref={menuButtonRef}
            className="icon-btn menu-btn"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </nav>
      </header>
      {menuOpen && (
        <nav ref={menuRef} className="mnav" aria-label="Mobile">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu}>
            Let's talk.
          </a>
        </nav>
      )}
    </>
  );
}
