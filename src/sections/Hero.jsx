import { motion } from "framer-motion";
import { PERSONAL } from "../data/content";
import {
  Mail,
  ArrowDown,
  Download,
  ExternalLink,
} from "lucide-react";
import { Github, Linkedin } from "../components/Icons";

export default function Hero() {
  const socials = [
    { icon: Github, label: "GitHub", href: PERSONAL.github },
    { icon: Linkedin, label: "LinkedIn", href: PERSONAL.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${PERSONAL.email}` },
  ];

  /* Staggered fade-up helper */
  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center"
      style={{ padding: "120px 24px 80px" }}
    >
      {/* Subtle ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, var(--color-accent-soft), transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-3xl">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs font-medium"
            style={{
              background: "var(--color-success-soft)",
              border: "1px solid",
              borderColor: "color-mix(in srgb, var(--color-success) 25%, transparent)",
              color: "var(--color-success)",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--color-success)" }}
            />
            {PERSONAL.statusBadge}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          style={{ lineHeight: 1.1, letterSpacing: "-0.03em" }}
        >
          {PERSONAL.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          className="mb-10 max-w-xl text-lg leading-relaxed sm:text-xl"
          style={{ color: "var(--color-text-muted)" }}
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="mb-10 flex flex-wrap gap-3">
          <button
            className="btn-primary"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ExternalLink size={16} />
            View Projects
          </button>
          <a
            href={PERSONAL.resumeUrl}
            download="Kunal_Prasad_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.5)} className="flex items-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent-border)";
                e.currentTarget.style.color = "var(--color-accent)";
                e.currentTarget.style.background = "var(--color-accent-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.color = "var(--color-text-muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span
          className="font-mono text-[10px] uppercase tracking-widest"
          style={{ color: "var(--color-text-muted)" }}
        >
          Scroll
        </span>
        <ArrowDown size={14} style={{ color: "var(--color-text-muted)" }} />
      </motion.div>
    </section>
  );
}
