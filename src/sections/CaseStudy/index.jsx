import { CASE_STUDY } from "../../data/content";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import ScrollReveal from "../../components/ScrollReveal";
import CaseStudyCleaning from "./CaseStudyCleaning";
import CaseStudyFindings from "./CaseStudyFindings";
import CaseStudyMeta from "./CaseStudyMeta";
import DashboardCharts from "./DashboardCharts";
import Card from "../../components/ui/Card";
import { Search } from "lucide-react";

export default function CaseStudy() {
  const cs = CASE_STUDY;

  return (
    <Section id="case-study">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Analytical Case Study"
          title={cs.title}
          description={cs.subtitle}
        />
      </ScrollReveal>

      <div className="space-y-6">
        <ScrollReveal delay={0.08}>
          <Card className="border-[var(--accent-border)] bg-[var(--accent-subtle)] p-5 sm:p-6">
            <div className="mb-2 flex items-center gap-2">
              <Search size={16} className="text-[var(--accent-text)]" aria-hidden="true" />
              <h3 className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-text)]">Business question</h3>
            </div>
            <p className="text-lg font-medium leading-snug text-[var(--text-primary)] sm:text-xl">{cs.businessQuestion}</p>
          </Card>
        </ScrollReveal>

        <DashboardCharts />
        <p className="text-xs leading-relaxed text-[var(--text-tertiary)]">{cs.dataOverview.source}</p>
        <CaseStudyCleaning />
        <CaseStudyFindings />
        <CaseStudyMeta />
      </div>
    </Section>
  );
}
