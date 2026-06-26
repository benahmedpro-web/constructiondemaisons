import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prix construction maison 2026 : budget complet par type de projet | M&M CONSTRUCTION",
  description: "Combien coûte une construction de maison en 2026 dans le Genevois français ? Tableau par type de projet, postes de dépense, spécificités Haute-Savoie. Guide complet par M&M CONSTRUCTION.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/prix-construction-maison/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prix construction maison 2026 : budget complet par type de projet dans le Genevois français",
  description: "Combien coûte une construction de maison en 2026 dans le Genevois français ? Tableau par type de projet, postes de dépense, spécificités Haute-Savoie.",
  url: BASE + "/guides/prix-construction-maison/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
  inLanguage: "fr-FR",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel est le prix moyen d'une construction de maison en 2026 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En France, le coût de construction d'une maison neuve varie entre 1 400 et 2 500 € HT/m² selon la région, les matériaux et les prestations. Dans le Genevois français (Haute-Savoie, Ain frontalier), les prix sont structurellement plus élevés : de 1 800 à 2 800 € HT/m² pour une maison ossature bois, hors foncier et hors honoraires.",
      },
    },
    {
      "@type": "Question",
      name: "Quel budget prévoir pour une maison neuve de 120m² en Haute-Savoie en 2026 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour une maison neuve de 120 m² en ossature bois dans le Genevois français, comptez 250 000 à 340 000 € HT pour les seuls travaux de construction. En ajoutant le foncier (150 000 à 400 000 € selon la commune), les honoraires de maîtrise d'œuvre (8–12 %), les études et les raccordements, le budget total oscille généralement entre 500 000 et 800 000 €.",
      },
    },
    {
      "@type": "Question",
      name: "Une extension coûte-t-elle moins cher qu'une maison neuve ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Au m², une extension revient souvent plus cher qu'une maison neuve (2 000 à 3 200 € HT/m²) car les contraintes d'interface avec l'existant sont complexes : ouvertures en pignon, raccordements aux réseaux existants, adaptation de la toiture. En revanche, le budget global est inférieur car les surfaces sont plus petites et le foncier est déjà acquis.",
      },
    },
    {
      "@type": "Question",
      name: "Comment réduire le coût de construction d'une maison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trois leviers principaux : (1) la maîtrise d'œuvre plutôt que le CCMI, qui permet une mise en concurrence des artisans et une transparence sur chaque poste (économies de 10 à 20 % sur les travaux) ; (2) le choix de l'ossature bois, qui réduit les délais de chantier et les coûts de main-d'œuvre par rapport au maçonné ; (3) la définition précise du programme en amont, car les modifications en cours de chantier sont le principal facteur de dépassement.",
      },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: BASE + "/guides/" },
    { "@type": "ListItem", position: 3, name: "Prix construction maison 2026", item: BASE + "/guides/prix-construction-maison/" },
  ],
};

const typesProjets = [
  {
    type: "Maison neuve ossature bois",
    surface: "100 m²",
    fourchette: "190 000 – 260 000 €",
    note: "Hors foncier, hors MOE",
  },
  {
    type: "Maison neuve ossature bois",
    surface: "120 m²",
    fourchette: "250 000 – 340 000 €",
    note: "Hors foncier, hors MOE",
  },
  {
    type: "Maison neuve ossature bois",
    surface: "150 m²",
    fourchette: "310 000 – 420 000 €",
    note: "Hors foncier, hors MOE",
  },
  {
    type: "Extension ossature bois",
    surface: "30 m²",
    fourchette: "65 000 – 100 000 €",
    note: "Interface existant incluse",
  },
  {
    type: "Extension ossature bois",
    surface: "50 m²",
    fourchette: "105 000 – 160 000 €",
    note: "Interface existant incluse",
  },
  {
    type: "Rénovation & isolation bois",
    surface: "100 m²",
    fourchette: "60 000 – 120 000 €",
    note: "Bardage + isolation par l'extérieur",
  },
];

