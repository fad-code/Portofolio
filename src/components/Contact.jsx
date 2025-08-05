import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-16 px-8 bg-gray-100 dark:bg-gray-800 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Let's work together! Reach me at:</p>
      <motion.a
        href="mfadhilah29@gmail.com"
        className="text-pink-600 font-semibold text-lg hover:underline"
        whileHover={{ scale: 1.1 }}
      >
        mfadhilah29@gmail.com
      </motion.a>
    </motion.section>
  );
}
