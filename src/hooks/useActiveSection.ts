import { useEffect, useState } from "react";

/** Returns the id of the page section currently crossing the middle of the viewport. */
export function useActiveSection(): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const section of document.querySelectorAll("main section[id]")) {
      observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}
