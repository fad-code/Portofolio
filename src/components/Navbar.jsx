import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const links = [
    { id: "#projects", label: "Projects" },
    { id: "#skills", label: "Skills" },
    { id: "#contact", label: "Contact" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hero = document.querySelector("#hero");
      const sections = links.map((link) => document.querySelector(link.id));

      if (hero && scrollPosition < hero.offsetHeight - 200) {
        setActiveLink("#hero");
      }

      sections.forEach((section, index) => {
        if (
          section &&
          scrollPosition >= section.offsetTop - 150 &&
          scrollPosition < section.offsetTop + section.offsetHeight - 150
        ) {
          setActiveLink(links[index].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="flex justify-between items-center px-6 md:px-12 py-2 fixed w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-xl md:text-2xl font-bold text-pink-600 dark:text-pink-400 cursor-pointer"
        onClick={() => {
          setActiveLink("#hero");
          scrollToSection("#hero");
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Portfolio
      </motion.h1>

      
      <ul className="hidden md:flex gap-8 text-gray-700 font-semibold dark:text-gray-200">
        {links.map((link) => (
          <motion.li
            key={link.id}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href={link.id}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link.id);
                scrollToSection(link.id);
              }}
              className={`transition-colors duration-300 ${
                activeLink === link.id
                  ? "text-pink-600 dark:text-pink-400 border-b-2 border-pink-600 pb-1"
                  : "hover:text-pink-600 dark:hover:text-pink-400"
              }`}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.button
        onClick={toggleDarkMode}
        className="ml-4 px-4 py-2 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 dark:bg-pink-400 dark:hover:bg-pink-500 transition"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {darkMode ? "Light" : "Dark"}
      </motion.button>
    </motion.nav>
  );
}
