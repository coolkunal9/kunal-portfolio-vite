import { PERSONAL } from "../../data/content";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "../ui/Icons";
import Container from "../ui/Container";

/**
 * Editorial footer with verified social links and copyright.
 */
export default function Footer() {
  const socials = [
    { icon: Github, label: "GitHub", href: PERSONAL.github },
    { icon: Linkedin, label: "LinkedIn", href: PERSONAL.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${PERSONAL.email}` },
  ];

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-12">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-mono text-xs font-semibold tracking-wider text-[var(--text-primary)]">
            {PERSONAL.name.toUpperCase()}
          </p>
          <p className="text-xs text-[var(--text-tertiary)]">
            Frontend Developer &amp; Data Analyst &bull; Jaipur, India
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            >
              <item.icon size={15} />
            </a>
          ))}
        </div>

        <p className="text-xs text-[var(--text-tertiary)]">
          &copy; {new Date().getFullYear()} Kunal Prasad. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
