import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honoraires maître d'œuvre : combien ça coûte ?",
  description: "Honoraires d'un maître d'œuvre pour une maison : 8 à 12 % du coût des travaux HT. Montants réels par surface en Haute-Savoie, ce qui est couvert, ce qui ne l'est pas, et quand on paie.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/honoraires-maitre-oeuvre/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Combien coûtent les honoraires d'un maître d'œuvre pour une maison ?",
  description: "Honoraires d'un maître d'œuvre pour une maison : 8 à 12 % du coût des travaux HT. Montants réels par surface en Haute-Savoie, prestations couvertes, échéancier de paiement.",
  url: BASE + "/guides/honoraires-maitre-oeuvre/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  inLanguage: "fr-FR",
  image: "https://www.constructiondemaisons.com/images/MAB4451.jpg",
};

const faqItems = [
  {
    "@type": "Question",
    name: "Combien coûtent les honoraires d'un maître d'œuvre pour une maison ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Les honoraires d'un maître d'œuvre représentent 8 à 12 % du coût des travaux HT. En Haute-Savoie, où la construction d'une maison ossature bois se situe entre 1 700 et 2 800 € HT/m², cela donne environ 13 600 à 33 600 € pour une maison de 100 m², 16 300 à 40 300 € pour 120 m², et 20 400 à 50 400 € pour 150 m². Le taux exact dépend de l'étendue de la mission, de la complexité du terrain et du nombre de corps de métier à coordonner.",
    },
  },
  {
    "@type": "Question",
    name: "Le taux d'honoraires est-il connu avant de signer ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Oui. Le taux est fixé au contrat de maîtrise d'œuvre et ne change pas en cours de projet. Ce qui varie, c'est son assiette : les honoraires sont calculés sur le coût réel des travaux HT, connu une fois les devis des artisans analysés et le budget définitif validé. Vous connaissez donc le taux dès le départ et le montant en euros avant le démarrage du chantier, pas après.",
    },
  },
  {
    "@type": "Question",
    name: "Quand paie-t-on le maître d'œuvre ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Par phase, à l'avancement. Un appel de fonds intervient à chaque étape franchie : conception et avant-projet, dépôt du permis de construire, sélection des artisans et budget définitif, coordination du chantier, réception des travaux. Vous ne payez jamais une phase avant qu'elle ne soit réalisée. Le premier échange, l'analyse du terrain et l'estimation budgétaire sont gratuits : les honoraires ne démarrent qu'à la signature du contrat de maîtrise d'œuvre.",
    },
  },
  {
    "@type": "Question",
    name: "Qu'est-ce que les honoraires ne couvrent pas ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Les honoraires de maîtrise d'œuvre couvrent la conception, le montage du permis, la consultation des entreprises, la coordination de chantier et la réception. Ils n'incluent pas : l'étude géotechnique (G1/G2, 1 500 à 3 000 €), l'intervention d'un architecte lorsqu'elle est obligatoire au-delà de 150 m², l'étude thermique RE2020, l'assurance dommage-ouvrage, la taxe d'aménagement, les frais de raccordement aux réseaux, ni bien sûr les travaux eux-mêmes. Ces postes sont chiffrés séparément et annoncés dès l'étude de faisabilité.",
    },
  },
  {
    "@type": "Question",
    name: "Les honoraires du maître d'œuvre sont-ils rentables ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Dans la majorité des projets, oui. La mise en concurrence de 3 à 5 artisans par corps de métier dégage généralement 10 à 20 % d'économies sur le coût des travaux. Sur un chantier de 250 000 € HT en Haute-Savoie, cela représente 20 000 à 40 000 € — un montant comparable aux honoraires eux-mêmes, qui se situent entre 20 000 et 30 000 € sur ce même projet. À l'inverse, un contrat CCMI intègre une marge de constructeur de 15 à 25 % qui n'apparaît nulle part dans le devis.",
    },
  },
  {
    "@type": "Question",
    name: "Maître d'œuvre ou architecte : lequel coûte le moins cher ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Les honoraires d'architecte pour une mission complète se situent généralement entre 10 et 15 % du coût des travaux, contre 8 à 12 % pour un maître d'œuvre. L'écart n'est pas qu'une question de prix : l'architecte apporte une conception architecturale et son inscription à l'Ordre, le maître d'œuvre une coordination technique et économique du chantier. Au-delà de 150 m² de surface de plancher, le recours à un architecte est obligatoire pour le dépôt du permis — les deux interventions se cumulent alors plutôt qu'elles ne s'opposent.",
    },
  },
  {
    "@type": "Question",
    name: "Les honoraires de maîtrise d'œuvre entrent-ils dans le prêt immobilier ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Oui. Les honoraires de maîtrise d'œuvre font partie du coût global de l'opération et sont finançables au même titre que les travaux. Il faut les intégrer au plan de financement présenté à la banque, avec l'échéancier par phase : les organismes prêteurs débloquent les fonds à l'avancement, et l'échéancier du maître d'œuvre doit être cohérent avec celui des appels de fonds bancaires.",
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
    { "@type": "ListItem", position: 3, name: "Honoraires maître d'œuvre", item: BASE + "/guides/honoraires-maitre-oeuvre/" },
  ],
};

