import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Mail, Download, ArrowUpRight } from "lucide-react";
import { PERSONAL } from "../data/content";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { Github, Linkedin } from "../components/ui/Icons";
import avatarImg from "../assets/avatar.webp";

const headline = ["I build", "React", "interfaces."];
const metrics = [
  { value: 18, label: "API integration tests", suffix: "" },
  { value: 9551, label: "raw records", suffix: "" },
  { value: 10, label: "state stories", suffix: "" },
];

function CountUp({ value, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }

    const start = performance.now();
    const duration = 1100;
    let frame;
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <>{count.toLocaleString("en-IN")}</>;
}

function MagneticButton({ children, ...props }) {
  const handleMove = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    event.currentTarget.style.transform = `translate3d(${x * 0.12}px, ${y * 0.16}px, 0)`;
  };
  const reset = (event) => {
    event.currentTarget.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <Button
      {...props}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={`hero-magnetic ${props.className || ""}`}
    >
      {children}
    </Button>
  );
}

export default function Hero() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });
  const avatarRef = useRef(null);
  const cursorRef = useRef(null);
  const socials = [
    { icon: Github, label: "GitHub", href: PERSONAL.github },
    { icon: Linkedin, label: "LinkedIn", href: PERSONAL.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${PERSONAL.email}` },
  ];

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (coarse.matches || reduced.matches) return;

    const move = (event) => {
      if (reduced.matches) return;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      if (avatarRef.current) {
        const x = (event.clientX / window.innerWidth - 0.5) * 8;
        const y = (event.clientY / window.innerHeight - 0.5) * 8;
        avatarRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <Section id="hero" className="hero-shell relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div ref={cursorRef} className="hero-cursor" aria-hidden="true" />
      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.12 } } }}
          className="flex flex-col items-start lg:col-span-8"
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70 px-3 py-1.5 font-mono text-[11px] text-[var(--text-secondary)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)]" />
            {PERSONAL.statusBadge}
          </motion.p>

          <h1 className="hero-title font-bold tracking-[-0.065em] text-[var(--text-primary)]">
            {headline.map((word, index) => (
              <span className="block overflow-hidden" key={word}>
                <motion.span
                  className={`inline-block ${index === 2 ? "hero-gradient-text" : ""}`}
                  initial={{ opacity: 0, y: "105%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, delay: 0.22 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-5 flex flex-wrap items-center gap-2 text-lg font-medium sm:text-xl">
            <span className="text-[var(--text-secondary)]">{PERSONAL.name}</span>
            <span className="text-[var(--text-tertiary)]" aria-hidden="true">/</span>
            <span className="text-[var(--accent-text)]">{PERSONAL.role}</span>
          </motion.div>

          <motion.p variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }} className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            I build responsive React interfaces and use spreadsheets and basic SQL to explore data.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton href="#projects" variant="primary" icon={ArrowUpRight} iconPosition="right">Explore my work</MagneticButton>
            <MagneticButton href="#contact" variant="secondary">Get in touch</MagneticButton>
            <MagneticButton href={PERSONAL.resumeUrl} download="Kunal_Prasad_Resume.pdf" variant="outline" icon={Download}>Resume</MagneticButton>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {socials.map((item) => (
              <a key={item.label} href={item.href} target={item.label !== "Email" ? "_blank" : undefined} rel={item.label !== "Email" ? "noopener noreferrer" : undefined} aria-label={item.label} className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]">
                <item.icon size={16} />
              </a>
            ))}
          </div>

          <div ref={statsRef} className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-3 border-t border-[var(--border-subtle)] pt-5 sm:gap-7">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-mono text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                  <CountUp value={metric.value} active={statsInView} />
                  <span className="text-[var(--accent-cyan)]">{metric.suffix}</span>
                </div>
                <p className="mt-1 text-[10px] leading-snug text-[var(--text-tertiary)] sm:text-xs">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:col-span-4 lg:justify-end"
        >
          <div ref={avatarRef} className="hero-avatar-frame relative rounded-[2rem] border border-[var(--border-strong)] bg-[var(--bg-surface)]/70 p-2.5 backdrop-blur-sm">
            <div className="hero-avatar-glow" aria-hidden="true" />
            <img src={avatarImg} alt="Portrait of Kunal Prasad" width="1240" height="1269" loading="eager" fetchPriority="high" className="relative z-10 h-56 w-56 rounded-[1.5rem] object-cover sm:h-72 sm:w-72" />
            <div className="absolute -bottom-4 -left-5 z-20 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-3 py-2 shadow-xl">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-[var(--text-tertiary)]">Focus</span>
              <span className="mt-0.5 block text-xs font-medium text-[var(--text-primary)]">Interfaces · Insights</span>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="hero-scroll-indicator absolute bottom-5 left-1/2 z-10 -translate-x-1/2 items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]" aria-label="Scroll to About section">
        <span>Scroll to explore</span><ArrowDown size={13} />
      </a>
      <div className="sr-only" aria-live="polite">{PERSONAL.proofChips.join(". ")}</div>
    </Section>
  );
}
