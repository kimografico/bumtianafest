export type Language = 'ca' | 'es';

export interface Workshop {
  id: string;
  title: {
    ca: string;
    es: string;
  };
  category: 'infantil' | 'adolescents' | 'compartit';
  instructor: string;
  location: string;
  shortDesc: {
    ca: string;
    es: string;
  };
  fullDesc: {
    ca: string;
    es: string;
  };
  ageRange: string;
  duration: string;
  materials: {
    ca: string;
    es: string;
  };
  pedagogicalValues: {
    ca: string[];
    es: string[];
  };
  tag: string;
  iconName: string;
  featured?: boolean;
}

export interface Venue {
  id: string;
  name: string;
  type: {
    ca: string;
    es: string;
  };
  address: string;
  description: {
    ca: string;
    es: string;
  };
  activities: {
    ca: string[];
    es: string[];
  };
  walkingFromCenter: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Speaker {
  id: string;
  name: string;
  role: {
    ca: string;
    es: string;
  };
  organization?: string;
  website?: string;
  bio: {
    ca: string;
    es: string;
  };
  talkTitle: {
    ca: string;
    es: string;
  };
  talkDescription: {
    ca: string;
    es: string;
  };
  time: string;
  location: string;
  highlights: {
    ca: string[];
    es: string[];
  };
}

export interface ScheduleItem {
  time: string;
  endTime?: string;
  title: {
    ca: string;
    es: string;
  };
  category: 'tallers' | 'xerrades' | 'gastronomia' | 'espectacle' | 'tot-el-dia';
  location: string;
  description: {
    ca: string;
    es: string;
  };
  badge?: {
    ca: string;
    es: string;
  };
}

export interface RestaurantPartner {
  id?: string;
  name: string;
  type: string;
  image?: string;
  specialOffer: {
    ca: string;
    es: string;
  };
  address: string;
  websiteUrl?: string;
}

export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'jardineria',
    title: {
      ca: 'Taller de Jardineria & Cura de la Natura: Repoblació de la Serralada de Marina',
      es: 'Taller de Jardinería & Cuidado de la Naturaleza: Repoblación de la Serralada de Marina'
    },
    category: 'compartit',
    instructor: 'Arnau & Albert (Educadors Ambientals)',
    location: 'Garden Tiana / Can Riera',
    shortDesc: {
      ca: 'Plantació de plançons i creació de bombes de llavors per recuperar el Parc de la Serralada de Marina després de l\'incendi.',
      es: 'Plantación de plantones y bombas de semillas para recuperar el Parc de la Serralada de Marina tras el incendio.'
    },
    fullDesc: {
      ca: 'Activitat lúdica i de consciència ecològica centrada en la repoblació activa del Parc de la Serralada de Marina de Tiana després d\'un incendi anterior. Els infants i les seves famílies aprendran a elaborar bombes de llavors d\'espècies autòctones mediterrànies (pins, alzines, romaní) i trasplantaran petits plançons que ajudaran a regenerar la massa forestal del nostre entorn natural.',
      es: 'Actividad lúdica y de conciencia ecológica centrada en la repoblación activa del Parc de la Serralada de Marina de Tiana tras un incendio anterior. Los peques y sus familias aprenderán a elaborar bombas de semillas de especies autóctonas mediterráneas (pinos, encinas, romero) y trasplantarán pequeños plantones que ayudarán a regenerar la masa forestal de nuestro entorno.'
    },
    ageRange: 'Primera infància i famílies (2 a 8 anys)',
    duration: '10:00 - 12:00 (2 hores)',
    materials: {
      ca: 'Terra vegetal ecològica, argila per a boles nendo dango, llavors autòctones del Maresme i plançons forestals.',
      es: 'Tierra vegetal ecológica, arcilla para bolas nendo dango, semillas autóctonas del Maresme y plantones forestales.'
    },
    pedagogicalValues: {
      ca: ['Estimació i cura del bosc de Tiana', 'Comprensió de la regeneració post-incendi', 'Participació activa comunitària'],
      es: ['Amor y cuidado del bosque de Tiana', 'Comprensión de la regeneración post-incendio', 'Participación activa comunitaria']
    },
    tag: 'Natura & Repoblació',
    iconName: 'Sprout',
    featured: true
  },
  {
    id: 'vestuari',
    title: {
      ca: 'Taller de Vestuari Sostenible & Reutilització Creativa',
      es: 'Taller de Vestuario Sostenible & Reutilización Creativa'
    },
    category: 'compartit',
    instructor: 'Aina & Roseta',
    location: 'Can Riera',
    shortDesc: {
      ca: 'Creació de disfresses enginyoses a partir de capses de cartró, retalls de roba usada i materials quotidians reciclats.',
      es: 'Creación de disfraces ingeniosos a partir de cajas de cartón, retales de tela usada y materiales cotidianos reciclados.'
    },
    fullDesc: {
      ca: 'Un espai de joc i manualitat basat en la reutilització sense necessitat de disfresses sofisticades ni consumistes. Amb caixes de cartró, tubs de paper, retalls de teles usades i elements quotidians, transformarem allò que tenim a l\'abast en ales, barrets, màscares i complements sorprenents per despertar la imaginació pura dels més petits.',
      es: 'Un espacio de juego y manualidad basado en la reutilización sin necesidad de disfraces sofisticados ni consumistas. Con cajas de cartón, tubos de papel, retales de telas usadas y elementos cotidianos, transformaremos lo que tenemos a mano en alas, sombreros, máscaras y complementos sorprendentes para despertar la imaginación pura.'
    },
    ageRange: 'Primera infància i famílies (2 a 8 anys)',
    duration: '10:00 - 12:00 (2 hores)',
    materials: {
      ca: 'Cartró reciclat, retalls tèxtils reutilitzats, coles naturals no tòxiques i pintures a l\'aigua.',
      es: 'Cartón reciclado, retales textiles reutilizados, colas naturales no tóxicas y pinturas al agua.'
    },
    pedagogicalValues: {
      ca: ['Consum conscient i sostenibilitat', 'Joc simbòlic sense artificis', 'Imaginació lliure'],
      es: ['Consumo consciente y sostenibilidad', 'Juego simbólico sin artificios', 'Imaginación libre']
    },
    tag: 'Reutilització & Creació',
    iconName: 'Shirt',
    featured: true
  },
  {
    id: 'teatre-expressio',
    title: {
      ca: 'Taller de Teatre & Expressió Corporal per a la Primera Infància',
      es: 'Taller de Teatro & Expresión Corporal para la Primera Infancia'
    },
    category: 'compartit',
    instructor: 'Joan Arqué & Equip Artístic 2LB',
    location: 'Sala Albéniz (Escenari Municipal)',
    shortDesc: {
      ca: 'Jocs d\'improvisació, dinàmiques de moviment, contes vivencials i expressió teatral per a la primera infància.',
      es: 'Juegos de improvisación, dinámicas de movimiento, cuentos vivenciales y expresión teatral para la primera infancia.'
    },
    fullDesc: {
      ca: 'Adaptat exclusivament per als més petits i els seus acompanyants, aquest taller proposa jocs motrius, contes vivencials i exploració de l\'espai escènic per expressar emocions, desinhibir-se i gaudir del teatre en família en un entorn càlid i segur.',
      es: 'Adaptado exclusivamente para los más pequeños y sus acompañantes, este taller propone juegos motrices, cuentos vivenciales y exploración del espacio escénico para expresar emociones, desinhibirse y disfrutar del teatro en familia en un entorno cálido y seguro.'
    },
    ageRange: 'Primera infància (2 a 8 anys + acompanyant)',
    duration: '10:00 - 12:00 (2 hores)',
    materials: {
      ca: 'Atrezzo suau, robes de colors i espai escènic adaptat.',
      es: 'Atrezzo suave, telas de colores y espacio escénico adaptado.'
    },
    pedagogicalValues: {
      ca: ['Expressió emocional', 'Desinhibició i confiança', 'Vincle afectiu a través del joc escènic'],
      es: ['Expresión emocional', 'Desinhibición y confianza', 'Vínculo afectivo a través del juego escénico']
    },
    tag: 'Arts Escèniques',
    iconName: 'Theater',
    featured: true
  }
];

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 'armando-bastida',
    name: 'Armando Bastida',
    role: {
      ca: 'Infermer Pediàtric, Escriptor & Divulgador',
      es: 'Enfermero Pediátrico, Escritor & Divulgador'
    },
    organization: 'Criar con Sentido Común',
    website: 'https://www.armandobastida.com/',
    bio: {
      ca: 'Referent internacional en criança respectuosa, infermer pediàtric amb més de dues dècades d\'experiència, autor de best-sellers com "Criar con el corazón" o "Educar sin miedo". Fundador de la comunitat "Crianza con Sentido Común" que acompanya milers de famílies.',
      es: 'Referente internacional en crianza respetuosa, enfermero pediátrico con más de 20 años de experiencia, autor de éxitos como "Criar con el corazón" o "Educar sin miedo", y fundador de "Crianza con Sentido Común".'
    },
    talkTitle: {
      ca: 'Criar amb sentit comú',
      es: 'Criar con sentido común'
    },
    talkDescription: {
      ca: 'Una trobada propera, pràctica i plena d\'empatia on Armando Bastida abordarà els reptes reals de la primera infància sota el lema "Crianza con sentido común": com desmuntar mites, reduir la culpa parental i reforçar la connexió familiar en el dia a dia.',
      es: 'Un encuentro cercano, práctico y lleno de empatía donde Armando Bastida abordará los desafíos reales de la primera infancia bajo el lema "Crianza con sentido común": desmontar mitos, reducir la culpa parental y reforzar la conexión familiar en el día a día.'
    },
    time: '17:00h - 18:30h',
    location: 'Sala Petita d\'El Casal de Tiana',
    highlights: {
      ca: [
        'Acompanyament emocional des de la primera infància',
        'Com establir límits segurs sense recórrer al càstig ni a la culpa',
        'Torn obert de preguntes directes amb Armando Bastida',
        'Signatura de llibres en finalitzar la xerrada'
      ],
      es: [
        'Acompañamiento emocional desde la primera infancia',
        'Cómo establecer límites seguros sin recurrir al castigo ni a la culpa',
        'Turno abierto de preguntas directas con Armando Bastida',
        'Firma de libros al finalizar la charla'
      ]
    }
  },
  {
    id: 'laia-ferrer',
    name: 'Laia Ferrer',
    role: {
      ca: 'Pedagoga & Especialista en Criança Conscient',
      es: 'Pedagoga & Especialista en Crianza Consciente'
    },
    organization: 'Ateneus & Pedagogia Familiar',
    bio: {
      ca: 'Pedagoga i terapeuta familiar dedicada a l\'acompanyament respectuós a la primera infància, la gestió de rebequeries i la creació de vincles d\'apego segurs en el nucli familiar.',
      es: 'Pedagoga y terapeuta familiar dedicada al acompañamiento respetuoso en la primera infancia, la gestión de rabietas y la creación de vínculos de apego seguros en la familia.'
    },
    talkTitle: {
      ca: 'Límits sense Crits: Acompanyament Emocional a la Primera Infància',
      es: 'Límites sin Gritos: Acompañamiento Emocional en la Primera Infancia'
    },
    talkDescription: {
      ca: 'Pautes clares per a mares i pares sobre com establir límits ferms i amorosos des de la calma, acompanyant la frustració i entenent el desenvolupament maduratiu de l\'infant sense recórrer als crits ni als càstigs.',
      es: 'Pautas claras para madres y padres sobre cómo establecer límites firmes y amorosos desde la calma, acompañando la frustración y comprendiendo el desarrollo madurativo del peque sin gritos ni castigos.'
    },
    time: '16:00h - 17:00h',
    location: 'Sala Petita d\'El Casal de Tiana',
    highlights: {
      ca: [
        'Com actuar davant de rebequeries i moments de tensió quotidiana',
        'Diferència entre el límit respectuós i l\'autoritarisme',
        'Foment de la cooperació familiar des de la calma',
        'Torn obert de preguntes i resolució de casos reals'
      ],
      es: [
        'Cómo actuar ante rabietas y momentos de tensión cotidiana',
        'Diferencia entre el límite respetuoso y el autoritarismo',
        'Fomento de la cooperación familiar desde la calma',
        'Turno abierto de preguntas y resolución de casos reales'
      ]
    }
  }
];