const postesCommuns = [
  { poste: "Gros œuvre / structure", part: "35–40 %", detail: "Fondations, ossature, charpente, couverture" },
  { poste: "Second œuvre technique", part: "20–25 %", detail: "Plomberie, électricité, chauffage, VMC" },
  { poste: "Menuiseries extérieures", part: "10–12 %", detail: "Fenêtres, portes, baies vitrées" },
  { poste: "Isolation & étanchéité", part: "8–10 %", detail: "Isolation structure, pare-pluie, membranes" },
  { poste: "Finitions intérieures", part: "15–18 %", detail: "Revêtements, peinture, cuisine, sanitaires" },
  { poste: "VRD & raccordements", part: "5–8 %", detail: "Eau, EU, électricité, voirie — variable selon terrain" },
];

const surcoûtsLocaux = [
  { facteur: "Terrain en pente (micropieux / talus)", impact: "+ 15 000 à 40 000 €" },
  { facteur: "Zone sismique 3 (prescriptions parasismiques)", impact: "+ 5 000 à 12 000 €" },
  { facteur: "Triple vitrage obligatoire (zone alpine)", impact: "+ 4 000 à 8 000 €" },
  { facteur: "Main-d'œuvre zone frontalière (pression marché)", impact: "+ 10 à 18 % vs moyenne nationale" },
  { facteur: "Contraintes PLU communes frontalières", impact: "Délais + études spécifiques" },
  { facteur: "Accès chantier difficile (route étroite, altitude)", impact: "+ 3 000 à 10 000 €" },
];

export default function GuidePrixConstructionMaisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main>

        {/* Hero */}
        <div className="bg-[#2C2C2A] py-16 px-5">
          <div className="max-w-[780px] mx-auto">
            <div className="flex gap-2 text-[13px] text-white/40 mb-4">
              <Link href="/" className="text-white/40 no-underline hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/guides/" className="text-white/40 no-underline hover:text-white transition-colors">Guides</Link>
              <span>/</span>
              <span className="text-white/70">Prix construction maison 2026</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Guide prix · 2026</span>
            <h1 className="text-white text-[28px] md:text-[40px] font-black leading-tight mb-4">
              Combien coûte une construction de maison en 2026 dans le Genevois français ?
            </h1>
            <p className="text-white/60 text-[16px] leading-[1.7] mb-2">
              Par Mahmoud Ben Ahmed · M&M CONSTRUCTION · Responsable de projets en Haute-Savoie et Ain frontalier
            </p>
            <p className="text-white/40 text-[13px]">Mis à jour le 26 juin 2026</p>
          </div>
        </div>

        {/* Article */}
        <article className="bg-white py-14 px-5">
          <div className="max-w-[780px] mx-auto">

            <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
              Le prix de construction d&apos;une maison dépend du type de projet, de la surface, des matériaux et de la localisation. Dans le Genevois français, les prix sont structurellement supérieurs à la moyenne nationale. Ce guide donne des fourchettes réalistes par type de projet, détaille les postes de coût et explique les surcoûts spécifiques à notre zone.
            </p>

            {/* Encadré alerte zone */}
            <div className="bg-[#F2EDE6] border-l-4 border-[#BA7517] px-5 py-4 mb-10">
              <p className="text-[14px] font-bold text-[#2C2C2A] mb-1">Note sur la zone géographique</p>
              <p className="text-[14px] text-[#888780] leading-[1.7]">
                Ce guide concerne le Genevois français : Haute-Savoie (74), Pays de Gex (01), Annemasse, Saint-Julien-en-Genevois, Thonon, Annecy et leurs environs. Les prix y sont 15 à 30 % supérieurs à la moyenne nationale pour des raisons détaillées ci-dessous.
              </p>
            </div>

            {/* Tableau comparatif */}
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-2 mb-4">Budget par type de projet en 2026</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-5">
              Les fourchettes ci-dessous s&apos;entendent hors foncier, hors honoraires de maîtrise d&apos;œuvre (8–12 %) et hors études géotechniques. Elles correspondent à des prestations intermédiaires en ossature bois.
            </p>
            <div className="border border-[#D9D4CC] overflow-x-auto mb-3">
              <div className="grid grid-cols-4 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3 min-w-[520px]">
                <div className="col-span-2">Type de projet</div>
                <div className="text-center">Surface</div>
                <div className="text-right">Budget travaux HT</div>
              </div>
              {typesProjets.map((p, i) => (
                <div key={i} className={`grid grid-cols-4 p-3 border-b border-[#D9D4CC] last:border-0 min-w-[520px] ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="col-span-2">
                    <div className="text-[14px] text-[#2C2C2A] font-medium">{p.type}</div>
                    <div className="text-[11px] text-[#888780] mt-0.5">{p.note}</div>
                  </div>
                  <div className="text-center text-[14px] text-[#888780] self-center">{p.surface}</div>
                  <div className="text-right text-[14px] text-[#BA7517] font-bold self-center">{p.fourchette}</div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#888780] italic mb-10">Estimations HT en zone Genevois français. Mis à jour juin 2026 — peuvent varier selon les conditions d&apos;accès, la nature du sol et le niveau de finition.</p>

            {/* Budget global exemple */}
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-4 mb-4">Budget global : exemple pour une maison neuve 120 m²</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-5">
              Le coût total d&apos;une maison neuve dépasse largement le seul coût de construction. Voici un exemple chiffré pour une maison ossature bois de 120 m² à Annemasse, terrain plat, prestations intermédiaires.
            </p>
            <div className="bg-[#F2EDE6] border border-[#D9D4CC] p-5 mb-10">
              <p className="text-[13px] font-bold text-[#BA7517] uppercase tracking-widest mb-4">Exemple — Maison 120 m², Annemasse, terrain plat</p>
              <div className="flex flex-col gap-2.5">
                {([
                  ["Travaux de construction HT", "250 000 – 340 000 €", false],
                  ["Foncier (terrain 500 m² à 300–500 €/m²)", "150 000 – 250 000 €", false],
                  ["Honoraires MOE (10 % des travaux)", "25 000 – 34 000 €", false],
                  ["Études (géotechnique, thermique, structure)", "5 000 – 8 000 €", false],
                  ["VRD et raccordements réseaux", "10 000 – 25 000 €", false],
                  ["Frais notaire + taxes (TFNB, permis)", "15 000 – 25 000 €", false],
                  ["Budget total TTC estimatif", "560 000 – 790 000 €", true],
                ] as [string, string, boolean][]).map(([label, val, total]) => (
                  <div key={label} className={`flex justify-between text-[14px] border-b border-[#D9D4CC] pb-2 last:border-0 last:pt-1 ${total ? "font-bold text-[#2C2C2A]" : ""}`}>
                    <span className={total ? "text-[#2C2C2A]" : "text-[#888780]"}>{label}</span>
                    <span className={total ? "text-[#BA7517] text-[15px]" : "text-[#2C2C2A] font-medium"}>{val}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-[#888780] mt-3">TVA à 20 % sur travaux. Hors terrain en pente, hors prestations haut de gamme.</p>
            </div>

            {/* Postes de coût */}
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-4 mb-4">Comment se répartit le budget travaux ?</h2>
            <div className="border border-[#D9D4CC] overflow-hidden mb-10">
              <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div className="col-span-2">Poste</div>
                <div className="text-right">Part du total</div>
              </div>
              {postesCommuns.map((p, i) => (
                <div key={p.poste} className={`grid grid-cols-3 p-3 border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="col-span-2">
                    <div className="text-[14px] text-[#2C2C2A] font-medium">{p.poste}</div>
                    <div className="text-[12px] text-[#888780] mt-0.5">{p.detail}</div>
                  </div>
                  <div className="text-right text-[14px] text-[#BA7517] font-bold self-center">{p.part}</div>
                </div>
              ))}
            </div>

            {/* Surcoûts locaux */}
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-4 mb-4">Pourquoi les prix sont plus élevés en Haute-Savoie ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-5">
              Ces surcoûts sont structurels — ils s&apos;appliquent à tout projet dans la zone, quel que soit l&apos;intervenant.
            </p>
            <div className="border border-[#D9D4CC] overflow-hidden mb-10">
              {surcoûtsLocaux.map((s, i) => (
                <div key={s.facteur} className={`grid grid-cols-[1fr_auto] gap-4 p-4 border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="text-[14px] text-[#2C2C2A]">{s.facteur}</div>
                  <div className="text-[13px] font-bold text-[#BA7517] text-right whitespace-nowrap">{s.impact}</div>
                </div>
              ))}
            </div>

            {/* CCMI vs MOE */}
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-4 mb-4">CCMI ou maîtrise d&apos;œuvre : quel impact sur le budget ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Un contrat CCMI affiche un prix global incluant une marge du responsable de projets de 15 à 25 % sur les travaux. Ce n&apos;est pas visible dans le devis. Avec la maîtrise d&apos;œuvre, chaque artisan répond sur votre chantier spécifique — la mise en concurrence génère 10 à 20 % d&apos;économies, ce qui neutralise les honoraires MOE.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Concrètement : sur un chantier de 300 000 € HT, la différence peut atteindre 30 000 à 50 000 €. C&apos;est le budget d&apos;une cuisine équipée haut de gamme, ou d&apos;une pompe à chaleur avec plancher chauffant.
            </p>
            <Link href="/guides/moe-vs-ccmi/" className="inline-flex items-center gap-2 text-[#BA7517] no-underline hover:underline text-[15px] font-medium mb-10">
              → Comparatif complet CCMI vs maîtrise d&apos;œuvre
            </Link>

          </div>
        </article>

        {/* Liens vers guides par surface */}
        <section className="bg-[#F2EDE6] py-12 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Aller plus loin</p>
            <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-5">Budgets détaillés par surface</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                { href: "/guides/prix-maison-ossature-bois-100m2/", label: "Maison 100 m²", detail: "210 000 – 290 000 €" },
                { href: "/guides/prix-maison-ossature-bois-120m2/", label: "Maison 120 m²", detail: "250 000 – 340 000 €" },
                { href: "/guides/prix-maison-ossature-bois-150m2/", label: "Maison 150 m²", detail: "310 000 – 420 000 €" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="bg-white border border-[#D9D4CC] p-4 no-underline hover:border-[#BA7517] transition-colors group block">
                  <div className="text-[14px] font-bold text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors mb-1">{g.label}</div>
                  <div className="text-[13px] text-[#BA7517] font-medium">{g.detail}</div>
                  <div className="text-[12px] text-[#888780] mt-1">Budget poste par poste →</div>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href: "/guides/prix-maison-ossature-bois-haute-savoie/", titre: "Prix maison ossature bois en Haute-Savoie : tarifs et fourchettes par zone" },
                { href: "/guides/extension-ossature-bois/", titre: "Extension ossature bois : coût, permis, délais" },
                { href: "/guides/construction-chalet-ossature-bois-haute-savoie/", titre: "Construction chalet ossature bois en Haute-Savoie" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="flex items-center gap-3 p-3 bg-white border border-[#D9D4CC] no-underline hover:border-[#BA7517] transition-colors group">
                  <span className="text-[#BA7517]">→</span>
                  <span className="text-[14px] font-medium text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">{g.titre}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-6">Prix construction maison 2026</h2>
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

        {/* CTA */}
        <section className="bg-[#2C2C2A] py-12 px-5">
          <div className="max-w-[780px] mx-auto flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold text-white mb-2">Obtenir une estimation pour votre projet</h2>
              <p className="text-[15px] text-white/60 leading-[1.7]">
                Configurez votre projet en 6 questions. Mahmoud analyse vos contraintes locales et vous répond sous 48h avec une fourchette budgétaire réaliste — gratuit, sans engagement.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors text-center">
                Configurer mon projet →
              </Link>
              <a href="tel:+33625590926" className="inline-block border border-white/30 text-white text-[14px] px-6 py-2.5 no-underline hover:border-white transition-colors text-center">
                Appeler directement
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
