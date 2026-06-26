"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type Slide = { bg: string; alt: string };

export function HeroSliderClient({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {/* Slides 1–4 overlay on top of the server-rendered slide 0 */}
      {slides.slice(1).map((s, i) => (
        <div
          key={i + 1}
          className={`absolute inset-0 transition-opacity duration-700 ${current === i + 1 ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.bg}
            alt={s.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
            loading="lazy"
          />
        </div>
      ))}

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
    </>
  );
}