export const VENUES_DATA: Venue[] = [
  {
    id: 'placa-vila',
    name: 'Plaça de la Vila',
    type: {
      ca: 'Cor del Festival & Punt d\'Acollida',
      es: 'Corazón del Festival & Punto de Acogida'
    },
    address: 'Plaça de la Vila, 08391 Tiana',
    description: {
      ca: 'Punt central d\'acollida de famílies, recollida de polseres i itineraris, espai de trobada i jocs populars tradicionals.',
      es: 'Punto central de acogida de familias, recogida de pulseras e itinerarios, espacio de encuentro y juegos populares tradicionales.'
    },
    activities: {
      ca: ['Acollida i Entrega de Polseres (09:30h)', 'Jocs Populars Tradicionals (11:00h - 14:00h)', 'Punt d\'Informació Oficial'],
      es: ['Acogida y Entrega de Pulseras (09:30h)', 'Juegos Populares Tradicionales (11:00h - 14:00h)', 'Punto de Información Oficial']
    },
    walkingFromCenter: '0 min (Punt Central)',
    coordinates: { lat: 41.4827, lng: 2.2701 }
  },
  {
    id: 'sala-albeniz',
    name: 'Sala Albéniz',
    type: {
      ca: 'Teatre & Espai Escènic Municipal',
      es: 'Teatro & Espacio Escénico Municipal'
    },
    address: 'Carrer de Sant Domènec, 1, 08391 Tiana',
    description: {
      ca: 'Emblemàtic teatre municipal on tindrà lloc el taller de teatre i expressió matinal i el gran espectacle familiar de cloenda.',
      es: 'Emblemático teatro municipal donde tendrá lugar el taller de teatro matinal y el gran espectáculo familiar de clausura.'
    },
    activities: {
      ca: ['Taller Teatre & Expressió Primera Infància (10:00h - 12:00h)', 'Espectacle Familiar de Cloenda (19:00h)'],
      es: ['Taller Teatro & Expresión Primera Infancia (10:00h - 12:00h)', 'Espectáculo Familiar de Clausura (19:00h)']
    },
    walkingFromCenter: '1 min a peu (Plaça de la Vila)',
    coordinates: { lat: 41.4828, lng: 2.2701 }
  },
  {
    id: 'el-casal',
    name: 'El Casal de Tiana',
    type: {
      ca: 'Ateneu & Centre Cívic Cultural',
      es: 'Ateneo & Centro Cívico Cultural'
    },
    address: 'Avinguda Isaac Albéniz, 12, 08391 Tiana',
    description: {
      ca: 'Cor de les xerrades magistrals de criança: ponències de Laia Ferrer (16:00h) i d\'Armando Bastida (17:00h) a la Sala Petita.',
      es: 'Corazón de las charlas magistrales de crianza: ponencias de Laia Ferrer (16:00h) y de Armando Bastida (17:00h) en la Sala Petita.'
    },
    activities: {
      ca: ['Xerrada Laia Ferrer: Límits sense Crits (16:00h)', 'Xerrada Armando Bastida: Criança amb Sentit Comú (17:00h)'],
      es: ['Charla Laia Ferrer: Límites sin Gritos (16:00h)', 'Charla Armando Bastida: Crianza con Sentido Común (17:00h)']
    },
    walkingFromCenter: '2 min a peu',
    coordinates: { lat: 41.4822, lng: 2.2694 }
  },
  {
    id: 'can-riera',
    name: 'Can Riera',
    type: {
      ca: 'Centre Cívic & Espais Educatius',
      es: 'Centro Cívico & Espacios Educativos'
    },
    address: 'Carrer Can Riera, 4, 08391 Tiana',
    description: {
      ca: 'Espai dedicat als tallers matinals de Jardineria & Repoblació de la Serralada de Marina i Vestuari Sostenible & Reutilització.',
      es: 'Espacio dedicado a los talleres matinales de Jardinería & Repoblación de la Serralada de Marina y Vestuario Sostenible & Reutilización.'
    },
    activities: {
      ca: ['Taller de Jardineria & Repoblació (10:00h - 12:00h)', 'Taller de Vestuari Reutilitzat (10:00h - 12:00h)'],
      es: ['Taller de Jardinería & Repoblación (10:00h - 12:00h)', 'Taller de Vestuario Reutilizado (10:00h - 12:00h)']
    },
    walkingFromCenter: '3 min a peu',
    coordinates: { lat: 41.4835, lng: 2.2685 }
  },
  {
    id: 'lescorxador',
    name: 'L\'Escorxador',
    type: {
      ca: 'Espai Polivalent Municipal',
      es: 'Espacio Polivalente Municipal'
    },
    address: 'Passeig de la Vilesa, s/n, 08391 Tiana',
    description: {
      ca: 'Recinte històric municipal condicionat per a activitats familiars i espais d\'ombra i descans.',
      es: 'Recinto histórico municipal acondicionado para actividades familiares y espacios de sombra y descanso.'
    },
    activities: {
      ca: ['Pati i Espai d\'Ombra', 'Zona d\'Aparcament de Cotxets'],
      es: ['Patio y Espacio de Sombra', 'Zona de Aparcamiento de Carritos']
    },
    walkingFromCenter: '4 min a peu',
    coordinates: { lat: 41.4815, lng: 2.2712 }
  },
  {
    id: 'barbar-tubbies',
    name: 'Bàrbar & Parc dels Teletubbies',
    type: {
      ca: 'Terrassa, Parc Infantil & DJ Vermut',
      es: 'Terraza, Parque Infantil & DJ Vermut'
    },
    address: 'Plaça de la Vila & Parc dels Teletubbies, 08391 Tiana',
    description: {
      ca: 'Espai a l\'aire lliure que uneix la terrassa de Bàrbar amb el Parc dels Teletubbies: DJ Vermut familiar (12:00 - 14:00h) i jocs populars.',
      es: 'Espacio al aire libre que une la terraza de Bàrbar con el Parque de los Teletubbies: DJ Vermut familiar (12:00 - 14:00h) y juegos populares.'
    },
    activities: {
      ca: ['Jocs Populars Tradicionals (11:00h - 14:00h)', 'DJ Vermut Familiar (12:00h - 14:00h)', 'Espai Gastronòmic de Proximitat'],
      es: ['Juegos Populares Tradicionales (11:00h - 14:00h)', 'DJ Vermut Familiar (12:00h - 14:00h)', 'Espacio Gastronómico de Proximidad']
    },
    walkingFromCenter: '0 min (Centre del poble)',
    coordinates: { lat: 41.4826, lng: 2.2700 }
  }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    time: '09:30',
    title: {
      ca: 'Obertura de Portes & Acollida de Famílies',
      es: 'Apertura de Puertas & Acogida de Familias'
    },
    category: 'tot-el-dia',
    location: 'Plaça de la Vila',
    description: {
      ca: 'Recollida de polseres, mapa d\'itineraris i benvinguda al BUM TIANA FEST.',
      es: 'Recogida de pulseras, mapa de itinerarios y bienvenida a BUM TIANA FEST.'
    }
  },
  {
    time: '10:00 - 12:00',
    title: {
      ca: 'Taller de Jardineria & Repoblació de la Serralada de Marina',
      es: 'Taller de Jardinería & Repoblación de la Serralada de Marina'
    },
    category: 'tallers',
    location: 'Garden Tiana / Can Riera',
    description: {
      ca: 'Creació de bombes de llavors i plantació per a la recuperació ambiental del parc després de l\'incendi.',
      es: 'Creación de bombas de semillas y plantación para la recuperación ambiental del parque tras el incendio.'
    },
    badge: {
      ca: 'Taller',
      es: 'Taller'
    }
  },
  {
    time: '10:00 - 12:00',
    title: {
      ca: 'Taller de Vestuari Sostenible & Reutilització Creativa',
      es: 'Taller de Vestuario Sostenible & Reutilización Creativa'
    },
    category: 'tallers',
    location: 'Can Riera',
    description: {
      ca: 'Disfresses enginyoses amb caixes de cartró, retalls de roba i elements reciclats.',
      es: 'Disfraces ingeniosos con cajas de cartón, retales de tela y elementos reciclados.'
    },
    badge: {
      ca: 'Taller',
      es: 'Taller'
    }
  },
  {
    time: '10:00 - 12:00',
    title: {
      ca: 'Taller de Teatre & Expressió Corporal per a la Primera Infància',
      es: 'Taller de Teatro & Expresión Corporal para la Primera Infancia'
    },
    category: 'tallers',
    location: 'Sala Albéniz',
    description: {
      ca: 'Jocs de moviment, expressió d\'emocions i contes escènics compartits amb les famílies.',
      es: 'Juegos de movimiento, expresión de emociones y cuentos escénicos compartidos con las familias.'
    },
    badge: {
      ca: 'Taller',
      es: 'Taller'
    }
  },
  {
    time: '11:00 - 14:00',
    title: {
      ca: 'Jocs Populars Tradicionals en Família',
      es: 'Juegos Populares Tradicionales en Familia'
    },
    category: 'tot-el-dia',
    location: 'Plaça de la Vila / Bàrbar & Parc dels Teletubbies',
    description: {
      ca: 'Jocs tradicionals de fusta, cooperació i carrer lliure dinamitzats per a la primera infància.',
      es: 'Juegos tradicionales de madera, cooperación y calle dinamizados para la primera infancia.'
    }
  },
  {
    time: '12:00 - 14:00',
    title: {
      ca: 'DJ Vermut Familiar en el Bàrbar & Parc dels Teletubbies',
      es: 'DJ Vermut Familiar en el Bàrbar & Parc dels Teletubbies'
    },
    category: 'gastronomia',
    location: 'Bàrbar & Parc dels Teletubbies',
    description: {
      ca: 'Música familiar, ritmes alegres i trobada vermutera a l\'aire lliure als establiments locals de Tiana.',
      es: 'Música familiar, ritmos alegres y encuentro vermutero al aire libre en los locales de Tiana.'
    }
  },
  {
    time: '14:00 - 16:00',
    title: {
      ca: 'Descans & Dinar Popular de Proximitat',
      es: 'Descanso & Comida Popular de Proximidad'
    },
    category: 'gastronomia',
    location: 'Xarxa de Restaurants i Terrasses de Tiana',
    description: {
      ca: 'Pausa per dinar i agafar forces a la xarxa d\'establiments gastronòmics de Tiana amb menús especials.',
      es: 'Pausa para comer y reponer fuerzas en la red de establecimientos de Tiana con menús especiales.'
    }
  },
  {
    time: '16:00 - 17:00',
    title: {
      ca: 'Xerrada: Laia Ferrer - "Límits sense Crits"',
      es: 'Charla: Laia Ferrer - "Límites sin Gritos"'
    },
    category: 'xerrades',
    location: 'Sala Petita d\'El Casal de Tiana',
    description: {
      ca: 'Acompanyament emocional a la primera infància i pautes per gestionar moments difícils amb respecte i fermesa.',
      es: 'Acompañamiento emocional en la primera infancia y pautas para gestionar momentos difíciles con respeto y firmeza.'
    },
    badge: {
      ca: 'Xerrada',
      es: 'Charla'
    }
  },
  {
    time: '17:00 - 18:30',
    title: {
      ca: 'Xerrada: Armando Bastida - "Criar amb sentit comú"',
      es: 'Charla: Armando Bastida - "Criar con sentido común"'
    },
    category: 'xerrades',
    location: 'Sala Petita d\'El Casal de Tiana',
    description: {
      ca: 'Claus de la criança respectuosa, desmuntar mites i reduir la culpa per gaudir de la infància amb sentit comú.',
      es: 'Claves de la crianza respetuosa, desmontar mitos y reducir la culpa para disfrutar de la infancia con sentido común.'
    },
    badge: {
      ca: 'Xerrada',
      es: 'Charla'
    }
  },
  {
    time: '19:00 - 20:00',
    title: {
      ca: 'Espectacle Teatral Infantil & Familiar de Cloenda',
      es: 'Espectáculo Teatral Infantil & Familiar de Clausura'
    },
    category: 'espectacle',
    location: 'Sala Albéniz',
    description: {
      ca: 'Gran espectacle escènic familiar per tancar una jornada inoblidable plena d\'art, rialles i comunitat.',
      es: 'Gran espectáculo escénico familiar para cerrar una jornada inolvidable llena de arte, risas y comunidad.'
    }
  }
];

