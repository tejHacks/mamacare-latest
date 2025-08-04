import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchExpenses = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please log in.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/expenses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch expenses");
      const data = await response.json();
      setExpenses(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <h2 className="text-2xl font-bold text-pink-400 mb-6">Expense Tracker</h2>
      {error && <p className="text-red-400">{error}</p>}
      {expenses.length === 0 ? (
        <p className="text-gray-300">No expenses yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {expenses.map((expense) => (
            <div key={expense.id} className="bg-black bg-opacity-70 rounded-lg p-4">
              <p><strong>Category:</strong> {expense.category}</p>
              <p><strong>Amount:</strong> {expense.amount}</p>
              <p><strong>Date:</strong> {expense.expense_date}</p>
              <p><strong>Description:</strong> {expense.description || "None"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}