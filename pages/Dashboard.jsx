
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  Bars3Icon,
  UserGroupIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  BookOpenIcon,
  HeartIcon,
  CalculatorIcon,
  CakeIcon,
  MapPinIcon,
  ShoppingBagIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found. Please log in.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status}`);
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.error("Fetch user error:", err.message);
      setError("Failed to load user data. Please try again.");
      navigate("/login");
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather");
      }
      const data = await response.json();
      setWeather({
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      });
    } catch (err) {
      console.error("Weather fetch error:", err.message);
      setWeather(null);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  useEffect(() => {
    fetchUser();
    fetchWeather();
    setGreeting(getGreeting());
  }, []);

  if (error) {
    return <div className="text-red-600 text-center mt-8">{error}</div>;
  }

  if (!user) {
    return <div className="text-center mt-8 text-blue-600">Loading...</div>;
  }

  const features = [
    {
      name: "Baby Profiles",
      path: "/babies",
      icon: UserGroupIcon,
      description: "Create adorable profiles for your little superstars!",
    },
    {
      name: "Baby Scheduler",
      path: "/schedules",
      icon: CalendarIcon,
      description: "Plan feeding, naps, and doc visits like a pro mama!",
    },
    {
      name: "Expense Tracker",
      path: "/expenses",
      icon: CurrencyDollarIcon,
      description: "Keep track of diapers, toys, and all baby bucks!",
    },
    {
      name: "Milestones",
      path: "/milestones",
      icon: TrophyIcon,
      description: "Capture those epic firsts—smiles, steps, and giggles!",
    },
    {
      name: "Daily Reads",
      path: "/daily-reads",
      icon: BookOpenIcon,
      description: "Quick tips to keep you inspired on your mama journey!",
    },
    {
      name: "Scriptures",
      path: "/scriptures",
      icon: HeartIcon,
      description: "Uplifting verses to brighten your day, mama!",
    },
    {
      name: "AI Chatbot",
      path: "/chatbot",
      icon: ChatBubbleLeftRightIcon,
      description: "Chat with MamaBot for instant parenting wisdom!",
    },
    {
      name: "BMI Calculator",
      path: "/bmi-calculator",
      icon: CalculatorIcon,
      description: "Check your or baby’s BMI with a fun little calc!",
    },
    {
      name: "Baby Measurements",
      path: "/baby-measurements",
      icon: CalculatorIcon,
      description: "Track your baby’s growth—height, weight, and more!",
    },
    {
      name: "Birthday Reminder",
      path: "/birthday-reminder",
      icon: CakeIcon,
      description: "Never miss a cake-smashing birthday moment!",
    },
    {
      name: "Pediatrician Finder",
      path: "/pediatrician-finder",
      icon: MapPinIcon,
      description: "Find trusted docs for your little one in a snap!",
    },
    {
      name: "Accessories",
      path: "/accessories",
      icon: ShoppingBagIcon,
      description: "Shop toys, clothes, and mama essentials with joy!",
    },
    {
      name: "Neonatal Jaundice Checker",
      path: "/jaundice-checker",
      icon: ShieldCheckIcon,
      description: "Check baby’s health with quick jaundice insights!",
    },
    {
      name: "Skin Disease Detector",
      path: "/skin-disease-detector",
      icon: SparklesIcon,
      description: "Spot skin issues early with smart detection!",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  const greetingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", type: "spring", stiffness: 80 },
    },
  };

  const weatherVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 120 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-white text-blue-600 font-sans">
      {/* Glossy Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-blue-600">MamaCare</h1>
            </div>
            <Menu as="div" className="relative">
              <Menu.Button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                <Bars3Icon className="h-6 w-6 text-white" />
              </Menu.Button>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-blue-600 bg-opacity-95 rounded-lg py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => navigate("/dashboard")}
                        className={`${
                          active ? "bg-blue-800 text-white" : "text-white"
                        } flex items-center px-4 py-2 text-sm w-full`}
                      >
                        <HomeIcon className="h-5 w-5 mr-2" /> Home
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => navigate("/profile")}
                        className={`${
                          active ? "bg-blue-800 text-white" : "text-white"
                        } flex items-center px-4 py-2 text-sm w-full`}
                      >
                        <UserIcon className="h-5 w-5 mr-2" /> Profile
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => navigate("/settings")}
                        className={`${
                          active ? "bg-blue-800 text-white" : "text-white"
                        } flex items-center px-4 py-2 text-sm w-full`}
                      >
                        <CogIcon className="h-5 w-5 mr-2" /> Settings
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => navigate("/chatbot")}
                        className={`${
                          active ? "bg-blue-800 text-white" : "text-white"
                        } flex items-center px-4 py-2 text-sm w-full`}
                      >
                        <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" /> AI Chatbot
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.removeItem("user");
                          navigate("/login");
                        }}
                        className={`${
                          active ? "bg-red-600 text-white" : "text-white"
                        } flex items-center px-4 py-2 text-sm w-full`}
                      >
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h3a3 3 0 013 3v1"
                          />
                        </svg>
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Greeting and Tagline */}
        <motion.div
          className="text-center mb-8"
          variants={greetingVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-bold text-blue-600 font-comic">
            {greeting}, {user.name}! 🎉
          </h2>
          <p className="text-xl text-blue-500 mt-2 font-comic">
            Your Joyful Parenting Adventure Starts Here! 💙
          </p>
        </motion.div>

        {/* Weather Widget */}
        <motion.div
          className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6 mb-8 flex items-center justify-center"
          variants={weatherVariants}
          initial="hidden"
          animate="visible"
        >
          {weather ? (
            <>
              <img src={weather.icon} alt="Weather icon" className="h-12 w-12 mr-4" />
              <div>
                <p className="text-lg font-semibold text-blue-600 font-comic">
                  Lagos: {weather.temp}°C
                </p>
                <p className="text-sm text-blue-500 capitalize font-comic">{weather.description}</p>
              </div>
            </>
          ) : (
            <p className="text-blue-500 font-comic">Loading weather... 🌈</p>
          )}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6"
              variants={cardVariants}
            >
              <div className="flex items-center gap-3 mb-3">
                <feature.icon className="h-8 w-8 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-600 font-comic">{feature.name}</h3>
              </div>
              <p className="text-sm text-blue-500 mb-4 font-comic">{feature.description}</p>
              <motion.button
                onClick={() => navigate(feature.path)}
                className="w-[90%] sm:w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold font-comic cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Go to {feature.name} 🚀
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}