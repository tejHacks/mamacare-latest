import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Invalid email format");
      return;
    }
    if (formData.password.length < 8) {
      setStatus("Password must be at least 8 characters");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.redirect) {
          setStatus(data.message);
          setTimeout(() => navigate(data.redirect), 2000);
          return;
        }
        throw new Error(data.message || "Failed to login");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setStatus("Login successful! Redirecting...");
      setFormData({ email: "", password: "" });
      if (data.redirect) {
        setTimeout(() => navigate(data.redirect), 2000);
      }
    } catch (error) {
      console.error("Login error:", error);
      setStatus(error.message || "Failed to login. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 border border-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Login to MamaCare</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-blue-600 hover:text-blue-800 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition duration-300"
          >
            Login
          </button>
        </form>
        {status && <p className={`mt-4 text-sm ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>{status}</p>}
        <p className="text-sm text-center text-blue-700 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}