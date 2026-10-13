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
          description="Frontend, data analytics, and backend technologies."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.groups.map((group, idx) => (
          <ScrollReveal key={group.title} delay={idx * 0.08}>
            <Card className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
                  {group.title}
                </h3>

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
