import { useState, useEffect } from "react";

/**
 * Tracks which section is currently in view using IntersectionObserver.
 */
export function useActiveSection(sectionIds, offset = "-20% 0px -70% 0px") {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: offset }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds, offset]);

  return activeSection;
}
