import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chalet ossature bois en Haute-Savoie | M&M CONSTRUCTION",
  description: "Construire un chalet ossature bois en Haute-Savoie : réglementation, budget, artisans. Guide complet pour votre projet dans les Alpes. Étude gratuite.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/construction-chalet-ossature-bois-haute-savoie/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Construction chalet ossature bois en Haute-Savoie : guide complet 2025",
  description: "Construire un chalet ossature bois en Haute-Savoie : réglementation, budget, artisans, différences avec une maison classique.",
  url: BASE + "/guides/construction-chalet-ossature-bois-haute-savoie/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2025-04-01",
  dateModified: "2026-06-25",
  inLanguage: "fr-FR",
};

const faqItems = [
    {
      "@type": "Question",
      name: "Quelle est la différence entre un chalet et une maison ossature bois en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Haute-Savoie, le terme \"chalet\" désigne principalement le style architectural : toiture à forte pente, grands débords de toit, bardage bois, balcons avec garde-corps bois. L'ossature bois est une technique constructive, pas un style. On peut donc construire un chalet au sens esthétique du terme en utilisant la technique ossature bois, ce qui combine le rendu alpin traditionnel avec les avantages modernes du bois : rapidité, isolation, légèreté sur pente.",
      },
    },
    {
      "@type": "Question",
      name: "La construction d'un chalet ossature bois est-elle autorisée partout en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pas systématiquement. Certains PLU imposent un style architectural précis (toiture à 2 pans, pente minimale, bardage bois obligatoire ou interdit selon les secteurs). D'autres communes, notamment en zones urbaines, limitent les formes toiture ou les matériaux. En montagne, la loi Montagne impose de construire en continuité de l'existant. M&M CONSTRUCTION vérifie la faisabilité réglementaire avant tout projet.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix d'un chalet ossature bois en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un chalet ossature bois en Haute-Savoie coûte entre 2 000 et 3 200 € HT/m² selon les prestations. Le surcoût par rapport à une maison contemporaine classique vient des toitures à forte pente (plus complexes), des balcons, des menuiseries bois ou bois-aluminium haut de gamme, et souvent d'une charpente apparente. Un sous-sol (cave ou garage en pente) ajoute 15 000 à 40 000 € selon le dénivelé.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il un permis de construire pour un chalet en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, pour toute construction neuve de plus de 20 m². Le dossier de permis de construire comprend les plans, les coupes, les façades, une notice architecturale et les documents réglementaires (étude thermique RE2020, étude de sol G2). M&M CONSTRUCTION monte le dossier complet et assure le suivi jusqu'à l'obtention du permis purgé de tout recours des tiers.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on construire un chalet ossature bois en zone montagne loi Montagne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, sous conditions. La loi Montagne impose de construire en continuité des zones déjà urbanisées. Si votre terrain est en zone U ou AU du PLU, c'est possible. En zone N ou A (naturelle/agricole), c'est généralement interdit sauf extension de l'existant. L'ossature bois n'est pas plus contrainte qu'un autre mode constructif par la loi Montagne — ce sont les règles d'urbanisme qui s'appliquent, pas le matériau.",
      },
    },
];

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: BASE + "/guides/" },
    { "@type": "ListItem", position: 3, name: "Construction chalet ossature bois Haute-Savoie", item: BASE + "/guides/construction-chalet-ossature-bois-haute-savoie/" },
  ],
};

const differences = [
  { critere: "Structure", chalet: "Ossature bois (identique à une maison bois moderne)", maison: "Ossature bois ou béton" },
  { critere: "Toiture", chalet: "Forte pente (35–50%), grands débords, souvent 2 pans", maison: "Pente variable, toiture terrasse possible" },
  { critere: "Bardage façade", chalet: "Bois naturel (épicéa, mélèze, douglas), souvent horizontal", maison: "Bois, crépi, zinc, composite" },
  { critere: "Balcons", chalet: "Souvent présents, garde-corps bois sculpté ou minimaliste", maison: "Optionnels" },
  { critere: "Menuiseries", chalet: "Bois ou bois-aluminium, souvent avec volets bois", maison: "PVC, aluminium, bois-alu" },
  { critere: "Charpente", chalet: "Souvent apparente en intérieur, fermes bois visibles", maison: "Généralement cachée" },
  { critere: "Surcoût vs maison bois contemporaine", chalet: "+15 à 25 %", maison: "Référence" },
];

