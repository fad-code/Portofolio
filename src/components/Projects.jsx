import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Travel Booking App", img: "https://via.placeholder.com/400", link: "#" },
    { title: "Recipe Generator", img: "https://via.placeholder.com/400", link: "#" },
    { title: "Portfolio Website", img: "https://via.placeholder.com/400", link: "#" },
  ];

  return (
    <section id="projects" className="py-16 px-8 bg-gray-100 dark:bg-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <a href={project.link} className="text-pink-600 hover:underline mt-2 block">View Project</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
