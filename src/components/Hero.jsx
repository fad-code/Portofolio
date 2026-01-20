import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const header = document.querySelector("header");
    const offset = (header?.offsetHeight || 0) + 16; // buffer
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4
                 bg-gradient-to-br from-pink-100 via-white to-pink-200
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800
                 transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* background glow */}
      <motion.div
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem]
                   rounded-full bg-pink-200 dark:bg-pink-900 blur-3xl opacity-25 pointer-events-none"
        initial={{ scale: 0.9, opacity: 0.15 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1, delay: 0.15 }}
      />

      {/* heading */}
      <motion.h1
        className="relative z-10 font-bold leading-tight tracking-tight
                   text-[clamp(2.5rem,6vw,4.5rem)] mb-4 text-gray-900 dark:text-white"
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I’m{" "}
        <span className="text-pink-600 dark:text-pink-400 drop-shadow-[0_2px_10px_rgba(236,72,153,0.25)]">
          Fadhil
        </span>
      </motion.h1>

      {/* subheading */}
      <motion.p
        className="relative z-10 text-[clamp(1.1rem,2.3vw,1.4rem)]
                   font-semibold text-gray-900 dark:text-gray-100
                   max-w-3xl leading-snug mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        Frontend Developer for Website & UI Fixes
      </motion.p>

      {/* description */}
      <motion.p
        className="relative z-10 text-[clamp(1rem,2vw,1.2rem)]
                   text-gray-600 dark:text-gray-400
                   max-w-3xl leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        I build fast, responsive websites for brands and small businesses —
        and clean up UI issues so your site looks great on every device.
      </motion.p>

      {/* micro proof */}
      <motion.p
        className="relative z-10 text-sm md:text-base
                   text-gray-500 dark:text-gray-400
                   max-w-3xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
      >
        Built with <span className="font-semibold text-gray-700 dark:text-gray-200">Next.js</span>,{" "}
        <span className="font-semibold text-gray-700 dark:text-gray-200">React</span>,{" "}
        and <span className="font-semibold text-gray-700 dark:text-gray-200">Tailwind CSS</span>.
      </motion.p>

      {/* CTA */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <motion.a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#projects");
          }}
          className="inline-flex items-center justify-center gap-2
                     rounded-2xl bg-gradient-to-r from-pink-600 to-pink-500
                     text-white font-semibold text-[clamp(1rem,1.4vw,1.15rem)]
                     px-8 md:px-10 py-3.5 md:py-4 shadow-lg
                     hover:from-pink-700 hover:to-pink-600
                     transition-all duration-300
                     focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-600"
          whileHover={{
            scale: 1.06,
            boxShadow: "0px 12px 36px rgba(236,72,153,0.28)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          View My Work
        </motion.a>

        <motion.a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#contact");
          }}
          className="inline-flex items-center justify-center
                     rounded-2xl bg-white/70 dark:bg-white/10
                     border border-gray-200 dark:border-white/15
                     text-gray-900 dark:text-white font-semibold
                     text-[clamp(1rem,1.4vw,1.15rem)]
                     px-8 md:px-10 py-3.5 md:py-4
                     hover:bg-white/90 dark:hover:bg-white/15
                     transition-all duration-300
                     focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-700"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact
        </motion.a>
      </div>
    </motion.section>
  );
}
