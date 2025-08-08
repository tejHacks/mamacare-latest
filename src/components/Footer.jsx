import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending your message...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Couldn’t send your message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setStatus("Thank you, mama! We’ll get back to you soon. 💕");
    } catch (err) {
      console.error("Failed to send contact message:", err);
      setStatus(err.message || "Oops, something went wrong. Try again, love!");
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#6d0290] text-[#FDFDFD] py-16 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-lora mb-4 text-[#D4A017]">MamaCare</h2>
          <p className="text-[#F8E1E1] mb-4 font-poppins text-sm">
            MamaCare is your loving companion for motherhood, crafted to support nursing and pregnant moms with tools, tips, and a warm community. From tracking your baby’s milestones to finding parenting advice, we’re here to make every moment easier and more joyful.
          </p>

          <ul className="text-[#F8E1E1] mb-4 space-y-1 text-sm font-poppins">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:mamacareaiapp@gmail.com" className="text-[#D4A017] hover:underline">
             mamacareaiapp@gmail.com
              </a>
            </li>
          </ul>

          <div className="flex space-x-4 mt-4 text-sm font-poppins">
            <a href="https://www.linkedin.com/in/mamacare" target="_blank" className="text-[#F8E1E1] hover:text-[#D4A017]">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/mamacare.app" target="_blank" className="text-[#F8E1E1] hover:text-[#D4A017]">
              Instagram
            </a>
            <a href="https://www.facebook.com/mamacare.app" target="_blank" className="text-[#F8E1E1] hover:text-[#D4A017]">
              Facebook
            </a>
          </div>

          <p className="text-sm text-[#E8D8F3] mt-6 font-poppins">&copy; {new Date().getFullYear()} MamaCare. All rights reserved.</p>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-lora mb-4 text-[#FDFDFD]">Reach Out to Us</h3>
          {submitted ? (
            <p className="text-[#D4A017] font-poppins">{status}</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-[#FDFDFD] text-[#4A2C5A] rounded-lg border border-[#F8E1E1] font-poppins placeholder-[#A78BFA]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-[#FDFDFD] text-[#4A2C5A] rounded-lg border border-[#F8E1E1] font-poppins placeholder-[#A78BFA]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 bg-[#FDFDFD] text-[#4A2C5A] rounded-lg border border-[#F8E1E1] font-poppins placeholder-[#A78BFA]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button
                type="submit"
                className="bg-[#D4A017] hover:bg-[#E8B923] px-6 py-3 rounded-lg text-[#FDFDFD] font-poppins-bold"
              >
                Send Your Message
              </button>
            </form>
          )}
          {status && !submitted && <p className="text-[#F8E1E1] mt-2 font-poppins">{status}</p>}
        </motion.div>
      </div>
    </motion.footer>
  );
}