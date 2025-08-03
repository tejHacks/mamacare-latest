import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in to access the dashboard");
        setTimeout(() => navigate("/login"), 2000);
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch user data");
        }
        setUser(data);
      } catch (err) {
        setError(err.message);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setTimeout(() => navigate("/login"), 2000);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Welcome to MamaHub Dashboard</h2>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        {user && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Hello, {user.name}!</h3>
            <p className="mb-2">Email: {user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-600 hover:bg-red-700 p-2 rounded text-white"
            >
              Logout
            </button>
          </div>
        )}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => navigate("/babies")}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded text-white"
          >
            Manage Baby Profiles
          </button>
          <button
            onClick={() => navigate("/schedules")}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded text-white"
          >
            Baby Scheduler
          </button>
          <button
            onClick={() => navigate("/expenses")}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded text-white"
          >
            Expense Tracker
          </button>
          <button
            onClick={() => navigate("/milestones")}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded text-white"
          >
            Record Milestones
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;