import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison ossature bois Annecy (74) | M&M CONSTRUCTION",
  description: "Maison ossature bois à Annecy et agglomération (Cran-Gevrier, Seynod, Meythet, Pringy). PLU local, sismique zone 3, artisans vérifiés. Étude gratuite.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/maison-ossature-bois-annecy/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maison ossature bois Annecy",
  description: "Accompagnement construction maison ossature bois à Annecy et agglomération annécienne (Haute-Savoie, 74).",
  provider: { "@type": "HomeAndConstructionBusiness", name: "M&M CONSTRUCTION", url: BASE },
  areaServed: { "@type": "City", name: "Annecy", containedInPlace: { "@type": "AdministrativeArea", name: "Haute-Savoie" } },
};

const faqItems = [
    {
      "@type": "Question",
      name: "Peut-on construire une maison ossature bois à Annecy ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Le PLU d'Annecy (issu de la fusion des communes en 2017) autorise l'ossature bois sous réserve de respecter les règles d'aspect extérieur propres à chaque secteur : matériaux de façade, teintes, pentes de toiture. M&M CONSTRUCTION analyse la faisabilité PLU de votre parcelle avant toute démarche.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les contraintes spécifiques à la construction à Annecy ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annecy est en zone sismique 3 (prescriptions parasismiques obligatoires) et soumise à la loi Montagne sur certains secteurs. Le PLU intercommunal est particulièrement exigeant sur l'intégration paysagère en raison de la proximité du lac et des Aravis. La DDT74 instruit les permis avec des délais de 3 à 5 mois. L'ossature bois, matériau léger et biosourcé, est bien perçue par les services instructeurs.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix d'une maison ossature bois à Annecy ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans l'agglomération d'Annecy, le coût de construction d'une maison ossature bois varie entre 1 900 et 2 700 € HT/m² selon les prestations. Le foncier est élevé (400 à 900 €/m² selon les secteurs et la proximité du lac). Le marché artisanal annécien est tendu : une mise en concurrence bien conduite en maîtrise d'œuvre permet souvent d'économiser 10 à 15 % par rapport à un CCMI catalogue.",
      },
    },
    {
      "@type": "Question",
      name: "M&M CONSTRUCTION intervient-il sur tout le bassin annécien ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. M&M CONSTRUCTION intervient sur l'ensemble de l'agglomération d'Annecy : Annecy-le-Vieux, Cran-Gevrier, Seynod, Meythet, Pringy, Argonay, Poisy, Saint-Jorioz, Duingt, Talloires. Nous intervenons également sur les vallées environnantes (Aravis, Albanais) et restons à votre disposition pour tout projet en Haute-Savoie.",
      },
    },
];

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Maison ossature bois Haute-Savoie", item: BASE + "/maison-ossature-bois/" },
    { "@type": "ListItem", position: 3, name: "Annecy", item: BASE + "/maison-ossature-bois-annecy/" },
  ],
};

export default function MaisonBoisAnnecyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              <span className="text-white/70">Annecy</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Haute-Savoie · 74000 · Lac d&apos;Annecy</span>
            <h1 className="text-white text-[32px] md:text-[46px] font-black leading-tight mb-5">
              Maison ossature bois<br className="hidden md:block" /> à Annecy
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.7] max-w-[620px] mb-8">
              M&M CONSTRUCTION accompagne votre projet de construction ossature bois à Annecy et dans toute l&apos;agglomération annécienne : Annecy-le-Vieux, Cran-Gevrier, Seynod, Meythet, Pringy. Permis de construire, artisans locaux, coordination complète de A à Z.
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Spécificités du territoire</p>
            <h2 className="text-[26px] font-black text-[#2C2C2A] mb-6">Construire une maison bois à Annecy : ce qu&apos;il faut savoir</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  titre: "PLU intercommunal exigeant",
                  texte: "Depuis la fusion des communes en 2017, Annecy dispose d'un PLU unique mais complexe, avec des règles d'aspect très strictes selon les secteurs (bord du lac, zones de montagne, tissus urbains denses). L'ossature bois est autorisée, mais le choix du bardage et des teintes doit être validé dès l'avant-projet.",
                },
                {
                  titre: "Loi Montagne et sismique",
                  texte: "Certains secteurs d'Annecy sont soumis à la loi Montagne, qui réglemente l'urbanisation en continuité des zones bâties. La zone sismique 3 impose des prescriptions parasismiques sur la structure. L'ossature bois y répond naturellement par sa légèreté et sa flexibilité structurelle.",
                },
                {
                  titre: "Marché artisanal tendu",
                  texte: "Les artisans qualifiés bois dans le bassin annécien sont très sollicités. La sélection des entreprises en maîtrise d'œuvre — avec mise en concurrence et vérification des qualifications — est déterminante pour maîtriser les délais et le budget. C'est le cœur de la mission de M&M CONSTRUCTION.",
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

        {/* Avantages bois à Annecy */}
        <section className="bg-[#2C2C2A] py-12 px-5">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Pourquoi l&apos;ossature bois à Annecy</p>
            <h2 className="text-[24px] font-black text-white mb-6">Un matériau adapté au contexte alpin et lacustre</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { titre: "Légèreté sur pente", detail: "Structure 5× plus légère que le béton — idéale sur les terrains en dévers fréquents autour du lac." },
                { titre: "Performance thermique", detail: "Isolation intégrée à la structure, adaptée aux hivers alpins et aux étés de plus en plus chauds." },
                { titre: "Intégration paysagère", detail: "Bardage bois naturel bien perçu par la DDT74 en zone lacustre et de montagne." },
                { titre: "Chantier rapide", detail: "Structure montée en quelques semaines, moins de nuisances dans les quartiers résidentiels denses." },
              ].map((item) => (
                <div key={item.titre} className="bg-white/5 border border-white/10 p-4">
                  <div className="text-[#BA7517] font-bold text-[14px] mb-1">{item.titre}</div>
                  <div className="text-white/60 text-[13px] leading-[1.6]">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Communes couvertes */}
        <section className="bg-[#F2EDE6] py-12 px-5">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Zone d&apos;intervention</p>
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-4">Annecy et bassin annécien</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Annecy", "Annecy-le-Vieux", "Cran-Gevrier", "Seynod", "Meythet",
                "Pringy", "Argonay", "Poisy", "Saint-Jorioz", "Duingt",
                "Talloires", "Veyrier-du-Lac", "Menthon-Saint-Bernard", "Sevrier", "Sillingy",
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
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-6">Maison ossature bois à Annecy : vos questions</h2>
            <div className="flex flex-col gap-0 border border-[#D9D4CC]">
              {faqItems.map((item, i) => (
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
                { href: "/maison-ossature-bois-gex/", label: "Maison ossature bois · Gex — Pays de Gex (01)" },
                { href: "/faire-construire-haute-savoie/", label: "Faire construire en Haute-Savoie : guide complet" },
                { href: "/guides/prix-maison-ossature-bois-haute-savoie/", label: "Prix maison ossature bois en Haute-Savoie 2025" },
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
            <h2 className="text-[24px] font-black text-white mb-3">Votre projet à Annecy commence par une étude gratuite</h2>
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
