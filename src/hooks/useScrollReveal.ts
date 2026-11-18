import { useEffect } from "react";
import { prefersReducedMotion } from "../lib/motion.ts";

/**
 * Fades in every `[data-r]` element the first time it scrolls into view.
 *
 * Elements already on screen when the page loads are left alone, so the prerendered
 * page never flashes; only content below the fold is hidden ("armed") and revealed.
 * The styles are in styles/base.css; stagger siblings with `style={{ "--i": n }}`.
 * Call once, from <App>.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          element.dataset.reveal = "in";
          // Drop the reveal transition afterwards so hover effects are not slowed by its delay.
          timers.push(window.setTimeout(() => element.removeAttribute("data-reveal"), 1600));
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    for (const element of document.querySelectorAll<HTMLElement>("[data-r]")) {
      if (element.getBoundingClientRect().top < window.innerHeight) continue;
      element.dataset.reveal = "armed";
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      for (const element of document.querySelectorAll("[data-reveal]")) {
        element.removeAttribute("data-reveal");
      }
    };
  }, []);
}
