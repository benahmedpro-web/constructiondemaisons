export type Statut = "Disponible" | "En cours" | "Livré";

export interface GuideLie {
  titre: string;
  href: string;
}

export interface Annonce {
  slug: string;
  commune: string;
  departement: string;
  type: string;
  surfaceTerrain: number;
  surfaceHabitable: number;
  pieces: number;
  budget: number;
  statut: Statut;
  image: string;
  images: string[];
  accroche: string;
  description: string[];
  points: string[];
  zone: string;
  contexte: string;
  guidesLies: GuideLie[];
}

export const annonces: Annonce[] = [
  {
    slug: "maison-ossature-bois-annemasse-74",
    commune: "Annemasse",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Maison ossature bois",
    surfaceTerrain: 800,
    surfaceHabitable: 120,
    pieces: 5,
    budget: 385000,
    statut: "Disponible",
    image: "/images/hero-maison-bois-alpine.jpg",
    images: [
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-maison-bois-montagne-1.jpg",
      "/images/hero-extension-bois-golden.jpg",
    ],
    accroche: "Terrain plat 800 m² — Maison plain-pied 120 m² — Exposition plein sud",
    description: [
      "Terrain viabilisé de 800 m² situé dans un secteur résidentiel calme d'Annemasse, à 5 minutes du centre-ville et 15 minutes de Genève. Exposition plein sud, terrain plat, clôture sur 3 côtés.",
      "Le projet porte sur une maison de plain-pied en ossature bois de 120 m² habitables, avec garage intégré de 25 m². Architecture contemporaine, bardage douglas naturel, toiture à faible pente zinc prépatiné.",
      "Conception RE2020 intégrée dès le départ : isolation renforcée (R = 7 en toiture, R = 5 en murs), menuiseries triple vitrage, VMC double flux. Chauffage par pompe à chaleur air/eau avec plancher chauffant.",
    ],
    points: [
      "Raccordements eau, électricité, gaz, fibre en limite de propriété",
      "PLU vérifié — CES 0,25 — zone UA",
      "Bureau d'études structure intégré au budget",
      "Délai estimé : 14 à 16 mois permis compris",
      "Garanties décennales artisans vérifiées",
    ],
    contexte: "Annemasse est la commune centrale du Genevois français côté France, avec un bassin d'emploi fortement lié à Genève. Le foncier y est rare et le PLU strict en zone UA (CES 0,25). Ce projet de plain-pied de 120 m² respecte scrupuleusement les contraintes réglementaires tout en maximisant l'exposition plein sud. Terrain viabilisé, à 15 minutes à pied des commerces, 20 minutes de la gare de Genève-Cornavin. Zone sismique 3 prise en compte dans la conception ossature bois — bureau d'études structure mandaté. L'orientation bioclimatique permet de réduire les besoins de chauffage de 30 % par rapport à une maison standard RE2020.",
    guidesLies: [
      { titre: "Maison ossature bois : avantages, coûts et délais", href: "/guides/maison-ossature-bois/" },
      { titre: "Permis de construire en Genevois français", href: "/guides/permis-construire-genevois/" },
    ],
  },
  {
    slug: "maison-ossature-bois-saint-julien-en-genevois-74",
    commune: "Saint-Julien-en-Genevois",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Maison ossature bois",
    surfaceTerrain: 650,
    surfaceHabitable: 95,
    pieces: 4,
    budget: 295000,
    statut: "En cours",
    image: "/images/hero-maison-bois-montagne-1.jpg",
    images: [
      "/images/hero-maison-bois-montagne-1.jpg",
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-maison-bois-montagne-2.jpg",
    ],
    accroche: "Terrain 650 m² vue Salève — Permis obtenu — Chantier démarrage T3 2025",
    description: [
      "Terrain de 650 m² en légère pente (8 %), vue dégagée côté Salève, quartier prisé de Saint-Julien-en-Genevois. Le permis de construire a été obtenu en mars 2025 — délai d'instruction : 4 mois.",
      "Maison à étage de 95 m² habitables, architecture à deux niveaux adaptée à la déclivité du terrain. Rez-de-chaussée : séjour 38 m², cuisine ouverte, bureau. Étage : 3 chambres, salle de bains, dégagement.",
      "Bardage bois naturel douglas, menuiseries aluminium gris anthracite, toiture bac acier zinc. Le chantier démarre en septembre 2025 — livraison estimée en décembre 2026.",
    ],
    points: [
      "Permis de construire obtenu — purge de recours tiers effectuée",
      "Zone sismique 3 — bureau d'études structure mandaté",
      "Charpentier ossature bois sélectionné, décennale bois vérifiée",
      "Suivi de chantier hebdomadaire inclus dans les honoraires",
      "Livraison estimée décembre 2026",
    ],
    contexte: "Saint-Julien-en-Genevois est l'une des communes les plus prisées du Genevois français par les frontaliers travaillant à Genève (15 km). Le permis de construire y est instruit par la DDT74, délai moyen 3 à 4 mois — ici obtenu en 4 mois avec purge de recours des tiers. La commune est classée en zone sismique 3 : calcul de structure et renforts d'ossature obligatoires. Le terrain en légère pente (8 %) a nécessité une adaptation architecturale en deux niveaux, avec rez-de-chaussée côté montagne et terrasse sur jardin. Vue dégagée sur le Salève, préservée par la topographie du secteur résidentiel.",
    guidesLies: [
      { titre: "Permis de construire en Genevois français", href: "/guides/permis-construire-genevois/" },
      { titre: "Maîtrise d'œuvre vs CCMI", href: "/guides/moe-vs-ccmi/" },
    ],
  },
  {
    slug: "maison-ossature-bois-cranves-sales-74",
    commune: "Cranves-Sales",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Maison ossature bois",
    surfaceTerrain: 1200,
    surfaceHabitable: 145,
    pieces: 6,
    budget: 430000,
    statut: "Disponible",
    image: "/images/hero-maison-bois-montagne-2.jpg",
    images: [
      "/images/hero-maison-bois-montagne-2.jpg",
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-extension-bois-jardin.jpg",
    ],
    accroche: "Grande parcelle 1 200 m² — Maison 145 m² R+1 — Commune calme du Genevois",
    description: [
      "Grande parcelle de 1 200 m² dans un secteur résidentiel de Cranves-Sales, commune recherchée du Genevois français pour son calme et sa proximité avec Annemasse (10 min) et Genève (20 min). Terrain plat, entièrement viabilisé.",
      "Projet maison R+1 de 145 m² habitables, 6 pièces, terrasse bois 35 m², jardin paysagé. Architecture bioclimatique : séjour-cuisine en double hauteur côté sud, 4 chambres à l'étage, suite parentale avec dressing.",
      "Étude de faisabilité complète disponible sur demande : plans de masse, coupes, budget détaillé corps de métier par corps de métier. Financement simulé sur 25 ans inclus dans le dossier de présentation.",
    ],
    points: [
      "Étude de faisabilité complète disponible sur demande",
      "PLU vérifié — zone UC — CES 0,30",
      "Terrain plat entièrement viabilisé",
      "Budget détaillé par corps de métier",
      "Délai estimé : 16 à 18 mois permis compris",
    ],
    contexte: "Cranves-Sales est une commune résidentielle du Genevois français prisée pour son calme et sa proximité avec Annemasse (10 min) et Genève (20 min via l'A40). Le PLU zone UC autorise un CES de 0,30 — permettant une emprise de 360 m² sur ce terrain de 1 200 m². L'environnement bâti est majoritairement composé de maisons individuelles des années 1980-2000 ; la maison R+1 projetée en ossature bois apporte une architecture contemporaine avec une double hauteur séjour-cuisine et une suite parentale à l'étage. Étude de faisabilité complète (plans, budget corps de métier, simulation financement) disponible sur simple demande.",
    guidesLies: [
      { titre: "Maison ossature bois : avantages, coûts et délais", href: "/guides/maison-ossature-bois/" },
      { titre: "RE2020 et maison bois en Haute-Savoie", href: "/guides/re2020-maison-bois/" },
    ],
  },
  {
    slug: "maison-ossature-bois-archamps-74",
    commune: "Archamps",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Maison ossature bois",
    surfaceTerrain: 750,
    surfaceHabitable: 115,
    pieces: 5,
    budget: 365000,
    statut: "Disponible",
    image: "/images/hero-extension-bois-golden.jpg",
    images: [
      "/images/hero-extension-bois-golden.jpg",
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-maison-bois-montagne-1.jpg",
    ],
    accroche: "Secteur technopôle — Maison bioclimatique 115 m² — RE2020 intégré",
    description: [
      "Terrain de 750 m² dans le secteur résidentiel d'Archamps, commune en développement à 10 minutes de Genève via l'A40. Environnement calme, commerces et écoles à 5 minutes, technopôle à 2 minutes.",
      "Maison de plain-pied de 115 m² en ossature bois, orientation optimisée nord-sud pour maximiser les apports solaires passifs. Concept bioclimatique : débord de toiture calculé pour le confort estival, grandes baies vitrées sur terrasse sud.",
      "Projet intègre la RE2020 dès la conception : Bbio < 50, Cep < 70 kWh/m²/an. Toiture végétalisée partielle possible selon PLU. Chauffage PAC air/eau — ballon thermodynamique — VMC double flux.",
    ],
    points: [
      "Orientation bioclimatique optimisée",
      "RE2020 intégré — Bbio et Cep conformes",
      "Zone sismique 3 — renforts ossature prévus",
      "Commerces, écoles, médecins à 5 min",
      "Délai estimé : 14 à 16 mois",
    ],
    contexte: "Archamps est une commune en fort développement du Genevois français, connue pour son technopôle international (200+ entreprises, 3 000 emplois) et son accès direct à Genève en 10 minutes via l'A40. Le PLU d'Archamps impose une attention particulière aux aspects architecturaux : bardages, toitures et insertion paysagère sont soumis à avis du service instructeur. La zone sismique 3 est systématiquement intégrée dans la conception de l'ossature bois avec renforts calculés. Ce projet bioclimatique de plain-pied optimise les apports solaires passifs via de grandes baies sur terrasse sud et un débord de toiture calculé pour le confort estival.",
    guidesLies: [
      { titre: "RE2020 et maison bois en Haute-Savoie", href: "/guides/re2020-maison-bois/" },
      { titre: "Maison ossature bois : avantages, coûts et délais", href: "/guides/maison-ossature-bois/" },
    ],
  },
  {
    slug: "maison-ossature-bois-gex-01",
    commune: "Gex",
    departement: "Ain (01)",
    zone: "Pays de Gex",
    type: "Maison ossature bois",
    surfaceTerrain: 1000,
    surfaceHabitable: 130,
    pieces: 5,
    budget: 400000,
    statut: "Livré",
    image: "/images/hero-extension-bois-jardin.jpg",
    images: [
      "/images/hero-extension-bois-jardin.jpg",
      "/images/hero-extension-bois-golden.jpg",
      "/images/hero-maison-bois-montagne-2.jpg",
    ],
    accroche: "Projet réalisé 2024 — 130 m² ossature bois — Délai tenu : 14 mois",
    description: [
      "Projet livré en octobre 2024 à Gex, Pays de Gex (Ain). Maison ossature bois de 130 m² sur terrain de 1 000 m², 5 pièces, garage double. Client : couple avec 3 enfants, budget initial 400 000 € — budget final respecté à 2 % près.",
      "Bardage mélèze naturel non traité, toiture zinc double-pli, menuiseries aluminium gris 7016. Plancher chauffant basse température alimenté par PAC air/eau Daikin. Ballon thermodynamique, VMC double flux Zehnder.",
      "Chantier coordonné de A à Z par M&M CONSTRUCTION : dépôt et suivi du permis, consultation et sélection des artisans, 14 mois de réunions de chantier hebdomadaires, réception avec levée des réserves. Zéro réserve non soldée à la livraison.",
    ],
    points: [
      "Livré octobre 2024 — budget respecté",
      "14 mois de chantier permis compris",
      "Zéro réserve non soldée à la réception",
      "Artisans locaux 01/74 — décennales vérifiées",
      "Visite de référence possible sur demande",
    ],
    contexte: "Gex est la commune principale du Pays de Gex (Ain), territoire en forte croissance lié à la frontière suisse et à la présence du CERN et des organisations internationales à Genève. Le marché immobilier y est parmi les plus tendus de l'Ain — la construction neuve individuelle est une alternative crédible à l'achat dans l'ancien. Ce projet livré en octobre 2024 illustre la méthode M&M CONSTRUCTION : budget de 400 000 € respecté à 2 % près, délai de 14 mois tenu, zéro réserve non soldée à la réception. Dossier de référence complet disponible pour les futurs clients souhaitant comprendre le déroulement d'un chantier MOE.",
    guidesLies: [
      { titre: "Maîtrise d'œuvre vs CCMI", href: "/guides/moe-vs-ccmi/" },
      { titre: "Comment coordonner un chantier maison bois", href: "/guides/coordonner-chantier-bois/" },
    ],
  },
  {
    slug: "extension-ossature-bois-thonon-les-bains-74",
    commune: "Thonon-les-Bains",
    departement: "Haute-Savoie (74)",
    zone: "Chablais",
    type: "Extension ossature bois",
    surfaceTerrain: 900,
    surfaceHabitable: 45,
    pieces: 2,
    budget: 135000,
    statut: "En cours",
    image: "/images/hero-maison-bois-alpine.jpg",
    images: [
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-extension-bois-jardin.jpg",
      "/images/hero-extension-bois-golden.jpg",
    ],
    accroche: "Extension 45 m² sur maison existante — Chantier démarré — Livraison T1 2026",
    description: [
      "Extension ossature bois de 45 m² sur une maison individuelle des années 1990 à Thonon-les-Bains. Projet : cuisine ouverte 25 m² avec baie coulissante sur terrasse + chambre parentale 20 m² avec dressing.",
      "Démarche de déclaration préalable validée (< 40 m² en zone urbaine). Jonction entre l'existant et l'extension soigneusement traitée : isolation par l'extérieur côté ancien, pare-vapeur continu, bardage douglas aligné sur les matériaux existants.",
      "Chantier en cours depuis juillet 2025. Charpentier ossature bois Haute-Savoie, couvreur-étancheur local, menuisier aluminium. Livraison prévue février 2026.",
    ],
    points: [
      "Déclaration préalable obtenue",
      "Jonction existant/extension traitée par le bureau d'études",
      "Bardage douglas harmonisé avec l'existant",
      "Livraison estimée février 2026",
      "Client suivi depuis la conception — budget tenu",
    ],
    contexte: "Thonon-les-Bains est la deuxième ville de Haute-Savoie après Annecy, implantée sur les rives du lac Léman à 30 minutes de Genève. Son tissu pavillonnier des années 1980-2000 génère une forte demande d'extension et de rénovation thermique. Ce projet d'extension de 45 m² illustre la complexité technique d'une jonction ossature bois sur maçonnerie ancienne : isolation par l'extérieur côté mur existant pour supprimer les ponts thermiques, pare-vapeur continu traité à la jonction, bardage douglas aligné sur les matériaux existants. La déclaration préalable (< 40 m² en zone urbaine) a été obtenue en 2 mois. Livraison estimée en février 2026.",
    guidesLies: [
      { titre: "Extension ossature bois : permis, coût, délais", href: "/guides/extension-ossature-bois/" },
      { titre: "Comment choisir ses artisans pour une maison bois", href: "/guides/choisir-artisans-maison-bois/" },
    ],
  },
  {
    slug: "terrain-vetraz-monthoux-vue-bassin-genevois",
    commune: "Vétraz-Monthoux",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Terrain à bâtir",
    surfaceTerrain: 0,
    surfaceHabitable: 0,
    pieces: 0,
    budget: 350000,
    statut: "Disponible",
    image: "/images/hero-maison-bois-alpine.jpg",
    images: [
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-extension-bois-jardin.jpg",
      "/images/hero-maison-bois-montagne-1.jpg",
    ],
    accroche: "Vue dominante à 180° sur le bassin genevois — Libre constructeur — Lotissement de standing — Tous réseaux sur place",
    description: [
      "Terrain à bâtir identifié auprès de notre partenaire foncier à Vétraz-Monthoux (74100), commune résidentielle du Genevois français à quelques minutes d'Annemasse et de la frontière suisse. Prix de présentation : 350 000 €.",
      "Implanté au sein d'un lotissement de standing entièrement clos, le terrain bénéficie d'une vue dominante à 180° sur l'ensemble du bassin genevois — une exposition rare dans ce secteur. Statut libre constructeur : aucune contrainte d'enseigne imposée. Tous les réseaux (eau, électricité, assainissement) sont disponibles en limite de propriété.",
      "Ce terrain constitue une opportunité pour concevoir une villa contemporaine ou une maison familiale en ossature bois, pleinement adaptée à la vue et à l'orientation. M&M CONSTRUCTION peut accompagner l'étude de faisabilité, la conception architecturale, la sélection des artisans et la coordination du chantier.",
      "Terrain proposé par notre partenaire foncier, sous réserve de disponibilité, d'étude de faisabilité, de validation administrative et d'accord définitif des parties. Informations non contractuelles.",
    ],
    points: [
      "Vue à 180° sur le bassin genevois",
      "Libre constructeur — aucune enseigne imposée",
      "Lotissement de standing entièrement clos",
      "Tous réseaux en limite de propriété",
      "Étude de faisabilité M&M CONSTRUCTION sur demande",
      "Terrain sous réserve de disponibilité et accord du partenaire foncier",
    ],
    contexte: "Vétraz-Monthoux est une commune résidentielle de l'agglomération d'Annemasse, dans le Genevois français (74100). Sa situation géographique — à 5 minutes d'Annemasse et 15 minutes de Genève — en fait l'une des zones les plus recherchées par les frontaliers. Le marché foncier y est très tendu : les terrains libres constructeurs avec vue sont rares. Ce secteur est classé en zone sismique 3 (Haute-Savoie), ce qui impose un bureau d'études structure pour tout projet de construction. M&M CONSTRUCTION intègre systématiquement cette contrainte dans ses études de faisabilité.",
    guidesLies: [
      { titre: "Prix maison ossature bois en Haute-Savoie", href: "/guides/prix-maison-ossature-bois-haute-savoie/" },
      { titre: "Permis de construire en Genevois français", href: "/guides/permis-construire-genevois/" },
      { titre: "Faire construire en Haute-Savoie — guide complet", href: "/faire-construire-haute-savoie/" },
    ],
  },
  {
    slug: "terrain-vetraz-monthoux-1004m2-libre-constructeur",
    commune: "Vétraz-Monthoux",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Terrain à bâtir",
    surfaceTerrain: 1004,
    surfaceHabitable: 0,
    pieces: 0,
    budget: 410000,
    statut: "Disponible",
    image: "/images/hero-maison-bois-montagne-1.jpg",
    images: [
      "/images/hero-maison-bois-montagne-1.jpg",
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-extension-bois-jardin.jpg",
    ],
    accroche: "1 004 m² libre constructeur — Zone UH4 — Grand Genève — Léman Express à proximité",
    description: [
      "Terrain à bâtir de 1 004 m² identifié auprès de notre partenaire foncier à Vétraz-Monthoux (74100). Statut libre constructeur, impliqué dans un secteur résidentiel calme et verdoyant du Grand Genève. Prix de présentation : 410 000 €.",
      "Implanté en zone UH4, le terrain bénéficie d'un cadre de vie alliant tranquillité, environnement paysagé et accès immédiat aux commodités du bassin genevois. Frontière suisse et Léman Express accessibles en quelques minutes, idéal pour un foyer de frontaliers.",
      "Avec plus de 1 000 m² de surface, cette parcelle offre le potentiel d'un projet ambitieux : villa contemporaine avec jardins paysagés, maison familiale en ossature bois avec espaces extérieurs généreux. M&M CONSTRUCTION peut accompagner chaque étape : analyse du PLU, étude de faisabilité, conception architecturale, sélection des artisans locaux qualifiés et coordination du chantier.",
      "Terrain proposé par notre partenaire foncier, sous réserve de disponibilité, d'étude de faisabilité, de validation administrative et d'accord définitif des parties. Informations non contractuelles.",
    ],
    points: [
      "1 004 m² — surface généreuse pour un grand projet",
      "Libre constructeur — pleine liberté de conception",
      "Zone UH4 — secteur résidentiel calme et verdoyant",
      "Léman Express et frontière suisse à proximité",
      "Grand Genève — bassin d'emploi transfrontalier",
      "Terrain sous réserve de disponibilité et accord du partenaire foncier",
    ],
    contexte: "Vétraz-Monthoux est une commune résidentielle de la communauté d'agglomération d'Annemasse-les-Voirons Agglomération, à 15 minutes de Genève. La zone UH4 dans laquelle s'inscrit ce terrain autorise la construction de maisons individuelles avec un coefficient d'emprise au sol réglementé — à vérifier auprès du service urbanisme de la commune lors de l'étude de faisabilité. La zone sismique 3 impose un bureau d'études structure pour tout projet d'ossature bois, systematiquement intégré par M&M CONSTRUCTION. Ce terrain de 1 004 m² est l'une des rares opportunités de grande parcelle libre constructeur dans ce secteur recherché du Genevois français.",
    guidesLies: [
      { titre: "Prix maison ossature bois en Haute-Savoie", href: "/guides/prix-maison-ossature-bois-haute-savoie/" },
      { titre: "Permis de construire en Genevois français", href: "/guides/permis-construire-genevois/" },
      { titre: "Maîtrise d'œuvre vs CCMI", href: "/guides/moe-vs-ccmi/" },
    ],
  },
  {
    slug: "terrain-cranves-sales-709m2-vue-bassin-genevois",
    commune: "Cranves-Sales",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Terrain à bâtir",
    surfaceTerrain: 709,
    surfaceHabitable: 0,
    pieces: 0,
    budget: 265000,
    statut: "Disponible",
    image: "/images/hero-extension-bois-jardin.jpg",
    images: [
      "/images/hero-extension-bois-jardin.jpg",
      "/images/hero-maison-bois-montagne-2.jpg",
      "/images/hero-maison-bois-alpine.jpg",
    ],
    accroche: "709 m² sur les hauteurs de Cranves-Sales — Vue bassin genevois — Construction possible 141 m² au sol",
    description: [
      "Terrain constructible de 709 m² identifié auprès de notre partenaire foncier à Cranves-Sales (74380), sur les hauteurs de la commune. Prix de présentation : 265 000 €.",
      "Bénéficiant d'une belle vue sur le bassin genevois, ce terrain est implanté sur un secteur résidentiel calme, à bonne altitude. Cranves-Sales est une commune prisée du Genevois français pour son environnement préservé, à 10 minutes d'Annemasse et 20 minutes de Genève.",
      "Les caractéristiques de la parcelle permettent d'envisager la construction d'une villa individuelle d'environ 141 m² au sol selon les règles d'urbanisme applicables — à confirmer lors de l'étude de faisabilité. M&M CONSTRUCTION peut prendre en charge l'analyse du PLU, la conception du projet en ossature bois, la consultation des artisans et le suivi du chantier.",
      "Terrain proposé par notre partenaire foncier, sous réserve de disponibilité, d'étude de faisabilité, de validation administrative et d'accord définitif des parties. Informations non contractuelles.",
    ],
    points: [
      "709 m² sur les hauteurs de Cranves-Sales",
      "Vue dégagée sur le bassin genevois",
      "Construction possible estimée à 141 m² au sol (à confirmer PLU)",
      "Commune résidentielle calme — Genevois français",
      "10 min Annemasse — 20 min Genève",
      "Terrain sous réserve de disponibilité et accord du partenaire foncier",
    ],
    contexte: "Cranves-Sales est une commune résidentielle du Genevois français (74380) appréciée pour son cadre de vie préservé et sa situation géographique idéale entre Annemasse et le bassin lémanique. La commune connaît une pression foncière soutenue due à la demande des frontaliers travaillant à Genève. Les terrains en hauteur avec vue dégagée y sont rares et très recherchés. La zone sismique 3 s'applique à tout le secteur — un bureau d'études structure est systématiquement requis pour les projets de construction individuelle. M&M CONSTRUCTION intègre cette contrainte dès la phase de conception.",
    guidesLies: [
      { titre: "Prix maison ossature bois en Haute-Savoie", href: "/guides/prix-maison-ossature-bois-haute-savoie/" },
      { titre: "Faire construire en Haute-Savoie — guide complet", href: "/faire-construire-haute-savoie/" },
      { titre: "Permis de construire en Genevois français", href: "/guides/permis-construire-genevois/" },
    ],
  },
  {
    slug: "terrain-beaumont-685m2-74160",
    commune: "Beaumont",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Terrain à bâtir",
    surfaceTerrain: 685,
    surfaceHabitable: 0,
    pieces: 0,
    budget: 340000,
    statut: "Disponible",
    image: "/images/hero-maison-bois-montagne-2.jpg",
    images: [
      "/images/hero-maison-bois-montagne-2.jpg",
      "/images/hero-extension-bois-jardin.jpg",
      "/images/hero-maison-bois-montagne-1.jpg",
    ],
    accroche: "685 m² en secteur résidentiel — Très belle vue dégagée — Beaumont (74160)",
    description: [
      "Terrain à bâtir de 685 m² identifié auprès de notre partenaire foncier à Beaumont (74160), commune du Genevois français. Prix de présentation : 340 000 €.",
      "Implanté dans un secteur résidentiel bénéficiant d'une très belle vue dégagée, ce terrain offre un cadre de vie agréable dans un environnement calme et qualitatif. Beaumont est une commune bien desservie, à proximité des axes routiers desservant Annemasse, Annecy et la frontière suisse.",
      "La surface de la parcelle permet d'envisager un projet de maison individuelle de belle ampleur. M&M CONSTRUCTION peut accompagner l'analyse de faisabilité, la conception d'une maison ossature bois adaptée à la vue et à la topographie, la sélection des artisans locaux qualifiés et la coordination complète du chantier.",
      "Terrain proposé par notre partenaire foncier, sous réserve de disponibilité, d'étude de faisabilité, de validation administrative et d'accord définitif des parties. Informations non contractuelles.",
    ],
    points: [
      "685 m² en secteur résidentiel calme",
      "Très belle vue dégagée",
      "Beaumont (74160) — Genevois français",
      "Accès Annemasse, Annecy et frontière suisse",
      "Étude de faisabilité M&M CONSTRUCTION sur demande",
      "Terrain sous réserve de disponibilité et accord du partenaire foncier",
    ],
    contexte: "Beaumont est une commune du Genevois français (74160) située dans l'agglomération annemassienne, à bonne altitude avec des vues dégagées caractéristiques du secteur. La commune est appréciée pour son environnement résidentiel calme tout en bénéficiant d'une localisation stratégique à proximité des axes de communication vers Genève. Le PLU local est à vérifier pour confirmer les possibilités de construction et le CES applicable. Zone sismique 3 — bureau d'études structure requis pour tout projet de construction individuelle.",
    guidesLies: [
      { titre: "Faire construire en Haute-Savoie — guide complet", href: "/faire-construire-haute-savoie/" },
      { titre: "Prix maison ossature bois en Haute-Savoie", href: "/guides/prix-maison-ossature-bois-haute-savoie/" },
      { titre: "Maison ossature bois : avantages, coûts et délais", href: "/guides/maison-ossature-bois/" },
    ],
  },
  {
    slug: "terrain-archamps-679m2-frontiere-geneve",
    commune: "Archamps",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Terrain à bâtir",
    surfaceTerrain: 679,
    surfaceHabitable: 0,
    pieces: 0,
    budget: 450000,
    statut: "Disponible",
    image: "/images/1200x742_Bretagne.jpg",
    images: [
      "/images/1200x742_Bretagne.jpg",
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-extension-bois-jardin.jpg",
    ],
    accroche: "679 m² en environnement calme — À quelques minutes de la frontière suisse — Archamps (74160)",
    description: [
      "Parcelle constructible de 679 m² identifiée auprès de notre partenaire foncier à Archamps (74160), commune du Genevois français à quelques minutes de la frontière suisse. Prix de présentation : 450 000 €.",
      "Implantée dans un environnement calme et verdoyant, cette parcelle offre un cadre idéal pour concrétiser un projet de construction individuelle. Archamps est l'une des communes les plus stratégiques du Genevois français : accès direct à Genève en 10 minutes via l'A40, technopôle d'Archamps à proximité, qualité de vie reconnue.",
      "Ce terrain permet d'envisager un projet de maison individuelle ou de villa contemporaine en ossature bois. M&M CONSTRUCTION peut accompagner l'analyse du PLU et des contraintes locales, la conception architecturale adaptée au terrain, la sélection des artisans qualifiés décennaux et la coordination complète du chantier jusqu'à la réception.",
      "Terrain proposé par notre partenaire foncier, sous réserve de disponibilité, d'étude de faisabilité, de validation administrative et d'accord définitif des parties. Informations non contractuelles.",
    ],
    points: [
      "679 m² — parcelle constructible en environnement calme",
      "Archamps (74160) — frontière suisse à 5 minutes",
      "Genève accessible en 10 min via l'A40",
      "Technopôle d'Archamps à proximité",
      "Étude de faisabilité M&M CONSTRUCTION sur demande",
      "Terrain sous réserve de disponibilité et accord du partenaire foncier",
    ],
    contexte: "Archamps est l'une des communes les plus stratégiques du Genevois français, connue pour son technopôle international (200+ entreprises, 3 000 emplois) et son accès direct à Genève en 10 minutes via l'A40. La forte demande des frontaliers rend le foncier y particulièrement tendu et valorisé. Le PLU d'Archamps impose des exigences architecturales spécifiques (intégration paysagère, bardages, toitures) — à analyser précisément lors de l'étude de faisabilité. Zone sismique 3 : renforts d'ossature calculés et bureau d'études structure systématiquement requis. M&M CONSTRUCTION intervient régulièrement sur la commune et maîtrise les contraintes locales.",
    guidesLies: [
      { titre: "Faire construire en Haute-Savoie — guide complet", href: "/faire-construire-haute-savoie/" },
      { titre: "Permis de construire en Genevois français", href: "/guides/permis-construire-genevois/" },
      { titre: "Prix maison ossature bois en Haute-Savoie", href: "/guides/prix-maison-ossature-bois-haute-savoie/" },
    ],
  },
];

export function getAnnonce(slug: string): Annonce | undefined {
  return annonces.find((a) => a.slug === slug);
}

export function getAutresAnnonces(slug: string): Annonce[] {
  return annonces.filter((a) => a.slug !== slug).slice(0, 3);
}
