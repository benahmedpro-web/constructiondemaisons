import Image from "next/image";

const avis = [
  {
    nom: "Jocelyn Schreiner",
    note: 5,
    texte: "Excellent professionnel, très à l'écoute qui a su cerner nos besoins et envies... De plus disponible, réactif et rassurant tout au long du processus, bref je recommande fortement.",
    date: "juin 2023",
  },
  {
    nom: "Sandrine Revaux",
    note: 5,
    texte: "A su nous écouter et établir un projet correspondant à nos attentes. Nous a parfaitement accompagné pour cette étape importante de notre vie, je recommande fortement.",
    date: "juin 2023",
  },
  {
    nom: "Supa Wesman",
    note: 5,
    texte: "Bienveillant, à l'écoute, visionnaire, Mr Ben Ahmed est un professionnel de qualité ! N'hésitez pas à faire appel à lui, et à ses analyses justes et pertinentes. Vous serez entre de bonnes mains, celle d'un véritable expert et homme de parole.",
    date: "février 2021",
  },
  {
    nom: "Laurent Ramos",
    note: 5,
    texte: "Vraiment très professionnel. Mr Ben Ahmed est une personne de confiance. Sans lui je n'aurais pas construit ma nouvelle maison. Je le recommande vivement.",
    date: "avril 2021",
  },
  {
    nom: "Kévin Ducrot",
    note: 5,
    texte: "Mr Ben Ahmed est un professionnel à l'écoute, réactif et qui prend le temps d'affiner les projets qu'on lui soumet afin qu'ils correspondent à nos attentes. Il fournit un travail de qualité. Je recommande.",
    date: "juillet 2023",
  },
  {
    nom: "Michael Camalet",
    note: 5,
    texte: "Très belle expérience avec un excellent professionnel Mr Ben Ahmed. Avec son professionnalisme. Il a donné des bons conseils tout au long du projet. Nous sommes très satisfaits !",
    date: "mai 2024",
  },
  {
    nom: "Mathieu S",
    note: 5,
    texte: "Très professionnel et réactif, Monsieur BEN AHMED nous fournit un travail de qualité lors de l'élaboration de notre projet.",
    date: "août 2023",
  },
  {
    nom: "Julien B",
    note: 5,
    texte: "Mr Ben Ahmed nous a accompagné pour la construction de notre premier bien de la meilleure des façons, ce qui nous a permis de la construire.",
    date: "mai 2024",
  },
  {
    nom: "Elodie Maes",
    note: 5,
    texte: "Conseiller au top, disponible, bienveillant, à l'écoute. A su cerner le projet, nos besoins et envies.",
    date: "mai 2024",
  },
  {
    nom: "Martin Mous",
    note: 5,
    texte: "M. Ben Ahmed est un professionnel très consciencieux. Grâce à lui nous avons pu construire notre maison. Vous pouvez lui faire confiance pour votre projet. Il fera tout pour vous satisfaire pleinement.",
    date: "avril 2024",
  },
  {
    nom: "Theresa Deblaine",
    note: 5,
    texte: "Mr Ben Ahmed est un professionnel à l'écoute de ses clients, réactif et soucieux du travail bien réalisé jusqu'au bout. Son professionnalisme hors pair nous a accompagné tout au long de notre projet jusqu'à notre entière satisfaction. Nous le recommandons pleinement.",
    date: "juillet 2026",
  },
  {
    nom: "Joelle Thise",
    note: 5,
    texte: "Un immense Merci à Mr Ben Ahmed. Vous nous avez écoutés et ce dans les moindres détails, y compris pour les modifications en cours de route, vous avez su gérer la totalité à la perfection. Du plan de la maison à la réception de celle-ci, vous avez été attentif aux détails de façon très professionnel, et ce toujours avec une grande empathie afin de nous satisfaire totalement. N'habitant pas en France, nous vous avons fait une confiance totale, ce qui nous a permis de réaliser notre rêve : une nouvelle maison. Mr BEN AHMED est un homme de confiance et de parole. Merci pour tout votre travail.",
    date: "mai 2025",
  },
  {
    nom: "Francis Nossin",
    note: 5,
    texte: "UN REVE REALISE ! Malgré notre éloignement du lieu choisi pour notre projet, nous avons trouvé en Mr BEN AHMED une personne entièrement disponible dès le premier contact. Ecoute, dialogue, engagement sans compter ses heures nous ont été consacrées jusqu'à la finalisation. Notre nouvelle vie démarre grâce à vous et à votre totale disponibilité ! Mille merci.",
    date: "mai 2025",
  },
  {
    nom: "Mahamadi Kabore",
    note: 5,
    texte: "M Ben Ahmed est un professionnel de bons conseils et à l'écoute, qui nous a accompagné tout au long de notre projet avec au centre de ses interventions notre satisfaction. Nous le recommandons.",
    date: "juillet 2026",
  },
];

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

