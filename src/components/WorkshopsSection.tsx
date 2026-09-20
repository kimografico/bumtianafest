import React from 'react';
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
      title: 'Programació de Tallers',
      subtitle: 'Espais pràctics i creatius durant el matí (10:00h a 12:00h) dedicats a la primera infància i les seves famílies.',
      viewDetails: 'Més detalls',
    },
    es: {
      title: 'Programación de Talleres',
      subtitle: 'Espacios prácticos y creativos durante la mañana (10:00h a 12:00h) dedicados a la primera infancia y sus familias.',
      viewDetails: 'Más detalles',
    },
  }[lang];

  return (
    <section id="tallers" className="py-20 sm:py-28 bg-transparent border-b border-[#88643B]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C478D] tracking-tight font-display">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A43] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Workshops Cards in 2 Columns grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {WORKSHOPS_DATA.map((workshop) => (
            <div
              key={workshop.id}
              onClick={() => onSelectWorkshop(workshop.id)}
              className="rounded-[36px] bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 hover:border-[#88643B] transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-lg group flex flex-col sm:flex-row"
            >
              {/* Left Column: Workshop Image */}
              <div className="sm:w-2/5 min-h-[200px] sm:min-h-full relative overflow-hidden shrink-0">
                <img
                  src={getWorkshopImage(workshop.id)}
                  alt={workshop.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Right Column: Workshop Details */}
              <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  
                  {/* Instructor */}
                  <div className="text-xs text-[#88643B] font-bold">
                    {workshop.instructor}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#181816] group-hover:text-[#0C478D] transition leading-snug">
                    {workshop.title[lang]}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-[#4A4A43] line-clamp-3 leading-relaxed font-normal">
                    {workshop.shortDesc[lang]}
                  </p>

                  {/* Location */}
                  <div className="pt-2 border-t border-[#88643B]/20 flex items-center gap-1.5 text-xs text-[#66665D]">
                    <MapPin className="w-3.5 h-3.5 text-[#88643B] shrink-0" />
                    <span className="truncate">{workshop.location}</span>
                  </div>

                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button className="w-full py-2.5 px-4 rounded-2xl bg-white group-hover:bg-[#0C478D] text-[#181816] group-hover:text-white border border-[#88643B]/30 group-hover:border-transparent text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs group-hover:shadow-md cursor-pointer">
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
