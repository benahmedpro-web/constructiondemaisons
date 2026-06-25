import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison ossature bois Gex — Pays de Gex (01) | M&M CONSTRUCTION",
  description: "Construction maison ossature bois à Gex et Pays de Gex (01). Réglementation locale, frontaliers CERN, artisans vérifiés. Étude gratuite sous 48h.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/maison-ossature-bois-gex/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maison ossature bois Gex",
  description: "Accompagnement construction maison ossature bois à Gex et dans le Pays de Gex (Ain, 01).",
  provider: { "@type": "HomeAndConstructionBusiness", name: "M&M CONSTRUCTION", url: BASE },
  areaServed: { "@type": "City", name: "Gex", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Peut-on construire une maison ossature bois dans le Pays de Gex ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Les communes du Pays de Gex (Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains, Prévessin-Moëns, Thoiry) disposent chacune de leur PLU. L'ossature bois y est autorisée sous réserve de respecter les règles d'aspect local. M&M CONSTRUCTION vérifie la faisabilité PLU de chaque commune avant toute démarche.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les spécificités de la construction dans l'Ain (01) côté Pays de Gex ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le Pays de Gex est dans le département de l'Ain (01), donc sous la juridiction de la DDT01 pour l'instruction des permis de construire. La zone est classée sismique 3 comme la Haute-Savoie voisine. Les délais d'instruction varient de 3 à 5 mois. Le foncier y est parmi les plus élevés de France en dehors des grandes métropoles, du fait de la proximité du CERN et de Genève.",
      },
    },
    {
      "@type": "Question",
      name: "Quel budget pour une maison ossature bois dans le Pays de Gex ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le Pays de Gex est l'une des zones les plus chères de France hors Île-de-France pour le foncier (500 à 1 000 €/m² selon les communes). Le coût de construction d'une maison ossature bois se situe entre 2 000 et 2 800 € HT/m². À budget total, la maison sur mesure en MOE est souvent plus rentable qu'un CCMI catalogue sur cette zone.",
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
    { "@type": "ListItem", position: 3, name: "Gex — Pays de Gex", item: BASE + "/maison-ossature-bois-gex/" },
  ],
};

export default function MaisonBoisGexPage() {
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
              <span className="text-white/70">Gex — Pays de Gex</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Ain · 01170 · Pays de Gex</span>
            <h1 className="text-white text-[32px] md:text-[46px] font-black leading-tight mb-5">
              Maison ossature bois<br className="hidden md:block" /> à Gex et Pays de Gex
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.7] max-w-[620px] mb-8">
              M&M CONSTRUCTION intervient dans tout le Pays de Gex pour la construction de maisons ossature bois : Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains, Prévessin-Moëns, Thoiry. Permis de construire, artisans locaux, coordination complète.
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Pays de Gex · Ain (01)</p>
            <h2 className="text-[26px] font-black text-[#2C2C2A] mb-6">Construire dans le Pays de Gex : contexte et réglementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  titre: "Département de l'Ain (01)",
                  texte: "Le Pays de Gex dépend de l'Ain (DDT01), non de la Haute-Savoie. La réglementation urbanistique et les interlocuteurs administratifs sont différents. M&M CONSTRUCTION maîtrise les deux départements et leurs particularités.",
                },
                {
                  titre: "Zone sismique 3 et Jura",
                  texte: "Toute la zone est classée sismique 3. Les prescriptions parasismiques sont identiques à celles de Haute-Savoie. La présence du Jura implique parfois des nappes d'eau superficielles et des sols argileux nécessitant une étude géotechnique préalable.",
                },
                {
                  titre: "Marché frontalier CERN",
                  texte: "La proximité du CERN (Saint-Genis-Pouilly) et de Genève génère une demande très forte et des prix fonciers parmi les plus élevés de France. Les projets sont souvent à haute valeur — ce qui justifie une approche sur mesure plutôt que catalogue.",
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
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-4">Pays de Gex — Ain (01)</h2>
            <div className="flex flex-wrap gap-2">
              {["Gex", "Ferney-Voltaire", "Saint-Genis-Pouilly", "Divonne-les-Bains", "Prévessin-Moëns", "Thoiry", "Péron", "Ornex", "Échenevex", "Chevry"].map((c) => (
                <span key={c} className="bg-white border border-[#D9D4CC] text-[#2C2C2A] text-[13px] font-medium px-3 py-1">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-6">Maison bois dans le Pays de Gex : vos questions</h2>
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
                { href: "/maison-ossature-bois-annemasse/", label: "Maison ossature bois · Annemasse (74)" },
                { href: "/maison-ossature-bois-saint-julien-en-genevois/", label: "Maison ossature bois · Saint-Julien-en-Genevois (74)" },
                { href: "/faire-construire-haute-savoie/", label: "Faire construire en Haute-Savoie et Genevois : guide complet" },
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
            <h2 className="text-[24px] font-black text-white mb-3">Votre projet dans le Pays de Gex commence par une étude gratuite</h2>
            <p className="text-white/80 text-[15px] leading-[1.7] mb-6 max-w-[480px] mx-auto">Analyse du PLU communal, faisabilité terrain, estimation de budget. Mahmoud vous recontacte sous 48h.</p>
            <Link href="/demande-etude/" className="inline-block bg-white text-[#BA7517] text-[15px] font-black px-8 py-3 no-underline hover:bg-[#F2EDE6] transition-colors">
              Déposer ma demande →
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
