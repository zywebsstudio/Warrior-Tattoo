"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { GALLERY_ITEMS, SITE_CONFIG } from "@/data/site-data";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    Fancybox.bind('[data-fancybox="warrior-gallery"]', {
      Hash: false,
    } as any);

    return () => {
      Fancybox.destroy();
    };
  }, [activeFilter]);

  const filterTabs = [
    { id: "ALL", label: "ALL" },
    { id: "Black & Grey", label: "BLACK & GREY" },
    { id: "Fine Line", label: "FINE LINE" },
    { id: "Custom", label: "CUSTOM" },
  ];

  const filteredItems =
    activeFilter === "ALL"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="pt-20 sm:py-28 lg:py-36 bg-black border-t border-white/5 relative">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[2px] bg-[#00F078]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#00F078]">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-4xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              INK THAT SPEAKS
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between sm:justify-start lg:justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === tab.id
                    ? "bg-[#00F078] text-black shadow-[0_0_15px_rgba(0,240,120,0.4)]"
                    : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white border border-white/20 hover:border-[#00F078] hover:text-[#00F078] bg-black/60 rounded transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,240,120,0.3)] shrink-0"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5 text-[#00F078]" />
              <span>VIEW MORE ON INSTAGRAM</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={item.image}
              data-fancybox="warrior-gallery"
              data-caption={`${item.title} &bull; ${item.category}`}
              className="group relative block aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A] cursor-zoom-in transition-all duration-500 hover:border-[#00F078]/50 hover:shadow-[0_0_20px_rgba(0,240,120,0.2)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-[#00F078] text-[#00F078] flex items-center justify-center scale-75 group-hover:scale-100 transition-transform shadow-lg">
                  <Eye className="w-4 h-4" />
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#00BFEF] block mb-0.5">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white line-clamp-1">
                  {item.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
