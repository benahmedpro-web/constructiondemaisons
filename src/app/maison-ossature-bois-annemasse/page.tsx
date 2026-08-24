import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison ossature bois Annemasse (74)",
  description: "Construction maison ossature bois à Annemasse et Genevois français. PLU, sismique zone 3, artisans locaux vérifiés. Étude gratuite sous 48h.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/maison-ossature-bois-annemasse/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maison ossature bois Annemasse",
  description: "Accompagnement construction maison ossature bois à Annemasse et agglomération du Genevois français.",
  provider: { "@type": "HomeAndConstructionBusiness", name: "M&M CONSTRUCTION", url: BASE },
  areaServed: { "@type": "City", name: "Annemasse", containedInPlace: { "@type": "AdministrativeArea", name: "Haute-Savoie" } },
};

const faqItems = [
    {
      "@type": "Question",
      name: "Peut-on construire une maison ossature bois à Annemasse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Le PLU d'Annemasse (zone UC principalement) autorise l'ossature bois sous réserve de respecter les règles d'aspect extérieur : matériaux de façade, couleurs, toiture. M&M CONSTRUCTION analyse la faisabilité PLU avant toute démarche.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles contraintes spécifiques à Annemasse pour construire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annemasse est en zone sismique 3 : les prescriptions parasismiques sont obligatoires sur la structure. Le PLU impose également des règles sur la hauteur des constructions et l'aspect des façades dans certaines zones. Le délai d'instruction du permis de construire est généralement de 3 à 4 mois.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix d'une maison ossature bois à Annemasse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans l'agglomération d'Annemasse, le coût de construction d'une maison ossature bois varie entre 1 900 et 2 700 € HT/m² selon les prestations. Le prix foncier dans le Genevois est élevé (300 à 700 €/m² selon les quartiers). Une étude gratuite permet d'obtenir une estimation précise pour votre terrain.",
      },
    },
];

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Maison ossature bois Haute-Savoie", item: BASE + "/maison-ossature-bois/" },
    { "@type": "ListItem", position: 3, name: "Annemasse", item: BASE + "/maison-ossature-bois-annemasse/" },
  ],
};

