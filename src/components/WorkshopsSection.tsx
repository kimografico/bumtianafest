import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { Language, WORKSHOPS_DATA } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';

interface WorkshopsSectionProps {
  lang: Language;
  onSelectWorkshop: (workshopId: string) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({
  lang,
  onSelectWorkshop,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'infantil' | 'adolescents' | 'compartit'>('all');

  const filteredWorkshops = WORKSHOPS_DATA.filter((w) => {
    if (activeFilter === 'all') return true;
    return w.category === activeFilter;
  });

  const getWorkshopImage = (id: string) => {
    switch (id) {
      case 'jardineria': return FESTIVAL_IMAGES.gardening;
      case 'cuina': return FESTIVAL_IMAGES.cooking;
      case 'videoclips-ia': return FESTIVAL_IMAGES.videoclips;
      case 'mural-graffiti': return FESTIVAL_IMAGES.mural;
      case 'musica-instruments': return FESTIVAL_IMAGES.instruments;
      case 'titelles': return FESTIVAL_IMAGES.puppets;
      case 'teatre-adolescents': return FESTIVAL_IMAGES.theater;
      case 'clown': return FESTIVAL_IMAGES.clown;
      case 'vestuari': return FESTIVAL_IMAGES.costumes;
      case 'beats-dj': return FESTIVAL_IMAGES.dj;
      case 'ioga-mindful': return FESTIVAL_IMAGES.yoga;
      case 'escriptura-guions': return FESTIVAL_IMAGES.writing;
      default: return FESTIVAL_IMAGES.workshop;
    }
  };

  const t = {
    ca: {
      title: 'Programació de Tallers',
      subtitle: 'Espais pràctics i creatius durant tot el matí (10:00h a 13:00h) guiats per especialistes.',
      filterAll: 'Tots els tallers',
      filterShared: 'Familiar Compartit',
      filterKids: 'Infantil (3-10 anys)',
      filterTeens: 'Joves & Adolescents',
      viewDetails: 'Més detalls',
    },
    es: {
      title: 'Programación de Talleres',
      subtitle: 'Espacios prácticos y creativos durante toda la mañana (10:00h a 13:00h) guiados por especialistas.',
      filterAll: 'Todos los talleres',
      filterShared: 'Familiar Compartido',
      filterKids: 'Infantil (3-10 años)',
      filterTeens: 'Jóvenes & Adolescentes',
      viewDetails: 'Más detalles',
    },
  }[lang];

  return (
    <section id="tallers" className="py-20 sm:py-28 bg-transparent border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-10 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: t.filterAll },
            { id: 'compartit', label: t.filterShared },
            { id: 'infantil', label: t.filterKids },
            { id: 'adolescents', label: t.filterTeens },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                  : 'bg-white/70 hover:bg-white text-slate-700 border border-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Workshops Cards in 2 Columns grid - WITHOUT hover translation (-translate-y) */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              onClick={() => onSelectWorkshop(workshop.id)}
              className="rounded-[36px] bg-white/70 backdrop-blur-xl border border-white hover:border-blue-300 transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-lg group flex flex-col sm:flex-row"
            >
              {/* Left Column: Workshop Image */}
              <div className="sm:w-2/5 min-h-[200px] sm:min-h-full relative overflow-hidden shrink-0">
                <img
                  src={getWorkshopImage(workshop.id)}
                  alt={workshop.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-blue-900 border border-white shadow-xs uppercase tracking-wider">
                    {workshop.ageRange}
                  </span>
                </div>
              </div>

              {/* Right Column: Workshop Details */}
              <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  
                  {/* Instructor */}
                  <div className="text-xs text-slate-500 font-medium">
                    {workshop.instructor}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                    {workshop.title[lang]}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {workshop.shortDesc[lang]}
                  </p>

                  {/* Location */}
                  <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">{workshop.location}</span>
                  </div>

                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button className="w-full py-2.5 px-4 rounded-2xl bg-white group-hover:bg-blue-900 text-slate-800 group-hover:text-white border border-slate-200/80 group-hover:border-transparent text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs group-hover:shadow-md cursor-pointer">
                    <span>{t.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
