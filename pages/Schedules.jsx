import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Schedules() {
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchSchedules = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please log in.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/schedules", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch schedules");
      const data = await response.json();
      setSchedules(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <h2 className="text-2xl font-bold text-pink-400 mb-6">Baby Scheduler</h2>
      {error && <p className="text-red-400">{error}</p>}
      {schedules.length === 0 ? (
        <p className="text-gray-300">No schedules yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="bg-black bg-opacity-70 rounded-lg p-4">
              <p><strong>Type:</strong> {schedule.type}</p>
              <p><strong>Time:</strong> {schedule.scheduled_time}</p>
              <p><strong>Notes:</strong> {schedule.notes || "None"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}