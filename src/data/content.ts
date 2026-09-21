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
      ca: 'Taller Natura: Jardineria & Cura de la Terra',
      es: 'Taller Naturaleza: Jardinería & Cuidado de la Tierra'
    },
    category: 'compartit',
    instructor: 'Albert SantaMaria & Arnau Calvet',
    location: 'Plaça de la Vila',
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
    id: 'percussio',
    title: {
      ca: 'Taller de Percussió',
      es: 'Taller de Percusión'
    },
    category: 'compartit',
    instructor: 'Marc Vila',
    location: 'Doctor Mascaró',
    shortDesc: {
      ca: 'El balafó, el djembé, la darbuka, l’ago-go… Coneixeu aquests instruments? Veniu a descobrir els seus sons i creem música plegats!',
      es: 'El balafón, el djembé, la darbuka, el agogô… ¿Conocéis estos instrumentos? ¡Venid a descubrir sus sonidos y creemos música juntos!'
    },
    fullDesc: {
      ca: 'El balafó, el djembé, la darbuka, l’ago-go… Coneixeu aquests instruments?\n\nVeniu a descobrir els seus sons i els de molts altres! Junts formarem una orquestra de percussió i compondrem i interpretarem peces musicals inèdites al moment. En família gaudirem creant música plegats!',
      es: 'El balafón, el djembé, la darbuka, el agogô… ¿Conocéis estos instrumentos?\n\n¡Venid a descubrir sus sonidos y los de muchos otros! Juntos formaremos una orquesta de percusión y compondremos e interpretaremos piezas musicales inéditas al momento. ¡En familia disfrutaremos creando música juntos!'
    },
    ageRange: 'Famílies i primera infància (totes les edats)',
    duration: '10:00 - 12:00 (2 hores)',
    materials: {
      ca: 'Balafons, djembés, darbukes, agogôs i instruments de percussió del món facilitats per l\'organització.',
      es: 'Balafones, djembés, darbukas, agogôs e instrumentos de percusión del mundo facilitados por la organización.'
    },
    pedagogicalValues: {
      ca: [
        'Exploració sonora i instruments tradicionals d\'arreu del món',
        'Sentit del ritme, polirítmies i escolta activa en grup',
        'Composició i expressió espontània compartida en família'
      ],
      es: [
        'Exploración sonora e instrumentos tradicionales del mundo',
        'Sentido del ritmo, polirritmias y escucha activa en grupo',
        'Composición y expresión espontánea compartida en familia'
      ]
    },
    tag: 'Música & Ritme',
    iconName: 'Music',
    featured: true
  },
  {
    id: 'teatre-expressio',
    title: {
      ca: 'Taller de Teatre & Expressió Corporal per a la Primera Infància',
      es: 'Taller de Teatro & Expresión Corporal para la Primera Infancia'
    },
    category: 'compartit',
    instructor: 'Christian Olivé & Marc Costa',
    location: 'Sala Albéniz',
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
      ca: 'Metgessa Especialista en Pediatria',
      es: 'Médica Especialista en Pediatría'
    },
    organization: "Centre d'Atenció Primària (CAP)",
    bio: {
      ca: "Llicenciada en medicina i cirurgia per la Universitat Autònoma de Barcelona. Especialista en Pediatria. Actualment treballa en un Centre d'Atenció Primària.",
      es: "Licenciada en medicina y cirugía por la Universidad Autónoma de Barcelona. Especialista en Pediatría. Actualmente trabaja en un Centro de Atención Primaria."
    },
    talkTitle: {
      ca: 'Neurodesenvolupament, llenguatge i pantalles',
      es: 'Neurodesarrollo, lenguaje y pantallas'
    },
    talkDescription: {
      ca: "Quines conseqüències té l'ús o abús de pantalles en l'etapa dels 0 als 3 anys? Sovint podem pensar que allò que fem amb els més petits de casa no tindrà tant d'impacte perquè no se'n recordaran, però és justament al contrari. Els primers anys de vida són claus pel neurodesenvolupament dels infants. Una detecció precoç i una correcta estimulació psico-motora marquen la diferència pel futur d'aquella criatura.",
      es: "¿Qué consecuencias tiene el uso o abuso de pantallas en la etapa de los 0 a los 3 años? A menudo solemos pensar que lo que hacemos con los más pequeños de casa no tendrá tanto impacto porque no se acordarán, pero es justamente al contrario. Los primeros años de vida son clave para el neurodesarrollo de los niños. Una detección precoz y una correcta estimulación psicomotora marcan la diferencia para el futuro de esa criatura."
    },
    time: '16:00h - 17:00h',
    location: "Sala Petita d'El Casal de Tiana",
    highlights: {
      ca: [
        "Conseqüències de l'ús o abús de pantalles en l'etapa dels 0 als 3 anys",
        "Els primers anys com a clau fonamental pel neurodesenvolupament infantil",
        "La importància d'una detecció precoç i una correcta estimulació psico-motora",
        "Torn obert de preguntes i recomanacions pràctiques per a famílies"
      ],
      es: [
        "Consecuencias del uso o abuso de pantallas en la etapa de 0 a 3 años",
        "Los primeros años como clave fundamental para el neurodesarrollo infantil",
        "La importancia de una detección precoz y una correcta estimulación psicomotora",
        "Turno abierto de preguntas y recomendaciones prácticas para familias"
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
      ca: ['Acollida i Entrega de Polseres (09:30h)', 'Taller Natura: Jardineria & Cura de la Terra (10:00h - 12:00h)', 'Jocs Populars Tradicionals (11:00h - 14:00h)', 'Punt d\'Informació Oficial'],
      es: ['Acogida y Entrega de Pulseras (09:30h)', 'Taller Naturaleza: Jardinería & Cuidado de la Tierra (10:00h - 12:00h)', 'Juegos Populares Tradicionales (11:00h - 14:00h)', 'Punto de Información Oficial']
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
      ca: 'Emblemàtic teatre municipal on tindrà lloc el taller de teatre i expressió matinal i el gran concert familiar de cloenda amb la Sedajazz Young Band.',
      es: 'Emblemático teatro municipal donde tendrá lugar el taller de teatro matinal y el gran concierto familiar de clausura con la Sedajazz Young Band.'
    },
    activities: {
      ca: ['Taller Teatre & Expressió Primera Infància (10:00h - 12:00h)', 'Concert de Cloenda: Sedajazz Young Band (19:00h - 20:00h)'],
      es: ['Taller Teatro & Expresión Primera Infancia (10:00h - 12:00h)', 'Concierto de Clausura: Sedajazz Young Band (19:00h - 20:00h)']
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
      ca: ['Xerrada Laia Ferrer: Neurodesenvolupament, llenguatge i pantalles (16:00h)', 'Xerrada Armando Bastida: Criança amb Sentit Comú (17:00h)'],
      es: ['Charla Laia Ferrer: Neurodesarrollo, lenguaje y pantallas (16:00h)', 'Charla Armando Bastida: Crianza con Sentido Común (17:00h)']
    },
    walkingFromCenter: '2 min a peu',
    coordinates: { lat: 41.4822, lng: 2.2694 }
  },
  {
    id: 'doctor-mascaro',
    name: 'Doctor Mascaró',
    type: {
      ca: 'Espai Cultural & Carrer Emblemàtic',
      es: 'Espacio Cultural & Calle Emblemática'
    },
    address: 'Carrer del Doctor Mascaró, 08391 Tiana',
    description: {
      ca: 'Espai emblemàtic a l\'aire lliure acollidor per a la creació sonora i el gran taller matinal de percussió en família.',
      es: 'Espacio emblemático al aire libre acogedor para la creación sonora y el gran taller matinal de percusión en familia.'
    },
    activities: {
      ca: ['Taller de Percussió en Família (10:00h - 12:00h)'],
      es: ['Taller de Percusión en Familia (10:00h - 12:00h)']
    },
    walkingFromCenter: '1 min a peu (Plaça de la Vila)',
    coordinates: { lat: 41.4824, lng: 2.2698 }
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
      ca: 'Recollida de polseres, mapa d\'itineraris i benvinguda al BUMFEST TIANA 2026.',
      es: 'Recogida de pulseras, mapa de itinerarios y bienvenida a BUMFEST TIANA 2026.'
    }
  },
  {
    time: '10:00 - 12:00',
    title: {
      ca: 'Taller Natura: Jardineria & Cura de la Terra',
      es: 'Taller Naturaleza: Jardinería & Cuidado de la Tierra'
    },
    category: 'tallers',
    location: 'Plaça de la Vila',
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
      ca: 'Taller de Percussió',
      es: 'Taller de Percusión'
    },
    category: 'tallers',
    location: 'Doctor Mascaró',
    description: {
      ca: 'El balafó, el djembé, la darbuka, l’ago-go... Creació d\'una orquestra de percussió en família.',
      es: 'El balafón, el djembé, la darbuka, el agogô... Creación de una orquesta de percusión en familia.'
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
      ca: 'Xerrada: Laia Ferrer - "Neurodesenvolupament, llenguatge i pantalles"',
      es: 'Charla: Laia Ferrer - "Neurodesarrollo, lenguaje y pantallas"'
    },
    category: 'xerrades',
    location: "Sala Petita d'El Casal de Tiana",
    description: {
      ca: "Impacte de l'ús i abús de pantalles en l'etapa dels 0 als 3 anys, claus del neurodesenvolupament infantil i estimulació psico-motora.",
      es: "Impacto del uso y abuso de pantallas en la etapa de 0 a 3 años, claves del neurodesarrollo infantil y estimulación psicomotora."
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
      ca: 'Concert de Cloenda: Sedajazz Young Band',
      es: 'Concierto de Clausura: Sedajazz Young Band'
    },
    category: 'espectacle',
    location: 'Sala Albéniz',
    description: {
      ca: 'Gran concert de cloenda amb la Sedajazz Young Band: música creativa, improvisació i repertori festiu per a petits i grans.',
      es: 'Gran concierto de clausura con la Sedajazz Young Band: música creativa, improvisación y repertorio festivo para pequeños y grandes.'
    },
    badge: {
      ca: 'Cloenda',
      es: 'Clausura'
    }
  }
];