// Honoraires calculés sur la grille unique du site (1 700 – 2 800 € HT/m²) × 8 à 12 %.
// Toute évolution de la grille doit être répercutée ici : ces montants sont cités
// à l'identique dans les guides budget par surface.
const montantsParSurface = [
  { surface: "100 m²", travaux: "170 000 – 280 000 €", honoraires: "13 600 – 33 600 €" },
  { surface: "120 m²", travaux: "204 000 – 336 000 €", honoraires: "16 300 – 40 300 €" },
  { surface: "150 m²", travaux: "255 000 – 420 000 €", honoraires: "20 400 – 50 400 €" },
];

const phases = [
  {
    titre: "Évaluation et faisabilité",
    detail: "Analyse du terrain (PLU, accès, orientation, contraintes), évaluation du programme et du budget, identification des risques. Cette phase est gratuite jusqu'à la remise du chiffrage.",
  },
  {
    titre: "Conception et permis de construire",
    detail: "Coordination avec l'architecte ou le dessinateur spécialisé bois, plans d'avant-projet soumis à validation, constitution et dépôt du dossier en mairie, suivi de l'instruction.",
  },
  {
    titre: "Consultation des entreprises",
    detail: "Dossier de consultation, appel d'offres auprès des artisans bois locaux, vérification des décennales et qualifications (Qualibat, ECOBOIS, RGE), analyse comparative des devis, budget définitif avant signature.",
  },
  {
    titre: "Coordination de chantier",
    detail: "Planning par corps de métier, réunions de chantier hebdomadaires ou bimensuelles, suivi des approvisionnements critiques, gestion des aléas, comptes rendus écrits.",
  },
  {
    titre: "Réception et garanties",
    detail: "Visite de pré-réception avec grille de contrôle, levée des réserves, procès-verbal signé avec chaque artisan, activation des garanties légales, disponibilité 30 jours après réception.",
  },
];

const horsHonoraires = [
  { poste: "Étude géotechnique G1/G2", montant: "1 500 – 3 000 €", note: "Obligatoire en zone d'aléa retrait-gonflement des argiles" },
  { poste: "Architecte (> 150 m²)", montant: "Selon mission", note: "Recours obligatoire au-delà de 150 m² de surface de plancher" },
  { poste: "Étude thermique RE2020", montant: "800 – 1 500 €", note: "Bbio, Cep, Ic construction — exigée au dépôt du permis" },
  { poste: "Assurance dommage-ouvrage", montant: "2 – 4 % du coût travaux", note: "Souscrite par le maître d'ouvrage" },
  { poste: "Taxe d'aménagement", montant: "5 000 – 20 000 €", note: "Variable selon la commune et la surface" },
  { poste: "Viabilisation et raccordements", montant: "5 000 – 15 000 €", note: "Selon la distance aux réseaux" },
];

export default function GuideHonorairesMaitreOeuvrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <main>
        {/* Hero */}
        <div className="bg-[#2C2C2A] py-16 px-5">
          <div className="max-w-[780px] mx-auto">
            <div className="flex gap-2 text-[13px] text-white/40 mb-4">
              <Link href="/" className="text-white/40 no-underline hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/guides/" className="text-white/40 no-underline hover:text-white transition-colors">Guides</Link>
              <span>/</span>
              <span className="text-white/70">Honoraires maître d&apos;œuvre</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Guide budget</span>
            <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
              Combien coûtent les honoraires d&apos;un maître d&apos;œuvre pour une maison ?
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
                  Maître d&apos;œuvre · M&M CONSTRUCTION · Haute-Savoie
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-[13px]">Mis à jour le 14 septembre 2026</p>
          </div>
        </div>

        {/* Article */}
        <article className="bg-white py-14 px-5">
          <div className="max-w-[780px] mx-auto">

            <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
              Les honoraires d&apos;un maître d&apos;œuvre représentent <strong className="text-[#2C2C2A]">8 à 12 % du coût des travaux HT</strong>. En Haute-Savoie et dans le Grand Genève, où une maison ossature bois se construit entre 1 700 et 2 800 € HT/m², cela revient à 13 600 – 33 600 € pour 100 m² et 20 400 – 50 400 € pour 150 m². Le taux est fixé au contrat et ne bouge plus. Voici ce qu&apos;il couvre exactement, ce qu&apos;il ne couvre pas, et à quel moment chaque euro est appelé.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Ce que représentent 8 à 12 % en euros</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-6">
              Un pourcentage seul ne dit rien tant qu&apos;on ne l&apos;applique pas à un coût travaux réel. Les montants ci-dessous sont calculés sur la grille de construction constatée en Haute-Savoie et dans l&apos;Ain frontalier en 2026, hors terrain et hors viabilisation.
            </p>
            <div className="border border-[#D9D4CC] overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Surface</div>
                <div className="text-center">Coût travaux HT</div>
                <div className="text-center text-[#BA7517]">Honoraires MOE</div>
              </div>
              {montantsParSurface.map((row, i) => (
                <div key={row.surface} className={`grid grid-cols-3 p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="text-[#2C2C2A] font-medium">{row.surface}</div>
                  <div className="text-center text-[#888780]">{row.travaux}</div>
                  <div className="text-center text-[#2C2C2A] font-medium">{row.honoraires}</div>
                </div>
              ))}
            </div>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              L&apos;écart entre la fourchette basse et la fourchette haute ne tient pas au hasard. Le taux descend vers 8 % sur un projet simple : terrain plat, programme classique, peu de corps de métier. Il monte vers 12 % quand le chantier se complique — terrain en pente avec fondations spéciales, PLU contraignant, lots techniques nombreux, ou rénovation avec existant à reprendre. Le nombre de réunions de chantier et d&apos;interlocuteurs à coordonner n&apos;est pas le même dans les deux cas.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Pourquoi un pourcentage plutôt qu&apos;un forfait</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Les honoraires sont calculés sur le coût réel des travaux HT, pas sur une estimation figée à l&apos;avance. La raison est simple : au moment de signer le contrat de maîtrise d&apos;œuvre, le programme n&apos;est pas encore arrêté dans le détail. Figer un forfait à ce stade obligerait soit à le surévaluer par précaution, soit à le renégocier au premier ajustement de projet.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              L&apos;objection est légitime et mérite une réponse directe : si les honoraires suivent le coût des travaux, le maître d&apos;œuvre n&apos;a-t-il pas intérêt à ce que le chantier coûte cher ? Ce qui l&apos;en empêche n&apos;est pas une promesse, c&apos;est la structure du montage. Vous recevez les devis de tous les artisans consultés, pas une sélection. Vous signez directement avec chacun d&apos;eux — le maître d&apos;œuvre n&apos;est pas dans la chaîne de facturation des travaux et ne prend aucune marge dessus. Le budget définitif vous est présenté et validé avant le démarrage. Une dérive de coût serait visible ligne par ligne, sur des devis que vous avez sous les yeux.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              C&apos;est la différence structurelle avec un contrat CCMI, où le constructeur affiche un prix global qui intègre sa propre marge — généralement 15 à 25 % du coût réel — sans que le détail vous soit communiqué.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-6">Ce que couvrent les honoraires</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-6">
              La mission complète va du premier échange à la levée des réserves. Cinq phases, toutes incluses dans le taux annoncé.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {phases.map((p, i) => (
                <div key={p.titre} className="flex gap-4 p-4 bg-[#F2EDE6] border border-[#D9D4CC]">
                  <span className="text-[#BA7517] font-black text-[18px] flex-shrink-0 leading-[1.5]">{i + 1}</span>
                  <div>
                    <p className="text-[15px] font-bold text-[#2C2C2A] mb-1">{p.titre}</p>
                    <p className="text-[14px] text-[#888780] leading-[1.7]">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Quand paie-t-on ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Par phase, à l&apos;avancement. Un appel de fonds intervient à chaque étape franchie, jamais avant qu&apos;elle ne soit réalisée. Concrètement : le premier échange, la visite du terrain et l&apos;estimation budgétaire ne sont pas facturés. Les honoraires ne démarrent qu&apos;à la signature du contrat de maîtrise d&apos;œuvre, une fois que vous avez le chiffrage en main et que vous décidez d&apos;aller plus loin.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Cet échelonnement a une conséquence pratique côté financement : les banques débloquent les fonds à l&apos;avancement du chantier. L&apos;échéancier de maîtrise d&apos;œuvre est construit pour rester cohérent avec les appels de fonds bancaires, ce qui évite d&apos;avoir à avancer de la trésorerie entre deux déblocages. Les honoraires font partie du coût global de l&apos;opération et sont finançables au même titre que les travaux — pensez à les intégrer au plan de financement présenté à la banque.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-6">Ce qui n&apos;est pas inclus</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-6">
              Autant l&apos;annoncer clairement : plusieurs postes obligatoires ne relèvent pas des honoraires de maîtrise d&apos;œuvre. Ils sont chiffrés à part et communiqués dès l&apos;étude de faisabilité, pour qu&apos;aucun ne se découvre en cours de route.
            </p>
            <div className="border border-[#D9D4CC] overflow-hidden mb-6">
              <div className="grid grid-cols-[1.2fr_1fr] md:grid-cols-[1fr_0.8fr_1.2fr] bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Poste</div>
                <div className="text-center">Ordre de grandeur</div>
                <div className="hidden md:block">Précision</div>
              </div>
              {horsHonoraires.map((row, i) => (
                <div key={row.poste} className={`grid grid-cols-[1.2fr_1fr] md:grid-cols-[1fr_0.8fr_1.2fr] p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="text-[#2C2C2A] font-medium">{row.poste}</div>
                  <div className="text-center text-[#2C2C2A]">{row.montant}</div>
                  <div className="hidden md:block text-[#888780] text-[13px] leading-[1.6]">{row.note}</div>
                </div>
              ))}
            </div>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Les honoraires sont-ils récupérés ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              C&apos;est la vraie question à poser, et la réponse tient dans la mise en concurrence. Consulter 3 à 5 artisans par corps de métier sur un dossier précis dégage généralement 10 à 20 % d&apos;économies sur le coût des travaux. Sur un chantier de 250 000 € HT en Haute-Savoie, l&apos;écart entre l&apos;offre la plus basse et la plus haute pour un même lot atteint couramment 20 000 à 40 000 €. Les honoraires sur ce même projet se situent entre 20 000 et 30 000 €.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Le rôle du maître d&apos;œuvre n&apos;est d&apos;ailleurs pas de retenir systématiquement le devis le moins cher. Il est de vérifier que les offres sont comparables techniquement — un artisan qui chiffre 8 000 € de moins a souvent retiré une prestation du périmètre — puis de recommander le bon choix. L&apos;économie réelle vient autant de la comparabilité des offres que de leur niveau de prix.
            </p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-6">Maître d&apos;œuvre, architecte ou CCMI : ce que vous payez</h2>
            <div className="border border-[#D9D4CC] overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
                <div>Intervenant</div>
                <div className="text-center">Rémunération</div>
                <div className="text-center">Visibilité</div>
              </div>
              {[
                ["Maître d'œuvre", "8 – 12 % des travaux HT", "Taux au contrat, devis artisans communiqués"],
                ["Architecte (mission complète)", "10 – 15 % des travaux HT", "Taux au contrat, barème indicatif Ordre"],
                ["Constructeur CCMI", "Marge intégrée de 15 à 25 %", "Prix global, détail non communiqué"],
              ].map((row, i) => (
                <div key={row[0]} className={`grid grid-cols-3 p-3 text-[14px] border-b border-[#D9D4CC] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                  <div className="text-[#2C2C2A] font-medium">{row[0]}</div>
                  <div className="text-center text-[#888780]">{row[1]}</div>
                  <div className="text-center text-[#888780] text-[13px]">{row[2]}</div>
                </div>
              ))}
            </div>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              Ces trois formules ne s&apos;excluent pas toujours. Au-delà de 150 m² de surface de plancher, le recours à un architecte est obligatoire pour déposer le permis : sa mission de conception et celle de coordination du maître d&apos;œuvre se cumulent alors. Dans ce cas de figure, la mission du maître d&apos;œuvre est réduite en conséquence, et le taux ajusté — il n&apos;y a pas de double facturation d&apos;une même prestation.
            </p>

            {/* Sources */}
            <div className="border-t border-[#D9D4CC] mt-10 pt-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#888780] mb-3">Sources</p>
              <ul className="flex flex-col gap-1.5 list-none p-0">
                <li><a href="https://www.service-public.fr/particuliers/vosdroits/F20568" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Dans quel cas doit-on faire appel à un architecte ? — service-public.fr ↗</a></li>
                <li><a href="https://www.service-public.fr/particuliers/vosdroits/F2034" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Garantie décennale des constructeurs — service-public.fr ↗</a></li>
              </ul>
              <p className="text-[12px] text-[#888780] leading-[1.7] mt-4">
                Montants calculés sur la grille de construction du site (1 700 – 2 800 € HT/m², septembre 2026) appliquée à un taux de 8 à 12 %. Hors terrain, hors viabilisation et hors taxe d&apos;aménagement. Les ordres de grandeur des postes non inclus correspondent aux prix constatés en Haute-Savoie et dans l&apos;Ain frontalier ; ils varient selon la commune et la configuration du terrain.
              </p>
            </div>

          </div>
        </article>

        {/* FAQ */}
        <section className="bg-[#F2EDE6] py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[24px] font-bold text-[#2C2C2A] mb-8">Honoraires de maîtrise d&apos;œuvre : vos questions</h2>
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
                { href: "/guides/moe-vs-ccmi/", titre: "CCMI ou maîtrise d'œuvre : que choisir pour construire en Haute-Savoie ?" },
                { href: "/guides/prix-construction-maison/", titre: "Prix construction maison 2026 : budget complet par type de projet" },
                { href: "/guides/garanties-assurance-maitre-oeuvre/", titre: "Garantie décennale et assurance dommage ouvrage en maîtrise d'œuvre" },
                { href: "/notre-methode/", titre: "Notre méthode : les 5 phases d'un projet de maison bois" },
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
              <h2 className="text-[22px] font-bold text-white mb-2">Combien pour votre projet ?</h2>
              <p className="text-[15px] text-white/60 leading-[1.7]">Décrivez votre projet et recevez une estimation chiffrée, honoraires compris. Gratuit jusqu&apos;à la remise du chiffrage, sans engagement.</p>
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
