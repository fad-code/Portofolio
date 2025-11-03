import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    icon: Mail,
    value: "mfadhilah29@gmail.com",
    color: "text-pink-600",
  },
  {
    label: "GitHub",
    href: "https://github.com/fad-code",
    icon: Github,
    value: "github.com/fad-code",
    color: "text-gray-800 dark:text-gray-200",
  },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 bg-gray-100 dark:bg-gray-800 text-center min-h-[70vh] flex flex-col justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        Contact Me
      </motion.h2>
      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-14 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        Let’s work together! Reach me here:
      </motion.p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-7">
        {contacts.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 px-8 py-6 bg-white dark:bg-gray-900/90 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105
                border border-gray-200 dark:border-gray-700 hover:bg-pink-50/40 dark:hover:bg-pink-950/30
              `}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.13, duration: 0.6 }}
            >
              <Icon className={`w-7 h-7 shrink-0 ${item.color} group-hover:text-pink-600 transition`} />
              <span className="font-semibold text-base md:text-lg text-gray-800 dark:text-gray-200 group-hover:text-pink-600 transition-all">
                {item.value}
              </span>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}
