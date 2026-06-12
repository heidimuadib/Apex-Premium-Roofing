import { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item opened by default

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {FAQS.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="border border-zinc-800/80 bg-brand-medium hover:border-zinc-700/85 transition-colors duration-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-5 text-left text-white font-semibold gap-4 cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm sm:text-base tracking-tight font-sans">{item.question}</span>
              </div>
              <span className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-orange border-brand-orange/30" : ""}`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="p-5 pt-0 border-t border-zinc-800/30 text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