export const RESTAURANTS_DATA: RestaurantPartner[] = [
  {
    id: 'casal',
    name: 'El Casal de Tiana',
    type: 'Cuina tradicional i menú familiar',
    specialOffer: {
      ca: 'Tiquet menú BUMFEST amb fideuà, opció vegetariana i postres casolanes.',
      es: 'Ticket menú BUMFEST con fideuá, opción vegetariana y postres caseros.'
    },
    address: 'Av. Isaac Albéniz, 12',
    websiteUrl: 'https://www.instagram.com/elcasaldetiana/'
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
    websiteUrl: 'https://www.instagram.com/sombarbarstiana/'
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
    websiteUrl: 'https://casinodetiana.com/'
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
    websiteUrl: 'https://tiriti.es/'
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
    websiteUrl: 'https://www.avimingo.com/'
  },
  {
    id: 'verdEsBo',
    name: 'Floristeria Verd És Bo',
    type: 'Plantes, flors & decoració botànica',
    specialOffer: {
      ca: 'Descomptes especials en testos, plantes autòctones i tallers de cura botànica durant el BUMFEST.',
      es: 'Descuentos especiales en macetas, plantas autóctonas y cuidado botánico durante el BUMFEST.'
    },
    address: 'Carrer de Lola Anglada, Tiana',
    websiteUrl: 'https://floristeriastop.com/floristeria-verd-es-bo-tiana/'
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
    websiteUrl: 'https://espaiecologic.com/'
  }
];