export const RESTAURANTS_DATA: RestaurantPartner[] = [
  {
    id: 'casal',
    name: 'El Casal de Tiana',
    type: 'Cuina tradicional i menú familiar',
    specialOffer: {
      ca: 'Tiquet menú BUM Fest amb fideuà, opció vegetariana i postres casolanes.',
      es: 'Ticket menú BUM Fest con fideuá, opción vegetariana y postres caseros.'
    },
    address: 'Av. Isaac Albéniz, 12',
    websiteUrl: 'https://www.google.com/search?q=El+Casal+de+Tiana+restaurant'
  },
  {
    id: 'barbar',
    name: 'Bàrbar',
    type: 'Tapes, platets creatius & vermut',
    specialOffer: {
      ca: 'Combo vermut artesanal + tapa de la terra + beguda infantil.',
      es: 'Combo vermut artesanal + tapa de proximidad + bebida infantil.'
    },
    address: 'Plaça de la Vila',
    websiteUrl: 'https://www.google.com/search?q=Barbar+Tiana+restaurant'
  },
  {
    id: 'casino',
    name: 'El Casino de Tiana',
    type: 'Clàssic ateneu gastronòmic',
    specialOffer: {
      ca: 'Entrepans calents especials BUM, tapes per compartir i gelats artesans.',
      es: 'Bocadillos calientes especiales BUM, tapas para compartir y helados artesanos.'
    },
    address: 'Carrer de Sant Valentí',
    websiteUrl: 'https://www.google.com/search?q=El+Casino+de+Tiana+restaurant'
  },
  {
    id: 'tiriti',
    name: 'Tiriti Bar Restaurant Pizzeria',
    type: 'Pizzes al forn de llenya & pasta',
    specialOffer: {
      ca: 'Pizzes familiars amb ingredients de proximitat i porcions infantils.',
      es: 'Pizzas familiares con ingredientes locales y raciones infantiles.'
    },
    address: 'Carrer d\'Edith Llaurador',
    websiteUrl: 'https://www.google.com/search?q=Tiriti+Bar+Restaurant+Tiana'
  },
  {
    id: 'aviMingo',
    name: 'Avi Mingo',
    type: 'Cuina catalana de mercat',
    specialOffer: {
      ca: 'Plats combinats per a famílies i carns a la brasa.',
      es: 'Platos combinados familiares y carnes a la brasa.'
    },
    address: 'Carrer de Matas',
    websiteUrl: 'https://www.google.com/search?q=Avi+Mingo+Tiana+restaurant'
  },
  {
    id: 'verdEsBo',
    name: 'Floristeria Verd És Bo',
    type: 'Plantes, flors & decoració botànica',
    specialOffer: {
      ca: 'Descomptes especials en testos, plantes autòctones i tallers de cura botànica durant el BUM Fest.',
      es: 'Descuentos especiales en macetas, plantas autóctonas y cuidado botánico durante el BUM Fest.'
    },
    address: 'Carrer de Lola Anglada, Tiana',
    websiteUrl: 'https://www.google.com/search?q=Floristeria+Verd+Es+Bo+Tiana'
  },
  {
    id: 'espaiEco',
    name: 'Espai Ecològic',
    type: 'Alimentació bio, artesanal & proximitat',
    specialOffer: {
      ca: 'Snacks saludables, fruita ecològica de temporada i productes locals per a les famílies.',
      es: 'Snacks saludables, fruta ecológica de temporada y productos locales para las familias.'
    },
    address: 'Carrer de Sant Valentí, Tiana',
    websiteUrl: 'https://www.google.com/search?q=Espai+Ecologic+Tiana'
  }
];