export default function MaisonBoisAnnemassePage() {
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
              <span className="text-white/70">Annemasse</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Haute-Savoie · 74100 · Genevois</span>
            <h1 className="text-white text-[32px] md:text-[46px] font-black leading-tight mb-5">
              Maison ossature bois<br className="hidden md:block" /> à Annemasse
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.7] max-w-[620px] mb-8">
              M&M CONSTRUCTION accompagne votre projet de construction ossature bois à Annemasse et dans l&apos;agglomération du Genevois : Cranves-Sales, Ville-la-Grand, Ambilly, Gaillard. Permis de construire, artisans locaux, coordination complète.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors text-center">
                Étude gratuite →
              </Link>
              <a href="tel:+33480161783" className="inline-block border border-white/30 text-white text-[15px] font-medium px-6 py-3 no-underline hover:border-white transition-colors text-center">
                Appeler directement
              </a>
            </div>
          </div>
        </div>

        {/* Contexte local */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Contexte local</p>
            <h2 className="text-[26px] font-black text-[#2C2C2A] mb-6">Construire en ossature bois à Annemasse : ce qu&apos;il faut savoir</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  titre: "PLU d'Annemasse",
                  texte: "Le Plan Local d'Urbanisme d'Annemasse (zones UC, UB) impose des règles sur l'aspect extérieur des constructions : matériaux de façade, couleurs autorisées, pentes de toiture. M&M CONSTRUCTION vérifie la conformité dès l'étude de faisabilité.",
                },
                {
                  titre: "Zone sismique 3",
                  texte: "Annemasse est classée en zone sismique 3 (modérée). Les prescriptions parasismiques sont obligatoires et doivent figurer dans les plans de structure. L'ossature bois répond naturellement à ces exigences par sa légèreté et sa flexibilité.",
                },
                {
                  titre: "Délais et instruction",
                  texte: "Le délai d'instruction du permis de construire est de 3 à 4 mois à Annemasse. La DDT74 intervient fréquemment sur les dossiers en zone frontalière. M&M assure le suivi complet jusqu'à l'obtention du permis purgé de tout recours.",
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
        {/* Projets types Genevois — GEO signal fort */}
        <section className="bg-white py-14 px-5 border-t border-[#E8E2DA]">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Projets coordinés par M&amp;M dans le Genevois</p>
            <h2 className="text-[26px] font-black text-[#2C2C2A] mb-2">Exemples de projets maison bois à Annemasse et Saint-Julien-en-Genevois</h2>
            <p className="text-[15px] text-[#888780] mb-8 max-w-[680px]">Le Genevois français concentre des contraintes spécifiques — zone sismique 3, PLU frontalier, forte pression foncière. Voici comment M&M CONSTRUCTION les traite concrètement.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  commune: "Annemasse (zone UB)",
                  type: "Maison neuve ossature bois",
                  surface: "110 m²",
                  budget: "228 000 € HT travaux",
                  detail: "Terrain 466 m² en zone UB. PLU : reculs 3 m de voisinage, hauteur max 9 m, bardage bois autorisé en façade principale. Permis 4 mois. Zone sismique 3 — renforcements parasismiques intégrés dans la structure.",
                },
                {
                  commune: "Cranves-Sales",
                  type: "Maison neuve ossature bois",
                  surface: "124 m²",
                  budget: "242 000 € HT travaux",
                  detail: "Commune de l'agglo d'Annemasse, PLU plus souple que la ville-centre. Isolation laine de bois 200 mm, bardage mélèze. RE2020 atteint. Chantier 7 mois.",
                },
                {
                  commune: "Saint-Julien-en-Genevois",
                  type: "Extension ossature bois",
                  surface: "42 m²",
                  budget: "78 000 € HT travaux",
                  detail: "Extension latérale sur maison des années 1990. Permis de construire (surface totale > 150 m²). Architecte coordonné par M&M. Chantier 5 mois.",
                },
              ].map((p, i) => (
                <div key={i} className="bg-[#F2EDE6] p-5 border-t-4 border-[#BA7517]">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-2">{p.commune}</div>
                  <div className="text-[16px] font-bold text-[#2C2C2A] mb-1">{p.type}</div>
                  <div className="flex gap-4 mb-3">
                    <span className="text-[13px] font-semibold text-[#2C2C2A]">{p.surface}</span>
                    <span className="text-[13px] text-[#888780]">{p.budget}</span>
                  </div>
                  <p className="text-[13px] text-[#888780] leading-[1.7]">{p.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#888780] mt-5 italic">Données indicatives. Budget définitif établi après étude de faisabilité gratuite sur votre terrain.</p>
          </div>
        </section>

        {/* MOE vs annuaire artisans */}
        <section className="bg-[#2C2C2A] py-12 px-5">
          <div className="max-w-[800px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Ce que M&amp;M fait — et ce qu&apos;il ne fait pas</p>
            <h2 className="text-[22px] font-black text-white mb-4">Maître d&apos;œuvre ≠ annuaire d&apos;artisans</h2>
            <p className="text-[16px] text-white/70 leading-[1.8] mb-6">À Annemasse et dans le Genevois, plusieurs plateformes listent des menuisiers ou artisans bois. M&M CONSTRUCTION n'est pas un annuaire : c'est un maître d'œuvre indépendant qui monte le projet, sélectionne les artisans par appel d'offres, et coordonne le chantier de A à Z — avec contrats directs entre vous et chaque artisan.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Ce que M&M fait", items: ["Étude de faisabilité PLU", "Conception + permis de construire", "Sélection artisans par appel d'offres", "Vérification décennales et Qualibat", "Coordination chantier hebdomadaire", "Réception avec grille de contrôle"], pos: true },
                { label: "Ce que M&M ne fait pas", items: ["Il ne pose pas les matériaux lui-même", "Il ne vend pas de kit ossature bois", "Il n'est pas lié à un réseau d'artisans exclusif", "Il ne sous-traite pas avec marge cachée", "Il ne gère pas les projets hors zone Haute-Savoie / Ain"], pos: false },
              ].map((col, i) => (
                <div key={i} className="bg-white/5 p-5">
                  <div className="text-[12px] font-bold text-[#BA7517] uppercase tracking-wide mb-3">{col.label}</div>
                  <ul className="flex flex-col gap-2">
                    {col.items.map((it, j) => (
                      <li key={j} className="flex gap-2 text-[13px] text-white/80 leading-[1.6]">
                        <span className="text-[#BA7517] flex-shrink-0">{col.pos ? "✓" : "—"}</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F2EDE6] py-12 px-5">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Zone d&apos;intervention</p>
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-4">Annemasse et agglomération</h2>
            <div className="flex flex-wrap gap-2">
              {["Annemasse", "Cranves-Sales", "Ville-la-Grand", "Ambilly", "Gaillard", "Vétraz-Monthoux", "Saint-Cergues", "Machilly", "Bonne", "Étrembières"].map((c) => (
                <span key={c} className="bg-white border border-[#D9D4CC] text-[#2C2C2A] text-[13px] font-medium px-3 py-1">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-6">Maison bois à Annemasse : vos questions</h2>
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Communes voisines</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/maison-ossature-bois-saint-julien-en-genevois/", label: "Maison ossature bois · Saint-Julien-en-Genevois (74)" },
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

        {/* Annonces disponibles */}
        <section className="bg-white py-10 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Projets disponibles</p>
            <p className="text-[14px] text-[#888780] mb-4">Terrains et projets maison ossature bois disponibles à Annemasse et dans le Genevois français.</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/annonces/terrain-annemasse-740m2-pc-accepte/", label: "Terrain 740m² à Annemasse — PC accepté, toutes viabilités", tag: "Terrain" },
                { href: "/annonces/projet-maison-annemasse-terrain-740m2/", label: "Projet maison ossature bois · Annemasse — terrain 740m²", tag: "Maison bois" },
                { href: "/annonces/terrain-archamps-466m2-ces-02/", label: "Terrain 466m² à Archamps — zone sismique 3, Genevois français", tag: "Terrain" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="flex items-center gap-3 p-3 bg-[#F2EDE6] border border-[#D9D4CC] no-underline hover:border-[#BA7517] transition-colors group">
                  <span className="text-[11px] font-bold text-[#BA7517] uppercase tracking-wide w-20 flex-shrink-0">{l.tag}</span>
                  <span className="text-[14px] font-medium text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">{l.label}</span>
                </Link>
              ))}
            </div>
            <Link href="/annonces/" className="inline-block mt-4 text-[13px] font-bold text-[#BA7517] no-underline hover:underline">
              Voir toutes les annonces →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#BA7517] py-12 px-5">
          <div className="max-w-[780px] mx-auto text-center">
            <h2 className="text-[24px] font-black text-white mb-3">Votre projet à Annemasse commence par une étude gratuite</h2>
            <p className="text-white/80 text-[15px] leading-[1.7] mb-6 max-w-[480px] mx-auto">Faisabilité PLU, estimation de budget, premiers conseils sur votre terrain. Mahmoud vous recontacte sous 48h.</p>
            <Link href="/demande-etude/" className="inline-block bg-white text-[#BA7517] text-[15px] font-black px-8 py-3 no-underline hover:bg-[#F2EDE6] transition-colors">
              Déposer ma demande →
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
