import { Star, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/site-data";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-26 bg-black border-t border-white/5 relative">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#00F078]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#00F078]">
                CLIENT STORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              WORDS THAT MATTER
            </h2>
          </div>
          <p className="text-sm text-[#A3A3A3] max-w-md font-light leading-relaxed">
            Our clients return because of the trust, hygiene, and timeless attention to detail poured into every session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="rounded-xl border  bg-[#0A0A0A] p-8 flex flex-col justify-between transition-all duration-300 border-[#00F078]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]"
                      />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#00BFEF]/50" />
                </div>
                <p className="text-sm sm:text-base text-[#f5f5f5]/90 leading-relaxed mb-6 font-light">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col">
                <span className="text-sm font-bold uppercase tracking-wider text-white">
                  {t.clientName}
                </span>
                <span className="text-xs text-[#00BFEF] tracking-wide mt-0.5">
                  {t.style}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
