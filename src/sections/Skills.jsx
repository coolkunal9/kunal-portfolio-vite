import { SKILLS } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import ScrollReveal from "../components/ScrollReveal";

export default function Skills() {
  return (
    <Section id="skills">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Technologies"
          description="Technical competencies focused on reliable interfaces and rigorous data analysis."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.groups.map((group, idx) => (
          <ScrollReveal key={group.title} delay={idx * 0.08}>
            <Card className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                    {group.isLearning ? "Active" : "Core"}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <Tag key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
