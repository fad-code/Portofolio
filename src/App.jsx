import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-hidden font-inter">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-200 via-white to-pink-100 animate-gradient -z-10 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
