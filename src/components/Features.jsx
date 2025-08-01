  import { motion } from "framer-motion";

  const features = [
    // Regular Features
    {
      title: "Baby Scheduler & Wellness",
      desc: "Track feeding, sleep, doctor visits & vaccines. All in one cuddly dashboard.",
      emoji: "🍼",
    },
    {
      title: "Expense Tracker",
      desc: "Monitor baby-related expenses, diapers to doctor bills, with budgeting ease.",
      emoji: "💰",
    },
    {
      title: "Milestone Logger",
      desc: "Capture & archive precious firsts — steps, giggles, and messy face photos.",
      emoji: "📸",
    },
    {
      title: "AI Assistant",
      desc: "Ask MamaBot anything — parenting tips, baby food, teething remedies, etc.",
      emoji: "🤖",
    },
    {
      title: "Short Daily Reads",
      desc: "Micro-reads to keep mama informed, inspired & uplifted during busy days.",
      emoji: "📚",
    },
    {
      title: "Growth Tracker",
      desc: "Monitor your baby's growth with charts and milestones, ensuring healthy development.",
      emoji: "📈",
    },
    {
      title: "Personalized Tips",
      desc: "Receive tailored parenting tips based on your baby's age and needs.",
      emoji: "✨",
    },
    {
      title: "Emergency Contacts",
      desc: "Store important contacts like pediatricians, family members, and emergency services.",
      emoji: "📞",
    },
    {
      title: "Neonatal Jaundice Predictor",
      desc: "Predict and monitor jaundice levels in newborns with our AI-powered tool.",
      emoji: "🟡",
    },
    // TOOLS (now merged as features)
    {
      title: "📏 BMI Calculator",
      desc: "Track your baby's growth using standard body mass metrics.",
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
      desc: "Cute, affordable, and essential baby needs at your fingertips.",
    },
    {
      title: "🗺️ Interactive Maps",
      desc: "Real Time Map to find health care centers,and find your way around places. ",
    },
    {
      title: "🎶 Baby Lullabies",
      desc: "Calming songs to help your baby snooze faster.",
    },
    {
      title: "🤰 Pregnancy Tracker",
      desc: "Watch baby grow week by week, from womb to arms.",
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

  export default function Features() {
    return (
      <section className="py-24 relative bg-white">
        {/* Glossy Blue Background */}
        <div className="absolute inset-0 bg-white" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Tools & Features For The Modern Mama
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              From diapers to devotionals — everything you need, all in one place.
            </p>
          </div>

          {/* Grid Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-2xl p-6 border border-blue-200 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* Floating Emoji */}
                <motion.div
                  variants={floatAnimation}
                  animate="animate"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white text-3xl shadow-lg"
                >
                  {feature.emoji || feature.title.match(/^.{2}/)?.[0] || "🌟"}
                </motion.div>

                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {feature.title.replace(/^[^a-zA-Z]+/, "")}
                </h3>
                <p className="text-blue-700 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
