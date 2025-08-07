import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaRobot } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJson } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 dark:text-white text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white text-5xl" /> },
    { name: "JSON", icon: <SiJson className="text-amber-600 dark:text-yellow-300 text-5xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" /> },
    { name: "AI Tools", icon: <FaRobot className="text-purple-500 text-5xl" /> },
  ];

  return (
    <section id="skills" className="py-16 px-8 bg-gradient-to-b from-white via-pink-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-32 h-32 hover:shadow-xl transition cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          >
            {skill.icon}
            <p className="mt-3 text-gray-700 dark:text-gray-300 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
