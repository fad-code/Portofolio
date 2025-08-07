import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 
        bg-gradient-to-br from-pink-100 via-white to-pink-200 
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Subtle glow, visible in both modes */}
      <motion.div
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full
          bg-pink-200 dark:bg-pink-900 blur-3xl opacity-25 pointer-events-none"
        initial={{ scale: 0.8, opacity: 0.15 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1.1, delay: 0.2 }}
      />

      <motion.h1
        className="relative z-10 text-4xl md:text-6xl font-bold mb-5"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="relative text-pink-600 dark:text-pink-400 drop-shadow-[0_2px_10px_rgba(236,72,153,0.25)]">Fadhil</span>
      </motion.h1>

      <motion.p
        className="relative z-10 text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Frontend Developer passionate about building intuitive digital experiences.
      </motion.p>

      <motion.a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("#projects");
        }}
        className="relative z-10 mt-2 px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-semibold rounded-xl shadow-lg
          hover:from-pink-700 hover:to-pink-500 dark:from-pink-500 dark:to-pink-600 dark:hover:from-pink-400 dark:hover:to-pink-700
          transition-all duration-300"
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 8px 32px 0px rgba(236,72,153,0.24)",
        }}
        whileTap={{
          scale: 0.96,
          rotate: -2,
          transition: { type: "spring", stiffness: 400 },
        }}
      >
        View My Work
      </motion.a>
    </motion.section>
  );
}
