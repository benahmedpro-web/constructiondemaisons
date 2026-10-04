import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contrat de construction (CCMI) ou maîtrise d'œuvre : que choisir ?",
  description: "Contrat de construction de maison individuelle ou maîtrise d'œuvre : ce que chaque formule prévoit, ce qui change pour vous, sources à l'appui.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/moe-vs-ccmi/",
  },
  openGraph: { type: "article", publishedTime: "2025-01-15", modifiedTime: "2026-10-04" },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Contrat de construction (CCMI) ou maîtrise d'œuvre : que choisir pour construire en Haute-Savoie ?",
  description: "Comparatif neutre entre le contrat de construction de maison individuelle et la maîtrise d'œuvre : engagements, rôle de chacun, choix des entreprises, garanties, seuil de l'architecte.",
  url: BASE + "/guides/moe-vs-ccmi/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2025-01-15",
  dateModified: "2026-10-04",
  inLanguage: "fr-FR",
  image: "https://www.constructiondemaisons.com/images/hero-maison-bois-alpine.jpg",
};

const faqItems = [
  {
    "@type": "Question",
    name: "Quelle est la différence entre un contrat de construction de maison individuelle et un contrat de maîtrise d'œuvre ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Avec un contrat de construction de maison individuelle (CCMI), une entreprise unique s'engage envers vous sur la construction, à un prix et dans un délai convenus au contrat, avec une garantie de livraison. Avec un contrat de maîtrise d'œuvre, le maître d'œuvre conçoit, consulte les entreprises et suit le chantier ; vous signez ensuite avec chaque entreprise de travaux. Un contrat de maîtrise d'œuvre ne relève pas du régime du CCMI.",
    },
  },
  {
    "@type": "Question",
    name: "Un maître d'œuvre offre-t-il une garantie de livraison à prix et délais convenus ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Non. La garantie de livraison à prix et délais convenus est propre au contrat de construction de maison individuelle ; un contrat de maîtrise d'œuvre n'en relève pas (DGCCRF). Si cette garantie est votre priorité, le contrat de construction est la formule adaptée. Si vous préférez choisir vous-même les entreprises et voir chaque devis, la maîtrise d'œuvre répond mieux à ce besoin.",
    },
  },
  {
    "@type": "Question",
    name: "Peut-on choisir ses entreprises ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Avec un contrat de construction, c'est l'entreprise contractante qui organise la réalisation et choisit les professionnels qui interviennent. Avec la maîtrise d'œuvre, le maître d'œuvre consulte plusieurs entreprises, analyse les offres et vous recommande ; vous signez directement avec celles que vous retenez.",
    },
  },
  {
    "@type": "Question",
    name: "Un architecte est-il obligatoire ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Pour un particulier, le recours à un architecte est obligatoire pour le projet architectural de la demande de permis de construire au-delà de 150 m² de surface de plancher (article R431-2 du code de l'urbanisme). Le seuil s'apprécie en surface de plancher, qui n'est pas la surface habitable. Il vaut quelle que soit la formule choisie ; faites relire votre situation par un professionnel.",
    },
  },
  {
    "@type": "Question",
    name: "Combien coûte un maître d'œuvre ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Un maître d'œuvre est rémunéré par des honoraires de mission, distincts du coût des travaux et présentés avant tout engagement. Notre guide sur les honoraires détaille la méthode.",
    },
  },
  {
    "@type": "Question",
    name: "La formule change-t-elle les règles d'urbanisme, de séisme ou d'énergie ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Non. Le plan local d'urbanisme de la commune, le zonage sismique (zone 3 ou 4 selon la commune dans le Genevois), l'étude de sol et la RE2020 s'appliquent à toute maison neuve, quelle que soit la formule. Vérifiez-les avant de choisir.",
    },
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems,
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: BASE + "/guides/" },
    { "@type": "ListItem", position: 3, name: "Contrat de construction ou maîtrise d'œuvre", item: BASE + "/guides/moe-vs-ccmi/" },
  ],
};

