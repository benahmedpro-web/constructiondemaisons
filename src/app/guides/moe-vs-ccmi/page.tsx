import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maîtrise d'œuvre vs CCMI : quelles différences concrètes ? | M&M CONSTRUCTION",
  description: "Comparaison objective MOE vs CCMI : budget, liberté de choix, garanties, suivi de chantier. Ce que vous gagnez avec un maître d'œuvre spécialisé bois.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/moe-vs-ccmi/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Maîtrise d'œuvre vs CCMI : quelles différences concrètes ?",
  description: "Comparaison objective MOE vs CCMI : budget, liberté de choix, garanties, suivi de chantier. Ce que vous gagnez avec un maître d'œuvre spécialisé bois.",
  url: BASE + "/guides/moe-vs-ccmi/",
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
    { "@type": "ListItem", position: 3, name: "MOE vs CCMI", item: BASE + "/guides/moe-vs-ccmi/" },
  ],
};

export default function GuideMoeVsCcmiPage() {
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
            <span className="text-white/70">MOE vs CCMI</span>
          </div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Comparatif</span>
          <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
            Maîtrise d&apos;œuvre vs CCMI : quelles différences concrètes ?
          </h1>
          <p className="text-white/60 text-[16px]">Par Mahmoud Ben Ahmed · M&M CONSTRUCTION · Maître d&apos;œuvre Haute-Savoie</p>
        </div>
      </div>

      <article className="bg-white py-14 px-5">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
            CCMI ou maître d&apos;œuvre : c&apos;est souvent la première question que se posent les particuliers. Les deux permettent de faire construire une maison. Mais les implications en termes de liberté, de budget, de garanties et de suivi sont très différentes. Voici un comparatif objectif.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Le CCMI (Contrat de Construction de Maison Individuelle) : ce que c&apos;est vraiment</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Le CCMI est un contrat réglementé par la loi du 19 décembre 1990. Il lie le particulier à un constructeur qui prend en charge la conception et la réalisation de la maison. Le constructeur est responsable de l&apos;ensemble : il choisit ses artisans (souvent des sous-traitants), fixe son propre prix et vous garantit un prix et des délais.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Les avantages du CCMI : un prix global garanti, une garantie de livraison (GFA), et une responsabilité unique en cas de problème. C&apos;est rassurant sur le papier.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Les limites réelles : vous choisissez dans un catalogue. Vous ne choisissez pas vos artisans. Le constructeur intègre une marge sur chaque poste. Les options sont souvent chiffrées a posteriori, une fois le contrat signé. Et la &quot;garantie de livraison&quot; couvre le délai, pas la qualité.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">La maîtrise d&apos;œuvre : un professionnel qui travaille pour vous</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Le maître d&apos;œuvre n&apos;est pas un vendeur de maisons. C&apos;est un professionnel indépendant qui vous représente auprès des artisans, des architectes et des administrations. Il est rémunéré par vous (honoraires en % du coût des travaux ou forfait), et n&apos;a aucun intérêt à gonfler les prix des matériaux ou à choisir des artisans qui lui versent des commissions.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Vous choisissez vos artisans sur la base des devis qu&apos;il met en concurrence. Vous signez directement avec chaque artisan. Vous avez une visibilité totale sur ce que coûte chaque poste.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-6">Comparatif point par point</h2>
          <div className="border border-[#D9D4CC] overflow-hidden mb-6">
            <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
              <div>Critère</div>
              <div className="text-center">CCMI</div>
              <div className="text-center text-[#BA7517]">MOE (M&M)</div>
            </div>
            {[
              ["Choix du design", "Catalogue imposé", "Sur mesure"],
              ["Choix des artisans", "Sous-traitants du constructeur", "Artisans locaux vérifiés"],
              ["Transparence des prix", "Prix global, marges opaques", "Devis comparatifs, tout visible"],
              ["Suivi de chantier", "Variable selon constructeur", "Visites régulières, CR écrits"],
              ["Garanties légales", "GFA + décennale", "Décennale de chaque artisan"],
              ["Honoraires", "Intégrés au prix (non visibles)", "8–12 % du coût travaux"],
              ["Liberté de modification", "Limitée (avenant = surcoût)", "Flexible en conception"],
              ["Spécialisation bois", "Souvent généraliste", "Spécialisé bois (M&M)"],
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                <div className="text-[#2C2C2A] font-medium">{row[0]}</div>
                <div className="text-center text-[#888780]">{row[1]}</div>
                <div className="text-center text-[#2C2C2A] font-medium">{row[2]}</div>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Le CCMI coûte-t-il vraiment moins cher ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            C&apos;est le mythe le plus répandu. Le CCMI affiche un prix global apparent — mais il inclut la marge du constructeur sur les matériaux, sur la sous-traitance et parfois sur les financements. Des études comparatives montrent que pour un projet équivalent, la maîtrise d&apos;œuvre revient souvent au même prix, voire moins cher — car les artisans sont mis en concurrence sur votre projet spécifique.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8]">
            Les honoraires du maître d&apos;œuvre (8–12 %) sont souvent compensés par les économies réalisées à la mise en concurrence. Et vous payez pour un professionnel qui travaille dans votre intérêt — pas dans celui du constructeur.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Qui devrait choisir la maîtrise d&apos;œuvre ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8]">
            La MOE est idéale si vous voulez une maison sur mesure (terrain atypique, programme spécifique, contraintes architecturales), si vous voulez de la transparence sur les prix et les artisans, et si vous cherchez un spécialiste — notamment pour une maison ossature bois en Haute-Savoie où les contraintes techniques et climatiques sont réelles. Le CCMI peut convenir à quelqu&apos;un qui veut une maison standard, rapidement, sans s&apos;impliquer dans le choix des artisans.
          </p>
        </div>
      </article>

      <div className="border-t border-[#D9D4CC] py-10 px-5 bg-white">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Projet réalisé en MOE</p>
          <Link href="/annonces/maison-ossature-bois-gex-01/" className="flex gap-5 items-start no-underline group border border-[#D9D4CC] hover:border-[#BA7517] transition-colors p-4">
            <div className="flex-shrink-0 overflow-hidden w-24 h-16">
              <Image src="/images/hero-extension-bois-jardin.jpg" alt="Maison ossature bois Gex" width={96} height={64} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-[15px] font-bold text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">Maison ossature bois · Gex (01)</div>
              <div className="text-[13px] text-[#888780] mt-1">130 m² · 400 000 € · Livré — budget respecté</div>
              <div className="text-[13px] text-[#BA7517] font-medium mt-2">Voir la réalisation →</div>
            </div>
          </Link>
        </div>
      </div>

      <section className="bg-[#F2EDE6] py-12 px-5">
        <div className="max-w-[780px] mx-auto flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-2">Vous hésitez encore ?</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">Mahmoud vous explique concrètement ce qu&apos;un maître d&apos;œuvre ferait sur votre projet. Premier échange gratuit, sans engagement.</p>
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