export const PRICING_DATA = {
  ca: {
    title: 'Tarifes & Accés Popular',
    subtitle: 'Preus assequibles gràcies al cofinançament de l\'Ajuntament de Tiana per fer del BUM FEST una festa accessible a tothom.',
    packs: [
      {
        name: 'Bono Tallers Matí',
        price: '30€',
        period: 'per infant (primera infància) + acompanyant adult',
        description: 'Accés lliure als tallers didàctics matinals escollits i a la zona de jocs populars.',
        features: [
          'Material complet inclòs per als tallers',
          'Tallers compartits amb adult sense cost extra',
          'Jardineria & Repoblació, Vestuari Reutilitzat i Teatre',
          'Dret a espai de jocs populars tradicionals'
        ],
        highlighted: false
      },
      {
        name: 'Bono Complet (Tallers + Xerrades + Espectacle)',
        price: '60€',
        period: 'Pack integral de dia complet per a tota la família',
        description: 'L\'experiència sencera del BUM Fest per viure el poble des del matí fins a la cloenda.',
        features: [
          'Tots els tallers didàctics matinals (10 a 12h)',
          'Xerrades magistrals de Laia Ferrer i Armando Bastida',
          'Entrada a l\'Espectacle Teatral Familiar (Sala Albéniz)',
          'Espai DJ Vermut i jocs tradicionals',
          'Descompte en tiquets gastronòmics del poble'
        ],
        highlighted: true,
        tag: 'Més recomanat'
      },
      {
        name: 'Bono Xerrades & Espectacle',
        price: '20€ / 25€',
        period: '1 sessió (20€) · Totes les sessions de tarda (25€)',
        description: 'Per a qui vulgui gaudir de les ponències de criança a El Casal i l\'espectacle escènic.',
        features: [
          'Entrada a les xerrades de Laia Ferrer i Armando Bastida',
          'Entrada numerada a l\'Espectacle de Cloenda a la Sala Albéniz',
          'Accés a la zona vermut i dinamització de carrer'
        ],
        highlighted: false
      }
    ],
    subsidyNote: 'El BUM TIANA FEST compta amb el suport de l\'Ajuntament de Tiana i la Generalitat de Catalunya, cobrint la gran majoria de la producció artística per afavorir les tarifes comunitàries.'
  },
  es: {
    title: 'Tarifas & Acceso Popular',
    subtitle: 'Precios asequibles gracias a la cofinanciación del Ajuntament de Tiana para hacer de BUM FEST un festival accesible a todas las familias.',
    packs: [
      {
        name: 'Bono Talleres Mañana',
        price: '30€',
        period: 'por peque (primera infancia) + acompañante adulto',
        description: 'Acceso libre a los talleres didácticos de la mañana y a la zona de juegos populares.',
        features: [
          'Material completo incluido para los talleres',
          'Talleres compartidos con adulto sin coste extra',
          'Jardinería & Repoblación, Vestuario Reutilizado y Teatro',
          'Zona de juegos populares tradicionales'
        ],
        highlighted: false
      },
      {
        name: 'Bono Completo (Talleres + Charlas + Espectáculo)',
        price: '60€',
        period: 'Pack integral de día completo para toda la familia',
        description: 'La experiencia completa de BUM Fest para disfrutar de Tiana de la mañana a la noche.',
        features: [
          'Todos los talleres didácticos matinales (10 a 12h)',
          'Charlas magistrales de Laia Ferrer y Armando Bastida',
          'Entrada al Espectáculo Teatral Familiar (Sala Albéniz)',
          'Espacio DJ Vermut y juegos tradicionales',
          'Descuentos en tickets gastronómicos locales'
        ],
        highlighted: true,
        tag: 'Más recomendado'
      },
      {
        name: 'Bono Charlas & Espectáculo',
        price: '20€ / 25€',
        period: '1 sesión (20€) · Todas las sesiones de tarde (25€)',
        description: 'Para quienes deseen asistir a las ponencias de crianza en El Casal y al espectáculo escénico.',
        features: [
          'Entrada a las charlas de Laia Ferrer y Armando Bastida',
          'Entrada numerada al Espectáculo de Clausura en la Sala Albéniz',
          'Acceso a la zona vermut y dinamización de calle'
        ],
        highlighted: false
      }
    ],
    subsidyNote: 'BUM TIANA FEST cuenta con financiación pública del Ajuntament de Tiana para garantizar una cultura y educación accesible.'
  }
};

