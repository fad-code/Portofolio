import { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ArrowLeft, ArrowRight, Bot, ChefHat, Car, Shirt } from "lucide-react"; 
// ↑ nambah icon "Shirt" buat fashion look

// === 4 PROYEK UTAMA (semi–case study copy) ===
const projects = [
  {
    title: "Kamar Merona",
    icon: () => (
      <div className="relative flex items-center justify-center w-32 h-32">
        <div className="absolute inset-0 rounded-full bg-pink-100/70 blur-md" />
        <div className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-white font-serif text-lg shadow-lg">
          <Shirt className="w-14 h-14 text-white" />
        </div>
      </div>
    ),
    link: "https://kamarmerona.vercel.app/",
    ctaLabel: "View Project",
    desc:
      "Feminine fashion brand website built with Next.js & Tailwind — elegant, fast, and responsive.",
  },
  {
    title: "Vans Rental",
    icon: Car,
    link: "https://vanku.vercel.app/",
    desc:
      "Browse & book vans with clear pricing, filters, and a conversion-friendly checkout flow.",
  },
  {
    title: "Chef AI",
    icon: ChefHat,
    link: "https://chefku.vercel.app/",
    desc:
      "Type ingredients → get recipes. Pantry-first suggestions, steps, and quick tips for home cooks.",
  },
  {
    title: "Travel AI",
    icon: Bot,
    link: "https://jet-set-kitty.vercel.app/",
    desc:
      "Trip ideation assistant that proposes cities, POIs, and day plans for fast, fun itineraries.",
  },
];

export default function Projects() {
  const [center, setCenter] = useState(1);

  const clamp = (n) => {
    if (n < 0) return projects.length - 1;
    if (n >= projects.length) return 0;
    return n;
  };

  const prev = () => setCenter((c) => clamp(c - 1));
  const next = () => setCenter((c) => clamp(c + 1));

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const getWindow = () => {
    if (projects.length < 3) return projects.map((_, i) => i);
    const l = (center - 1 + projects.length) % projects.length;
    const c = center % projects.length;
    const r = (center + 1) % projects.length;
    return [l, c, r];
  };

  const windowIdx = getWindow();

  return (
    <section
      id="projects"
      className="scroll-mt-28 sm:scroll-mt-32 py-10 px-3 sm:px-4 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Projects</h2>

      <div className="w-full relative">
        <button
          className="hidden sm:flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 dark:bg-gray-700/80 shadow hover:scale-110 transition z-10"
          onClick={prev}
          aria-label="Previous"
        >
          <ArrowLeft className="w-5 h-5 text-pink-500" />
        </button>

        <div
          className="mx-auto w-full max-w-[1440px] flex justify-center items-center gap-6 select-none px-3"
          {...handlers}
        >
          {windowIdx.map((idx, i) => {
            const Icon = projects[idx].icon;
            const cta = projects[idx].ctaLabel || "View Project";
            return (
              <motion.article
                key={idx}
                className={`bg-white dark:bg-gray-700 rounded-3xl shadow-2xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  i === 1 ? "scale-105 z-20" : "scale-95 opacity-85 z-10"
                }`}
                style={{
                  width: "420px",
                  height: "520px",
                  pointerEvents: i === 1 ? "auto" : "none",
                }}
                whileHover={i === 1 ? { scale: 1.08 } : {}}
              >
                <div className="h-[55%] flex items-center justify-center">
                  <div className="rounded-2xl bg-pink-50 dark:bg-pink-500/10 p-8">
                    {typeof Icon === "function" ? (
                      <Icon />
                    ) : (
                      <Icon className="w-32 h-32 text-pink-600 dark:text-pink-400" />
                    )}
                  </div>
                </div>

                <div className="h-[45%] flex flex-col justify-between p-6 text-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                      {projects[idx].title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug max-w-[36ch] mx-auto min-h-[44px]">
                      {projects[idx].desc}
                    </p>
                  </div>

                  <a
                    href={projects[idx].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-pink-700 hover:scale-105 hover:shadow-pink-400/50 transition-all focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-600"
                  >
                    {cta}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <button
          className="hidden sm:flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 dark:bg-gray-700/80 shadow hover:scale-110 transition z-10"
          onClick={next}
          aria-label="Next"
        >
          <ArrowRight className="w-5 h-5 text-pink-500" />
        </button>
      </div>

      <div className="flex space-x-1.5 mt-6 justify-center">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`h-1.5 w-5 rounded-full ${
              idx === center ? "bg-pink-600" : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => setCenter(idx)}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
