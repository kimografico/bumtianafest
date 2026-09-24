import { LINKS } from "./links";

export interface Workshop {
  id: string;
  title: string;
  category: "infantil" | "adolescents" | "compartit";
  instructor: string;
  location: string;
  shortDesc: string;
  fullDesc: string;
  ageRange: string;
  duration: string;
  materials: string;
  pedagogicalValues: string[];
  tag: string;
  iconName: string;
  featured?: boolean;
}

export interface Venue {
  id: string;
  name: string;
  type: string;
  address: string;
  description: string;
  activities: string[];
  walkingFromCenter: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization?: string;
  website?: string;
  instagram?: string;
  bio: string;
  talkTitle: string;
  talkDescription: string;
  time: string;
  location: string;
  highlights: string[];
}

export interface ScheduleItem {
  time: string;
  endTime?: string;
  title: string;
  category: "tallers" | "xerrades" | "gastronomia" | "espectacle" | "tot-el-dia";
  location: string;
  description: string;
  badge?: string;
}

export interface RestaurantPartner {
  id?: string;
  name: string;
  type: string;
  image?: string;
  specialOffer: string;
  address: string;
  websiteUrl?: string;
}

export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: "jardineria",
    title: "Taller de Natura",
    category: "compartit",
    instructor: "Albert SantaMaria & Arnau Calvet",
    location: "Can Baratau",
    shortDesc:
      "Taller de reforestació ciutadana i jardineria. Crearem bombes de llavors i les escamparem per zones del poble que volem recuperar i embellir.",
    fullDesc:
      "Taller de reforestació ciutadana i jardineria. Crearem bombes de llavors i les escamparem per zones del poble que volem recuperar i embellir.",
    ageRange: "Per a totes les edats",
    duration: "10.00 h - 12.00 h (2 hores)",
    materials:
      "Terra vegetal ecològica, argila per a boles nendo dango, llavors autòctones del Maresme i plançons forestals.",
    pedagogicalValues: [
      "Estimació i cura del bosc de Tiana",
      "Comprensió de la regeneració post-incendi",
      "Participació activa comunitària",
    ],
    tag: "Natura & Repoblació",
    iconName: "Sprout",
    featured: true,
  },
  {
    id: "percussio",
    title: "Taller de Percussió",
    category: "compartit",
    instructor: "Marc Vila",
    location: "Plaça del Coro",
    shortDesc:
      "El balafó, el djembé, la darbuka, l'ago-go… Coneixeu aquests instruments? Veniu a descobrir els seus sons i creem música plegats!",
    fullDesc:
      "El balafó, el djembé, la darbuka, l'ago-go… Coneixeu aquests instruments?\n\nVeniu a descobrir els seus sons i els de molts altres! Junts formarem una orquestra de percussió i compondrem i interpretarem peces musicals inèdites al moment. En família gaudirem creant música plegats!",
    ageRange: "Per a totes les edats",
    duration: "10.00 h - 12.00 h (2 hores)",
    materials:
      "Balafons, djembés, darbukes, agogôs i instruments de percussió del món facilitats per l'organització.",
    pedagogicalValues: [
      "Exploració sonora i instruments tradicionals d'arreu del món",
      "Sentit del ritme, polirítmies i escolta activa en grup",
      "Composició i expressió espontània compartida en família",
    ],
    tag: "Música & Ritme",
    iconName: "Music",
    featured: true,
  },
  {
    id: "teatre-expressio",
    title: "Taller de Teatre",
    category: "compartit",
    instructor: "Christian Olivé & Marc Costa",
    location: "Sala Albéniz",
    shortDesc:
      "Treballarem el joc teatral a partir de les arts plàstiques i les improvitzacions. Com ens inventem un personatge? Com el movem? Com el vestim?... Vine a descobrir quatre pinzellades teatrals a partir del món del paper.",
    fullDesc:
      "Treballarem el joc teatral a partir de les arts plàstiques i les improvitzacions. Com ens inventem un personatge? Com el movem? Com el vestim?... Vine a descobrir quatre pinzellades teatrals a partir del món del paper.",
    ageRange: "A partir de 5 anys",
    duration: "10.00 h - 12.00 h (2 hores)",
    materials: "Atrezzo i espai escènic adaptat.",
    pedagogicalValues: [
      "Expressió emocional",
      "Desinhibició i confiança",
      "Vincle afectiu a través del joc escènic",
    ],
    tag: "Arts Escèniques",
    iconName: "Theater",
    featured: true,
  },
  {
    id: "espai-nadons",
    title: "Espai Nadons",
    category: "compartit",
    instructor: "Eva Campmajor & Sílvia Espinosa",
    location: "Jardí Lola Anglada",
    shortDesc: "Un espai perquè els més petits també en puguin gaudir amb les seves famílies. Amb Eva Campmajor i Sílvia Espinosa, de l'Escola Bressol El Més Petit de Tots i El Petit Paradís.",
    fullDesc: "Un espai perquè els més petits també en puguin gaudir amb les seves famílies. Amb Eva Campmajor i Sílvia Espinosa, de l'Escola Bressol El Més Petit de Tots i El Petit Paradís.",
    ageRange: "",
    duration: "10.00 h - 12.00 h (2 hores)",
    materials: "Espai adaptat per a nadons i famílies.",
    pedagogicalValues: [
      "Joc lliure i exploració sensorial",
      "Vincle afectiu en família",
      "Espai segur i acollidor per als més petits",
    ],
    tag: "Primera Infància",
    iconName: "Baby",
    featured: false,
  },
];

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: "laia-ferrer",
    name: "Laia Ferrer",
    role: "Metgessa Especialista en Pediatria",
    organization: "Centre d'Atenció Primària (CAP)",
    bio: "Llicenciada en medicina i cirurgia per la Universitat Autònoma de Barcelona. Especialista en Pediatria. Actualment treballa en un Centre d'Atenció Primària.",
    talkTitle: "Neurodesenvolupament, llenguatge i pantalles",
    talkDescription:
      "Quines conseqüències té l'ús o l'abús de les pantalles durant l'etapa dels 0 als 3 anys? Sovint podem pensar que allò que fem amb els més petits de casa no tindrà gaire impacte perquè no se'n recordaran, però és justament al contrari. Els primers anys de vida són clau per al neurodesenvolupament dels infants. Una detecció precoç i una correcta estimulació psicomotora poden marcar la diferència en el futur d'una criatura.",
    time: "16.00 h - 17.00 h",
    location: "Sala Albéniz",
    highlights: [
      "Conseqüències de l'ús o l'abús de les pantalles en l'etapa dels 0 als 3 anys",
      "Els primers anys com a clau fonamental per al neurodesenvolupament infantil",
      "La importància d'una detecció precoç i una correcta estimulació psicomotora",
      "Torn obert de preguntes i recomanacions pràctiques per a famílies",
    ],
  },
  {
    id: "armando-bastida",
    name: "Armando Bastida",
    role: "Infermer Pediàtric, Escriptor & Divulgador",
    organization: "Criar con Sentido Común",
    website: LINKS.speakers.armandoBastida,
    instagram: LINKS.instagram.armandoBastida,
    bio: 'Referent internacional en criança respectuosa, infermer pediàtric amb més de dues dècades d\'experiència, autor de best-sellers com "Criar con el corazón" o "Educar sin miedo". Fundador de la comunitat "Crianza con Sentido Común" que acompanya milers de famílies. Divulgador amb més de 1,8 milions de seguidors a Instagram, on comparteix continguts pràctics i properos sobre salut infantil i educació.',
    talkTitle: "Criar amb sentit comú",
    talkDescription:
      'Una trobada propera, pràctica i plena d\'empatia, on Armando Bastida abordarà els reptes reals de la primera infància, sota el lema "Criar con Sentido Común": com desmuntar mites, reduir la culpa parental i reforçar la connexió familiar en el dia a dia.',
    time: "17.15 h - 18.45 h",
    location: "Sala Albéniz",
    highlights: [
      "Acompanyament emocional des de la primera infància",
      "Com establir límits segurs sense recórrer al càstig ni a la culpa",
      "Torn obert de preguntes directes amb Armando Bastida",
      "Signatura de llibres en finalitzar la xerrada",
    ],
  },
];

