import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Package, 
  Calendar,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { Language, Workshop, WORKSHOPS_DATA, VENUES_DATA } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';

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
  const workshop = WORKSHOPS_DATA.find((w) => w.id === workshopId) || WORKSHOPS_DATA[0];
  
  // Find matching venue
  const venue = VENUES_DATA.find((v) => 
    workshop.location.toLowerCase().includes(v.name.toLowerCase()) || 
    v.activities[lang].some(act => act.toLowerCase().includes(workshop.title[lang].toLowerCase().slice(0, 8)))
  ) || VENUES_DATA[0];

  const otherWorkshops = WORKSHOPS_DATA.filter((w) => w.id !== workshop.id).slice(0, 3);

  const getWorkshopImage = (id: string) => {
    switch (id) {
      case 'jardineria': return FESTIVAL_IMAGES.gardening;
      case 'vestuari': return FESTIVAL_IMAGES.costumes;
      case 'teatre-expressio': return FESTIVAL_IMAGES.theater;
      default: return FESTIVAL_IMAGES.workshop;
    }
  };

  const t = {
    ca: {
      back: 'Tornar a la programació',
      age: 'Edat recomanada',
      duration: 'Horari i durada',
      location: 'Espai a Tiana',
      instructor: 'Formador / Especialista',
      about: 'Descripció completa del taller',
      values: 'Valors pedagògics i aprenentatges',
      materials: 'Materials i recursos inclosos',
      venueCard: 'Com arribar a aquest espai',
      openMaps: 'Obrir a Google Maps',
      otherTitle: 'Altres tallers del BUM Fest',
      participate: 'Com participar?',
      participateDesc: 'Els tallers formen part del Bono Tallers Matí (30€) o Bono Complet (60€). L’accés per a l’acompanyant adult és gratuït.',
    },
    es: {
      back: 'Volver a la programación',
      age: 'Edad recomendada',
      duration: 'Horario y duración',
      location: 'Espacio en Tiana',
      instructor: 'Formador / Especialista',
      about: 'Descripción completa del taller',
      values: 'Valores pedagógicos y aprendizajes',
      materials: 'Materiales y recursos incluidos',
      venueCard: 'Cómo llegar a este espacio',
      openMaps: 'Abrir en Google Maps',
      otherTitle: 'Otros talleres de BUM Fest',
      participate: '¿Cómo participar?',
      participateDesc: 'Los talleres están incluidos en el Bono Talleres Mañana (30€) o Bono Completo (60€). El acompañante adulto accede gratis.',
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
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/70 hover:bg-white text-slate-700 hover:text-slate-900 border border-white text-xs font-bold transition shadow-2xs active:scale-95 cursor-pointer backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.back}</span>
        </button>
      </div>

      {/* Main Detail Header Card */}
      <div className="rounded-[36px] bg-white/60 backdrop-blur-xl border border-white shadow-xl overflow-hidden mb-12">
        
        {/* Banner image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          <img
            src={getWorkshopImage(workshop.id)}
            alt={workshop.title[lang]}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-600/90 text-white text-[11px] font-bold uppercase tracking-wider mb-3">
              {workshop.category === 'compartit' ? 'Familiar Compartit' : workshop.category}
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {workshop.title[lang]}
            </h1>
          </div>
        </div>

        {/* Quick specs grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 border-b border-slate-200/60 bg-white/40">
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.age}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900">{workshop.ageRange}</p>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.duration}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900">{workshop.duration}</p>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.location}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900">{workshop.location}</p>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.instructor}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900">{workshop.instructor}</p>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Full description */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">{t.about}</h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {workshop.fullDesc[lang]}
            </p>
          </div>

          {/* Pedagogical values */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">{t.values}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {workshop.pedagogicalValues[lang].map((val, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-white shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">{t.materials}</h3>
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
              <Package className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {workshop.materials[lang]}
              </p>
            </div>
          </div>

          {/* Location & Google Maps Card */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-lg border border-white/20">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider">{t.venueCard}</span>
                <h4 className="text-xl font-bold">{venue.name}</h4>
                <p className="text-xs text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{venue.address}</span>
                </p>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${venue.name}, ${venue.address}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold shadow-md transition active:scale-95 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>{t.openMaps}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
            
            <p className="text-xs text-slate-300 border-t border-white/10 pt-3">
              {venue.description[lang]}
            </p>
          </div>

          {/* How to participate note */}
          <div className="p-5 rounded-2xl bg-white/80 border border-slate-200/80 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">{t.participate}</h4>
            <p className="text-xs sm:text-sm text-slate-600">{t.participateDesc}</p>
          </div>

        </div>
      </div>

      {/* Other Workshops Recommendations */}
      <div className="space-y-4">
        <h3 className="text-xl font-extrabold text-slate-900">{t.otherTitle}</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {otherWorkshops.map((other) => (
            <div
              key={other.id}
              onClick={() => onSelectWorkshop(other.id)}
              className="p-5 rounded-3xl bg-white/60 backdrop-blur-xl border border-white hover:border-blue-300 transition-all cursor-pointer space-y-3 shadow-2xs hover:shadow-md group"
            >
              <div className="text-[11px] font-bold text-blue-700 uppercase">{other.ageRange}</div>
              <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition">
                {other.title[lang]}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2">{other.shortDesc[lang]}</p>
              <div className="text-xs font-bold text-blue-600 pt-1">Veure taller →</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
