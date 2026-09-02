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
  badge?: string;
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
      ca: 'Taller de Jardineria & Cura de la Natura',
      es: 'Taller de Jardinería & Cuidado de la Naturaleza'
    },
    category: 'compartit',
    instructor: 'Arnau & Albert',
    location: 'Garden Tiana / Espai Verd Can Riera',
    shortDesc: {
      ca: 'Sembrar, trasplantar i cuidar plantes en espais comuns del poble.',
      es: 'Sembrar, trasplantar y cuidar plantas en espacios comunes del pueblo.'
    },
    fullDesc: {
      ca: 'Activitat lúdica i educativa on infants i adults aprenen sobre el cicle de vida de les plantes i la cura del medi ambient. Es treballarà en un espai municipal per plantar plançons i testos que romandran al poble.',
      es: 'Actividad lúdica y educativa donde peques y adultos aprenden sobre el ciclo de vida de las plantas y el cuidado del medio ambiente. Se trabajará en un espacio municipal plantando plantones que quedarán en el pueblo.'
    },
    ageRange: '4 - 14 anys (en família)',
    duration: '10:00 - 13:00 (3 hores)',
    materials: {
      ca: 'Estris adaptats, terra ecològica, llavors autòctones i testos reciclats.',
      es: 'Herramientas adaptadas, tierra ecológica, semillas autóctonas y macetas recicladas.'
    },
    pedagogicalValues: {
      ca: ['Connexió amb la natura', 'Responsabilitat ambiental', 'Orgull de cuidar espais públics de Tiana'],
      es: ['Conexión con la naturaleza', 'Responsabilidad ambiental', 'Orgullo de cuidar espacios públicos de Tiana']
    },
    tag: 'Natura & Sostenibilitat',
    iconName: 'Sprout',
    featured: true
  },
  {
    id: 'cuina',
    title: {
      ca: 'Taller de Cuina Pedagògica en Família',
      es: 'Taller de Cocina Pedagógica en Familia'
    },
    category: 'compartit',
    instructor: 'Núria Cuinets',
    location: 'El Casal de Tiana',
    shortDesc: {
      ca: 'Lectura de receptes, càlcul d\'ingredients i creació culinària compartida.',
      es: 'Lectura de recetas, cálculo de ingredientes y creación culinaria compartida.'
    },
    fullDesc: {
      ca: 'Comencem llegint les receptes, calculem ingredients, quantitats i busquem els estris necessaris. Fem pedagogia a la cuina: cooperació, hàbits saludables i el plaer de cuinar plegats sense presses.',
      es: 'Empezamos leyendo recetas, calculamos cantidades y preparamos utensilios. Hacemos pedagogía en la cocina: cooperación, hábitos saludables y el placer de cocinar juntos.'
    },
    ageRange: 'A partir de 5 anys + Adults',
    duration: '10:00 - 13:00',
    materials: {
      ca: 'Ingredients frescos locals, davantals ecològics i estris adaptats.',
      es: 'Ingredientes frescos locales, delantales ecológicos y utensilios adaptados.'
    },
    pedagogicalValues: {
      ca: ['Treball en equip', 'Autonomia infantil', 'Alimentació conscient'],
      es: ['Trabajo en equipo', 'Autonomía infantil', 'Alimentación consciente']
    },
    tag: 'Gastronomia & Hàbits',
    iconName: 'Utensils',
    featured: true
  },
  {
    id: 'videoclips-ia',
    title: {
      ca: 'Taller de Videoclips & IA Creativa',
      es: 'Taller de Videoclips & IA Creativa'
    },
    category: 'adolescents',
    instructor: 'Xavi Vinyasa',
    location: 'Can Reón / Sala Multimèdia',
    shortDesc: {
      ca: 'Creació de conceptes audiovisuals, animacions i videoclips utilitzant eines d\'IA ètiques i creatives.',
      es: 'Creación de conceptos audiovisuales, animaciones y videoclips con IA creativa y ética.'
    },
    fullDesc: {
      ca: 'La indústria musical evoluciona i els joves són els nous creadors. En aquest taller aprendrem el brífing visual, generació d\'escenes i personatges artístics, sincronització amb música i postproducció professional per narrar les nostres pròpies històries.',
      es: 'La industria musical evoluciona y la juventud lidera la creación visual. Aprenderemos briefing visual, diseño de escenas con IA, sincronización con audio y montaje para contar historias impactantes.'
    },
    ageRange: '11 - 17 anys (Joves i adolescents)',
    duration: '10:00 - 13:00',
    materials: {
      ca: 'Ordinadors, tauletes gràfiques i programari audiovisual assistit.',
      es: 'Ordenadores, tabletas gráficas y software audiovisual asistido.'
    },
    pedagogicalValues: {
      ca: ['Ús crític i artístic de la tecnologia', 'Narrativa audiovisual', 'Expressió personal'],
      es: ['Uso crítico y artístico de la tecnología', 'Narrativa audiovisual', 'Expresión personal']
    },
    tag: 'Tecnologia Creativa',
    iconName: 'Video',
    featured: true
  },
  {
    id: 'mural-graffiti',
    title: {
      ca: 'Taller de Pintura Mural & Art Urbà',
      es: 'Taller de Pintura Mural & Arte Urbano'
    },
    category: 'adolescents',
    instructor: 'Mario Tarragó',
    location: 'L\'Escorxador (Pati Exterior)',
    shortDesc: {
      ca: 'Disseny col·lectiu i pintura d\'un mural comunitari amb pintures ecològiques.',
      es: 'Diseño colectivo y pintura de un mural comunitario con pinturas ecológicas.'
    },
    fullDesc: {
      ca: 'Creació d\'un mural participatiu en un espai emblemàtic de Tiana. Aprenentatge de tècniques de composició, barreja de colors, ús d\'esprais amb base d\'aigua no tòxics i cooperació en gran format.',
      es: 'Creación de un mural participativo en Tiana. Aprendizaje de composición, mezcla de colores y sprays de base al agua no tóxicos fomentando el trabajo en equipo.'
    },
    ageRange: '10 - 17 anys + Famílies',
    duration: '10:00 - 13:00',
    materials: {
      ca: 'Pintures ecològiques a l\'aigua, corrons, pinzells i proteccions.',
      es: 'Pinturas ecológicas al agua, rodillos, pinceles y protecciones.'
    },
    pedagogicalValues: {
      ca: ['Transformació de l\'espai públic', 'Expressió gràfica', 'Treball cooperatiu'],
      es: ['Transformación del espacio público', 'Expresión gráfica', 'Trabajo cooperativo']
    },
    tag: 'Arts Plàstiques',
    iconName: 'Palette'
  },
  {
    id: 'musica-instruments',
    title: {
      ca: 'Taller de Música, Guitarra & Piano',
      es: 'Taller de Música, Guitarra & Piano'
    },
    category: 'compartit',
    instructor: 'Roger & Marçal',
    location: 'Can Riera (Aules de Música)',
    shortDesc: {
      ca: 'Descobriment rítmic i melòdic tocant instruments en conjunt pares i fills.',
      es: 'Descubrimiento rítmico y melódico tocando instrumentos padres e hijos.'
    },
    fullDesc: {
      ca: 'Una aproximació vivencial a la música sense necessitat de coneixements previs. Guitarra, teclats i percussions en un ambient lúdic on crear la nostra primera peça familiar.',
      es: 'Una aproximación vivencial a la música sin necesidad de conocimientos previos. Guitarra, teclados y percusión para crear una melodía conjunta en familia.'
    },
    ageRange: '6 - 15 anys + Adults',
    duration: '10:00 - 13:00',
    materials: {
      ca: 'Instruments acústics, teclats, petites percussions.',
      es: 'Instrumentos acústicos, teclados, pequeñas percusiones.'
    },
    pedagogicalValues: {
      ca: ['Escolta activa', 'Sincronització rítmica', 'Vincle afectiu a través de la música'],
      es: ['Escucha activa', 'Sincronización rítmica', 'Vínculo afectivo a través de la música']
    },
    tag: 'Música & So',
    iconName: 'Music'
  },
  {
    id: 'titelles',
    title: {
      ca: 'Taller de Titelles & Creació de Personatges',
      es: 'Taller de Títeres & Creación de Personajes'
    },
    category: 'infantil',
    instructor: 'Glòria Arrufat',
    location: 'Biblioteca Can Manyer / Can Matas',
    shortDesc: {
      ca: 'Construcció de titelles amb materials reciclats i posada en escena de petites històries.',
      es: 'Construcción de títeres con materiales reciclados y dramatización de pequeñas historias.'
    },
    fullDesc: {
      ca: 'Donem vida a objectes inanimats. A través de retalls, fustes i elements naturals, cada infant i acompanyant donarà caràcter i veu al seu propi personatge teatral.',
      es: 'Damos vida a objetos cotidianos. Mediante recortes, telas y elementos naturales, peques y familias crearán su títere y representarán una historia entrañable.'
    },
    ageRange: '3 - 8 anys (amb acompanyant)',
    duration: '10:00 - 12:30',
    materials: {
      ca: 'Teixits, mitjons reciclats, cartró, coles naturals i guarniments.',
      es: 'Tejidos, calcetines reciclados, cartón, colas naturales y adornos.'
    },
    pedagogicalValues: {
      ca: ['Imaginació simbòlica', 'Motricitat fina', 'Comunicació emocional'],
      es: ['Imaginación simbólica', 'Motricidad fina', 'Comunicación emocional']
    },
    tag: 'Artesania & Joc',
    iconName: 'Smile'
  },
  {
    id: 'teatre-adolescents',
    title: {
      ca: 'Taller de Teatre & Expressió Escènica',
      es: 'Taller de Teatro & Expresión Escénica'
    },
    category: 'adolescents',
    instructor: 'Joan Arqué',
    location: 'Sala Albéniz (Escenari Principal)',
    shortDesc: {
      ca: 'Jocs d\'improvisació, moviment i presència escènica per a joves.',
      es: 'Juegos de improvisación, movimiento y presencia escénica para jóvenes.'
    },
    fullDesc: {
      ca: 'Espai dinàmic per alliberar la vergonya, treballar la confiança en el grup, la veu i el llenguatge corporal a través de dinàmiques teatrals professionals adaptades.',
      es: 'Espacio dinámico para ganar seguridad, desinhibirse, proyectar la voz y trabajar el lenguaje corporal a través de dinámicas teatrales profesionales.'
    },
    ageRange: '12 - 18 anys',
    duration: '10:00 - 13:00',
    materials: {
      ca: 'Roba còmoda i espai d\'escenari.',
      es: 'Ropa cómoda y espacio escénico.'
    },
    pedagogicalValues: {
      ca: ['Seguretat personal', 'Empatia', 'Expressió corporal'],
      es: ['Seguridad personal', 'Empatía', 'Expresión corporal']
    },
    tag: 'Arts Escèniques',
    iconName: 'Theater'
  },
  {
    id: 'clown',
    title: {
      ca: 'Taller de Clown & Humor en Família',
      es: 'Taller de Clown & Humor en Familia'
    },
    category: 'compartit',
    instructor: 'Oriol Liñán & Maus',
    location: 'Pati de L\'Escorxador',
    shortDesc: {
      ca: 'El nas vermell com a eina per riure\'s d\'un mateix i connectar amb la tendresa.',
      es: 'La nariz roja como herramienta para reírse de uno mismo y conectar con la ternura.'
    },
    fullDesc: {
      ca: 'El clown permet als adults recuperar la mirada innocent de la infància i als nens veure els pares jugar sense judici. Riures compartits, caigudes còmiques i complicitat pura.',
      es: 'El clown ayuda a los adultos a recuperar la mirada inocente de la infancia y a los peques a ver a sus padres jugar sin filtros. Risas, complicidad y juego libre.'
    },
    ageRange: 'Totes les edats (Familiar)',
    duration: '10:00 - 12:30',
    materials: {
      ca: 'Nassos vermells, atrezzo divertit i barrets.',
      es: 'Narices rojas, atrezzo divertido y sombreros.'
    },
    pedagogicalValues: {
      ca: ['Gestió de l\'error sense vergonya', 'Humor terapèutic', 'Vincle alegre'],
      es: ['Gestión del error sin vergüenza', 'Humor terapéutico', 'Vínculo alegre']
    },
    tag: 'Humor & Expressió',
    iconName: 'Sparkles'
  },
  {
    id: 'vestuari',
    title: {
      ca: 'Taller de Vestuari, Caracterització & Indumentària',
      es: 'Taller de Vestuario, Caracterización & Indumentaria'
    },
    category: 'compartit',
    instructor: 'Aina & Roseta',
    location: 'Can Riera',
    shortDesc: {
      ca: 'Disseny de disfresses i caracterització teatral per transformar-se en personatges.',
      es: 'Diseño de disfraces y caracterización teatral para transformarse en personajes.'
    },
    fullDesc: {
      ca: 'Descobrim els secrets de la sastreria teatral i el maquillatge artístic. Pares i infants idearan peces originals utilitzant robes, complements i pintacares respectuosos amb la pell.',
      es: 'Descubrimos los secretos de la sastrería teatral y el maquillaje artístico. Pequeños y mayores idearán prendas únicas combinando telas y complementos creativos.'
    },
    ageRange: '4 - 12 anys + Famílies',
    duration: '10:00 - 13:00',
    materials: {
      ca: 'Retalls tèxtils reciclats, maquillatges hipoal·lèrgics, màscares.',
      es: 'Retales textiles reciclados, maquillajes hipoalergénicos, máscaras.'
    },
    pedagogicalValues: {
      ca: ['Creativitat tèxtil', 'Joc de rol', 'Desinhibició'],
      es: ['Creatividad textil', 'Juego de rol', 'Desinhibición']
    },
    tag: 'Caracterització & Moda',
    iconName: 'Shirt'
  },
  {
    id: 'beats-dj',
    title: {
      ca: 'Taller de DJ, Beats & Producció Musical',
      es: 'Taller de DJ, Beats & Producción Musical'
    },
    category: 'adolescents',
    instructor: 'Carlos Cuenca',
    location: 'Espai Musical Can Reón',
    shortDesc: {
      ca: 'Crea les teves pròpies bases rítmiques, mescles amb taula de DJ i enregistrament de loops.',
      es: 'Crea tus propias bases rítmicas, mezclas con mesa de DJ y grabación de loops.'
    },
    fullDesc: {
      ca: 'Introducció al món del beatmaking, síntesi de sons urbans i mescla en directe amb equips professionals de DJ. Una experiència immersiva sonora per a joves apassionats pel ritme.',
      es: 'Introducción al mundo del beatmaking, síntesis de sonido urbano y mezcla en directo con controladoras profesionales. Experiencia inmersiva sonora para jóvenes.'
    },
    ageRange: '11 - 18 anys',
    duration: '10:00 - 13:00',
    materials: {
      ca: 'Controladores DJ, sintetitzadors, auriculars i estacions de loop.',
      es: 'Controladoras DJ, sintetizadores, auriculares y estaciones de loop.'
    },
    pedagogicalValues: {
      ca: ['Cultura del ritme', 'Producció digital', 'Concentració'],
      es: ['Cultura del ritmo', 'Producción digital', 'Concentración']
    },
    tag: 'Música Electrònica & DJ',
    iconName: 'Headphones'
  },
  {
    id: 'ioga-mindful',
    title: {
      ca: 'Ioga en Família & Body and Mind',
      es: 'Yoga en Familia & Body and Mind'
    },
    category: 'compartit',
    instructor: 'Sílvia Sayol, Elsa & P10',
    location: 'Jardins de Can Matas / El Casal',
    shortDesc: {
      ca: 'Postures a dues bandes, respiració conscient i massatges relaxants entre pares i fills.',
      es: 'Posturas acompasadas, respiración consciente y masajes relajantes entre padres e hijos.'
    },
    fullDesc: {
      ca: 'Sessió de relaxació activa per desacelerar el ritme frenètic de la setmana. A través d\'estiraments conjunts i dinàmiques de contacte corporal reforçarem la calma i el benestar.',
      es: 'Sesión de relajación activa para frenar las prisas del día a día. Mediante estiramientos compartidos y respiración reforzaremos la calma y el vínculo afectivo.'
    },
    ageRange: 'A partir de 4 anys + Famílies',
    duration: '10:30 - 12:00',
    materials: {
      ca: 'Esterilles de ioga i música ambiental.',
      es: 'Esterillas de yoga y música ambiental.'
    },
    pedagogicalValues: {
      ca: ['Gestió de l\'estrès', 'Presència plena', 'Calma compartida'],
      es: ['Gestión del estrés', 'Presencia plena', 'Calma compartida']
    },
    tag: 'Benestar & Salut',
    iconName: 'Heart'
  },
  {
    id: 'escriptura-guions',
    title: {
      ca: 'Taller d\'Escriptura & Guions per a Cinema i Xarxes',
      es: 'Taller de Escritura & Guiones para Cine y Redes'
    },
    category: 'adolescents',
    instructor: 'Equip Audiovisual 2LB',
    location: 'Biblioteca Can Manyer',
    shortDesc: {
      ca: 'Escriu idees per a curts, videoclips, pel·lícules o contingut digital amb estructura narrativa.',
      es: 'Escribe ideas para cortos, videoclips o contenido digital con sólida estructura narrativa.'
    },
    fullDesc: {
      ca: 'Com es passa d\'una idea al paper? Creació de diàlegs, escaletes i disseny d\'estils per a històries visuals.',
      es: '¿Cómo pasar de una chispa a un guion real? Creación de diálogos, escaletas y formatos narrativos visuales.'
    },
    ageRange: '12 - 18 anys',
    duration: '10:00 - 13:00',
    materials: {
      ca: 'Plantilles de guió, quaderns d\'escriptor.',
      es: 'Plantillas de guion, cuadernos de escritor.'
    },
    pedagogicalValues: {
      ca: ['Escriptura creativa', 'Pensament estructurat', 'Veu pròpia'],
      es: ['Escritura creativa', 'Pensamiento estructurado', 'Voz propia']
    },
    tag: 'Literatura & Guió',
    iconName: 'PenTool'
  }
];

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 'armando-bastida',
    name: 'Armando Bastida',
    role: {
      ca: 'Infermer Pediàtric, Escriptor & Divulgador de Criança',
      es: 'Enfermero Pediátrico, Escritor & Divulgador de Crianza'
    },
    organization: 'Criar con Sentido Común',
    website: 'https://www.armandobastida.com/',
    bio: {
      ca: 'Referent internacional en criança respectuosa, infermer pediàtric amb més de dues dècades d\'experiència, autor de best-sellers com "Criar con el corazón" o "Educar sin miedo". Fundador de la comunitat "Criar con Sentido Común" que acompanya milers de famílies.',
      es: 'Referente nacional e internacional en crianza respetuosa, enfermero pediátrico con más de 20 años de experiencia, autor de éxitos editoriales como "Criar con el corazón" o "Educar sin miedo", y fundador de "Criar con Sentido Común".'
    },
    talkTitle: {
      ca: 'Criança amb el Cor: Vincles, Límits i Acompanyament Emocional',
      es: 'Crianza con el Corazón: Vínculos, Límites y Acompañamiento Emocional'
    },
    talkDescription: {
      ca: 'Una trobada propera, pràctica i plena d\'empatia on Armando Bastida abordarà els reptes reals de la paternitat i maternitat actual: com establir límits sense crits, comprendre el desenvolupament infantil i reforçar la connexió familiar en el dia a dia.',
      es: 'Un encuentro cercano, práctico y lleno de empatía donde Armando Bastida abordará los desafíos reales de la crianza: límites sin gritos, comprensión emocional y fortalecimiento del vínculo diario.'
    },
    time: '12:00h - 13:30h',
    location: 'Sala Petita d\'El Casal de Tiana',
    highlights: {
      ca: [
        'Acompanyament emocional des de la primera infància',
        'Com establir límits segurs sense recórrer al càstig',
        'Torn obert de preguntes directes amb Armando Bastida',
        'Signatura de llibres en finalitzar la xerrada'
      ],
      es: [
        'Acompañamiento emocional desde la primera infancia',
        'Cómo establecer límites seguros sin castigos',
        'Turno abierto de preguntas directas con Armando Bastida',
        'Firma de libros al finalizar la charla'
      ]
    }
  },
  {
    id: 'lule-soler',
    name: 'Lule Soler',
    role: {
      ca: 'Especialista en Adolescència & Entorn Digital',
      es: 'Especialista en Adolescencia & Entorno Digital'
    },
    bio: {
      ca: 'Pedagoga i terapeuta familiar especialitzada en la transició a l\'adolescència, hàbits digitals i benestar juvenil.',
      es: 'Pedagoga y terapeuta familiar especializada en la transición a la adolescencia, hábitos digitales y bienestar juvenil.'
    },
    talkTitle: {
      ca: 'Adolescència & Pantalles: Conviure amb la Tecnologia sense Conflictes',
      es: 'Adolescencia & Pantallas: Convivir con la Tecnología sin Conflictos'
    },
    talkDescription: {
      ca: 'Pautes clares per a mares i pares per gestionar el temps de pantalla, l\'ús de mòbils i les xarxes socials, evitant l\'aïllament i fomentant la confiança mútua.',
      es: 'Pautas claras para madres y padres sobre cómo gestionar pantallas, móviles y redes sociales evitando el aislamiento y fomentando el diálogo.'
    },
    time: '10:30h - 11:45h',
    location: 'Sala Petita d\'El Casal de Tiana',
    highlights: {
      ca: [
        'Acords familiars sobre pantalles i horaris',
        'Com detectar senyals d\'ansietat o dependència digital',
        'Fomentar activitats alternatives enriquidores'
      ],
      es: [
        'Acuerdos familiares sobre pantallas y horarios',
        'Cómo detectar señales de sobreexposición digital',
        'Fomentar alternativas enriquecedoras en familia'
      ]
    }
  },
  {
    id: 'nutricio-infantil',
    name: 'Taula de Salut & Nutrició',
    role: {
      ca: 'Nutricionistes & Professionals Sanitaris Locals',
      es: 'Nutricionistas & Profesionales Sanitarios Locales'
    },
    bio: {
      ca: 'Equip de professionals de salut de Tiana i el Maresme dedicats a la divulgació d\'hàbits alimentaris conscients.',
      es: 'Equipo de profesionales de salud de Tiana y el Maresme dedicados a la divulgación de hábitos alimentarios conscientes.'
    },
    talkTitle: {
      ca: 'Nutrició Saludable en les Etapes de Creixement',
      es: 'Nutrición Saludable en las Etapas de Crecimiento'
    },
    talkDescription: {
      ca: 'Idees pràctiques per a esmorzars, berenars i àpats equilibrats que agradin a petits i grans, defugint ultraprocessats.',
      es: 'Ideas prácticas para desayunos, meriendas y platos equilibrados y apetecibles evitando ultraprocesados.'
    },
    time: '10:00h - 10:45h',
    location: 'Espai Ecològic Tiana',
    highlights: {
      ca: [
        'Receptes ràpides i nutritives per al dia a dia escolar',
        'Resolució de dubtes sobre al·lèrgies i selecció de productes locals'
      ],
      es: [
        'Recetas rápidas y nutritivas para el día a día escolar',
        'Resolución de dudas y selección de productos de proximidad'
      ]
    }
  }
];

