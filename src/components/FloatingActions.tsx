import { useState, useEffect } from "react";
import { Phone, CalendarCheck, ArrowUpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingActions() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopForm = () => {
    const element = document.getElementById("quote-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Mobile Pinned Footer Bar (Strictly hidden on lg desktop, visible on touch screens) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-neutral-950 border-t border-zinc-800 z-50 grid grid-cols-2 p-2 gap-2 shadow-2xl">
        <a
          href="tel:+1300000000"
          className="bg-zinc-900 border border-zinc-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-2 rounded-lg flex items-center justify-center gap-1.5 active:bg-zinc-800"
        >
          <Phone className="w-4 h-4 text-brand-orange animate-pulse" />
          <span>Call Support</span>
        </a>
        <button
          onClick={scrollToTopForm}
          className="bg-brand-orange text-white font-bold text-xs uppercase tracking-wider py-3.5 px-2 rounded-lg flex items-center justify-center gap-1.5 active:bg-brand-orange-hover cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Book Inspection</span>
        </button>
      </div>

      {/* 2. Desktop Floating/Scrolling Badge (Hidden on mobile, slides in from bottom right) */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex fixed bottom-6 right-6 flex-col gap-3 z-40"
          >
            {/* Rapid Dial Quick Button */}
            <a
              href="tel:+1300000000"
              className="bg-zinc-950 hover:bg-zinc-900 text-white border-2 border-zinc-800 hover:border-brand-orange py-3 px-5 rounded-full flex items-center gap-2.5 shadow-2xl transition duration-200 group"
            >
              <div className="w-2.5 h-2.5 bg-brand-orange rounded-full animate-ping"></div>
              <Phone className="w-4 h-4 text-brand-orange group-hover:rotate-12 transition-transform" />
              <span className="font-mono text-xs font-bold tracking-wider">CALL NOW: 1300 APEX RP</span>
            </a>

            {/* Sticky Lead Form Target CTA */}
            <button
              onClick={scrollToTopForm}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs tracking-widest uppercase py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-2xl transition duration-200 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>REQUEST ULTRA FREE INSPECTION</span>
            </button>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="self-end text-zinc-500 hover:text-white transition duration-200 inline-flex items-center gap-1.5 text-xs font-mono"
            >
              <ArrowUpCircle className="w-4 h-4" />
              <span>Scroll Top</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
