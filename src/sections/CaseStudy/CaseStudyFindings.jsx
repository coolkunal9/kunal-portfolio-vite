import { CASE_STUDY } from "../../data/content";
import Card from "../../components/ui/Card";
import ScrollReveal from "../../components/ScrollReveal";
import { BarChart3, Lightbulb, AlertTriangle } from "lucide-react";

export default function CaseStudyFindings() {
  const cs = CASE_STUDY;

  return (
    <div className="space-y-6">
      {/* Findings Grid */}
      <ScrollReveal delay={0.25}>
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 size={16} className="text-[var(--accent-text)]" />
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
            Key Analytical Findings (with Sample-Size Caveats)
          </h3>
        </div>

        {cs.findingsCaveat && (
          <p className="mb-4 text-xs text-[var(--text-tertiary)] italic">
            {cs.findingsCaveat}
          </p>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cs.keyFindings.map((item, idx) => (
            <Card key={idx} className="p-4 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[var(--accent-text)] block mb-1.5">
                  {item.metric}
                </span>
                <p className="text-xs font-medium leading-relaxed text-[var(--text-primary)]">
                  {item.detail}
                </p>
              </div>
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
              Staged Recommendation
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-primary)] font-medium">
            {cs.recommendation}
          </p>
        </Card>
      </ScrollReveal>
    </div>
  );
}
