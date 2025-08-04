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
import BabyProfiles from "../pages/BabyProfiles";
import Schedules from "../pages/Schedules";
import Expenses from "../pages/Expenses";
import Milestones from "../pages/Milestones";
import DailyReads from "../pages/DailyReads";
import Scriptures from "../pages/Scriptures";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

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
        <Route path="/babies" element={<BabyProfiles />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/daily-reads" element={<DailyReads />} />
        <Route path="/scriptures" element={<Scriptures />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  );
}

export default App;