import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Travel Journal",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "https://travelmania-eight.vercel.app/",
  },
  {
    title: "Chef AI",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    link: "https://chefku.vercel.app/",
  },
  {
    title: "Vans Rental",
    img: "/pictures/van.png",
    link: "https://vanku.vercel.app/",
  },
  {
    title: "Twitt",
    img: "/pictures/frenki.jpg",
    link: "https://twitt-lac.vercel.app/",
  },
  {
    title: "Jimmy Burger",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    link: "https://order-kuy.vercel.app/",
  },
  {
    title: "Mental Journey",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "https://mental-journey.netlify.app/",
  },
];

export default function Projects() {
  // Always show 3 cards
  const [center, setCenter] = useState(1); // middle index of visible window

  const clamp = (n) => {
    if (n < 0) return projects.length - 1;
    if (n >= projects.length) return 0;
    return n;
  };

  const prev = () => setCenter((c) => clamp(c - 1));
  const next = () => setCenter((c) => clamp(c + 1));

  // Swipe support
  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Get 3 indices centered at `center`
  const getWindow = () => {
    // [left, center, right]
    if (projects.length < 3) return projects.map((_, i) => i);
    const l = (center - 1 + projects.length) % projects.length;
    const c = center % projects.length;
    const r = (center + 1) % projects.length;
    return [l, c, r];
  };

  const windowIdx = getWindow();

  return (
    <section id="projects" className="py-16 px-4 sm:px-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="w-full flex items-center justify-center relative">
        {/* Left button */}
        <button
          className="z-10 bg-white/80 dark:bg-gray-700/80 rounded-full p-2 shadow hover:bg-pink-100 hover:scale-110 transition absolute left-0 top-1/2 -translate-y-1/2"
          onClick={prev}
          aria-label="Previous"
        >
          <ArrowLeft className="w-5 h-5 text-pink-500" />
        </button>

        {/* Cards */}
        <div
          className="flex w-full max-w-5xl justify-center items-center gap-6 select-none"
          {...handlers}
        >
          {windowIdx.map((idx, i) => (
            <motion.div
              key={idx}
              className={`bg-white dark:bg-gray-700 rounded-2xl shadow-2xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                i === 1 ? "scale-105 z-20" : "scale-95 opacity-70 z-10"
              }`}
              style={{
                width: "340px",
                minHeight: "400px",
                pointerEvents: i === 1 ? "auto" : "none",
              }}
              whileHover={i === 1 ? { scale: 1.07 } : {}}
            >
              <img
                src={projects[idx].img}
                alt={projects[idx].title}
                className="w-full h-48 object-cover"
                draggable={false}
              />
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">{projects[idx].title}</h3>
                <a
                  href={projects[idx].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right button */}
        <button
          className="z-10 bg-white/80 dark:bg-gray-700/80 rounded-full p-2 shadow hover:bg-pink-100 hover:scale-110 transition absolute right-0 top-1/2 -translate-y-1/2"
          onClick={next}
          aria-label="Next"
        >
          <ArrowRight className="w-5 h-5 text-pink-500" />
        </button>
      </div>
      {/* Dots */}
      <div className="flex space-x-2 mt-8 justify-center">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-6 rounded-full ${idx === center ? "bg-pink-600" : "bg-gray-300 dark:bg-gray-600"}`}
            onClick={() => setCenter(idx)}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