export const VENUES_DATA: Venue[] = [
  {
    id: 'sala-albeniz',
    name: 'Sala Albéniz',
    type: {
      ca: 'Teatre & Espai Escènic Municipal',
      es: 'Teatro & Espacio Escénico Municipal'
    },
    address: 'Carrer de Sant Domènec, 1, 08391 Tiana',
    description: {
      ca: 'Emblemàtic teatre municipal on tindrà lloc l\'espectacle teatral infantil de la tarda i el gran concert final "The Mortimers Karaoke en Família".',
      es: 'Emblemático teatro municipal donde tendrá lugar el espectáculo teatral infantil de la tarde y el concierto final "The Mortimers Karaoke en Familia".'
    },
    activities: {
      ca: ['Teatre Infantil (16:00h)', 'Concert Final La Family Mortimers (17:30h)'],
      es: ['Teatro Infantil (16:00h)', 'Concierto Final La Family Mortimers (17:30h)']
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
      ca: 'Cor de les xerrades i ponències de criança (inclosa la ponència principal d\'Armando Bastida a la Sala Petita) i taller de Cuina Pedagògica.',
      es: 'Corazón de las charlas de crianza (incluida la ponencia de Armando Bastida en la Sala Petita) y taller de Cocina Pedagógica.'
    },
    activities: {
      ca: ['Xerrades de Criança i Adolescència', 'Taller de Cuina Pedagògica', 'Espai Dinar Popular'],
      es: ['Charlas de Crianza y Adolescencia', 'Taller de Cocina Pedagógica', 'Espacio Comida Popular']
    },
    walkingFromCenter: '2 min a peu',
    coordinates: { lat: 41.4822, lng: 2.2694 }
  },
  {
    id: 'can-riera',
    name: 'Can Riera',
    type: {
      ca: 'Centre Cívic & Aules Polivalents',
      es: 'Centro Cívico & Aulas Polivalentes'
    },
    address: 'Carrer Can Riera, 4, 08391 Tiana',
    description: {
      ca: 'Espai acollidor dedicat als tallers artístics i musicals matinals (Vestuari & Caracterització, Instruments & Harmonia).',
      es: 'Espacio acogedor dedicado a los talleres artísticos y musicales de la mañana.'
    },
    activities: {
      ca: ['Taller de Música & Instruments', 'Taller de Vestuari & Caracterització'],
      es: ['Taller de Música & Instrumentos', 'Taller de Vestuario & Caracterización']
    },
    walkingFromCenter: '3 min a peu',
    coordinates: { lat: 41.4835, lng: 2.2685 }
  },
  {
    id: 'lescorxador',
    name: 'L\'Escorxador',
    type: {
      ca: 'Espai Jove & Arts Plàstiques',
      es: 'Espacio Joven & Artes Plásticas'
    },
    address: 'Passeig de la Vilesa, s/n, 08391 Tiana',
    description: {
      ca: 'Recinte històric reformat per a activitats a l\'aire lliure: gran taller de pintura mural i espai de Clown.',
      es: 'Recinto histórico acondicionado para actividades al aire libre: pintura mural y clown.'
    },
    activities: {
      ca: ['Pintura Mural & Graffiti Ecològic', 'Taller de Clown & Expressió'],
      es: ['Pintura Mural & Graffiti Ecológico', 'Taller de Clown & Expresión']
    },
    walkingFromCenter: '4 min a peu',
    coordinates: { lat: 41.4815, lng: 2.2712 }
  },
  {
    id: 'can-reon',
    name: 'Can Reón',
    type: {
      ca: 'Espai d\'Art & Innovació',
      es: 'Espacio de Arte & Innovación'
    },
    address: 'Camí de Can Reón, 08391 Tiana',
    description: {
      ca: 'Instal·lació multidisciplinària envoltada de vinyes on es desenvoluparan els tallers tecnològics i de producció sonora per a joves.',
      es: 'Instalación multidisciplinar entre viñas donde se realizarán los talleres tecnológicos y sonoros para jóvenes.'
    },
    activities: {
      ca: ['Taller Videoclips + IA', 'Taller de DJ & Beatmaking'],
      es: ['Taller Videoclips + IA', 'Taller de DJ & Beatmaking']
    },
    walkingFromCenter: '6 min a peu',
    coordinates: { lat: 41.4851, lng: 2.2678 }
  },
  {
    id: 'barbar-tubbies',
    name: 'Bàrbar & Tubbies',
    type: {
      ca: 'Terrassa & Zona Lúdica Vermut',
      es: 'Terraza & Zona Lúdica Vermut'
    },
    address: 'Plaça de la Vila / Nucli Antic, 08391 Tiana',
    description: {
      ca: 'Punt de trobada central a l\'aire lliure: DJ sessions durant tot el dia, jocs populars tradicionals de fusta per a infants i espai vermut familiar.',
      es: 'Punto de encuentro al aire libre: DJ sessions todo el día, juegos populares tradicionales de madera y vermut familiar.'
    },
    activities: {
      ca: ['DJ Sessions Vermut (Xavi Vinyasa)', 'Jocs Populars i Tradicionals', 'Punt de trobada i refrigeri'],
      es: ['DJ Sessions Vermut', 'Juegos Populares Tradicionales', 'Punto de encuentro y refrigerio']
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
    location: 'Plaça de la Vila / Punts d\'informació',
    description: {
      ca: 'Recollida de polseres, mapa d\'itineraris i programa imprès del BUM FEST.',
      es: 'Recogida de pulseras, mapa de itinerarios y programa impreso del BUM FEST.'
    }
  },
  {
    time: '10:00 - 13:00',
    title: {
      ca: 'Tallers Didàctics Matinals (Simultanis)',
      es: 'Tallers Didácticos Matinales (Simultáneos)'
    },
    category: 'tallers',
    location: 'Can Riera, L\'Escorxador, El Casal, Can Reón, Biblioteca',
    description: {
      ca: 'Jardineria, Cuina, Videoclips amb IA, Graffiti, Música & Instruments, Titelles, Teatre, DJ & Beats, Ioga familiar.',
      es: 'Jardinería, Cocina, Videoclips con IA, Graffiti, Música, Títeres, Teatro, DJ y Yoga familiar.'
    },
    badge: 'Infants + Joves + Famílies'
  },
  {
    time: '10:00 - 13:30',
    title: {
      ca: 'Cicle de Xerrades & Taules Rodones de Criança',
      es: 'Ciclo de Charlas & Mesas Redondas de Crianza'
    },
    category: 'xerrades',
    location: 'Sala Petita d\'El Casal de Tiana & Espai Ecològic',
    description: {
      ca: 'Taula de Nutrició (10h), Adolescència & Pantalles amb Lule Soler (10:30h) i Criança amb el Cor amb Armando Bastida (12:00h).',
      es: 'Mesa de Nutrición (10h), Adolescencia & Pantallas con Lule Soler (10:30h) y Crianza con el Corazón con Armando Bastida (12:00h).'
    },
    badge: 'Xerrades de Criança'
  },
  {
    time: '11:00 - 19:00',
    title: {
      ca: 'Jocs Populars Tradicionals & Zona Lúdica',
      es: 'Juegos Populares Tradicionales & Zona Lúdica'
    },
    category: 'tot-el-dia',
    location: 'Espai Bàrbar / Tubbies / Plaça',
    description: {
      ca: 'Monitors dinamitzant jocs de carrer cooperatius i fusta tradicional durant tota la jornada.',
      es: 'Monitores dinamizando juegos de calle cooperativos y madera tradicional durante toda la jornada.'
    }
  },
  {
    time: '14:00 - 16:00',
    title: {
      ca: 'DJ Vermut & Dinar Popular de Proximitat',
      es: 'DJ Vermut & Comida Popular de Proximidad'
    },
    category: 'gastronomia',
    location: 'Xarxa de Restaurants i Terrasses de Tiana',
    description: {
      ca: 'Sessió DJ amb Xavi Vinyasa i tiquets gastronòmics especials als establiments del poble: El Casal, Bàrbar, El Casino, Avi Mingo i Tiriti.',
      es: 'Sesión DJ con Xavi Vinyasa y tickets gastronómicos especiales en locales del pueblo: El Casal, Bàrbar, El Casino, Avi Mingo y Tiriti.'
    },
    badge: 'Comerç Local de Tiana'
  },
  {
    time: '16:00 - 17:00',
    title: {
      ca: 'Espectacle Teatral Infantil & Familiar',
      es: 'Espectáculo Teatral Infantil & Familiar'
    },
    category: 'espectacle',
    location: 'Sala Albéniz',
    description: {
      ca: 'Representació d\'arts escèniques i clown de primer nivell per a petits i grans a l\'històric teatre municipal.',
      es: 'Representación de artes escénicas y clown para peques y grandes en el histórico teatro municipal.'
    }
  },
  {
    time: '17:30 - 19:00',
    title: {
      ca: 'Gran Concert Final: "La Family MORTIMERS" Karaoke en Família',
      es: 'Gran Concierto Final: "La Family MORTIMERS" Karaoke en Familia'
    },
    category: 'espectacle',
    location: 'Sala Albéniz',
    description: {
      ca: 'Concert interactiu i festa de cloenda on pares, mares, infants i joves pugen a l\'escenari a cantar i ballar junts els grans clàssics del pop-rock.',
      es: 'Concierto interactivo y fiesta de clausura donde familias enteras suben al escenario a cantar y bailar los grandes clásicos.'
    },
    badge: 'Fi de Festa'
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
        period: 'per infant / jove + acompanyant adult',
        description: 'Accés lliure als tallers didàctics matinals escollits i a les xerrades de criança.',
        features: [
          'Material complet inclòs',
          'Tallers compartits amb adult sense cost extra',
          'Accés a la ponència d\'Armando Bastida i Lule Soler',
          'Dret a espai de jocs populars'
        ],
        highlighted: false
      },
      {
        name: 'Bono Complet (Tallers + 2 Actuacions)',
        price: '60€',
        period: 'Pack integral de dia complet',
        description: 'L\'experiència sencera del BUM Fest per viure el poble des del matí fins a la nit.',
        features: [
          'Tots els tallers didàctics escollits',
          'Xerrades d\'Armando Bastida i experts',
          'Entrada Teatre Infantil (Sala Albéniz)',
          'Entrada Gran Concert Final La Family Mortimers',
          'Descompte en tiquets gastronòmics del poble'
        ],
        highlighted: true,
        tag: 'Més recomanat'
      },
      {
        name: 'Bono Actuacions',
        price: '20€ / 25€',
        period: '1 actuació (20€) · 2 actuacions (25€)',
        description: 'Per a qui vulgui gaudir exclusivament de la programació d\'arts escèniques a la Sala Albéniz.',
        features: [
          'Entrada numerada a la Sala Albéniz',
          'Teatre infantil de tarda',
          'Concert Karaoke en família The Mortimers'
        ],
        highlighted: false
      }
    ],
    subsidyNote: 'El BUM TIANA FEST compta amb el finançament públic de l\'Ajuntament de Tiana i la Generalitat de Catalunya, cobrint la gran majoria de la producció artística per afavorir les tarifes comunitàries.'
  },
  es: {
    title: 'Tarifas & Acceso Popular',
    subtitle: 'Precios asequibles gracias a la cofinanciación del Ajuntament de Tiana para hacer de BUM FEST un festival accesible a todas las familias.',
    packs: [
      {
        name: 'Bono Talleres Mañana',
        price: '30€',
        period: 'por peque / joven + acompañante adulto',
        description: 'Acceso libre a los talleres didácticos de la mañana y a las charlas de crianza.',
        features: [
          'Material completo incluido',
          'Talleres compartidos con adulto sin coste extra',
          'Acceso a la ponencia de Armando Bastida y Lule Soler',
          'Zona de juegos tradicionales'
        ],
        highlighted: false
      },
      {
        name: 'Bono Completo (Talleres + 2 Actuaciones)',
        price: '60€',
        period: 'Pack integral de día completo',
        description: 'La experiencia completa de BUM Fest para disfrutar de Tiana de la mañana a la noche.',
        features: [
          'Todos los talleres didácticos elegidos',
          'Charlas de Armando Bastida y expertos',
          'Entrada Teatro Infantil (Sala Albéniz)',
          'Entrada Gran Concierto Final La Family Mortimers',
          'Descuentos en tickets gastronómicos locales'
        ],
        highlighted: true,
        tag: 'Más recomendado'
      },
      {
        name: 'Bono Actuaciones',
        price: '20€ / 25€',
        period: '1 actuación (20€) · 2 actuaciones (25€)',
        description: 'Para quienes deseen asistir exclusivamente a la programación escénica en la Sala Albéniz.',
        features: [
          'Entrada numerada en la Sala Albéniz',
          'Teatro infantil de tarde',
          'Concierto Karaoke en familia The Mortimers'
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
      ca: 'Sí! L\'essència del BUM FEST és precisament l\'aprenentatge compartit: cada infant o adolescent participa juntament amb el pare, la mare, l\'avi, l\'àvia o el seu acompanyant adult. No és una guarderia, és un espai de connexió i gaudi mutu.',
      es: '¡Sí! La esencia de BUM FEST es el aprendizaje compartido: cada niño o adolescente participa junto con su padre, madre, abuelos o acompañante adulto. No es un servicio de guardería, sino un espacio para crear recuerdos juntos.'
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
      ca: 'L\'aforament de les aules i sales d\'El Casal és limitat per garantir la comoditat i proximitat de la sessió. Els assistents amb Bono del BUM Fest tindran accés per ordre d\'arribada.',
      es: 'El aforo de las salas de El Casal es limitado para asegurar cercanía. Los asistentes con Bono del BUM Fest tendrán acceso por orden de llegada.'
    }
  },
  {
    q: {
      ca: 'Els espais estan adaptats per a cotxets i mobilitat reduïda?',
      es: '¿Los espacios están adaptados para carritos y movilidad reducida?'
    },
    a: {
      ca: 'Sí, tots els espais municipals seleccionats (Sala Albéniz, El Casal, Can Riera, etc.) disposen d\'accessos adaptats i zones d\'aparcament de cotxets.',
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
