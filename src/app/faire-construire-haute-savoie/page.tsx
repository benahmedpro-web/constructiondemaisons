import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faire construire en Haute-Savoie | M&M CONSTRUCTION",
  description: "Construire une maison en Haute-Savoie et Genevois français : permis, artisans locaux, chantier ossature bois. Accompagnement complet. Étude gratuite sous 48h.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/faire-construire-haute-savoie/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Accompagnement construction maison Haute-Savoie",
  description: "Accompagnement complet pour la construction de maison ossature bois en Haute-Savoie, Genevois français et Ain : conception, permis de construire, sélection d'artisans, coordination de chantier.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "M&M CONSTRUCTION",
    url: BASE,
    telephone: "+33625590926",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Annemasse",
      postalCode: "74100",
      addressRegion: "Haute-Savoie",
      addressCountry: "FR",
    },
  },
  areaServed: [
    { "@type": "Place", name: "Haute-Savoie" },
    { "@type": "Place", name: "Ain" },
    { "@type": "Place", name: "Genevois français" },
  ],
  serviceType: "Maîtrise d'œuvre maison ossature bois",
};


const faqItems = [
  {
    name: "Combien coûte la construction d'une maison en Haute-Savoie ?",
    acceptedAnswer: { text: "En Haute-Savoie, le coût de construction d'une maison ossature bois varie entre 1 800 et 2 800 € HT/m² selon les prestations, le terrain et les contraintes techniques. Les zones à fort prix foncier (Genevois, rives du lac Léman) peuvent dépasser ce seuil. Une étude gratuite permet d'obtenir une estimation précise pour votre projet." },
  },
  {
    name: "Quelle est la différence entre un constructeur CCMI et une maîtrise d'œuvre en Haute-Savoie ?",
    acceptedAnswer: { text: "Un constructeur CCMI vous propose un contrat clé-en-main avec des artisans qu'il choisit lui-même. La maîtrise d'œuvre (comme M&M CONSTRUCTION) vous représente : elle sélectionne les artisans locaux sur appel d'offres, coordonne le chantier et défend vos intérêts. En Haute-Savoie, la MOE est souvent plus adaptée aux projets atypiques, ossature bois ou en zone de montagne." },
  },
  {
    name: "Quels sont les délais pour faire construire une maison en Haute-Savoie ?",
    acceptedAnswer: { text: "De la première étude à la réception, il faut compter en moyenne 18 à 24 mois : 2 à 3 mois d'étude et conception, 3 à 5 mois pour l'obtention du permis de construire (variable selon les communes du Genevois et du Chablais), puis 10 à 14 mois de chantier pour une maison ossature bois." },
  },
  {
    name: "Peut-on construire une maison ossature bois partout en Haute-Savoie ?",
    acceptedAnswer: { text: "Oui, sous réserve de respecter le PLU (Plan Local d'Urbanisme) de la commune concernée. Certaines communes du Genevois (Annemasse, Archamps) et du Chablais (Thonon) ont des règles spécifiques sur les matériaux de façade et l'aspect extérieur. La Haute-Savoie est en zone sismique 3, ce qui impose des prescriptions parasismiques sur la structure, que l'ossature bois respecte naturellement." },
  },
  {
    name: "M&M CONSTRUCTION intervient-il côté suisse (canton de Genève) ?",
    acceptedAnswer: { text: "Non, M&M CONSTRUCTION intervient exclusivement côté français : Haute-Savoie (74), Ain (01) et Genevois français. Pour des projets en Suisse, d'autres démarches administratives s'appliquent." },
  },
  {
    name: "Faut-il posséder un terrain avant de contacter M&M CONSTRUCTION ?",
    acceptedAnswer: { text: "Non. M&M CONSTRUCTION peut intervenir dès la phase de recherche foncière pour analyser la faisabilité d'un terrain (PLU, accès, orientation, contraintes géotechniques). Avoir un terrain au moment du premier contact est un plus, mais ce n'est pas obligatoire pour démarrer une étude." },
  },
];

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Faire construire en Haute-Savoie", item: BASE + "/faire-construire-haute-savoie/" },
  ],
};

