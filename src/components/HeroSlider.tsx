"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  { bg: "/images/hero-maison-bois-alpine.jpg" },
  { bg: "/images/hero-maison-bois-montagne-1.jpg" },
  { bg: "/images/hero-extension-bois-golden.jpg" },
  { bg: "/images/hero-extension-bois-jardin.jpg" },
  { bg: "/images/hero-maison-bois-montagne-2.jpg" },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[400px] md:h-[750px] overflow-hidden">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.bg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35 z-[1]" />

      {/* Hero text */}
      <div className="absolute left-[5%] top-[28%] md:top-[32%] z-10 max-w-[65%] md:max-w-[55%]">
        <h1 className="text-white leading-[1.25] font-black text-[26px] md:text-[44px]">
          <span className="inline bg-[#BA7517] px-2 py-0.5 box-decoration-clone">
            Construire, agrandir ou rénover
          </span>
          <br />
          <span className="inline bg-[#BA7517] px-2 py-0.5 box-decoration-clone">
            votre maison en bois
          </span>
        </h1>
        <p className="mt-4 text-white text-[16px] md:text-[18px] leading-[1.5] drop-shadow font-medium max-w-[480px]">
          Un seul interlocuteur du projet à la réception des travaux. Maîtrise d&apos;œuvre spécialisée, Genevois français · Haute-Savoie · Ain.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[15px] md:text-[17px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors">
            Demande d&apos;étude gratuite
          </Link>
          <Link href="/notre-methode/" className="inline-block border-2 border-white text-white text-[15px] md:text-[17px] font-bold px-6 py-3 no-underline hover:bg-white hover:text-[#2C2C2A] transition-colors">
            Notre méthode
          </Link>
        </div>
      </div>

      {/* RE2020 badge */}
      <div className="absolute bottom-10 right-5 z-10 bg-white/90 px-3 py-2 flex flex-col items-center text-center">
        <span className="text-[11px] font-bold text-[#2C2C2A] uppercase tracking-wide">Conforme</span>
        <span className="text-[13px] font-black text-[#BA7517]">RE 2020</span>
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/30 hover:bg-white/50 transition-colors border-none cursor-pointer text-white text-[20px]"
        aria-label="Slide précédent"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/30 hover:bg-white/50 transition-colors border-none cursor-pointer text-white text-[20px]"
        aria-label="Slide suivant"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full border-none cursor-pointer transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
