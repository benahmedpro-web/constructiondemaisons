import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prix maison ossature bois en Haute-Savoie | M&M CONSTRUCTION",
  description: "Combien coûte une maison ossature bois en Haute-Savoie et Genevois ? Prix au m², postes de coût, variables locales, comparaison CCMI vs MOE.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/prix-maison-ossature-bois-haute-savoie/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prix maison ossature bois en Haute-Savoie : estimation au m² en 2025",
  description: "Combien coûte une maison ossature bois en Haute-Savoie et Genevois ? Prix au m², postes de coût, variables locales.",
  url: BASE + "/guides/prix-maison-ossature-bois-haute-savoie/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2025-03-01",
  dateModified: "2026-06-25",
  inLanguage: "fr-FR",
};

const faqItems = [
    {
      "@type": "Question",
      name: "Quel est le prix moyen d'une maison ossature bois en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Haute-Savoie, le coût de construction d'une maison ossature bois varie entre 1 800 et 2 800 € HT/m² selon les prestations, la zone géographique et les contraintes techniques. Une maison de 120 m² représente donc un budget travaux de 216 000 à 336 000 € HT, hors foncier et hors frais annexes (raccordements, études, honoraires MOE).",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi les prix sont-ils plus élevés en Haute-Savoie qu'ailleurs ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plusieurs facteurs expliquent ce surcoût par rapport à la moyenne nationale : les contraintes sismiques (zone 3) qui imposent des prescriptions structurelles supplémentaires, la forte demande d'artisans qualifiés dans une zone tendue, les accès difficiles sur terrain en pente, les exigences PLU plus strictes dans les communes frontalières, et le coût de la vie local qui impacte les tarifs des entreprises.",
      },
    },
    {
      "@type": "Question",
      name: "Le foncier est-il inclus dans ces prix ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Les prix indiqués sont des coûts de construction au m² hors foncier. En Haute-Savoie et Genevois, le foncier représente un poste majeur : de 200 €/m² en zone rurale à 900 €/m² dans le Pays de Gex ou les communes frontalières. À cela s'ajoutent les frais de viabilisation (15 000 à 40 000 € selon les réseaux à créer) et les études de sol (1 500 à 3 000 €).",
      },
    },
    {
      "@type": "Question",
      name: "La maîtrise d'œuvre est-elle moins chère qu'un CCMI pour une maison bois ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le coût final est généralement comparable, parfois inférieur en MOE. Les honoraires du maître d'œuvre (8-12 % des travaux) sont souvent compensés par les économies réalisées lors de la mise en concurrence des artisans. La différence clé : en MOE vous avez une visibilité totale sur chaque poste, en CCMI le prix global inclut des marges opaques.",
      },
    },
    {
      "@type": "Question",
      name: "Quels postes font varier le prix d'une maison bois en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les principaux facteurs de variation sont : le terrain en pente (fondations spéciales : +15 000 à 40 000 €), le niveau de prestation (standard, intermédiaire, haut de gamme), le type de bardage (bois naturel, composite, enduit), la performance thermique visée (RT standard vs passif), les menuiseries (PVC, aluminium, bois-aluminium), la superficie et la complexité architecturale.",
      },
    },
];

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: BASE + "/guides/" },
    { "@type": "ListItem", position: 3, name: "Prix maison ossature bois Haute-Savoie", item: BASE + "/guides/prix-maison-ossature-bois-haute-savoie/" },
  ],
};

const postes = [
  { poste: "Structure ossature bois + charpente", part: "25–30 %", detail: "Montant ossature, panneaux, isolation structure, charpente bois" },
  { poste: "Fondations", part: "8–15 %", detail: "Semelles filantes standard. Majoré si terrain en pente ou sol instable" },
  { poste: "Menuiseries extérieures", part: "10–12 %", detail: "Fenêtres, portes-fenêtres, porte d'entrée. Triple vitrage recommandé en zone alpine" },
  { poste: "Couverture + étanchéité", part: "8–10 %", detail: "Toiture bac acier, tuiles ou zinc. Bardage façade inclus ici" },
  { poste: "Électricité + plomberie + chauffage", part: "18–22 %", detail: "Pompe à chaleur air/eau souvent recommandée pour RE2020" },
  { poste: "Isolation complémentaire", part: "5–8 %", detail: "Isolation des combles, sous-sol, doublage intérieur selon conception" },
  { poste: "Finitions intérieures", part: "12–16 %", detail: "Revêtements sol, peinture, menuiseries intérieures, cuisine, salle de bains" },
  { poste: "VRD + raccordements", part: "5–8 %", detail: "Eau, électricité, assainissement, voirie. Variable selon éloignement des réseaux" },
];

