import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Community from "./components/Community";
import Chatbot from "./components/Chatbot";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import VerifyEmail from "../pages/VerifyEmail";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900 font-sans">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div id="hero"><Hero /></div>
              <div id="features"><Features /></div>
              <div id="community"><Community /></div>
              <div id="chatbot"><Chatbot /></div>
              <CTA />
              <div id="footer"><Footer /></div>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/babies" element={<div>Baby Profiles (Coming Soon)</div>} />
        <Route path="/schedules" element={<div>Baby Scheduler (Coming Soon)</div>} />
        <Route path="/expenses" element={<div>Expense Tracker (Coming Soon)</div>} />
        <Route path="/milestones" element={<div>Milestones (Coming Soon)</div>} />
      </Routes>
    </div>
  );
}

export default App;