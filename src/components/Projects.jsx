// src/components/Projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ArrowLeft, ArrowRight, ChefHat, Car, Shirt, Plane } from "lucide-react";

function ProjectVisual({ project }) {
  const Icon = project.icon;

  if (project.image) {
    return (
      <div className="w-full h-full p-5">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="rounded-2xl bg-pink-50 dark:bg-pink-500/10 p-10 border border-black/5 dark:border-white/10">
        <Icon className="w-28 h-28 text-pink-600 dark:text-pink-400" />
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Nibiru",
    icon: Shirt,
    image: "/pictures/nibiru.png",
    link: "https://nibiru-rouge.vercel.app/",
    ctaLabel: "Open Website",
    stack: "Next.js • Tailwind • Responsive UI",
    desc:
      "E-commerce site with an interactive dress-up game experience — playful UI, mobile-first layout, and clean product browsing.",
    highlights: ["E-commerce UI", "Interactive game page", "Mobile-first"],
  },
  {
    title: "Garuda (Flight Booking)",
    icon: Plane,
    image: "/pictures/garuda.png",
    link: "https://github.com/fad-code/garuda",
    ctaLabel: "View GitHub",
    stack: "Laravel • PHP • Payment Gateway",
    desc:
      "Flight booking web app with a full booking flow and payment gateway integration — built with Laravel & PHP for real transaction scenarios.",
    highlights: ["Booking flow", "Payment integration", "Laravel structure"],
  },
  {
    title: "Kamar Merona",
    icon: Shirt,
    image: "/pictures/kamar-merona.png",
    link: "https://kamarmerona.vercel.app/",
    ctaLabel: "Open Website",
    stack: "Next.js • Tailwind • UI Polish",
    desc:
      "Feminine fashion brand website — fast, responsive layout with clean product cards and consistent brand styling.",
    highlights: ["Landing page", "Product listing", "Responsive layout"],
  },
  {
    title: "Vans Rental",
    icon: Car,
    image: "/pictures/van.png",
    link: "https://vanku.vercel.app/",
    ctaLabel: "View Project",
    stack: "React • UI Flow",
    desc:
      "Browse & book vans with clear pricing, filters, and a conversion-friendly checkout flow.",
    highlights: ["Filters", "Pricing UI", "Checkout flow"],
  },
  {
    title: "Chef AI",
    icon: ChefHat,
    image: "/pictures/chefku.png",
    link: "https://chefku.vercel.app/",
    ctaLabel: "View Project",
    stack: "React • Prompt UI",
    desc:
      "Type ingredients → get recipes. Pantry-first suggestions, steps, and quick tips for home cooks.",
    highlights: ["Prompt UI", "Recipe output", "Simple UX"],
  },
];


export default function Projects() {
  const [center, setCenter] = useState(0);

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
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Projects</h2>

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
            const p = projects[idx];
            const cta = p.ctaLabel || "View Project";

            const chips = (p.highlights || []).slice(0, 3);
            const remaining = (p.highlights?.length || 0) - chips.length;

            return (
              <motion.article
                key={idx}
                className={`bg-white dark:bg-gray-700 rounded-3xl shadow-2xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  i === 1 ? "scale-105 z-20" : "scale-95 opacity-85 z-10"
                }`}
                style={{
                  width: "420px",
                  height: "580px",
                  pointerEvents: i === 1 ? "auto" : "none",
                }}
                whileHover={i === 1 ? { scale: 1.07 } : {}}
              >
                {/* Top visual (dipendekin biar ruang bawah nambah) */}
                <div className="h-[260px]">
                  <ProjectVisual project={p} />
                </div>

                {/* Bottom content (tambah padding bawah) */}
                <div className="flex-1 flex flex-col p-6 pb-12 text-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1">{p.title}</h3>

                    {p.stack && (
                      <p className="text-xs sm:text-sm font-semibold text-pink-600 dark:text-pink-300 mb-3">
                        {p.stack}
                      </p>
                    )}

                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug mx-auto max-w-[44ch] max-h-[3.6rem] overflow-hidden">
                      {p.desc}
                    </p>

                    {(p.highlights?.length || 0) > 0 ? (
                      <div className="mt-5 mb-7 flex flex-wrap gap-2 justify-center max-h-[4.2rem] overflow-hidden">
                        {chips.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-black/5 dark:border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                        {remaining > 0 && (
                          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-black/5 dark:border-white/10">
                            +{remaining} more
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="mb-7" />
                    )}
                  </div>

                  {/* Button dinaikin lebih kerasa */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto mb-6 mx-auto inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-pink-700 hover:scale-105 hover:shadow-pink-400/50 transition-all focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-600"
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
