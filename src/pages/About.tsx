import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  ShieldCheck,
  CheckCircle,
  Users,
  MapPin,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";

export default function About() {
  const certifications = [
    {
      title: "Master Plumbers Association (AU)",
      desc: "Licensed in structural roof plumbing, thermal damp diagnostics, and metal rollforming (Lic: #480295C).",
    },
    {
      title: "CITB Construction HSE Member (UK)",
      desc: "Our UK teams hold CSCS Gold Cards and fully comply with Health and Safety Executive Working at Height criteria.",
    },
    {
      title: "ISO 9001 Structural Audited",
      desc: "Operating systematic material testing & internal quality audit checks on every roof replacement draft.",
    },
    {
      title: "$20 Million Liability Insurance",
      desc: "Continuous comprehensive multi-million-dollar liability guarantee protects residential and commercial structures.",
    },
  ];

  const values = [
    {
      title: "No Sub-Contracting Shortcuts",
      desc: "We hire, train, and manage our own crew. We do not farm out high-ticket roofs to obscure third-party agencies.",
    },
    {
      title: "Premium Material Vetting",
      desc: "We only source heavy-gauge Colorbond sheeting and Welsh slate directly from certified global quarries with full serial stamps.",
    },
    {
      title: "Immaculate Workplace Safety",
      desc: "Dedicated safety officers deploy custom-fitted pedestrian catch-gantries and harness loops on every project.",
    },
  ];

  return (
    <>
      <SEO
        title="Bespoke Roofing Master Artisans &amp; Credentials"
        description="Learn about the master estimators, engineering roots, safety compliance, and multi-million dollar residential expertise at Apex Premium Roofing."
        schemaType="LocalBusiness"
      />

      {/* 1. HERO HEADER */}
      <section className="relative py-20 sm:py-28 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
            alt="Apex premium master builders coordinating slate roof replacement"
            className="w-full h-full object-cover opacity-15 object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1.5 rounded-full text-brand-orange font-mono text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Plumbers &amp; Builders</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight max-w-4xl leading-tight">
            NOT GENERIC ESTIMATORS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
              STRUCTURAL ROOFING ARTISANS.
            </span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
            We are built on engineering precision, high-end materials vetting, and a commitment to protecting your multi-million dollar structural assets.
          </p>
        </div>
      </section>

      {/* 2. CORPORATE CORE CERTIFICATIONS */}
      <section className="py-20 bg-zinc-900/10 border-b border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Intro details */}
            <div className="space-y-4 lg:col-span-1">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                Regulatory Credentials
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight leading-none leading-tight">
                CERTIFIED &amp; COMPLIANT
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We operate under systematic building controls across the southern hemisphere and the UK. Our credentials qualify us to handle high-risk installations up to 50 meters.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+1300000000"
                  className="bg-zinc-900 border border-zinc-800 hover:border-brand-orange text-zinc-300 hover:text-white transition py-3 px-6 rounded text-xs font-mono font-bold tracking-wider uppercase inline-block"
                >
                  Verify AU/UK Credentials
                </a>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-brand-medium border border-zinc-800 p-6 rounded-xl space-y-3.5 hover:border-zinc-700 transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base tracking-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY & VALUES */}
      <section className="py-20 bg-neutral-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* About image placeholder or visual */}
            <div className="lg:col-span-5 relative aspect-[5/4] sm:aspect-[4/5] max-h-[500px] rounded-2xl overflow-hidden border border-zinc-800 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Apex premium master cladder examining roof joints"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-sm p-4 rounded-xl border border-zinc-800">
                <span className="text-[10px] text-brand-orange font-bold font-mono uppercase">
                  UNCOMPROMISING VALUES
                </span>
                <span className="text-xs text-white block font-bold mt-1">
                  We maintain full control over quality, safety, and warranties.
                </span>
              </div>
            </div>

            {/* Core Values values */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                  Masterpiece Engineering
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                  THE APEX CONSTITUTION OF TRADITION
                </h3>
                <div className="w-16 h-1 bg-brand-orange rounded mt-2"></div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Our founders started the company with a single goal: to inject modern engineering physics into architectural roof restorations. Today, we protect some of the most expensive homes and warehouses in Australia and the United Kingdom.
              </p>

              <div className="space-y-5">
                {values.map((v, idx) => (
                  <div key={idx} className="bg-brand-medium border border-zinc-800/80 p-5 rounded-lg flex gap-4">
                    <div className="w-9 h-9 rounded bg-zinc-950 border border-brand-orange/25 text-brand-orange flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base leading-none mb-1">
                        {v.title}
                      </h4>
                      <p className="text-zinc-500 text-xs sm:text-sm">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION FOR INQUIRY */}
      <section className="bg-zinc-950 py-20 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
            Partner with Master Artisans
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            READY TO CONTRACT CERTIFIED LEADERS?
          </h3>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Book an forensic drone-scan and physical core evaluation. Our senior structural estimators supply comprehensive plans for replacement or restorations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold font-mono uppercase tracking-widest py-4 px-8 rounded transition inline-block cursor-pointer shadow-lg"
            >
              SCHEDULE COMPLIMENTARY SITE SURVEY
            </Link>
            <a
              href="tel:+1300000000"
              className="bg-zinc-900 border border-zinc-800 hover:border-brand-orange text-white text-xs font-bold font-mono uppercase tracking-widest py-4 px-6 rounded transition inline-block"
            >
              CALL ESTIMATOR DIRECT
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
