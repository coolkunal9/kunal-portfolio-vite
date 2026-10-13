import { useState, useEffect } from "react";

const STORAGE_KEY = "kp_portfolio_theme";

/**
 * Hook to manage dark/light theme state with localStorage persistence
 * and prefers-color-scheme fallback.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      // localStorage unavailable (e.g. privacy mode)
    }

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      return "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore write errors
    }
  }, [theme]);

  // Listen to OS-level theme changes if user hasn't explicitly set one
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const handler = (e) => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) {
          setTheme(e.matches ? "light" : "dark");
        }
      } catch {
        setTheme(e.matches ? "light" : "dark");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme, isDark: theme === "dark" };
}
