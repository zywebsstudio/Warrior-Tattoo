"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MapPin, Phone, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { SITE_CONFIG } from "@/data/site-data";

export default function FloatingDock() {
  const [isOpen, setIsOpen] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dockRef.current && !dockRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const actions = [
   
   
    {
      id: "location",
      name: "Location",
      href: SITE_CONFIG.mapsUrl,
      icon: <MapPin className="w-5 h-5 text-white" />,
      bg: "bg-[#00BFEF]",
      border: "border-[#00BFEF]",
      glow: "shadow-[0_0_15px_rgba(0,191,239,0.5)]",
      textColor: "text-[#00BFEF]",
    },

     {
      id: "youtube",
      name: "YouTube",
      href: SITE_CONFIG.youtubeUrl,
      icon: <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 text-white text-[20px]" />,
      bg: "bg-[#FF0000]",
      border: "border-red-600",
      glow: "shadow-[0_0_15px_rgba(255,0,0,0.5)]",
      textColor: "text-red-400",
    },

   
   
    {
      id: "call",
      name: "Call",
      href: `tel:${SITE_CONFIG.phone}`,
      icon: <Phone className="w-5 h-5 text-blue-600" />,
      bg: "bg-white",
      border: "border-white",
      glow: "shadow-[0_0_15px_rgba(255,255,255,0.4)]",
      textColor: "text-white",
    },
     {
      id: "instagram",
      name: "Instagram",
      href: SITE_CONFIG.instagramUrl,
      icon: <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-white text-[22px]" />,
      bg: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
      border: "border-pink-500/60",
      glow: "shadow-[0_0_15px_rgba(220,39,67,0.5)]",
      textColor: "text-[#00BFEF]",
    },
      {
      id: "whatsapp",
      name: "WhatsApp",
      href: SITE_CONFIG.whatsappUrl,
      icon: <FontAwesomeIcon icon={faWhatsapp} className="w-10 h-10 text-white text-[25px]" />,
      bg: "bg-[#00F078]",
      border: "border-[#00F078]",
      glow: "shadow-[0_0_15px_rgba(0,240,120,0.5)]",
      textColor: "text-[#00F078]",
    },
  ];

  return (
    <div
      ref={dockRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`flex flex-col-reverse items-end gap-3 mb-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        {actions.map((act) => (
          <Link
            key={act.id}
            href={act.href}
            target={act.id === "call" ? undefined : "_blank"}
            rel={act.id === "call" ? undefined : "noopener noreferrer"}
            aria-label={act.name}
            onClick={(e) => e.stopPropagation()}
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <span
              className={`bg-black/90 backdrop-blur-md px-2.5 py-1 rounded border border-white/15 text-[10px] font-bold uppercase tracking-wider shadow-lg ${act.textColor}`}
            >
              {act.name}
            </span>
            <div
              className={`sm:w-12 sm:h-12 h-10 w-10 rounded-md text-white  flex items-center justify-center ${act.bg} ${act.border} ${act.glow} border shadow-xl shrink-0`}
            >
              {act.icon}
            </div>
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle contact menu"
        className="relative h-11 w-11 sm:w-14 sm:h-14 rounded-md bg-[#00F078] border-2 border-white/30 text-black shadow-[0_0_25px_rgba(0,240,120,0.7)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white transition-transform duration-300" />
        ) : (
          <>
            <span className="absolute -inset-1 rounded-md bg-[#00F078]/40 animate-ping pointer-events-none" />
           <FontAwesomeIcon icon={faWhatsapp}  className="text-white text-[28px]" />
          </>
        )}
      </button>
    </div>
  );
}
