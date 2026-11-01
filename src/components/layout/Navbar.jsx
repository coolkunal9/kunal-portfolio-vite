import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, Download } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "../../data/content";
import { useActiveSection } from "../../hooks/useActiveSection";
import Container from "../ui/Container";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

/**
 * Minimal editorial sticky navbar with scroll elevation and active link tracking.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuTriggerRef = useRef(null);
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b transition-all duration-200 bg-[var(--bg-canvas)]/70 backdrop-blur-xl ${
          isScrolled
            ? "border-[var(--border-subtle)] shadow-sm"
            : "border-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-text)] transition-colors"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)]">
              KP
            </span>
            <span className="hidden sm:inline font-sans text-sm font-semibold tracking-normal">
              {PERSONAL.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-[var(--radius-md)] px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-[var(--accent-text)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-[var(--radius-md)] bg-[var(--accent-subtle)]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-[1]">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Resume CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button
              href={PERSONAL.resumeUrl}
              download="Kunal_Prasad_Resume.pdf"
              variant="outline"
              size="sm"
              icon={Download}
              className="hidden sm:inline-flex"
            >
              Resume
            </Button>

            <button
              ref={menuTriggerRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-dialog"
              className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] md:hidden cursor-pointer"
            >
              <Menu size={18} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={closeMobileMenu}
        triggerRef={menuTriggerRef}
        navLinks={NAV_LINKS}
        activeSection={activeSection}
        resumeUrl={PERSONAL.resumeUrl}
      />
    </>
  );
}
