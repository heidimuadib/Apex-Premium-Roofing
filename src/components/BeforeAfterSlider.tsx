import React, { useState, useRef, useEffect } from "react";
import { Eye, ArrowLeftRight, Paintbrush } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // High-ticket repair visual transformations from Unsplash
  const beforeImg = "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80"; // Severe moisture & dirt
  const afterImg = "https://images.unsplash.com/photo-1632829172927-348532038581?auto=format&fit=crop&w=1200&q=80"; // Handcrafted clean architecture slate

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const onMouseUp = () => stopDragging();
    const onTouchEnd = () => stopDragging();

    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-brand-orange text-xs font-bold tracking-widest uppercase font-mono">
            <Paintbrush className="w-4 h-4" />
            <span>Interactive Transformation Slider</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Before &amp; After Restoration
          </h3>
          <p className="text-zinc-400 text-sm max-w-xl">
            Drag the custom indicator to witness our complete architectural heritage roof overhaul processes.
          </p>
        </div>

        {/* Diagnostic Key Indicator */}
        <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-red-500 bg-red-950/40 px-2 py-1 rounded">
            <span>BEFORE</span>
          </div>
          <ArrowLeftRight className="w-4 h-4 text-zinc-600 animate-pulse" />
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-green-500 bg-green-950/40 px-2 py-1 rounded">
            <span>AFTER APEX Build</span>
          </div>
        </div>
      </div>

      {/* Slider Core Container */}
      <div
        ref={containerRef}
        onMouseMove={(e) => {
          if (isDragging.current) handleMove(e.clientX);
        }}
        onTouchMove={(e) => {
          if (isDragging.current) handleMove(e.touches[0].clientX);
        }}
        className="relative w-full aspect-[16/9] max-h-[500px] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 select-none cursor-ew-resize group shadow-2xl"
      >
        {/* Under image (AFTER - Full Screen background) */}
        <img
          src={afterImg}
          alt="After Apex restoration build"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute right-4 bottom-4 bg-black/70 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded items-center gap-1.5 flex shadow-lg">
          <Eye className="w-3.5 h-3.5" />
          <span>Completed Heavy Slate Installation</span>
        </div>

        {/* Over image (BEFORE - Width controlled by slider position) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImg}
            alt="Before restoration status"
            className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
            style={{ width: containerRef.current?.offsetWidth || "100%", height: "100%" }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute left-4 bottom-4 bg-black/70 backdrop-blur-sm border border-red-500/30 text-red-400 font-mono text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded items-center gap-1.5 flex shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            <span>Severe Moisture Leakage &amp; Decayed Clay Tiling</span>
          </div>
        </div>

        {/* Drag Line Indicator */}
        <div
          className="absolute inset-y-0 w-1 bg-brand-orange cursor-ew-resize flex items-center justify-center pointer-events-auto"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Central Handle */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-brand-orange text-white flex items-center justify-center border-4 border-zinc-950 shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-150">
            <ArrowLeftRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
