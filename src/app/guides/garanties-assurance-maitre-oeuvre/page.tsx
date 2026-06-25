import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garantie décennale et assurance dommage ouvrage en maîtrise d'œuvre | M&M CONSTRUCTION",
  description: "En MOE, qui souscrit la décennale ? Qui prend en charge l'assurance dommage ouvrage ? Garanties légales, responsabilité du MOE, ossature bois : le guide complet pour Haute-Savoie.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/garanties-assurance-maitre-oeuvre/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Garantie décennale et assurance dommage ouvrage en maîtrise d'œuvre",
  description: "En maîtrise d'œuvre, qui souscrit la décennale, qui prend l'assurance dommage ouvrage, et que couvre la responsabilité du MOE ? Guide complet pour construire en Haute-Savoie.",
  url: BASE + "/guides/garanties-assurance-maitre-oeuvre/",
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
      name: "En maîtrise d'œuvre, qui souscrit la garantie décennale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque artisan souscrit sa propre assurance décennale, couvrant son corps de métier. Le gros œuvre est couvert par la décennale de l'entreprise de maçonnerie, la charpente bois par celle du charpentier, et ainsi de suite. Le maître d'œuvre souscrit une décennale MOE couvrant sa mission de conception et de direction de travaux. Il n'y a pas de décennale unique comme en CCMI, mais un ensemble d'assurances qui couvrent l'intégralité du chantier.",
      },
    },
    {
      "@type": "Question",
      name: "L'assurance dommage ouvrage est-elle obligatoire si je passe par un MOE ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, l'assurance dommage ouvrage (DO) est obligatoire pour tout maître d'ouvrage qui fait construire, quel que soit le mode de réalisation (CCMI, MOE, auto-construction). La différence avec le CCMI est qu'en maîtrise d'œuvre, c'est vous (le maître d'ouvrage) qui souscrivez cette assurance avant l'ouverture du chantier, et non un constructeur. Le MOE peut vous orienter vers les assureurs adaptés à votre projet.",
      },
    },
    {
      "@type": "Question",
      name: "Le maître d'œuvre est-il responsable si un artisan fait une malfaçon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le maître d'œuvre est responsable de sa mission de direction de travaux : il doit détecter les malfaçons lors de ses visites et refuser de valider les situations de paiement si le travail n'est pas conforme. En cas de désordre post-réception relevant d'une faute de conception ou de coordination, sa décennale MOE s'applique. Pour les malfaçons d'exécution d'un artisan, c'est la décennale de cet artisan qui s'active. L'assurance dommage ouvrage vous permet d'être indemnisé rapidement sans avoir à désigner le responsable.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle garantie couvre les défauts d'isolation d'une maison ossature bois ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les défauts d'isolation qui rendent le logement impropre à sa destination (ponts thermiques importants, infiltrations liées à la structure) relèvent de la garantie décennale. Les défauts de performance thermique sans désordre structurel peuvent relever de la garantie de bon fonctionnement (2 ans) ou d'un recours sur la réception. Sur une maison ossature bois, les interfaces entre bardage, pare-pluie, isolation soufflée et membrane étanche à l'air sont des points de vigilance que le MOE inspecte lors des visites de chantier.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je souscrire moi-même l'assurance dommage ouvrage avant de commencer ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, et c'est obligatoire. L'assurance dommage ouvrage doit être souscrite avant l'ouverture du chantier — c'est le maître d'ouvrage (vous) qui la souscrit auprès d'un assureur. Le coût représente généralement 1 à 3 % du coût total des travaux TTC. M&M CONSTRUCTION vous accompagne dans cette démarche : dossier technique, choix de l'assureur, transmission des pièces nécessaires.",
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
    { "@type": "ListItem", position: 3, name: "Garanties et assurances MOE", item: BASE + "/guides/garanties-assurance-maitre-oeuvre/" },
  ],
};

