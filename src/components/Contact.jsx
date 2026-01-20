import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";

const contacts = [
  {
    label: "Email",
    // mailto langsung ke email kamu + subject + body template
    href:
      "mailto:mfadhilah29@gmail.com?subject=Project%20Inquiry%20(Landing%20Page%20/%20UI%20Fix)&body=Hi%20Fadhil%2C%0A%0AI%20need%20help%20with%20...%0A%0ADeadline%3A%20%0ABudget%3A%20%0AReference%20(link/screenshot)%3A%20%0A%0AThanks!",
    icon: Mail,
    value: "mfadhilah29@gmail.com",
    color: "text-pink-600 dark:text-pink-400",
    hint: "Best for project inquiries",
  },
  {
    label: "GitHub",
    href: "https://github.com/fad-code",
    icon: Github,
    value: "github.com/fad-code",
    color: "text-gray-800 dark:text-gray-200",
    hint: "Code & repositories",
  },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="scroll-mt-28 sm:scroll-mt-32 py-24 px-6 bg-gray-100 dark:bg-gray-800 text-center min-h-[70vh] flex flex-col justify-center"
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
        Contact
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-14 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        Available for <span className="font-semibold text-gray-900 dark:text-white">landing pages</span> and{" "}
        <span className="font-semibold text-gray-900 dark:text-white">UI / responsiveness fixes</span>.  
        Feel free to reach out:
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
              className="group w-full md:w-auto min-w-[320px] flex items-center gap-4 px-8 py-6
                         bg-white dark:bg-gray-900/90 rounded-2xl shadow-xl
                         border border-gray-200 dark:border-gray-700
                         hover:shadow-2xl hover:scale-[1.03]
                         hover:bg-pink-50/40 dark:hover:bg-pink-950/30
                         transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.13, duration: 0.6 }}
            >
              <Icon
                className={`w-7 h-7 shrink-0 ${item.color} group-hover:text-pink-600 transition`}
              />

              <div className="text-left">
                <div className="font-semibold text-base md:text-lg text-gray-900 dark:text-gray-100 group-hover:text-pink-600 transition">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.hint}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* small note (optional but helps clients) */}
      <motion.p
        className="mt-10 text-sm text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.7 }}
      >
        Include your deadline + reference (link/screenshot) for the fastest response.
      </motion.p>
    </motion.section>
  );
}
