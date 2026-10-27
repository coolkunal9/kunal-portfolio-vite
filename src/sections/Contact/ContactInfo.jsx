import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PERSONAL } from "../../data/content";
import Card from "../../components/ui/Card";
import { Mail, ExternalLink, Copy, Check, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "../../components/ui/Icons";

export default function ContactInfo() {
  const [copyState, setCopyState] = useState("idle");
  const timerRef = useRef(null);
  const channels = [
    {
      title: "LinkedIn Profile",
      value: "linkedin.com/in/kunalprasad-dev/",
      href: PERSONAL.linkedin,
      icon: Linkedin,
      isExternal: true,
    },
    {
      title: "GitHub Repository",
      value: "github.com/coolkunal9",
      href: PERSONAL.github,
      icon: Github,
      isExternal: true,
    },
  ];

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(PERSONAL.email);
      } else {
        const input = document.createElement("textarea");
        input.value = PERSONAL.email;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        const copied = document.execCommand("copy");
        input.remove();
        if (!copied) throw new Error("Clipboard unavailable");
      }
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopyState("idle"), 2400);
  };

  return (
    <div className="space-y-4">
      <Card className="contact-email-card p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--accent-text)]">
              <Mail size={16} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">Direct email</span>
              <a href={`mailto:${PERSONAL.email}`} className="block break-all text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent-text)]">
                {PERSONAL.email}
              </a>
            </div>
          </div>
          <button type="button" onClick={copyEmail} aria-label="Copy email address" className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg border border-[var(--border-strong)] px-3 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent-text)] focus-visible:outline-none">
            {copyState === "copied" ? <Check size={14} /> : <Copy size={14} />}
            {copyState === "copied" ? "Copied" : "Copy email"}
          </button>
        </div>
      </Card>

      <AnimatePresence initial={false}>
        {copyState !== "idle" && (
          <motion.p
            role="status"
            aria-live="polite"
            className={`contact-copy-toast flex items-center gap-2 text-xs ${copyState === "error" ? "text-[var(--color-error)]" : "text-[var(--color-success)]"}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            {copyState === "error" ? <AlertCircle size={14} /> : <Check size={14} />}
            {copyState === "error" ? "Could not copy. Use the email link instead." : "Email address copied to clipboard."}
          </motion.p>
        )}
      </AnimatePresence>

      {channels.map((ch) => (
        <a
          key={ch.title}
          href={ch.href}
          target={ch.isExternal ? "_blank" : undefined}
          rel={ch.isExternal ? "noopener noreferrer" : undefined}
          className="block group"
        >
          <Card interactive className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--accent-text)]">
                <ch.icon size={16} />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] block">
                  {ch.title}
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-text)] transition-colors">
                  {ch.value}
                </span>
              </div>
            </div>
            {ch.isExternal && (
              <ExternalLink
                size={14}
                className="text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors"
              />
            )}
          </Card>
        </a>
      ))}
    </div>
  );
}
