import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction maison ossature bois Haute-Savoie",
  description: "Maison ossature bois neuve en Haute-Savoie et Genevois français : conception, permis, artisans vérifiés, coordination de chantier. Étude gratuite.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/maison-ossature-bois/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Maison ossature bois", item: BASE + "/maison-ossature-bois/" },
  ],
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahmoud Ben Ahmed",
  jobTitle: "Maître d'œuvre spécialisé maison ossature bois",
  url: BASE + "/a-propos/",
  image: BASE + "/images/mahmoud-ben-ahmed.jpg",
  worksFor: {
    "@type": "HomeAndConstructionBusiness",
    name: "M&M CONSTRUCTION",
    url: BASE,
  },
  knowsAbout: ["maison ossature bois", "construction bois Haute-Savoie", "maîtrise d'œuvre", "RE2020", "Genevois français"],
  areaServed: { "@type": "AdministrativeArea", name: "Haute-Savoie, Ain, Genevois français" },
};

const points = [
  {
    title: "Conception adaptée à votre terrain",
    body: "Plans ossature bois sur mesure, pensés pour votre programme, votre orientation et les contraintes PLU locales. Nous travaillons avec des architectes et bureaux d'études spécialisés bois.",
  },
  {
    title: "Dépôt et suivi du permis de construire",
    body: "Constitution du dossier, dépôt en mairie, échanges avec l'instructeur et gestion des demandes de pièces complémentaires. Vous ne gérez rien.",
  },
  {
    title: "Sélection des artisans bois locaux",
    body: "Chaque artisan est choisi pour sa décennale, ses qualifications bois (Qualibat, ECOBOIS) et ses références locales en Haute-Savoie et Ain.",
  },
  {
    title: "Coordination de chantier",
    body: "Planning par corps de métier, visites régulières, suivi des délais. Un seul interlocuteur pour tous les corps de métier — vous ne gérez pas 8 numéros de téléphone.",
  },
  {
    title: "Réception et garanties",
    body: "Visite de réception avec grille de contrôle qualité, levée des réserves avant remise des clés, activation des garanties décennale et parfait achèvement.",
  },
];

