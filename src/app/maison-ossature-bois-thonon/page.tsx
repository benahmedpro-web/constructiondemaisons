import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison ossature bois Thonon-les-Bains — Chablais (74) | M&M CONSTRUCTION",
  description: "Construction maison ossature bois à Thonon-les-Bains et dans le Chablais. Evian, Douvaine, Publier, Sciez. PLU, sismique zone 3, artisans vérifiés. Étude gratuite.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/maison-ossature-bois-thonon/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maison ossature bois Thonon-les-Bains",
  description: "Accompagnement construction maison ossature bois à Thonon-les-Bains et dans le Chablais (Haute-Savoie, 74).",
  provider: { "@type": "HomeAndConstructionBusiness", name: "M&M CONSTRUCTION", url: BASE },
  areaServed: { "@type": "City", name: "Thonon-les-Bains", containedInPlace: { "@type": "AdministrativeArea", name: "Haute-Savoie" } },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "L'ossature bois est-elle adaptée au Chablais et aux bords du Léman ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, particulièrement. Le Chablais cumule un climat humide (proximité du lac Léman), des terrains en pente sur les coteaux, et des exigences PLU fortes autour du lac. L'ossature bois répond à ces trois contraintes : matériau naturellement résistant à l'humidité quand il est bien conçu, structure légère adaptée aux pentes, et rendu architectural (bardage bois, grandes baies) bien perçu par les services instructeurs.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les spécificités réglementaires à Thonon-les-Bains ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thonon-les-Bains est en zone sismique 3 avec des prescriptions parasismiques obligatoires. Le PLU de la CCPEVA (Communauté de communes Pays d'Evian – Vallée d'Abondance) encadre fortement l'aspect des constructions, notamment en zone de covisibilité avec le lac Léman. Les délais d'instruction DDT74 sont de 3 à 5 mois. M&M CONSTRUCTION maîtrise ces contraintes locales.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix d'une maison ossature bois à Thonon-les-Bains ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans le Chablais, le coût de construction varie entre 1 800 et 2 600 € HT/m² selon les prestations. Le foncier y est moins tendu qu'à Annecy ou dans le Genevois (200 à 500 €/m² selon les secteurs), ce qui en fait une zone intéressante pour optimiser le budget global. Une étude de faisabilité gratuite permet d'obtenir une estimation précise pour votre terrain.",
      },
    },
    {
      "@type": "Question",
      name: "M&M CONSTRUCTION intervient-il dans tout le Chablais ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. M&M CONSTRUCTION intervient sur tout le Chablais : Thonon-les-Bains, Evian-les-Bains, Douvaine, Publier, Sciez, Lugrin, Saint-Gingolph, Abondance, Morzine, ainsi que les vallées du Brevon et de la Dranse. Nous couvrons l'ensemble de la Haute-Savoie et le Pays de Gex.",
      },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Maison ossature bois Haute-Savoie", item: BASE + "/maison-ossature-bois/" },
    { "@type": "ListItem", position: 3, name: "Thonon-les-Bains — Chablais", item: BASE + "/maison-ossature-bois-thonon/" },
  ],
};

