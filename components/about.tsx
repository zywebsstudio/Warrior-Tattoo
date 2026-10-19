"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles, Droplets, UserCheck, Compass } from "lucide-react";
import * as THREE from "three";

export default function About() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
    const cameraTarget = new THREE.Vector3(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin("anonymous");
    const texture = textureLoader.load(
      "img/warhero.png",
      () => {
        renderer.render(scene, camera);
      }
    );

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let isUserInteracting = false;
    let onPointerDownPointerX = 0;
    let onPointerDownPointerY = 0;
    let lon = 0;
    let onPointerDownLon = 0;
    let lat = 0;
    let onPointerDownLat = 0;
    let phi = 0;
    let theta = 0;
    let reqId: number;

    const onPointerDown = (event: PointerEvent) => {
      isUserInteracting = true;
      setIsInteracting(true);
      onPointerDownPointerX = event.clientX;
      onPointerDownPointerY = event.clientY;
      onPointerDownLon = lon;
      onPointerDownLat = lat;
      mount.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isUserInteracting) return;
      lon = (onPointerDownPointerX - event.clientX) * 0.15 + onPointerDownLon;
      lat = (event.clientY - onPointerDownPointerY) * 0.15 + onPointerDownLat;
    };

    const onPointerUp = (event: PointerEvent) => {
      isUserInteracting = false;
      setIsInteracting(false);
      try {
        mount.releasePointerCapture(event.pointerId);
      } catch {}
    };

    mount.addEventListener("pointerdown", onPointerDown);
    mount.addEventListener("pointermove", onPointerMove);
    mount.addEventListener("pointerup", onPointerUp);
    mount.addEventListener("pointercancel", onPointerUp);

    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      if (!isUserInteracting) {
        lon += 0.08;
      }

      lat = Math.max(-80, Math.min(80, lat));
      phi = THREE.MathUtils.degToRad(90 - lat);
      theta = THREE.MathUtils.degToRad(lon);

      cameraTarget.x = 500 * Math.sin(phi) * Math.cos(theta);
      cameraTarget.y = 500 * Math.cos(phi);
      cameraTarget.z = 500 * Math.sin(phi) * Math.sin(theta);

      camera.lookAt(cameraTarget);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      if (mount) {
        mount.removeEventListener("pointerdown", onPointerDown);
        mount.removeEventListener("pointermove", onPointerMove);
        mount.removeEventListener("pointerup", onPointerUp);
        mount.removeEventListener("pointercancel", onPointerUp);
        if (renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

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
    <section id="about" className="py-10 md:py-32 bg-[#000000] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
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

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black bg-[#00F078] hover:bg-white rounded transition-all shadow-[0_0_15px_rgba(0,240,120,0.3)]"
              >
                <span>DISCOVER OUR WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em]  border  border-[#00BFEF] text-[#00BFEF] rounded transition-all"
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

        <div className="relative rounded-xl overflow-hidden border border-white/15 bg-black shadow-2xl">
          <div
            ref={mountRef}
            className={`relative w-full h-[360px] sm:h-[460px] lg:h-[540px] select-none touch-none ${
              isInteracting ? "cursor-grabbing" : "cursor-grab"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />

          <div className="absolute top-5 left-5 z-20 pointer-events-none flex items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#00F078]/40 shadow-lg">
              <Compass className="w-3.5 h-3.5 text-[#00F078] animate-spin" style={{ animationDuration: "12s" }} />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#00F078]">
                VIEW OUR STUDIO IN 360&deg;
              </span>
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 z-20 pointer-events-none flex items-center justify-between">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70 bg-black/70 px-3 py-1 rounded backdrop-blur-md border border-white/10">
              DRAG TO ROTATE &bull; 360&deg; IMMERSIVE VIEW
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-[#00BFEF] font-mono bg-black/70 px-3 py-1 rounded backdrop-blur-md border border-white/10">
              LIVE 3D SPHERE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
