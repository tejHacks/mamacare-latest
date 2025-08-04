import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please log in.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch profile");
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <h2 className="text-2xl font-bold text-pink-400 mb-6">Profile</h2>
      {error && <p className="text-red-400">{error}</p>}
      {user ? (
        <div className="bg-black bg-opacity-70 rounded-lg p-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.id}</p>
        </div>
      ) : (
        <p className="text-gray-300">Loading...</p>
      )}
    </div>
  );
}