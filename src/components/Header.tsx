"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [guidesDropdown, setGuidesDropdown] = useState(false);

  return (
    <header className="bg-white w-full border-b border-[#D9D4CC] relative z-50">
      {/* Utility bar */}
      <div className="border-b border-[#D9D4CC]">
        <div className="max-w-[1200px] mx-auto px-5 py-2 flex items-center justify-end gap-6">
          <Link href="/demande-etude/" className="flex items-center gap-1.5 text-[#888780] text-[13px] no-underline hover:text-[#BA7517] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Demande d&apos;étude
          </Link>
          <Link href="/contact/" className="flex items-center gap-1.5 text-[#888780] text-[13px] no-underline hover:text-[#BA7517] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.35 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Contact
          </Link>
          <a href="tel:+33625590926" className="bg-[#BA7517] text-white text-[13px] font-bold px-3 py-1 rounded flex flex-col items-center leading-tight no-underline hover:bg-[#9E6312] transition-colors">
            <span>Appeler</span>
            <span className="font-normal text-[11px] opacity-90">Gratuit · Sans engagement</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-[1200px] mx-auto px-5 py-3 flex items-center gap-8">
        {/* Logo text */}
        <Link href="/" className="flex-shrink-0 mr-auto flex flex-col leading-none no-underline">
          <span className="text-[22px] font-black text-[#2C2C2A] tracking-tight">M&amp;M CONSTRUCTION</span>
          <span className="text-[11px] text-[#888780] tracking-widest uppercase">Maîtrise d&apos;œuvre · Maison bois</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button className="text-[15px] font-medium uppercase tracking-wide px-4 py-2 text-[#2C2C2A] hover:text-[#BA7517] transition-colors bg-transparent border-none cursor-pointer">
              Nos services
            </button>
            {servicesDropdown && (
              <div className="absolute top-full left-0 bg-white border border-[#D9D4CC] shadow-lg min-w-[640px] z-50 p-6 grid grid-cols-2 gap-6">
                {/* Col 1 : Services */}
                <div className="flex flex-col gap-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">Services</p>
                  <Link href="/faire-construire-haute-savoie/" className="block no-underline hover:text-[#BA7517] group border-b border-[#D9D4CC] pb-3">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Faire construire en Haute-Savoie</div>
                    <div className="text-[#888780] text-[12px]">Guide complet pour votre projet.</div>
                  </Link>
                  <Link href="/maison-ossature-bois/" className="block no-underline hover:text-[#BA7517] group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Maison ossature bois neuve</div>
                    <div className="text-[#888780] text-[12px]">De la conception à la réception.</div>
                  </Link>
                  <Link href="/extension-bois/" className="block no-underline hover:text-[#BA7517] group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Extension ossature bois</div>
                    <div className="text-[#888780] text-[12px]">Agrandissement de votre maison.</div>
                  </Link>
                  <Link href="/renovation-bois/" className="block no-underline hover:text-[#BA7517] group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Rénovation & isolation bois</div>
                    <div className="text-[#888780] text-[12px]">Réhabilitation et performance énergétique.</div>
                  </Link>
                  <Link href="/notre-methode/" className="block no-underline hover:text-[#BA7517] group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Notre méthode MOE</div>
                    <div className="text-[#888780] text-[12px]">Un seul interlocuteur, zéro coordination.</div>
                  </Link>
                </div>
                {/* Col 2 : Zones */}
                <div className="flex flex-col gap-4 border-l border-[#D9D4CC] pl-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">Zones d&apos;intervention</p>
                  <Link href="/maison-ossature-bois-annecy/" className="block no-underline hover:text-[#BA7517] group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Annecy (74)</div>
                    <div className="text-[#888780] text-[12px]">Bassin annécien, lac d&apos;Annecy.</div>
                  </Link>
                  <Link href="/maison-ossature-bois-annemasse/" className="block no-underline hover:text-[#BA7517] group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Annemasse (74)</div>
                    <div className="text-[#888780] text-[12px]">Genevois nord, agglomération.</div>
                  </Link>
                  <Link href="/maison-ossature-bois-saint-julien-en-genevois/" className="block no-underline hover:text-[#BA7517] group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Saint-Julien-en-Genevois (74)</div>
                    <div className="text-[#888780] text-[12px]">Sud Genevois, terrains en pente.</div>
                  </Link>
                  <Link href="/maison-ossature-bois-gex/" className="block no-underline hover:text-[#BA7517] group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Gex — Pays de Gex (01)</div>
                    <div className="text-[#888780] text-[12px]">Ain, frontaliers CERN, DDT01.</div>
                  </Link>
                  <Link href="/maison-ossature-bois-thonon/" className="block no-underline hover:text-[#BA7517] group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Thonon — Chablais (74)</div>
                    <div className="text-[#888780] text-[12px]">Lac Léman, Evian, vallées alpines.</div>
                  </Link>
                  <div className="mt-auto pt-4 border-t border-[#D9D4CC]">
                    <Link href="/faire-construire-haute-savoie/" className="text-[12px] text-[#BA7517] no-underline hover:underline font-medium">
                      → Toutes nos zones d&apos;intervention
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Guides dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setGuidesDropdown(true)}
            onMouseLeave={() => setGuidesDropdown(false)}
          >
            <button className="text-[15px] font-medium uppercase tracking-wide px-4 py-2 text-[#2C2C2A] hover:text-[#BA7517] transition-colors bg-transparent border-none cursor-pointer">
              Guides
            </button>
            {guidesDropdown && (
              <div className="absolute top-full left-0 bg-white border border-[#D9D4CC] shadow-lg min-w-[640px] z-50 p-6 grid grid-cols-2 gap-6">
                {/* Col 1 : Thématiques */}
                <div className="flex flex-col gap-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">Thématiques</p>
                  <Link href="/guides/prix-construction-maison/" className="block no-underline group border-b border-[#D9D4CC] pb-3">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Prix construction maison 2026</div>
                    <div className="text-[#888780] text-[12px]">Budget complet par type de projet.</div>
                  </Link>
                  <Link href="/guides/maison-ossature-bois/" className="block no-underline group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Maison ossature bois</div>
                    <div className="text-[#888780] text-[12px]">Avantages, coûts et délais en 2026.</div>
                  </Link>
                  <Link href="/guides/extension-ossature-bois/" className="block no-underline group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Extension ossature bois</div>
                    <div className="text-[#888780] text-[12px]">Permis, coût, délais.</div>
                  </Link>
                  <Link href="/guides/moe-vs-ccmi/" className="block no-underline group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Maîtrise d&apos;œuvre vs CCMI</div>
                    <div className="text-[#888780] text-[12px]">Quelles différences concrètes ?</div>
                  </Link>
                  <Link href="/guides/permis-construire-genevois/" className="block no-underline group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Permis de construire Genevois</div>
                    <div className="text-[#888780] text-[12px]">PLU, délais, pièges à éviter.</div>
                  </Link>
                </div>
                {/* Col 2 : Budget par surface */}
                <div className="flex flex-col gap-4 border-l border-[#D9D4CC] pl-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">Budget par surface</p>
                  <Link href="/guides/prix-maison-ossature-bois-haute-savoie/" className="block no-underline group border-b border-[#D9D4CC] pb-3">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Prix au m² Haute-Savoie</div>
                    <div className="text-[#888780] text-[12px]">Fourchettes par zone géographique.</div>
                  </Link>
                  <Link href="/guides/prix-maison-ossature-bois-100m2/" className="block no-underline group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Maison 100 m²</div>
                    <div className="text-[#888780] text-[12px]">210 000 – 290 000 € · budget détaillé.</div>
                  </Link>
                  <Link href="/guides/prix-maison-ossature-bois-120m2/" className="block no-underline group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Maison 120 m²</div>
                    <div className="text-[#888780] text-[12px]">250 000 – 340 000 € · budget détaillé.</div>
                  </Link>
                  <Link href="/guides/prix-maison-ossature-bois-150m2/" className="block no-underline group">
                    <div className="font-bold text-[#2C2C2A] text-[14px] mb-0.5 group-hover:text-[#BA7517]">Maison 150 m²</div>
                    <div className="text-[#888780] text-[12px]">310 000 – 420 000 € · budget détaillé.</div>
                  </Link>
                  <div className="mt-auto pt-4 border-t border-[#D9D4CC]">
                    <Link href="/guides/" className="text-[12px] text-[#BA7517] no-underline hover:underline font-medium">
                      → Tous les guides
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/annonces/" className="text-[15px] font-medium uppercase tracking-wide px-4 py-2 text-[#2C2C2A] hover:text-[#BA7517] transition-colors no-underline">
            Annonces
          </Link>
          <Link href="/a-propos/" className="text-[15px] font-medium uppercase tracking-wide px-4 py-2 text-[#2C2C2A] hover:text-[#BA7517] transition-colors no-underline">
            À propos
          </Link>
          <Link href="/temoignages/" className="text-[15px] font-medium uppercase tracking-wide px-4 py-2 text-[#2C2C2A] hover:text-[#BA7517] transition-colors no-underline">
            Avis clients
          </Link>
        </nav>

        {/* CTA desktop */}
        <Link href="/demande-etude/" className="hidden lg:inline-block bg-[#BA7517] text-white text-[14px] font-bold px-5 py-2 no-underline hover:bg-[#9E6312] transition-colors">
          Demande d&apos;étude
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#2C2C2A] bg-transparent border-none cursor-pointer p-1"
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
          <Link href="/faire-construire-haute-savoie/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Faire construire en Haute-Savoie</Link>
          <Link href="/maison-ossature-bois/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Maison ossature bois</Link>
          <Link href="/extension-bois/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Extension bois</Link>
          <Link href="/renovation-bois/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Rénovation bois</Link>
          <p className="pt-3 pb-1 text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">Zones</p>
          <Link href="/maison-ossature-bois-annecy/" className="py-2.5 text-[15px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline pl-2">→ Annecy (74)</Link>
          <Link href="/maison-ossature-bois-annemasse/" className="py-2.5 text-[15px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline pl-2">→ Annemasse (74)</Link>
          <Link href="/maison-ossature-bois-saint-julien-en-genevois/" className="py-2.5 text-[15px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline pl-2">→ Saint-Julien-en-Genevois (74)</Link>
          <Link href="/maison-ossature-bois-gex/" className="py-2.5 text-[15px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline pl-2">→ Gex — Pays de Gex (01)</Link>
          <Link href="/maison-ossature-bois-thonon/" className="py-2.5 text-[15px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline pl-2">→ Thonon — Chablais (74)</Link>
          <p className="pt-3 pb-1 text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">Guides</p>
          <Link href="/guides/prix-construction-maison/" className="py-2.5 text-[15px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline pl-2">→ Prix construction maison 2026</Link>
          <Link href="/guides/maison-ossature-bois/" className="py-2.5 text-[15px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline pl-2">→ Maison ossature bois</Link>
          <Link href="/guides/extension-ossature-bois/" className="py-2.5 text-[15px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline pl-2">→ Extension ossature bois</Link>
          <Link href="/guides/moe-vs-ccmi/" className="py-2.5 text-[15px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline pl-2">→ Maîtrise d&apos;œuvre vs CCMI</Link>
          <Link href="/guides/" className="py-2.5 text-[15px] text-[#BA7517] border-b border-[#D9D4CC] no-underline pl-2 font-medium">→ Tous les guides</Link>
          <Link href="/annonces/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Annonces</Link>
          <Link href="/a-propos/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">À propos</Link>
          <Link href="/temoignages/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Avis clients</Link>
          <div className="pt-4">
            <Link href="/demande-etude/" className="block bg-[#BA7517] text-white text-center text-[15px] font-bold py-3 no-underline">
              Demande d&apos;étude gratuite
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
