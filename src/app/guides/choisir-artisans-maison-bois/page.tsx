import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choisir ses artisans pour une maison bois | M&M CONSTRUCTION",
  description: "Décennale, Qualibat bois, références locales : les critères concrets pour sélectionner les bons artisans pour votre chantier bois en Haute-Savoie et Ain.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/choisir-artisans-maison-bois/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment choisir ses artisans pour une maison bois ?",
  description: "Décennale, Qualibat bois, références locales : les critères concrets pour sélectionner les bons artisans pour votre chantier bois en Haute-Savoie et Ain.",
  url: BASE + "/guides/choisir-artisans-maison-bois/",
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
    { "@type": "ListItem", position: 3, name: "Choisir ses artisans bois", item: BASE + "/guides/choisir-artisans-maison-bois/" },
  ],
};

export default function GuideArtisansPage() {
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
            <span className="text-white/70">Choisir ses artisans bois</span>
          </div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Artisans</span>
          <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
            Comment choisir ses artisans pour une maison ossature bois ?
          </h1>
          <p className="text-white/60 text-[16px]">Par Mahmoud Ben Ahmed · M&M CONSTRUCTION · Maître d&apos;œuvre Haute-Savoie</p>
        </div>
      </div>

      <article className="bg-white py-14 px-5">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
            Choisir ses artisans pour une maison bois n&apos;est pas la même chose que pour une maison maçonnée. Les compétences bois sont spécifiques, les certifications importantes et les références locales décisives. Voici les critères que M&M CONSTRUCTION applique pour chaque chantier.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Pourquoi les artisans &quot;généralistes&quot; ne suffisent pas pour le bois ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Un maçon qui &quot;fait aussi du bois&quot; n&apos;est pas un charpentier bois. La construction ossature bois mobilise des compétences spécifiques : connaissance des DTU 31.2 (ossature bois) et DTU 40.29 (couverture bois), maîtrise de la membrane frein-vapeur, des techniques d&apos;étanchéité à l&apos;air, et des liaisons entre matériaux. Sans ces compétences, les défauts apparaissent souvent après livraison — condensation dans les murs, pont thermique, bardage qui se décolle.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            En Haute-Savoie et dans l&apos;Ain, les contraintes climatiques (cycles gel/dégel, neige, humidité) amplifient ces risques. Un artisan qui travaille principalement en zone méditerranéenne n&apos;a pas les mêmes réflexes qu&apos;un artisan local qui connaît les conditions hivernales alpines.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Les certifications à vérifier avant tout</h2>
          <div className="flex flex-col gap-4 mb-6">
            {[
              {
                cert: "Assurance décennale",
                detail: "Obligatoire. Demandez l&apos;attestation en cours de validité et vérifiez qu&apos;elle couvre bien les travaux de construction ossature bois. Certaines décennales excluent le bois — ça arrive.",
                obligatoire: true,
              },
              {
                cert: "Qualibat — Qualification 2111 à 2145 (bois)",
                detail: "La qualification Qualibat bois atteste d&apos;un niveau de compétence reconnu. Ce n&apos;est pas une garantie absolue, mais c&apos;est un filtre sérieux. Vérifiable sur le site Qualibat.",
                obligatoire: false,
              },
              {
                cert: "Certification ECOBOIS / Charpentiers de France",
                detail: "Label professionnel des charpentiers spécialisés bois. Rare mais très sérieux — implique une formation continue et des contrôles qualité réguliers.",
                obligatoire: false,
              },
              {
                cert: "Mention RGE (Reconnu Garant de l&apos;Environnement)",
                detail: "Indispensable si vous souhaitez bénéficier des aides à l&apos;isolation (MaPrimeRénov&apos;, CEE). Applicable pour les artisans isolation et les installateurs de systèmes de chauffage.",
                obligatoire: false,
              },
            ].map((item) => (
              <div key={item.cert} className="bg-[#F2EDE6] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-[#2C2C2A] text-[15px]">{item.cert}</span>
                  {item.obligatoire && <span className="text-[10px] font-bold uppercase tracking-wide bg-[#BA7517] text-white px-2 py-0.5">Obligatoire</span>}
                </div>
                <p className="text-[13px] text-[#888780] leading-[1.6]" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Les 6 questions à poser à chaque artisan</h2>
          <div className="flex flex-col gap-3 mb-6">
            {[
              "Avez-vous réalisé des chantiers ossature bois comparables dans les 3 dernières années ? Puis-je avoir des références avec contacts ?",
              "Votre décennale couvre-t-elle explicitement la construction ossature bois ? Pouvez-vous me remettre l'attestation ?",
              "Quels sont vos délais d'intervention et votre planning sur les 6 prochains mois ?",
              "Qui réalise les travaux : votre équipe propre ou des sous-traitants ? Les sous-traitants sont-ils également qualifiés bois ?",
              "Comment gérez-vous la jonction entre votre corps de métier et l'intervenant suivant (ex. : charpentier → menuisier) ?",
              "Avez-vous travaillé sur des chantiers en zone sismique (zone 3 ou 4, applicable en Haute-Savoie/Ain) ?",
            ].map((q, i) => (
              <div key={i} className="flex gap-3 p-4 border border-[#D9D4CC]">
                <span className="text-[#BA7517] font-black flex-shrink-0">{i + 1}.</span>
                <p className="text-[14px] text-[#888780] leading-[1.6]">{q}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Pourquoi un maître d&apos;œuvre a un réseau d&apos;artisans qu&apos;un particulier n&apos;a pas</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Un particulier qui cherche des artisans bois en Haute-Savoie va sur Pages Jaunes ou demande à ses voisins. Il obtient 2–3 noms, prend des devis, et choisit souvent le moins cher — sans savoir si cet artisan a les compétences bois requises ou si sa décennale est à jour.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8]">
            Un maître d&apos;œuvre spécialisé comme M&M CONSTRUCTION a travaillé avec des dizaines d&apos;artisans sur des années. Il sait qui respecte les délais, qui travaille proprement, qui pose des problèmes à la réception. Ce réseau ne s&apos;achète pas — il se construit chantier après chantier.
          </p>
        </div>
      </article>

      <section className="bg-[#F2EDE6] py-12 px-5">
        <div className="max-w-[780px] mx-auto flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-2">Accédez au réseau artisans M&M CONSTRUCTION</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">Décennales vérifiées, qualifications bois, références locales. On ne met sur votre chantier que des artisans qu&apos;on connaît.</p>
          </div>
          <Link href="/demande-etude/" className="flex-shrink-0 inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors self-center">
            Configurer mon projet →
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
