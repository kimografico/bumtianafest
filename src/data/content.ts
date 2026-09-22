import { LINKS } from './links';

export interface Workshop {
  id: string;
  title: string;
  category: 'infantil' | 'adolescents' | 'compartit';
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
  category: 'tallers' | 'xerrades' | 'gastronomia' | 'espectacle' | 'tot-el-dia';
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
    id: 'jardineria',
    title: 'Taller de Natura',
    category: 'compartit',
    instructor: 'Albert SantaMaria & Arnau Calvet',
    location: 'Plaça de la Vila',
    shortDesc: 'Taller de reforestació ciutadana i jardineria. Crearem bombes de llevors i les escamparem per zones degradades del poble.',
    fullDesc: 'Taller de reforestació ciutadana i jardineria. Crearem bombes de llevors i les escamparem per zones degradades del poble.',
    ageRange: 'Primera infància i famílies (2 a 8 anys)',
    duration: '10:00 - 12:00 (2 hores)',
    materials: 'Terra vegetal ecològica, argila per a boles nendo dango, llavors autòctones del Maresme i plançons forestals.',
    pedagogicalValues: [
      'Estimació i cura del bosc de Tiana',
      'Comprensió de la regeneració post-incendi',
      'Participació activa comunitària'
    ],
    tag: 'Natura & Repoblació',
    iconName: 'Sprout',
    featured: true
  },
  {
    id: 'percussio',
    title: 'Taller de Percussió',
    category: 'compartit',
    instructor: 'Marc Vila',
    location: 'Doctor Mascaró',
    shortDesc: 'El balafó, el djembé, la darbuka, l’ago-go… Coneixeu aquests instruments? Veniu a descobrir els seus sons i creem música plegats!',
    fullDesc: 'El balafó, el djembé, la darbuka, l’ago-go… Coneixeu aquests instruments?\n\nVeniu a descobrir els seus sons i els de molts altres! Junts formarem una orquestra de percussió i compondrem i interpretarem peces musicals inèdites al moment. En família gaudirem creant música plegats!',
    ageRange: 'Famílies i primera infància (totes les edats)',
    duration: '10:00 - 12:00 (2 hores)',
    materials: "Balafons, djembés, darbukes, agogôs i instruments de percussió del món facilitats per l'organització.",
    pedagogicalValues: [
      "Exploració sonora i instruments tradicionals d'arreu del món",
      'Sentit del ritme, polirítmies i escolta activa en grup',
      'Composició i expressió espontània compartida en família'
    ],
    tag: 'Música & Ritme',
    iconName: 'Music',
    featured: true
  },
  {
    id: 'teatre-expressio',
    title: 'Taller de Teatre',
    category: 'compartit',
    instructor: 'Christian Olivé & Marc Costa',
    location: 'Sala Albéniz',
    shortDesc: 'Treballarem el joc teatral a partir de les arts plàstiques i les improvitzacions. Com ens inventem un personatge? Com el movem? Com el vestim?... Vine a descobrir quatre pinzellades teatrals a partir del món del paper.',
    fullDesc: 'Treballarem el joc teatral a partir de les arts plàstiques i les improvitzacions. Com ens inventem un personatge? Com el movem? Com el vestim?... Vine a descobrir quatre pinzellades teatrals a partir del món del paper.',
    ageRange: 'Primera infància (2 a 8 anys + acompanyant)',
    duration: '10:00 - 12:00 (2 hores)',
    materials: 'Atrezzo suau, robes de colors i espai escènic adaptat.',
    pedagogicalValues: [
      'Expressió emocional',
      'Desinhibició i confiança',
      'Vincle afectiu a través del joc escènic'
    ],
    tag: 'Arts Escèniques',
    iconName: 'Theater',
    featured: true
  }
];

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 'laia-ferrer',
    name: 'Laia Ferrer',
    role: 'Metgessa Especialista en Pediatria',
    organization: "Centre d'Atenció Primària (CAP)",
    bio: "Llicenciada en medicina i cirurgia per la Universitat Autònoma de Barcelona. Especialista en Pediatria. Actualment treballa en un Centre d'Atenció Primària.",
    talkTitle: 'Neurodesenvolupament, llenguatge i pantalles',
    talkDescription: "Quines conseqüències té l'ús o abús de pantalles en l'etapa dels 0 als 3 anys? Sovint podem pensar que allò que fem amb els més petits de casa no tindrà tant d'impacte perquè no se'n recordaran, però és justament al contrari. Els primers anys de vida són claus pel neurodesenvolupament dels infants. Una detecció precoç i una correcta estimulació psico-motora marquen la diferència pel futur d'aquella criatura.",
    time: '16:00h - 17:00h',
    location: 'Sala Albéniz',
    highlights: [
      "Conseqüències de l'ús o abús de pantalles en l'etapa dels 0 als 3 anys",
      "Els primers anys com a clau fonamental pel neurodesenvolupament infantil",
      "La importància d'una detecció precoç i una correcta estimulació psico-motora",
      "Torn obert de preguntes i recomanacions pràctiques per a famílies"
    ]
  },
  {
    id: 'armando-bastida',
    name: 'Armando Bastida',
    role: 'Infermer Pediàtric, Escriptor & Divulgador',
    organization: 'Criar con Sentido Común',
    website: LINKS.speakers.armandoBastida,
    instagram: LINKS.instagram.armandoBastida,
    bio: "Referent internacional en criança respectuosa, infermer pediàtric amb més de dues dècades d'experiència, autor de best-sellers com \"Criar con el corazón\" o \"Educar sin miedo\". Fundador de la comunitat \"Crianza con Sentido Común\" que acompanya milers de famílies. Divulgador amb més de 1,8 milions de seguidors a Instagram, on comparteix continguts pràctics i properos sobre salut infantil i educació.",
    talkTitle: 'Criar amb sentit comú',
    talkDescription: "Una trobada propera, pràctica i plena d'empatia on Armando Bastida abordarà els reptes reals de la primera infància sota el lema \"Crianza con sentido común\": com desmuntar mites, reduir la culpa parental i reforçar la connexió familiar en el dia a dia.",
    time: '17:00h - 18:30h',
    location: 'Sala Albéniz',
    highlights: [
      'Acompanyament emocional des de la primera infància',
      'Com establir límits segurs sense recórrer al càstig ni a la culpa',
      'Torn obert de preguntes directes amb Armando Bastida',
      'Signatura de llibres en finalitzar la xerrada'
    ]
  }
];

