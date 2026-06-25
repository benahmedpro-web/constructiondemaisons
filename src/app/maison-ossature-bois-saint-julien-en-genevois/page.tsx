import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison ossature bois Saint-Julien-en-Genevois (74) | M&M CONSTRUCTION",
  description: "Construction maison ossature bois à Saint-Julien-en-Genevois. Terrains en pente, PLU frontalier, sismique zone 3. Accompagnement complet. Étude gratuite.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/maison-ossature-bois-saint-julien-en-genevois/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maison ossature bois Saint-Julien-en-Genevois",
  description: "Accompagnement construction maison ossature bois à Saint-Julien-en-Genevois et communes du Sud Genevois.",
  provider: { "@type": "HomeAndConstructionBusiness", name: "M&M CONSTRUCTION", url: BASE },
  areaServed: { "@type": "City", name: "Saint-Julien-en-Genevois", containedInPlace: { "@type": "AdministrativeArea", name: "Haute-Savoie" } },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelles sont les contraintes de construction à Saint-Julien-en-Genevois ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saint-Julien-en-Genevois est en zone sismique 3 et dispose d'un PLU strict qui encadre l'aspect des constructions neuves. Les terrains sont souvent en pente (versant du Salève et du Mont-de-Sion), ce qui implique des fondations adaptées et des accès chantier complexes. La DDT74 instruit les permis de construire avec des délais de 3 à 5 mois selon les zones.",
      },
    },
    {
      "@type": "Question",
      name: "L'ossature bois est-elle adaptée aux terrains en pente à Saint-Julien ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, c'est même un avantage. La légèreté de la structure bois réduit les charges sur les fondations et simplifie la construction sur terrain en dévers. Des solutions spécifiques comme les vides sanitaires ou les sous-sols partiels sont plus faciles à mettre en œuvre avec l'ossature bois qu'avec des systèmes lourds.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix d'une maison ossature bois à Saint-Julien-en-Genevois ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans le secteur de Saint-Julien-en-Genevois, zone très prisée des frontaliers suisses, le foncier est élevé (400 à 800 €/m² selon les secteurs). Le coût de construction d'une maison ossature bois se situe entre 1 900 et 2 700 € HT/m², auquel s'ajoute la viabilisation et les éventuels surcoûts liés au terrain en pente.",
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
    { "@type": "ListItem", position: 3, name: "Saint-Julien-en-Genevois", item: BASE + "/maison-ossature-bois-saint-julien-en-genevois/" },
  ],
};

export default function MaisonBoisSaintJulienPage() {
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
              <span className="text-white/70">Saint-Julien-en-Genevois</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Haute-Savoie · 74160 · Sud Genevois</span>
            <h1 className="text-white text-[32px] md:text-[46px] font-black leading-tight mb-5">
              Maison ossature bois<br className="hidden md:block" /> à Saint-Julien-en-Genevois
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.7] max-w-[620px] mb-8">
              Projet de construction ossature bois à Saint-Julien-en-Genevois, Archamps, Collonges-sous-Salève, Neydens, Valleiry ou Viry ? M&M CONSTRUCTION prend en charge votre permis de construire, la sélection des artisans et la coordination complète du chantier.
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Spécificités du secteur</p>
            <h2 className="text-[26px] font-black text-[#2C2C2A] mb-6">Construire à Saint-Julien : terrain, PLU, contraintes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  titre: "Terrains en pente",
                  texte: "Le secteur de Saint-Julien est marqué par un relief accentué (piedmont du Salève, plateau du Mont-de-Sion). Les terrains en pente nécessitent des fondations spéciales. L'ossature bois est idéale : structure légère, mise en œuvre rapide même sur dévers.",
                },
                {
                  titre: "PLU et secteur frontalier",
                  texte: "Le PLU de Saint-Julien-en-Genevois impose des règles d'aspect proches de celles d'Annemasse. La zone est très surveillée par la DDT74 compte tenu de la pression immobilière liée à la proximité de Genève. Délais d'instruction : 3 à 5 mois.",
                },
                {
                  titre: "Frontaliers suisses",
                  texte: "La très forte demande des frontaliers suisses fait de Saint-Julien l'une des zones les plus tendues du 74. Les budgets construction y sont en conséquence plus élevés, mais la valeur à la revente est parmi les plus solides de Haute-Savoie.",
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
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-4">Saint-Julien et Sud Genevois</h2>
            <div className="flex flex-wrap gap-2">
              {["Saint-Julien-en-Genevois", "Archamps", "Collonges-sous-Salève", "Neydens", "Valleiry", "Beaumont", "Viry", "Savigny", "Présilly", "Vulbens"].map((c) => (
                <span key={c} className="bg-white border border-[#D9D4CC] text-[#2C2C2A] text-[13px] font-medium px-3 py-1">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-6">Maison bois à Saint-Julien : vos questions</h2>
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Communes voisines</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/maison-ossature-bois-annemasse/", label: "Maison ossature bois · Annemasse (74)" },
                { href: "/maison-ossature-bois-gex/", label: "Maison ossature bois · Gex — Pays de Gex (01)" },
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
            <h2 className="text-[24px] font-black text-white mb-3">Votre projet à Saint-Julien commence par une étude gratuite</h2>
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
