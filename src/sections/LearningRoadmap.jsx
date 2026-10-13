import { LEARNING_ROADMAP } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import ScrollReveal from "../components/ScrollReveal";

const STATUS_MAP = {
  "in-progress": { label: "In Progress", variant: "success", dot: true },
  next: { label: "Up Next", variant: "accent", dot: false },
  planned: { label: "Planned", variant: "neutral", dot: false },
};

export default function LearningRoadmap() {
  return (
    <Section id="learning">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Continuous Growth"
          title="Learning Roadmap"
          description="Planned technical milestones and practice areas."
        />
      </ScrollReveal>

      <div className="relative border-l border-[var(--border-strong)] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
        {LEARNING_ROADMAP.map((item, idx) => {
          const cfg = STATUS_MAP[item.status] || STATUS_MAP.planned;

          return (
            <ScrollReveal key={`${item.label || item.topic || "step"}-${idx}`} delay={idx * 0.08}>
              <div className="relative">
                {/* Node Bullet */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg-canvas)] bg-[var(--accent-base)]" />

                <Card className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-[var(--text-primary)]">
                      {item.label}
                    </h3>
                    <Badge variant={cfg.variant} dot={cfg.dot}>
                      {cfg.label}
                    </Badge>
                  </div>

                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </Card>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
