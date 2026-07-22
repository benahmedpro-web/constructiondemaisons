import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prix maison bois 120m² en Haute-Savoie | M&M CONSTRUCTION",
  description: "Budget détaillé maison ossature bois 120m² en Haute-Savoie : terrassement, charpente, isolation, menuiseries, MOE. Fourchette réaliste poste par poste.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/prix-maison-ossature-bois-120m2/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prix maison ossature bois 120m² en Haute-Savoie — Budget estimatif 2025",
  description: "Budget détaillé par poste pour une maison ossature bois de 120m² en Haute-Savoie. Fourchettes réalistes pour un projet familial 4-5 pièces, honoraires MOE inclus.",
  url: BASE + "/guides/prix-maison-ossature-bois-120m2/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2025-01-15",
  dateModified: "2026-06-25",
  inLanguage: "fr-FR",
};

const faqItems = [
    {
      "@type": "Question",
      name: "Quel budget prévoir pour une maison ossature bois de 120m² en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comptez entre 250 000 € et 340 000 € TTC hors terrain pour une maison ossature bois de 120m² en Haute-Savoie, honoraires maîtrise d'œuvre et VRD inclus. La fourchette basse correspond à un terrain plan, des finitions standards et un chauffage au poêle à bois. La fourchette haute intègre un terrain en dénivelé, des fondations spéciales, un système PAC air-eau et des menuiseries triple vitrage.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence de budget entre un R+1 et un plain-pied de 120m² ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un R+1 de 120m² (60m² par niveau) est généralement moins coûteux qu'un plain-pied de même surface. L'emprise au sol réduite diminue le coût des fondations et de la toiture. En revanche, l'escalier, les refends porteurs et la dalle de l'étage représentent un surcoût d'environ 8 000 à 15 000 €. Le bilan est souvent légèrement favorable au R+1 sur les terrains plats, et clairement favorable sur les terrains en dénivelé.",
      },
    },
    {
      "@type": "Question",
      name: "Le prix au m² baisse-t-il quand la surface augmente ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, dans une certaine mesure. Certains postes comme les fondations, les branchements VRD et les équipements (tableau électrique, PAC, VMC) ont un coût fixe qui se dilue sur une surface plus grande. Le prix au m² d'un 120m² est généralement 3 à 8 % inférieur à celui d'un 100m², toutes choses égales par ailleurs.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on agrandir une maison ossature bois de 100m² à 120m² plus tard ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, et c'est même l'un des avantages de la construction bois. L'ossature bois se prête à l'extension par ajout de modules ou d'une aile supplémentaire. Il faut cependant anticiper cela dès la conception initiale : fondations surdimensionnées, mur pignon accessible, réseaux préparés. M&M CONSTRUCTION intègre ces possibilités d'évolution dans les études de faisabilité.",
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
    { "@type": "ListItem", position: 4, name: "Budget 120m²", item: BASE + "/guides/prix-maison-ossature-bois-120m2/" },
  ],
};

const postes = [
  { poste: "Terrassement & fondations", bas: "20 000", haut: "45 000", note: "Emprise plus grande qu'un 100m² ; fondations parasismiques et drainage si terrain argileux" },
  { poste: "Ossature bois & charpente", bas: "38 000", haut: "62 000", note: "Murs ossature bois, solives, charpente — volume plus important que le 100m²" },
  { poste: "Isolation & étanchéité à l'air", bas: "19 000", haut: "31 000", note: "Isolation soufflée ouate de cellulose, frein-vapeur intello, test pressurisation" },
  { poste: "Couverture & zinguerie", bas: "12 000", haut: "24 000", note: "Surface de toiture supérieure ; tuile, bac acier ou zinc selon PLU" },
  { poste: "Menuiseries extérieures", bas: "22 000", haut: "38 000", note: "Plus de fenêtres et baies pour 120m² ; triple vitrage recommandé en zone montagne" },
  { poste: "Bardage & façade", bas: "12 000", haut: "24 000", note: "Bardage bois brûlé, composite ou enduit — surface de façade plus importante" },
  { poste: "Électricité, chauffage, VMC", bas: "20 000", haut: "32 000", note: "PAC air-eau ou poêle à bois + insert, VMC double flux, tableau élargi" },
  { poste: "Plomberie & sanitaires", bas: "12 000", haut: "22 000", note: "Salle de bain + salle d'eau ou WC supplémentaire selon programme" },
  { poste: "Cloisons & doublages", bas: "9 000", haut: "16 000", note: "Plaquisterie intérieure — volume supérieur au 100m²" },
  { poste: "Revêtements de sol", bas: "9 000", haut: "18 000", note: "Parquet, carrelage ou béton ciré sur 120m² de surface habitable" },
  { poste: "VRD & branchements", bas: "12 000", haut: "28 000", note: "Voirie, eau, électricité, assainissement — coût indépendant de la surface" },
  { poste: "Honoraires MOE (8–10 %)", bas: "17 000", haut: "24 000", note: "Études, DCE, direction de travaux, OPR — basés sur le coût travaux HT" },
];

