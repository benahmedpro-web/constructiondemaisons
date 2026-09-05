import Link from "next/link";
import { GererCookiesButton } from "@/components/GererCookiesButton";

const col2Links = [
  { label: "Maison ossature bois neuve", href: "/maison-ossature-bois/" },
  { label: "Extension ossature bois", href: "/extension-bois/" },
  { label: "Rénovation & isolation bois", href: "/renovation-bois/" },
  { label: "Faire construire en Haute-Savoie", href: "/faire-construire-haute-savoie/" },
  { label: "Maison bois Annecy", href: "/maison-ossature-bois-annecy/" },
  { label: "Maison bois Annemasse", href: "/maison-ossature-bois-annemasse/" },
  { label: "Maison bois Saint-Julien-en-Genevois", href: "/maison-ossature-bois-saint-julien-en-genevois/" },
  { label: "Maison bois Gex (01)", href: "/maison-ossature-bois-gex/" },
  { label: "Maison bois Thonon-les-Bains", href: "/maison-ossature-bois-thonon/" },
  { label: "Notre méthode MOE", href: "/notre-methode/" },
  { label: "Annonces terrains & projets", href: "/annonces/" },
];

const col3Links = [
  { label: "Maison ossature bois en 2026", href: "/guides/maison-ossature-bois/" },
  { label: "RE2020 & maison bois", href: "/guides/re2020-maison-bois/" },
  { label: "MOE vs CCMI : les différences", href: "/guides/moe-vs-ccmi/" },
  { label: "Prix maison bois Haute-Savoie", href: "/guides/prix-maison-ossature-bois-haute-savoie/" },
  { label: "Choisir ses artisans bois", href: "/guides/choisir-artisans-maison-bois/" },
  { label: "Permis de construire Genevois", href: "/guides/permis-construire-genevois/" },
  { label: "Garanties & assurance MOE", href: "/guides/garanties-assurance-maitre-oeuvre/" },
  { label: "Coordonner un chantier bois", href: "/guides/coordonner-chantier-bois/" },
  { label: "Chalet ossature bois Haute-Savoie", href: "/guides/construction-chalet-ossature-bois-haute-savoie/" },
];

const col4Links = [
  { label: "À propos", href: "/a-propos/" },
  { label: "Témoignages clients", href: "/temoignages/" },
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
          <div className="mt-3">
            <a href="tel:+33480161783" className="text-[13px] text-white/60 no-underline hover:text-white transition-colors">04 80 16 17 83</a>
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
            Configurer mon projet →
          </Link>
          <a
            href="https://g.page/r/Cdn_3K5QUh7wEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-[12px] text-white/50 no-underline hover:text-white transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Laisser un avis Google
          </a>
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
          <Link href="/politique-cookies/" className="text-white/50 hover:text-white no-underline transition-colors">Politique de cookies</Link>
          <span>|</span>
          <GererCookiesButton />
          <span>|</span>
          <span>M&amp;M CONSTRUCTION — NAF 71.12B — Maîtrise d&apos;œuvre bois, Genevois français</span>
        </div>
      </div>
    </footer>
  );
}