function InitialeAvatar({ nom }: { nom: string }) {
  return (
    <div className="w-9 h-9 rounded-full bg-[#2C2C2A] flex items-center justify-center flex-shrink-0">
      <span className="text-white text-[13px] font-bold">{nom[0]}</span>
    </div>
  );
}

const guarantees = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Planning tenu",
    body: "Chaque chantier démarre avec un planning détaillé par corps de métier. Nous anticipons les décalages avant qu'ils ne bloquent la suite.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Budget maîtrisé",
    body: "Nos honoraires sont définis à la signature. Le budget travaux est chiffré avec précision avant le démarrage — pas de surprise.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Qualité contrôlée",
    body: "Visite de chantier à chaque étape clé. Grille de contrôle qualité à la réception. Les réserves sont levées avant remise des clés.",
  },
];

export function TestimonialSection() {
  return (
    <section className="bg-white py-14 px-5">
      <div className="max-w-[1100px] mx-auto">

        {/* Note Google */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-end gap-2">
                <span className="text-[42px] font-black text-[#2C2C2A] leading-none">5,0</span>
                <Etoiles n={5} />
              </div>
              <div className="text-[13px] text-[#888780] mt-0.5">14 avis Google vérifiés</div>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[#D9D4CC]" />
          <div>
            <div className="text-[15px] font-bold text-[#2C2C2A] mb-1">Ce que nos clients disent</div>
            <div className="text-[13px] text-[#888780]">Réactivité · Professionnalisme · Écoute · Résultat</div>
          </div>
        </div>

        {/* Grille d'avis */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mb-12">
          {avis.map((a, i) => (
            <div key={i} className="break-inside-avoid bg-[#F2EDE6] p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <InitialeAvatar nom={a.nom} />
                <div>
                  <div className="text-[14px] font-bold text-[#2C2C2A]">{a.nom}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Etoiles n={a.note} />
                    <span className="text-[11px] text-[#888780]">{a.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-[#888780] leading-[1.6] italic">&ldquo;{a.texte}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Engagements */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start pt-10 border-t border-[#D9D4CC]">
          <div>
            <div className="relative bg-[#2C2C2A] aspect-[4/3] overflow-hidden">
              <Image
                src="/images/mahmoud-ben-ahmed.jpg"
                alt="Mahmoud Ben Ahmed — M&M CONSTRUCTION"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 400px"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-12 h-1 bg-[#BA7517] mx-auto mb-4" />
                <p className="text-white text-[15px] font-bold">Mahmoud Ben Ahmed</p>
                <p className="text-white/70 text-[13px] mt-1">Responsable de projets — M&amp;M CONSTRUCTION</p>
              </div>
            </div>
            <p className="text-[13px] text-[#888780] leading-[1.6] mt-4">
              20 ans d&apos;expérience en accompagnement de projets de construction. Basé à Annemasse, intervenant en Haute-Savoie, Ain et Genevois français.
            </p>
          </div>

          <div>
            <h4 className="text-[22px] font-bold text-[#2C2C2A] mb-3">
              Un engagement sur le résultat, pas juste sur l&apos;intention
            </h4>
            <p className="text-[15px] text-[#888780] leading-[1.7] mb-8">
              Chaque projet est différent. Ce qui ne change pas, c&apos;est la méthode : un chiffrage précis, des artisans qualifiés, un suivi de chantier systématique, et une réception rigoureuse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {guarantees.map((g, i) => (
                <div key={i} className="flex-1 bg-[#F2EDE6] p-5 flex flex-col items-center text-center">
                  <div className="mb-3">{g.icon}</div>
                  <h5 className="text-[15px] font-bold text-[#2C2C2A] mb-2">{g.title}</h5>
                  <p className="text-[12px] text-[#888780] leading-[1.5]">{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
