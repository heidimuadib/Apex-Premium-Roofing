import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ShieldCheck, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Collapse menu on route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-md py-3.5 border-zinc-800 shadow-xl"
          : "bg-brand-dark/40 backdrop-blur-sm py-5 border-zinc-900/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Core Logo Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-brand-orange text-white rounded flex items-center justify-center font-black text-xl italic shadow-md shadow-brand-orange/20 transition group-hover:scale-105">
            AR
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-base tracking-widest font-sans leading-none group-hover:text-brand-orange transition">
              APEX PREMIUM
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest font-bold uppercase leading-none whitespace-nowrap mt-1">
              ROOFING SERVICES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { patch: "/", label: "Home" },
            { patch: "/repairs", label: "Repairs" },
            { patch: "/replacement", label: "Replacements" },
            { patch: "/commercial", label: "Commercial" },
            { patch: "/storm-damage", label: "Storm Damage" },
            { patch: "/about", label: "About" },
            { patch: "/service-areas", label: "Service Areas" },
            { patch: "/contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.patch}
              to={item.patch}
              className={({ isActive }) =>
                `px-3 py-2 text-xs xl:text-sm font-semibold uppercase tracking-wider transition ${
                  isActive
                    ? "text-brand-orange border-b-2 border-brand-orange"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-900/60 rounded"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Global Nav CTA Group */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+1300000000"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition duration-150 text-xs sm:text-sm font-semibold font-mono"
          >
            <Phone className="w-4 h-4 text-brand-orange shrink-0 animate-pulse" />
            <span>1300 APEX RP</span>
          </a>

          <Link
            to="/contact"
            className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold font-mono uppercase tracking-widest py-2.5 px-4 rounded transition flex items-center gap-1.5 hover:shadow-lg hover:shadow-brand-orange/15 cursor-pointer"
          >
            <span>FREE INSPECTION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger menu toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href="tel:+1300000000"
            className="sm:hidden text-zinc-400 hover:text-white"
            aria-label="Call emergency support"
          >
            <Phone className="w-5 h-5 text-brand-orange" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-300 hover:text-white focus:outline-none p-1.5 bg-zinc-900 rounded border border-zinc-800"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Hidden by default, slides in on interaction) */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[71px] bg-neutral-950 border-b border-zinc-800 z-30 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-3.5 shadow-2xl">
          {[
            { patch: "/", label: "Home Base" },
            { patch: "/repairs", label: "Roof Repairs & Restoration" },
            { patch: "/replacement", label: "Full Architectural Replacements" },
            { patch: "/commercial", label: "Commercial & Industrial installations" },
            { patch: "/storm-damage", label: "Storm & Hail Response HQ" },
            { patch: "/about", label: "About Apex Contractors" },
            { patch: "/service-areas", label: "Active Service Areas" },
            { patch: "/contact", label: "Book Assessment & Contact" },
          ].map((item) => (
            <Link
              key={item.patch}
              to={item.patch}
              className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-900 rounded transition border-l-2 border-transparent hover:border-brand-orange"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <a
              href="tel:+1300000000"
              className="py-3 px-4 bg-zinc-900 text-center font-bold text-sm tracking-wider font-mono text-zinc-200 border border-zinc-800 rounded flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>DIAL ESTIMATOR: 1300 APEX RP</span>
            </a>
            <Link
              to="/contact"
              className="py-3.5 px-4 bg-brand-orange text-center text-white font-bold text-sm tracking-widest uppercase rounded flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>REQUEST SITE SURVEY</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