export default function GuideGarantiesPage() {
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
              <span className="text-white/70">Garanties et assurances MOE</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Guide juridique</span>
            <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
              Garantie décennale et assurance dommage ouvrage en maîtrise d&apos;œuvre
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
              Faire construire en maîtrise d&apos;œuvre soulève une question légitime : si ce n&apos;est pas un constructeur unique qui pilote tout, qui assure quoi ? La réponse est claire une fois qu&apos;on comprend la structure des garanties légales en France — et elle est rassurante. Voici le détail, appliqué à un projet de maison ossature bois en Haute-Savoie.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Les trois garanties légales qui s&apos;appliquent à tout chantier</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Quel que soit le mode de réalisation choisi — CCMI, maîtrise d&apos;œuvre ou marché direct avec les entreprises — trois garanties légales s&apos;appliquent automatiquement à l&apos;issue de la réception des travaux.
            </p>
            <div className="border border-[#D9D4CC] mb-8">
              {[
                {
                  titre: "Garantie de parfait achèvement (1 an)",
                  texte: "Couvre tous les désordres signalés à la réception ou dans l'année qui suit. L'entreprise doit reprendre les travaux défectueux. Elle s'applique à chaque artisan pour son lot.",
                },
                {
                  titre: "Garantie de bon fonctionnement (2 ans)",
                  texte: "Couvre les équipements dissociables du bâti : volets, robinetterie, tableau électrique, VMC. Si un équipement tombe en panne dans les 2 ans, l'entreprise ayant posé cet équipement est responsable.",
                },
                {
                  titre: "Garantie décennale (10 ans)",
                  texte: "Couvre les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination : fissures structurelles, infiltrations, défauts d'isolation majeurs, affaissement de charpente. C'est la garantie la plus importante.",
                },
              ].map((g, i) => (
                <div key={i} className={`p-5 border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <p className="font-bold text-[15px] text-[#2C2C2A] mb-1">{g.titre}</p>
                  <p className="text-[14px] text-[#888780] leading-[1.7]">{g.texte}</p>
                </div>
              ))}
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">La garantie décennale en maîtrise d&apos;œuvre : qui l&apos;assure ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              C&apos;est la différence fondamentale avec le CCMI. En contrat de construction de maison individuelle, le constructeur souscrit une assurance décennale qui couvre l&apos;ensemble du chantier sous une seule police. C&apos;est simple, mais c&apos;est aussi opaque : en cas de sinistre, tout passe par lui.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              En maîtrise d&apos;œuvre, chaque artisan souscrit sa propre assurance décennale pour son corps de métier. L&apos;entreprise de gros œuvre est couverte pour la structure, le charpentier pour la charpente bois, le plaquiste pour l&apos;isolation et les cloisons, le plombier pour les installations sanitaires. Avant de commencer les travaux, le maître d&apos;œuvre demande à chaque entreprise une attestation d&apos;assurance décennale en cours de validité. Ces documents sont conservés dans le dossier chantier.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Le maître d&apos;œuvre lui-même souscrit une assurance décennale MOE qui couvre sa propre mission : les études de conception, les prescriptions techniques, la direction des travaux. Si un sinistre est lié à une erreur de conception ou à un défaut de contrôle lors des visites de chantier, c&apos;est cette police qui intervient.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              La couverture est donc complète et par corps de métier — ce qui est, dans les faits, plus précis qu&apos;une décennale globale. En cas de sinistre, la responsabilité est identifiée au bon niveau sans ambiguïté.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">L&apos;assurance dommage ouvrage : ce que vous devez souscrire</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              L&apos;assurance dommage ouvrage (DO) est obligatoire en France pour tout maître d&apos;ouvrage qui fait construire, au titre de la loi Spinetta du 4 janvier 1978. Elle ne couvre pas les mêmes risques que la décennale — elle agit comme un mécanisme de préfinancement.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Concrètement : en cas de sinistre relevant de la décennale, la DO vous indemnise rapidement (dans un délai de 90 jours maximum) sans attendre qu&apos;un tribunal détermine quelle entreprise est responsable. C&apos;est l&apos;assureur DO qui se retourne ensuite contre la décennale de l&apos;artisan concerné. Vous êtes protégé contre les longues procédures judiciaires et les entreprises insolvables.
            </p>
            <div className="bg-[#F2EDE6] border border-[#D9D4CC] p-5 mb-6">
              <p className="font-bold text-[15px] text-[#2C2C2A] mb-2">Point clé en maîtrise d&apos;œuvre</p>
              <p className="text-[14px] text-[#888780] leading-[1.7]">
                En CCMI, c&apos;est le constructeur qui souscrit la DO pour vous (elle est intégrée dans son offre). En maîtrise d&apos;œuvre, c&apos;est <strong className="text-[#2C2C2A]">vous, maître d&apos;ouvrage</strong>, qui devez la souscrire avant l&apos;ouverture du chantier. M&M CONSTRUCTION vous accompagne dans cette démarche : constitution du dossier technique, identification des assureurs adaptés à la construction ossature bois, transmission des pièces.
              </p>
            </div>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Le coût de l&apos;assurance dommage ouvrage représente généralement <strong className="text-[#2C2C2A]">1 à 3 % du coût total des travaux TTC</strong>. Pour une maison ossature bois de 300 000 € TTC, prévoyez entre 3 000 et 9 000 €. Ce montant est déductible fiscalement si la maison est destinée à la location. La prime est versée avant le démarrage du chantier, en une seule fois.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Ce que couvre la responsabilité du maître d&apos;œuvre</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Le MOE n&apos;est pas artisan. Il ne réalise pas les travaux. Sa responsabilité porte sur ses propres missions : l&apos;étude de conception (plans, descriptifs, choix techniques), la consultation des entreprises (appel d&apos;offres, analyse des devis), la direction de chantier (visites, comptes rendus, contrôle de conformité), et l&apos;assistance à réception (levée des réserves).
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Si un sinistre survient dans les 10 ans après réception et qu&apos;il est lié à une erreur de conception ou à un défaut de surveillance imputable au MOE, sa décennale intervient. Cette couverture est obligatoire et vérifiable : demandez toujours l&apos;attestation d&apos;assurance de votre maître d&apos;œuvre avant de signer le contrat de mission.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-6">Comparatif garanties : CCMI vs maîtrise d&apos;œuvre</h2>
            <div className="border border-[#D9D4CC] overflow-hidden mb-8">
              <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Garantie</div>
                <div className="text-center">CCMI</div>
                <div className="text-center text-[#BA7517]">Maîtrise d&apos;œuvre</div>
              </div>
              {[
                ["Garantie décennale", "Une seule police souscrite par le constructeur", "Une décennale par artisan + décennale MOE"],
                ["Assurance dommage ouvrage", "Souscrite par le constructeur (intégrée)", "Souscrite par le maître d'ouvrage (vous)"],
                ["Garantie de livraison (GFA)", "Oui, garantit les délais et le prix contractuel", "Absente — remplacée par l'engagement du MOE"],
                ["Garantie parfait achèvement", "Oui (1 an post-réception)", "Oui, par artisan (1 an post-réception)"],
                ["Garantie bon fonctionnement", "Oui (2 ans sur équipements)", "Oui, par artisan (2 ans sur équipements)"],
                ["Responsabilité conception", "Portée par le constructeur", "Portée par le MOE (décennale MOE)"],
                ["Identification du responsable", "Via le constructeur (opaque)", "Par corps de métier (plus précis)"],
                ["Transparence des assurances", "Globale, non détaillée", "Attestation individuelle par entreprise"],
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="text-[#2C2C2A] font-medium">{row[0]}</div>
                  <div className="text-center text-[#888780]">{row[1]}</div>
                  <div className="text-center text-[#2C2C2A]">{row[2]}</div>
                </div>
              ))}
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Points de vigilance pour une maison ossature bois</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              L&apos;ossature bois présente des spécificités techniques qui ont des implications directes sur les garanties. Plusieurs points méritent une attention particulière lors de la réception et dans les années qui suivent.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              {[
                {
                  titre: "L'étanchéité à l'air (membrane frein-vapeur)",
                  texte: "Une membrane mal posée ou perforée peut générer des condensations internes dans l'ossature, avec des conséquences sur l'isolation et la structure bois. C'est un désordre relevant de la décennale si le logement devient impropre à sa destination.",
                },
                {
                  titre: "La jonction bardage / menuiseries",
                  texte: "Les interfaces entre les dormants des fenêtres et le bardage en bois ou en composite sont des zones d'infiltration potentielles. Le MOE vérifie ces jonctions en cours de chantier et à la réception.",
                },
                {
                  titre: "La garantie sur l'isolation par insufflation",
                  texte: "Si l'isolation est réalisée par soufflage (ouate de cellulose, laine minérale insufflée), la densité et l'homogénéité du remplissage conditionnent les performances. Le descriptif de mise en œuvre est versé au dossier pour engager la décennale de l'isolateur si besoin.",
                },
                {
                  titre: "Les panneaux photovoltaïques ou toiture végétalisée",
                  texte: "Ces équipements sont souvent exclus des garanties standard. Vérifiez avec votre assureur DO que votre police les couvre, ou souscrivez une extension de garantie dédiée.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 border border-[#D9D4CC] bg-[#F2EDE6]">
                  <span className="text-[#BA7517] font-bold text-[18px] flex-shrink-0 mt-0.5">→</span>
                  <div>
                    <p className="font-bold text-[14px] text-[#2C2C2A] mb-1">{item.titre}</p>
                    <p className="text-[14px] text-[#888780] leading-[1.7]">{item.texte}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Ce que fait M&M CONSTRUCTION sur les garanties</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              La gestion des assurances fait partie intégrante de l&apos;accompagnement. Avant le démarrage du chantier, M&M CONSTRUCTION collecte et vérifie les attestations d&apos;assurance décennale de chaque entreprise retenue. Ces documents sont classés dans le dossier marché et transmis à l&apos;assureur dommage ouvrage lors de la constitution du dossier DO.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              En cours de chantier, les comptes rendus de visite consignent les réserves et les conformités. Ces documents ont une valeur juridique en cas de sinistre : ils prouvent ce qui a été contrôlé et ce qui a été accepté. À la réception, le procès-verbal liste les réserves (avec délai de levée) et déclenche le départ des garanties légales.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8]">
              Vous n&apos;êtes pas seul face au mécanisme d&apos;assurance. Si vous avez besoin de déclarer un sinistre dans les 10 ans après réception, nous pouvons vous orienter sur la bonne procédure et identifier les polices concernées à partir du dossier chantier.
            </p>

          </div>
        </article>

        {/* FAQ */}
        <section className="bg-[#F2EDE6] py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mb-8">Garanties MOE : vos questions</h2>
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
                { href: "/guides/moe-vs-ccmi/", titre: "CCMI ou maîtrise d'œuvre : comparatif complet pour la Haute-Savoie" },
                { href: "/guides/prix-maison-ossature-bois-haute-savoie/", titre: "Prix maison ossature bois en Haute-Savoie 2025 — Estimation au m²" },
                { href: "/faire-construire-haute-savoie/", titre: "Faire construire votre maison en Haute-Savoie : le guide complet" },
                { href: "/notre-methode/", titre: "Notre méthode MOE : de l'étude à la réception" },
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
              <h2 className="text-[22px] font-bold text-white mb-2">Une question sur les assurances avant de démarrer ?</h2>
              <p className="text-[15px] text-white/60 leading-[1.7]">M&M CONSTRUCTION vous accompagne dans la constitution du dossier DO et la vérification des décennales. Premier échange gratuit, sans engagement.</p>
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
