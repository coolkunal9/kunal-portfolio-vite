import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import ScrollReveal from "../../components/ScrollReveal";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact & Availability"
          description="Open to entry-level Frontend Developer and Data Analyst roles in Jaipur, India or remote."
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
