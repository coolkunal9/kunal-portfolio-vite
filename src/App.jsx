import "./index.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </>
    );
}