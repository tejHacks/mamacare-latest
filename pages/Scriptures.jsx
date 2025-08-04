import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Scriptures() {
  const [scriptures, setScriptures] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchScriptures = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please log in.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/scriptures", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch scriptures");
      const data = await response.json();
      setScriptures(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchScriptures();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <h2 className="text-2xl font-bold text-pink-400 mb-6">Scriptures</h2>
      {error && <p className="text-red-400">{error}</p>}
      {scriptures.length === 0 ? (
        <p className="text-gray-300">No scriptures yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {scriptures.map((scripture) => (
            <div key={scripture.id} className="bg-black bg-opacity-70 rounded-lg p-4">
              <p><strong>Verse:</strong> {scripture.verse}</p>
              <p><strong>Reference:</strong> {scripture.reference}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}