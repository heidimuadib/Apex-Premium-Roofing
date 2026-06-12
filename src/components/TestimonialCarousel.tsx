import { useState } from "react";
import { Star, ShieldCheck, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { REVIEWS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-brand-medium border border-zinc-800/80 p-6 sm:p-10 md:p-12 rounded-2xl shadow-xl overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute right-6 top-6 text-zinc-800 pointer-events-none opacity-30 select-none">
        <MessageSquareQuote className="w-24 h-24 sm:w-32 sm:h-32" />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-2 text-brand-orange text-xs font-bold tracking-widest uppercase font-mono">
          <ShieldCheck className="w-4.5 h-4.5" />
          <span>Verified Client Case Studies</span>
        </div>

        {/* Carousel Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Star Rating & Verified Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 font-mono text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Verified Client Invoice</span>
              </div>
            </div>

            {/* Quote content */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-zinc-100 leading-relaxed font-sans italic">
              &ldquo;{currentReview.text}&rdquo;
            </blockquote>

            {/* Divider */}
            <div className="h-px w-16 bg-brand-orange"></div>

            {/* Customer info & Project specifier */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <cite className="not-italic text-base font-bold text-white block">
                  {currentReview.author}
                </cite>
                <span className="text-zinc-500 text-xs sm:text-sm font-mono tracking-wide">
                  {currentReview.location}
                </span>
              </div>

              <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg px-4 py-2 text-right self-start sm:self-center">
                <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">
                  Contract / Project Type
                </div>
                <div className="text-xs sm:text-sm font-semibold text-brand-orange font-mono">
                  {currentReview.projectType}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Sliders Controllers */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-800/50 mt-4">
          {/* Tracking dots */}
          <div className="flex items-center gap-2">
            {REVIEWS.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "w-8 bg-brand-orange" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-brand-orange text-zinc-400 hover:text-white flex items-center justify-center transition duration-200"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-brand-orange text-zinc-400 hover:text-white flex items-center justify-center transition duration-200"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
