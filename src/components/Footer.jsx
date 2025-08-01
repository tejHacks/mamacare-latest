import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // Add status for feedback
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setStatus("Thank you! We’ll get back to you soon. 🙏");
    } catch (err) {
      console.error("❌ Failed to send contact message:", err);
      setStatus(err.message || "Failed to send email. Try again.");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: About */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-400">MamaHub 🍼</h2>
          <p className="text-gray-300 mb-4">
            From diapers to devotionals, MamaHub is your all-in-one baby and soul care companion.
            Built with code, compassion & Christ.
          </p>

          <ul className="text-gray-400 mb-4 space-y-1 text-sm">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:olateju202@gmail.com" className="text-blue-300 hover:underline">
                olateju202@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+2348086976247" className="text-blue-300 hover:underline">
                +234 808 697 6247
              </a>
            </li>
          </ul>

          <div className="flex space-x-4 mt-4 text-sm">
            <a href="https://www.linkedin.com/in/olateju" target="_blank" className="hover:text-blue-400">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/olateju.dev" target="_blank" className="hover:text-blue-400">
              Instagram
            </a>
            <a href="https://www.facebook.com/olateju.dev" target="_blank" className="hover:text-blue-400">
              Facebook
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} MamaHub. All rights reserved.</p>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Contact Us ✉️</h3>
          {submitted ? (
            <p className="text-green-400">{status}</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold"
              >
                Send Message
              </button>
            </form>
          )}
          {status && !submitted && <p className="text-red-400 mt-2">{status}</p>} {/* Show error status */}
        </div>
      </div>
    </footer>
  );
}