export const VENUES_DATA: Venue[] = [
  {
    id: "placa-vila",
    name: "Plaça de la Vila",
    type: "Cor del BUMFEST & Punt d'Acollida",
    address: "Plaça de la Vila, 08391 Tiana",
    description:
      "Punt central d'acollida de famílies, recollida de polseres i itineraris, espai de trobada i jocs populars tradicionals.",
    activities: [
      "Acollida i Entrega de Polseres (09.30 h)",
      "Taller Natura: Jardineria & Cura de la Terra (10.00 h - 12.00 h)",
      "Punt d'Informació Oficial",
    ],
    walkingFromCenter: "0 min (Punt Central)",
    coordinates: { lat: 41.4827, lng: 2.2701 },
  },
  {
    id: "sala-albeniz",
    name: "Sala Albéniz",
    type: "Teatre & Espai Escènic Municipal",
    address: "Av. Isaac Albéniz 8-10, Tiana",
    description:
      "Emblemàtic teatre municipal on tindrà lloc les xerrades de criança, el taller de teatre i expressió matinal i el gran concert familiar de cloenda amb la Sedajazz Young Band.",
    activities: [
      "Taller Teatre & Expressió Primera Infància (10.00 h - 12.00 h)",
      "Xerrada Laia Ferrer: Neurodesenvolupament, llenguatge i pantalles (16.00 h)",
      "Xerrada Armando Bastida: Criança amb Sentit Comú (17.15 h)",
    ],
    walkingFromCenter: "1 min a peu (Plaça de la Vila)",
    coordinates: { lat: 41.4828, lng: 2.2701 },
  },
  {
    id: "can-baratau",
    name: "Can Baratau",
    type: "Espai Natural & Jardineria",
    address: "Can Baratau, Tiana",
    description: "Espai natural a l'aire lliure per al taller de reforestació i jardineria.",
    activities: ["Taller de Natura: Jardineria & Repoblació (10.00 h - 12.00 h)"],
    walkingFromCenter: "A determinar",
    coordinates: { lat: 0, lng: 0 },
  },
  {
    id: "placa-coro",
    name: "Plaça del Coro",
    type: "Espai a l'aire lliure & Percussió",
    address: "Plaça del Coro de Tiana",
    description: "Espai obert per al taller de percussió en família.",
    activities: ["Taller de Percussió en Família (10.00 h - 12.00 h)"],
    walkingFromCenter: "A determinar",
    coordinates: { lat: 0, lng: 0 },
  },
  {
    id: "parc-lola-anglada",
    name: "Jardí Lola Anglada",
    type: "Parc Infantil & Espai de Joc",
    address: "Jardí Lola Anglada, Tiana",
    description: "El que va ser el jardí romàntic de la casa de la Lola Anglada i on va fer moltes de les seves creacions.",
    activities: ["Espai Nadons (10.00 h - 12.00 h)"],
    walkingFromCenter: "A determinar",
    coordinates: { lat: 0, lng: 0 },
  },
  {
    id: "parc-antic-futbol",
    name: "Parc de l'Antic Camp de Futbol",
    type: "Parc & Espai a l'aire lliure",
    address: "Parc de l'Antic Camp de Futbol, Tiana",
    description: "Espai obert per a jocs populars, DJ i activitats familiars.",
    activities: ["Jocs Populars Tradicionals (11.00 h - 14.00 h)", "DJ VINAXA (12.00 h - 14.00 h)"],
    walkingFromCenter: "A determinar",
    coordinates: { lat: 0, lng: 0 },
  },
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    time: "09.30 h",
    title: "Acollida de Famílies",
    category: "tot-el-dia",
    location: "Plaça de la Vila",
    description: "Recollida de polseres, mapa d'itineraris i benvinguda al BUMFEST TIANA 2026.",
  },
  {
    time: "10.00 h - 12.00 h",
    title: "Taller de Natura",
    category: "tallers",
    location: "Can Baratau",
    description:
      "Taller de reforestació ciutadana i jardineria. Crearem bombes de llavors i les escamparem per zones del poble que volem recuperar i embellir.",
    badge: "Taller",
  },
  {
    time: "10.00 h - 12.00 h",
    title: "Taller de Percussió",
    category: "tallers",
    location: "Plaça del Coro",
    description:
      "El balafó, el djembé, la darbuka, l'ago-go... Creació d'una orquestra de percussió en família.",
    badge: "Taller",
  },
  {
    time: "10.00 h - 12.00 h",
    title: "Taller de Teatre",
    category: "tallers",
    location: "Sala Albéniz",
    description:
      "Treballarem el joc teatral a partir de les arts plàstiques i les improvitzacions. Com ens inventem un personatge? Com el movem? Com el vestim?... Vine a descobrir quatre pinzellades teatrals a partir del món del paper.",
    badge: "Taller",
  },
  {
    time: "11.00 h - 14.00 h",
    title: "Jocs Populars Tradicionals",
    category: "tot-el-dia",
    location: "Parc de l'Antic Camp de Futbol",
    description:
      "Jocs tradicionals, cooperació al aire lliure dinamitzats pel CAU de Tiana.",
  },
  {
    time: "12.00 h - 14.00 h",
    title: "DJ VINAXA",
    category: "gastronomia",
    location: "Parc de l'Antic Camp de Futbol",
    description: "Música per a tota la família.",
  },
  {
    time: "14.00 h - 16.00 h",
    title: "Descans & Dinar Popular de Proximitat",
    category: "gastronomia",
    location: "Xarxa de Restaurants i Terrasses de Tiana",
    description:
      "Pausa per dinar i agafar forces a la xarxa d'establiments gastronòmics de Tiana amb menús especials.",
  },
  {
    time: "16.00 h - 17.00 h",
    title: 'Xerrada: Laia Ferrer - "Neurodesenvolupament, llenguatge i pantalles"',
    category: "xerrades",
    location: "Sala Albéniz",
    description:
      "Impacte de l'ús i abús de pantalles en l'etapa dels 0 als 3 anys, claus del neurodesenvolupament infantil i estimulació psicomotora.",
    badge: "Xerrada",
  },
  {
    time: "17.15 h - 18.45 h",
    title: 'Xerrada: Armando Bastida - "Criar amb sentit comú"',
    category: "xerrades",
    location: "Sala Albéniz",
    description:
      "Claus de la criança respectuosa, desmuntar mites i reduir la culpa per gaudir de la infància amb sentit comú.",
    badge: "Xerrada",
  },
  {
    time: "19.00 h - 20.00 h",
    title: "Concert de Cloenda: Sedajazz Young Band",
    category: "espectacle",
    location: "Plaça de la Vila",
    description:
      "Gran concert de cloenda amb la Sedajazz Young Band: música creativa, improvisació i repertori festiu per a petits i grans.",
    badge: "Cloenda",
  },
];

