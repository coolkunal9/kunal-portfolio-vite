import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import ScrollReveal from "../../components/ScrollReveal";
import { CONTACT_COPY } from "../../data/content";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact">
      <ScrollReveal>
        <SectionHeading
          eyebrow={CONTACT_COPY.eyebrow}
          title={CONTACT_COPY.heading}
          titleClassName="contact-display"
          description={CONTACT_COPY.description}
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <ScrollReveal delay={0.1} className="lg:col-span-5">
          <ContactInfo />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="lg:col-span-7">
          <ContactForm />
        </ScrollReveal>
      </div>
    </Section>
  );
}