export const VENUES_DATA: Venue[] = [
  {
    id: 'placa-vila',
    name: 'Plaça de la Vila',
    type: "Cor del Festival & Punt d'Acollida",
    address: 'Plaça de la Vila, 08391 Tiana',
    description: "Punt central d'acollida de famílies, recollida de polseres i itineraris, espai de trobada i jocs populars tradicionals.",
    activities: [
      'Acollida i Entrega de Polseres (09:30h)',
      'Taller Natura: Jardineria & Cura de la Terra (10:00h - 12:00h)',
      'Jocs Populars Tradicionals (11:00h - 14:00h)',
      "Punt d'Informació Oficial"
    ],
    walkingFromCenter: '0 min (Punt Central)',
    coordinates: { lat: 41.4827, lng: 2.2701 }
  },
  {
    id: 'sala-albeniz',
    name: 'Sala Albéniz',
    type: 'Teatre & Espai Escènic Municipal',
    address: 'Carrer de Sant Domènec, 1, 08391 Tiana',
    description: "Emblemàtic teatre municipal on tindrà lloc les xerrades de criança, el taller de teatre i expressió matinal i el gran concert familiar de cloenda amb la Sedajazz Young Band.",
    activities: [
      'Xerrada Laia Ferrer: Neurodesenvolupament, llenguatge i pantalles (16:00h)',
      'Xerrada Armando Bastida: Criança amb Sentit Comú (17:00h)',
      'Taller Teatre & Expressió Primera Infància (10:00h - 12:00h)',
      'Concert de Cloenda: Sedajazz Young Band (19:00h - 20:00h)'
    ],
    walkingFromCenter: '1 min a peu (Plaça de la Vila)',
    coordinates: { lat: 41.4828, lng: 2.2701 }
  },
  {
    id: 'el-casal',
    name: 'El Casal de Tiana',
    type: 'Ateneu & Centre Cívic Cultural',
    address: 'Avinguda Isaac Albéniz, 12, 08391 Tiana',
    description: "Espai de trobada i acollida del festival, seu de l'Associació de Comerciants de Tiana (ACIST).",
    activities: [],
    walkingFromCenter: '2 min a peu',
    coordinates: { lat: 41.4822, lng: 2.2694 }
  },
  {
    id: 'doctor-mascaro',
    name: 'Doctor Mascaró',
    type: 'Espai Cultural & Carrer Emblemàtic',
    address: 'Carrer del Doctor Mascaró, 08391 Tiana',
    description: "Espai emblemàtic a l'aire lliure acollidor per a la creació sonora i el gran taller matinal de percussió en família.",
    activities: [
      'Taller de Percussió en Família (10:00h - 12:00h)'
    ],
    walkingFromCenter: '1 min a peu (Plaça de la Vila)',
    coordinates: { lat: 41.4824, lng: 2.2698 }
  },
  {
    id: 'lescorxador',
    name: "L'Escorxador",
    type: 'Espai Polivalent Municipal',
    address: 'Passeig de la Vilesa, s/n, 08391 Tiana',
    description: "Recinte històric municipal condicionat per a activitats familiars i espais d'ombra i descans.",
    activities: [
      "Pati i Espai d'Ombra",
      "Zona d'Aparcament de Cotxets"
    ],
    walkingFromCenter: '4 min a peu',
    coordinates: { lat: 41.4815, lng: 2.2712 }
  },
  {
    id: 'barbar-tubbies',
    name: 'Bàrbar & Parc dels Teletubbies',
    type: 'Terrassa, Parc Infantil & DJ Vermut',
    address: 'Plaça de la Vila & Parc dels Teletubbies, 08391 Tiana',
    description: "Espai a l'aire lliure que uneix la terrassa de Bàrbar amb el Parc dels Teletubbies: DJ Vermut familiar (12:00 - 14:00h) i jocs populars.",
    activities: [
      'Jocs Populars Tradicionals (11:00h - 14:00h)',
      'DJ Vermut Familiar (12:00h - 14:00h)',
      'Espai Gastronòmic de Proximitat'
    ],
    walkingFromCenter: '0 min (Centre del poble)',
    coordinates: { lat: 41.4826, lng: 2.2700 }
  }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    time: '09:30',
    title: 'Obertura de Portes & Acollida de Famílies',
    category: 'tot-el-dia',
    location: 'Plaça de la Vila',
    description: "Recollida de polseres, mapa d'itineraris i benvinguda al BUMFEST TIANA 2026."
  },
  {
    time: '10:00 - 12:00',
    title: 'Taller Natura: Jardineria & Cura de la Terra',
    category: 'tallers',
    location: 'Plaça de la Vila',
    description: "Creació de bombes de llavors i plantació per a la recuperació ambiental del parc després de l'incendi.",
    badge: 'Taller'
  },
  {
    time: '10:00 - 12:00',
    title: 'Taller de Percussió',
    category: 'tallers',
    location: 'Doctor Mascaró',
    description: "El balafó, el djembé, la darbuka, l’ago-go... Creació d'una orquestra de percussió en família.",
    badge: 'Taller'
  },
  {
    time: '10:00 - 12:00',
    title: 'Taller de Teatre & Expressió Corporal per a la Primera Infància',
    category: 'tallers',
    location: 'Sala Albéniz',
    description: "Jocs de moviment, expressió d'emocions i contes escènics compartits amb les famílies.",
    badge: 'Taller'
  },
  {
    time: '11:00 - 14:00',
    title: 'Jocs Populars Tradicionals en Família',
    category: 'tot-el-dia',
    location: 'Plaça de la Vila / Bàrbar & Parc dels Teletubbies',
    description: 'Jocs tradicionals de fusta, cooperació i carrer lliure dinamitzats per a la primera infància.'
  },
  {
    time: '12:00 - 14:00',
    title: 'DJ Vermut Familiar en el Bàrbar & Parc dels Teletubbies',
    category: 'gastronomia',
    location: 'Bàrbar & Parc dels Teletubbies',
    description: "Música familiar, ritmes alegres i trobada vermutera a l'aire lliure als establiments locals de Tiana."
  },
  {
    time: '14:00 - 16:00',
    title: 'Descans & Dinar Popular de Proximitat',
    category: 'gastronomia',
    location: 'Xarxa de Restaurants i Terrasses de Tiana',
    description: "Pausa per dinar i agafar forces a la xarxa d'establiments gastronòmics de Tiana amb menús especials."
  },
  {
    time: '16:00 - 17:00',
    title: 'Xerrada: Laia Ferrer - "Neurodesenvolupament, llenguatge i pantalles"',
    category: 'xerrades',
    location: 'Sala Albéniz',
    description: "Impacte de l'ús i abús de pantalles en l'etapa dels 0 als 3 anys, claus del neurodesenvolupament infantil i estimulació psico-motora.",
    badge: 'Xerrada'
  },
  {
    time: '17:00 - 18:30',
    title: 'Xerrada: Armando Bastida - "Criar amb sentit comú"',
    category: 'xerrades',
    location: 'Sala Albéniz',
    description: 'Claus de la criança respectuosa, desmuntar mites i reduir la culpa per gaudir de la infància amb sentit comú.',
    badge: 'Xerrada'
  },
  {
    time: '19:00 - 20:00',
    title: 'Concert de Cloenda: Sedajazz Young Band',
    category: 'espectacle',
    location: 'Sala Albéniz',
    description: 'Gran concert de cloenda amb la Sedajazz Young Band: música creativa, improvisació i repertori festiu per a petits i grans.',
    badge: 'Cloenda'
  }
];

