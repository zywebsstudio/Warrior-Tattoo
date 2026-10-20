"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, Sparkles } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ARTISTS_DATA } from "@/data/site-data";

export default function Artists() {
  return (
    <section id="artists" className="pt-20 sm:pb-28  bg-black border-t border-white/5 relative">
      <style jsx global>{`
        .artists-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          width: 24px;
          height: 3px;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .artists-swiper .swiper-pagination-bullet-active {
          background: #00F078 !important;
          width: 42px;
          box-shadow: 0 0 10px rgba(0, 240, 120, 0.6);
        }
      `}</style>

      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#00BFEF]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#00BFEF]">
                THE ARTISTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              THE HANDS BEHIND THE ART
            </h2>
          </div>
          <p className="text-sm text-[#A3A3A3] max-w-md font-light leading-relaxed">
            Every tattoo requires exceptional anatomy understanding, deep technical needle control, and patient collaboration.
          </p>
        </div>

        <div className=" mx-auto max-w-[1400px]">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1.2}
            loop={true}
            speed={700}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            className="artists-swiper pb-14  "
          >
            {ARTISTS_DATA.map((artist, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-xl border border-white/10 bg-black p-2 sm:p-6  shadow-2xl relative overflow-hidden]">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="md:col-span-5 relative">
                      <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-white/15 bg-[#0A0A0A]">
                        <Image
                          src={artist.image}
                          alt={artist.name}
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 text-[10px] tracking-[0.25em] uppercase font-bold text-[#00F078] bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-[#00F078]/30">
                          {artist.experience}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-7 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00F078]">
                          {artist.role}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wide text-white mb-4">
                        {artist.name}
                      </h3>
                      <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed mb-6 font-light">
                        {artist.bio}
                      </p>

                      <div className="space-y-3 py-4 border-t border-white/10 mb-6">
                        <div className="flex items-center gap-3 text-xs text-white/80">
                          <Sparkles className="w-4 h-4 text-[#00F078] shrink-0" />
                          <span>Specializes in custom tailored compositions &amp; anatomical placement</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-white/80">
                          <Award className="w-4 h-4 text-[#00BFEF] shrink-0" />
                          <span>Strict adherence to hospital-standard sterile hygiene</span>
                        </div>
                      </div>

                      <div>
                        <Link
                          href={artist.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00BFEF] hover:text-[#00F078] transition-colors"
                        >
                          <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                          <span>FOLLOW ON INSTAGRAM</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