export default function MaisonBoisThononPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main>

        {/* Hero */}
        <div className="bg-[#2C2C2A] py-16 px-5">
          <div className="max-w-[900px] mx-auto">
            <div className="flex gap-2 text-[13px] text-white/40 mb-4 flex-wrap">
              <Link href="/" className="text-white/40 no-underline hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/maison-ossature-bois/" className="text-white/40 no-underline hover:text-white transition-colors">Maison ossature bois</Link>
              <span>/</span>
              <span className="text-white/70">Thonon — Chablais</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Haute-Savoie · 74200 · Chablais · Lac Léman</span>
            <h1 className="text-white text-[32px] md:text-[46px] font-black leading-tight mb-5">
              Maison ossature bois<br className="hidden md:block" /> à Thonon et dans le Chablais
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.7] max-w-[620px] mb-8">
              M&M CONSTRUCTION accompagne votre projet de construction ossature bois dans le Chablais : Thonon-les-Bains, Evian-les-Bains, Douvaine, Publier, Sciez. Permis de construire, artisans locaux qualifiés, coordination complète.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors text-center">
                Étude gratuite →
              </Link>
              <a href="tel:+33625590926" className="inline-block border border-white/30 text-white text-[15px] font-medium px-6 py-3 no-underline hover:border-white transition-colors text-center">
                Appeler directement
              </a>
            </div>
          </div>
        </div>

        {/* Contexte local */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Chablais · Lac Léman</p>
            <h2 className="text-[26px] font-black text-[#2C2C2A] mb-6">Construire en ossature bois dans le Chablais : contexte</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  titre: "Coteaux et bords du Léman",
                  texte: "Le Chablais est marqué par des terrains en pente sur les coteaux dominant le lac Léman. L'ossature bois est idéale : structure légère sur dévers, chantier sec sans béton coulé en quantité. Les vues lac sont souvent au programme — grandes baies vitrées, bardage bois naturel, architecture contemporaine bien intégrée.",
                },
                {
                  titre: "PLU et covisibilité lac",
                  texte: "Les communes du bord du Léman (Thonon, Evian, Sciez, Publier) ont des PLU qui protègent les vues sur le lac et encadrent strictement les hauteurs et les aspects de façade. M&M CONSTRUCTION vérifie la faisabilité sur votre parcelle avant tout engagement.",
                },
                {
                  titre: "Marché moins tendu qu'Annecy",
                  texte: "Le bassin chablaisien est moins sous pression que le Genevois ou l'agglomération annécienne. Les artisans bois locaux y sont plus disponibles, et le foncier (200–500 €/m²) permet d'optimiser le budget global tout en construisant une maison de qualité.",
                },
              ].map((item) => (
                <div key={item.titre} className="border-l-4 border-[#BA7517] pl-4">
                  <div className="text-[15px] font-bold text-[#2C2C2A] mb-2">{item.titre}</div>
                  <div className="text-[14px] text-[#888780] leading-[1.7]">{item.texte}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Communes couvertes */}
        <section className="bg-[#F2EDE6] py-12 px-5">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Zone d&apos;intervention</p>
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-4">Thonon et Chablais</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Thonon-les-Bains", "Evian-les-Bains", "Douvaine", "Publier", "Sciez",
                "Lugrin", "Maxilly-sur-Léman", "Saint-Gingolph", "Abondance", "Morzine",
                "Les Gets", "Cluses", "Taninges", "Samoëns", "Bonneville",
              ].map((c) => (
                <span key={c} className="bg-white border border-[#D9D4CC] text-[#2C2C2A] text-[13px] font-medium px-3 py-1">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-6">Maison bois dans le Chablais : vos questions</h2>
            <div className="flex flex-col gap-0 border border-[#D9D4CC]">
              {jsonLdFaq.mainEntity.map((item, i) => (
                <details key={i} className="border-b border-[#D9D4CC] last:border-0 group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none text-[15px] font-medium text-[#2C2C2A] hover:text-[#BA7517] transition-colors">
                    {item.name}
                    <span className="text-[#BA7517] ml-4 flex-shrink-0 text-[18px] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-[14px] text-[#888780] leading-[1.8]">{item.acceptedAnswer.text}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Pages voisines */}
        <section className="bg-[#F2EDE6] py-10 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Zones voisines</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/maison-ossature-bois-annecy/", label: "Maison ossature bois · Annecy (74)" },
                { href: "/maison-ossature-bois-annemasse/", label: "Maison ossature bois · Annemasse (74)" },
                { href: "/guides/construction-chalet-ossature-bois-haute-savoie/", label: "Construction chalet ossature bois en Haute-Savoie" },
                { href: "/faire-construire-haute-savoie/", label: "Faire construire en Haute-Savoie : guide complet" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-white border border-[#D9D4CC] no-underline hover:border-[#BA7517] transition-colors group">
                  <span className="text-[#BA7517]">→</span>
                  <span className="text-[14px] font-medium text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">{l.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#BA7517] py-12 px-5">
          <div className="max-w-[780px] mx-auto text-center">
            <h2 className="text-[24px] font-black text-white mb-3">Votre projet dans le Chablais commence par une étude gratuite</h2>
            <p className="text-white/80 text-[15px] leading-[1.7] mb-6 max-w-[480px] mx-auto">Faisabilité PLU, analyse du terrain, estimation de budget. Mahmoud vous recontacte sous 48h.</p>
            <Link href="/demande-etude/" className="inline-block bg-white text-[#BA7517] text-[15px] font-black px-8 py-3 no-underline hover:bg-[#F2EDE6] transition-colors">
              Déposer ma demande →
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