export const PRICING_DATA = {
  ca: {
    title: 'Accés 100% Gratuït',
    subtitle: 'Totes les activitats, tallers, xerrades i espectacles del BUMFEST són d\'accés obert i gratuït gràcies a l\'Ajuntament de Tiana.',
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
    subsidyNote: 'El BUMFEST és una iniciativa cultural comunitària amb el suport de l\'Ajuntament de Tiana.'
  },
  es: {
    title: 'Acceso 100% Gratuito',
    subtitle: 'Todas las actividades, talleres, charlas y espectáculos de BUMFEST son de acceso libre y gratuito gracias al Ajuntament de Tiana.',
    packs: [
      {
        name: 'Talleres Didácticos Mañana',
        price: 'Gratuito',
        period: 'Entrada libre para familias',
        description: 'Acceso libre a todos los talleres didácticos matinales y a la zona de juegos populares tradicionales.',
        features: [
          'Material completo incluido para los talleres',
          'Actividades familiares abiertas a todos',
          'Jardinería & Repoblación, Percusión y Teatro',
          'Espacio de juegos populares tradicionales'
        ],
        highlighted: false
      },
      {
        name: 'Charlas de Crianza & Espectáculo',
        price: 'Gratuito',
        period: 'Aforo limitado por orden de llegada',
        description: 'Ponencias de Laia Ferrer y Armando Bastida en El Casal y el gran Espectáculo Familiar en la Sala Albéniz.',
        features: [
          'Charlas magistrales de Laia Ferrer y Armando Bastida',
          'Espectáculo Teatral Familiar en la Sala Albéniz',
          'Espacio DJ Vermut y dinamización en la calle'
        ],
        highlighted: true,
        tag: 'Acceso Libre'
      }
    ],
    subsidyNote: 'BUMFEST es una iniciativa cultural comunitaria con el apoyo del Ajuntament de Tiana.'
  }
};

