import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RE2020 et maison bois en Haute-Savoie : ce qui change | M&M CONSTRUCTION",
  description: "La RE2020 favorise-t-elle l'ossature bois ? Exigences concrètes pour construire en zone alpine en 2025. Guide par M&M CONSTRUCTION, maître d'œuvre Haute-Savoie.",
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "RE2020 et maison bois en Haute-Savoie : ce qui change",
  description: "La RE2020 favorise-t-elle l'ossature bois ? Exigences concrètes pour construire en zone alpine en 2025.",
  url: BASE + "/guides/re2020-maison-bois/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  dateModified: "2025-06-01",
  inLanguage: "fr-FR",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: BASE + "/guides/" },
    { "@type": "ListItem", position: 3, name: "RE2020 & maison bois", item: BASE + "/guides/re2020-maison-bois/" },
  ],
};

export default function GuideRe2020Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
    <main>
      <div className="bg-[#2C2C2A] py-16 px-5">
        <div className="max-w-[780px] mx-auto">
          <div className="flex gap-2 text-[13px] text-white/40 mb-4">
            <Link href="/" className="text-white/40 no-underline hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/guides/" className="text-white/40 no-underline hover:text-white">Guides</Link>
            <span>/</span>
            <span className="text-white/70">RE2020 & maison bois</span>
          </div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Réglementation</span>
          <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
            RE2020 : ce que ça change pour une maison bois en Haute-Savoie
          </h1>
          <p className="text-white/60 text-[16px]">Par Mahmoud Ben Ahmed · M&M CONSTRUCTION · Maître d&apos;œuvre Haute-Savoie</p>
        </div>
      </div>

      <article className="bg-white py-14 px-5">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
            La RE2020 (Réglementation Environnementale 2020) est en vigueur pour toutes les maisons individuelles dont le permis a été déposé après le 1er janvier 2022. Elle remplace la RT2012 et intègre pour la première fois un indicateur carbone. Pour la maison ossature bois, c&apos;est globalement une bonne nouvelle — mais attention aux idées reçues.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Les 3 piliers de la RE2020</h2>
          <div className="flex flex-col gap-4 mb-6">
            {[
              { titre: "Bbio — Besoin bioclimatique", corps: "Mesure le besoin en énergie du bâtiment indépendamment des systèmes. Exige une conception bioclimatique : orientation, compacité, surfaces vitrées maîtrisées. La maison bois excelle ici grâce à son enveloppe performante." },
              { titre: "Cep — Consommation d'énergie primaire", corps: "Mesure la consommation effective en chauffage, eau chaude, éclairage, auxiliaires. Le seuil est plus strict qu'en RT2012. Le chauffage au bois (granulés, bûches) est très favorable à cet indicateur." },
              { titre: "Ic énergie & Ic construction (carbone)", corps: "Nouveauté RE2020 : l'empreinte carbone de la construction est prise en compte. Le bois stocke le CO₂ — ce qui lui confère un avantage structurel sur le béton et la maçonnerie traditionnelle." },
            ].map((item) => (
              <div key={item.titre} className="bg-[#F2EDE6] p-5 border-l-[3px] border-[#BA7517]">
                <div className="font-bold text-[#2C2C2A] text-[16px] mb-2">{item.titre}</div>
                <div className="text-[14px] text-[#888780] leading-[1.7]">{item.corps}</div>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Pourquoi la RE2020 favorise le bois</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            L&apos;indicateur carbone Ic construction pénalise les matériaux à fort impact carbone (béton armé, acier) et valorise les matériaux biosourcés comme le bois, la ouate de cellulose ou la laine de bois. Une maison ossature bois bien conçue atteint plus facilement les seuils RE2020 qu&apos;une maison maçonnée traditionnelle — à conception architecturale équivalente.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Concrètement, le bois en structure stocke environ 1 tonne de CO₂ par m³ de bois utilisé. Pour une maison de 120 m², c&apos;est un stock de carbone significatif sur la durée de vie du bâtiment.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Ce que ça change concrètement pour votre projet en Haute-Savoie</h2>
          <div className="flex flex-col gap-3 mb-6">
            {[
              { point: "Étude thermique RE2020 obligatoire", detail: "Vous devez faire réaliser une étude thermique par un bureau d'études agréé avant dépôt du permis. M&M CONSTRUCTION coordonne cette mission." },
              { point: "Suppression des chaudières gaz en maison neuve", detail: "La RE2020 interdit les systèmes de chauffage à énergie fossile principale en construction neuve. Pompe à chaleur, chauffage bois ou hybride sont les solutions en zone alpine." },
              { point: "Exigences renforcées en zone H1c (Haute-Savoie/Ain)", detail: "La zone climatique H1c (montagne) impose des coefficients Bbio plus stricts. L'ossature bois avec isolation renforcée (R > 5 en mur) répond naturellement à ces exigences." },
              { point: "Attestation RE2020 à la réception", detail: "En plus de l'attestation à la demande de permis, une attestation de conformité RE2020 doit être produite à la réception. Le maître d'œuvre coordonne ce process." },
            ].map((item) => (
              <div key={item.point} className="flex gap-4 p-4 bg-[#F2EDE6] items-start">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <div>
                  <div className="font-bold text-[#2C2C2A] text-[15px] mb-1">{item.point}</div>
                  <div className="text-[13px] text-[#888780] leading-[1.6]">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Le label E+C- (énergie positive & carbone réduit) : aller plus loin</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8]">
            La RE2020 est le plancher réglementaire. Des labels volontaires comme le label E+C- ou la certification NF Habitat HQE permettent d&apos;aller plus loin — et peuvent ouvrir droit à des aides PTZ bonifiées ou des avantages fiscaux locaux. En Haute-Savoie, certaines communes du Genevois accompagnent financièrement les constructions biosourcées. M&M CONSTRUCTION peut vous orienter sur les aides disponibles sur votre commune.
          </p>
        </div>
      </article>

      <section className="bg-[#F2EDE6] py-12 px-5">
        <div className="max-w-[780px] mx-auto flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-2">Votre projet RE2020 en zone alpine</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">Mahmoud vous explique concrètement les exigences RE2020 pour votre terrain et votre programme. Premier échange gratuit.</p>
          </div>
          <Link href="/demande-etude/" className="flex-shrink-0 inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors self-center">
            Demande d&apos;étude →
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
