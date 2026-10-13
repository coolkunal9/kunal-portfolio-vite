import { CASE_STUDY } from "../../data/content";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import ScrollReveal from "../../components/ScrollReveal";
import CaseStudyCleaning from "./CaseStudyCleaning";
import CaseStudyFindings from "./CaseStudyFindings";
import CaseStudyMeta from "./CaseStudyMeta";

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

      <div className="space-y-8">
        <CaseStudyCleaning />
        <CaseStudyFindings />
        <CaseStudyMeta />
      </div>
    </Section>
  );
}
