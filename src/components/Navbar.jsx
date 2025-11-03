// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const navRef = useRef(null);
  const [navH, setNavH] = useState(72); // fallback default

  // ukur tinggi navbar saat mount & saat resize
  useEffect(() => {
    const measure = () => {
      const h = navRef.current?.offsetHeight ?? 72;
      setNavH(h);
      // opsional: expose sebagai CSS var
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (!el) return;
    const y =
      el.getBoundingClientRect().top + window.scrollY - (navH + 16); // buffer 16px
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const links = [
    { id: "#projects", label: "Projects" },
    { id: "#skills", label: "Skills" },
    { id: "#contact", label: "Contact" },
  ];

  // highlight aktif berdasarkan posisi scroll + offset nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // state "hero" saat masih di atas
      const hero = document.querySelector("#hero");
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        if (scrollY + navH + 60 < heroBottom) {
          setActiveLink("#hero");
        }
      }

      // deteksi setiap section
      for (const link of links) {
        const sec = document.querySelector(link.id);
        if (!sec) continue;
        const top = sec.offsetTop - (navH + 80);
        const bottom = top + sec.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveLink(link.id);
          break;
        }
      }
    };

    handleScroll(); // sync awal
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navH]);

  return (
    <motion.nav
      ref={navRef}
      className="flex justify-between items-center px-6 md:px-12 py-2 fixed w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg z-50 border-b border-pink-100/60 dark:border-neutral-800"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-xl md:text-2xl font-bold text-pink-600 dark:text-pink-400 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
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
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.06 }}
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
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "Light" : "Dark"}
      </motion.button>
    </motion.nav>
  );
}
