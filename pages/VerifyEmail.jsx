import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Verifying email...");

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Invalid email format");
      return;
    }
    if (code.length !== 6 || !/^\d+$/.test(code)) {
      setStatus("Verification code must be a 6-digit number");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to verify email");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setStatus("Email verified! You're now logged in. Redirecting to dashboard...");
      if (data.redirect) {
        setTimeout(() => navigate(data.redirect), 2000);
      }
    } catch (err) {
      console.error("Verify email error:", err);
      setStatus(err.message || "Failed to verify email. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 border border-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Verify Your Email</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Verification Code"
            className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition duration-300"
          >
            Verify Email
          </button>
        </form>
        {status && <p className={`mt-4 text-sm ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>{status}</p>}
        <p className="text-sm text-center text-blue-700 mt-6">
          Back to{" "}
          <a href="/login" className="text-blue-500 hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;