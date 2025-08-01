
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Community from "./components/Community";
import Chatbot from "./components/Chatbot";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900 font-sans">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="features"><Features /></div>
      <div id="community"><Community /></div>
      <div id="chatbot"><Chatbot /></div>
      <CTA />
      <div id="footer"><Footer /></div>
    </div>
  );
}

export default App;
