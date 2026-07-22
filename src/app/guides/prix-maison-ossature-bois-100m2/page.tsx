import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prix maison bois 100m² en Haute-Savoie | M&M CONSTRUCTION",
  description: "Budget détaillé maison ossature bois 100m² en Haute-Savoie : fondations, charpente, isolation, menuiseries, MOE. Fourchette réaliste poste par poste.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/prix-maison-ossature-bois-100m2/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prix maison ossature bois 100m² en Haute-Savoie — Budget estimatif 2025",
  description: "Budget détaillé par poste pour une maison ossature bois de 100m² en Haute-Savoie. Fourchettes réalistes, facteurs de variation, honoraires MOE inclus.",
  url: BASE + "/guides/prix-maison-ossature-bois-100m2/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2025-01-15",
  dateModified: "2026-06-25",
  inLanguage: "fr-FR",
};

const faqItems = [
    {
      "@type": "Question",
      name: "Quel est le budget réaliste pour une maison ossature bois de 100m² en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hors terrain, comptez entre 210 000 € et 290 000 € TTC pour une maison ossature bois de 100m² en Haute-Savoie, honoraires maîtrise d'œuvre et VRD inclus. La fourchette basse correspond à un projet plain-pied sur terrain plat avec des finitions standards. La fourchette haute correspond à un terrain en pente avec fondations spéciales, RE2020 renforcé et finitions de niveau intermédiaire.",
      },
    },
    {
      "@type": "Question",
      name: "Une maison ossature bois de 100m² en Haute-Savoie est-elle plus chère qu'ailleurs en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, de 10 à 20 % environ. Plusieurs facteurs expliquent ce surcoût : zone sismique 3 (prescriptions parasismiques sur l'ossature), terrain souvent en pente (fondations et terrassement plus complexes), coût de la main-d'œuvre locale supérieur à la moyenne nationale, et accès chantier parfois difficile. Ces contraintes doivent être anticipées dès l'estimation.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on construire une maison ossature bois de 100m² à moins de 200 000 € en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C'est difficile à réaliser sur un chantier complet en Haute-Savoie. Un budget de 200 000 € TTC représente 2 000 €/m² — ce qui correspond à la limite basse du marché local pour l'ossature bois, sur terrain plat et accessible, avec des finitions très simples. Sous ce seuil, il faut compter sur une auto-finition partielle ou un apport personnel conséquent.",
      },
    },
    {
      "@type": "Question",
      name: "Les honoraires du maître d'œuvre sont-ils inclus dans les chiffres donnés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Les fourchettes présentées incluent les honoraires de maîtrise d'œuvre (8 à 10 % du coût travaux HT), soit environ 14 000 à 20 000 € pour un projet de 100m². Ces honoraires couvrent l'étude de faisabilité, les plans, la consultation des entreprises, la direction de chantier et l'assistance à réception.",
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
    { "@type": "ListItem", position: 4, name: "Budget 100m²", item: BASE + "/guides/prix-maison-ossature-bois-100m2/" },
  ],
};

const postes = [
  { poste: "Terrassement & fondations", bas: "18 000", haut: "38 000", note: "Fondations profondes si terrain en pente ou argileux ; prescriptions sismiques zone 3" },
  { poste: "Ossature bois & charpente", bas: "32 000", haut: "52 000", note: "Murs à ossature bois, poteaux, poutres, charpente industrielle ou traditionnelle" },
  { poste: "Isolation & étanchéité à l'air", bas: "16 000", haut: "26 000", note: "Ouate de cellulose ou laine de bois soufflée, membrane frein-vapeur, test blower door" },
  { poste: "Couverture & zinguerie", bas: "10 000", haut: "20 000", note: "Tuile béton, bac acier ou zinc selon PLU ; surcoût si forte pente" },
  { poste: "Menuiseries extérieures", bas: "18 000", haut: "32 000", note: "Fenêtres triple vitrage, baie coulissante, porte d'entrée — prix élevé en zone montagne" },
  { poste: "Bardage & façade", bas: "10 000", haut: "20 000", note: "Bardage bois, composite ou enduit selon PLU communal" },
  { poste: "Électricité, chauffage, VMC", bas: "18 000", haut: "28 000", note: "Tableau, gaines, PAC air-eau ou poêle à bois, VMC double flux" },
  { poste: "Plomberie & sanitaires", bas: "10 000", haut: "18 000", note: "Salle de bain, WC, cuisine (hors équipements), réseau EF/EC" },
  { poste: "Cloisons & doublages", bas: "7 000", haut: "13 000", note: "Plaquisterie intérieure, isolation phonique entre pièces" },
  { poste: "Revêtements de sol", bas: "7 000", haut: "14 000", note: "Carrelage, parquet ou béton ciré — choix impactant sur le budget finitions" },
  { poste: "VRD & branchements", bas: "12 000", haut: "28 000", note: "Voirie, réseaux divers — coût variable selon distance au réseau existant" },
  { poste: "Honoraires MOE (8–10 %)", bas: "14 000", haut: "20 000", note: "Études, consultation entreprises, direction travaux, assistance réception" },
];