export const RESTAURANTS_DATA: RestaurantPartner[] = [
  {
    id: 'casal',
    name: 'El Casal de Tiana',
    type: 'Cuina tradicional i menú familiar',
    specialOffer: 'Tiquet menú BUMFEST amb fideuà, opció vegetariana i postres casolanes.',
    address: 'Av. Isaac Albéniz, 12',
    websiteUrl: LINKS.restaurants.casal
  },
  {
    id: 'barbar',
    name: 'Bàrbar',
    type: 'Tapes, platets creatius & vermut',
    specialOffer: 'Combo vermut artesanal + tapa de la terra + beguda infantil.',
    address: 'Plaça de la Vila',
    websiteUrl: LINKS.restaurants.barbar
  },
  {
    id: 'casino',
    name: 'El Casino de Tiana',
    type: 'Clàssic ateneu gastronòmic',
    specialOffer: 'Entrepans calents especials BUM, tapes per compartir i gelats artesans.',
    address: 'Carrer de Sant Valentí',
    websiteUrl: LINKS.restaurants.casino
  },
  {
    id: 'tiriti',
    name: 'Tiriti Bar Restaurant Pizzeria',
    type: 'Pizzes al forn de llenya & pasta',
    specialOffer: 'Pizzes familiars amb ingredients de proximitat i porcions infantils.',
    address: "Carrer d'Edith Llaurador",
    websiteUrl: LINKS.restaurants.tiriti
  },
  {
    id: 'aviMingo',
    name: 'Avi Mingo',
    type: 'Cuina catalana de mercat',
    specialOffer: 'Plats combinats per a famílies i carns a la brasa.',
    address: 'Carrer de Matas',
    websiteUrl: LINKS.restaurants.aviMingo
  },
  {
    id: 'verdEsBo',
    name: 'Floristeria Verd És Bo',
    type: 'Plantes, flors & decoració botànica',
    specialOffer: 'Descomptes especials en testos, plantes autòctones i tallers de cura botànica durant el BUMFEST.',
    address: 'Carrer de Lola Anglada, Tiana',
    websiteUrl: LINKS.restaurants.verdEsBo
  },
  {
    id: 'espaiEco',
    name: 'Espai Ecològic',
    type: 'Alimentació bio, artesanal & proximitat',
    specialOffer: 'Snacks saludables, fruita ecològica de temporada i productes locals per a les famílies.',
    address: 'Carrer de Sant Valentí, Tiana',
    websiteUrl: LINKS.restaurants.espaiEco
  }
];

