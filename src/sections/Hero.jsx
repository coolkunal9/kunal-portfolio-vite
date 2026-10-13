import { motion } from "framer-motion";
import { ArrowDown, Mail, Download, CheckCircle2 } from "lucide-react";
import { PERSONAL } from "../data/content";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { Github, Linkedin } from "../components/ui/Icons";
import avatarImg from "../assets/avatar.png";

export default function Hero() {
  const socials = [
    { icon: Github, label: "GitHub", href: PERSONAL.github },
    { icon: Linkedin, label: "LinkedIn", href: PERSONAL.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${PERSONAL.email}` },
  ];

  return (
    <Section id="hero" className="pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Bio Column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start lg:col-span-8"
        >
          {/* Status Badge */}
          <Badge variant="neutral" dot className="mb-6">
            {PERSONAL.statusBadge} &bull; {PERSONAL.location}
          </Badge>

          {/* Name & Title */}
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            {PERSONAL.name}
          </h1>

          <p className="mt-3 text-lg font-medium text-[var(--accent-text)] sm:text-xl">
            {PERSONAL.tagline}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {PERSONAL.bio}
          </p>

          {/* Factual Proof Chips (Only these 3 verified stats) */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {PERSONAL.proofChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-3 py-1 font-mono text-xs font-medium text-[var(--text-primary)]"
              >
                <CheckCircle2 size={13} className="text-[var(--color-success)]" />
                <span>{chip}</span>
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary" icon={ArrowDown} iconPosition="right">
              View Work
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
            <Button
              href={PERSONAL.resumeUrl}
              download="Kunal_Prasad_Resume.pdf"
              variant="outline"
              icon={Download}
            >
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <item.icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Avatar Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:col-span-4 lg:justify-end"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2">
            <img
              src={avatarImg}
              alt="Kunal Prasad — Portrait"
              width="256"
              height="256"
              loading="eager"
              className="h-56 w-56 rounded-xl object-cover sm:h-64 sm:w-64"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
