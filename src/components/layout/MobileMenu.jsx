import { useEffect, useRef } from "react";
import { X, Download } from "lucide-react";
import Button from "../ui/Button";

/**
 * Mobile drawer overlay with focus management and ESC key listener.
 */
export default function MobileMenu({
  isOpen,
  onClose,
  triggerRef,
  navLinks,
  activeSection,
  resumeUrl,
}) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) {
        e.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const focusIsOutsideDialog = !dialogRef.current?.contains(document.activeElement);
      if (e.shiftKey && (document.activeElement === first || focusIsOutsideDialog)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || focusIsOutsideDialog)) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      const returnFocusTo = triggerRef?.current ?? previousFocus;
      if (returnFocusTo?.isConnected) returnFocusTo.focus();
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={dialogRef}
      id="mobile-navigation-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex flex-col bg-[var(--bg-canvas)]/95 backdrop-blur-md md:hidden"
    >
      {/* Drawer Header */}
      <div className="flex h-16 items-center justify-between border-b border-[var(--border-subtle)] px-6">
        <span className="font-mono text-sm font-semibold tracking-wider text-[var(--accent-text)]">
          NAVIGATION
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        >
          <X size={18} />
        </button>
      </div>

      {/* Nav List */}
      <nav
        aria-label="Mobile primary"
        className="flex flex-1 flex-col justify-center gap-2 px-8"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`rounded-[var(--radius-md)] px-4 py-3 text-lg font-medium transition-colors ${
                isActive
                  ? "bg-[var(--accent-subtle)] text-[var(--accent-text)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
              }`}
            >
              {link.label}
            </a>
          );
        })}

        <div className="mt-6 border-t border-[var(--border-subtle)] pt-6">
          <Button
            href={resumeUrl}
            download="Kunal_Prasad_Resume.pdf"
            variant="primary"
            size="lg"
            icon={Download}
            className="w-full"
          >
            Download Resume
          </Button>
        </div>
      </nav>
    </div>
  );
}
