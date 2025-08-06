// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown, FaHeart, FaStar, FaSmile } from "react-icons/fa";

import image1 from "/assets/woman.jpg";
import image2 from "../../public/assets/african-american-mother-taking-care-loving-her-baby-against-white-surface.jpg";
// import image2 from "/assets/woman.jpg";

import image3 from "../../public/assets/black-mother-taking-car-her-child-1.jpg";
import image4 from "../../public/assets/black-mother-taking-car-her-child-2.jpg";
// import image3 from "/assets/woman.jpg";
// import image4 from "/assets/woman.jpg";


// import image1 from "/assets/woman.jpg";


const messages = [
  "A Modern Hub for Mothers",
  "Track Baby Milestones",
  "Connect with Loving Moms",
  "Raise Your Child With Confidence",
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
    const totalDisplayTime = 5000;
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
    <section className="min-h-screen flex items-center relative bg-gradient-to-br from-white via-blue-50 to-blue-100 text-blue-900 px-4 py-24 md:py-32 overflow-hidden">
      {/* Main Layout */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 max-w-7xl text-center md:text-left h-full">
        {/* Text Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.h1
              key={key}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-blue-800"
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
            className="mt-6 text-blue-700 text-lg md:text-xl max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            Welcome to a new era of motherhood — where love meets technology in the smoothest way possible.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition">
              Start Your Journey
            </button>
            <a
              href="#learn-more"
              className="bg-blue-100 hover:bg-blue-200 text-blue-900 px-6 py-3 rounded-full font-bold shadow-lg transition"
            >
              Learn More
            </a>
          </motion.div>

          <motion.ul
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-blue-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <li className="flex items-center gap-2">
              <FaHeart className="text-blue-400" /> Built with Love
            </li>
            <li className="flex items-center gap-2">
              <FaStar className="text-blue-400" /> Trusted by Moms
            </li>
            <li className="flex items-center gap-2">
              <FaSmile className="text-blue-400" /> Easy & Beautiful UI
            </li>
          </motion.ul>
        </div>

        {/* Image Column */}
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
    height: "500px", // you can go even 550px if you like
    maxWidth: "600px", // bump this from 400px to 600px
    objectFit: "cover",
    borderRadius: "1rem",
  }}
  className="rounded-xl shadow-xl border border-blue-100 mx-auto object-cover"
/>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Down */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-blue-400 text-xl animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 3 }}
      >
        <FaArrowDown />
      </motion.div>

      <style jsx>{`
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