export const PRICING_DATA = {
  title: 'Accés 100% Gratuït',
  subtitle: "Totes les activitats, tallers, xerrades i espectacles del BUMFEST són d'accés obert i gratuït gràcies a l'Ajuntament de Tiana.",
  packs: [
    {
      name: 'Tallers Didàctics Matinals',
      price: 'Gratuït',
      period: 'Entrada lliure per a infants i famílies',
      description: 'Accés lliure a tots els tallers didàctics matinals i a la zona de jocs populars tradicionals.',
      features: [
        'Material complet inclòs per als tallers',
        'Activitats familiars obertes a tothom',
        'Jardineria & Repoblació, Percussió i Teatre',
        'Espai de jocs populars tradicionals'
      ],
      highlighted: false
    },
    {
      name: 'Xerrades de Criança & Espectacle',
      price: 'Gratuït',
      period: 'Aforament limitat per ordre d’arribada',
      description: 'Ponències de Laia Ferrer i Armando Bastida a El Casal i el gran Espectacle Familiar a la Sala Albéniz.',
      features: [
        'Xerrades magistrals de Laia Ferrer i Armando Bastida',
        'Espectacle Teatral Familiar a la Sala Albéniz',
        'Espai DJ Vermut i dinamització al carrer'
      ],
      highlighted: true,
      tag: 'Accés Lliure'
    }
  ],
  subsidyNote: "El BUMFEST és una iniciativa cultural comunitària amb el suport de l'Ajuntament de Tiana."
};

