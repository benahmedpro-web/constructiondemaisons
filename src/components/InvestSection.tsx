import Link from "next/link";

const serviceBlocks = [
  {
    category: "Maîtrise d'œuvre complète",
    title: "Un chef de projet, pas un vendeur",
    body: "M&M CONSTRUCTION n'est pas un constructeur qui vous vend une maison catalogue. C'est un maître d'œuvre qui coordonne votre projet bois de A à Z, avec les artisans que vous méritez.",
    cta: "Notre méthode MOE",
    ctaHref: "/notre-methode/",
    bg: "#2C2C2A",
    textColor: "white",
  },
  {
    category: "Zone Genevois français",
    title: "Terrain, permis, chantier : on connaît le territoire",
    body: "Haute-Savoie, Ain, Genevois français : nous travaillons uniquement sur notre zone pour maîtriser les délais d'instruction, les PLU locaux et le réseau d'artisans qualifiés bois.",
    cta: "Nos annonces",
    ctaHref: "/annonces/",
    bg: "#F2EDE6",
    textColor: "#2C2C2A",
  },
];

const whyCards = [
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Indépendance & transparence",
    body: "Nous ne revendons pas de maisons. Nos honoraires sont forfaitaires ou en % du coût travaux — pas de marge cachée sur les matériaux ou les artisans.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: "Spécialisation ossature bois",
    body: "Maison bois neuve, extension bois, rénovation thermique par l'extérieur : nous maîtrisons les spécificités structurelles et réglementaires du bois construction.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Réseau artisans vérifiés",
    body: "Chaque artisan est sélectionné sur sa décennale, sa qualification bois et ses références locales. Pas de sous-traitance opaque, pas d'inconnus sur votre chantier.",
  },
];

export function InvestSection() {
  return (
    <section className="bg-[#F2EDE6] py-14 px-5">
      <div className="max-w-[1100px] mx-auto">
        <h3 className="text-[30px] md:text-[35px] font-bold text-[#2C2C2A] text-center mb-4">
          Pourquoi choisir un maître d&apos;œuvre plutôt qu&apos;un constructeur ?
        </h3>
        <p className="text-[18px] text-[#888780] text-center leading-[1.7] max-w-[800px] mx-auto mb-10">
          Le CCMI lie votre projet à un catalogue et à des marges intégrées.
          La maîtrise d&apos;œuvre vous donne le contrôle du budget, du planning et des artisans — avec un professionnel qui travaille pour vous, pas pour lui-même.
        </p>

        {/* 2 service blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {serviceBlocks.map((block, i) => (
            <div
              key={i}
              className="p-8 flex flex-col justify-between"
              style={{ backgroundColor: block.bg, color: block.textColor }}
            >
              <div>
                <span className="text-[11px] uppercase tracking-widest opacity-60 mb-3 block" style={{ color: block.textColor }}>
                  {block.category}
                </span>
                <h4 className="text-[22px] font-bold mb-4" style={{ color: block.textColor }}>{block.title}</h4>
                <p className="text-[15px] leading-[1.7] opacity-80 mb-6" style={{ color: block.textColor }}>{block.body}</p>
              </div>
              <Link
                href={block.ctaHref}
                className="inline-block font-bold text-[15px] underline hover:no-underline no-underline"
                style={{ color: "#BA7517" }}
              >
                {block.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* 3 why cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {whyCards.map((card, i) => (
            <div key={i} className="bg-white p-6 flex gap-4">
              <div className="flex-shrink-0">{card.icon}</div>
              <div>
                <h5 className="text-[17px] font-bold text-[#2C2C2A] mb-2">{card.title}</h5>
                <p className="text-[14px] text-[#888780] leading-[1.6]">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
