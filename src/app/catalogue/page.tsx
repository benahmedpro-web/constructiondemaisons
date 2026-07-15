import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catalogue de maisons ossature bois RE2020 — M&M CONSTRUCTION",
  description: "Découvrez nos 6 gammes de maisons ossature bois conformes RE2020 : plain-pied ou étage, de 65 à 118 m², adaptables à votre terrain en Haute-Savoie, Ain et Genevois français.",
};

const gammes = [
  {
    nom: "Tournette",
    slug: "tournette",
    type: "Plain-pied",
    surfaces: "65 – 90 m²",
    typologies: "T3 à T4",
    variantes: 9,
    description: "Maison de plain-pied compacte et fonctionnelle. Idéale pour les terrains à faible emprise. Disponible avec ou sans garage intégré.",
    tag: "Entrée de gamme",
  },
  {
    nom: "Bargy",
    slug: "bargy",
    type: "Plain-pied",
    surfaces: "75 – 100 m²",
    typologies: "T4 à T5",
    variantes: 8,
    description: "Plain-pied spacieux avec séjour traversant ou séjour avant selon l'orientation de votre terrain. Grande luminosité naturelle.",
    tag: "Le plus populaire",
  },
  {
    nom: "Voirons",
    slug: "voirons",
    type: "Plain-pied",
    surfaces: "100 m²",
    typologies: "T5",
    variantes: 1,
    description: "Grand plain-pied 4 chambres avec garage intégré. Conçu pour les familles qui souhaitent tout de plain-pied sans compromis sur les espaces.",
    tag: "Famille",
  },
  {
    nom: "Salève",
    slug: "saleve",
    type: "Étage",
    surfaces: "75 – 90 m²",
    typologies: "T4",
    variantes: 3,
    description: "Maison à étage gamme Éco. Emprise au sol réduite — idéale pour les terrains étroits. Séjour généreux au RDC, chambres à l'étage.",
    tag: "Gamme Éco",
  },
  {
    nom: "Aravis",
    slug: "aravis",
    type: "Étage",
    surfaces: "80 – 100 m²",
    typologies: "T4 à T5",
    variantes: 5,
    description: "Maison à étage avec suite parentale au RDC. Organisation optimale : vie de famille à l'étage, intimité des parents préservée.",
    tag: "Suite parentale",
  },
  {
    nom: "Étale",
    slug: "etale",
    type: "Étage",
    surfaces: "81 – 118 m²",
    typologies: "T4 à T5",
    variantes: 5,
    description: "La gamme la plus spacieuse. Grandes pièces de vie, volumes généreux, jusqu'à 118 m² habitables. Pour un projet sans compromis.",
    tag: "Haut de gamme",
  },
];

