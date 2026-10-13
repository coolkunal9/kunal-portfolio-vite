import { CASE_STUDY } from "../../data/content";
import Card from "../../components/ui/Card";
import ScrollReveal from "../../components/ScrollReveal";
import { BarChart3, Lightbulb } from "lucide-react";

export default function CaseStudyFindings() {
  const cs = CASE_STUDY;

  return (
    <div className="space-y-6">
      {/* Findings Grid */}
      <ScrollReveal delay={0.25}>
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 size={16} className="text-[var(--accent-text)]" />
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
            Key Analytical Findings
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cs.keyFindings.map((finding, idx) => (
            <Card key={idx} className="p-4 flex flex-col justify-between">
              <span className="font-mono text-xs font-bold text-[var(--accent-text)] mb-2">
                Metric {idx + 1}
              </span>
              <p className="text-xs font-medium leading-relaxed text-[var(--text-primary)]">
                {finding}
              </p>
            </Card>
          ))}
        </div>
      </ScrollReveal>

      {/* Recommendation Card */}
      <ScrollReveal delay={0.3}>
        <Card className="border-[var(--accent-border)] bg-[var(--accent-subtle)]">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={16} className="text-[var(--accent-text)]" />
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)]">
              Actionable Recommendation
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-primary)]">
            {cs.recommendation}
          </p>
        </Card>
      </ScrollReveal>
    </div>
  );
}
