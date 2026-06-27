import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Mail, Phone, User, MapPin, Calendar } from "lucide-react";
import { motion } from "motion/react";

interface LeadCaptureFormProps {
  embedded?: boolean;
  defaultService?: string;
  sourcePage?: string;
}

export default function LeadCaptureForm({
  embedded = false,
  defaultService = "inspection",
  sourcePage = "General",
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    region: "Australia",
    city: "Sydney",
    urgency: "Normal",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const citiesByRegion: Record<string, string[]> = {
    Australia: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    "United Kingdom": ["London"],
  };

  const services = [
    { value: "repairs", label: "Structural Roof Repairs & Leaks" },
    { value: "replacement", label: "Full Architectural Roof Replacement" },
    { value: "commercial", label: "Commercial / Industrial Building Roofing" },
    { value: "metal", label: "Bespoke Standing Seam & Metal Roofing" },
    { value: "storm", label: "Storm, Wind & Hail Damage Assessment" },
    { value: "inspection", label: "Detailed Moisture & Engineer's Inspection" },
  ];

  const webhookUrl = (import.meta as any).env.VITE_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/PROGa96EoWsnE1H5KxoI/webhook-trigger/b3938bf8-9e01-42fb-a37b-54a19522e1e4";
  const isWebhookConfigured = !!webhookUrl;
  const [webhookStatus, setWebhookStatus] = useState<"none" | "success" | "failed">("none");

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    setFormData((prev) => ({
      ...prev,
      region,
      city: citiesByRegion[region][0] || "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please provide name, phone and email to schedule your premium inspection.");
      return;
    }

    setLoading(true);
    const generatedId = "APX-" + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(generatedId);

    // If Webhook url is configured, send the real payload directly!
    if (isWebhookConfigured) {
      try {
        const payload = {
          id: generatedId,
          name: formData.name,
          firstName: formData.name.split(" ")[0] || "",
          lastName: formData.name.split(" ").slice(1).join(" ") || "",
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          region: formData.region,
          city: formData.city,
          urgency: formData.urgency,
          message: formData.message,
          sourcePage: sourcePage,
          submittedAt: new Date().toISOString(),
        };

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          mode: "cors",
        });

        if (response.ok) {
          setWebhookStatus("success");
        } else {
          console.error("Webhook responded with status:", response.status);
          setWebhookStatus("failed");
        }
      } catch (err) {
        console.error("Failed to post payload to Webhook:", err);
        setWebhookStatus("failed");
      }
    } else {
      setWebhookStatus("none");
    }

    // Elegant timeout matching our design theme
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-medium border-2 border-brand-orange/40 rounded-xl p-8 text-center shadow-xl relative overflow-hidden text-left"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl"></div>
        <div className="w-16 h-16 bg-brand-orange/10 border-2 border-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-9 h-9 text-brand-orange" />
        </div>
        
        <h3 className="text-2xl font-bold font-sans text-white text-center mb-2 tracking-tight">
          Inspection Request Confirmed
        </h3>
        <p className="text-zinc-400 text-sm max-w-md mx-auto text-center mb-6 leading-relaxed">
          Your details have been registered inside our Senior Roofing Estimator queue. A specialist matching your property style will connect with you via phone shortly.
        </p>

        <div className="text-center w-full mb-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg py-4 px-6 inline-block">
            <div className="text-xs text-zinc-500 uppercase font-mono tracking-wider">Priority Ticket reference</div>
            <div className="text-xl font-bold font-mono text-brand-orange tracking-wide mt-1">{referenceId}</div>
          </div>
        </div>

        {/* Integration Status Box */}
        <div className="mb-6 p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-xs text-zinc-400 space-y-2.5">
          {isWebhookConfigured ? (
            <div className="flex items-start gap-2.5">
              <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div>
                <strong className="text-emerald-400 block font-mono uppercase tracking-wider mb-0.5 text-[11px]">
                  Webhook Integration Active
                </strong>
                <span>Lead info was live dispatched directly to your inbound trigger webhook seamlessly.</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="inline-block px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] uppercase font-mono text-amber-500 font-bold">
                  Lead Automation Available
                </span>
              </div>
              <p className="text-zinc-500 text-[11px] leading-relaxed">
                You can capture these submissions automatically into your CRM without any need for database servers. 
              </p>
              <div className="bg-zinc-900 p-2 text-[10px] rounded font-mono text-zinc-400 border border-zinc-800 leading-normal">
                <strong>Setup Steps:</strong><br />
                1. Create an Automation Workflow triggered by <strong>&quot;Inbound Webhook&quot;</strong>.<br />
                2. Copy the generated webhook URL.<br />
                3. Add a standard variable: <strong>VITE_WEBHOOK_URL</strong> with your webhook URL.
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto text-left text-xs bg-zinc-900/50 p-4 rounded-lg border border-zinc-800/60 mb-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
            <span>Licensed &amp; Insured</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
            <span>10-Year Warranty</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
            <span>90 Min Response</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
            <span>Forensic Drone Assessment</span>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                service: defaultService,
                region: "Australia",
                city: "Sydney",
                urgency: "Normal",
                message: "",
              });
            }}
            className="text-sm text-zinc-400 hover:text-white underline transition duration-200 cursor-pointer"
          >
            Submit another request
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`w-full ${embedded ? "" : "bg-neutral-950 border border-zinc-800/80 p-6 md:p-8 rounded-xl shadow-2xl relative"}`}>
      {!embedded && (
        <div className="mb-6">
          <div className="text-xs font-bold text-brand-orange uppercase font-mono tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full inline-block mb-3">
            Secure Priority Callout
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight leading-none mb-1">
            Book Free Assessment
          </h3>
          <p className="text-zinc-500 text-xs sm:text-sm">
            $450 valuation fee waived for corporate &amp; local site inquiries today.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5 font-mono">
            Full Name <span className="text-brand-orange">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              required
              placeholder="e.g. Harrison Sterling"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-600 transition"
            />
          </div>
        </div>

        {/* Contact Info (Split in grids on screen widths) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5 font-mono">
              Phone Number <span className="text-brand-orange">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
              <input
                type="tel"
                required
                placeholder="e.g. +61 400 000 000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-600 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5 font-mono">
              Email Address <span className="text-brand-orange">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
              <input
                type="email"
                required
                placeholder="e.g. harrison@vaucluseestates.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-600 transition"
              />
            </div>
          </div>
        </div>

        {/* Region & Metro HQ Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5 font-mono">
              Territory
            </label>
            <select
              value={formData.region}
              onChange={handleRegionChange}
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-lg p-3 text-sm text-white transition cursor-pointer"
            >
              <option value="Australia">Australia</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5 font-mono">
              Metro Region
            </label>
            <div className="relative">
              <MapPin className="absolute right-3 top-3.5 w-4 h-4 text-zinc-500 pointer-events-none" />
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-lg p-3 pr-8 text-sm text-white transition cursor-pointer appearance-none"
              >
                {citiesByRegion[formData.region]?.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Selected Service Focus */}
        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5 font-mono">
            Roofing Service Requested
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-lg p-3 text-sm text-white transition cursor-pointer"
          >
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* Urgent Response Option */}
        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5 font-mono">
            Urgency / Timeframe
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "Normal", label: "Inspect 2-3 Days" },
              { id: "Urgent", label: "Call Today" },
              { id: "Emergency", label: "90-Min Rescue" },
            ].map((u) => (
              <button
                key={u.id}
                type="button"
                onClick={() => setFormData({ ...formData, urgency: u.id })}
                className={`py-2 px-1 text-center font-bold text-xs rounded transition uppercase tracking-wider font-mono ${
                  formData.urgency === u.id
                    ? u.id === "Emergency"
                      ? "bg-red-600 text-white border border-red-500"
                      : "bg-brand-orange text-white border border-brand-orange"
                    : "bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-800"
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
        </div>

        {/* Short message */}
        <div>
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5 font-mono">
            Property Details / Notes
          </label>
          <textarea
            rows={2}
            placeholder="e.g. 2-story slate villa, deep leaks near solar mounting..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-lg p-3 text-sm text-white placeholder-zinc-600 transition resize-none"
          />
        </div>

        {/* Security / Privacy reassurance disclosure */}
        <div className="flex items-start gap-2.5 text-[11px] text-zinc-500 leading-normal bg-zinc-950 p-2.5 rounded border border-zinc-900">
          <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
          <span>
            <strong>Data Privacy:</strong> We protect your home telemetry under NDAs. Details are only visible to certified master estimators deployed directly to your physical address.
          </span>
        </div>

        {/* Form Submission Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-orange hover:bg-brand-orange-hover disabled:bg-zinc-800 text-white font-bold text-sm tracking-widest uppercase py-4 rounded-lg shadow-lg hover:shadow-brand-orange/15 transition duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <Calendar className="w-4 h-4" />
              <span>BOOK FREE FORENSIC ASSESSMENT</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
