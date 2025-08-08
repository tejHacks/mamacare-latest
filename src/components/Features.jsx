import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Baby Scheduler and Wellness",
    desc: "Keep track of feeding, sleep, doctor visits, and vaccines in one cozy, easy to use dashboard.",
    emoji: "🍼",
  },
  {
    title: "Expense Tracker",
    desc: "Monitor all baby related expenses, from diapers to doctor bills, with simple budgeting tools.",
    emoji: "💰",
  },
  {
    title: "Milestone Logger",
    desc: "Capture every precious first, like steps, giggles, and those adorable messy face moments.",
    emoji: "📸",
  },
  {
    title: "AI Assistant",
    desc: "Ask MamaBot for parenting tips, baby food ideas, teething remedies, or anything on your mind.",
    emoji: "🤖",
  },
  {
    title: "Short Daily Reads",
    desc: "Quick, uplifting reads to keep you informed and inspired during your busy mom days.",
    emoji: "📚",
  },
  {
    title: "Growth Tracker",
    desc: "Follow your baby's growth with clear charts and milestones to ensure healthy development.",
    emoji: "📈",
  },
  {
    title: "Personalized Tips",
    desc: "Get parenting advice tailored to your baby's age and unique needs, just for you.",
    emoji: "✨",
  },
  {
    title: "Emergency Contacts",
    desc: "Store key contacts like pediatricians, family, and emergency services for quick access.",
    emoji: "📞",
  },
  {
    title: "Neonatal Jaundice Predictor",
    desc: "Use our AI powered tool to predict and monitor jaundice levels in your newborn.",
    emoji: "🟡",
  },
  {
    title: "BMI Calculator",
    desc: "Track your baby's growth using standard body mass metrics for peace of mind.",
    emoji: "📏",
  },
  {
    title: "Daily Reminder",
    desc: "Stay on top of feeds, meds, and tasks with gentle, customizable reminders.",
    emoji: "⏰",
  },
  {
    title: "Grocery Tracker",
    desc: "Plan baby meals and keep your shopping list organized with ease.",
    emoji: "🛒",
  },
  {
    title: "Pediatrician Finder",
    desc: "Find trusted pediatricians near you in just a few clicks.",
    emoji: "👩🏾‍⚕️",
  },
  {
    title: "Store",
    desc: "Get baby needs and accessories, from cute toys to essentials, all in one place.",
    emoji: "🧸",
  },
];

const floatAnimation = {
  animate: {
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Features() {
  return (
    <section className="py-24 relative bg-[#2f005d]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#e7dfff] to-[#D4A017] bg-clip-text text-transparent font-[Lora]"
          >
            Tools and Features for Every Mom
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-[#ffffff] max-w-3xl mx-auto font-[Poppins]"
          >
            Everything you need to make motherhood a little easier, all wrapped in love.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                className="bg-gradient-to-br from-[#FDFDFD] via-[#FFF5F5] to-[#F8E1E1] rounded-2xl p-6 border border-[#F8E1E1] hover:border-[#A78BFA] shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  variants={floatAnimation}
                  animate="animate"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="bg-gradient-to-r from-[#A78BFA] to-[#D4A017] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white text-3xl shadow-lg"
                >
                  {feature.emoji || "🌟"}
                </motion.div>

                <h3 className="text-xl font-bold text-[#4A2C5A] mb-2 font-[Lora]">
                  {feature.title}
                </h3>
                <p className="text-[#4A2C5A] text-sm font-[Poppins]">{feature.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Poppins:wght@400;600&display=swap');
      `}</style>
    </section>
  );
}