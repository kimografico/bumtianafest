// Carousel Photos from the carrusel folder
import carrusel1 from './images/carrusel/TIANA1.jpg';
import carrusel2 from './images/carrusel/TIANA2.jpg';
import carrusel3 from './images/carrusel/TIANA3.jpg';
import carrusel4 from './images/carrusel/TIANA4.jpg';
import carrusel5 from './images/carrusel/TIANA5.jpg';
import carrusel6 from './images/carrusel/TIANA6.jpg';

// Real Guests / Speakers Portraits
import armandoBastidaImg from './images/guests/armando-bastida.jpg';
import laiaFerrerImg from './images/guests/laia-ferrer.jpg';
import oriolRocaImg from './images/guests/oriol-roca.jpg';
import piMcCarthyImg from './images/guests/pi-mccarthy.jpg';

// Workshop Photos
import wsGardening from './images/workshops/gardening.jpg';
import wsTheater from './images/workshops/theater.jpg';
import wsCostumes from './images/workshops/costumes.jpg';

// Team & Vision
import twoLbVisionImg from './images/team/two-lb-vision.jpg';
import nutritionTeamImg from './images/team/nutrition-team.jpg';

// Local Gastronomy & Commerce in Tiana
import restoCasalImg from './images/gastronomy/casal.jpg';
import restoBarbarImg from './images/gastronomy/barbar.jpg';
import restoCasinoImg from './images/gastronomy/casino.jpg';
import restoTiritiImg from './images/gastronomy/tiriti.jpg';
import restoAviMingoImg from './images/gastronomy/avi-mingo.jpg';
import restoVerdEsBoImg from './images/gastronomy/verd-es-bo.jpg';
import restoEspaiEcoImg from './images/gastronomy/espai-eco.jpg';

// Partner and Institutional SVG Logos
import logoBumFest from './images/logos/BUMFEST.svg';
import logoTiana from './images/logos/TIANA.svg';
import logo2lb from './images/logos/2LB.svg';
import logoAcist from './images/logos/ACIST.svg';
import logoBarbar from './images/logos/BARBAR.svg';
import logoCasal from './images/logos/CASAL.svg';
import logoCasino from './images/logos/CASINO.svg';
import logoEspaiEco from './images/logos/ESPAIECO.svg';
import logoVerdesbo from './images/logos/VERDESBO.svg';
import logoTirati from './images/logos/TIRATI.svg';

export const FESTIVAL_LOGOS = {
  bumFest: logoBumFest,
  tiana: logoTiana,
  twoLb: logo2lb,
  acist: logoAcist,
  barbar: logoBarbar,
  casal: logoCasal,
  casino: logoCasino,
  espaiEco: logoEspaiEco,
  verdEsBo: logoVerdesbo,
  tirati: logoTirati,
};

export const FESTIVAL_IMAGES = {
  // 6 Carousel Photos from carrusel folder
  carouselSlide1: carrusel1,
  carouselSlide2: carrusel2,
  carouselSlide3: carrusel3,
  carouselSlide4: carrusel4,
  carouselSlide5: carrusel5,
  carouselSlide6: carrusel6,

  // Main scenes & fallbacks (pointing to the authentic carrusel photos)
  hero: carrusel1,
  workshop: carrusel2,
  village: carrusel5,
  music: carrusel3,
  cooking: carrusel4,
  
  // Specific Workshop Images (Local Real Photos)
  gardening: wsGardening,
  theater: wsTheater,
  costumes: wsCostumes,
  
  // Real Speaker & Guest portraits
  armandoBastida: armandoBastidaImg,
  laiaFerrer: laiaFerrerImg,
  luleSoler: laiaFerrerImg, // fallback alias
  nutritionTeam: nutritionTeamImg,

  // Real 2LB Team portraits & vision
  piMcCarthy: piMcCarthyImg,
  oriolRoca: oriolRocaImg,
  twoLbVision: twoLbVisionImg,

  // Restaurants / Gastronomy / Commercial Partners in Tiana (Local Photos)
  restoCasal: restoCasalImg,
  restoBarbar: restoBarbarImg,
  restoCasino: restoCasinoImg,
  restoTiriti: restoTiritiImg,
  restoAviMingo: restoAviMingoImg,
  restoVerdEsBo: restoVerdEsBoImg,
  restoEspaiEco: restoEspaiEcoImg,
};