export default function GuideMoeVsCcmiPage() {
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
              <span className="text-white/70">Contrat de construction ou maîtrise d&apos;œuvre</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Guide comparatif</span>
            <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
              Contrat de construction (CCMI) ou maîtrise d&apos;œuvre : que choisir pour construire en Haute-Savoie ?
            </h1>
          <Link href="/a-propos/" className="inline-flex items-center gap-3 no-underline group mt-4">
            <Image
              src="/images/mahmoud-ben-ahmed.jpg"
              alt="Mahmoud Ben Ahmed, maître d'œuvre"
              width={40}
              height={40}
              className="rounded-full object-cover object-top flex-shrink-0"
            />
            <div>
              <span className="block text-[14px] font-bold text-white group-hover:text-[#BA7517] transition-colors leading-tight">
                Mahmoud Ben Ahmed
              </span>
              <span className="block text-[12px] text-white/50">
                Maître d'œuvre · M&M CONSTRUCTION · Haute-Savoie
              </span>
            </div>
          </Link>
            <p className="text-white/40 text-[13px]">Mis à jour le 4 octobre 2026</p>
          </div>
        </div>

        {/* Article */}
        <article className="bg-white py-14 px-5">
          <div className="max-w-[780px] mx-auto">

            <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
              Pour faire construire une maison en Haute-Savoie, deux formules reviennent le plus souvent : le contrat de construction de maison individuelle (CCMI) et le contrat de maîtrise d&apos;œuvre. Elles répondent à des besoins différents. Ce guide décrit ce que chacune prévoit, ce qui change pour vous, et ce qui s&apos;applique dans les deux cas. Il ne donne pas de préférence générale : la bonne formule dépend de votre projet.
            </p>

            <div className="bg-[#F2EDE6] border-l-4 border-[#BA7517] p-5 mb-8">
              <p className="text-[15px] text-[#2C2C2A] leading-[1.8] font-medium">
                En bref : le contrat de construction engage une entreprise unique sur un prix et un délai convenus, avec une garantie de livraison. La maîtrise d&apos;œuvre vous laisse choisir les entreprises et voir chaque devis, sans cette garantie de livraison. Les règles d&apos;urbanisme, de séisme et d&apos;énergie s&apos;appliquent dans les deux cas.
              </p>
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Le contrat de construction de maison individuelle</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Le contrat de construction de maison individuelle est encadré par la loi. Il lie le particulier à une entreprise unique, qui s&apos;engage sur la réalisation de la maison. Il offre une garantie de livraison à prix et délais convenus (DGCCRF).
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Cette formule est cohérente si votre priorité est un prix et un délai fixés au contrat, avec un seul interlocuteur. Comparez plusieurs offres à prestations équivalentes, et lisez ce que le contrat prévoit pour les modifications en cours de chantier.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Le contrat de maîtrise d&apos;œuvre</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Le maître d&apos;œuvre conçoit le projet avec vous, prépare la consultation des entreprises, analyse les offres et suit le chantier. Il est rémunéré par des honoraires de mission, par vous. Vous signez ensuite avec chaque entreprise de travaux. Un contrat de maîtrise d&apos;œuvre ne relève pas du régime du contrat de construction de maison individuelle, et n&apos;offre donc pas la garantie de livraison à prix et délais convenus (DGCCRF).
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              En contrepartie, vous choisissez les entreprises sur la base de devis comparés, et vous voyez chaque poste. Cette formule demande de s&apos;impliquer dans les décisions principales. Le coût final dépend des devis retenus. Pour la rémunération du maître d&apos;œuvre, consultez notre guide sur les <Link href="/guides/honoraires-maitre-oeuvre/" className="text-[#BA7517] hover:underline">honoraires</Link>.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-6">Comparatif point par point</h2>
            <div className="border border-[#D9D4CC] overflow-hidden mb-8">
              <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Critère</div>
                <div className="text-center">Contrat de construction</div>
                <div className="text-center text-[#BA7517]">Maîtrise d&apos;œuvre</div>
              </div>
              {[
                ["Interlocuteur contractuel", "Une entreprise unique", "Le maître d'œuvre, puis chaque entreprise de travaux"],
                ["Prix et délais", "Convenus au contrat", "Résultent des devis retenus"],
                ["Garantie de livraison à prix et délais convenus", "Oui (DGCCRF)", "Non : ce contrat n'en relève pas (DGCCRF)"],
                ["Choix des entreprises", "Par l'entreprise contractante", "Par vous, sur recommandation du maître d'œuvre"],
                ["Visibilité sur les devis", "Selon le contrat", "Devis comparés, poste par poste"],
                ["Rémunération", "Comprise dans le prix du contrat", "Honoraires de mission, distincts des travaux"],
                ["Implication demandée", "Plus limitée", "Plus forte : décisions principales"],
                ["Seuil de 150 m² (architecte)", "S'applique", "S'applique"],
                ["Urbanisme, séisme, RE2020", "S'appliquent", "S'appliquent"],
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="text-[#2C2C2A] font-medium">{row[0]}</div>
                  <div className="text-center text-[#888780]">{row[1]}</div>
                  <div className="text-center text-[#2C2C2A] font-medium">{row[2]}</div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#888780] leading-[1.7] mb-4">
              Ce tableau décrit les deux formules d&apos;après la DGCCRF, le code de l&apos;urbanisme et le service public. Les prestations réelles dépendent du contrat signé : lisez-le avant de vous engager.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Ce qui s&apos;applique dans les deux cas</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              <strong className="text-[#2C2C2A]">L&apos;architecte.</strong> Pour un particulier, le recours à un architecte est obligatoire pour le projet architectural de la demande de permis au-delà de 150 m² de surface de plancher (article R431-2 du code de l&apos;urbanisme). Le seuil s&apos;apprécie en surface de plancher, qui n&apos;est pas la surface habitable. Voir notre guide sur le <Link href="/guides/permis-construire-genevois/" className="text-[#BA7517] hover:underline">permis de construire</Link>.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              <strong className="text-[#2C2C2A]">Le terrain et les règles locales.</strong> Le PLU de la commune encadre l&apos;aspect extérieur et l&apos;emprise ; la pente et l&apos;accès modifient les fondations et le chantier, et l&apos;étude de sol définit les fondations. Dans le Genevois, les communes sont en zone sismique 3 ou 4 selon leur situation (décret du 22 octobre 2010) : Annemasse, Gaillard et Annecy en zone 4, le canton de Saint-Julien et le Pays de Gex en zone 3.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              <strong className="text-[#2C2C2A]">L&apos;énergie.</strong> La RE2020 s&apos;applique à toute maison neuve, quelle que soit la formule contractuelle. Voir notre guide <Link href="/guides/re2020-maison-bois/" className="text-[#BA7517] hover:underline">RE2020 et maison ossature bois</Link>.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              <strong className="text-[#2C2C2A]">Les assurances.</strong> Dans les deux cas, demandez à chaque professionnel ses attestations d&apos;assurance en cours de validité avant de signer, et souscrivez l&apos;assurance dommages-ouvrage avant l&apos;ouverture du chantier (ANIL, DGCCRF).
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Quelle formule pour quel besoin ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Le contrat de construction peut convenir si votre priorité est un prix et un délai fixés au contrat, avec un seul interlocuteur et moins d&apos;implication de votre part. Comparez plusieurs offres à prestations équivalentes et vérifiez les références dans votre secteur.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              La maîtrise d&apos;œuvre peut convenir si vous voulez une maison sur mesure, choisir les entreprises, voir chaque devis, et que vous acceptez de vous impliquer dans les décisions principales. Elle ne vous apporte pas la garantie de livraison à prix et délais convenus : sachez-le avant de choisir.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8]">
              Quelle que soit la formule, posez les mêmes questions : qui signe quoi, qui choisit les entreprises, ce qui est inclus dans le prix, ce qui se passe en cas de modification ou de retard.
            </p>

            {/* Sources */}
            <div className="border-t border-[#D9D4CC] mt-10 pt-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#888780] mb-3">Sources</p>
              <ul className="flex flex-col gap-1.5 list-none p-0">
                <li><a href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/le-contrat-de-construction-de-maison-individuelle-ccmi-offre-une" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Le contrat de construction de maison individuelle offre une protection — DGCCRF (2019) ↗</a></li>
                <li><a href="https://www.service-public.fr/particuliers/vosdroits/F2022" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Contrat de construction de maison individuelle — service-public.fr ↗</a></li>
                <li><a href="https://www.ffbatiment.fr/gestion-entreprise/organiser-mon-chantier/autorisations-regles-durbanisme/dossier-ba/ou-en-est-on-aujourd-hui-apres-la-baisse-du-seuil-a-150-m2" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Seuil de 150 m² et recours à l&apos;architecte — FFB (2017) ↗</a></li>
                <li><a href="https://www.anil.org/votre-besoin/construire/les-etapes-de-la-construction/assurances-de-la-construction/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Assurances de la construction — ANIL (2025) ↗</a></li>
                <li><a href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques-et-les-faq/assurance-de-dommages-ouvrage-quelle-est-la-reglementation" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Assurance dommages-ouvrage — DGCCRF (2018) ↗</a></li>
                <li><a href="https://aida.ineris.fr/reglementation/decret-ndeg-2010-1255-221010-portant-delimitation-zones-sismicite-territoire" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Décret n° 2010-1255, zonage sismique — AIDA-INERIS ↗</a></li>
              </ul>
            </div>

          </div>
        </article>

        {/* FAQ */}
        <section className="bg-[#F2EDE6] py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mb-8">Contrat de construction ou maîtrise d&apos;œuvre : vos questions</h2>
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


        {/* Guides liés */}
        <div className="bg-[#F2EDE6] py-10 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Guides utiles</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/faire-construire-haute-savoie/", titre: "Faire construire votre maison en Haute-Savoie : le guide complet" },
                { href: "/guides/coordonner-chantier-bois/", titre: "Comment coordonner un chantier maison bois ?" },
                { href: "/guides/permis-construire-genevois/", titre: "Permis de construire dans le Grand Genève" },
                { href: "/guides/re2020-maison-bois/", titre: "RE2020 et maison ossature bois : ce qui change" },
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
              <h2 className="text-[22px] font-bold text-white mb-2">Vous hésitez encore ?</h2>
              <p className="text-[15px] text-white/60 leading-[1.7]">Décrivez votre projet : nous vous disons ce qu&apos;un maître d&apos;œuvre ferait sur votre terrain, et dans quels cas un contrat de construction vous conviendrait mieux. Premier échange gratuit, sans engagement.</p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors text-center">
                Décrire mon projet →
              </Link>
              <a href="tel:+33480161783" className="inline-block border border-white/30 text-white text-[14px] px-6 py-2.5 no-underline hover:border-white transition-colors text-center">
                Appeler directement
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
