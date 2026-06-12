import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Phone,
  Wrench,
  Layers,
  Building2,
  Grid,
  ShieldAlert,
  Search,
  Star,
  Users,
  DollarSign,
  MapPin,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import TestimonialCarousel from "../components/TestimonialCarousel";
import FAQSection from "../components/FAQSection";
import LeadCaptureForm from "../components/LeadCaptureForm";
import { SERVICES } from "../data";

// Type-safe Icon Map Helper
const IconMap: Record<string, any> = {
  Wrench,
  Layers,
  Building2,
  Grid,
  ShieldAlert,
  Search,
};

export default function Home() {
  const [activeTabRegion, setActiveTabRegion] = useState<"AU" | "UK">("AU");

  // Counter simulation
  const [projectsCount, setProjectsCount] = useState(380);
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectsCount((prev) => {
        if (prev >= 584) {
          clearInterval(interval);
          return 584;
        }
        return prev + 6;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="Roof Replacement, High-End Metal &amp; Slate Specialists"
        description="Ranked #1 premium residential &amp; commercial roofing contractor across Sydney, Toorak, London and beyond. Secure a complimentary forensic inspection today."
        schemaType="LocalBusiness"
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-black overflow-hidden pt-12 md:pt-16 pb-20">
        {/* Full-width premium dark drone roofing image with deep gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85"
            alt="Apex premium residential slate shingles and seam architecture"
            className="w-full h-full object-cover opacity-35 object-center scale-105 animate-[pulse_10s_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950"></div>
          {/* Subtle safety amber glow */}
          <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Elite badges row */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-6"
          >
            <div className="flex items-center gap-1.5 bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1.5 rounded-full text-white font-mono text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Multi-Award Winning Master Roofers</span>
            </div>
          </motion.div>

          {/* Master Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none max-w-5xl mx-auto font-sans"
          >
            Roofing Done Right <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
              The First Time.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed font-light"
          >
            Trusted roof repairs, massive architectural replacements, and specialist commercial roofing installers. Commissioning the highest-tier steel, Welsh slate, and European custom tile layouts across Australia and the UK.
          </motion.p>

          {/* Micro Trust badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mt-10"
          >
            {[
              { label: "Fully Licensed & Insured", desc: "Class A Structural Plumbers" },
              { label: "10-Year Workmanship Warranty", desc: "Underwritten & Transferable" },
              { label: "24/7 Red Alert Storm Response", desc: "90-Min On-Site Callout Guarantee" },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-zinc-900/60 backdrop-blur-inner border border-zinc-800/80 rounded-xl p-3.5 text-left transition hover:border-zinc-700/80"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  {idx === 0 && <ShieldCheck className="w-5 h-5 text-brand-orange" />}
                  {idx === 1 && <Award className="w-5 h-5 text-brand-orange" />}
                  {idx === 2 && <Clock className="w-5 h-5 text-brand-orange" />}
                </div>
                <div>
                  <div className="text-white font-bold text-xs uppercase tracking-wide">{badge.label}</div>
                  <div className="text-zinc-500 text-[10px] font-mono leading-none mt-1">{badge.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Action CTAs Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <a
              href="#quote-section"
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-bold uppercase tracking-widest text-xs py-5 px-10 rounded-lg inline-flex items-center justify-center gap-2 group cursor-pointer transition shadow-xl"
            >
              <span>GET FREE HIGH-TICKET ROOF INSPECTION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href="tel:+1300000000"
              className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 hover:border-brand-orange text-white font-bold uppercase tracking-widest text-xs py-5 px-8 rounded-lg inline-flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-brand-orange animate-pulse" />
              <span>DIAL ESTIMATOR: 1300 APEX RP</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST METRIC BAR */}
      <section className="bg-zinc-950 border-y border-zinc-900 py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: `${projectsCount}+`, label: "Contracts Handled Successfully" },
              { val: "20+", label: "Years Combined Structural Expert Mastery" },
              { val: "4.9★", label: "Average Google Review Score" },
              { val: "24/7", label: "Red Alert Storm Emergency Availability" },
            ].map((metric, i) => (
              <div key={i} className="space-y-1.5 border-r last:border-r-0 border-zinc-900 px-2 lg:px-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-white tracking-tighter">
                  {i === 0 ? `${projectsCount}+` : metric.val}
                </div>
                <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-semibold font-sans leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PREMIUM SERVICES GRID */}
      <section className="bg-zinc-900/40 py-20 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <div className="text-center space-y-2 mb-14">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
              Unrivalled Craftsmanship Standards
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
              APEX ROOFING SPECIALITIES
            </h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto rounded"></div>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto pt-2">
              Serving premium homeowners, industrial asset managers, and architectural firms with zero shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((serv) => {
              const IconComp = IconMap[serv.iconName] || Wrench;
              return (
                <div
                  key={serv.id}
                  className="bg-brand-medium border border-zinc-800/80 rounded-xl overflow-hidden shadow-lg hover:border-brand-orange/45 transition-all duration-300 flex flex-col group"
                >
                  {/* Card Visual Background Banner */}
                  <div className="h-48 relative overflow-hidden shrink-0">
                    <img
                      src={serv.image}
                      alt={serv.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-black/30"></div>
                    <div className="absolute bottom-3 left-4 bg-black/75 backdrop-blur-sm shadow border border-zinc-800 font-mono text-[10px] font-bold text-zinc-300 py-1 px-2.5 rounded">
                      Est. Vol: {serv.pricingRange}
                    </div>
                  </div>

                  {/* Card Info Blocks */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-brand-orange">
                        <IconComp className="w-5 h-5 shrink-0" />
                        <h3 className="text-lg font-bold text-white tracking-tight">{serv.title}</h3>
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{serv.shortDesc}</p>
                    </div>

                    <div className="space-y-4">
                      {/* Checkmarks */}
                      <ul className="space-y-1.5 border-t border-zinc-800/60 pt-4 text-xs font-mono text-zinc-500">
                        {serv.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <span className="text-brand-orange shrink-0 font-bold">&bull;</span>
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Direct Target router link */}
                      <Link
                        to={
                          serv.id === "repairs"
                            ? "/repairs"
                            : serv.id === "replacement"
                            ? "/replacement"
                            : serv.id === "commercial"
                            ? "/commercial"
                            : serv.id === "storm"
                            ? "/storm-damage"
                            : "/contact"
                        }
                        className="w-full text-center bg-zinc-900 border border-zinc-800 hover:border-brand-orange text-zinc-300 hover:text-white transition py-2.5 rounded font-mono text-xs font-bold block"
                      >
                        EXPLORE SERVICE CAPABILITIES &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE BEFORE/AFTER SHOWCASE */}
      <section className="bg-zinc-950 py-20 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 5. WHY CHOOSE US - ICON GRID */}
      <section className="bg-neutral-950 py-20 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left intro text */}
            <div className="space-y-5 lg:col-span-1">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                Engineered for High-Ticket Value
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight uppercase">
                WHY CONTRACTORS CHOOSE APEX PREMIUM
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                We design and support custom-engineered metal roof envelopes and hand-fitted materials that routinely add 15-25% to residential asset valuations while eliminating micro-structural water infiltration risks.
              </p>
              <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono font-bold text-zinc-500">
                <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded">
                  &bull; ISO Approved Workflow
                </div>
                <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded">
                  &bull; Certified Estimators
                </div>
              </div>
            </div>

            {/* Right Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Licensed & Class-A Insured",
                  desc: "Holding top-tier $20,000,000 public coverage and specialized structural plumbing builders certificates.",
                },
                {
                  icon: Award,
                  title: "Master Guarantee Deed",
                  desc: "Backed by an ironclad 10-year workmanship warranty completely transferrable to subsequent property owners.",
                },
                {
                  icon: Users,
                  title: "Elite Master Craftsman Crew",
                  desc: "Every team supervisor possesses a minimum 12 years of specialized slate/Colorbond cladding experience.",
                },
                {
                  icon: Clock,
                  title: "90-Min Rapid Storm Mitigations",
                  desc: "Specialized wind and hail support vehicles equipped with full solid-panel temporary tarpaulin structures 24/7.",
                },
                {
                  icon: DollarSign,
                  title: "Transparent Valuation & Bids",
                  desc: "Itemized drone thermal imaging reports outlining expected lifespans and exact metal gauges. Zero surprises.",
                },
                {
                  icon: Building2,
                  title: "High-Ticket Portfolio Mastery",
                  desc: "Partnering with boutique estate developers and luxury commercial developers to manage premium requirements smoothly.",
                },
              ].map((reason, idx) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={idx}
                    className="bg-brand-medium border border-zinc-800 p-5 rounded-xl space-y-3.5 hover:border-zinc-700 transition"
                  >
                    <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                        {reason.title}
                      </h4>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TIMELINE PROCESS SECTION */}
      <section className="bg-zinc-900/30 py-20 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-16">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
              The Path to Seamless Security
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              OUR SYSTEMATIC EXECUTION MAP
            </h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Line for Desktop */}
            <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-zinc-800/80 -z-10"></div>

            {[
              {
                step: "Step 01",
                title: "Book Inspection",
                desc: "Secure your complementary forensic assessment date via our instant priority CRM form below.",
              },
              {
                step: "Step 02",
                title: "Roof Assessment",
                desc: "Estimators deploy heavy-definition drone cameras & high-precision diagnostic thermal sensors.",
              },
              {
                step: "Step 03",
                title: "Detailed Valuation",
                desc: "Receive an itemized quote of materials, expected lifespans, and direct-to-insurer credentials.",
              },
              {
                step: "Step 04",
                title: "Project Guarantee",
                desc: "Master slate-fitters or cladders execute safely, backed by a 10-year underwritten warranty deed.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="bg-brand-medium border border-zinc-800/80 p-6 rounded-xl space-y-4 group relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-zinc-500 tracking-widest">
                    SYSTEM INDEX
                  </span>
                  <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded">
                    {p.step}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-white font-bold text-base uppercase tracking-tight">{p.title}</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>

                {/* Number Watermark */}
                <div className="text-zinc-900 group-hover:text-zinc-800/30 transition-colors font-black text-6xl font-mono absolute bottom-2 right-4 -z-10 leading-none select-none">
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GOOGLE REVIEWS / TESTIMONIALS */}
      <section className="bg-zinc-950 py-20 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-14">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
              Unrivalled Client Praise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              TRUSTED BY PREMIUM PROPERTY OWNERS
            </h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto rounded"></div>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 8. INTERACTIVE SERVICE AREAS / MAP HIGHLIGHTS */}
      <section className="bg-neutral-950 py-20 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Information Block */}
            <div className="space-y-6 lg:col-span-1">
              <div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                  Global Roofing Infrastructure
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight leading-none mt-1">
                  METRO OUTPOSTS
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We operate elite, specialized roofing squads centrally managed from physical corporate towers in major metropolitan centers. Select your primary region below:
              </p>

              {/* Toggle Region Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTabRegion("AU")}
                  className={`flex-1 py-3 px-4 font-mono font-bold text-xs rounded transition cursor-pointer text-center ${
                    activeTabRegion === "AU"
                      ? "bg-brand-orange text-white"
                      : "bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-800"
                  }`}
                >
                  AUSTRALIA HQ
                </button>
                <button
                  onClick={() => setActiveTabRegion("UK")}
                  className={`flex-1 py-3 px-4 font-mono font-bold text-xs rounded transition cursor-pointer text-center ${
                    activeTabRegion === "UK"
                      ? "bg-brand-orange text-white"
                      : "bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-800"
                  }`}
                >
                  UNITED KINGDOM HQ
                </button>
              </div>

              {/* Rapid Service Pledge */}
              <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl space-y-2">
                <div className="text-xs font-bold text-white uppercase font-mono tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Licensed Area Pledge</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Apex operates exclusively within specified councils. If your postcode is listed in our boundaries, we guarantee estimators can reach your location within 48 hours for general projects.
                </p>
              </div>
            </div>

            {/* Simulated Interactive Map Region Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeTabRegion === "AU" ? (
                <>
                  {[
                    {
                      city: "Sydney Hub (NSW)",
                      areas: "Vaucluse, Point Piper, Mosman, Double Bay, Hunters Hill, Turramurra",
                      tel: "+61 2 8000 0000",
                      hq: "Level 32, 200 George Street",
                    },
                    {
                      city: "Melbourne Hub (VIC)",
                      areas: "Toorak, Brighton, South Yarra, Kew, Hawthorn, Canterbury",
                      tel: "+61 3 9000 0000",
                      hq: "Level 50, 120 Collins Street",
                    },
                    {
                      city: "Brisbane Hub (QLD)",
                      areas: "Ascot, Hamilton, New Farm, Paddington, Clayfield, Bulimba",
                      tel: "+61 7 3000 0000",
                      hq: "Level 22, 111 Eagle Street",
                    },
                    {
                      city: "Perth Hub (WA)",
                      areas: "Dalkeith, Peppermint Grove, Cottesloe, Nedlands, City Beach",
                      tel: "+61 8 6000 0000",
                      hq: "Level 14, 191 St Georges Terrace",
                    },
                  ].map((cityData, cIdx) => (
                    <div
                      key={cIdx}
                      className="bg-brand-medium border border-zinc-800 p-5 rounded-xl space-y-4 hover:border-brand-orange/30 transition relative overflow-hidden group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                          <h4 className="text-white font-bold text-base tracking-tight">
                            {cityData.city}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                          Active Squads
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="text-zinc-500 block font-mono uppercase text-[9px]">
                            Primary Executive Suburbs:
                          </span>
                          <span className="text-zinc-300 font-sans">{cityData.areas}</span>
                        </div>
                        <div className="pt-2 border-t border-zinc-800/60 leading-normal">
                          <span className="text-zinc-500 block font-mono uppercase text-[9px]">
                            Regional HQ:
                          </span>
                          <span className="text-zinc-400">{cityData.hq}</span>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <a
                          href={`tel:${cityData.tel}`}
                          className="text-xs font-semibold font-mono text-brand-orange hover:text-white transition"
                        >
                          {cityData.tel}
                        </a>
                        <Link
                          to="/service-areas"
                          className="text-zinc-500 group-hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider"
                        >
                          View Boundary Map &rarr;
                        </Link>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="sm:col-span-2 bg-brand-medium border border-zinc-800 p-6 rounded-xl space-y-4 hover:border-brand-orange/30 transition group">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                      <h4 className="text-white font-bold text-lg tracking-tight">
                        Greater London Hub (UK)
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
                      Primary UK Base
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Apex houses high-ticket slate restoration architects based directly in high-density areas across greater London, from the royal boroughs to central banking sectors.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                    <div>
                      <span className="text-zinc-500 block font-mono uppercase text-[9px]">
                        Primary Borough Coverage:
                      </span>
                      <span className="text-zinc-300">
                        Kensington, Chelsea, Hampstead, Mayfair, Richmond, Belgravia, St John's Wood
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block font-mono uppercase text-[9px]">
                        Corporate HQ Office:
                      </span>
                      <span className="text-zinc-300">One Canada Square, Canary Wharf, London</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                    <a
                      href="tel:+442070000000"
                      className="text-sm font-semibold font-mono text-brand-orange hover:text-white transition"
                    >
                      UK HQ: +44 20 7000 0000
                    </a>
                    <Link
                      to="/service-areas"
                      className="text-xs font-bold font-mono text-zinc-400 group-hover:text-white transition uppercase tracking-widest"
                    >
                      EXPLORE FULL LONDON COUNCIL ROSTER &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="bg-zinc-900/45 py-20 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-14">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
              Invaluable Industry Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              SOPHISTICATED FAQS
            </h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto rounded"></div>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* 10. FINAL CONVERSION ESTIMATE SECTION */}
      <section id="quote-section" className="bg-neutral-950 py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* CTA copy column */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                  Protect Your Premium Structure Today
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mt-2">
                  NEED ROOFING EXPERTS YOU CAN TRUST?
                </h2>
              </div>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Do not leave your luxury structures vulnerable to hidden water logs, moss deterioration, or faulty seams. Complete our detailed priority registry below.
              </p>

              <div className="border-t border-zinc-900 pt-6 space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="text-brand-orange bg-brand-orange/10 p-2.5 rounded-lg border border-brand-orange/20 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h5 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
                      Guaranteed Zero Leak Survey
                    </h5>
                    <p className="text-zinc-500 text-xs text-zinc-400">
                      We utilize high-resolution micro sensors to verify absolute structural water-tightness.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="text-brand-orange bg-brand-orange/10 p-2.5 rounded-lg border border-brand-orange/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h5 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
                      Rapid Service Dial Dispatch
                    </h5>
                    <p className="text-zinc-500 text-xs text-zinc-400">
                      Call our dispatchers for immediate emergency assistance in under 90 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Lead Capture Form Column */}
            <div className="lg:col-span-7">
              <LeadCaptureForm defaultService="inspection" sourcePage="Home Page Footer" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
