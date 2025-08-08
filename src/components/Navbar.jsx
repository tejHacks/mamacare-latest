import React, { useState } from "react";
import {
  FaTimes, FaHome, FaInfoCircle, FaTools, FaUsers,
  FaComments, FaSignInAlt, FaUserPlus, FaRobot
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { label: "Home", icon: <FaHome />, type: "scroll", to: "hero" },
  { label: "Features", icon: <FaTools />, type: "scroll", to: "features" },
  // { label: "Community", icon: <FaUsers />, type: "scroll", to: "community" },
  { label: "Chatbot", icon: <FaRobot />, type: "scroll", to: "chatbot" },
  { label: "About", icon: <FaInfoCircle />, type: "scroll", to: "footer" },
  { label: "Contact", icon: <FaComments />, type: "scroll", to: "footer" },
  { label: "Login", icon: <FaSignInAlt />, type: "route", to: "/login" },
  { label: "Sign Up", icon: <FaUserPlus />, type: "route", to: "/signup" },
];

const iconHover = {
  scale: 1.1,
  rotateY: 360,
  backgroundColor: "#F8B5B0", // Coral on hover
  color: "#4A2C5A", // Deep lavender for contrast
  transition: { duration: 0.8, ease: "easeInOut" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-[100] items-center justify-between px-8 py-4 bg-[#FDFDFD] text-[#4A2C5A] shadow-md border-b border-[#F8B5B0]">
        <h1 className="text-3xl font-bold font-[Poppins] text-[#4A2C5A] ">MamaCare</h1>
        <ul className="flex gap-6 text-sm font-medium">
          {navItems.map(({ label, icon, type, to }) => (
            <motion.li
              key={label}
              className="cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-[#F8B5B0] hover:text-[#4A2C5A] transition-all"
              whileHover={iconHover}
              whileTap={{ scale: 0.95 }}
            >
              {type === "route" ? (
                <Link to={to} className="flex items-center gap-2">
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                </Link>
              ) : (
                <ScrollLink
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                </ScrollLink>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Toggle */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-[100] bg-[#FDFDFD] shadow-md p-4 flex items-center justify-between text-[#4A2C5A]">
       
         <h1 className="text-2xl font-bold font-sans text-[#4A2C5A] ">MamaCare</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none text-[#4A2C5A]"
        >
          {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden fixed top-16 left-0 right-0 mx-4 bg-[#FFF5F5] p-4 rounded-xl shadow-2xl text-[#4A2C5A] z-[99]"
        >
          <ul className="grid grid-cols-3 gap-4 text-sm text-center font-medium">
            {navItems.map(({ label, icon, type, to }) => (
              <motion.li
                key={label}
                className="cursor-pointer flex flex-col items-center justify-center p-3 rounded-lg hover:bg-[#F8B5B0] hover:text-[#4A2C5A]"
                whileHover={iconHover}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                {type === "route" ? (
                  <Link to={to} className="flex flex-col items-center">
                    <div className="text-lg">{icon}</div>
                    <span className="text-xs">{label}</span>
                  </Link>
                ) : (
                  <ScrollLink
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-lg">{icon}</div>
                    <span className="text-xs">{label}</span>
                  </ScrollLink>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;