const faq = [
  {
    q: "Quel est le budget moyen pour une maison ossature bois en Haute-Savoie ?",
    a: "Comptez 1 800 à 2 500 €/m² en maîtrise d'œuvre, finitions comprises, hors terrain et hors viabilisation. Sur une maison de 120 m², cela représente entre 216 000 et 300 000 €. Le coût varie selon le niveau de finition, la complexité du terrain et l'altitude du chantier. Les frais de viabilisation en Haute-Savoie oscillent généralement entre 5 000 et 15 000 € selon la distance aux réseaux.",
  },
  {
    q: "Quels sont les délais réels pour une construction maison bois en Haute-Savoie ?",
    a: "De la signature du contrat de maîtrise d'œuvre à la remise des clés : 12 à 18 mois, hors délais d'acquisition foncière. Les études et le permis de construire prennent 4 à 6 mois selon la commune. Le chantier ossature bois lui-même — gros œuvre, clos couvert, second œuvre — dure 4 à 6 mois supplémentaires. La préfabrication en atelier des éléments bois accélère sensiblement la phase chantier.",
  },
  {
    q: "Quelle est la différence entre un maître d'œuvre et un constructeur de maison bois ?",
    a: "Un constructeur vous vend un produit catalogue avec des marges intégrées sur les matériaux et les artisans. Il travaille pour son compte. Un maître d'œuvre travaille exclusivement pour vous : il sélectionne les artisans au meilleur rapport qualité/prix, négocie en votre nom, et assure un suivi de chantier indépendant. Vous gardez la maîtrise du budget et du projet. Le contrat n'est pas un CCMI rigide mais un contrat de maîtrise d'œuvre sur mesure.",
  },
  {
    q: "La RE2020 s'applique-t-elle à une maison ossature bois neuve ?",
    a: "Oui, la RE2020 s'applique à toute construction neuve depuis janvier 2022. La bonne nouvelle : une maison ossature bois y répond nativement. Le bois est un matériau biosourcé à faible empreinte carbone, ce qui satisfait les exigences environnementales (Ic construction) sans surcoût de mise en conformité. Les performances thermiques de l'ossature bois — avec une isolation renforcée — répondent également aux critères Bbio et Cep de la réglementation.",
  },
  {
    q: "La Haute-Savoie est-elle en zone sismique ? Quelles conséquences pour ma maison bois ?",
    a: "La majorité de la Haute-Savoie est classée en zone sismique 3 (modérée), avec certains secteurs en zone 4 (moyenne). Cela impose des règles parasismiques spécifiques : contreventements renforcés, liaisons bois-fondations calculées, et intervention d'un bureau d'études structure. L'ossature bois est un système constructif bien adapté aux zones sismiques — sa légèreté et sa flexibilité lui confèrent une bonne résistance aux séismes, à condition que le dimensionnement soit réalisé par un bureau d'études qualifié.",
  },
  {
    q: "Qui dépose le permis de construire pour une maison ossature bois ?",
    a: "Nous nous en chargeons intégralement : constitution du dossier, coordination avec l'architecte si la surface dépasse 150 m², dépôt en mairie, suivi de l'instruction et gestion des demandes de pièces complémentaires. Le délai d'instruction est généralement de 2 à 3 mois pour une maison individuelle, mais peut varier selon les communes du Genevois français ou des secteurs protégés (ZPPAUP, ABF).",
  },
  {
    q: "Quelles garanties légales couvrent une maison ossature bois neuve ?",
    a: "Trois garanties s'appliquent à toute construction neuve. La garantie de parfait achèvement (1 an) couvre les désordres signalés à la réception. La garantie biennale (2 ans) couvre les équipements dissociables. La garantie décennale (10 ans) couvre les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination. Chaque artisan que nous sélectionnons est couvert par une décennale à jour — c'est une condition non négociable.",
  },
  {
    q: "Ossature bois ou béton : que choisir en Haute-Savoie ?",
    a: "L'ossature bois est plus rapide à construire (chantier sec, préfabrication possible), plus légère — un avantage sur les terrains en pente ou à portance limitée — et naturellement conforme RE2020. Le béton offre une inertie thermique plus élevée et convient mieux à certaines configurations architecturales. En Haute-Savoie, où les terrains sont souvent en dénivelé et les hivers rigoureux, l'ossature bois avec isolation renforcée est une solution éprouvée. Le choix final dépend de votre programme, de votre terrain et de votre budget.",
  },
];

