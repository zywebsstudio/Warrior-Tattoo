import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="img/warhero.png"
          alt="Warrior Tattoo Studio background artistry"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/25" />
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-6 lg:px-10 w-full pt-16 md:pt-30 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00F078] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-[0.3em] text-[#f5f5f5]/90">
              WARRIOR TATTOO STUDIO
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.05] mb-6">
            YOUR VISION.
            <br />
            <span className="bg-gradient-to-r from-[#00F078] via-white to-[#00BFEF] bg-clip-text text-transparent">
              OUR ART.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#A3A3A3] max-w-xl font-light leading-relaxed mb-8 md:mb-10">
            {SITE_CONFIG.subheadline}
          </p>

          <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#gallery"
              className="group w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-black bg-[#00F078] hover:bg-white transition-all duration-300 rounded shadow-[0_0_20px_rgba(0,240,120,0.35)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              <span>OUR WORKS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#booking"
              className="group w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#00BFEF] border border-[#00BFEF] hover:bg-[#00BFEF] hover:text-black bg-[#00BFEF]/10 backdrop-blur-sm transition-all duration-300 rounded shadow-[0_0_15px_rgba(0,191,239,0.25)] hover:shadow-[0_0_25px_rgba(0,191,239,0.5)]"
            >
              <span>BOOK YOUR SESSION</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
