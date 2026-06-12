import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import EmergencyAlertBanner from "./components/EmergencyAlertBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

// Import all premium pages
import Home from "./pages/Home";
import RoofRepairs from "./pages/RoofRepairs";
import RoofReplacement from "./pages/RoofReplacement";
import CommercialRoofing from "./pages/CommercialRoofing";
import StormDamage from "./pages/StormDamage";
import About from "./pages/About";
import ServiceAreas from "./pages/ServiceAreas";
import Contact from "./pages/Contact";

// 1. Scroll Restoration Utility for Seamless Page Transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#111111] text-white flex flex-col font-sans antialiased selection:bg-brand-orange selection:text-white">
        
        {/* 1. Global Red-Alert Storm Warning Marquee Banner */}
        <EmergencyAlertBanner />

        {/* 2. Global Sticky Obsidian Navigation deck */}
        <Navbar />

        {/* 3. Core Site Router Deck with full visual wrappers */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repairs" element={<RoofRepairs />} />
            <Route path="/replacement" element={<RoofReplacement />} />
            <Route path="/commercial" element={<CommercialRoofing />} />
            <Route path="/storm-damage" element={<StormDamage />} />
            <Route path="/about" element={<About />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* 4. Global Pinned Mobile Actions (Dial Support & Book Estimate) & Scrolling Sticky Badge Widget */}
        <FloatingActions />

        {/* 5. Comprehensive Legal and Corporate Regional Footer Grid */}
        <Footer />
        
      </div>
    </Router>
  );
}