export const FAQ_DATA = [
  {
    q: {
      ca: 'Com s\'han de fer els tallers? Cal que els pares es quedin?',
      es: '¿Cómo funcionan los talleres? ¿Deben quedarse los padres?'
    },
    a: {
      ca: 'Sí! L\'essència del BUM FEST és precisament l\'aprenentatge compartit en la primera infància: cada infant participa juntament amb el pare, la mare, l\'avi, l\'àvia o el seu acompanyant adult. No és una guarderia, és un espai de connexió i gaudi mutu.',
      es: '¡Sí! La esencia de BUM FEST es el aprendizaje compartido en la primera infancia: cada peque participa junto con su padre, madre, abuelos o acompañante adulto. No es un servicio de guardería, sino un espacio para crear recuerdos juntos.'
    }
  },
  {
    q: {
      ca: 'Com arribar a Tiana en transport públic?',
      es: '¿Cómo llegar a Tiana en transporte público?'
    },
    a: {
      ca: 'Tiana està situada a tan sols 15 km de Barcelona. Pots arribar amb Rodalies R1 fins a l\'estació de Montgat i allà enllaçar amb el bus directe B29 / B30 fins al centre del poble. També hi ha línia directa d\'autobús exprés des de Barcelona (Ronda Sant Pere).',
      es: 'Tiana se encuentra a solo 15 km de Barcelona. Puedes llegar en tren Rodalies R1 hasta la estación de Montgat y enlazar con el autobús B29 / B30 directo al centro, o en bus directo desde Barcelona.'
    }
  },
  {
    q: {
      ca: 'Cal reserva prèvia per a les xerrades de criança?',
      es: '¿Se requiere reserva previa para las charlas de crianza?'
    },
    a: {
      ca: 'L\'aforament de la Sala Petita d\'El Casal és limitat per garantir la comoditat i proximitat de la sessió amb Laia Ferrer i Armando Bastida. Els assistents amb Bono del BUM Fest tindran accés per ordre d\'arribada.',
      es: 'El aforo de la Sala Petita de El Casal es limitado para asegurar cercanía con Laia Ferrer y Armando Bastida. Los asistentes con Bono de BUM Fest tendrán acceso por orden de llegada.'
    }
  },
  {
    q: {
      ca: 'Els espais estan adaptats per a cotxets i mobilitat reduïda?',
      es: '¿Los espacios están adaptados para carritos y movilidad reducida?'
    },
    a: {
      ca: 'Sí, tots els espais municipals seleccionats (Plaça de la Vila, Sala Albéniz, El Casal, Can Riera, etc.) disposen d\'accessos adaptats i zones d\'aparcament de cotxets.',
      es: 'Sí, todos los recintos municipales cuentan con accesibilidad adaptada y zonas habilitadas para carritos.'
    }
  }
];