export const RESTAURANTS_DATA: RestaurantPartner[] = [
  {
    id: "casal",
    name: "El Casal de Tiana",
    type: "Cuina tradicional",
    specialOffer: "",
    address: "Av. Isaac Albéniz 8-10",
    websiteUrl: LINKS.restaurants.casal,
  },
  {
    id: "barbar",
    name: "Bàrbar",
    type: "Tapes, platets creatius & vermut",
    specialOffer: "",
    address: "Plaça de la Vila",
    websiteUrl: LINKS.restaurants.barbar,
  },
  {
    id: "tiriti",
    name: "Tiriti Bar Restaurant Pizzeria",
    type: "Pizzes al forn de llenya & pasta",
    specialOffer: "",
    address: "Plaça de la Vila",
    websiteUrl: LINKS.restaurants.tiriti,
  },
  ];

export const PRICING_DATA = {
  title: "Accés 100% Gratuït",
  subtitle:
    "Totes les activitats, tallers, xerrades i espectacles del BUMFEST són d'accés obert i gratuït gràcies a l'Ajuntament de Tiana.",
  packs: [
    {
      name: "Tallers Didàctics Matinals",
      price: "Gratuït",
      period: "Entrada lliure per a infants i famílies",
      description:
        "Accés lliure a tots els tallers didàctics matinals i a la zona de jocs populars tradicionals.",
      features: [
        "Material complet inclòs per als tallers",
        "Activitats familiars obertes a tothom",
        "Jardineria & Repoblació, Percussió i Teatre",
        "Espai de jocs populars tradicionals",
      ],
      highlighted: false,
    },
    {
      name: "Xerrades de Criança & Espectacle",
      price: "Gratuït",
      period: "Aforament limitat per ordre d’arribada",
      description:
        "Ponències de Laia Ferrer i Armando Bastida a El Casal i el gran Espectacle Familiar a la Sala Albéniz.",
      features: [
        "Xerrades magistrals de Laia Ferrer i Armando Bastida",
        "Espectacle Teatral Familiar a la Sala Albéniz",
        "Espai DJ Vermut i dinamització al carrer",
      ],
      highlighted: true,
      tag: "Accés Lliure",
    },
  ],
  subsidyNote:
    "El BUMFEST és una iniciativa cultural comunitària amb el suport de l'Ajuntament de Tiana.",
};

