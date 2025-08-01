import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Make Mama Life Softer?
        </h2>

        <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
          Whether you're nursing, hustling, praying, or just trying to catch your breath — <br className="hidden sm:inline" />
          MamaBot is your all-in-one companion. Made by mamas, for mamas. 💙
        </p>

        <a
          href="/signup"
          className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-blue-100 transition-all duration-300"
        >
          Get Started Now
        </a>
      </motion.div>
    </section>
  );
}
