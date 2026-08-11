"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const MODELES = [
  { nom: "Tournette", slug: "tournette", surfaces: "65 – 90 m²" },
  { nom: "Bargy", slug: "bargy", surfaces: "75 – 100 m²" },
  { nom: "Voirons", slug: "voirons", surfaces: "100 m²" },
  { nom: "Salève", slug: "saleve", surfaces: "75 – 90 m²" },
  { nom: "Aravis", slug: "aravis", surfaces: "80 – 100 m²" },
  { nom: "Étale", slug: "etale", surfaces: "81 – 118 m²" },
];

const ANNONCES_NAV = [
  { slug: "terrain-vetraz-monthoux-vue-bassin-genevois", commune: "Vétraz-Monthoux", accroche: "Terrain 817 m² — vue Bassin genevois" },
  { slug: "terrain-cranves-sales-709m2-vue-bassin-genevois", commune: "Cranves-Sales", accroche: "Terrain 709 m² — vue dégagée" },
  { slug: "terrain-archamps-679m2-frontiere-geneve", commune: "Archamps", accroche: "Terrain 679 m² — frontaliers Genève" },
  { slug: "terrain-collonges-sous-saleve-1050m2-vue-geneve", commune: "Collonges-sous-Salève", accroche: "Terrain 1 050 m² — vue Genève" },
  { slug: "terrain-annemasse-492m2-centre-tram-74100", commune: "Annemasse", accroche: "Terrain 492 m² — centre, tram" },
];

export function HeaderTerrain() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [annoncesDropdown, setAnnoncesDropdown] = useState(false);
  const [modelsDropdown, setModelsDropdown] = useState(false);

  return (
    <header className="bg-white w-full border-b border-[#D9D4CC] relative z-50">
      <div className="max-w-[1200px] mx-auto px-5 py-0 flex items-center h-[64px] gap-10">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 no-underline">
          <Image
            src="/images/logo-mm-construction.png"
            alt="M&M CONSTRUCTION"
            width={120}
            height={80}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0 flex-1">

          {/* Terrain à bâtir */}
          <div
            className="relative"
            onMouseEnter={() => setAnnoncesDropdown(true)}
            onMouseLeave={() => setAnnoncesDropdown(false)}
          >
            <button className="text-[15px] font-medium text-[#2C2C2A] hover:text-[#BA7517] transition-colors bg-transparent border-none cursor-pointer px-4 py-5">
              Terrain à bâtir
            </button>
            {annoncesDropdown && (
              <div className="absolute top-full left-0 bg-white border border-[#D9D4CC] shadow-lg min-w-[360px] z-50 p-6 flex flex-col gap-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">Terrains disponibles</p>
                {ANNONCES_NAV.map((a) => (
                  <Link key={a.slug} href={`/annonces/${a.slug}/`} className="block no-underline group border-b border-[#D9D4CC] pb-2 last:border-0">
                    <div className="font-bold text-[#2C2C2A] text-[14px] group-hover:text-[#BA7517]">{a.commune}</div>
                    <div className="text-[12px] text-[#888780]">{a.accroche}</div>
                  </Link>
                ))}
                <Link href="/annonces/" className="text-[12px] text-[#BA7517] no-underline hover:underline font-medium pt-1">→ Toutes les annonces</Link>
              </div>
            )}
          </div>

          {/* Terrain avec maison */}
          <Link href="/faire-construire-haute-savoie/" className="text-[15px] font-medium text-[#2C2C2A] hover:text-[#BA7517] transition-colors no-underline px-4 py-5">
            Terrain avec maison
          </Link>

          {/* Modèle de maison */}
          <div
            className="relative"
            onMouseEnter={() => setModelsDropdown(true)}
            onMouseLeave={() => setModelsDropdown(false)}
          >
            <button className="text-[15px] font-medium text-[#2C2C2A] hover:text-[#BA7517] transition-colors bg-transparent border-none cursor-pointer px-4 py-5">
              Modèle de maison
            </button>
            {modelsDropdown && (
              <div className="absolute top-full left-0 bg-white border border-[#D9D4CC] shadow-lg min-w-[360px] z-50 p-6 flex flex-col gap-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">Nos modèles</p>
                {MODELES.map((m) => (
                  <Link key={m.slug} href={`/catalogue/#${m.slug}`} className="flex items-baseline justify-between no-underline group border-b border-[#D9D4CC] pb-2 last:border-0">
                    <span className="font-bold text-[#2C2C2A] text-[14px] group-hover:text-[#BA7517]">{m.nom}</span>
                    <span className="text-[12px] text-[#888780] ml-3">{m.surfaces}</span>
                  </Link>
                ))}
                <Link href="/catalogue/" className="text-[12px] text-[#BA7517] no-underline hover:underline font-medium pt-1">→ Voir le catalogue complet</Link>
              </div>
            )}
          </div>

        </nav>

        {/* CTA desktop — outlined */}
        <Link
          href="/demande-etude/"
          className="hidden lg:inline-flex items-center border border-[#2C2C2A] text-[#2C2C2A] text-[14px] font-semibold px-5 py-2 no-underline hover:bg-[#2C2C2A] hover:text-white transition-colors ml-auto shrink-0"
        >
          Faire estimer mon projet
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#2C2C2A] bg-transparent border-none cursor-pointer p-1 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#D9D4CC] px-5 py-4 flex flex-col gap-0">
          <Link href="/annonces/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Terrain à bâtir</Link>
          <Link href="/faire-construire-haute-savoie/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Terrain avec maison</Link>
          <Link href="/catalogue/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Modèle de maison</Link>
          <div className="pt-4">
            <Link href="/demande-etude/" className="block border border-[#2C2C2A] text-[#2C2C2A] text-center text-[15px] font-semibold py-3 no-underline">
              Faire estimer mon projet
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