const zones = [
  { zone: "Annemasse / Genevois nord", fourchette: "1 900 – 2 600 €/m²", foncier: "300 – 700 €/m²" },
  { zone: "Saint-Julien / Genevois sud", fourchette: "2 000 – 2 700 €/m²", foncier: "400 – 800 €/m²" },
  { zone: "Gex / Pays de Gex (01)", fourchette: "2 100 – 2 800 €/m²", foncier: "500 – 1 000 €/m²" },
  { zone: "Thonon / Chablais", fourchette: "1 800 – 2 500 €/m²", foncier: "200 – 500 €/m²" },
  { zone: "Zone rurale 74 (hors frontalier)", fourchette: "1 700 – 2 300 €/m²", foncier: "100 – 300 €/m²" },
];

export default function GuidePrixMaisonBoisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
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
              <span className="text-white/70">Prix maison bois Haute-Savoie</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Guide prix · 2025</span>
            <h1 className="text-white text-[30px] md:text-[42px] font-black leading-tight mb-4">
              Prix maison ossature bois en Haute-Savoie : estimation au m² en 2025
            </h1>
            <p className="text-white/60 text-[16px] leading-[1.7] mb-2">
              Par Mahmoud Ben Ahmed · M&M CONSTRUCTION · Responsable de projets maison bois en Haute-Savoie
            </p>
            <p className="text-white/40 text-[13px]">Mis à jour le 25 juin 2026</p>
          </div>
        </div>

        {/* Article */}
        <article className="bg-white py-14 px-5">
          <div className="max-w-[780px] mx-auto">

            <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
              Combien coûte une maison ossature bois en Haute-Savoie ? C&apos;est la question que posent en premier presque tous les porteurs de projet. La réponse honnête : entre 1 700 et 2 800 € HT/m² selon la zone, les prestations et les contraintes techniques. Ce guide détaille les postes de coût, les variables locales, et ce qui fait monter ou descendre la facture.
            </p>

            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-10 mb-4">Fourchettes de prix par zone géographique</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-5">
              En Haute-Savoie, les prix varient significativement selon la proximité de Genève et le type de terrain. Le tableau ci-dessous donne des fourchettes indicatives pour le coût de construction (hors foncier, hors honoraires).
            </p>
            <div className="border border-[#D9D4CC] overflow-hidden mb-8">
              <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Zone</div>
                <div className="text-center">Construction HT/m²</div>
                <div className="text-center">Foncier indicatif/m²</div>
              </div>
              {zones.map((z, i) => (
                <div key={z.zone} className={`grid grid-cols-3 p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="text-[#2C2C2A] font-medium">{z.zone}</div>
                  <div className="text-center text-[#BA7517] font-bold">{z.fourchette}</div>
                  <div className="text-center text-[#888780]">{z.foncier}</div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#888780] italic mb-8">Prix indicatifs HT, hors VRD, hors honoraires MOE, hors études. Mis à jour juin 2026.</p>

            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-10 mb-4">Les postes qui composent le coût de construction</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-5">
              Pour une maison ossature bois de 120 m² avec des prestations intermédiaires, voici comment se répartit approximativement le budget travaux.
            </p>
            <div className="border border-[#D9D4CC] overflow-hidden mb-8">
              <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div className="col-span-2">Poste</div>
                <div className="text-right">Part du budget</div>
              </div>
              {postes.map((p, i) => (
                <div key={p.poste} className={`grid grid-cols-3 p-3 border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="col-span-2">
                    <div className="text-[14px] text-[#2C2C2A] font-medium">{p.poste}</div>
                    <div className="text-[12px] text-[#888780] mt-0.5">{p.detail}</div>
                  </div>
                  <div className="text-right text-[14px] text-[#BA7517] font-bold self-center">{p.part}</div>
                </div>
              ))}
            </div>

            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-10 mb-4">Ce qui fait monter le prix en Haute-Savoie</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              <strong className="text-[#2C2C2A]">Le terrain en pente</strong> est le premier facteur de surcoût local. Des fondations sur micropieux ou semelles profondes peuvent ajouter 15 000 à 40 000 € selon le dénivelé et la nature du sol. Un mur de soutènement représente 10 000 à 25 000 € supplémentaires. L&apos;étude géotechnique (G1 ou G2) est indispensable — comptez 1 500 à 3 000 €.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              <strong className="text-[#2C2C2A]">La zone sismique 3</strong> impose des prescriptions parasismiques sur la structure : murs de contreventement renforcés, ancrages spécifiques, connexions calculées. Sur une maison de 120 m², ce surcoût représente 5 000 à 12 000 € par rapport à une zone non sismique.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              <strong className="text-[#2C2C2A]">La performance thermique</strong> attendue en zone alpine est élevée. Le triple vitrage, l&apos;isolation renforcée des murs et toitures, et la pompe à chaleur air/eau sont quasi systématiques. Ces prestations ajoutent 15 000 à 30 000 € par rapport à un niveau de base.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              <strong className="text-[#2C2C2A]">La tension du marché artisanal</strong> en zone frontalière pousse les tarifs des entreprises locales. Les charpentiers et menuisiers bois qualifiés sont peu nombreux et très sollicités, particulièrement dans le Genevois et le Pays de Gex.
            </p>

            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-10 mb-4">CCMI ou MOE : quel impact sur le budget ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Un constructeur CCMI propose un prix global apparent, ce qui simplifie la comparaison à première vue. Mais ce prix intègre une marge constructeur de 15 à 25 % sur les travaux. Vous ne voyez pas le coût réel de chaque poste.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Avec la maîtrise d&apos;œuvre, les artisans répondent directement sur votre projet. La mise en concurrence sur un chantier spécifique génère souvent 10 à 20 % d&apos;économies par rapport au prix catalogue d&apos;un constructeur. Les honoraires MOE (8–12 % des travaux) sont donc fréquemment neutralisés — vous payez un professionnel qui travaille dans votre intérêt, pas dans celui du constructeur.
            </p>
            <Link href="/guides/moe-vs-ccmi/" className="inline-flex items-center gap-2 text-[#BA7517] no-underline hover:underline text-[15px] font-medium mb-8">
              → Comparatif complet CCMI vs maîtrise d&apos;œuvre
            </Link>

            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-10 mb-4">Budget total : ce qu&apos;il faut prévoir</h2>
            <div className="bg-[#F2EDE6] border border-[#D9D4CC] p-5 mb-6">
              <p className="text-[14px] font-bold text-[#2C2C2A] mb-3">Exemple : maison 120 m² à Annemasse, terrain plat, prestations intermédiaires</p>
              <div className="flex flex-col gap-2">
                {[
                  ["Travaux de construction HT", "240 000 – 300 000 €"],
                  ["Honoraires MOE (10 %)", "24 000 – 30 000 €"],
                  ["Études (géotechnique, structure, thermique)", "5 000 – 8 000 €"],
                  ["VRD et raccordements", "10 000 – 25 000 €"],
                  ["Foncier (300 €/m² × 500 m²)", "150 000 €"],
                  ["Frais de notaire + taxes", "15 000 – 25 000 €"],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between text-[14px] border-b border-[#D9D4CC] pb-1 last:border-0">
                    <span className="text-[#888780]">{label}</span>
                    <span className="text-[#2C2C2A] font-medium">{val}</span>
                  </div>
                ))}
                <div className="flex justify-between text-[15px] font-bold text-[#2C2C2A] pt-1 mt-1">
                  <span>Budget total TTC estimatif</span>
                  <span className="text-[#BA7517]">550 000 – 680 000 €</span>
                </div>
              </div>
              <p className="text-[12px] text-[#888780] mt-3">Estimation indicative — hors terrain en pente, hors prestations haut de gamme. TVA à 20 % sur travaux.</p>
            </div>

          </div>
        </article>

        {/* FAQ */}
        <section className="bg-[#F2EDE6] py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-6">Prix maison ossature bois Haute-Savoie</h2>
            <div className="flex flex-col gap-0 border border-[#D9D4CC] bg-white">
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

        {/* Guides liés */}
        <div className="bg-white py-10 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Guides utiles</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/faire-construire-haute-savoie/", titre: "Faire construire en Haute-Savoie : le guide complet" },
                { href: "/guides/prix-maison-ossature-bois-100m2/", titre: "Budget détaillé maison ossature bois 100m² en Haute-Savoie" },
                { href: "/guides/prix-maison-ossature-bois-120m2/", titre: "Budget détaillé maison ossature bois 120m² en Haute-Savoie" },
                { href: "/guides/prix-maison-ossature-bois-150m2/", titre: "Budget détaillé maison ossature bois 150m² en Haute-Savoie" },
                { href: "/guides/moe-vs-ccmi/", titre: "CCMI ou maîtrise d'œuvre : que choisir ?" },
                { href: "/guides/re2020-maison-bois/", titre: "RE2020 et maison ossature bois : ce qui change" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="flex items-center gap-3 p-3 bg-[#F2EDE6] border border-[#D9D4CC] no-underline hover:border-[#BA7517] transition-colors group">
                  <span className="text-[#BA7517]">→</span>
                  <span className="text-[14px] font-medium text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">{g.titre}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-[#2C2C2A] py-12 px-5">
          <div className="max-w-[780px] mx-auto flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold text-white mb-2">Obtenir une estimation pour votre projet</h2>
              <p className="text-[15px] text-white/60 leading-[1.7]">Mahmoud analyse votre terrain, votre programme et vos contraintes locales pour vous fournir une fourchette budgétaire réaliste. Gratuit, sous 48h.</p>
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
