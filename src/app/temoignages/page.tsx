import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const BASE = "https://www.constructiondemaisons.com";

export const metadata: Metadata = {
  title: "Avis clients — M&M CONSTRUCTION | 14 témoignages vérifiés",
  description: "14 avis Google 5/5 étoiles — Jocelyn, Sandrine, Joelle, Francis, Theresa et d'autres témoignent de leur expérience avec M&M CONSTRUCTION en Haute-Savoie.",
  alternates: {
    canonical: `${BASE}/temoignages/`,
  },
  openGraph: {
    title: "Avis clients M&M CONSTRUCTION — 14 témoignages 5★",
    description: "Ce que disent nos clients sur leur expérience avec M&M CONSTRUCTION, maître d'œuvre en Haute-Savoie.",
    url: `${BASE}/temoignages/`,
    siteName: "M&M CONSTRUCTION",
    locale: "fr_FR",
    type: "website",
  },
};

const avis = [
  {
    nom: "Jocelyn Schreiner",
    initiale: "J",
    note: 5,
    date: "juin 2023",
    dateISO: "2023-06",
    texte: "Excellent professionnel, très à l'écoute qui a su cerner nos besoins et envies. De plus disponible, réactif et rassurant tout au long du processus, bref je recommande fortement.",
    projet: "Construction de maison",
  },
  {
    nom: "Sandrine Revaux",
    initiale: "S",
    note: 5,
    date: "juin 2023",
    dateISO: "2023-06",
    texte: "A su nous écouter et établir un projet correspondant à nos attentes. Nous a parfaitement accompagné pour cette étape importante de notre vie, je recommande fortement.",
    projet: "Construction de maison",
  },
  {
    nom: "Supa Wesman",
    initiale: "S",
    note: 5,
    date: "février 2021",
    dateISO: "2021-02",
    texte: "Bienveillant, à l'écoute, visionnaire, Mr Ben Ahmed est un professionnel de qualité ! N'hésitez pas à faire appel à lui, et à ses analyses justes et pertinentes. Vous serez entre de bonnes mains, celle d'un véritable expert et homme de parole.",
    projet: "Construction de maison",
  },
  {
    nom: "Laurent Ramos",
    initiale: "L",
    note: 5,
    date: "avril 2021",
    dateISO: "2021-04",
    texte: "Vraiment très professionnel. Mr Ben Ahmed est une personne de confiance. Sans lui je n'aurais pas construit ma nouvelle maison. Je le recommande vivement.",
    projet: "Construction de maison",
  },
  {
    nom: "Kévin Ducrot",
    initiale: "K",
    note: 5,
    date: "juillet 2023",
    dateISO: "2023-07",
    texte: "Mr Ben Ahmed est un professionnel à l'écoute, réactif et qui prend le temps d'affiner les projets qu'on lui soumet afin qu'ils correspondent à nos attentes. Il fournit un travail de qualité. Je recommande.",
    projet: "Construction de maison",
  },
  {
    nom: "Michael Camalet",
    initiale: "M",
    note: 5,
    date: "mai 2024",
    dateISO: "2024-05",
    texte: "Très belle expérience avec un excellent professionnel Mr Ben Ahmed. Avec son professionnalisme, il a donné des bons conseils tout au long du projet. Nous sommes très satisfaits !",
    projet: "Construction de maison",
  },
  {
    nom: "Mathieu S",
    initiale: "M",
    note: 5,
    date: "août 2023",
    dateISO: "2023-08",
    texte: "Très professionnel et réactif, Monsieur BEN AHMED nous fournit un travail de qualité lors de l'élaboration de notre projet.",
    projet: "Construction de maison",
  },
  {
    nom: "Julien B",
    initiale: "J",
    note: 5,
    date: "mai 2024",
    dateISO: "2024-05",
    texte: "Mr Ben Ahmed nous a accompagné pour la construction de notre premier bien de la meilleure des façons, ce qui nous a permis de la construire.",
    projet: "Construction de maison",
  },
  {
    nom: "Elodie Maes",
    initiale: "E",
    note: 5,
    date: "mai 2024",
    dateISO: "2024-05",
    texte: "Conseiller au top, disponible, bienveillant, à l'écoute. A su cerner le projet, nos besoins et envies.",
    projet: "Construction de maison",
  },
  {
    nom: "Martin Mous",
    initiale: "M",
    note: 5,
    date: "avril 2024",
    dateISO: "2024-04",
    texte: "M. Ben Ahmed est un professionnel très consciencieux. Grâce à lui nous avons pu construire notre maison. Vous pouvez lui faire confiance pour votre projet. Il fera tout pour vous satisfaire pleinement.",
    projet: "Construction de maison",
  },
  {
    nom: "Theresa Deblaine",
    initiale: "T",
    note: 5,
    date: "juillet 2026",
    dateISO: "2026-07",
    texte: "Mr Ben Ahmed est un professionnel à l'écoute de ses clients, réactif et soucieux du travail bien réalisé jusqu'au bout. Son professionnalisme hors pair nous a accompagné tout au long de notre projet jusqu'à notre entière satisfaction. Nous le recommandons pleinement.",
    projet: "Rénovation de maison",
  },
  {
    nom: "Joelle Thise",
    initiale: "J",
    note: 5,
    date: "mai 2025",
    dateISO: "2025-05",
    texte: "Un immense Merci à Mr Ben Ahmed. Vous nous avez écoutés et ce dans les moindres détails, y compris pour les modifications en cours de route, vous avez su gérer la totalité à la perfection. Du plan de la maison à la réception de celle-ci, vous avez été attentif aux détails de façon très professionnel, et ce toujours avec une grande empathie afin de nous satisfaire totalement. N'habitant pas en France, nous vous avons fait une confiance totale, ce qui nous a permis de réaliser notre rêve : \"une nouvelle maison\". Mr BEN AHMED est un homme de confiance et de parole. Merci pour tout votre travail.",
    projet: "Construction de maison",
  },
  {
    nom: "Francis Nossin",
    initiale: "F",
    note: 5,
    date: "mai 2025",
    dateISO: "2025-05",
    texte: "UN REVE REALISE ! Malgré notre éloignement du lieu choisi pour notre projet, nous avons trouvé en Mr BEN AHMED une personne entièrement disponible dès le premier contact. Ecoute, dialogue, engagement sans compter ses heures nous ont été consacrées jusqu'à la finalisation. Notre nouvelle vie démarre grâce à vous et à votre totale disponibilité ! Mille merci.",
    projet: "Construction de maison",
  },
  {
    nom: "Mahamadi Kabore",
    initiale: "M",
    note: 5,
    date: "juillet 2026",
    dateISO: "2026-07",
    texte: "M Ben Ahmed est un professionnel de bons conseils et à l'écoute, qui nous a accompagné tout au long de notre projet avec au centre de ses interventions notre satisfaction. Nous le recommandons.",
    projet: "Rénovation de maison",
  },
];

