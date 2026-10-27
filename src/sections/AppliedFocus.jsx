import { APPLIED_FOCUS } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import ScrollReveal from "../components/ScrollReveal";

const STATUS_MAP = {
  used: { label: "Applied", variant: "accent" },
  in_progress: { label: "In progress", variant: "neutral" },
  completed: { label: "Completed", variant: "success" },
  focus: { label: "Topic focus", variant: "accent" },
};

export default function AppliedFocus() {
  return (
    <Section id="applied-focus">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Practice & Credentials"
          title="What I am practising"
          description="SQL depth next; spreadsheet work and cloud foundations already in the projects and certificates below."
        />
      </ScrollReveal>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {APPLIED_FOCUS.map((item, idx) => {
          const cfg = STATUS_MAP[item.status];

          return (
            <ScrollReveal key={item.label} variant="scaleIn" delay={idx * 0.08}>
              <Card className="h-full p-5 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="font-mono text-xs text-[var(--accent-text)]">0{idx + 1}</span>
                  <Badge variant={cfg.variant}>{cfg.label}</Badge>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