export default function PrixMaison120m2Page() {
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
              <span className="text-white/70">120m²</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Estimation budgétaire</span>
            <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
              Prix maison ossature bois 120m² en Haute-Savoie
            </h1>
            <div className="flex flex-wrap gap-4 mt-4 mb-4">
              <div className="bg-white/10 px-4 py-2.5 text-center">
                <div className="text-[22px] font-black text-[#BA7517]">250 000 €</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wide">Budget bas (TTC)</div>
              </div>
              <div className="bg-white/10 px-4 py-2.5 text-center">
                <div className="text-[22px] font-black text-[#BA7517]">340 000 €</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wide">Budget haut (TTC)</div>
              </div>
              <div className="bg-white/10 px-4 py-2.5 text-center">
                <div className="text-[22px] font-black text-[#BA7517]">2 080–2 830 €</div>
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
              120m² est la surface la plus demandée pour un projet familial en Haute-Savoie : 4 pièces, un bureau ou une chambre d&apos;ami, deux salles d&apos;eau. La configuration R+1 est souvent préférable sur les terrains en dénivelé — elle limite l&apos;emprise au sol et réduit le coût des fondations. Voici le détail budgétaire poste par poste.
            </p>

            <div className="bg-[#F2EDE6] border border-[#D9D4CC] p-5 mb-8">
              <p className="font-bold text-[15px] text-[#2C2C2A] mb-1">Configuration type</p>
              <p className="text-[14px] text-[#888780] leading-[1.7]">
                R+1 ou plain-pied · 4 chambres · Séjour/cuisine ouverts · 1 salle de bain + 1 salle d&apos;eau + 2 WC · Ossature bois RE2020 · PAC air-eau ou poêle à bois + insert · Terrain plat à modérément dénivelé
              </p>
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-6">Budget détaillé par poste — maison 120m²</h2>
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
                <div className="text-center font-bold text-[14px]">202 000 €</div>
                <div className="text-center font-bold text-[14px] text-[#BA7517]">364 000 €</div>
              </div>
            </div>

            <p className="text-[14px] text-[#888780] leading-[1.7] mb-8 italic">
              Ces estimations s&apos;entendent hors terrain et hors taxe d&apos;aménagement. Prévoyez 6 000 à 15 000 € de taxe d&apos;aménagement selon la commune et la surface taxable de votre projet.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">R+1 ou plain-pied pour 120m² en Haute-Savoie ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              C&apos;est l&apos;une des premières questions que pose la conception. La réponse dépend du terrain et du PLU.
            </p>
            <div className="border border-[#D9D4CC] overflow-hidden mb-8">
              <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Critère</div>
                <div className="text-center">Plain-pied</div>
                <div className="text-center text-[#BA7517]">R+1</div>
              </div>
              {[
                ["Emprise au sol", "120m²", "60m² (moindre impact PLU)"],
                ["Fondations", "Plus coûteuses (grande dalle)", "Moins coûteuses (petite dalle)"],
                ["Toiture", "Plus grande surface", "Surface réduite"],
                ["Accessibilité PMR", "Naturelle", "Escalier obligatoire"],
                ["Terrain en dénivelé", "Problématique", "Adapté (un niveau suit la pente)"],
                ["Confort acoustique", "Idéal (tout de plain-pied)", "Bruits entre niveaux à gérer"],
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-[1fr_1fr_1fr] p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="text-[#2C2C2A] font-medium">{row[0]}</div>
                  <div className="text-center text-[#888780]">{row[1]}</div>
                  <div className="text-center text-[#2C2C2A]">{row[2]}</div>
                </div>
              ))}
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Ce qui fait varier le budget d&apos;un 120m² en Haute-Savoie</h2>
            <div className="flex flex-col gap-4 mb-8">
              {[
                {
                  titre: "La configuration du terrain",
                  texte: "Sur un terrain plat et bien desservi, les fondations représentent 8 à 10 % du budget travaux. Sur un terrain à 25 % de dénivelé avec accès étroit, ce poste peut atteindre 15 à 20 % — soit 30 000 à 45 000 € supplémentaires à cause des fondations spéciales, du terrassement en déblai/remblai et des murs de soutènement.",
                },
                {
                  titre: "Le niveau de finitions",
                  texte: "Le choix des revêtements de sol, de la cuisine et des équipements sanitaires peut faire varier le budget de 20 000 à 40 000 € sur un 120m². Ces postes sont réalisés en fin de chantier : il est possible de prévoir des réservations et de les réaliser soi-même en autoconstruction partielle pour réduire les coûts.",
                },
                {
                  titre: "Le système de chauffage",
                  texte: "Un poêle à bois + insert coûte 8 000 à 12 000 €. Une PAC air-eau avec plancher chauffant représente 18 000 à 28 000 €. La PAC offre un confort supérieur (chauffage ET eau chaude sanitaire) mais un investissement initial plus élevé. Sur une maison bien isolée RE2020, les deux systèmes sont pertinents selon l'usage.",
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

          </div>
        </article>

        {/* FAQ */}
        <section className="bg-[#F2EDE6] py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mb-8">Budget 120m² en Haute-Savoie : vos questions</h2>
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
              <Link href="/guides/prix-maison-ossature-bois-100m2/" className="block p-4 border border-[#D9D4CC] no-underline hover:border-[#BA7517] transition-colors group">
                <div className="font-bold text-[15px] text-[#2C2C2A] group-hover:text-[#BA7517]">Budget maison 100m²</div>
                <div className="text-[13px] text-[#888780] mt-1">210 000 – 290 000 € TTC</div>
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
                { href: "/maison-ossature-bois-annecy/", titre: "Maison ossature bois à Annecy — spécificités locales" },
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
              <h2 className="text-[22px] font-bold text-white mb-2">Votre projet 120m² en Haute-Savoie</h2>
              <p className="text-[15px] text-white/60 leading-[1.7]">M&M CONSTRUCTION affine le budget sur la base de votre terrain et de votre programme. Étude de faisabilité gratuite, premier échange sans engagement.</p>
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
