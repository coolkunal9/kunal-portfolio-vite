import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import CaseStudy from "./sections/CaseStudy";
import LearningRoadmap from "./sections/LearningRoadmap";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      {/* Skip link for keyboard users */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main>
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