export const TEAM_DATA = [
  {
    name: 'Pi McCarthy',
    role: {
      ca: 'Direcció Artística & Pedagògica',
      es: 'Dirección Artística & Pedagógica'
    },
    company: '2LB PRODUCCIONES',
    bio: {
      ca: 'Cantautora, productora vocal i docent al SAE Institute i a l\'ESEM Taller de Músics de Barcelona. Ha actuat en festivals internacionals com el North Sea Jazz de Rotterdam. Dirigeix projectes artístics a la seva productora 2LB.',
      es: 'Cantautora, productora vocal y docente en SAE Institute y ESEM Taller de Músics de Barcelona. Ha actuado en certámenes como North Sea Jazz de Rotterdam.'
    }
  },
  {
    name: 'Oriol Roca',
    role: {
      ca: 'Direcció Tècnica & Producció de So',
      es: 'Dirección Técnica & Producción de Sonido'
    },
    company: '2LB PRODUCCIONES',
    bio: {
      ca: 'Productor tècnic, regidor i enginyer de so amb dilatada trajectòria en festivals com Sònar, Primavera Sound, RockFest, i produccions per a TVE ("En el Aire" d\'Andreu Buenafuente), Liceu i Palau de la Música. Veí de Tiana amb el seu estudi de gravació al poble.',
      es: 'Productor técnico y de sonido en festivales como Sònar, Primavera Sound, RockFest y producciones para TVE (Andreu Buenafuente), Liceu y Palau de la Música. Vecino de Tiana con estudio de grabación local.'
    }
  }
];
