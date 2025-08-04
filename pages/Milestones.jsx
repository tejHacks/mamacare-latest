import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Milestones() {
  const [milestones, setMilestones] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchMilestones = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please log in.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/milestones", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch milestones");
      const data = await response.json();
      setMilestones(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchMilestones();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <h2 className="text-2xl font-bold text-pink-400 mb-6">Milestones</h2>
      {error && <p className="text-red-400">{error}</p>}
      {milestones.length === 0 ? (
        <p className="text-gray-300">No milestones yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="bg-black bg-opacity-70 rounded-lg p-4">
              <p><strong>Title:</strong> {milestone.title}</p>
              <p><strong>Date:</strong> {milestone.milestone_date}</p>
              <p><strong>Description:</strong> {milestone.description || "None"}</p>
              {milestone.photo_url && <img src={milestone.photo_url} alt="Milestone" className="mt-2 h-32 w-full object-cover rounded" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}