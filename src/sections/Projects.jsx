import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { PROJECTS } from "../data/content";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import ProjectDetailsModal from "../components/ui/ProjectDetailsModal";
import ScrollReveal from "../components/ScrollReveal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="A React application with a tested API, and a structured market screener."
        />
      </ScrollReveal>

      <LayoutGroup id="portfolio-projects">
        <ScrollReveal variant="stagger" className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((proj) => (
            <ProjectCard key={proj.id} project={proj} onOpen={setSelectedProject} />
          ))}
        </ScrollReveal>
        <AnimatePresence initial={false}>
          {selectedProject && (
            <ProjectDetailsModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </Section>
  );
}
