import { useNavigate } from "react-router-dom";

export default function BabyMeasurements() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-blue-600 p-4 pt-20 font-comic">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Baby Measurements</h2>
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6">
        <p className="text-blue-500">Baby Measurements coming soon! Track your baby’s growth milestones.</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}