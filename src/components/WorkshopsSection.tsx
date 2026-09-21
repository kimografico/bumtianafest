import React from 'react';
import { 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { Language, WORKSHOPS_DATA } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';
import { LINKS } from '../data/links';

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
      case 'percussio': return FESTIVAL_IMAGES.percussion;
      case 'vestuari': return FESTIVAL_IMAGES.costumes;
      case 'teatre-expressio': return FESTIVAL_IMAGES.theater;
      default: return FESTIVAL_IMAGES.workshop;
    }
  };

  const t = {
    ca: {
      title: 'Programació de Tallers',
      subtitle: 'Espais pràctics i creatius durant el matí (10:00h a 12:00h) dedicats a la primera infància i les seves famílies. L\'acollida a les famílies serà a les 9:30h a la Plaça de la Vila.',
      viewDetails: 'Més detalls',
      reservar: 'Reservar plaça',
    },
    es: {
      title: 'Programación de Talleres',
      subtitle: 'Espacios prácticos y creativos durante la mañana (10:00h a 12:00h) dedicados a la primera infancia y sus familias. La acogida a las familias será a las 9:30h en la Plaça de la Vila.',
      viewDetails: 'Más detalles',
      reservar: 'Reservar plaza',
    },
  }[lang];

  return (
    <section id="tallers" className="py-20 sm:py-28 bg-transparent border-b border-[#88643B]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-[#0C478D] font-display">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A43] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Workshops Cards in 2 Columns grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {WORKSHOPS_DATA.map((workshop) => (
            <button
              key={workshop.id}
              onClick={() => onSelectWorkshop(workshop.id)}
              className="w-full text-left rounded bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 hover:border-[#88643B] transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-lg group flex flex-col sm:flex-row"
            >
              {/* Left Column: Workshop Image */}
              <div className="sm:w-2/5 min-h-[200px] sm:min-h-full relative overflow-hidden shrink-0 bg-[#EFEEE0]">
                <img
                  src={getWorkshopImage(workshop.id)}
                  alt={workshop.title[lang]}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="low"
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
                  <h3 className="text-lg sm:text-xl font-extralight uppercase tracking-wider text-[#181816] group-hover:text-[#0C478D] transition leading-snug">
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

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col gap-2">
                  <span className="w-full py-2.5 px-4 rounded bg-white group-hover:bg-[#0C478D] text-[#181816] group-hover:text-white border border-[#88643B]/30 group-hover:border-transparent text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs group-hover:shadow-md">
                    <span>{t.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <a
                    href={LINKS.forms.reservarPlaca}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-2.5 px-4 rounded bg-[#88643B] hover:opacity-90 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs active:scale-95"
                  >
                    {t.reservar}
                  </a>
                </div>

              </div>

            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
