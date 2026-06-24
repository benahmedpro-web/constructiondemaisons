import Link from "next/link";

const col2Links = [
  { label: "Maison ossature bois neuve", href: "/maison-ossature-bois/" },
  { label: "Extension ossature bois", href: "/extension-bois/" },
  { label: "Rénovation & isolation bois", href: "/renovation-bois/" },
  { label: "Notre méthode MOE", href: "/notre-methode/" },
  { label: "Annonces", href: "/annonces/" },
];

const col3Links = [
  { label: "Maison ossature bois en 2025", href: "/guides/maison-ossature-bois/" },
  { label: "RE2020 & maison bois", href: "/guides/re2020-maison-bois/" },
  { label: "MOE vs CCMI : les différences", href: "/guides/moe-vs-ccmi/" },
  { label: "Extension ossature bois", href: "/guides/extension-ossature-bois/" },
  { label: "Choisir ses artisans bois", href: "/guides/choisir-artisans-maison-bois/" },
  { label: "Permis de construire Genevois", href: "/guides/permis-construire-genevois/" },
];

const col4Links = [
  { label: "À propos", href: "/a-propos/" },
  { label: "Annonces", href: "/annonces/" },
  { label: "Demande d'étude gratuite", href: "/demande-etude/" },
  { label: "Contact", href: "/contact/" },
];

export function Footer() {
  return (
    <footer className="bg-[#2C2C2A] text-white">
      {/* Top: 4 columns */}
      <div className="max-w-[1200px] mx-auto px-5 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div>
          <div className="mb-4">
            <span className="text-[18px] font-black text-white tracking-tight">M&amp;M CONSTRUCTION</span>
            <div className="text-[11px] text-white/50 tracking-widest uppercase mt-0.5">Maîtrise d&apos;œuvre · Maison bois</div>
          </div>
          <p className="text-[13px] text-white/60 leading-relaxed mb-4">
            Spécialisé maison ossature bois en Genevois français, Haute-Savoie et Ain.
            Un interlocuteur unique, du projet à la réception.
          </p>
          <div className="text-[13px] text-white/50">
            <div>NAF 71.12B — Maîtrise d&apos;œuvre</div>
            <div>constructiondemaisons.com</div>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <div className="text-[12px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Services</div>
          <ul className="list-none p-0 m-0 flex flex-col gap-1">
            {col2Links.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="text-[14px] text-white/70 no-underline hover:text-white transition-colors leading-loose">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Guides */}
        <div>
          <div className="text-[12px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Guides techniques</div>
          <ul className="list-none p-0 m-0 flex flex-col gap-1">
            {col3Links.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="text-[14px] text-white/70 no-underline hover:text-white transition-colors leading-loose">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: À propos + Contact */}
        <div>
          <div className="text-[12px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">À propos</div>
          <ul className="list-none p-0 m-0 flex flex-col gap-1 mb-6">
            {col4Links.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="text-[14px] text-white/70 no-underline hover:text-white transition-colors leading-loose">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* CTA footer */}
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[13px] font-bold px-4 py-2 no-underline hover:bg-[#9E6312] transition-colors">
            Demande d&apos;étude →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/30 py-4 px-5">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-2 text-[13px] text-white/50">
          <span>© 2026 M&amp;M CONSTRUCTION</span>
          <span>|</span>
          <Link href="/mentions-legales/" className="text-white/50 hover:text-white no-underline transition-colors">Mentions légales</Link>
          <span>|</span>
          <Link href="/vie-privee/" className="text-white/50 hover:text-white no-underline transition-colors">Politique de confidentialité</Link>
          <span>|</span>
          <span>M&amp;M CONSTRUCTION — NAF 71.12B — Maîtrise d&apos;œuvre bois, Genevois français</span>
        </div>
      </div>
    </footer>
  );
}
