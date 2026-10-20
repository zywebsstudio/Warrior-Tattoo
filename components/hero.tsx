"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";
import { ArrowUpRight, CheckCircle2, Rotate3d, Compass } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const trustPoints = [
    "100% Hospital-Grade Clinical Sterility",
    "Custom Anatomical Design & Consultation",
    "Award-Winning Resident Master Tattooists",
  ];

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
    const texture = textureLoader.load("img/warhero.png", () => {
      renderer.render(scene, camera);
    });

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
        lon += 0.1;
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

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,240,120,0.08),rgba(255,255,255,0))]" />

      <div className="relative z-10 container mx-auto px-3 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-start sm:mt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00F078] animate-pulse" />
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#00F078]">
                WARRIOR TATTOO STUDIO
              </span>
            </div>

            <h1 className="text-[55px] sm:text-6xl lg:text-[86px] font-black uppercase tracking-tight text-white leading-[1.05] mb-4 sm:mb-5">
              YOUR VISION.
              <br />
              <span className="bg-gradient-to-r from-[#00F078] via-white to-[#00BFEF] bg-clip-text text-transparent">
                OUR ART.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#A3A3A3] font-light leading-relaxed max-w-lg mb-6 sm:mb-8">
              {SITE_CONFIG.subheadline}
            </p>

            <div className="flex flex-row items-center gap-2.5 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              <Link
                href="#gallery"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black bg-[#00F078] hover:bg-white transition-all duration-300 rounded shadow-[0_0_20px_rgba(0,240,120,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] whitespace-nowrap"
              >
                <span>OUR WORKS</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#booking"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#00BFEF] border border-[#00BFEF] hover:bg-[#00BFEF] hover:text-black bg-[#00BFEF]/10 backdrop-blur-sm transition-all duration-300 rounded shadow-[0_0_15px_rgba(0,191,239,0.25)] hover:shadow-[0_0_25px_rgba(0,191,239,0.5)] whitespace-nowrap"
              >
                <span>BOOK SESSION</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className=" pt-5 border-t border-white/10">
              <div className="grid grid-cols-3 sm:grid-cols-1 gap-3">
                {trustPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row items-center gap-2 text-[8px] sm:text-xs text-[#f5f5f5]/85"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F078] shrink-0" />
                    <span className="leading-tight">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative w-full lg:mt-20">
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#00F078]/25 via-transparent to-[#00BFEF]/25 rounded-3xl blur-2xl opacity-70" />

              <div className="relative aspect-[4/5] max-h-[460px] lg:max-h-[580px] w-full rounded-md overflow-hidden border border-white/15 bg-[#0A0A0A] shadow-2xl cursor-grab active:cursor-grabbing select-none group">
                <div ref={mountRef} className="w-full h-full" />

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-wider text-[#00F078] flex items-center gap-1.5 shadow-lg pointer-events-none">
                  <Rotate3d className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
                  <span>360° View</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#00BFEF]" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white">
                        {isInteracting ? "Exploring Studio..." : "Interactive 360° Studio"}
                      </p>
                      <p className="text-[9px] text-[#A3A3A3]">
                        Drag to look around • Auto-rotating
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#00F078]/15 border border-[#00F078]/40 text-[9px] font-bold text-[#00F078] uppercase tracking-wider">
                    Live View
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
