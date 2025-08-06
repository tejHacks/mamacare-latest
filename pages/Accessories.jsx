/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Accessories() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 120 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-white text-blue-600 p-4 pt-20 font-comic">
      <motion.div
        className="text-center mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-blue-600 flex items-center justify-center gap-3">
          <ShoppingBagIcon className="h-8 w-8" /> Accessories
        </h2>
        <p className="text-lg text-blue-500 mt-2">
          Your one-stop shop for toys, clothes, and mama essentials! 🎁
        </p>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6 max-w-2xl mx-auto"
        variants={cardVariants}
      >
        <p className="text-blue-500 text-center mb-6">
          Accessories coming soon! Get ready to shop fun toys, cute clothes, and must-have maternal items! 🚀
        </p>
        <motion.button
          onClick={() => navigate("/dashboard")}
          className="w-[90%] sm:w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold cursor-pointer"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Back to Dashboard
        </motion.button>
      </motion.div>
    </div>
  );
}