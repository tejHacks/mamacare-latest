import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `You are MamaBot, an AI assistant for nursing and pregnant mothers. Provide helpful, accurate, and empathetic responses about motherhood, parenting, baby care, pregnancy, or nursing. Avoid unrelated topics. User question: ${input}`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const reply = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "I’m having a little trouble, mama. Could you try asking again? 😊";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("Error talking to MamaBot:", error.response?.data || error.message);
      let errorMessage = "Oops, MamaBot had a tiny hiccup. Try again in a moment, love! 💕";
      if (error.response?.status === 400) {
        errorMessage = "MamaBot couldn’t understand that request. Try rephrasing your question, mama! 😊";
      } else if (error.response?.status === 401 || error.response?.status === 403) {
        errorMessage = "MamaBot needs a valid key to chat. Please try again later, love! 💕";
      } else if (error.response?.status === 429) {
        errorMessage = "MamaBot’s a bit overwhelmed right now. Give her a moment and try again! 😊";
      }
      setMessages((prev) => [...prev, { role: "assistant", content: errorMessage }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#FFF5F5] p-4 sm:p-6 md:p-10 rounded-xl border border-[#F8E1E1] text-[#4A2C5A] max-w-4xl mx-auto my-12 shadow-xl max-w-full overflow-x-hidden"
    >
      <h2 className="text-3xl font-lora mb-6 text-center text-[#A78BFA]">MamaBot</h2>

      <motion.div
        className="space-y-4 h-96 overflow-y-auto mb-4 p-2 bg-[#FDFDFD] rounded-lg overflow-x-hidden break-words"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-md ${
              msg.role === "user" ? "bg-[#F8E1E1] text-[#4A2C5A]" : "bg-[#E8D8F3] text-[#4A2C5A]"
            } font-poppins break-words`}
          >
            <strong className="font-poppins-bold">{msg.role === "user" ? "You" : "MamaBot"}:</strong>{" "}
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}
        {loading && (
          <p className="text-[#D4A017] italic animate-pulse font-poppins">MamaBot is thinking for you, mama...</p>
        )}
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <input
          type="text"
          className="flex-1 p-3 border border-[#F8E1E1] rounded-md bg-[#FDFDFD] text-[#4A2C5A] placeholder-[#A78BFA] font-poppins w-full"
          placeholder="Ask MamaBot about pregnancy, nursing, or baby care..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className={`bg-[#D4A017] hover:bg-[#E8B923] text-[#FDFDFD] px-6 py-3 rounded-lg font-poppins-bold w-full sm:w-auto ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
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
    </motion.section>
  );
}