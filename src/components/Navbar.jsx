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
  { label: "Community", icon: <FaUsers />, type: "scroll", to: "community" },
  { label: "Chatbot", icon: <FaRobot />, type: "scroll", to: "chatbot" },
  { label: "About", icon: <FaInfoCircle />, type: "scroll", to: "footer" },
  { label: "Contact", icon: <FaComments />, type: "scroll", to: "footer" },
  { label: "Login", icon: <FaSignInAlt />, type: "route", to: "/login" },
  { label: "Sign Up", icon: <FaUserPlus />, type: "route", to: "/signup" },
];

const iconHover = {
  scale: 1.1,
  rotateY: 360,
  backgroundColor: "#e0f0ff",
  color: "#1e40af",
  transition: { duration: 1.2, ease: "easeInOut" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-[100] items-center justify-between px-8 py-4 bg-white text-blue-900 shadow-md border-b border-blue-100">
        <h1 className="text-3xl font-bold text-blue-700">MamaCare</h1>
        <ul className="flex gap-6 text-sm font-medium">
          {navItems.map(({ label, icon, type, to }) => (
            <motion.li
              key={label}
              className="cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all"
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
      <nav className="md:hidden fixed top-0 left-0 right-0 z-[100] bg-white shadow-md p-4 flex items-center justify-between text-blue-900">
        <h1 className="text-2xl font-bold text-blue-700">MamaCare</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none text-blue-900"
        >
          {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 mx-4 bg-blue-50 p-4 rounded-xl shadow-2xl text-blue-900 z-[99]">
          <ul className="grid grid-cols-3 gap-4 text-sm text-center font-medium">
            {navItems.map(({ label, icon, type, to }) => (
              <motion.li
                key={label}
                className="cursor-pointer flex flex-col items-center justify-center p-3 rounded-lg hover:bg-blue-100 hover:text-blue-700"
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
                  >
                    <div className="text-lg">{icon}</div>
                    <span className="text-xs">{label}</span>
                  </ScrollLink>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;



// import React, { useState } from "react";
// import {
//   FaTimes,
//   FaHome,
//   FaInfoCircle,
//   FaTools,
//   FaUsers,
//   FaComments,
//   FaSignInAlt,
//   FaUserPlus,
//   FaRobot,
// } from "react-icons/fa";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";


// const navItems = [
//   { label: "Home", icon: <FaHome />, path: "/" },
//   { label: "Features", icon: <FaTools />, path: "#features" }, // Or use React Scroll
//   { label: "Tools", icon: <FaTools />, path: "#tools" },
//   { label: "Community", icon: <FaUsers />, path: "#community" },
//   { label: "Chatbot", icon: <FaRobot />, path: "#chatbot" },
//   { label: "Login", icon: <FaSignInAlt />, path: "/login" },
//   { label: "Sign Up", icon: <FaUserPlus />, path: "/signup" },
//   { label: "About", icon: <FaInfoCircle />, path: "#about" },
//   { label: "Contact", icon: <FaComments />, path: "#contact" },
// ];

// const iconHover = {
//   scale: 1.1,
//   rotateY: 360,
//   backgroundColor: "#e0f0ff", // light blue bg on hover
//   color: "#1e40af", // blue-900
//   transition: {
//     duration: 1.2,
//     ease: "easeInOut",
//   },
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav className="hidden md:flex fixed top-0 left-0 right-0 z-[100] items-center justify-between px-8 py-4 bg-white text-blue-900 shadow-md border-b border-blue-100">
//         <h1 className="text-3xl font-bold text-blue-700">MamaCare</h1>
//         <ul className="flex gap-6 text-sm font-medium">
//           {navItems.map(({ label, icon, path }) => (
//   <motion.li
//     key={label}
//     className="cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all"
//     whileHover={iconHover}
//     whileTap={{ scale: 0.95 }}
//     style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
//   >
//     <Link to={path} className="flex items-center gap-2">
//       <span className="text-lg">{icon}</span>
//       <span>{label}</span>
//     </Link>
//   </motion.li>
// ))}

//         </ul>
//       </nav>

//       {/* Mobile Navbar */}
//       <nav className="md:hidden fixed top-0 left-0 right-0 z-[100] bg-white shadow-md p-4 flex items-center justify-between text-blue-900">
//         <h1 className="text-2xl font-bold text-blue-700">MamaCare</h1>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-2xl focus:outline-none text-blue-900"
//         >
//           {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
//         </button>
//       </nav>

//       {/* Mobile Drawer Menu */}
//       {isOpen && (
//         <div className="md:hidden fixed top-16 left-0 right-0 mx-4 bg-blue-50 p-4 rounded-xl shadow-2xl text-blue-900 z-[99]">
//           <ul className="grid grid-cols-3 gap-4 text-sm text-center font-medium">
//             {navItems.map(({ label, icon }) => (
//               <motion.li
//                 key={label}
//                 className="cursor-pointer flex flex-col items-center justify-center p-3 rounded-lg hover:bg-blue-100 hover:text-blue-700"
//                 whileHover={iconHover}
//                 whileTap={{ scale: 0.95 }}
//                 style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
//               >
//                 <div className="text-lg">{icon}</div>
//                 <span className="text-xs">{label}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;





