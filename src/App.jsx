// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Community from "./components/Community";
// import Chatbot from "./components/Chatbot";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import VerifyEmail from "../pages/VerifyEmail";
// import Dashboard from "../pages/Dashboard";
// import BabyProfiles from "../pages/BabyProfiles";
// import Schedules from "../pages/Schedules";
// import Expenses from "../pages/Expenses";
// import Milestones from "../pages/Milestones";
// import DailyReads from "../pages/DailyReads";
// import Scriptures from "../pages/Scriptures";
// import Profile from "../pages/Profile";
// import Settings from "../pages/Settings";

// function App() {
//   return (
//     <div className="min-h-screen bg-white text-blue-900 font-sans">
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar />
//               <div id="hero"><Hero /></div>
//               <div id="features"><Features /></div>
//               <div id="community"><Community /></div>
//               <div id="chatbot"><Chatbot /></div>
//               <CTA />
//               <div id="footer"><Footer /></div>
//             </>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/verify" element={<VerifyEmail />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/babies" element={<BabyProfiles />} />
//         <Route path="/schedules" element={<Schedules />} />
//         <Route path="/expenses" element={<Expenses />} />
//         <Route path="/milestones" element={<Milestones />} />
//         <Route path="/daily-reads" element={<DailyReads />} />
//         <Route path="/scriptures" element={<Scriptures />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/chatbot" element={<Chatbot />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
// import Community from "./components/Community";
import Chatbot from "./components/Chatbot";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// the ages in the dashboard of the app(Teju can check this pages later for his contributions when hes done with the backend)

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
import BMICalculator from "../pages/BMICalculator";
import BabyMeasurements from "../pages/BabyMeasurements";
import BirthdayReminder from "../pages/BirthdayReminder";
import PediatricianFinder from "../pages/PediatricianFinder";
import Accessories from "../pages/Accessories";
import JaundiceChecker from "../pages/JaundiceChecker";
import SkinDiseaseDetector from "../pages/SkinDiseaseDetector";


function App() {
  return (
    <div className="min-h-screen bg-[#FFF5F5] text-[#4A2C5A] font-poppins max-w-full overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div id="hero"><Hero /></div>
              <div id="features"><Features /></div>
              {/* <div id="community"><Community /></div> */}
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
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/baby-measurements" element={<BabyMeasurements />} />
        <Route path="/birthday-reminder" element={<BirthdayReminder />} />
        <Route path="/pediatrician-finder" element={<PediatricianFinder />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/jaundice-checker" element={<JaundiceChecker />} />
        <Route path="/skin-disease-detector" element={<SkinDiseaseDetector />} />
      </Routes>
    </div>
  );
}

export default App;