const jsonLdPage = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE + "/#business",
  name: "M&M CONSTRUCTION",
  url: BASE,
  description: "Maîtrise d'œuvre spécialisée maison ossature bois en Haute-Savoie, Genevois français et Ain.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "14",
    bestRating: "5",
    worstRating: "1",
  },
  review: avis.map((a) => ({
    "@type": "Review",
    author: { "@type": "Person", name: a.nom },
    datePublished: a.dateISO,
    reviewRating: { "@type": "Rating", ratingValue: String(a.note), bestRating: "5", worstRating: "1" },
    reviewBody: a.texte,
  })),
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Témoignages", item: BASE + "/temoignages/" },
  ],
};

function Etoiles({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#BA7517">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initiale }: { initiale: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[#2C2C2A] flex items-center justify-center flex-shrink-0">
      <span className="text-white text-[14px] font-bold">{initiale}</span>
    </div>
  );
}

export default function TemoignagesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero */}
      <div className="bg-[#2C2C2A] py-16 px-5">
        <div className="max-w-[900px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <h1 className="text-white text-[36px] md:text-[48px] font-black mt-4 mb-3 leading-tight">
            Ce que disent nos clients
          </h1>
          <p className="text-white/60 text-[17px] leading-[1.6] max-w-[620px]">
            14 avis Google vérifiés · 5/5 étoiles · Clients accompagnés en Haute-Savoie, Ain et Genevois français depuis 2020.
          </p>
        </div>
      </div>

      {/* Score global */}
      <section className="bg-[#F2EDE6] py-10 px-5 border-b border-[#D9D4CC]">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-end gap-3 justify-center sm:justify-start">
              <span className="text-[56px] font-black text-[#2C2C2A] leading-none">5,0</span>
              <div className="pb-2">
                <Etoiles n={5} />
                <div className="text-[12px] text-[#888780] mt-1">sur 5 — 14 avis</div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-[#D9D4CC]" />
          <div className="flex flex-col gap-2 flex-1">
            {["Réactivité", "Professionnalisme", "Écoute", "Résultat"].map((label) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-[13px] text-[#888780] w-36">{label}</span>
                <div className="flex-1 h-1.5 bg-[#D9D4CC] rounded-full overflow-hidden">
                  <div className="h-full bg-[#BA7517] rounded-full w-full" />
                </div>
                <span className="text-[12px] font-bold text-[#BA7517]">5/5</span>
              </div>
            ))}
          </div>
          <div className="hidden sm:block w-px h-16 bg-[#D9D4CC]" />
          <div className="text-center">
            <div className="text-[13px] text-[#888780] mb-2">Source</div>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[13px] font-bold text-[#2C2C2A]">Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grille des 14 avis */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[24px] font-bold text-[#2C2C2A] mb-8">Les 14 avis</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {avis.map((a, i) => (
              <div key={i} className="break-inside-avoid bg-[#F2EDE6] p-5 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar initiale={a.initiale} />
                  <div>
                    <div className="text-[14px] font-bold text-[#2C2C2A]">{a.nom}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Etoiles n={a.note} />
                      <span className="text-[11px] text-[#888780]">{a.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] text-[#888780] leading-[1.65] italic mb-3">&ldquo;{a.texte}&rdquo;</p>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">{a.projet}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section E-E-A-T : Mahmoud + engagements */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-start">
          <div>
            <div className="relative bg-[#2C2C2A] aspect-[3/4] overflow-hidden">
              <Image
                src="/images/mahmoud-ben-ahmed.jpg"
                alt="Mahmoud Ben Ahmed — Responsable de projets M&M CONSTRUCTION"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 z-10">
                <div className="w-10 h-0.5 bg-[#BA7517] mb-3" />
                <p className="text-white text-[15px] font-black text-center">Mahmoud Ben Ahmed</p>
                <p className="text-white/70 text-[12px] text-center mt-1">Responsable de projets — Fondateur</p>
                <p className="text-white/50 text-[11px] text-center mt-0.5">Annemasse · 20 ans de BTP</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[28px] font-bold text-[#2C2C2A] mb-4 leading-tight">
              Pourquoi nos clients recommandent M&M CONSTRUCTION
            </h2>
            <p className="text-[15px] text-[#888780] leading-[1.75] mb-6">
              Mahmoud Ben Ahmed a passé 17 ans chez les grandes enseignes CMI (Maisons Pierre, Geoxia, Demeures Traditionnelles) avant de créer M&M CONSTRUCTION en 2020. Cette expérience de l&apos;intérieur — 200+ projets accompagnés — lui permet de coordonner chaque chantier avec la rigueur d&apos;un professionnel qui connaît chaque étape et ses pièges.
            </p>
            <p className="text-[15px] text-[#888780] leading-[1.75] mb-8">
              Ce que ses clients retiennent le plus : la réactivité, la transparence sur le budget, et le fait d&apos;avoir un interlocuteur unique du permis de construire à la remise des clés.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                  titre: "Planning tenu",
                  corps: "Chaque chantier démarre avec un planning détaillé par corps de métier. Les décalages sont anticipés avant qu'ils ne bloquent la suite.",
                },
                {
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                  titre: "Budget maîtrisé",
                  corps: "Honoraires définis à la signature. Budget travaux chiffré précisément avant démarrage. Pas de surprise en cours de chantier.",
                },
                {
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                  titre: "Qualité contrôlée",
                  corps: "Visite à chaque étape clé. Grille de contrôle qualité à la réception. Réserves levées avant remise des clés.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="text-[15px] font-bold text-[#2C2C2A] mb-2">{item.titre}</h3>
                  <p className="text-[12px] text-[#888780] leading-[1.6]">{item.corps}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contexte : types de projets */}
      <section className="bg-white py-12 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-6">Types de projets accompagnés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: "Maison ossature bois",
                desc: "Construction neuve de maisons individuelles de 80 à 200 m² en Haute-Savoie, Ain et Genevois français.",
                href: "/maison-ossature-bois/",
              },
              {
                label: "Extension bois",
                desc: "Agrandissement ossature bois sur maison existante : véranda, chambre supplémentaire, suite parentale.",
                href: "/extension-bois/",
              },
              {
                label: "Rénovation thermique",
                desc: "Isolation et rénovation par l'extérieur en ossature bois. Conforme RE2020 et subventions mobilisables.",
                href: "/renovation-bois/",
              },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="no-underline group block border border-[#D9D4CC] p-5 hover:border-[#BA7517] transition-colors">
                <div className="text-[14px] font-bold text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors mb-2">{item.label} →</div>
                <p className="text-[13px] text-[#888780] leading-[1.6]">{item.desc}</p>
              </Link>
            ))}
          </div>

          <div className="bg-[#F2EDE6] p-6">
            <p className="text-[14px] text-[#2C2C2A] leading-[1.7]">
              <strong>Zone d&apos;intervention :</strong> Haute-Savoie (74) · Ain (01) · Genevois français — Annemasse, Annecy, Saint-Julien-en-Genevois, Thonon-les-Bains, Gex, Divonne-les-Bains, Ferney-Voltaire.
              M&M CONSTRUCTION travaille exclusivement sur cette zone pour garantir un suivi de chantier de proximité.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2C2C2A] py-14 px-5 text-center">
        <div className="max-w-[580px] mx-auto">
          <div className="flex justify-center mb-4">
            <Etoiles n={5} />
          </div>
          <h2 className="text-[26px] font-bold text-white mb-3">Votre projet mérite le même accompagnement</h2>
          <p className="text-[16px] text-white/60 leading-[1.7] mb-8">
            Premier échange avec Mahmoud — analyse de faisabilité, budget estimatif, zone d&apos;intervention. Gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demande-etude/"
              className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-7 py-3.5 no-underline hover:bg-[#9E6312] transition-colors"
            >
              Configurer mon projet →
            </Link>
            <a
              href="tel:+33625590926"
              className="inline-block border border-white/30 text-white text-[16px] font-bold px-7 py-3.5 no-underline hover:border-white transition-colors"
            >
              Appeler directement
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
