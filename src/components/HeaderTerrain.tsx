import Link from "next/link";

export function HeaderTerrain() {

  return (
    <header className="bg-white w-full border-b border-[#D9D4CC] relative z-50">
      <div className="max-w-[1200px] mx-auto px-5 py-0 flex items-center h-[64px]">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex flex-col leading-none no-underline">
          <span className="text-[22px] font-black text-[#2C2C2A] tracking-tight">M&amp;M CONSTRUCTION</span>
          <span className="text-[11px] text-[#888780] tracking-widest uppercase">Maîtrise d&apos;œuvre · Maison bois</span>
        </Link>

        <div className="flex-1" />

        {/* Placeholder nav vide — anciens liens déplacés dans le filtre Type */}
        <nav className="hidden lg:flex items-center gap-0">

        </nav>

        {/* CTA */}
        <Link
          href="/demande-etude/"
          className="hidden lg:inline-flex items-center border border-[#2C2C2A] text-[#2C2C2A] text-[14px] font-semibold px-5 py-2 no-underline hover:bg-[#2C2C2A] hover:text-white transition-colors shrink-0"
        >
          Faire estimer mon projet
        </Link>

        {/* CTA mobile */}
        <Link
          href="/demande-etude/"
          className="lg:hidden inline-flex items-center border border-[#2C2C2A] text-[#2C2C2A] text-[12px] font-semibold px-3 py-1.5 no-underline"
        >
          Estimer mon projet
        </Link>
      </div>
    </header>
  );
}
