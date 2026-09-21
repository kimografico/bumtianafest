import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Package, 
  ExternalLink,
  Navigation
} from 'lucide-react';
import { Language, Workshop, WORKSHOPS_DATA, VENUES_DATA } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';
import { LINKS } from '../data/links';

interface WorkshopDetailPageProps {
  workshopId: string;
  lang: Language;
  onBack: () => void;
  onSelectWorkshop: (id: string) => void;
}

export const WorkshopDetailPage: React.FC<WorkshopDetailPageProps> = ({
  workshopId,
  lang,
  onBack,
  onSelectWorkshop,
}) => {
  const workshop = WORKSHOPS_DATA.find((w) => w.id === workshopId) || 
    (workshopId === 'vestuari' ? WORKSHOPS_DATA.find((w) => w.id === 'percussio') : undefined) ||
    WORKSHOPS_DATA[0];
  
  // Find matching venue
  const isLocationPending = workshop.location === 'xxxxxxxxx';
  const venue = !isLocationPending ? (VENUES_DATA.find((v) => 
    workshop.location.toLowerCase().includes(v.name.toLowerCase()) || 
    v.activities[lang].some(act => act.toLowerCase().includes(workshop.title[lang].toLowerCase().slice(0, 8)))
  ) || VENUES_DATA[0]) : undefined;

  const otherWorkshops = WORKSHOPS_DATA.filter((w) => w.id !== workshop.id).slice(0, 3);

  const getWorkshopImage = (id: string) => {
    switch (id) {
      case 'jardineria': return FESTIVAL_IMAGES.gardening;
      case 'percussio': return FESTIVAL_IMAGES.percussion;
      case 'vestuari': return FESTIVAL_IMAGES.costumes;
      case 'teatre-expressio': return FESTIVAL_IMAGES.theater;
      default: return FESTIVAL_IMAGES.workshop;
    }
  };

  const t = {
    ca: {
      back: 'Tornar a la programació',
      duration: 'Horari i durada',
      location: 'Espai a Tiana',
      instructor: 'Formador / Especialista',
      about: 'Descripció completa del taller',
      values: 'Valors pedagògics i aprenentatges',
      materials: 'Materials i recursos inclosos',
      venueCard: 'Com arribar a aquest espai',
      openMaps: 'Obrir a Google Maps',
      otherTitle: 'Altres tallers del BUMFEST',
      viewWorkshop: 'Veure taller →',
    },
    es: {
      back: 'Volver a la programación',
      duration: 'Horario y duración',
      location: 'Espacio en Tiana',
      instructor: 'Formador / Especialista',
      about: 'Descripción completa del taller',
      values: 'Valores pedagógicos y aprendizajes',
      materials: 'Materiales y recursos incluidos',
      venueCard: 'Cómo llegar a este espacio',
      openMaps: 'Abrir en Google Maps',
      otherTitle: 'Otros talleres de BUMFEST',
      viewWorkshop: 'Ver taller →',
    },
  }[lang];

  return (
    <div className="min-h-screen pt-8 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Top Back Navigation Bar */}
      <div className="mb-8">
        <button
          onClick={() => {
            onBack();
            setTimeout(() => {
              const el = document.getElementById('tallers');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 60);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#FAF9F3] hover:bg-white text-[#181816] border border-[#88643B]/30 text-xs font-bold transition shadow-2xs active:scale-95 cursor-pointer backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4 text-[#0C478D]" />
          <span>{t.back}</span>
        </button>
      </div>

      {/* Main Detail Header Card */}
      <div className="rounded bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 shadow-xl overflow-hidden mb-12">
        
        {/* Banner image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          <img
            src={getWorkshopImage(workshop.id)}
            alt={workshop.title[lang]}
            width={960}
            height={384}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <h1 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-white font-display">
              {workshop.title[lang]}
            </h1>
          </div>
        </div>

        {/* Quick specs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 sm:p-8 border-b border-[#88643B]/25 bg-white">
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#66665D] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#88643B]" />
              <span>{t.duration}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#181816]">{workshop.duration}</p>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#66665D] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#88643B]" />
              <span>{t.location}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#181816]">{workshop.location}</p>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#66665D] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#88643B]" />
              <span>{t.instructor}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#181816]">{workshop.instructor}</p>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Full description */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#181816]">{t.about}</h2>
            <p className="text-base sm:text-lg text-[#4A4A43] leading-relaxed font-normal">
              {workshop.fullDesc[lang]}
            </p>
          </div>

          {/* Pedagogical values */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#181816]">{t.values}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {workshop.pedagogicalValues[lang].map((val, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded bg-white border border-[#88643B]/20 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0C478D] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#181816]">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#181816]">{t.materials}</h3>
            <div className="p-4 rounded bg-white border border-[#88643B]/20 flex items-start gap-3 shadow-2xs">
              <Package className="w-5 h-5 text-[#0C478D] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#4A4A43] leading-relaxed">
                {workshop.materials[lang]}
              </p>
            </div>
          </div>

          {/* Location & Google Maps Card */}
          {venue ? (
            <div className="p-6 rounded bg-[#0C478D] text-white space-y-4 shadow-lg border border-[#88643B]/30">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">{t.venueCard}</span>
                  <h4 className="text-xl font-bold font-display text-white">{venue.name}</h4>
                  <p className="text-xs text-white/90 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#88643B]" />
                    <span className="text-white">{venue.address}</span>
                  </p>
                </div>

                <a
                  href={LINKS.maps.venue(venue.name, venue.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.openMaps}: ${venue.name} (${venue.address})`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white text-[#181816] hover:bg-[#FAF9F3] text-xs font-bold shadow-md transition active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#0C478D]" />
                  <span>{t.openMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 text-[#88643B]" />
                </a>
              </div>
              
              <p className="text-xs text-white/90 border-t border-white/20 pt-3 leading-relaxed">
                {venue.description[lang]}
              </p>
            </div>
          ) : (
            <div className="p-6 rounded bg-[#0C478D] text-white space-y-4 shadow-lg border border-[#88643B]/30">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">{t.venueCard}</span>
                <h4 className="text-xl font-bold font-display text-white">
                  {lang === 'ca' ? 'Espai pendent de confirmar' : 'Espacio pendiente de confirmar'}
                </h4>
                <p className="text-xs text-white/90 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#88643B]" />
                  <span className="text-white">{workshop.location}</span>
                </p>
              </div>
              <p className="text-xs text-white/90 border-t border-white/20 pt-3 leading-relaxed">
                {lang === 'ca'
                  ? 'L\'espai definitiu a Tiana s\'anunciarà properament.'
                  : 'El espacio definitivo en Tiana se anunciará próximamente.'}
              </p>
            </div>
          )}

          {/* Reservar Plaza Button */}
          <a
            href={LINKS.forms.reservarPlaca}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3.5 rounded bg-[#88643B] hover:opacity-90 text-white text-xs sm:text-sm font-bold shadow-md shadow-[#88643B]/20 active:scale-95 transition text-center"
          >
            {lang === 'ca' ? 'Reservar plaça' : 'Reservar plaza'}
          </a>

        </div>
      </div>

      {/* Other Workshops Recommendations */}
      <div className="space-y-4">
        <h3 className="text-xl font-extrabold text-[#181816] font-display">{t.otherTitle}</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {otherWorkshops.map((other) => (
            <button
              key={other.id}
              onClick={() => onSelectWorkshop(other.id)}
              className="w-full text-left p-5 rounded bg-[#FAF9F3] border border-[#88643B]/30 hover:border-[#88643B] transition-all cursor-pointer space-y-3 shadow-2xs hover:shadow-md group"
            >
              <h4 className="font-bold text-base text-[#181816] group-hover:text-[#0C478D] transition">
                {other.title[lang]}
              </h4>
              <p className="text-xs text-[#4A4A43] line-clamp-2">{other.shortDesc[lang]}</p>
              <div className="text-xs font-bold text-[#0C478D] pt-1">{t.viewWorkshop}</div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
