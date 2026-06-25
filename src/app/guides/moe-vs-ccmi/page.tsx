import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCMI ou maîtrise d'œuvre : que choisir pour construire en Haute-Savoie ? | M&M CONSTRUCTION",
  description: "Comparatif objectif CCMI vs maîtrise d'œuvre pour un projet de construction en Haute-Savoie. Budget, liberté, garanties, artisans : les vraies différences expliquées.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/moe-vs-ccmi/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CCMI ou maîtrise d'œuvre : que choisir pour construire en Haute-Savoie ?",
  description: "Comparatif objectif CCMI vs maîtrise d'œuvre pour un projet de construction en Haute-Savoie. Budget, liberté, garanties, artisans : les vraies différences.",
  url: BASE + "/guides/moe-vs-ccmi/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2025-01-15",
  dateModified: "2026-06-25",
  inLanguage: "fr-FR",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Le CCMI est-il moins cher que la maîtrise d'œuvre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pas nécessairement. Le CCMI affiche un prix global apparent, mais il inclut la marge du constructeur sur les matériaux et la sous-traitance. Avec la maîtrise d'œuvre, les artisans sont mis en concurrence sur votre projet spécifique : les 8 à 12 % d'honoraires MOE sont souvent compensés par les économies à la mise en concurrence. Le coût final est généralement équivalent, parfois inférieur en MOE.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles garanties ai-je avec un maître d'œuvre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avec un maître d'œuvre, chaque artisan signe directement avec vous et est couvert par sa propre assurance décennale. Vous avez une garantie décennale par corps de métier. Le CCMI offre une garantie de livraison (GFA) qui couvre les délais mais pas la qualité d'exécution. Les deux approches offrent des garanties légales solides, mais structurées différemment.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on choisir ses artisans avec un constructeur CCMI ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Avec un CCMI, le constructeur choisit ses propres sous-traitants. Vous n'avez pas de visibilité sur leur sélection, leurs prix ni leurs marges. Avec un maître d'œuvre, vous sélectionnez les artisans sur la base de devis comparatifs préparés par le MOE et signez directement avec chacun d'eux.",
      },
    },
    {
      "@type": "Question",
      name: "La maîtrise d'œuvre est-elle adaptée à la construction en Haute-Savoie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Particulièrement adaptée. La Haute-Savoie cumule des contraintes spécifiques : zone sismique 3, PLU stricts dans le Genevois et le Chablais, terrains en pente, réglementation RE2020. Un maître d'œuvre local comme M&M CONSTRUCTION connaît ces contraintes et les artisans du secteur. Un constructeur national CCMI applique souvent des solutions génériques qui ne tiennent pas compte de ces spécificités.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûtent les honoraires d'un maître d'œuvre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les honoraires d'un maître d'œuvre représentent généralement 8 à 12 % du coût total des travaux HT. Pour une maison ossature bois de 200 000 € HT de travaux, cela représente 16 000 à 24 000 €. Ces honoraires sont transparents et négociés avant le démarrage du projet.",
      },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: BASE + "/guides/" },
    { "@type": "ListItem", position: 3, name: "CCMI vs MOE", item: BASE + "/guides/moe-vs-ccmi/" },
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
              <span className="text-white/70">CCMI vs MOE</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Guide comparatif</span>
            <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
              CCMI ou maîtrise d&apos;œuvre : que choisir pour construire en Haute-Savoie ?
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
              Quand on veut faire construire une maison en Haute-Savoie, la première question est souvent : passer par un constructeur CCMI ou par un maître d&apos;œuvre ? Les deux permettent d&apos;obtenir une maison neuve. Mais les implications en termes de liberté, de budget, de choix des artisans et de suivi de chantier sont radicalement différentes. Voici un comparatif objectif, appliqué au contexte local.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Le CCMI : ce que c&apos;est vraiment</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Le CCMI (Contrat de Construction de Maison Individuelle) est régi par la loi du 19 décembre 1990. Il lie le particulier à une entreprise unique — le constructeur — qui prend en charge la conception et l&apos;intégralité de la réalisation. Le constructeur choisit lui-même ses sous-traitants, négocie les prix avec eux et intègre sa propre marge sur chaque poste.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Les avantages du CCMI sont réels : un prix global garanti contractuellement, une garantie de livraison à prix et délais convenus (GFA), et une responsabilité unique en cas de malfaçon. Pour quelqu&apos;un qui veut une maison standard dans un délai prévisible sans s&apos;impliquer dans les détails, c&apos;est une formule cohérente.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Les limites le sont tout autant. Vous choisissez dans un catalogue. Vous ne connaissez pas les artisans qui interviennent sur votre chantier. Le constructeur intègre une marge sur chaque poste (matériaux, main-d&apos;œuvre, sous-traitance) sans que vous en ayez la visibilité. Les options hors catalogue déclenchent des avenants souvent coûteux. Et en Haute-Savoie, les constructeurs nationaux appliquent des solutions génériques qui ignorent les spécificités locales.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">La maîtrise d&apos;œuvre : un professionnel qui travaille pour vous</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Le maître d&apos;œuvre n&apos;est pas un vendeur de maisons. C&apos;est un professionnel indépendant rémunéré par le maître d&apos;ouvrage (vous), pas par les artisans. Il n&apos;a aucun intérêt à gonfler les prix des matériaux ni à orienter vers des entreprises qui lui versent des commissions. Son intérêt est aligné avec le vôtre : un projet livré dans les temps, dans les coûts, et sans réserves à la réception.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Concrètement : le MOE prépare le dossier de consultation des entreprises, met les artisans en concurrence sur votre projet spécifique, analyse les offres et vous recommande. Vous signez directement avec chaque artisan. Chaque devis est visible, chaque poste est justifié. En cours de chantier, le MOE assure les visites régulières, les comptes rendus écrits, et la coordination entre corps d&apos;état.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Les honoraires du maître d&apos;œuvre représentent 8 à 12 % du coût des travaux HT. Ce coût est transparent, négocié avant le démarrage, et souvent compensé par les économies réalisées lors de la mise en concurrence des artisans.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-6">Comparatif point par point</h2>
            <div className="border border-[#D9D4CC] overflow-hidden mb-8">
              <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Critère</div>
                <div className="text-center">CCMI</div>
                <div className="text-center text-[#BA7517]">Maîtrise d&apos;œuvre</div>
              </div>
              {[
                ["Design et plans", "Catalogue imposé", "Sur mesure, liberté totale"],
                ["Choix des artisans", "Sous-traitants du constructeur", "Artisans locaux vérifiés, mis en concurrence"],
                ["Transparence des prix", "Prix global, marges opaques", "Devis comparatifs, tout posté"],
                ["Suivi de chantier", "Variable selon constructeur", "Visites régulières, comptes rendus écrits"],
                ["Garantie légale", "GFA (délais) + décennale globale", "Décennale propre à chaque artisan"],
                ["Honoraires", "Intégrés au prix (non visibles)", "8–12 % du coût travaux, transparents"],
                ["Modifications en cours", "Avenant = surcoût immédiat", "Flexible en phase conception"],
                ["Expertise ossature bois", "Souvent généraliste", "Spécialisation bois depuis 2018"],
                ["Connaissance locale 74/01", "Constructeurs souvent nationaux", "Basé à Annemasse, réseau local"],
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
              C&apos;est le mythe le plus répandu. Le CCMI affiche un prix global unique — ce qui rassure à première vue. Mais ce prix inclut la marge du constructeur sur les matériaux, sur la coordination des sous-traitants et parfois sur des prestations financières liées au chantier. Cette marge est généralement de 15 à 25 % du coût réel des travaux.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Avec la maîtrise d&apos;œuvre, les artisans proposent leurs tarifs directement, sans intermédiaire. Sur un projet de 250 000 € HT de travaux, la mise en concurrence peut dégager 20 000 à 40 000 € d&apos;économies. Les 8–12 % d&apos;honoraires MOE (soit 20 000 à 30 000 €) sont donc souvent neutralisés, voire positifs. Le budget final est comparable — mais la maison est sur mesure et les artisans sont connus.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Pourquoi la MOE est particulièrement adaptée en Haute-Savoie</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              La zone Genevois–Chablais cumule des contraintes que les constructeurs nationaux méconnaissent souvent. La Haute-Savoie est en zone sismique 3 : les prescriptions parasismiques sur la structure doivent être intégrées dès la conception. La plupart des PLU du Genevois français (Annemasse, Archamps, Saint-Julien, Cranves-Sales) imposent des règles strictes sur les matériaux de façade, les toitures et l&apos;aspect général — ce qui peut bloquer des modèles catalog standards.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Les terrains en pente sont courants dans le secteur : fondations spéciales, murs de soutènement, accès chantier en dévers — autant de postes qui peuvent exploser le budget si mal anticipés. Un maître d&apos;œuvre local connaît ces contraintes et les artisans qui y répondent. Il les intègre à l&apos;estimation dès l&apos;étude de faisabilité.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Enfin, la réglementation RE2020 (en vigueur depuis 2022) favorise les matériaux biosourcés à faible empreinte carbone — dont l&apos;ossature bois est le premier bénéficiaire. Un maître d&apos;œuvre spécialisé bois connaît les seuils RE2020 et sait les atteindre efficacement, sans surcoût inutile.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Qui devrait choisir la maîtrise d&apos;œuvre ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              La MOE est le bon choix si vous souhaitez une maison sur mesure (terrain atypique, programme spécifique, ossature bois), si la transparence sur les prix et les artisans est importante pour vous, et si vous êtes prêt à vous impliquer dans les décisions clés sans pour autant gérer le chantier vous-même.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8]">
              Le CCMI peut convenir si vous souhaitez une maison standard rapidement, sans vous impliquer dans le choix des artisans, et si la garantie de livraison à prix et délais fixes est votre priorité absolue. Dans ce cas, comparez plusieurs constructeurs locaux et vérifiez leurs références dans la zone.
            </p>


          </div>
        </article>

        {/* FAQ */}
        <section className="bg-[#F2EDE6] py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mb-8">CCMI vs MOE : vos questions</h2>
            <div className="flex flex-col gap-0 border border-[#D9D4CC] bg-white">
              {jsonLdFaq.mainEntity.map((item, i) => (
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
                { href: "/guides/permis-construire-genevois/", titre: "Permis de construire dans le Genevois français" },
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
              <p className="text-[15px] text-white/60 leading-[1.7]">Mahmoud vous explique concrètement ce qu&apos;un maître d&apos;œuvre ferait sur votre projet en Haute-Savoie. Premier échange gratuit, sans engagement.</p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors text-center">
                Demande d&apos;étude →
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
