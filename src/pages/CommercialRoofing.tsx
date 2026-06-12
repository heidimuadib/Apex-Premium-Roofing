import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  ShieldCheck,
  CheckCircle,
  Truck,
  HardHat,
  Eye,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";
import SEO from "../components/SEO";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function CommercialRoofing() {
  const assetTargets = [
    {
      title: "Logistic Warehouses & Distribution Hubs",
      desc: "Managing huge architectural footprints. We design long-span corrugated steel overlays and robust skylight systems to optimize internal daylight metrics.",
    },
    {
      title: "Industrial Manufacturing Factories",
      desc: "Providing high resistance to atmospheric chemical residues, heat exhausts, and siphonic downpressure gutters to withstand intensive conditions.",
    },
    {
      title: "Corporate Commercial Offices",
      desc: "Delivering noise-absorbing acoustic sheets, thermal vapor controls, and stable mounting preparations for major solar or roof HVAC plants.",
    },
    {
      title: "Retail Hubs & Shopping Precincts",
      desc: "Fast, quiet, sectioned night-shift executions that ensure complete safety for shoppers and zero business disruption for anchor tenancies.",
    },
  ];

  return (
    <>
      <SEO
        title="Commercial &amp; Industrial Roofing Contractors"
        description="Premium commercial-grade roofing systems for warehouses, retail hubs, and factories across Australia and the UK. Fully bonded estimators, $20M liability."
        schemaType="RoofingService"
      />

      {/* 1. HERO BANNER */}
      <section className="relative py-20 sm:py-28 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
            alt="Apex commercial scale roof replacement project"
            className="w-full h-full object-cover opacity-20 object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 rounded-full text-brand-orange font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-4 h-4" />
            <span>Industrial Portfolio Competence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight max-w-5xl leading-tight">
            Commercial &amp; Industrial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
              Roofing Systems
            </span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-light">
            Providing commercial-grade structural steel solutions, heavy-duty box gutter redesigns, and comprehensive safety compliance across major warehouse layouts.
          </p>
        </div>
      </section>

      {/* 2. TARGET SECTORS */}
      <section className="py-20 bg-zinc-900/10 border-b border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest uppercase font-mono text-brand-orange">
              Specialist Portfolios Covered
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase">
              COMMERCIAL STRUCTURAL TARGETS
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded"></div>
            <p className="text-zinc-400 text-xs sm:text-sm pt-2">
              Our engineering crews are geared to support high-occupancy business premises smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assetTargets.map((asset, aIdx) => (
              <div
                key={aIdx}
                className="bg-brand-medium border border-zinc-800 p-6 sm:p-8 rounded-xl space-y-3.5 hover:border-brand-orange/30 transition duration-250"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg tracking-tight">
                    {asset.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">{asset.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORKPLACE HEALTH & SAFETY SPECS */}
      <section className="py-20 bg-neutral-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Safe visual specs image description */}
            <div className="lg:col-span-5 relative aspect-[5/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 group shadow-2xl order-last lg:order-first">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Construction engineer wearing harness at commercial site"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-sm p-4 rounded-xl border border-zinc-800 font-mono text-center">
                <span className="text-xs text-brand-orange font-bold">
                  WH&amp;S COMPLIANCE VERIFIED
                </span>
                <span className="text-[10px] text-zinc-400 block mt-1">
                  100% safety record with dedicated in-house compliance officers.
                </span>
              </div>
            </div>

            {/* Workplace HSE Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                  Operational Continuity
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                  ZERO BUSINESS INTERRUPTION PLEDGE
                </h3>
                <div className="w-16 h-1 bg-brand-orange rounded mt-2"></div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Industrial roofing demands strict safety isolation and meticulous staging controls. We provide self-mounted pedestrian safety gantries, complete scaffolding configurations, and custom siphonic drainage preparations in-house.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Self-Scaffolding Setups",
                    desc: "Eliminating third-party sub-contractor scheduling delays.",
                  },
                  {
                    title: "Sectional Night Handover",
                    desc: "Performing quiet work layouts during off-peak trade hours.",
                  },
                  {
                    title: "EPA Compliant Recycles",
                    desc: "Authorized processing of asbestos, metals, and composite structures.",
                  },
                  {
                    title: "$20M Multi-Tier Liability",
                    desc: "Full comprehensive business security backup on every site.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-brand-medium border border-zinc-800/60 p-4 rounded-lg space-y-1.5 hover:border-zinc-700 transition">
                    <div className="flex items-center gap-2 text-brand-orange font-bold font-mono text-xs">
                      <HardHat className="w-4 h-4" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-zinc-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEAMLESS ESTIMATE CONVERSION */}
      <section className="bg-zinc-950 py-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                Corporate Tenders / RFPs
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase leading-none">
                REQUEST STRUCTURAL TENDER
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                Provide basic location coordinates. Our commercial estimators arrange comprehensive site survey logs and issue formal commercial bids.
              </p>
            </div>

            <div>
              <LeadCaptureForm defaultService="commercial" sourcePage="Commercial Landing Page" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
