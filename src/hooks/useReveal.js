import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isVisible] — attach ref to the element you want to reveal.
 * Once visible, stays visible. Respects prefers-reduced-motion.
 * Includes fallback timer so elements never stay hidden in full-page screenshots or print.
 */
export function useReveal(threshold = 0.05) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return true;
  });

  useEffect(() => {
    // If user prefers reduced motion, reveal immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "150px 0px 50px 0px", // Trigger slightly ahead of viewport
      }
    );

    observer.observe(el);

    // Safety fallback: reveal after 1.2s to prevent permanent opacity: 0 in automated capture
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [threshold]);

  return [ref, visible];
}
