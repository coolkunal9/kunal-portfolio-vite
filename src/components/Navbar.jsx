import { useState, useEffect, useCallback } from "react";
import { NAV_LINKS, PERSONAL } from "../data/content";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

/**
 * Reads the saved theme from localStorage (with try/catch for SSR / privacy).
 * Falls back to system preference, then dark.
 */
function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // localStorage unavailable — ignore
  }
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }
  return "dark";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // localStorage unavailable — ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const scrollY = window.scrollY + 160;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.querySelector(NAV_LINKS[i].href);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(NAV_LINKS[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
        style={{
          background: scrolled
            ? "color-mix(in srgb, var(--color-bg) 85%, transparent)"
            : "transparent",
          borderColor: scrolled ? "var(--color-border)" : "transparent",
        }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-base font-semibold tracking-tight"
            aria-label="Scroll to top"
          >
            <span style={{ color: "var(--color-accent)" }}>{"<"}</span>
            KP
            <span style={{ color: "var(--color-accent)" }}>{"/>"}</span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                style={{
                  color:
                    activeSection === link.href
                      ? "var(--color-accent)"
                      : "var(--color-text-muted)",
                  background:
                    activeSection === link.href
                      ? "var(--color-accent-soft)"
                      : "transparent",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-muted)",
              }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Resume button (desktop) */}
            <a
              href={PERSONAL.resumeUrl}
              download="Kunal_Prasad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline hidden md:inline-flex"
              style={{ padding: "8px 16px", fontSize: "0.8125rem" }}
            >
              <Download size={14} />
              Resume
            </a>

            {/* Mobile hamburger */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg border md:hidden"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-muted)",
              }}
              onClick={() => setMenuOpen((m) => !m)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: "color-mix(in srgb, var(--color-bg) 95%, transparent)" }}
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu content */}
          <nav
            className="relative mt-16 flex flex-col gap-1 border-b px-6 py-8"
            style={{
              background: "var(--color-bg)",
              borderColor: "var(--color-border)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="rounded-lg px-4 py-3 text-left text-lg font-semibold transition-colors"
                style={{
                  color:
                    activeSection === link.href
                      ? "var(--color-accent)"
                      : "var(--color-text-muted)",
                }}
              >
                {link.label}
              </button>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={PERSONAL.resumeUrl}
                download="Kunal_Prasad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
