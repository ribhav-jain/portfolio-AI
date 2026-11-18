import { useEffect, useRef } from "react";
import type { SVGProps } from "react";
import { prefersReducedMotion } from "../lib/motion.ts";

/**
 * A decorative <svg> whose SMIL animations run only while it is on screen.
 * With reduced motion it holds a single still frame instead.
 */
export function AnimatedSvg({ children, ...props }: SVGProps<SVGSVGElement>) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || typeof svg.pauseAnimations !== "function") return;

    if (prefersReducedMotion()) {
      svg.setCurrentTime(1.2);
      svg.pauseAnimations();
      return;
    }
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) svg.unpauseAnimations();
        else svg.pauseAnimations();
      },
      { rootMargin: "80px" },
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg ref={ref} aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}
