import { useState } from "react";
import axios from "axios";
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
              role: "user",
              parts: [{ text: input }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const reply = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "MamaBot didn’t respond. 😔";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("Error talking to Gemini:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "MamaBot had a hiccup 🥴. Try again shortly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white p-6 md:p-10 rounded-xl border border-blue-200 text-blue-900 max-w-4xl mx-auto my-12 shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">MamaBot AI (Gemini) 🤖</h2>

      <div className="space-y-4 h-96 overflow-y-auto mb-4 p-2 bg-blue-50 rounded-lg">
        {messages.map((msg, i) => (
          <div key={i} className={`p-3 rounded-md ${msg.role === "user" ? "bg-blue-100" : "bg-blue-200"}`}>
            <strong>{msg.role === "user" ? "You" : "MamaBot"}:</strong> {msg.content}
          </div>
        ))}
        {loading && <p className="text-blue-500 italic animate-pulse">MamaBot is thinking...</p>}
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          className="flex-1 p-3 border border-blue-300 rounded-md"
          placeholder="Ask MamaBot anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </section>
  );
}