function BadgeType({ type }: { type: string }) {
  const isEtage = type === "Étage";
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 ${isEtage ? "bg-[#2C2C2A] text-white" : "bg-[#F2EDE6] text-[#2C2C2A]"}`}>
      {isEtage ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      )}
      {type}
    </span>
  );
}

function Re2020Badge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#BA7517] border border-[#BA7517] px-2 py-0.5">
      RE2020
    </span>
  );
}

function PlaceholderVisuel({ nom }: { nom: string }) {
  return (
    <div className="w-full aspect-[4/3] bg-[#E8E2D9] flex flex-col items-center justify-center gap-3">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B8B0A4" strokeWidth="1">
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <path d="M3 9l4-4 4 4 4-4 4 4"/>
        <path d="M3 15l4 4 4-4 4 4 4-4"/>
      </svg>
      <span className="text-[12px] text-[#B8B0A4] font-medium">Visuel {nom} — bientôt disponible</span>
    </div>
  );
}

export default function CataloguePage() {
  const plains = gammes.filter(g => g.type === "Plain-pied");
  const etages = gammes.filter(g => g.type === "Étage");

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#2C2C2A] py-14 px-5">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2 text-[12px] text-[#888780] mb-4">
            <Link href="/" className="hover:text-[#BA7517] transition-colors no-underline text-[#888780]">Accueil</Link>
            <span>›</span>
            <span className="text-white">Catalogue</span>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <Re2020Badge />
            <span className="text-[12px] text-[#888780] uppercase tracking-wider font-medium">Ossature bois</span>
          </div>
          <h1 className="text-[32px] md:text-[42px] font-black text-white leading-tight mb-4">
            Nos modèles de maisons
          </h1>
          <p className="text-[16px] text-[#888780] max-w-[600px] leading-relaxed">
            6 gammes de maisons ossature bois conformes RE2020, de 65 à 118 m². Chaque modèle est adaptable à votre terrain et personnalisable selon vos besoins.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="border-b border-[#D9D4CC] bg-[#F2EDE6]">
        <div className="max-w-[1100px] mx-auto px-5 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "6", label: "Gammes" },
            { val: "31", label: "Variantes de plans" },
            { val: "65 – 118 m²", label: "Surfaces disponibles" },
            { val: "RE2020", label: "Toutes gammes conformes" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-[24px] font-black text-[#BA7517]">{s.val}</div>
              <div className="text-[12px] text-[#888780] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gammes Plain-pied */}
      <section className="py-14 px-5">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[22px] font-bold text-[#2C2C2A]">Plain-pied</h2>
            <div className="flex-1 h-px bg-[#D9D4CC]" />
            <span className="text-[13px] text-[#888780]">{plains.length} gammes</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plains.map((g) => (
              <div key={g.slug} className="border border-[#D9D4CC] flex flex-col">
                <PlaceholderVisuel nom={g.nom} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-[20px] font-black text-[#2C2C2A]">{g.nom}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <BadgeType type={g.type} />
                        <Re2020Badge />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#BA7517] uppercase tracking-wider text-right">{g.tag}</span>
                  </div>
                  <p className="text-[13px] text-[#888780] leading-[1.7] mb-4 flex-1">{g.description}</p>
                  <div className="grid grid-cols-3 gap-3 mb-5 pt-4 border-t border-[#D9D4CC]">
                    <div>
                      <div className="text-[11px] text-[#888780] uppercase tracking-wide">Surface</div>
                      <div className="text-[14px] font-bold text-[#2C2C2A] mt-0.5">{g.surfaces}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#888780] uppercase tracking-wide">Typo.</div>
                      <div className="text-[14px] font-bold text-[#2C2C2A] mt-0.5">{g.typologies}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#888780] uppercase tracking-wide">Variantes</div>
                      <div className="text-[14px] font-bold text-[#2C2C2A] mt-0.5">{g.variantes} plans</div>
                    </div>
                  </div>
                  <Link
                    href={`/demande-etude/?type=maison-neuve&gamme=${encodeURIComponent(g.nom)}`}
                    className="block bg-[#BA7517] text-white text-center text-[13px] font-bold py-3 no-underline hover:bg-[#9E6312] transition-colors"
                  >
                    Obtenir les plans
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gammes Étage */}
      <section className="py-14 px-5 bg-[#F2EDE6]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[22px] font-bold text-[#2C2C2A]">Étage</h2>
            <div className="flex-1 h-px bg-[#D9D4CC]" />
            <span className="text-[13px] text-[#888780]">{etages.length} gammes</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {etages.map((g) => (
              <div key={g.slug} className="border border-[#D9D4CC] bg-white flex flex-col">
                <PlaceholderVisuel nom={g.nom} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-[20px] font-black text-[#2C2C2A]">{g.nom}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <BadgeType type={g.type} />
                        <Re2020Badge />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#BA7517] uppercase tracking-wider text-right">{g.tag}</span>
                  </div>
                  <p className="text-[13px] text-[#888780] leading-[1.7] mb-4 flex-1">{g.description}</p>
                  <div className="grid grid-cols-3 gap-3 mb-5 pt-4 border-t border-[#D9D4CC]">
                    <div>
                      <div className="text-[11px] text-[#888780] uppercase tracking-wide">Surface</div>
                      <div className="text-[14px] font-bold text-[#2C2C2A] mt-0.5">{g.surfaces}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#888780] uppercase tracking-wide">Typo.</div>
                      <div className="text-[14px] font-bold text-[#2C2C2A] mt-0.5">{g.typologies}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#888780] uppercase tracking-wide">Variantes</div>
                      <div className="text-[14px] font-bold text-[#2C2C2A] mt-0.5">{g.variantes} plans</div>
                    </div>
                  </div>
                  <Link
                    href="/demande-etude/"
                    className="block bg-[#BA7517] text-white text-center text-[13px] font-bold py-3 no-underline hover:bg-[#9E6312] transition-colors"
                  >
                    Obtenir les plans
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="py-12 px-5 border-t border-[#D9D4CC]">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-[18px] font-bold text-[#2C2C2A] mb-2">Un projet sur mesure avant tout</h3>
            <p className="text-[13px] text-[#888780] max-w-[520px] leading-relaxed">
              Ces modèles sont des bases de départ. Chaque projet est adapté à votre terrain, vos contraintes PLU et vos envies. Tarifs établis sur devis personnalisé — hors terrain, hors raccordements et VRD.
            </p>
          </div>
          <Link
            href="/demande-etude/"
            className="flex-shrink-0 bg-[#BA7517] text-white text-[14px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors whitespace-nowrap"
          >
            Demande d&apos;étude gratuite
          </Link>
        </div>
      </section>
    </main>
  );
}
