import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles, Droplets, UserCheck } from "lucide-react";

export default function About() {
  const stats = [
    {
      num: "01",
      icon: ShieldCheck,
      title: "100% STERILE",
      subtitle: "Autoclave sterilized equipment & medical protocol",
      accent: "text-[#00F078]",
    },
    {
      num: "02",
      icon: Sparkles,
      title: "CUSTOM FLOW",
      subtitle: "Bespoke artwork mapped to personal anatomy",
      accent: "text-[#00BFEF]",
    },
    {
      num: "03",
      icon: Droplets,
      title: "VEGAN PIGMENTS",
      subtitle: "EU certified non-toxic organic tattoo inks",
      accent: "text-[#00F078]",
    },
    {
      num: "04",
      icon: UserCheck,
      title: "PRIVATE BOOTHS",
      subtitle: "Focused hygiene, privacy, and client care",
      accent: "text-[#00BFEF]",
    },
  ];

  return (
    <section id="about" className="pb-16   md:py-26 bg-[#000000] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#00F078]" />
              <span className="text-[8px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#00F078]">
                BEHIND THE INK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.12] mb-4 sm:mb-6">
              MORE THAN INK.
              <br />
              <span className="text-[#A3A3A3]">IT&apos;S YOUR STORY.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed mb-4 max-w-2xl">
              Every tattoo carries a meaning. At Warrior Tattoo Studio, we bring personal ideas to life through thoughtful design, artistic detail, and an uncompromising commitment to the craft.
            </p>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              We treat each piece as an intimate collaboration between canvas and artist. From initial concept sketching to anatomical placement and sterile execution, our objective is lifelong artistry that flows naturally with your body.
            </p>

            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 text-[9px] sm:text-xs font-bold uppercase tracking-[0.2em] text-black bg-[#00F078] hover:bg-white rounded transition-all shadow-[0_0_15px_rgba(0,240,120,0.3)]"
              >
                <span>DISCOVER OUR WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 px-5 py-3 text-[9px] sm:text-x font-bold uppercase tracking-[0.2em] border border-[#00BFEF] text-[#00BFEF] hover:bg-[#00BFEF] hover:text-black rounded transition-all"
              >
                <span>CONSULT AN ARTIST</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="p-4 sm:p-5 rounded-lg bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between min-h-[140px] sm:min-h-[155px]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-white/30 tracking-widest">
                      {s.num}
                    </span>
                    <Icon className={`w-4 h-4 ${s.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-white mb-1">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-[#A3A3A3] font-light leading-relaxed">
                      {s.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
