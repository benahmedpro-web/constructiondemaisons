// Catalogue des gammes de maisons ossature bois.
// Source unique partagée par /catalogue/ et /catalogue/[modele]/ : les deux pages
// affichaient sinon des caractéristiques à maintenir en double.
//
// Les champs surfaces / typologies / variantes décrivent la gamme entière, pas un
// plan précis. Les surfaces réellement proposées sur le terrain viennent des
// annonces (src/lib/annonces.ts), jamais d'ici.

export interface Gamme {
  nom: string;
  slug: string;
  type: "Plain-pied" | "Étage";
  surfaces: string;
  typologies: string;
  variantes: number;
  description: string;
  tag: string;
  image: string;
  /** Phrase de positionnement, reprise en meta description. */
  pitch: string;
  /** Profil auquel la gamme répond. */
  pourQui: string;
  /** Comportement du modèle vis-à-vis de la parcelle. */
  implantation: string;
  /** Organisation intérieure. */
  amenagement: string;
}

export const gammes: Gamme[] = [
  {
    nom: "Tournette",
    slug: "tournette",
    type: "Plain-pied",
    surfaces: "65 – 90 m²",
    typologies: "T3 à T4",
    variantes: 9,
    description: "Maison de plain-pied compacte et fonctionnelle. Idéale pour les terrains à faible emprise. Disponible avec ou sans garage intégré.",
    tag: "Entrée de gamme",
    image: "/images/modele-tournette.png",
    pitch: "Le plain-pied compact du catalogue, pour les parcelles où l'emprise au sol est comptée.",
    pourQui: "Le Tournette s'adresse aux projets où le budget et l'emprise comptent autant l'un que l'autre : premier achat, couple avec un ou deux enfants, ou résidence pensée pour durer sans escalier. C'est la gamme d'entrée du catalogue, avec neuf plans disponibles, ce qui laisse de la marge pour ajuster la distribution sans sortir du modèle.",
    implantation: "Sur une parcelle étroite ou fortement grevée par les reculs, un plain-pied de 65 à 90 m² passe là où une maison plus large ne tiendrait pas. Le garage se traite en intégré ou en construction détachée selon ce que permet le terrain, ce qui donne un degré de liberté supplémentaire à l'implantation.",
    amenagement: "La distribution supprime les circulations inutiles : séjour-cuisine traversant quand l'orientation le permet, chambres regroupées sur une même aile, salle d'eau et cellier accessibles depuis l'entrée. Rien n'est perdu en palier ni en dégagement, ce qui explique qu'une surface modeste reste confortable à l'usage.",
  },
  {
    nom: "Bargy",
    slug: "bargy",
    type: "Plain-pied",
    surfaces: "75 – 100 m²",
    typologies: "T4 à T5",
    variantes: 8,
    description: "Plain-pied spacieux avec séjour traversant ou séjour avant selon l'orientation de votre terrain. Grande luminosité naturelle.",
    tag: "Le plus populaire",
    image: "/images/modele-bargy.png",
    pitch: "Le plain-pied le plus demandé du catalogue, dont le séjour s'oriente selon la parcelle.",
    pourQui: "Le Bargy est la gamme la plus retenue, et pour une raison simple : en version 100 m², elle loge quatre chambres sans imposer d'escalier. Elle convient aux familles qui veulent tout sur un niveau, comme aux acquéreurs qui anticipent le long terme. La version 75 m² reprend le même plan en format resserré, pour trois chambres.",
    implantation: "La particularité du Bargy tient à son séjour, qui existe en version traversante et en version avant. L'orientation se décide donc à l'implantation plutôt que sur plan : on va chercher le sud que la parcelle le donne côté jardin ou côté rue. Un plain-pied reste exigeant en emprise, ce qui suppose un terrain correctement dimensionné.",
    amenagement: "Les chambres sont regroupées à l'opposé des pièces de vie, ce qui isole le sommeil du séjour sans cloisonner la maison. La cuisine ouvre sur l'espace de vie tout en restant hors des circulations principales. Huit plans permettent de déplacer le garage, le cellier ou l'entrée selon la configuration retenue.",
  },
  {
    nom: "Voirons",
    slug: "voirons",
    type: "Plain-pied",
    surfaces: "100 m²",
    typologies: "T5",
    variantes: 1,
    description: "Grand plain-pied 4 chambres avec garage intégré. Conçu pour les familles qui souhaitent tout de plain-pied sans compromis sur les espaces.",
    tag: "Famille",
    image: "/images/modele-voirons.png",
    pitch: "Quatre chambres et un garage intégré, intégralement de plain-pied.",
    pourQui: "Le Voirons est la réponse aux familles qui refusent l'escalier sans vouloir réduire les surfaces. Quatre chambres et un garage sous le même toit, sur un seul niveau : c'est le programme le plus complet du catalogue en plain-pied, et le seul à intégrer le garage au volume principal.",
    implantation: "C'est la gamme la plus exigeante en emprise au sol. Loger 100 m² habitables plus un garage sur un unique niveau demande une parcelle généreuse, et l'implantation doit composer avec les reculs sans écraser l'extérieur restant. En contrepartie, l'absence d'étage simplifie la structure et supprime toute contrainte d'accessibilité.",
    amenagement: "Le plan est unique, pensé d'un bloc plutôt que décliné : quatre chambres, pièces de vie dimensionnées en conséquence, et un garage accessible directement depuis l'intérieur. Le confort d'usage est la priorité assumée de cette gamme, y compris quand il coûte en emprise.",
  },
  {
    nom: "Salève",
    slug: "saleve",
    type: "Étage",
    surfaces: "75 – 90 m²",
    typologies: "T4",
    variantes: 3,
    description: "Maison à étage gamme Éco. Emprise au sol réduite — idéale pour les terrains étroits. Séjour généreux au RDC, chambres à l'étage.",
    tag: "Gamme Éco",
    image: "/images/modele-saleve.png",
    pitch: "La maison à étage d'entrée de gamme, pour les parcelles que les plain-pieds ne peuvent pas accueillir.",
    pourQui: "Le Salève est la porte d'entrée du catalogue en maison à étage. Il s'adresse aux projets contraints par la parcelle plus que par le programme : trois chambres, un séjour correctement dimensionné, et une emprise au sol qui reste la plus faible du catalogue à surface habitable égale.",
    implantation: "Empiler plutôt qu'étaler change tout sur un terrain étroit ou profond. À surface habitable identique, le Salève libère nettement plus d'extérieur exploitable qu'un plain-pied, et s'inscrit dans des reculs qui rendraient une maison de plain-pied impossible à poser.",
    amenagement: "Le rez-de-chaussée est consacré au séjour et aux pièces communes, l'étage aux chambres. Cette séparation franche entre les temps de la journée et ceux de la nuit est le principal apport de la typologie à étage, et elle fonctionne ici sur une surface contenue.",
  },
  {
    nom: "Aravis",
    slug: "aravis",
    type: "Étage",
    surfaces: "80 – 100 m²",
    typologies: "T4 à T5",
    variantes: 5,
    description: "Maison à étage avec suite parentale au RDC. Organisation optimale : vie de famille à l'étage, intimité des parents préservée.",
    tag: "Suite parentale",
    image: "/images/modele-aravis.png",
    pitch: "La maison à étage avec suite parentale au rez-de-chaussée, habitable de plain-pied sur le long terme.",
    pourQui: "L'Aravis répond à deux besoins d'un coup : l'emprise réduite d'une maison à étage, et une chambre accessible sans escalier. Les parents disposent d'un espace autonome au rez-de-chaussée, les enfants de l'étage entier. C'est aussi la gamme qui vieillit le mieux, puisqu'elle reste habitable sans monter le jour où cela devient contraignant.",
    implantation: "L'emprise au sol est intermédiaire : plus large qu'un Salève à cause de la suite parentale en bas, nettement plus contenue qu'un plain-pied de surface équivalente. Cela ouvre l'Aravis à des parcelles où le Bargy ou le Voirons ne tiendraient pas, sans renoncer à une chambre de plain-pied.",
    amenagement: "La suite parentale au rez-de-chaussée est la signature de la gamme. Les pièces de vie occupent le reste du niveau bas, les chambres restantes l'étage. En version 100 m², l'ensemble atteint quatre chambres ; en version 80 m², trois.",
  },
  {
    nom: "Étale",
    slug: "etale",
    type: "Étage",
    surfaces: "81 – 118 m²",
    typologies: "T4 à T5",
    variantes: 5,
    description: "La gamme la plus spacieuse. Grandes pièces de vie, volumes généreux, jusqu'à 118 m² habitables. Pour un projet sans compromis.",
    tag: "Haut de gamme",
    image: "/images/modele-etale.png",
    pitch: "La gamme la plus spacieuse du catalogue, jusqu'à 118 m² habitables.",
    pourQui: "L'Étale s'adresse aux projets qui ne veulent pas arbitrer sur les volumes. C'est la plus grande surface du catalogue, et la seule à intégrer cellier et dressing dès la conception plutôt qu'en les prenant sur les chambres. Gamme haute, pour une famille installée ou un projet de résidence principale durable.",
    implantation: "Malgré la surface, l'emprise au sol reste celle d'une maison à étage : l'Étale 118 se pose sur des parcelles où un plain-pied de surface comparable serait impossible. C'est précisément l'intérêt de la typologie, et ce qui permet d'atteindre 118 m² sans terrain exceptionnel.",
    amenagement: "La surface est mise au service des pièces de vie : un séjour de grande dimension au rez-de-chaussée, quatre chambres à l'étage, et des rangements prévus dès le plan. Cellier et dressing ne mordent pas sur les surfaces habitables, ce qui distingue cette gamme des autres à nombre de chambres égal.",
  },
];

export const gammeParSlug = (slug: string) => gammes.find((g) => g.slug === slug);

/** « le Bargy » mais « l'Aravis » : élision devant voyelle, Étale compris. */
export const avecArticle = (nom: string) =>
  /^[aeiouyéèêàâîôû]/i.test(nom) ? `l'${nom}` : `le ${nom}`;

/** Même chose en tête de phrase. */
export const AvecArticle = (nom: string) => {
  const s = avecArticle(nom);
  return s.charAt(0).toUpperCase() + s.slice(1);
};
