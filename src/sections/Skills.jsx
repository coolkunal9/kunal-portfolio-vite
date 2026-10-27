import { SKILLS } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import ScrollReveal from "../components/ScrollReveal";

function SpotlightCard({ group, index }) {
  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const spotlight = event.currentTarget.querySelector(".skill-spotlight");
    if (!spotlight) return;
    spotlight.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    spotlight.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <Card
      as="article"
      onPointerMove={handlePointerMove}
      className="skill-bento-card relative h-full min-h-72 overflow-hidden border-[var(--border-strong)] p-5 sm:p-7"
    >
      <div className="skill-spotlight" aria-hidden="true" />
      <div className="relative z-10">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-xs text-[var(--accent-text)]">0{index + 1}</span>
          <span className="h-px w-10 bg-[var(--accent-border)]" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">{group.title}</h3>
        <div className="mt-6 space-y-6">
          {group.sections.map((section) => (
            <div key={section.label}>
              <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                {section.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {section.items.map((skill) => <Tag key={skill} label={skill} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

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

      <ScrollReveal variant="stagger" className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
        {SKILLS.groups.map((group, index) => (
          <SpotlightCard key={group.title} group={group} index={index} />
        ))}
      </ScrollReveal>
    </Section>
  );
}
