import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import CaseStudy from "./sections/CaseStudy";
import LearningRoadmap from "./sections/LearningRoadmap";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      {/* Accessible skip link for keyboard navigation */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CaseStudy />
        <LearningRoadmap />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}