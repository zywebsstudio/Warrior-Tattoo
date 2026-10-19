"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, MapPin, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { SITE_CONFIG } from "@/data/site-data";

export default function Booking() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    idea: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formState.name.trim() || !formState.phone.trim() || !formState.idea.trim()) {
      setErrorMessage("Please complete your name, phone number, and tattoo concept.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="booking" className="pb-20 sm:py-28 lg:py-36 bg-black border-t border-white/5 relative">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#00F078]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#00F078]">
                START YOUR STORY
              </span>
            </div>
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              LET&apos;S CREATE SOMETHING
            </h2>
          </div>
          <p className="text-sm text-[#A3A3A3] max-w-md font-light leading-relaxed">
            {SITE_CONFIG.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 rounded-xl border border-white/10 bg-black p-6 sm:p-10 shadow-2xl flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center my-auto">
                <div className="w-16 h-16 rounded-full bg-[#00F078]/10 text-[#00F078] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-3">
                  ENQUIRY RECEIVED
                </h3>
                <p className="text-sm text-[#A3A3A3] max-w-md mb-8 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formState.name}</span>. This demo enquiry has been logged successfully. We will reach out to you via phone or WhatsApp to finalize your consultation.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#00F078] hover:bg-white rounded transition-colors"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                    CHAT NOW ON WHATSAPP
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", phone: "", email: "", idea: "", date: "" });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3] hover:text-white transition-colors"
                  >
                    SEND ANOTHER ENQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between h-full">
                {errorMessage && (
                  <div className="p-4 rounded bg-red-950/40 border border-red-500/30 text-xs text-red-200">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Matthew"
                      className="w-full px-4 py-3 rounded bg-[#0A0A0A] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00F078] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded bg-[#0A0A0A] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00F078] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded bg-[#0A0A0A] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00F078] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      Preferred Date (Optional)
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#0A0A0A] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00F078] transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="idea" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                    Tattoo Concept & Placement *
                  </label>
                  <textarea
                    id="idea"
                    rows={4}
                    required
                    value={formState.idea}
                    onChange={(e) => setFormState({ ...formState, idea: e.target.value })}
                    placeholder="Describe your design, desired placement (arm, back, chest), reference ideas, and approximate size..."
                    className="w-full px-4 py-3 rounded bg-[#0A0A0A] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00F078] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded text-xs font-bold uppercase tracking-[0.2em] text-black bg-[#00F078] hover:bg-[#00BFEF] transition-all duration-300 shadow-[0_0_20px_rgba(0,240,120,0.3)] hover:shadow-[0_0_25px_rgba(0,191,239,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SEND ENQUIRY
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            <div className="rounded-xl border border-white/10 bg-black p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-[#00F078]" />
                  <h4 className="text-xs uppercase tracking-[0.22em] text-[#00F078] font-bold">
                    DIRECT WHATSAPP BOOKING
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3] mb-5 leading-relaxed font-light">
                  Need immediate consultation or wish to share your reference sketches directly? Message our studio via WhatsApp.
                </p>
              </div>
              <Link
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded text-xs font-bold uppercase tracking-wider text-black bg-[#00F078] hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,120,0.25)]"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                CHAT ON WHATSAPP
              </Link>
            </div>

            <div className="rounded-xl border border-white/10 bg-black p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 text-[#00BFEF]" />
                  <h4 className="text-xs uppercase tracking-[0.22em] text-[#00BFEF] font-bold">
                    FOLLOW ON INSTAGRAM
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3] mb-5 leading-relaxed font-light">
                  Explore our daily stories, fresh client session reels, and new flash design drops on Instagram.
                </p>
              </div>
              <Link
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded text-xs font-bold uppercase tracking-wider text-white border border-white/20 hover:border-[#00BFEF] hover:text-[#00BFEF] bg-white/5 transition-all"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 text-[#00BFEF]" />
                VISIT INSTAGRAM PROFILE
              </Link>
            </div>

            <div className="rounded-xl border border-white/10 bg-black p-6 sm:p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#00BFEF] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs uppercase font-bold tracking-wider text-white">
                      STUDIO LOCATION
                    </h5>
                    <p className="text-xs text-[#A3A3A3] mt-0.5 leading-relaxed">
                      {SITE_CONFIG.locationName}
                    </p>
                    <Link
                      href={SITE_CONFIG.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 text-[11px] font-semibold tracking-wider text-[#00BFEF] hover:underline uppercase"
                    >
                      Open in Google Maps &rarr;
                    </Link>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#00F078] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs uppercase font-bold tracking-wider text-white">
                      DIRECT CALL
                    </h5>
                    <Link
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-xs text-[#A3A3A3] hover:text-[#00F078] transition-colors mt-0.5 inline-block"
                    >
                      {SITE_CONFIG.phone}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
