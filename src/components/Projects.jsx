import { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
<<<<<<< HEAD
import { ArrowLeft, ArrowRight, Bot, ChefHat, Car, Shirt } from "lucide-react"; 
// ↑ nambah icon "Shirt" buat fashion look

// === 4 PROYEK UTAMA (semi–case study copy) ===
=======
import {
  ArrowLeft,
  ArrowRight,
  Plane,
  Languages,
  Bot,
  Clapperboard,
  Map,
  ChefHat,
  Car,
  Bird,
  Sandwich,
  Brain,
} from "lucide-react";

>>>>>>> 569b4ed7ec7c6e954b373d97f2c0548979f4a365
const projects = [
  {
    title: "Kamar Merona",
    icon: () => (
      <div className="relative flex items-center justify-center w-32 h-32">
<<<<<<< HEAD
        <div className="absolute inset-0 rounded-full bg-pink-100/70 blur-md" />
        <div className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-white font-serif text-lg shadow-lg">
          <Shirt className="w-14 h-14 text-white" />
=======
        <div className="absolute inset-0 rounded-full bg-pink-200/50 blur-md" />
        <div className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-white font-serif text-lg shadow-lg">
          KM
>>>>>>> 569b4ed7ec7c6e954b373d97f2c0548979f4a365
        </div>
      </div>
    ),
    link: "https://kamarmerona.vercel.app/",
<<<<<<< HEAD
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
=======
    desc: "My own business website (still on progress).",
  },
  {
    title: "Google Flight Imitate",
    icon: Plane,
    link: "https://flights-hazel.vercel.app/",
    desc: "Flight search UI inspired by Google Flights with airports, dates, and crisp results.",
  },
  {
    title: "Translator",
    icon: Languages,
    link: "https://polly-kappa-ten.vercel.app/",
    desc: "Minimal translator with clean UX and instant feedback for smooth multi-language flow.",
>>>>>>> 569b4ed7ec7c6e954b373d97f2c0548979f4a365
  },
  {
    title: "Travel AI",
    icon: Bot,
    link: "https://jet-set-kitty.vercel.app/",
<<<<<<< HEAD
    desc:
      "Trip ideation assistant that proposes cities, POIs, and day plans for fast, fun itineraries.",
=======
    desc: "Trip brainstormer that suggests places, plans, and vibes for fast, fun itineraries.",
  },
  {
    title: "Movie Recommendation App",
    icon: Clapperboard,
    link: "https://movie-mania-ten-delta.vercel.app/",
    desc: "Tell it your mood and era; get film picks with posters and quick summaries.",
  },
  {
    title: "Travel Journal",
    icon: Map,
    link: "https://travelmania-eight.vercel.app/",
    desc: "A tidy travel diary to log trips, photos, and memories with a mobile-first layout.",
  },
  {
    title: "Chef AI",
    icon: ChefHat,
    link: "https://chefku.vercel.app/",
    desc: "Turn ingredients into recipes—fast, friendly, and tasty.",
  },
  {
    title: "Vans Rental",
    icon: Car,
    link: "https://vanku.vercel.app/",
    desc: "Browse and book vans with clear pricing, filters, and smooth checkout.",
  },
  {
    title: "Twitt",
    icon: Bird,
    link: "https://twitt-lac.vercel.app/",
    desc: "Playful microblog UI: compose, feed, and interactions with a snappy feel.",
  },
  {
    title: "Jimmy Burger",
    icon: Sandwich,
    link: "https://order-kuy.vercel.app/",
    desc: "Food ordering flow—menu, cart, and checkout designed for speed and clarity.",
  },
  {
    title: "Mental Journey",
    icon: Brain,
    link: "https://mental-journey.netlify.app/",
    desc: "Reflective writing space with gentle typography to track thoughts and progress.",
>>>>>>> 569b4ed7ec7c6e954b373d97f2c0548979f4a365
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
<<<<<<< HEAD
            const cta = projects[idx].ctaLabel || "View Project";
=======
>>>>>>> 569b4ed7ec7c6e954b373d97f2c0548979f4a365
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
<<<<<<< HEAD

=======
>>>>>>> 569b4ed7ec7c6e954b373d97f2c0548979f4a365
                  <a
                    href={projects[idx].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-pink-700 hover:scale-105 hover:shadow-pink-400/50 transition-all focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-600"
                  >
<<<<<<< HEAD
                    {cta}
=======
                    View Project
>>>>>>> 569b4ed7ec7c6e954b373d97f2c0548979f4a365
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
<<<<<<< HEAD
=======


>>>>>>> 569b4ed7ec7c6e954b373d97f2c0548979f4a365