export const FAQ_DATA = [
  {
    q: {
      ca: 'Com s\'han de fer els tallers? Cal que els pares es quedin?',
      es: '¿Cómo funcionan los talleres? ¿Deben quedarse los padres?'
    },
    a: {
      ca: 'Sí! L\'essència del BUMFEST és precisament l\'aprenentatge compartit en la primera infància: cada infant participa juntament amb el pare, la mare, l\'avi, l\'àvia o el seu acompanyant adult. No és una guarderia, és un espai de connexió i gaudi mutu.',
      es: '¡Sí! La esencia de BUMFEST es el aprendizaje compartido en la primera infancia: cada peque participa junto con su padre, madre, abuelos o acompañante adulto. No es un servicio de guardería, sino un espacio para crear recuerdos juntos.'
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
      ca: 'L\'accés a totes les xerrades i activitats del BUMFEST és 100% gratuït. L\'aforament de la Sala Petita d\'El Casal és limitat per garantir la proximitat de la sessió amb Laia Ferrer i Armando Bastida, i l\'entrada serà per estricte ordre d\'arribada.',
      es: 'El acceso a todas las charlas y actividades de BUMFEST es 100% gratuito. El aforo de la Sala Petita de El Casal es limitado para garantizar cercanía con Laia Ferrer y Armando Bastida, y la entrada será por estricto orden de llegada.'
    }
  },
  {
    q: {
      ca: 'Els espais estan adaptats per a cotxets i mobilitat reduïda?',
      es: '¿Los espacios están adaptados para carritos y movilidad reducida?'
    },
    a: {
      ca: 'Sí, tots els espais municipals seleccionats (Plaça de la Vila, Sala Albéniz, El Casal, Doctor Mascaró, etc.) disposen d\'accessos adaptats i zones d\'aparcament de cotxets.',
      es: 'Sí, todos los recintos municipales (Plaça de la Vila, Sala Albéniz, El Casal, Doctor Mascaró, etc.) cuentan con accesibilidad adaptada y zonas habilitadas para carritos.'
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
