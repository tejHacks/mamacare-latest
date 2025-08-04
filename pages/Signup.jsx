import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Signing up...");
    console.log("Submitting form with:", formData);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Invalid email format");
      console.log("Validation failed: Invalid email");
      return;
    }
    if (formData.name.length > 100) {
      setStatus("Name is too long (max 100 characters)");
      console.log("Validation failed: Name too long");
      return;
    }
    if (formData.password.length < 8) {
      setStatus("Password must be at least 8 characters");
      console.log("Validation failed: Password too short");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("API response status:", response.status);
      const data = await response.json();
      console.log("API response data:", data);

      if (!response.ok) {
        throw new Error(data.message || `Signup failed with status ${response.status}`);
      }

      setStatus("Signup successful! Redirecting to verify email...");
      setFormData({ name: "", email: "", password: "" });
      if (data.redirect) {
        console.log("Navigating to:", data.redirect);
        setTimeout(() => {
          console.log("Executing navigation to:", data.redirect);
          navigate(data.redirect);
        }, 2000);
      } else {
        console.log("No redirect in response");
        setStatus("Signup successful, but no redirect provided");
      }
    } catch (error) {
      console.error("Signup error:", error.message);
      setStatus(error.message || "Failed to sign up. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 border border-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Sign Up for MamaCare</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
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
            Sign Up
          </button>
        </form>
        {status && <p className={`mt-4 text-sm ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>{status}</p>}
        <p className="text-sm text-center text-blue-700 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}