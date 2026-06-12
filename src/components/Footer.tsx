import { Link } from "react-router-dom";
import { Phone, Mail, Building, MapPin, ShieldAlert, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 font-sans border-t border-zinc-800">
      {/* 1. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Emergency Profile */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-brand-orange text-white rounded flex items-center justify-center font-black text-xl italic shadow-md">
                AR
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-base tracking-widest leading-none">
                  APEX PREMIUM
                </span>
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest font-bold uppercase leading-none mt-1">
                  ROOFING CONTRACTORS
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-500 leading-relaxed">
              Industrial engineering precision for multi-million dollar residential estates and commercial portfolios across Australia and the United Kingdom.
            </p>

            <div className="bg-red-950/20 border-2 border-red-950 rounded-xl p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider font-mono">
                <ShieldAlert className="w-4 h-4 text-brand-orange animate-pulse shrink-0" />
                <span>24/7 Red Alert Hotline</span>
              </div>
              <p className="text-xs text-zinc-400">
                Severe breaches, gale force damage, and emergency tarpaulin isolation.
              </p>
              <a
                href="tel:+1300000000"
                className="block text-brand-orange hover:text-white transition duration-150 font-mono font-bold text-sm"
              >
                AU/UK: 1300 APEX RP
              </a>
            </div>
          </div>

          {/* Column 2: Reusable Page Services Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-mono border-l-2 border-brand-orange pl-2.5">
              Roofing Specialities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/repairs" className="hover:text-white transition">
                  Roof Repairs &amp; Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/replacement" className="hover:text-white transition">
                  Architectural Roof Replacements
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="hover:text-white transition">
                  Commercial &amp; Industrial Systems
                </Link>
              </li>
              <li>
                <Link to="/repairs" className="hover:text-white transition">
                  Premium Slates &amp; Terracotta
                </Link>
              </li>
              <li>
                <Link to="/storm-damage" className="hover:text-white transition text-zinc-300">
                  ⚡ Storm &amp; Hail Restoration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Thermal Moisture Inspections
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Hubs of Excellence */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-mono border-l-2 border-brand-orange pl-2.5">
              Service Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/service-areas" className="hover:text-white transition">
                  Sydney - Eastern Suburbs &amp; North Shore
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-white transition">
                  Melbourne - Toorak, Brighton &amp; Kew
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-white transition">
                  Brisbane - Ascot, New Farm &amp; Hamilton
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-white transition">
                  Perth - Peppermint Grove &amp; Cottesloe
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-white transition">
                  London - Hampstead, Kensington &amp; Chelsea
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Premium Office Telemetry */}
          <div className="space-y-4 text-sm">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-mono border-l-2 border-brand-orange pl-2.5">
              Contact Headquarters
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                <span className="text-zinc-500">
                  <strong className="text-zinc-300 block">Sydney Headquarters</strong>
                  Level 32, 200 George Street, Sydney NSW 2000
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                <span className="text-zinc-500">
                  <strong className="text-zinc-300 block">London Headquarters</strong>
                  One Canada Square, Canary Wharf, London E14 5AB
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:inquiries@apex-premium-roofing.com" className="hover:text-white transition font-mono text-xs">
                  inquiries@apex-premium-roofing.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Regulatory Compliance, Badges and General Licences */}
      <div className="bg-zinc-900 border-t border-zinc-800/60 py-8 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Licenses Section */}
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-1.5 bg-zinc-950 py-1.5 px-3 rounded text-zinc-400 border border-zinc-800 font-mono">
              <Award className="w-4 h-4 text-brand-orange shrink-0" />
              <span>AU Licence: #480295C (Class: Roof Structural Plumber)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-950 py-1.5 px-3 rounded text-zinc-400 border border-zinc-800 font-mono">
              <Building className="w-4 h-4 text-brand-orange shrink-0" />
              <span>UK Citizen HSE &amp; CITB Member ID: #82057391</span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1 font-mono tracking-wider">
            <div>All Builders Fully Bonded &bull; $20,000,000 Liability Cover</div>
            <div>Designed for Multi-Million Dollar Structural Durability</div>
          </div>
        </div>
      </div>

      {/* 3. Outer legal copyrights bar */}
      <div className="bg-zinc-950/80 border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {currentYear} Apex Premium Roofing Services. All Rights Reserved. Fully Certified AU &amp; UK Roofing Contractors.</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <span className="hover:text-zinc-400 transition cursor-pointer">Sitemap</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-400 transition cursor-pointer">Privacy Charter</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-400 transition cursor-pointer">Warranty Deeds</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