export default function GuideChaletPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main>

        {/* Hero */}
        <div className="bg-[#2C2C2A] py-16 px-5">
          <div className="max-w-[780px] mx-auto">
            <div className="flex gap-2 text-[13px] text-white/40 mb-4 flex-wrap">
              <Link href="/" className="text-white/40 no-underline hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/guides/" className="text-white/40 no-underline hover:text-white transition-colors">Guides</Link>
              <span>/</span>
              <span className="text-white/70">Chalet ossature bois Haute-Savoie</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Guide · 2025</span>
            <h1 className="text-white text-[30px] md:text-[42px] font-black leading-tight mb-4">
              Construction chalet ossature bois en Haute-Savoie : guide complet 2025
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
              &ldquo;Chalet&rdquo; et &ldquo;ossature bois&rdquo; sont souvent confondus. L&apos;un est un style architectural, l&apos;autre une technique constructive. En Haute-Savoie, les deux se marient naturellement — mais il y a des nuances importantes sur le budget, la réglementation et le choix des artisans.
            </p>

            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-10 mb-4">Chalet vs maison ossature bois : quelle différence ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-5">
              Techniquement, un chalet ossature bois utilise exactement la même technique constructive qu&apos;une maison bois contemporaine : poteaux-poutres, panneaux OSB, isolation entre montants. C&apos;est l&apos;expression architecturale qui change — toiture à forte pente, balcons, bardage bois naturel, charpente apparente.
            </p>

            <div className="border border-[#D9D4CC] overflow-hidden mb-8">
              <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Critère</div>
                <div className="text-center">Chalet bois</div>
                <div className="text-center">Maison bois contemporaine</div>
              </div>
              {differences.map((d, i) => (
                <div key={d.critere} className={`grid grid-cols-3 p-3 text-[13px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="text-[#2C2C2A] font-medium">{d.critere}</div>
                  <div className="text-center text-[#888780]">{d.chalet}</div>
                  <div className="text-center text-[#888780]">{d.maison}</div>
                </div>
              ))}
            </div>

            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-10 mb-4">Réglementation spécifique en Haute-Savoie</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              En Haute-Savoie, de nombreuses communes ont inscrit dans leur PLU des règles d&apos;aspect visant à maintenir le caractère architectural alpin. Paradoxalement, cela <strong className="text-[#2C2C2A]">favorise</strong> le chalet ossature bois dans certains secteurs : bardage bois imposé, toiture à forte pente exigée, matériaux synthétiques limités.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Dans d&apos;autres secteurs (zones urbaines denses, entrées de ville), les PLU peuvent au contraire imposer une architecture plus sobre sans débords de toit prononcés — ce qui oriente vers une maison bois contemporaine plutôt qu&apos;un chalet traditionnel.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-8">
              La <strong className="text-[#2C2C2A]">loi Montagne</strong> s&apos;applique également dans les communes de massif : construction en continuité de l&apos;existant, pas de mitage. Elle ne concerne pas le matériau ou le style, mais la localisation du terrain et les zones urbanisables.
            </p>

            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-10 mb-4">Budget : ce qui coûte plus cher dans un chalet</h2>
            <div className="flex flex-col gap-3 mb-8">
              {[
                { poste: "Toiture à forte pente", impact: "+8 à 15 %", detail: "Plus de charpente, plus de couverture au m², complexité accrue." },
                { poste: "Grands débords de toit", impact: "+3 à 6 %", detail: "Structure de débord, bardage de sous-face, évacuation des eaux." },
                { poste: "Charpente apparente", impact: "+5 à 10 %", detail: "Bois de qualité visuelle, finition soignée, aucun défaut toléré." },
                { poste: "Balcons et garde-corps bois", impact: "+4 à 8 %", detail: "Structure, étanchéité, menuiseries bois traité ou lasure." },
                { poste: "Menuiseries bois ou bois-alu", impact: "+3 à 7 %", detail: "Par rapport à du PVC standard." },
              ].map((p) => (
                <div key={p.poste} className="flex gap-4 p-4 bg-[#F2EDE6] border-l-4 border-[#BA7517]">
                  <div className="flex-1">
                    <div className="text-[14px] font-bold text-[#2C2C2A]">{p.poste}</div>
                    <div className="text-[13px] text-[#888780] mt-0.5">{p.detail}</div>
                  </div>
                  <div className="text-[14px] font-bold text-[#BA7517] flex-shrink-0 self-center">{p.impact}</div>
                </div>
              ))}
            </div>

            <h2 className="text-[24px] font-bold text-[#2C2C2A] mt-10 mb-4">Maîtrise d&apos;œuvre ou CCMI pour un chalet bois ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Les constructeurs CCMI proposent rarement du chalet sur mesure — leur catalogue est orienté maisons contemporaines standardisées. Pour un vrai chalet ossature bois adapté à votre terrain, à votre vue et à votre PLU, la maîtrise d&apos;œuvre est quasi systématiquement la meilleure approche.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-8">
              Elle permet de choisir un charpentier bois spécialisé chalet (ils sont rares et très demandés en 74), de contrôler chaque poste de coût, et d&apos;adapter l&apos;architecture à votre parcelle plutôt que l&apos;inverse.
            </p>

          </div>
        </article>

        {/* FAQ */}
        <section className="bg-[#F2EDE6] py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-6">Construction chalet ossature bois Haute-Savoie</h2>
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
                { href: "/maison-ossature-bois/", titre: "Maison ossature bois neuve en Haute-Savoie" },
                { href: "/maison-ossature-bois-thonon/", titre: "Maison ossature bois à Thonon et dans le Chablais" },
                { href: "/maison-ossature-bois-annecy/", titre: "Maison ossature bois à Annecy" },
                { href: "/guides/prix-maison-ossature-bois-haute-savoie/", titre: "Prix maison ossature bois en Haute-Savoie 2025" },
                { href: "/guides/moe-vs-ccmi/", titre: "CCMI ou maîtrise d'œuvre : que choisir ?" },
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
              <h2 className="text-[22px] font-bold text-white mb-2">Étude de votre projet chalet bois</h2>
              <p className="text-[15px] text-white/60 leading-[1.7]">Faisabilité PLU, budget estimatif, artisans charpentiers bois spécialisés chalet. Mahmoud analyse votre projet gratuitement sous 48h.</p>
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
