import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <h2 className="text-2xl font-bold text-pink-400 mb-6">Settings</h2>
      <div className="bg-black bg-opacity-70 rounded-lg p-4">
        <p className="text-gray-300">Settings page coming soon!</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg text-white font-semibold"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}