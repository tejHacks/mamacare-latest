
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BabyProfiles() {
  const [babies, setBabies] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchBabies = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please log in.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/babies", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch baby profiles");
      const data = await response.json();
      setBabies(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchBabies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <h2 className="text-2xl font-bold text-pink-400 mb-6">Baby Profiles</h2>
      {error && <p className="text-red-400">{error}</p>}
      {babies.length === 0 ? (
        <p className="text-gray-300">No baby profiles yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {babies.map((baby) => (
            <div key={baby.id} className="bg-black bg-opacity-70 rounded-lg p-4">
              <p><strong>Name:</strong> {baby.name}</p>
              <p><strong>Birth Date:</strong> {baby.birth_date}</p>
              <p><strong>Gender:</strong> {baby.gender}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
