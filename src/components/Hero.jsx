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
      className="h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-pink-600 dark:text-pink-400">Fadhil</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate Frontend Developer crafting beautiful and functional web experiences using React & Tailwind CSS.
      </motion.p>

      
      <motion.a
        href="#projects"
        onClick={(e) => {
          e.preventDefault(); 
          scrollToSection("#projects"); 
        }}
        className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition-all duration-300 ease-in-out dark:bg-pink-400 dark:hover:bg-pink-500"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 8px 20px rgba(236, 72, 153, 0.5)", 
        }}
        whileTap={{
          scale: 0.9,
          rotate: -3,
          transition: { type: "spring", stiffness: 300 },
        }}
      >
        View My Work
      </motion.a>
    </motion.section>
  );
}
