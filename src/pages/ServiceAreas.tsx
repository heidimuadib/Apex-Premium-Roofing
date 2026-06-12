import React, { useState } from "react";
import { MapPin, Search, CheckCircle, Phone, Sparkles, Building } from "lucide-react";
import SEO from "../components/SEO";
import { SERVICE_AREAS } from "../data";
import { Link } from "react-router-dom";

export default function ServiceAreas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [postcodeStatus, setPostcodeStatus] = useState<{
    submitted: boolean;
    active: boolean;
    suburbName: string;
    cityHub: string;
  } | null>(null);

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const term = searchTerm.toLowerCase().trim();
    let foundArea = null;
    let foundSuburb = "";

    // Search suburbs in data
    for (const area of SERVICE_AREAS) {
      const match = area.suburbs.find((sub) => sub.toLowerCase().includes(term));
      if (match) {
        foundArea = area;
        foundSuburb = match;
        break;
      }
    }

    if (foundArea) {
      setPostcodeStatus({
        submitted: true,
        active: true,
        suburbName: foundSuburb,
        cityHub: foundArea.city,
      });
    } else {
      setPostcodeStatus({
        submitted: true,
        active: false,
        suburbName: searchTerm,
        cityHub: "",
      });
    }
  };

  return (
    <>
      <SEO
        title="Our Active Premium Service Territory Postcodes"
        description="Verify postcode boundaries across Australia and the UK. Rapid 90-minute responses active in Toorak, Ascot, Mosman, Kensington and greater London councils."
        schemaType="LocalBusiness"
      />

      {/* 1. HERO BANNER */}
      <section className="relative py-16 sm:py-24 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
            alt="Apex global regional roofing office maps"
            className="w-full h-full object-cover opacity-15 object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-950/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Postcode Boundaries Check
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none leading-tight">
            ACTIVE SERVICE COUNCILS
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-4 font-light">
            We deploy central engineering hubs across four major states in Australia and the main premium royal boroughs of Greater London.
          </p>
        </div>
      </section>

      {/* 2. LIVE SEARCH POSTCODE HELPER WIDGET */}
      <section className="bg-zinc-900/30 border-b border-zinc-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-medium border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5 md:max-w-md">
                <div className="flex items-center gap-1.5 text-xs text-brand-orange font-bold font-mono uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Real-Time Territory Validator</span>
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight leading-none leading-tight">
                  CHECK Postcode eligibility
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Enter your premium suburb (e.g. Vaucluse, Toorak, Richmond, Chelsea) to verify estimated callout dispatch bounds.
                </p>
              </div>

              {/* Form Input check */}
              <form onSubmit={handlePostcodeCheck} className="flex-1 max-w-sm w-full space-y-3">
                <div className="relative">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Toorak or Hampstead"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-650 transition font-mono uppercase"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold font-mono py-1.5 px-3 rounded cursor-pointer"
                  >
                    VERIFY
                  </button>
                </div>
              </form>
            </div>

            {/* Postcode check status validation feedback */}
            {postcodeStatus && postcodeStatus.submitted && (
              <div className="mt-6 border-t border-zinc-800/60 pt-6">
                {postcodeStatus.active ? (
                  <div className="bg-emerald-950/20 border border-emerald-800/40 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-white uppercase tracking-wider">
                          POSTCODE COVERAGE VERIFIED: &ldquo;{postcodeStatus.suburbName}&rdquo;
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">
                          Excellent! Postcode falls inside our active {postcodeStatus.cityHub} metropolitan services circle. Estimators can deploy within 24 hours.
                        </p>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest py-2.5 px-5 rounded font-mono transition inline-block whitespace-nowrap cursor-pointer"
                    >
                      REQUEST SQUAD SURVEY
                    </Link>
                  </div>
                ) : (
                  <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-5 text-left">
                    <div className="text-sm font-bold text-red-400 uppercase tracking-wider">
                      TERRITORY OUT-OF-BOUNDS
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      Our database does not register active estimators scheduled for &ldquo;{postcodeStatus.suburbName}&rdquo; currently. However, if your contract project volume exceeds $15,000, please coordinate directly with our administration clerks for custom clearances.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. CENTRAL HUB CITY CARDS */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest font-mono">
              Expert Regional Teams
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase">
              METROPOLITAN INFRASTRUCTURE
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded"></div>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Each metropolitan region contains rapid mobile response crews and a physical corporate offices annex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_AREAS.map((area, idx) => {
              const cityImages: Record<string, string> = {
                sydney: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=700&q=80",
                melbourne: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=700&q=80",
                brisbane: "https://images.unsplash.com/photo-1554160408-542ca001b9ca?auto=format&fit=crop&w=700&q=80",
                perth: "https://images.unsplash.com/photo-1574041123992-cfcc48df0807?auto=format&fit=crop&w=700&q=80",
                london: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80"
              };
              const cityImage = cityImages[area.slug] || "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80";

              return (
                <div
                  key={area.slug}
                  className="bg-brand-medium border border-zinc-850 rounded-2xl flex flex-col justify-between hover:border-brand-orange/45 transition duration-300 shadow-lg group relative overflow-hidden"
                >
                  <div>
                    {/* Brand localized header image */}
                    <div className="h-44 w-full relative overflow-hidden">
                      <img
                        src={cityImage}
                        alt={`${area.city} metropolitan premium service base`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-medium via-transparent to-brand-medium/30"></div>
                      <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-sm px-2.5 py-1 rounded border border-zinc-800 text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                        {area.region}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-brand-orange" />
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight font-sans">
                          {area.city} Hub
                        </h3>
                      </div>

                      {/* Suburb list scroller */}
                      <div className="space-y-1.5 pb-4 border-b border-zinc-800/60 text-xs">
                        <span className="text-zinc-500 uppercase text-[9px] block font-mono">
                          Active Suburbs Covered:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {area.suburbs.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="bg-zinc-900 text-zinc-300 px-2.5 py-1 rounded text-[11px]"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Physical Offices */}
                      <div className="space-y-2 text-xs">
                        <span className="text-zinc-500 uppercase text-[9px] block font-mono">
                          Physical Executive Suites:
                        </span>
                        {area.offices.map((office, oIdx) => (
                          <div key={oIdx} className="flex gap-2 text-zinc-400 font-sans">
                            <Building className="w-4 h-4 text-brand-orange shrink-0 mt-0.5 font-bold" />
                            <span>{office}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Local Actions Buttons */}
                  <div className="p-6 pt-0 space-y-3">
                    <a
                      href={`tel:${area.phone}`}
                      className="w-full text-center bg-zinc-900 hover:bg-zinc-850 text-white font-mono text-xs font-bold py-3 px-4 rounded border border-zinc-800 block transition"
                    >
                      LOCAL LINE: {area.phone}
                    </a>
                    <Link
                      to="/contact"
                      className="w-full text-center bg-brand-orange hover:bg-brand-orange-hover text-white font-mono text-[10px] font-bold tracking-wider uppercase py-3 px-4 rounded block transition"
                    >
                      REQUEST INSPECTION IN THIS METRO &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
