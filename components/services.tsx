"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { TATTOO_STYLES } from "@/data/site-data";

export default function Services() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-black pt-0 md:pt-18">
      <style jsx global>{`
        .swiper-services .swiper-slide {
          width: 310px;
          max-width: calc(100% - 40px);
          transition: all 0.4s ease;
        }
        @media (min-width: 640px) {
          .swiper-services .swiper-slide {
            width: 440px;
          }
        }
        @media (min-width: 1024px) {
          .swiper-services .swiper-slide {
            width: 560px;
          }
        }
        
      `}</style>

      <div className="container mx-auto px-3 sm:px-6 lg:px-10 mb-12 lg:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#00BFEF]" />
              <span className="text-[8px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#00BFEF]">
                OUR SPECIALTIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              FIND YOUR STYLE
            </h2>
          </div>
          <p className="text-sm text-[#A3A3A3] max-w-md font-light leading-relaxed">
            Every tattoo discipline demands dedicated needle craft and stylistic mastery. Explore our signature specialties.
          </p>
        </div>
      </div>

      <div className="w-full relative py-4">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          speed={800}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 18,
            stretch: 0,
            depth: 180,
            modifier: 1.4,
            slideShadows: true,
          }}
          className="swiper-services w-full !overflow-visible"
        >
          {TATTOO_STYLES.map((style) => (
            <SwiperSlide key={style.id} className="cursor-pointer">
              <Link
                href="#booking"
                className="group relative block aspect-[2/3] sm:aspect-[3/2] w-full rounded-lg overflow-hidden border border-white/10 bg-black shadow-2xl transition-all duration-500 hover:border-[#00F078]/60 hover:shadow-[0_0_30px_rgba(0,240,120,0.25)]"
              >
                <Image
                  src={style.image}
                  alt={style.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 310px, (max-width: 1024px) 440px, 560px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[10px] uppercase font-bold tracking-widest text-[#00F078]">
                    <Sparkles className="w-3 h-3 text-[#00F078]" />
                    TATTOO DISCIPLINE
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#00F078] transition-colors">
                      {style.title}
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#00F078] text-white group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0 ml-3">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] line-clamp-2 font-light leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-10 mt-12 sm:mt-16 flex justify-center">
        <Link
          href="#booking"
          className="group inline-flex items-center gap-3 border border-[#00F078] bg-[#00F078] hover:bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-[#00F078] transition-all duration-300 rounded shadow-[0_0_20px_rgba(0,240,120,0.3)]"
        >
          <span className="text-[9px]">CONSULT FOR YOUR CUSTOM STYLE</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
