import Image from "next/image";
import Link from "next/link";
import { HeroSliderClient } from "./HeroSliderClient";

const slides = [
  { bg: "/images/hero-maison-bois-alpine.jpg", alt: "M&M CONSTRUCTION — Maison ossature bois Haute-Savoie" },
  { bg: "/images/hero-maison-bois-montagne-1.jpg", alt: "Maison ossature bois en montagne — Genevois français" },
  { bg: "/images/hero-extension-bois-golden.jpg", alt: "Extension ossature bois en Haute-Savoie" },
  { bg: "/images/hero-extension-bois-jardin.jpg", alt: "Terrasse et extension bois en Haute-Savoie" },
  { bg: "/images/hero-maison-bois-montagne-2.jpg", alt: "Maison ossature bois R+1 — Ain et Genevois" },
];

export function HeroSlider() {
  return (
    <div className="relative w-full h-[400px] md:h-[750px] overflow-hidden">
      {/* Slide 0 — server-rendered, no JS dependency, LCP image */}
      <div className="absolute inset-0">
        <Image
          src={slides[0].bg}
          alt={slides[0].alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
      </div>

      {/* Slides 1–4 + navigation controls — client only */}
      <HeroSliderClient slides={slides} />

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
            Configurer mon projet
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
    </div>
  );
}
