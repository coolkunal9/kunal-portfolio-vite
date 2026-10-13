import ScrollReveal from "../components/ScrollReveal";
import { LEARNING_ROADMAP } from "../data/content";
import { CircleDot, Circle, CheckCircle2 } from "lucide-react";

const STATUS_CONFIG = {
  "in-progress": {
    label: "In progress",
    color: "var(--color-accent)",
    bg: "var(--color-accent-soft)",
    border: "var(--color-accent-border)",
    Icon: CircleDot,
  },
  next: {
    label: "Next",
    color: "var(--color-text-muted)",
    bg: "var(--color-surface)",
    border: "var(--color-border)",
    Icon: Circle,
  },
  planned: {
    label: "Planned",
    color: "var(--color-text-muted)",
    bg: "var(--color-surface)",
    border: "var(--color-border)",
    Icon: Circle,
  },
  completed: {
    label: "Completed",
    color: "var(--color-success)",
    bg: "var(--color-success-soft)",
    border: "color-mix(in srgb, var(--color-success) 25%, transparent)",
    Icon: CheckCircle2,
  },
};

export default function LearningRoadmap() {
  return (
    <section id="roadmap" className="section">
      <ScrollReveal>
        <p className="section-label">Roadmap</p>
        <h2 className="section-title">What I'm learning</h2>
        <p className="section-desc">
          An honest timeline of what I'm studying next. I'm interested in data
          analytics and data science but have no DS projects yet — this is my
          path to get there.
        </p>
      </ScrollReveal>

      <div className="flex flex-col gap-4">
        {LEARNING_ROADMAP.map((item, i) => {
          const config = STATUS_CONFIG[item.status];
          const Icon = config.Icon;

          return (
            <ScrollReveal key={item.label} delay={i * 0.08}>
              <div className="flex gap-4">
                {/* Timeline connector */}
                <div className="flex flex-col items-center pt-1">
                  <Icon
                    size={18}
                    style={{ color: config.color, flexShrink: 0 }}
                  />
                  {i < LEARNING_ROADMAP.length - 1 && (
                    <div
                      className="mt-2 w-px flex-1"
                      style={{ background: "var(--color-border)" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className="card mb-2 flex-1 rounded-xl p-4"
                  style={{ background: "var(--color-surface)" }}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-sm font-semibold">{item.label}</h3>
                    <span
                      className="rounded-full px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider"
                      style={{
                        color: config.color,
                        background: config.bg,
                        border: `1px solid ${config.border}`,
                      }}
                    >
                      {config.label}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