export const FAQ_DATA = [
  {
    q: "Com s'han de fer els tallers? Cal que els pares es quedin?",
    a: "Sí! L'essència del BUMFEST és precisament l'aprenentatge compartit en la primera infància: cada infant participa juntament amb el pare, la mare, l'avi, l'àvia o el seu acompanyant adult. És un espai de connexió i gaudi mutu.",
  },
  {
    q: "Com arribar a Tiana en transport públic?",
    a: "Tiana es troba a només 15 km de Barcelona i està molt ben connectada amb transport públic.\n\nPots arribar-hi amb la línia R1 de Rodalies fins a l'estació de Montgat i, des d'allà, enllaçar amb les línies d'autobús B29 o B32, que connecten amb el centre del poble.\n\nUna altra opció és arribar amb la línia 2 del metro fins a Pompeu Fabra, a Badalona, i enllaçar-hi amb la línia B29 fins a Tiana.",
  },
  {
    q: "Cal reserva prèvia per a les xerrades de criança?",
    a: "L'accés a totes les xerrades i activitats del BUMFEST és 100% gratuït. L'aforament de la Sala Albéniz és limitat, reserva la teva plaça omplint els formularis.",
  },
  {
    q: "Els espais estan adaptats per a cotxets i mobilitat reduïda?",
    a: "Sí, tots els espais municipals seleccionats (Plaça de la Vila, Sala Albéniz, Can Baratau, Plaça del Coro, Jardí Lola Anglada, Parc de l'Antic Camp de Futbol) disposen d'accessos adaptats i zones d'aparcament de cotxets.",
  },
];

export const TEAM_DATA = [
  {
    name: "Pi McCarthy",
    role: "Direcció Artística & Pedagògica",
    company: "2LB PRODUCCIONES",
    bio: "Cantautora, productora vocal i docent al SAE Institute i a l'ESEM Taller de Músics de Barcelona. Ha actuat en festivals internacionals com el North Sea Jazz de Rotterdam. Dirigeix projectes artístics a la seva productora 2LB.",
  },
  {
    name: "Oriol Roca",
    role: "Direcció Tècnica & Producció de So",
    company: "2LB PRODUCCIONES",
    bio: 'Productor tècnic, regidor i enginyer de so amb dilatada trajectòria en festivals com Sònar, Primavera Sound, RockFest, i produccions per a TVE ("En el Aire" d\'Andreu Buenafuente), Liceu i Palau de la Música. Veí de Tiana amb el seu estudi de gravació al poble.',
  },
];
