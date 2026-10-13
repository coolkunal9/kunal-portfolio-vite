import { CASE_STUDY } from "../../data/content";
import Card from "../../components/ui/Card";
import Tag from "../../components/ui/Tag";
import ScrollReveal from "../../components/ScrollReveal";
import { Image, ArrowRight } from "lucide-react";

export default function CaseStudyMeta() {
  const cs = CASE_STUDY;

  return (
    <div className="space-y-6">
      {/* Visual Placeholders */}
      <ScrollReveal delay={0.35}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cs.screenshotPlaceholders.map((label, i) => (
            <div
              key={i}
              className="flex h-36 flex-col items-center justify-center gap-2 rounded-[var(--radius-xl)] border border-dashed border-[var(--border-strong)] bg-[var(--bg-surface)] p-4 text-center"
            >
              <Image size={20} className="text-[var(--text-tertiary)]" />
              <span className="font-mono text-xs text-[var(--text-tertiary)]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Tools, Sheet Link, and What Next */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ScrollReveal delay={0.4}>
          <Card className="h-full">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
              Tools Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cs.tools.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <Card className="h-full">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
              Dataset Access
            </h3>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
              {cs.sheetLink}
            </p>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <Card className="h-full">
            <div className="flex items-center gap-1.5 mb-2">
              <ArrowRight size={14} className="text-[var(--accent-text)]" />
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)]">
                Future Extensions
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
              {cs.whatNext}
            </p>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
}
