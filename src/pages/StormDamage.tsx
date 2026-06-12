import React from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  ShieldAlert,
  Phone,
  FileText,
  Camera,
  HeartHandshake,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import SEO from "../components/SEO";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function StormDamage() {
  const steps = [
    {
      step: "01",
      title: "Immediate 90-Min Protection",
      desc: "We deploy secure heavy-duty tarpaulins or physical shielding boards to block continuous water ingress, minimizing collateral ceiling collapsing.",
    },
    {
      step: "02",
      title: "Laser Hail & Wind Scan",
      desc: "Using high-definition drones and physical moisture scanners to catalog fractured micro-fissures, creating a solid evidence portfolio.",
    },
    {
      step: "03",
      title: "Direct Insurer Billing",
      desc: "Our dispatch specialists complete the necessary documentation, assisting you from the initial claim filing to direct insurance payouts.",
    },
    {
      step: "04",
      title: "Full Structural Rebuild",
      desc: "We replace compromised areas with premium Colorbond steel or dense tiles, fully backed by our 10-year master guarantee.",
    },
  ];

  return (
    <>
      <SEO
        title="Immediate Storm &amp; Hail Damage Restoration"
        description="24/7 Priority emergency storm repairs and forensic hail assessments. High-definition drone evidence mapped directly for leading insurance adjusters."
        schemaType="RoofingService"
      />

      {/* 1. URGENT WAR-ZONE RED BANNER */}
      <section className="relative py-20 bg-red-950/40 text-red-100 overflow-hidden border-b-2 border-red-900 scroll-mt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1600&q=80"
            alt="Apex emergency storm response teams managing roof damage"
            className="w-full h-full object-cover opacity-15 object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-red-950/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-900 border border-red-500 rounded-full px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest text-red-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span>24/7 CRITICAL RED ALERT EMERGENCY SQUADS RUNNING</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
            Storm &amp; Hail <br />
            <span className="text-brand-orange">Damage Restoration</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            Severe gale, hail, and tree fallback remediation. We seal leak penetrations under 90 minutes and furnish itemized structural files designed for claims adjusters.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="tel:+1300000000"
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold text-sm font-mono uppercase tracking-widest py-4.5 px-8 rounded-lg flex items-center justify-center gap-2 shadow-xl transition"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>DIAL 24/7 HOTLINE: 1300 APEX RP</span>
            </a>
            <span className="text-xs text-red-300 font-mono">
              Post-storm callout premiums fully waived for insured structures.
            </span>
          </div>
        </div>
      </section>

      {/* 2. EMERGENCY PROCESS STAGE MAP */}
      <section className="py-20 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
              Action Plan
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase">
              THE APEX EMERGENCY WORKFLOW
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-brand-medium border border-zinc-800 p-6 rounded-xl space-y-4 hover:border-red-500/30 transition relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-red-500 bg-red-950/50 border border-red-900/30 px-2.5 py-1 rounded">
                    PHASE {s.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {s.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INSURANCE DIRECT-BILLING INFORMATION */}
      <section className="py-20 bg-neutral-950 border-y border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Context block */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
                  Claims Handled Smoothly
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                  DIRECT billing &amp; claim file preparations
                </h3>
                <div className="w-16 h-1 bg-brand-orange rounded mt-2"></div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Navigating structural storm damage shouldn't involve financial stress. We gather comprehensive forensic telemetry of hail impact sites and work directly with loss adjusters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Camera,
                    title: "Forensic Drone Survey",
                    desc: "High-resolution closeups specifying surface fractures & loose seals.",
                  },
                  {
                    icon: FileText,
                    title: "Insurer-Approved Reports",
                    desc: "Providing precise itemised estimates matching modern adjusting parameters.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Adjuster Reconciliation",
                    desc: "Our estimators meet claims officers on-site to verify structural damage directly.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Direct Account Setup",
                    desc: "Where authorized, we arrange direct-billing profiles to handle payments seamlessly.",
                  },
                ].map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={index} className="flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-brand-orange flex items-center justify-center shrink-0">
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide">
                          {item.title}
                        </h4>
                        <p className="text-zinc-500 text-xs mt-1">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Secure Registry Form */}
            <div className="lg:col-span-5 bg-brand-medium border border-zinc-800 p-6 sm:p-8 rounded-xl shadow-2xl">
              <div className="text-center mb-6">
                <span className="text-xs font-bold text-red-500 bg-red-950/40 border border-red-900/10 px-3 py-1 rounded-full uppercase font-mono tracking-widest">
                  Priority Dispatch Form
                </span>
                <h4 className="text-lg font-bold text-white mt-3">REGISTER SECURE INCIDENT</h4>
                <p className="text-xs text-zinc-500 mt-1">
                  Average response under 60 minutes for active breaches.
                </p>
              </div>

              <LeadCaptureForm defaultService="storm" sourcePage="Storm Damage landing page" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
