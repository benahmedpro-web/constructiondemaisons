import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extension ossature bois : permis, coût, délais | M&M CONSTRUCTION",
  description: "Tout savoir sur l'extension ossature bois en Haute-Savoie : surface, budget, permis de construire, délais de chantier. Guide par M&M CONSTRUCTION, maître d'œuvre.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/extension-ossature-bois/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Extension ossature bois : permis, coût, délais",
  description: "Tout savoir sur l'extension ossature bois en Haute-Savoie : surface, budget, permis de construire, délais de chantier.",
  url: BASE + "/guides/extension-ossature-bois/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2025-01-15",
  dateModified: "2025-06-01",
  inLanguage: "fr-FR",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: BASE + "/guides/" },
    { "@type": "ListItem", position: 3, name: "Extension ossature bois", item: BASE + "/guides/extension-ossature-bois/" },
  ],
};

export default function GuideExtensionPage() {
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
            <span className="text-white/70">Extension ossature bois</span>
          </div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Extension</span>
          <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
            Extension ossature bois : permis, coût, délais
          </h1>
          <p className="text-white/60 text-[16px]">Par Mahmoud Ben Ahmed · M&M CONSTRUCTION · Maître d&apos;œuvre Haute-Savoie</p>
        </div>
      </div>

      <article className="bg-white py-14 px-5">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
            L&apos;extension ossature bois est devenue la solution privilégiée pour agrandir une maison en Haute-Savoie et dans l&apos;Ain. Rapide à monter, légère sur les fondations, esthétiquement adaptable — mais avec des spécificités administratives et techniques qu&apos;il faut anticiper.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Permis ou déclaration préalable : lequel vous concerne ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Le choix entre permis de construire et déclaration préalable dépend de la surface créée et de la commune :
          </p>
          <div className="border border-[#D9D4CC] overflow-hidden mb-6">
            <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
              <div>Situation</div>
              <div className="text-center">Hors zone PLU</div>
              <div className="text-center">En zone PLU</div>
            </div>
            {[
              ["Extension < 20 m²", "Déclaration préalable", "Déclaration préalable"],
              ["Extension 20–40 m²", "Permis de construire", "Déclaration préalable*"],
              ["Extension > 40 m²", "Permis de construire", "Permis de construire"],
              ["Si total > 150 m² après extension", "Permis de construire", "Permis de construire"],
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                <div className="text-[#2C2C2A] font-medium">{row[0]}</div>
                <div className="text-center text-[#888780]">{row[1]}</div>
                <div className="text-center text-[#888780]">{row[2]}</div>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-[#888780] italic mb-6">* En zone PLU, la déclaration préalable est possible pour les extensions de 20 à 40 m² si la commune compte plus de 50 000 habitants ou si votre PLU le prévoit explicitement. En Haute-Savoie, la plupart des communes exigent un permis dès 20 m².</p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Budget : combien coûte une extension bois en 2025 ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Les prix en Haute-Savoie et Ain sont supérieurs à la moyenne nationale. Fourchettes pour 2025 :
          </p>
          <div className="flex flex-col gap-2 mb-6">
            {[
              { label: "Extension bois simple (structure + étanchéité)", min: "1 200 €/m²", max: "1 600 €/m²" },
              { label: "Extension bois avec menuiseries qualité", min: "1 600 €/m²", max: "2 000 €/m²" },
              { label: "Extension premium (baies coulissantes, bardage noble)", min: "2 000 €/m²", max: "2 800 €/m²" },
              { label: "Honoraires maître d'œuvre", min: "8 %", max: "12 % des travaux" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center p-3 bg-[#F2EDE6] text-[14px]">
                <span className="text-[#2C2C2A] font-medium">{item.label}</span>
                <span className="text-[#888780]">{item.min} – {item.max}</span>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#888780] italic mb-6">Ces prix incluent les travaux de liaison avec l&apos;existant (trémie, jonction toiture, raccordements réseaux). Les frais de permis, d&apos;étude thermique et de maîtrise d&apos;œuvre viennent en supplément.</p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Délais réalistes : du projet à la livraison</h2>
          <div className="flex flex-col gap-2 mb-6">
            {[
              { phase: "Conception & avant-projet", duree: "3–6 semaines" },
              { phase: "Dépôt + instruction (déclaration préalable)", duree: "1–2 mois" },
              { phase: "Dépôt + instruction (permis de construire)", duree: "2–4 mois" },
              { phase: "Sélection artisans", duree: "3–5 semaines" },
              { phase: "Chantier ossature bois (hors d'eau, hors d'air)", duree: "4–8 semaines" },
              { phase: "Second œuvre & finitions", duree: "6–10 semaines" },
            ].map((item) => (
              <div key={item.phase} className="flex justify-between items-center p-3 bg-[#F2EDE6] text-[14px] border-b border-[#D9D4CC] last:border-0">
                <span className="text-[#2C2C2A]">{item.phase}</span>
                <span className="text-[#888780] font-medium">{item.duree}</span>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Les points de vigilance spécifiques à l&apos;extension bois</h2>
          <div className="flex flex-col gap-4">
            {[
              { titre: "La jonction ossature neuve / maçonnerie existante", corps: "C'est le point le plus critique. La liaison entre la structure bois et le mur existant (béton, parpaing, pierre) doit être étanche, isolée et conforme DTU 31.2. Un mauvais raccordement = pont thermique garanti et risque d'infiltration." },
              { titre: "La toiture de l'extension", corps: "Toiture plate (étanchéité membrane EPDM ou bitumineuse), toit terrasse ou versant dans le prolongement de l'existant : chaque option a ses contraintes techniques et d'aspect. En Haute-Savoie, la charge neigeuse impose des calculs structure spécifiques." },
              { titre: "Les raccordements réseau", corps: "Si l'extension inclut une cuisine ou une salle de bain, les raccordements plomberie dans le vide sanitaire ou la dalle existante peuvent représenter un poste de coût significatif. À chiffrer avant de valider le budget." },
            ].map((item) => (
              <div key={item.titre} className="border-t border-[#D9D4CC] pt-4">
                <h3 className="text-[16px] font-bold text-[#2C2C2A] mb-2">{item.titre}</h3>
                <p className="text-[14px] text-[#888780] leading-[1.7]">{item.corps}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <div className="border-t border-[#D9D4CC] py-10 px-5 bg-white">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Chantier en cours</p>
          <Link href="/annonces/extension-ossature-bois-thonon-les-bains-74/" className="flex gap-5 items-start no-underline group border border-[#D9D4CC] hover:border-[#BA7517] transition-colors p-4">
            <div className="flex-shrink-0 overflow-hidden w-24 h-16">
              <Image src="/images/hero-extension-bois-jardin.jpg" alt="Extension ossature bois Thonon-les-Bains" width={96} height={64} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-[15px] font-bold text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">Extension ossature bois · Thonon-les-Bains (74)</div>
              <div className="text-[13px] text-[#888780] mt-1">45 m² · 135 000 € · En cours</div>
              <div className="text-[13px] text-[#BA7517] font-medium mt-2">Suivre le chantier →</div>
            </div>
          </Link>
        </div>
      </div>

      <section className="bg-[#F2EDE6] py-12 px-5">
        <div className="max-w-[780px] mx-auto flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-2">Votre projet d&apos;extension en Haute-Savoie ?</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">Mahmoud analyse la faisabilité PLU et vous donne un budget estimatif. Gratuit, sans engagement.</p>
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