export default function MaisonOssatureBoisPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
      {/* Hero */}
      <div className="relative bg-[#2C2C2A] py-20 px-5 overflow-hidden">
        <Image
          src="/images/hero-maison-bois-montagne-1.jpg"
          alt="Construction maison ossature bois Haute-Savoie"
          fill
          className="object-cover object-center"
          priority
          loading="eager"
          aria-hidden="true"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2C2C2A]/70" />
        <div className="relative z-10 max-w-[800px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <p className="text-[#BA7517] text-[12px] font-bold uppercase tracking-widest mt-4 mb-3">Maîtrise d&apos;œuvre · Construction neuve</p>
          <h1 className="text-white text-[36px] md:text-[50px] font-black leading-tight mb-4">
            Construction de maison ossature bois<br className="hidden md:block" /> en Haute-Savoie
          </h1>
          <p className="text-white/75 text-[18px] leading-[1.7] max-w-[640px]">
            De la conception à la réception des travaux — un seul interlocuteur pour coordonner votre projet bois en Genevois français, Haute-Savoie et Ain.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors">
              Configurer mon projet
            </Link>
            <Link href="/notre-methode/" className="inline-block border-2 border-white text-white text-[16px] font-bold px-6 py-3 no-underline hover:bg-white hover:text-[#2C2C2A] transition-colors">
              Notre méthode MOE
            </Link>
          </div>
        </div>
      </div>

      {/* Auteur */}
      <div className="bg-white border-b border-[#E8E3DC] px-5 py-4">
        <div className="max-w-[900px] mx-auto">
          <Link href="/a-propos/" className="inline-flex items-center gap-3 no-underline group">
            <Image
              src="/images/mahmoud-ben-ahmed.jpg"
              alt="Mahmoud Ben Ahmed, maître d'œuvre spécialisé maison ossature bois"
              width={44}
              height={44}
              className="rounded-full object-cover object-top flex-shrink-0"
            />
            <div>
              <span className="block text-[14px] font-bold text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">
                Mahmoud Ben Ahmed
              </span>
              <span className="block text-[12px] text-[#888780]">
                Maître d&apos;œuvre · Spécialiste maison ossature bois en Haute-Savoie
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 items-start">
            <div>
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] mb-4">
                Pourquoi choisir la maîtrise d&apos;œuvre pour votre maison bois ?
              </h2>
              <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
                Un constructeur vous vend une maison catalogue avec des marges intégrées sur les matériaux et les artisans. Un maître d&apos;œuvre travaille pour vous : il sélectionne les meilleurs artisans locaux, négocie en votre nom, et assure un suivi indépendant du chantier.
              </p>
              <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
                M&M CONSTRUCTION est spécialisé maison ossature bois. Ce n&apos;est pas un service parmi d&apos;autres — c&apos;est notre seul métier. Nous connaissons les spécificités structurelles du bois, les DTU applicables, les artisans compétents sur notre zone et les délais réels en Haute-Savoie et Genevois français. Résultat : moins de surprises, plus de maîtrise sur votre chantier.
              </p>
              <p className="text-[16px] text-[#888780] leading-[1.8]">
                En zone sismique 3 — qui couvre Annemasse, Saint-Julien-en-Genevois, Annecy et une grande partie de la Haute-Savoie — les règles parasismiques imposent des contreventements spécifiques à l&apos;ossature bois. Le bureau d&apos;études structure que nous mandatons maîtrise ces contraintes. La réglementation RE2020, en vigueur depuis janvier 2022, favorise les matériaux biosourcés : une maison bois neuve respecte ces exigences nativement, sans surcoût de mise en conformité. Budget indicatif sur notre zone : <strong className="text-[#2C2C2A]">1 800 à 2 500 €/m²</strong> en maîtrise d&apos;œuvre, finitions comprises, hors terrain.
              </p>
            </div>
            <div className="bg-[#F2EDE6] p-6 flex flex-col gap-3">
              <div className="text-[12px] font-bold uppercase tracking-widest text-[#BA7517]">Ce que vous évitez</div>
              {["Catalogue imposé", "Marge cachée sur artisans", "Interlocuteur unique → vendeur", "Pas de suivi de chantier indépendant", "CCMI rigide"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[14px] text-[#2C2C2A]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] text-center mb-10">
            Ce qu&apos;on prend en charge, de A à Z
          </h2>
          <div className="flex flex-col gap-0 divide-y divide-[#D9D4CC]">
            {points.map((p, i) => (
              <div key={i} className="flex gap-6 py-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#BA7517] flex items-center justify-center text-white font-black text-[14px]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#2C2C2A] mb-1">{p.title}</h3>
                  <p className="text-[15px] text-[#888780] leading-[1.7]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#2C2C2A] py-14 px-5">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "20 ans", label: "d'expérience terrain" },
            { stat: "74 · 01", label: "Haute-Savoie & Ain" },
            { stat: "100 %", label: "Artisans vérifiés bois" },
            { stat: "RE 2020", label: "Conforme, décennale à jour" },
          ].map((s) => (
            <div key={s.stat}>
              <div className="text-[28px] font-black text-[#BA7517]">{s.stat}</div>
              <div className="text-[13px] text-white/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Zones */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] mb-4">
            Nos zones d&apos;intervention en Haute-Savoie et Genevois français
          </h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Nous intervenons sur l&apos;ensemble du département 74 et le Genevois français. <strong className="text-[#2C2C2A]">Annecy, Annemasse, Thonon-les-Bains, Saint-Julien-en-Genevois, Cluses, Bonneville, Évian-les-Bains</strong> et Sallanches constituent le cœur de notre activité. Nous couvrons également les secteurs de montagne — Chamonix, Saint-Gervais-les-Bains, Megève — ainsi que le Pays de Gex (Gex, Ferney-Voltaire) côté Ain (01).
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8]">
            Notre réseau d&apos;artisans est ancré localement. Ça change tout : les délais d&apos;intervention sont réels, les références vérifiables, et les entreprises connaissent les contraintes propres au territoire — relief, PLU montagnard, zones sismiques 3 et 4.
          </p>
        </div>
      </section>

      {/* Délais */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] mb-6">Délais réels en Haute-Savoie et Genevois</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: "Études & permis", duree: "4 à 6 mois", detail: "Conception, dépôt, instruction en mairie — variable selon les communes du Genevois et de Haute-Savoie." },
              { phase: "Chantier ossature bois", duree: "4 à 6 mois", detail: "Gros œuvre, charpente, clos couvert, second œuvre. Chantier rapide grâce à la préfabrication des éléments bois en atelier." },
              { phase: "Total projet", duree: "12 à 18 mois", detail: "Du premier échange à la remise des clés, hors délais fonciers. Un planning tenu grâce à la coordination centralisée." },
            ].map((item) => (
              <div key={item.phase} className="border-l-4 border-[#BA7517] pl-5 py-2">
                <div className="text-[13px] font-bold uppercase tracking-widest text-[#BA7517] mb-1">{item.phase}</div>
                <div className="text-[22px] font-black text-[#2C2C2A] mb-2">{item.duree}</div>
                <p className="text-[14px] text-[#888780] leading-[1.6]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] mb-8">Ce que disent nos clients</h2>
          <div className="flex flex-col gap-6">
            {/* Laurent Ramos */}
            <div className="border-l-4 border-[#BA7517] pl-8 py-4">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#BA7517"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p className="text-[16px] text-[#2C2C2A] leading-[1.8] mb-4 italic">
                &ldquo;Vraiment très professionnel. Mr Ben Ahmed est une personne de confiance. Sans lui je n&apos;aurais pas construit ma nouvelle maison. Je le recommande vivement.&rdquo;
              </p>
              <div className="text-[14px] font-bold text-[#2C2C2A]">Laurent Ramos</div>
              <div className="text-[13px] text-[#888780]">Avis Google · Avril 2021</div>
            </div>
            {/* Francis Nossin */}
            <div className="border-l-4 border-[#BA7517] pl-8 py-4">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#BA7517"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p className="text-[16px] text-[#2C2C2A] leading-[1.8] mb-1 font-bold">UN RÊVE RÉALISÉ !</p>
              <p className="text-[16px] text-[#2C2C2A] leading-[1.8] mb-4 italic">
                &ldquo;Malgré notre éloignement du lieu choisi pour notre projet, nous avons trouvé en Mr BEN AHMED une personne entièrement disponible dès le premier contact. Écoute, dialogue, engagement sans compter ses heures nous ont été consacrés jusqu&apos;à la finalisation. Notre nouvelle vie démarre grâce à vous et à votre totale disponibilité ! Mille merci.&rdquo;
              </p>
              <div className="text-[14px] font-bold text-[#2C2C2A]">Francis Nossin</div>
              <div className="text-[13px] text-[#888780]">Avis Google · Mai 2025</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/temoignages/" className="inline-block border border-[#D9D4CC] text-[#2C2C2A] text-[14px] font-bold px-5 py-2.5 no-underline hover:border-[#BA7517] hover:text-[#BA7517] transition-colors">
              Lire tous les témoignages →
            </Link>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white py-0">
        <div className="max-w-[900px] mx-auto">
          <Image
            src="/images/hero-maison-bois-alpine.jpg"
            alt="Maison ossature bois neuve en Haute-Savoie — M&M CONSTRUCTION"
            width={900}
            height={500}
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] mb-8">
            Questions fréquentes sur la construction maison bois en Haute-Savoie
          </h2>
          <div className="flex flex-col gap-0 divide-y divide-[#D9D4CC]">
            {faq.map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="text-[17px] font-bold text-[#2C2C2A] mb-3">{item.q}</h3>
                <p className="text-[15px] text-[#888780] leading-[1.8]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 px-5 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#2C2C2A] mb-3">Votre projet maison bois commence ici</h2>
          <p className="text-[16px] text-[#888780] leading-[1.7] mb-8">
            Premier échange gratuit, sans engagement. Mahmoud analyse votre terrain, votre programme et votre budget, et vous dit si votre projet est faisable — avant toute contractualisation.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors">
            Configurer mon projet →
          </Link>
          <p className="mt-5 text-[13px] text-[#888780]">
            <Link href="/a-propos/" className="text-[#BA7517] no-underline hover:underline">→ En savoir plus sur Mahmoud Ben Ahmed</Link>
            {" · "}
            <Link href="/contact/" className="text-[#888780] no-underline hover:text-[#2C2C2A]">Nous contacter</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
