import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prix maison bois 150m² en Haute-Savoie | M&M CONSTRUCTION",
  description: "Budget détaillé maison ossature bois 150m² en Haute-Savoie : fondations, ossature, isolation, équipements, MOE. Fourchette réaliste poste par poste.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/prix-maison-ossature-bois-150m2/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prix maison ossature bois 150m² en Haute-Savoie — Budget estimatif 2025",
  description: "Budget détaillé par poste pour une maison ossature bois de 150m² en Haute-Savoie. Fourchettes réalistes pour un projet familial confortable, honoraires MOE inclus.",
  url: BASE + "/guides/prix-maison-ossature-bois-150m2/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2025-01-15",
  dateModified: "2026-06-25",
  inLanguage: "fr-FR",
};

const faqItems = [
    {
      "@type": "Question",
      name: "Quel budget pour une maison ossature bois de 150m² en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comptez entre 310 000 € et 420 000 € TTC hors terrain pour une maison ossature bois de 150m² en Haute-Savoie, avec honoraires maîtrise d'œuvre et VRD inclus. La fourchette basse correspond à un terrain plat, des finitions fonctionnelles et un programme sobre. La fourchette haute inclut un terrain en dénivelé, des fondations spéciales, des équipements performants (PAC, VMC double flux, photovoltaïque) et des finitions soignées.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle surface est soumise à permis de construire obligatoire en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le permis de construire est obligatoire dès que la surface de plancher ou l'emprise au sol dépasse 20m² (ou 40m² en zone urbaine couverte par un PLU). Une maison de 150m² nécessite donc obligatoirement un permis de construire, instruit par la DDT (Direction Départementale des Territoires) du 74. Le délai d'instruction est de 2 mois pour une maison individuelle, mais peut dépasser 3 à 4 mois en zone Loi Montagne ou périmètre ABF.",
      },
    },
    {
      "@type": "Question",
      name: "Une maison ossature bois de 150m² est-elle adaptée à la RE2020 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'ossature bois est l'un des systèmes constructifs les plus adaptés à la RE2020. Le bois est un matériau biosourcé à très faible empreinte carbone (Ic construction), ce qui permet d'atteindre les seuils RE2020 plus facilement que le béton ou la brique. Sur un 150m², la conception en ossature bois avec isolation soufflée haute densité permet de viser le label E+C- ou Passif sans surcoût majeur par rapport à une construction conventionnelle RE2020.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le coût du terrain pour une maison de 150m² en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le foncier est le poste le plus variable et le plus impactant. En 2025, comptez : 150 000 à 300 000 € pour un terrain de 500 à 800m² dans le Genevois (secteur Annemasse, Saint-Julien) ; 200 000 à 500 000 € autour d'Annecy (lac et communes proches) ; 120 000 à 250 000 € dans le Chablais ou les vallées alpines moins tendues. Le budget total projet pour un 150m² s'étend donc de 430 000 € à plus de 900 000 € terrain compris selon la localisation.",
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
    { "@type": "ListItem", position: 4, name: "Budget 150m²", item: BASE + "/guides/prix-maison-ossature-bois-150m2/" },
  ],
};

const postes = [
  { poste: "Terrassement & fondations", bas: "24 000", haut: "55 000", note: "Emprise au sol maximale ; fondations spéciales fréquentes sur terrain dénivelé ou argilo-calcaire" },
  { poste: "Ossature bois & charpente", bas: "48 000", haut: "78 000", note: "Structure bois complète, pannes, solives, poutres — volume le plus important des trois surfaces" },
  { poste: "Isolation & étanchéité à l'air", bas: "24 000", haut: "38 000", note: "Isolation soufflée 200 mm minimum en combles, 140 mm en parois, membrane intello, test blower door" },
  { poste: "Couverture & zinguerie", bas: "15 000", haut: "30 000", note: "Grande surface de toiture ; zinc recommandé sur les zones exposées au vent et à la neige" },
  { poste: "Menuiseries extérieures", bas: "28 000", haut: "48 000", note: "Nombreuses ouvertures pour un 150m² ; triple vitrage standard en zone montagne" },
  { poste: "Bardage & façade", bas: "15 000", haut: "30 000", note: "Surface de façade importante ; bardage douglas, mélèze, composite ou enduit chaux" },
  { poste: "Électricité, chauffage, VMC", bas: "22 000", haut: "38 000", note: "PAC air-eau avec plancher chauffant recommandé sur 150m² ; VMC double flux, domotique possible" },
  { poste: "Plomberie & sanitaires", bas: "14 000", haut: "26 000", note: "2 salles de bain ou salle de bain + salle d'eau + WC séparés, cuisine préparée" },
  { poste: "Cloisons & doublages", bas: "11 000", haut: "20 000", note: "Volume important de cloisons intérieures ; isolation phonique entre chambres" },
  { poste: "Revêtements de sol", bas: "12 000", haut: "24 000", note: "Carrelage + parquet sur 150m² — poste impacté par les choix de gamme" },
  { poste: "VRD & branchements", bas: "12 000", haut: "30 000", note: "Coût quasi fixe, indépendant de la surface — fortement variable selon la distance aux réseaux" },
  { poste: "Honoraires MOE (8–10 %)", bas: "21 000", haut: "30 000", note: "Études, DCE, direction de travaux, OPR — sur la base du coût travaux HT" },
];