export default function PrixMaison100m2Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main>

        {/* Hero */}
        <div className="bg-[#2C2C2A] py-16 px-5">
          <div className="max-w-[780px] mx-auto">
            <div className="flex flex-wrap gap-2 text-[13px] text-white/40 mb-4">
              <Link href="/" className="text-white/40 no-underline hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/guides/" className="text-white/40 no-underline hover:text-white transition-colors">Guides</Link>
              <span>/</span>
              <Link href="/guides/prix-maison-ossature-bois-haute-savoie/" className="text-white/40 no-underline hover:text-white transition-colors">Prix ossature bois 74</Link>
              <span>/</span>
              <span className="text-white/70">100m²</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Estimation budgétaire</span>
            <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
              Prix maison ossature bois 100m² en Haute-Savoie
            </h1>
            <div className="flex flex-wrap gap-4 mt-4 mb-4">
              <div className="bg-white/10 px-4 py-2.5 text-center">
                <div className="text-[22px] font-black text-[#BA7517]">210 000 €</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wide">Budget bas (TTC)</div>
              </div>
              <div className="bg-white/10 px-4 py-2.5 text-center">
                <div className="text-[22px] font-black text-[#BA7517]">290 000 €</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wide">Budget haut (TTC)</div>
              </div>
              <div className="bg-white/10 px-4 py-2.5 text-center">
                <div className="text-[22px] font-black text-[#BA7517]">2 100–2 900 €</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wide">Par m² — hors terrain</div>
              </div>
            </div>
            <p className="text-white/40 text-[13px]">Par Mahmoud Ben Ahmed · M&M CONSTRUCTION · Mis à jour le 25 juin 2026</p>
          </div>
        </div>

        {/* Article */}
        <article className="bg-white py-14 px-5">
          <div className="max-w-[780px] mx-auto">

            <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
              Une maison ossature bois de 100m² est la surface la plus courante pour un premier projet en Haute-Savoie — 3 chambres, un séjour ouvert, plain-pied ou R+1 compact. Voici un budget détaillé poste par poste, fondé sur les chantiers réalisés dans le secteur Annecy–Genevois–Chablais.
            </p>

            <div className="bg-[#F2EDE6] border border-[#D9D4CC] p-5 mb-8">
              <p className="font-bold text-[15px] text-[#2C2C2A] mb-1">Configuration type</p>
              <p className="text-[14px] text-[#888780] leading-[1.7]">
                Maison de plain-pied ou R+1 compact · 3 chambres · Séjour/cuisine ouverts · 1 salle de bain + 1 WC · Ossature bois avec isolation haute performance RE2020 · PAC air-eau ou poêle à bois · Terrain plat à légèrement dénivelé
              </p>
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-6">Budget détaillé par poste — maison 100m²</h2>
            <div className="border border-[#D9D4CC] overflow-hidden mb-8">
              <div className="grid grid-cols-[1fr_90px_90px] bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Poste de travaux</div>
                <div className="text-center">Fourchette basse</div>
                <div className="text-center text-[#BA7517]">Fourchette haute</div>
              </div>
              {postes.map((row, i) => (
                <div key={i} className={`border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="grid grid-cols-[1fr_90px_90px] p-3">
                    <div className="text-[#2C2C2A] font-medium text-[14px]">{row.poste}</div>
                    <div className="text-center text-[#888780] text-[14px]">{row.bas} €</div>
                    <div className="text-center text-[#2C2C2A] font-medium text-[14px]">{row.haut} €</div>
                  </div>
                  <div className="px-3 pb-3 text-[12px] text-[#888780] leading-[1.6]">{row.note}</div>
                </div>
              ))}
              <div className="grid grid-cols-[1fr_90px_90px] bg-[#2C2C2A] text-white p-3">
                <div className="font-bold text-[14px]">Total indicatif TTC</div>
                <div className="text-center font-bold text-[14px]">172 000 €</div>
                <div className="text-center font-bold text-[14px] text-[#BA7517]">309 000 €</div>
              </div>
            </div>

            <p className="text-[14px] text-[#888780] leading-[1.7] mb-8 italic">
              Ces estimations s&apos;entendent hors terrain et hors taxe d&apos;aménagement. La taxe d&apos;aménagement varie de 3 à 8 % de la surface selon la commune (commune urbaine dense ou zone rurale). Prévoyez 5 000 à 12 000 € supplémentaires selon votre localisation.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Spécificités Haute-Savoie pour une maison de 100m²</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              À surface égale, une maison en Haute-Savoie coûte 10 à 20 % de plus qu&apos;en plaine. Plusieurs facteurs expliquent cet écart et doivent être intégrés dès l&apos;estimation.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              {[
                {
                  titre: "Zone sismique 3",
                  texte: "La Haute-Savoie est classée en zone sismique 3 (modérée). Les règles de construction parasismique imposent des dispositions spécifiques sur l'ossature bois : contreventements renforcés, fixations majorées, fondations filantes ou semelles armées même sur terrain stable. Surcoût estimé : 3 000 à 8 000 € sur un 100m².",
                },
                {
                  titre: "Terrains en pente et accès chantier",
                  texte: "Les terrains plats sont rares dans le secteur. Un dénivelé de 20 % à 30 % implique des fondations spéciales (pieux, micropieux ou vide sanitaire ventilé), un terrassement plus important et un accès engin parfois complexe. Ces postes peuvent doubler le coût des fondations.",
                },
                {
                  titre: "Main-d'œuvre et délais artisans",
                  texte: "Le marché artisanal est tendu en Haute-Savoie : charpentiers bois, plaquistes et électriciens sont occupés sur 12 à 18 mois à l'avance. La mise en concurrence est essentielle pour ne pas subir les tarifs des entreprises en position de force. C'est le rôle central du maître d'œuvre sur ce marché.",
                },
                {
                  titre: "PLU et contraintes architecturales",
                  texte: "Chaque commune impose ses propres règles sur les matériaux de façade, les couleurs, les pentes de toiture et les volumes. Un projet doit être validé par les services urbanisme locaux avant toute consultation d'entreprises — sous peine de devoir modifier les plans en cours de route.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 border border-[#D9D4CC]">
                  <span className="text-[#BA7517] font-bold text-[18px] flex-shrink-0 mt-0.5">→</span>
                  <div>
                    <p className="font-bold text-[14px] text-[#2C2C2A] mb-1">{item.titre}</p>
                    <p className="text-[14px] text-[#888780] leading-[1.7]">{item.texte}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Ce qui fait varier le budget d&apos;un 100m² en Haute-Savoie</h2>
            <div className="border border-[#D9D4CC] overflow-hidden mb-8">
              <div className="grid grid-cols-[1fr_1fr] bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Facteur</div>
                <div>Impact sur le budget</div>
              </div>
              {[
                ["Terrain plat vs terrain en pente (30 %)", "+15 000 à +30 000 €"],
                ["Fondations standard vs fondations spéciales", "+8 000 à +20 000 €"],
                ["Finitions basiques vs intermédiaires", "+15 000 à +25 000 €"],
                ["Menuiseries double vitrage vs triple vitrage", "+5 000 à +10 000 €"],
                ["Poêle à bois vs PAC air-eau", "+5 000 à +12 000 €"],
                ["Photovoltaïque (3 kWc)", "+8 000 à +14 000 €"],
                ["Balcon ou terrasse bois", "+6 000 à +15 000 €"],
                ["Accès chantier difficile (chemin étroit)", "+3 000 à +10 000 €"],
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-[1fr_1fr] p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="text-[#888780]">{row[0]}</div>
                  <div className="text-[#2C2C2A] font-medium">{row[1]}</div>
                </div>
              ))}
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Rôle du maître d&apos;œuvre sur un projet de 100m²</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Sur un projet de cette taille, les honoraires MOE (14 000 à 20 000 €) sont souvent récupérés dès la mise en concurrence des entreprises. Sur un 100m², la différence entre l&apos;offre la plus basse et la plus haute pour un même lot peut atteindre 15 000 à 30 000 €. Le maître d&apos;œuvre analyse ces écarts, vérifie que les offres sont comparables techniquement, et vous conseille sur le bon choix — pas forcément le moins cher.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8]">
              Sur la phase chantier, les visites régulières permettent de détecter les non-conformités avant qu&apos;elles ne deviennent des réserves à la réception. Sur une maison ossature bois de 100m², les points critiques sont l&apos;étanchéité à l&apos;air, les jonctions menuiseries/bardage, et la qualité des ancrages parasismiques.
            </p>

          </div>
        </article>

        {/* FAQ */}
        <section className="bg-[#F2EDE6] py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mb-8">Budget 100m² en Haute-Savoie : vos questions</h2>
            <div className="flex flex-col gap-0 border border-[#D9D4CC] bg-white">
              {faqItems.map((item, i) => (
                <details key={i} className="border-b border-[#D9D4CC] last:border-0 group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none text-[15px] font-medium text-[#2C2C2A] hover:text-[#BA7517] transition-colors">
                    {item.name}
                    <span className="text-[#BA7517] ml-4 flex-shrink-0 text-[18px] leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-[14px] text-[#888780] leading-[1.8]">
                    {item.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Autres surfaces */}
        <div className="bg-white py-10 px-5 border-t border-[#D9D4CC]">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Autres surfaces</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/guides/prix-maison-ossature-bois-120m2/" className="block p-4 border border-[#D9D4CC] no-underline hover:border-[#BA7517] transition-colors group">
                <div className="font-bold text-[15px] text-[#2C2C2A] group-hover:text-[#BA7517]">Budget maison 120m²</div>
                <div className="text-[13px] text-[#888780] mt-1">250 000 – 340 000 € TTC</div>
              </Link>
              <Link href="/guides/prix-maison-ossature-bois-150m2/" className="block p-4 border border-[#D9D4CC] no-underline hover:border-[#BA7517] transition-colors group">
                <div className="font-bold text-[15px] text-[#2C2C2A] group-hover:text-[#BA7517]">Budget maison 150m²</div>
                <div className="text-[13px] text-[#888780] mt-1">310 000 – 420 000 € TTC</div>
              </Link>
            </div>
          </div>
        </div>

        {/* Guides liés */}
        <div className="bg-[#F2EDE6] py-10 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Guides utiles</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/guides/prix-maison-ossature-bois-haute-savoie/", titre: "Prix au m² maison ossature bois Haute-Savoie — guide général" },
                { href: "/guides/moe-vs-ccmi/", titre: "CCMI ou maîtrise d'œuvre : comparatif complet" },
                { href: "/guides/garanties-assurance-maitre-oeuvre/", titre: "Garantie décennale et assurance dommage ouvrage en MOE" },
                { href: "/faire-construire-haute-savoie/", titre: "Faire construire en Haute-Savoie : guide complet" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="flex items-center gap-3 p-3 bg-white no-underline hover:bg-[#E8E2D9] transition-colors group border border-[#D9D4CC]">
                  <span className="text-[#BA7517] flex-shrink-0">→</span>
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
              <h2 className="text-[22px] font-bold text-white mb-2">Vous avez un terrain en Haute-Savoie ?</h2>
              <p className="text-[15px] text-white/60 leading-[1.7]">M&M CONSTRUCTION réalise une étude de faisabilité sur votre parcelle : budget, PLU, contraintes techniques, premières esquisses. Premier échange gratuit.</p>
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
