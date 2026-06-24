"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

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
              <div className="absolute top-full left-0 bg-white border border-[#D9D4CC] shadow-lg min-w-[360px] z-50 p-6 flex flex-col gap-4">
                <Link href="/maison-ossature-bois/" className="block no-underline hover:text-[#BA7517] group">
                  <div className="font-bold text-[#2C2C2A] text-[15px] mb-1 group-hover:text-[#BA7517]">Maison ossature bois neuve</div>
                  <div className="text-[#888780] text-[13px]">Construction complète, de la conception à la réception.</div>
                </Link>
                <Link href="/extension-bois/" className="block no-underline hover:text-[#BA7517] group">
                  <div className="font-bold text-[#2C2C2A] text-[15px] mb-1 group-hover:text-[#BA7517]">Extension ossature bois</div>
                  <div className="text-[#888780] text-[13px]">Agrandissement de votre maison existante.</div>
                </Link>
                <Link href="/renovation-bois/" className="block no-underline hover:text-[#BA7517] group">
                  <div className="font-bold text-[#2C2C2A] text-[15px] mb-1 group-hover:text-[#BA7517]">Rénovation & isolation bois</div>
                  <div className="text-[#888780] text-[13px]">Réhabilitation et performance énergétique.</div>
                </Link>
                <Link href="/notre-methode/" className="block no-underline hover:text-[#BA7517] group">
                  <div className="font-bold text-[#2C2C2A] text-[15px] mb-1 group-hover:text-[#BA7517]">Notre méthode MOE</div>
                  <div className="text-[#888780] text-[13px]">Coordination de chantier, un seul interlocuteur.</div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/guides/" className="text-[15px] font-medium uppercase tracking-wide px-4 py-2 text-[#2C2C2A] hover:text-[#BA7517] transition-colors no-underline">
            Guides
          </Link>
          <Link href="/annonces/" className="text-[15px] font-medium uppercase tracking-wide px-4 py-2 text-[#2C2C2A] hover:text-[#BA7517] transition-colors no-underline">
            Annonces
          </Link>
          <Link href="/a-propos/" className="text-[15px] font-medium uppercase tracking-wide px-4 py-2 text-[#2C2C2A] hover:text-[#BA7517] transition-colors no-underline">
            À propos
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
          <Link href="/maison-ossature-bois/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Maison ossature bois</Link>
          <Link href="/extension-bois/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Extension bois</Link>
          <Link href="/renovation-bois/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Rénovation bois</Link>
          <Link href="/guides/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Guides</Link>
          <Link href="/annonces/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">Annonces</Link>
          <Link href="/a-propos/" className="py-3 text-[16px] text-[#2C2C2A] border-b border-[#D9D4CC] no-underline">À propos</Link>
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
