/** True when the visitor has asked their system to reduce motion. Browser only. */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