const etapes = [
  {
    num: "01",
    titre: "Étude de faisabilité",
    texte: "Analyse du terrain, du PLU, du budget et des contraintes techniques. Première estimation de coût. Gratuit et sans engagement.",
  },
  {
    num: "02",
    titre: "Conception et plans",
    texte: "Élaboration du programme avec un architecte ou un bureau d'études. Plans de permis, choix des matériaux, spécifications techniques ossature bois.",
  },
  {
    num: "03",
    titre: "Permis de construire",
    texte: "Dépôt et suivi du dossier en mairie. Les délais varient de 2 à 5 mois selon les communes (Annemasse, Gex, Thonon, Saint-Julien). M&M gère les éventuelles demandes de pièces complémentaires.",
  },
  {
    num: "04",
    titre: "Sélection des artisans",
    texte: "Appel d'offres auprès d'artisans locaux vérifiés (assurances, références, qualifications). Analyse comparative des devis. Vous choisissez en toute transparence.",
  },
  {
    num: "05",
    titre: "Coordination de chantier",
    texte: "Planning détaillé, visites régulières, comptes rendus de chantier. Gestion des interfaces entre corps d'état. Contrôle de la conformité et de la qualité.",
  },
  {
    num: "06",
    titre: "Réception et garanties",
    texte: "Visite de réception avec levée des réserves. Chaque artisan est couvert par sa propre assurance décennale. Vous avez une visibilité totale sur les garanties de chaque poste.",
  },
];

const zones = [
  {
    dept: "Haute-Savoie (74)",
    communes: ["Annemasse", "Cranves-Sales", "Ville-la-Grand", "Ambilly", "Gaillard", "Vétraz-Monthoux", "Thonon-les-Bains", "Publier", "Sciez", "Douvaine", "Bons-en-Chablais", "Saint-Cergues", "Machilly", "Vulbens"],
  },
  {
    dept: "Ain (01) — Pays de Gex",
    communes: ["Gex", "Ferney-Voltaire", "Saint-Genis-Pouilly", "Divonne-les-Bains", "Prévessin-Moëns", "Thoiry", "Péron", "Ornex"],
  },
  {
    dept: "Genevois français — Sud Haute-Savoie",
    communes: ["Saint-Julien-en-Genevois", "Archamps", "Collonges-sous-Salève", "Neydens", "Valleiry", "Beaumont", "Etrembières", "Viry"],
  },
];

const specificites = [
  {
    titre: "Zone sismique 3",
    texte: "La Haute-Savoie est classée en zone sismique 3 (modérée). La structure ossature bois est naturellement adaptée aux contraintes parasismiques — bien mieux que le parpaing ou le béton armé standard. M&M intègre ces prescriptions dès la conception.",
  },
  {
    titre: "PLU et règles locales",
    texte: "Chaque commune du Genevois et du Chablais a son propre PLU. Les règles d'implantation, de hauteur, de matériaux de façade et d'aspect extérieur varient fortement d'une commune à l'autre. Une erreur de PLU coûte des mois de retard.",
  },
  {
    titre: "RE2020 et performance énergétique",
    texte: "La réglementation RE2020, en vigueur depuis 2022, favorise les constructions à faible empreinte carbone. L'ossature bois en est le principal bénéficiaire. En Haute-Savoie, les hivers rigoureux renforcent encore l'intérêt d'une enveloppe très performante.",
  },
  {
    titre: "Terrains en pente",
    texte: "Le relief de la zone impose souvent des fondations spéciales (micropieux, semelles filantes profondes) et des accès chantier complexes. M&M anticipe ces contraintes à la phase d'étude pour éviter les mauvaises surprises budgétaires.",
  },
];

export default function FaireConsuireHauteSavoiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main>

        {/* Hero */}
        <div className="bg-[#2C2C2A] py-16 px-5">
          <div className="max-w-[900px] mx-auto">
            <div className="flex gap-2 text-[13px] text-white/40 mb-4">
              <Link href="/" className="text-white/40 no-underline hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-white/70">Faire construire en Haute-Savoie</span>
            </div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Construction maison · 74 · 01 · Genevois</span>
            <h1 className="text-white text-[32px] md:text-[48px] font-black leading-tight mb-5">
              Faire construire votre maison<br className="hidden md:block" /> en Haute-Savoie et Genevois
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.7] max-w-[640px] mb-8">
              De l&apos;étude de faisabilité à la réception du chantier, M&M CONSTRUCTION coordonne votre projet de construction en Haute-Savoie, dans le Pays de Gex et le Genevois français. Ossature bois, spécialité locale, artisans vérifiés.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors text-center">
                Configurer mon projet →
              </Link>
              <a href="tel:+33625590926" className="inline-block border border-white/30 text-white text-[15px] font-medium px-6 py-3 no-underline hover:border-white transition-colors text-center">
                Appeler directement
              </a>
            </div>
          </div>
        </div>

        {/* Chiffres clés */}
        <div className="bg-[#BA7517] py-8 px-5">
          <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { val: "20 ans", label: "d'expérience locale" },
              { val: "74 · 01", label: "Haute-Savoie & Ain" },
              { val: "100 %", label: "ossature bois" },
              { val: "48h", label: "réponse à votre étude" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[28px] font-black">{item.val}</div>
                <div className="text-[13px] text-white/80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Les étapes */}
        <section className="bg-white py-16 px-5">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Le processus</p>
            <h2 className="text-[28px] md:text-[34px] font-black text-[#2C2C2A] mb-2 leading-tight">
              Votre projet de construction, étape par étape
            </h2>
            <p className="text-[16px] text-[#888780] leading-[1.7] mb-10 max-w-[580px]">
              Faire construire en Haute-Savoie demande une connaissance fine des réglementations locales, des artisans du secteur et des contraintes de terrain. Voici comment M&M CONSTRUCTION accompagne chaque projet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {etapes.map((e) => (
                <div key={e.num} className="flex gap-4 p-5 border border-[#D9D4CC] hover:border-[#BA7517] transition-colors">
                  <div className="text-[28px] font-black text-[#BA7517] flex-shrink-0 leading-none pt-0.5">{e.num}</div>
                  <div>
                    <div className="text-[16px] font-bold text-[#2C2C2A] mb-1">{e.titre}</div>
                    <div className="text-[14px] text-[#888780] leading-[1.7]">{e.texte}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spécificités Haute-Savoie */}
        <section className="bg-[#F2EDE6] py-16 px-5">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Contexte local</p>
            <h2 className="text-[28px] md:text-[34px] font-black text-[#2C2C2A] mb-2 leading-tight">
              Construction en Haute-Savoie : ce que vous devez savoir
            </h2>
            <p className="text-[16px] text-[#888780] leading-[1.7] mb-10 max-w-[580px]">
              La zone Genevois–Chablais cumule des contraintes réglementaires et techniques que peu d&apos;intervenants extérieurs maîtrisent. Ces spécificités rendent le choix d&apos;un accompagnateur local indispensable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {specificites.map((s) => (
                <div key={s.titre} className="bg-white p-6 border-l-4 border-[#BA7517]">
                  <div className="text-[16px] font-bold text-[#2C2C2A] mb-2">{s.titre}</div>
                  <div className="text-[14px] text-[#888780] leading-[1.7]">{s.texte}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="bg-white py-16 px-5">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Zones d&apos;intervention</p>
            <h2 className="text-[28px] font-black text-[#2C2C2A] mb-2">Où intervenons-nous ?</h2>
            <p className="text-[16px] text-[#888780] leading-[1.7] mb-10 max-w-[580px]">
              M&M CONSTRUCTION est basé à Annemasse et intervient dans un rayon couvrant l&apos;ensemble du Genevois français, le Chablais et le Pays de Gex.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {zones.map((z) => (
                <div key={z.dept} className="border border-[#D9D4CC] p-5">
                  <div className="text-[13px] font-bold uppercase tracking-wide text-[#BA7517] mb-3">{z.dept}</div>
                  <ul className="flex flex-col gap-1">
                    {z.communes.map((c) => (
                      <li key={c} className="text-[14px] text-[#888780] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#BA7517] rounded-full flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#888780] mt-5">
              Votre commune n&apos;est pas dans la liste ? <Link href="/contact/" className="text-[#BA7517] no-underline hover:underline">Contactez-nous</Link> — chaque projet fait l&apos;objet d&apos;une étude de faisabilité géographique gratuite.
            </p>
          </div>
        </section>

        {/* MOE vs CCMI teaser */}
        <section className="bg-[#2C2C2A] py-14 px-5">
          <div className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Vous comparez vos options ?</p>
              <h2 className="text-[24px] md:text-[30px] font-black text-white mb-3 leading-tight">
                CCMI ou maîtrise d&apos;œuvre : quelle différence pour votre projet ?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.7] mb-5">
                Un constructeur CCMI et un maître d&apos;œuvre n&apos;offrent pas le même service, ni les mêmes garanties. Notre guide détaille les différences concrètes — budget, liberté, transparence, artisans — pour vous aider à choisir en connaissance de cause.
              </p>
              <Link href="/guides/moe-vs-ccmi/" className="inline-block border border-[#BA7517] text-[#BA7517] text-[14px] font-bold px-5 py-2.5 no-underline hover:bg-[#BA7517] hover:text-white transition-colors">
                Lire le guide comparatif →
              </Link>
            </div>
            <div className="hidden md:block w-px h-32 bg-white/10" />
            <div className="flex-shrink-0 flex flex-col gap-3 min-w-[220px]">
              {[
                "Transparence totale des prix",
                "Artisans locaux sélectionnés",
                "Spécialisation ossature bois",
                "Un interlocuteur unique",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[#BA7517] text-[18px] leading-none">✓</span>
                  <span className="text-white/80 text-[14px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce que vous obtenez */}
        <section className="bg-[#F2EDE6] py-14 px-5">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Votre projet</p>
            <h2 className="text-[26px] font-black text-[#2C2C2A] mb-8">Ce que vous obtenez avec M&amp;M CONSTRUCTION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { titre: "Un interlocuteur unique", texte: "Mahmoud coordonne l'ensemble des intervenants — architecte, bureau d'études, artisans, mairie. Vous n'avez qu'un seul contact tout au long du projet." },
                { titre: "Des artisans locaux vérifiés", texte: "Sélection rigoureuse sur références, assurances et qualifications. Chaque artisan est mis en concurrence sur votre projet. Vous signez directement avec eux." },
                { titre: "Une transparence totale", texte: "Devis comparatifs disponibles, compte rendu de chaque réunion de chantier, accès aux documents à chaque étape. Aucune surprise budgétaire cachée." },
                { titre: "Une expertise ossature bois", texte: "20 ans d'expérience sur la construction bois. Connaissance des spécificités thermiques, acoustiques et structurelles propres à l'ossature bois en zone alpine." },
              ].map((item) => (
                <div key={item.titre} className="bg-white p-5 border border-[#D9D4CC]">
                  <div className="text-[15px] font-bold text-[#2C2C2A] mb-2">{item.titre}</div>
                  <div className="text-[14px] text-[#888780] leading-[1.7]">{item.texte}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Questions fréquentes</p>
            <h2 className="text-[26px] font-black text-[#2C2C2A] mb-8">Faire construire en Haute-Savoie : vos questions</h2>
            <div className="flex flex-col gap-0 border border-[#D9D4CC]">
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
        <div className="bg-white py-10 px-5">
          <div className="max-w-[780px] mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Guides utiles</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/guides/prix-maison-ossature-bois-haute-savoie/", titre: "Prix maison ossature bois en Haute-Savoie : estimation au m²" },
                { href: "/guides/prix-maison-ossature-bois-100m2/", titre: "Budget maison ossature bois 100m² — poste par poste" },
                { href: "/guides/prix-maison-ossature-bois-120m2/", titre: "Budget maison ossature bois 120m² — poste par poste" },
                { href: "/guides/prix-maison-ossature-bois-150m2/", titre: "Budget maison ossature bois 150m² — poste par poste" },
                { href: "/guides/moe-vs-ccmi/", titre: "CCMI ou maîtrise d'œuvre : comparatif complet" },
                { href: "/guides/permis-construire-genevois/", titre: "Permis de construire dans le Genevois français" },
                { href: "/guides/re2020-maison-bois/", titre: "RE2020 et maison ossature bois : ce qui change" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="flex items-center gap-3 p-3 bg-[#F2EDE6] border border-[#D9D4CC] no-underline hover:border-[#BA7517] transition-colors group">
                  <span className="text-[#BA7517]">→</span>
                  <span className="text-[14px] font-medium text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">{g.titre}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA final */}
        <section className="bg-[#BA7517] py-14 px-5">
          <div className="max-w-[780px] mx-auto text-center">
            <h2 className="text-[26px] md:text-[32px] font-black text-white mb-3">Votre projet commence par une étude gratuite</h2>
            <p className="text-white/80 text-[16px] leading-[1.7] mb-7 max-w-[520px] mx-auto">
              Décrivez votre projet en quelques lignes. Mahmoud vous recontacte sous 48h pour analyser la faisabilité et répondre à vos premières questions — sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/demande-etude/" className="inline-block bg-white text-[#BA7517] text-[16px] font-black px-8 py-4 no-underline hover:bg-[#F2EDE6] transition-colors">
                Déposer ma demande d&apos;étude →
              </Link>
              <a href="tel:+33625590926" className="inline-block border-2 border-white text-white text-[15px] font-bold px-6 py-4 no-underline hover:bg-white/10 transition-colors">
                Appeler directement
              </a>
            </div>
            <p className="text-white/60 text-[13px] mt-4">Disponible par téléphone · Réponse sous 48h · Sans engagement</p>
          </div>
        </section>

      </main>
    </>
  );
}
