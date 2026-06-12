import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Flame,
  Droplets,
  AlertTriangle,
  Activity,
  ShieldCheck,
  Phone,
  ArrowRight,
  ClipboardList,
} from "lucide-react";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function RoofRepairs() {
  const commonIssues = [
    {
      title: "Active Structural Leaks",
      icon: Droplets,
      urgency: "CRITICAL",
      desc: "Water penetrating timber layouts, causing ceiling sagging and mold. Requires rapid infrared moisture identification to block before structural decay.",
    },
    {
      title: "Broken / Slipped Shingles & Tiles",
      icon: AlertTriangle,
      urgency: "HIGH",
      desc: "Cracked terracotta, porous clay, or missing historic Welsh slates which break the continuous water barrier and invite immediate wind uplift damage.",
    },
    {
      title: "Metal Flashing & Gutter Rusting",
      icon: Wrench,
      urgency: "MEDIUM",
      desc: "Corroded box gutters, expansion joint splitting, or rusted fasteners in old standing-seam buildings, creating backpressure water flow beneath the metal.",
    },
    {
      title: "Ponding & Standing Water",
      icon: Activity,
      urgency: "HIGH",
      desc: "Flat or low-slope sections experiencing drainage blockages, creating extreme structural weight loads and micro-fissure asphalt leaks.",
    },
  ];

  return (
    <>
      <SEO
        title="Emergency Roof Repairs & Leak Diagnostics"
        description="Premium forensic leak detection, broken tile repairs, and metal structural restorations across Sydney, Brisbane, London and Melbourne. Call 24/7."
        schemaType="RoofingService"
      />

      {/* 1. Header Banner */}
      <section className="relative py-16 sm:py-24 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
            alt="Apex roofing repair specialists hand-soldering zinc joints"
            className="w-full h-full object-cover opacity-25 object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-950/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Forensic Joint &amp; Leak Specialists
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none leading-tight">
            ROOF REPAIRS &amp; Restoration
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-4 font-light">
            We isolate, repair, and guarantee structural integrity, saving millions in collateral interior damages. Operating with state-of-the-art infrared thermal moisture equipment.
          </p>
        </div>
      </section>

      {/* 2. Emergency Alert Flag */}
      <section className="bg-red-950/20 border-b border-red-900/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-red-500 animate-pulse shrink-0" />
            <div className="text-sm">
              <span className="text-white font-bold uppercase mr-2">[RED ALERT] active leak?</span>
              <span className="text-zinc-400">Our emergency crews are fully mobilised with solid tarpaulins right now.</span>
            </div>
          </div>
          <a
            href="tel:+1300000000"
            className="bg-brand-orange hover:bg-brand-orange-hover text-white py-2 px-6 rounded font-mono text-xs font-bold transition whitespace-nowrap uppercase tracking-wider"
          >
            CALL RAPID CREW: 1300 APEX RP
          </a>
        </div>
      </section>

      {/* 3. Common Issues grid list */}
      <section className="py-20 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest uppercase font-mono text-brand-orange">
              Axiom Assessment System
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
              CRITICAL WATER BREACH HAZARDS
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded"></div>
            <p className="text-zinc-400 text-xs sm:text-sm pt-2">
              Our estimators utilize physical probes and high-definition aerial drone cameras to diagnose and report structural damage before issuing contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map((issue, index) => {
              const IconComponent = issue.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-medium border border-zinc-800 rounded-xl p-6 sm:p-8 flex items-start gap-4 hover:border-zinc-700 transition"
                >
                  <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 text-brand-orange rounded-xl flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3.5">
                      <h3 className="text-lg font-bold text-white tracking-tight leading-none">
                        {issue.title}
                      </h3>
                      <span
                        className={`text-[9px] font-bold font-mono py-0.5 px-2 rounded ${
                          issue.urgency === "CRITICAL"
                            ? "bg-red-950 text-red-400 border border-red-900"
                            : issue.urgency === "HIGH"
                            ? "bg-amber-950 text-amber-400 border border-amber-900"
                            : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                        }`}
                      >
                        {issue.urgency}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{issue.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Process checklist content block with side photo */}
      <section className="py-20 bg-neutral-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Column Photo */}
            <div className="lg:col-span-5 relative aspect-[4/5] max-h-[500px] rounded-2xl overflow-hidden border border-zinc-800 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80"
                alt="Apex specialist inspecting timber structures with infrared scanner"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-sm p-4 rounded-xl border border-zinc-800">
                <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-wider block">
                  Forensic Diagnostics
                </span>
                <span className="text-xs text-white leading-tight mt-1 block font-bold">
                  99.4% leak isolation accuracy using advanced non-destructive moisture sensing.
                </span>
              </div>
            </div>

            {/* Column Details checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                  Guaranteed Durability
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  OUR STRUCTURAL RESTORATION METHODOLOGY
                </h3>
                <div className="w-16 h-1 bg-brand-orange rounded mt-2"></div>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                We handle repairs with a level of precision rarely seen in regional roofing circles. We do not apply temporary caulking over rust, nor do we patch historic slate with silicone. Every repair is an engineered restoration.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Physical Diagnostics & Core Probing",
                    desc: "Estimators systematically check under-roof timber moisture to guarantee dry foundation deckings.",
                  },
                  {
                    title: "Lead & Copper Flashing Redesigns",
                    desc: "Hand-forming architectural flashings around chimneys and parapet intersections using heavy gauge metals.",
                  },
                  {
                    title: "Bespoke Clay & Terracotta Slate Allocation",
                    desc: "Matching authentic profiles and physical density bounds from historical kiln providers.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange flex items-center justify-center shrink-0 font-bold text-xs mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base leading-none mb-1">
                        {item.title}
                      </h4>
                      <p className="text-zinc-500 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Live Booking Panel */}
      <section className="bg-zinc-950 py-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                Get an Estimate
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase leading-none">
                SCHEDULE REPAIRS TODAY
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Provide basic property details to configure a local estimator callout. We waive regular callout premiums for clients submitting through this secure digital portal today.
              </p>

              <ul className="space-y-2 text-xs font-mono text-zinc-500 pt-2">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                  <span>Licensed Structural Plumbers</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                  <span>Full Public Liability Protection ($20M)</span>
                </li>
              </ul>
            </div>

            <div>
              <LeadCaptureForm defaultService="repairs" sourcePage="Repairs Landing Page" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
