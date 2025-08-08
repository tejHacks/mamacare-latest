import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown, FaHeart, FaStar, FaSmile } from "react-icons/fa";

import image1 from "../assets/woman.jpg";
import image2 from "../assets/snap.jpg";
import image3 from "../assets/spam.jpg";
import image4 from "../assets/latest.jpg";

const messages = [
  "A Loving Hub for Moms",
  "Cherish Every Milestone",
  "Connect with Caring Moms",
  "Raise Your Baby with Joy",
];

const images = [image1, image2, image3, image4];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const current = messages[index % messages.length];
    let i = 0;
    const typingSpeed = 70;
    const typingDuration = current.length * typingSpeed;
    const totalDisplayTime = 8000;
    const delayAfterTyping = totalDisplayTime - typingDuration;

    const interval = setInterval(() => {
      setDisplayedText(current.slice(0, i + 1));
      i++;
      if (i === current.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % messages.length);
          setKey((prev) => prev + 1);
        }, delayAfterTyping);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [index]);

  
  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-br from-[#FFF5F5] via-[#FDFDFD] to-[#F8E1E1]  text-[#2d0344] px-4 py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 max-w-7xl text-center md:text-left h-full">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.h1
              key={key}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-[#790097] font-[Lora]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1.8 }}
            >
              {displayedText}
              <span className="blinking-cursor ml-1">|</span>
            </motion.h1>
          </AnimatePresence>

          <motion.p
            className="mt-6 text-[#4A2C5A] text-lg md:text-xl max-w-xl font-[Poppins]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            Step into a warm, supportive space for motherhood, where technology wraps you in love and helps you cherish every moment with your little one.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button className="bg-[#D4A017] hover:bg-[#E8B923] text-[#FDFDFD] px-6 py-3 rounded-full font-bold shadow-lg transition font-[Poppins]">
              Begin Your Journey
            </button>
            <a
              href="#learn-more"
              className="bg-[#F8E1E1] hover:bg-[#F8B5B0] text-[#4A2C5A] px-6 py-3 rounded-full font-bold shadow-lg transition font-[Poppins]"
            >
              Discover More
            </a>
          </motion.div>

          <motion.ul
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#4A2C5A] text-sm font-[Poppins]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <li className="flex items-center gap-2">
              <FaHeart className="text-[#D4A017]" /> Crafted with Care
            </li>
            <li className="flex items-center gap-2">
              <FaStar className="text-[#D4A017]" /> Loved by Moms
            </li>
            <li className="flex items-center gap-2">
              <FaSmile className="text-[#D4A017]" /> Simple and Beautiful
            </li>
          </motion.ul>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 50, y: 10 }}
            transition={{ duration: 1.8 }}
          >
            <img
              src={images[index % images.length]}
              alt="Mother and child"
              loading="lazy"
              style={{
                width: "100%",
                height: "550px",
                maxWidth: "600px",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
              className="rounded-xl shadow-xl border border-[#F8E1E1] mx-auto object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[#D4A017] text-xl animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 3 }}
      >
        <FaArrowDown />
      </motion.div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Poppins:wght@400;600&display=swap');
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from,
          to {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}