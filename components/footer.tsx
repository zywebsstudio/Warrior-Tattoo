"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { SITE_CONFIG, NAV_LINKS, TATTOO_STYLES } from "@/data/site-data";

export default function Footer() {
  const [glowing, setGlowing] = useState(false);
  const [glowX, setGlowX] = useState(50);
  const glowContainerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !glowContainerRef.current) return;
    const rect = glowContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setGlowX(x);
    setGlowing(true);
  };

  return (
    <footer className="relative isolate overflow-hidden bg-black text-white border-t border-white/10">
      

      <div
        ref={glowContainerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setGlowing(false)}
        className="relative pt-12 pb-0"
      >
        

        <div className="relative z-10 container mx-auto px-3 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 pb-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-0 lg:pb-16">
            <div className="flex flex-col justify-between sm:col-span-2 lg:col-span-4 lg:border-r lg:border-white/10 lg:pr-12">
              <div>
                <Link href="#" className="flex items-center gap-3">
                  <div className="relative w-11 h-11 shrink-0">
                    <Image
                      src="img/logoo.png"
                      alt={SITE_CONFIG.brandName}
                      fill
                      sizes="44px"
                      className="object-contain drop-shadow-[0_0_10px_rgba(0,240,120,0.4)]"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-black tracking-[0.25em] text-white">
                      WARRIOR
                    </span>
                    <span className="text-[9px] tracking-[0.3em] text-[#00BFEF] font-semibold">
                      TATTOO STUDIO
                    </span>
                  </div>
                </Link>

                <p className="mt-5 max-w-[340px] text-sm font-light leading-relaxed text-white/60">
                  {SITE_CONFIG.subheadline} Modern sterile tattooing studio crafting lifelong artistic statements.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 lg:mt-10">
                <Link
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-colors hover:text-[#00F078] hover:border-[#00F078]"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </Link>
                <Link
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-colors hover:text-[#00F078] hover:border-[#00F078]"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                </Link>
                <Link
                  href={SITE_CONFIG.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-colors hover:text-red-400 hover:border-red-400"
                >
                  <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
                </Link>
                <Link
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Location"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-colors hover:text-[#00BFEF] hover:border-[#00BFEF]"
                >
                  <MapPin className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="col-span-full grid grid-cols-2 gap-6 sm:gap-10 lg:col-span-5 lg:grid-cols-5 lg:gap-0">
              <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:px-8">
                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white">
                  Studio
                </h3>
                <ul className="space-y-3 text-sm font-light text-white/65">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition-colors hover:text-[#00F078]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3 lg:border-r lg:border-white/10 lg:px-8">
                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white">
                  Specialties
                </h3>
                <ul className="space-y-3 text-sm font-light text-white/65">
                  {TATTOO_STYLES.slice(0, 5).map((style) => (
                    <li key={style.id}>
                      <Link href="#services" className="transition-colors hover:text-[#00BFEF]">
                        {style.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-3 lg:pl-10">
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white">
                Contact & Visit
              </h3>

              <ul className="space-y-4 text-sm font-light text-white/75">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0 text-[#00F078]" />
                  <Link href={`tel:${SITE_CONFIG.phone}`} className="transition-colors hover:text-[#00F078]">
                    {SITE_CONFIG.phone}
                  </Link>
                </li>

                <li className="flex items-start gap-3 leading-snug">
                  <Clock className="w-4 h-4 shrink-0 text-[#00BFEF] mt-0.5" />
                  <span>
                    Open Daily: 10:00 AM &ndash; 08:30 PM<br />
                    <span className="text-white/40 text-xs">Appointments Recommended</span>
                  </span>
                </li>

                <li className="flex items-start gap-3 leading-snug">
                  <MapPin className="w-4 h-4 shrink-0 text-white/50 mt-0.5" />
                  <span>
                    Warrior Tattoo Studio<br />
                    <span className="text-white/50 text-xs">{SITE_CONFIG.locationName}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center text-xs text-white/50 sm:flex-row">
            <p>&copy; {SITE_CONFIG.copyrightYear} {SITE_CONFIG.brandName}. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link href="#" className="transition-colors hover:text-white">Privacy Policy</Link>
              <span className="h-3 w-px bg-white/20" />
              <Link href="#" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
