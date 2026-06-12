import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building,
  History,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import LeadCaptureForm from "../components/LeadCaptureForm";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contract Master Estimators &amp; Schedule Inspections"
        description="Connect with senior roofing inspectors at Apex Premium. Direct telephone lines for Sydney regional and London regional dispatchers active 24/7."
        schemaType="LocalBusiness"
      />

      {/* 1. HERO BANNER */}
      <section className="relative py-16 sm:py-24 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
            alt="Apex contact division coordinating logistics"
            className="w-full h-full object-cover opacity-15 object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-950/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Direct Corporate Desk
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none leading-tight">
            BOOK PRECISE ESTIMATES
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-4 font-light">
            Coordinate with our board of cladders and estimators. We waive the callout diagnostic premium for all digital contacts filed today.
          </p>
        </div>
      </section>

      {/* 2. CONTACT OPTIONS DUAL MATRIX */}
      <section className="py-20 bg-neutral-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Left Column: Office details, telemetrys */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-brand-orange font-bold font-mono uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Apex Administrative Registry</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  PHYSICAL DECK LOCATIONS
                </h2>
                <div className="w-16 h-1 bg-brand-orange rounded"></div>
              </div>

              {/* Specific Location Lists */}
              <div className="space-y-6">
                {/* Hub 1 */}
                <div className="bg-brand-medium border border-zinc-800 p-5 rounded-xl space-y-3">
                  <div className="flex items-center gap-2.5">
                    <Building className="w-5 h-5 text-brand-orange shrink-0" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      Australia Regional Tower
                    </h3>
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-400 font-sans">
                    <li className="flex gap-2 leading-none">
                      <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>Level 32, 200 George Street, Sydney NSW 2000</span>
                    </li>
                    <li className="flex gap-2">
                      <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                      <a href="tel:+61280000000" className="hover:text-white transition font-mono">
                        +61 2 8000 0000 (Exec Callout Line)
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Hub 2 */}
                <div className="bg-brand-medium border border-zinc-800 p-5 rounded-xl space-y-3">
                  <div className="flex items-center gap-2.5">
                    <Building className="w-5 h-5 text-brand-orange shrink-0" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      United Kingdom Regional Tower
                    </h3>
                  </div>
                  <ul className="space-y-2.5 text-xs text-zinc-400 font-sans">
                    <li className="flex gap-2 leading-none">
                      <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>One Canada Square, Canary Wharf, London E14 5AB</span>
                    </li>
                    <li className="flex gap-2">
                      <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                      <a href="tel:+442070000000" className="hover:text-white transition font-mono">
                        +44 20 7000 0000 (Dispatch Line)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Working Hours & General Specs */}
              <div className="border-t border-zinc-900 pt-6 space-y-4">
                <div className="flex gap-3 text-xs">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold uppercase font-mono tracking-wider">
                      Business Office Hours
                    </h4>
                    <p className="text-zinc-500 mt-1">
                      Monday &ndash; Friday: 07:00am &ndash; 06:00pm (Sydney &amp; London) <br />
                      Saturday: 08:00am &ndash; 01:00pm (Inspections and Surveys Only) <br />
                      Sunday: Closed (Emergency Crews On-Call 24/7)
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 text-xs">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold uppercase font-mono tracking-wider">
                      Direct Email Inbox
                    </h4>
                    <p className="text-zinc-500 mt-1">
                      <a href="mailto:inquiries@apex-premium-roofing.com" className="text-brand-orange font-mono hover:underline">
                        inquiries@apex-premium-roofing.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive CRM capture panel */}
            <div className="lg:col-span-7 bg-brand-medium border border-zinc-800 p-6 sm:p-10 rounded-2xl shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3 py-1.5 rounded-full uppercase font-mono tracking-wider">
                  Secure Priority Ticket
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-3">
                  ESTIMATOR ALLOCATION INQUIRY
                </h3>
              </div>

              <LeadCaptureForm defaultService="inspection" sourcePage="Dedicated Contact Page" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIMULATED MAP PLACEHOLDER BLOCK */}
      <section className="py-12 bg-zinc-900/10 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-medium border border-zinc-800 rounded-xl p-4 sm:p-6 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Metropolitan Satellite Mapping</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
              INTERACTIVE DISPATCH OUTPOSTS
            </h3>
            
            {/* The Map graphic panel */}
            <div className="relative aspect-[21/9] w-full max-h-[350px] bg-zinc-950 border border-zinc-850 rounded-lg overflow-hidden flex items-center justify-center">
              {/* Overlay graphics */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Apex logistics satellite systems"
                  className="w-full h-full object-cover opacity-15 object-center grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
              </div>

              {/* Simulated Map Pins */}
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 p-4">
                {[
                  { city: "SYDNEY REGION HQ", lat: "33.8° S", lng: "151.2° E", status: "ONLINE" },
                  { city: "MELBOURNE HQ", lat: "37.8° S", lng: "144.9° E", status: "ONLINE" },
                  { city: "BRISBANE HQ", lat: "27.4° S", lng: "153.0° E", status: "ONLINE" },
                  { city: "PERTH HQ", lat: "31.9° S", lng: "115.8° E", status: "ONLINE" },
                  { city: "LONDON REGION HQ", lat: "51.5° N", lng: "0.1° W", status: "ONLINE" },
                ].map((pin, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 hover:border-brand-orange transition py-3 px-4 rounded-lg flex flex-col items-center shrink-0 min-w-[130px]"
                  >
                    <div className="relative flex h-2 w-2 mb-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange font-bold"></span>
                    </div>
                    <span className="text-[11px] font-bold text-white tracking-wide">{pin.city}</span>
                    <span className="text-[9px] font-mono text-zinc-500 mt-1">{pin.lat} &bull; {pin.lng}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
