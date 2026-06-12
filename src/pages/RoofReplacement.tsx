import React from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Award,
  ShieldCheck,
  CheckCircle,
  Gem,
  Coins,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function RoofReplacement() {
  const replacementPhases = [
    {
      step: "Phase 01",
      title: "Deconstruction & Timber Check",
      desc: "Complete stripping of obsolete components. We inspect structural timber trusses and rafter layouts, replacing weak panels to construct a solid timber base.",
    },
    {
      step: "Phase 02",
      title: "Insulation & Vapor Barrier Deck",
      desc: "Laying advanced thermal acoustic radiant insulation and weather-tight vapor barriers. This controls climate and moisture layers permanently.",
    },
    {
      step: "Phase 03",
      title: "Premium Material Deployment",
      desc: "Perfect hand-fitting of chosen material sets (original Welsh Slate, Colorbond steel sheets, or custom Spain terracotta) using custom corrosion-free fastening hardware.",
    },
    {
      step: "Phase 04",
      title: "Ridge Venting & Drainage Finishing",
      desc: "Fitting heavy-gauge copper or color-matched box gutters and ridge vents. We carry out extreme pressure-leak validation before master builder sign-off.",
    },
  ];

  const premiumMaterials = [
    {
      name: "Original Welsh Slate",
      lifespan: "100+ Years",
      bestFor: "Heritage estates, luxury villas, timeless classical custom designs.",
      desc: "Hand-split in north Wales. Completely fireproof and imperishable to atmospheric corrosion.",
    },
    {
      name: "Colorbond® Ultra Steel",
      lifespan: "50 - 65 Years",
      bestFor: "Modern, coastal luxury, architectural homes with sharp angles.",
      desc: "Marine-grade high-tech steel engineered in Australia to deflect heat and resist wind shear.",
    },
    {
      name: "Bespoke Glazed Terracotta",
      lifespan: "80+ Years",
      bestFor: "Mediterranean or luxury Tudor style residences.",
      desc: "Vapor-fused glaze finish prevents water absorption, cracking, or moss growth permanently.",
    },
  ];

  return (
    <>
      <SEO
        title="Premium Roof Replacements & Slate Shingles"
        description="Architectural residential roof replacements utilizing Colorbond Ultra and Welsh Slate across Toorak, Sydney, London and Brisbane. Complimentary on-site surveys."
        schemaType="RoofingService"
      />

      {/* 1. HERO BANNER */}
      <section className="relative py-20 sm:py-28 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
            alt="Apex roofing replacement site building standing seam metal"
            className="w-full h-full object-cover opacity-20 object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 rounded-full text-brand-orange font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Structural Replacements</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight max-w-4xl leading-tight">
            Architectural Replacement <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
              For Premium Homes
            </span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-light">
            We transform aging residential envelopes into permanent architectural statements. Elevate structural safety, thermal management metrics, and physical asset valuation.
          </p>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION BLOCKS - MATERIALS */}
      <section className="py-20 bg-zinc-900/10 border-b border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest uppercase font-mono text-brand-orange">
              Elite Curated Library
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase">
              PREMIUM ARCHITECTURAL MATERIALS
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded"></div>
            <p className="text-zinc-400 text-xs sm:text-sm pt-2">
              We sourcing exclusively from authorized global quarries and high-tech steel mills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {premiumMaterials.map((mat, mIdx) => (
              <div
                key={mIdx}
                className="bg-brand-medium border border-zinc-800 p-6 sm:p-8 rounded-xl flex flex-col justify-between space-y-6 hover:border-zinc-700 transition"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest uppercase">
                      Class leading Materials
                    </span>
                    <span className="flex items-center gap-1 bg-brand-orange/10 text-brand-orange font-mono text-xs font-bold px-2.5 py-1 rounded">
                      <Gem className="w-3.5 h-3.5 shrink-0" />
                      {mat.lifespan}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">{mat.name}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{mat.desc}</p>
                </div>

                <div className="space-y-3 border-t border-zinc-800/80 pt-4 text-xs font-mono">
                  <div>
                    <span className="text-zinc-500 uppercase text-[9px] block">Best Match:</span>
                    <span className="text-zinc-300 font-sans">{mat.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS TIMELINE BLOCKS */}
      <section className="py-20 bg-neutral-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 text-center mb-16">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
              The 4-stage Project lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase">
              REPLACEMENT BUILD ROADMAP
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {replacementPhases.map((phase, pIdx) => (
              <div
                key={pIdx}
                className="bg-brand-medium border border-zinc-800/60 rounded-xl p-6 sm:p-8 flex items-start gap-4 hover:border-zinc-700 transition"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs font-extrabold text-brand-orange flex items-center justify-center shrink-0">
                  0{pIdx + 1}
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest leading-none block">
                    {phase.step}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-none leading-tight">
                    {phase.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINANCING AND COMPLIANCE BLOCK */}
      <section className="py-20 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Guarantee / Warranty Deeds Column */}
            <div className="space-y-6">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                Asset Safeguards
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                COMPREHENSIVE TRANSFERABLE GUARANTEES
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We believe in architectural roofing system endurance. Every contract is accompanied by a formal Deed of Workmanship Warranty, underwritten and fully transferable to future heirs or buyers of your premium assets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                  <span>10-Year Workmanship Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                  <span>50-Year Metallic Material Pledge</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                  <span>HSE &amp; CITB Safe Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                  <span>100% Fully Bonded Master Crews</span>
                </div>
              </div>
            </div>

            {/* Financial Phasing Plans Column */}
            <div className="bg-brand-medium border border-zinc-800 p-6 sm:p-8 rounded-xl space-y-6 relative">
              <div className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest font-mono">
                <Coins className="w-5 h-5" />
                <span>Flexible Capital Management</span>
              </div>
              <h4 className="text-white font-bold text-lg uppercase tracking-tight">
                PHASED EXECUTIONS &amp; FINANCING
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                For major commercial buildings or extensive residential estates costing upward of $50,000, we supply structured financing and split milestone plans to align your capital deployment perfectly with phase handovers. Talk with our executive billing clerks to tailor options.
              </p>
              <div className="flex gap-2 text-[10px] font-mono leading-none bg-zinc-950 p-3 rounded text-zinc-500">
                <span>&bull; Progress Payments</span>
                <span>&bull; Direct Claims Handling</span>
                <span>&bull; Custom Billing Retainers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACTIVE CONVERSION FORM */}
      <section className="bg-zinc-950 py-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                Complimentary Assessment
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase leading-none">
                ELEVATE YOUR ROOF STRUCTURE
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Connect with our estimators to organize an aerial drone laser scan &amp; detailed physical joint assessment. We outline exact metal systems matching your climate.
              </p>
            </div>

            <div>
              <LeadCaptureForm defaultService="replacement" sourcePage="Replacement Landing Page" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