export const FAQ_DATA = [
  {
    q: "Com s'han de fer els tallers? Cal que els pares es quedin?",
    a: "Sí! L'essència del BUMFEST és precisament l'aprenentatge compartit en la primera infància: cada infant participa juntament amb el pare, la mare, l'avi, l'àvia o el seu acompanyant adult. No és una guarderia, és un espai de connexió i gaudi mutu."
  },
  {
    q: 'Com arribar a Tiana en transport públic?',
    a: "Tiana està situada a tan sols 15 km de Barcelona. Pots arribar amb Rodalies R1 fins a l'estació de Montgat i allà enllaçar amb el bus directe B29 / B30 fins al centre del poble. També hi ha línia directa d'autobús exprés des de Barcelona (Ronda Sant Pere)."
  },
  {
    q: 'Cal reserva prèvia per a les xerrades de criança?',
    a: "L'accés a totes les xerrades i activitats del BUMFEST és 100% gratuït. L'aforament de la Sala Albéniz és limitat per garantir la proximitat de la sessió amb Laia Ferrer i Armando Bastida, i l'entrada serà per estricte ordre d'arribada."
  },
  {
    q: 'Els espais estan adaptats per a cotxets i mobilitat reduïda?',
    a: "Sí, tots els espais municipals seleccionats (Plaça de la Vila, Sala Albéniz, El Casal, Doctor Mascaró, etc.) disposen d'accessos adaptats i zones d'aparcament de cotxets."
  }
];

export const TEAM_DATA = [
  {
    name: 'Pi McCarthy',
    role: 'Direcció Artística & Pedagògica',
    company: '2LB PRODUCCIONES',
    bio: "Cantautora, productora vocal i docent al SAE Institute i a l'ESEM Taller de Músics de Barcelona. Ha actuat en festivals internacionals com el North Sea Jazz de Rotterdam. Dirigeix projectes artístics a la seva productora 2LB."
  },
  {
    name: 'Oriol Roca',
    role: 'Direcció Tècnica & Producció de So',
    company: '2LB PRODUCCIONES',
    bio: 'Productor tècnic, regidor i enginyer de so amb dilatada trajectòria en festivals com Sònar, Primavera Sound, RockFest, i produccions per a TVE ("En el Aire" d\'Andreu Buenafuente), Liceu i Palau de la Música. Veí de Tiana amb el seu estudi de gravació al poble.'
  }
];
