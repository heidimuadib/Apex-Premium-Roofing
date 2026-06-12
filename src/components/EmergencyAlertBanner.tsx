import { useState } from "react";
import { AlertOctagon, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function EmergencyAlertBanner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="relative bg-red-950 text-red-100 border-b border-red-800 text-xs sm:text-sm py-2 px-4 z-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <div className="flex flex-wrap items-center gap-1.5 font-medium tracking-wide">
              <AlertOctagon className="w-4 h-4 text-brand-orange shrink-0" />
              <span>ACTIVE EMERGENCY RESPONSE:</span>
              <span className="text-white">Storm &amp; Hail Support Crews deployed across Sydney, Melbourne, Brisbane, Perth &amp; London.</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="text-zinc-400">Guaranteed response under 90 minutes.</span>
            <a
              href="tel:+1300000000"
              className="flex items-center gap-1 bg-brand-orange hover:bg-brand-orange-hover text-white py-1 px-3.5 rounded font-mono text-xs transition duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 RAPID HOTLINE</span>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-white text-red-300 transition shrink-0 ml-1"
              aria-label="Close Alert Banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
