import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DailyReads() {
  const [reads, setReads] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchReads = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please log in.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/daily_reads", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch daily reads");
      const data = await response.json();
      setReads(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchReads();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <h2 className="text-2xl font-bold text-pink-400 mb-6">Daily Reads</h2>
      {error && <p className="text-red-400">{error}</p>}
      {reads.length === 0 ? (
        <p className="text-gray-300">No daily reads yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reads.map((read) => (
            <div key={read.id} className="bg-black bg-opacity-70 rounded-lg p-4">
              <p><strong>Title:</strong> {read.title}</p>
              <p><strong>Date:</strong> {read.published_date}</p>
              <p><strong>Content:</strong> {read.content.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}