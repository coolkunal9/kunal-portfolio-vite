import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import TechMarquee from "./components/layout/TechMarquee";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import CaseStudy from "./sections/CaseStudy";
import AppliedFocus from "./sections/AppliedFocus";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      {/* Accessible skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />
      <ScrollProgress />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <CaseStudy />
        <AppliedFocus />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
