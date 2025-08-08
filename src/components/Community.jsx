import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Dummy submission: log email to console, no backend call
    console.log("Community signup email:", email);
    
    // Simulate success after 1s
    setTimeout(() => {
      setMessage("Thanks, mama! We'll let you know when the community launches! 💜");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-24 px-6 bg-gradient-to-br from-[#A78BFA] via-[#E8D8F3] to-[#FFF5F5] text-[#4A2C5A] max-w-full overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-lora font-extrabold mb-6 text-[#A78BFA]">
          Community Coming Soon 💬
        </h2>
        <p className="text-[#4A2C5A] font-poppins text-lg max-w-2xl mx-auto mb-4">
          We’re building a safe space where mamas and families can share love, wisdom, and real talk.
        </p>
        <p className="text-[#4A2C5A] font-poppins text-base max-w-2xl mx-auto mb-8">
          Chat, pray, laugh, and learn together — launching soon. For now, enjoy all the tools made with love.
        </p>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-[#D4A017] hover:bg-[#E8B923] text-[#FDFDFD] font-poppins-bold px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Be First To Know
        </motion.button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-[#FDFDFD] p-6 rounded-lg max-w-md w-full mx-4 border-2 border-[#A78BFA] shadow-lg"
            >
              <h3 className="text-2xl font-lora text-[#A78BFA] mb-4 text-center">
                Join the MamaCare Community
              </h3>
              <p className="text-[#4A2C5A] font-poppins text-center mb-4">
                Drop your email, mama, and we’ll ping you when the community launches! 💜
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full p-3 mb-4 border-2 border-[#A78BFA] rounded-lg font-poppins text-[#4A2C5A] focus:outline-none focus:ring-2 focus:ring-[#E8D8F3]"
                  required
                />
                <div className="flex justify-between">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-[#D4A017] hover:bg-[#E8B923] text-[#FDFDFD] font-poppins-bold px-6 py-3 rounded-lg w-full mr-2 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    {isSubmitting ? "Submitting..." : "Sign Up"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-[#A78BFA] hover:bg-[#8B5CF6] text-[#FDFDFD] font-poppins-bold px-6 py-3 rounded-lg w-full ml-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
              {message && (
                <p className={`mt-4 text-center font-poppins ${message.includes("Thanks") ? "text-[#A78BFA]" : "text-red-500"}`}>
                  {message}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}