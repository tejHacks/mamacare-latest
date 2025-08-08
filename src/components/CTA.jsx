import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#44005a] text-[#FDFDFD] py-20 px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-lora mb-6 leading-tight">
          Ready to Embrace Motherhood with Ease?
        </h2>

        <p className="text-lg md:text-xl mb-8 text-[#F8E1E1] font-poppins leading-relaxed">
          Whether you’re nursing your little one, juggling a busy day, or cherishing quiet moments, MamaCare is your loving companion. Crafted with care for every mama’s journey.
        </p>

        <a
          href="/signup"
          className="bg-[#D4A017] text-[#FDFDFD] font-poppins-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-[#E8B923] transition-all duration-300"
        >
          Start Your Journey Today
        </a>
      </motion.div>
    </motion.section>
  );
}