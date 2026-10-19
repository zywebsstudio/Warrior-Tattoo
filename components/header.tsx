"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/site-data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 py-3 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-2xl"
          : "bg-gradient-to-b from-black/90 to-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="#" className="group flex items-center gap-1 sm:gap-2.5">
            <div className="relative w-11 h-11 transition-transform duration-300 group-hover:scale-105 shrink-0">
              <Image
                src="img/logoo.png"
                alt="Warrior Tattoo Studio"
                fill
                priority
                sizes="40px"
                className="object-contain drop-shadow-[0_0_10px_rgba(0,240,120,0.35)]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-black tracking-[0.25em] text-white">
                WARRIOR
              </span>
              <span className="text-[7px] sm:text-[7px] tracking-[0.3em] text-[#00BFEF] font-semibold">
                TATTOO STUDIO
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-7 lg:space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] lg:text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 hover:text-[#00F078] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="#booking"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#00F078] hover:bg-[#00BFEF] transition-all duration-300 rounded shadow-[0_0_15px_rgba(0,240,120,0.3)] hover:shadow-[0_0_20px_rgba(0,191,239,0.5)]"
          >
            BOOK APPOINTMENT
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 text-white/80 hover:text-[#00F078] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/98 px-6 py-5 transition-all">
          <div className="flex flex-col space-y-3.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.22em] font-semibold text-white/80 hover:text-[#00F078] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-black bg-[#00F078] hover:bg-[#00BFEF] rounded transition-all shadow-[0_0_15px_rgba(0,240,120,0.4)]"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