export default function PrixMaison150m2Page() {
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
              <span className="text-white/70">150m²</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Estimation budgétaire</span>
            <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
              Prix maison ossature bois 150m² en Haute-Savoie
            </h1>
            <div className="flex flex-wrap gap-4 mt-4 mb-4">
              <div className="bg-white/10 px-4 py-2.5 text-center">
                <div className="text-[22px] font-black text-[#BA7517]">310 000 €</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wide">Budget bas (TTC)</div>
              </div>
              <div className="bg-white/10 px-4 py-2.5 text-center">
                <div className="text-[22px] font-black text-[#BA7517]">420 000 €</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wide">Budget haut (TTC)</div>
              </div>
              <div className="bg-white/10 px-4 py-2.5 text-center">
                <div className="text-[22px] font-black text-[#BA7517]">2 060–2 800 €</div>
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
              150m² est la surface à partir de laquelle un projet en Haute-Savoie devient un investissement significatif — et où le rôle du maître d&apos;œuvre est le plus déterminant. L&apos;écart entre un chantier bien piloté et un chantier mal maîtrisé peut dépasser 50 000 €. Voici un budget détaillé réaliste, poste par poste.
            </p>

            <div className="bg-[#F2EDE6] border border-[#D9D4CC] p-5 mb-8">
              <p className="font-bold text-[15px] text-[#2C2C2A] mb-1">Configuration type</p>
              <p className="text-[14px] text-[#888780] leading-[1.7]">
                R+1 · 4 à 5 chambres · Séjour/cuisine ouverts · 2 salles d&apos;eau + 2 WC · Garage intégré ou accolé · Ossature bois RE2020 haute performance · PAC air-eau + plancher chauffant · Terrain plat à modérément dénivelé
              </p>
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-6">Budget détaillé par poste — maison 150m²</h2>
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
                <div className="text-center font-bold text-[14px]">246 000 €</div>
                <div className="text-center font-bold text-[14px] text-[#BA7517]">447 000 €</div>
              </div>
            </div>

            <p className="text-[14px] text-[#888780] leading-[1.7] mb-8 italic">
              Hors terrain et hors taxe d&apos;aménagement. Sur un 150m², la taxe d&apos;aménagement peut représenter 8 000 à 20 000 € selon la commune. Prévoir également les frais de notaire et de branchement définitifs si la viabilisation est à réaliser.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Pourquoi le maître d&apos;œuvre est-il particulièrement rentable sur 150m² ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Plus la surface est grande, plus les enjeux financiers sont importants — et plus la valeur ajoutée du pilotage professionnel est mesurable. Sur un 150m² en Haute-Savoie, trois leviers permettent de récupérer les honoraires MOE.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              {[
                {
                  titre: "La mise en concurrence des entreprises",
                  texte: "Sur un chantier de 300 000 à 400 000 € HT de travaux, la différence entre l'offre haute et l'offre basse pour un même lot atteint souvent 20 000 à 40 000 €. Le maître d'œuvre prépare un dossier de consultation précis qui garantit que les devis sont comparables — et recommande l'offre la plus pertinente, pas forcément la moins chère.",
                },
                {
                  titre: "La détection des non-conformités en cours de chantier",
                  texte: "Sur 150m², une reprise de fondations ou un défaut d'étanchéité à l'air non détectés à temps peuvent coûter 15 000 à 30 000 €. Les visites de chantier hebdomadaires et les comptes rendus écrits permettent d'identifier ces problèmes avant qu'ils ne soient enfouis derrière les cloisons.",
                },
                {
                  titre: "La réception avec liste de réserves",
                  texte: "L'assistance à la réception avec établissement du procès-verbal de réserves est déterminante sur un grand chantier. Les réserves non levées peuvent être retenues sur le solde final de chaque entreprise — ce levier financier n'est réellement utilisable que si elles ont été formalisées par écrit à la réception.",
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

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">150m² en ossature bois et RE2020 : ce qui change</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              La RE2020 est entrée en vigueur pour les maisons individuelles en 2022. Elle impose des seuils sur deux indicateurs : la consommation d&apos;énergie primaire (Ep) et l&apos;empreinte carbone du bâtiment (Ic construction + Ic énergie). L&apos;ossature bois est naturellement avantagée sur ces deux points.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Le bois stocke du carbone pendant toute la durée de vie du bâtiment — ce qui réduit l&apos;Ic construction de façon significative par rapport au béton ou à la brique. Sur un 150m², cette différence peut représenter 20 à 30 tonnes de CO₂ évitées. En termes de budget, atteindre les seuils RE2020 avec une ossature bois bien conçue ne génère pas de surcoût majeur par rapport à une construction béton RE2020 — contrairement à ce qu&apos;on entend parfois.
            </p>

          </div>
        </article>

        {/* FAQ */}
        <section className="bg-[#F2EDE6] py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mb-8">Budget 150m² en Haute-Savoie : vos questions</h2>
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
              <Link href="/guides/prix-maison-ossature-bois-120m2/" className="block p-4 border border-[#D9D4CC] no-underline hover:border-[#BA7517] transition-colors group">
                <div className="font-bold text-[15px] text-[#2C2C2A] group-hover:text-[#BA7517]">Budget maison 120m²</div>
                <div className="text-[13px] text-[#888780] mt-1">250 000 – 340 000 € TTC</div>
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
                { href: "/guides/construction-chalet-ossature-bois-haute-savoie/", titre: "Construction chalet ossature bois en Haute-Savoie" },
                { href: "/guides/garanties-assurance-maitre-oeuvre/", titre: "Garantie décennale et assurance dommage ouvrage en MOE" },
                { href: "/guides/moe-vs-ccmi/", titre: "CCMI ou maîtrise d'œuvre : comparatif complet" },
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
              <h2 className="text-[22px] font-bold text-white mb-2">Votre projet 150m² en Haute-Savoie</h2>
              <p className="text-[15px] text-white/60 leading-[1.7]">Sur un budget de cette envergure, l&apos;étude de faisabilité est déterminante. M&M CONSTRUCTION l&apos;effectue gratuitement : budget précis, contraintes du terrain, premières orientations architecturales.</p>
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
