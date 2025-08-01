import { motion } from "framer-motion";

const tools = [
  {
    title: "📏 BMI Calculator",
    desc: "Track your baby's growth using standard body mass metrics.",
  },
  {
    title: "🌞 Neonatal Jaundice Checker",
    desc: "Input baby's symptoms & get instant care suggestions.",
  },
  {
    title: "✝️ Scripture Memorizer",
    desc: "Feed your soul with memory verses every day.",
  },
  {
    title: "⏰ Daily Reminder",
    desc: "Stay on top of feeds, meds, tasks, and prayer times.",
  },
  {
    title: "🛒 Grocery Tracker",
    desc: "Plan baby meals and never forget a shopping item again.",
  },
  {
    title: "👩🏾‍⚕️ Pediatrician Finder",
    desc: "Locate trusted pediatricians around you in seconds.",
  },
  {
    title: "🧸 Toy Store Access",
    desc: "Fun and safe toys at your fingertips.",
  },
  {
    title: "👕 Baby Clothing Store",
    desc: "Cute, affordable, and essential clothes in one tap.",
  },
  {
    title: "🎗 Breast Cancer Self-Check Tool",
    desc: "Health reminders & guidance for mothers.",
  },
  {
    title: "🎶 Baby Lullabies",
    desc: "Calming songs to help your baby snooze faster.",
  },
  {
    title: "🤰 Pregnancy Tracker",
    desc: "Watch baby grow week by week, from womb to arms.",
  },
  {
    title: "🤖 MamaBot AI Helper",
    desc: "Ask anything from parenting to Scripture to recipes.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function Tools() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-pink-50/10 via-purple-100/5 to-blue-100/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Tools To Make Life Easier 🧰
        </h2>
        <p className="text-pink-200 max-w-2xl mx-auto text-lg">
          From prayer to pediatrics — your mama toolkit is just a tap away.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 182, 193, 0.3)",
            }}
            className="bg-white/10 p-8 rounded-2xl border border-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-4 animate-bounce-slow">{tool.title}</div>
            <h3 className="text-xl font-semibold mb-2">{tool.title.replace(/^[^a-zA-Z]+/, "")}</h3>
            <p className="text-pink-100 text-sm mb-6">{tool.desc}</p>

            <motion.a
              href="/auth.html"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="inline-block w-full text-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-base font-semibold rounded-xl shadow-md transition-all duration-300"
            >
              Try Tool
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
