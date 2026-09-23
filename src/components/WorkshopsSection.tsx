import React from 'react';
import { 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { WORKSHOPS_DATA } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';
import { LINKS } from '../data/links';

interface WorkshopsSectionProps {
  onSelectWorkshop: (workshopId: string) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({
  onSelectWorkshop,
}) => {
  const getWorkshopImage = (id: string) => {
    switch (id) {
      case 'jardineria': return FESTIVAL_IMAGES.gardening;
      case 'percussio': return FESTIVAL_IMAGES.percussion;
      case 'teatre-expressio': return FESTIVAL_IMAGES.theater;
      case 'espai-nadons': return FESTIVAL_IMAGES.nadons;
      default: return FESTIVAL_IMAGES.workshop;
    }
  };

  const title = 'Tallers';
  const subtitle = 'Natura, Art i Poble. De 10:00 a 12:00 del matí (Acollida a les 9:30 a la Plaça de la Vila)';
  const viewDetails = 'Més detalls';
  const reservar = 'Reservar plaça';

  return (
    <section id="tallers" className="py-20 sm:py-28 bg-transparent border-b border-[#88643B]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-[#0C478D] font-display">
            {title}
          </h2>
          <div className="text-base sm:text-lg text-[#4A4A43] leading-relaxed">
            <span className="block text-lg sm:text-xl text-[#88643B] uppercase">Natura, Art i Poble.</span>
            <span className="block">De 10:00 a 12:00 del matí</span>
            <span className="block">Acollida a les 9:30 a la Plaça de la Vila</span>
          </div>
        </div>

        {/* Workshops Cards in 2 Columns grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {WORKSHOPS_DATA.map((workshop) => {
            const handleKeyDown = (e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectWorkshop(workshop.id);
              }
            };

            return (
              <div
                key={workshop.id}
                role="button"
                tabIndex={0}
                onClick={() => onSelectWorkshop(workshop.id)}
                onKeyDown={handleKeyDown}
                className="w-full text-left rounded bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 hover:border-[#88643B] transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-lg group flex flex-col sm:flex-row"
              >
              {/* Left Column: Workshop Image */}
              <div className="sm:w-2/5 min-h-[200px] sm:min-h-full relative overflow-hidden shrink-0 bg-[#EFEEE0]">
                <img
                  src={getWorkshopImage(workshop.id)}
                  alt=""
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
                  
                  {/* Tags row */}
                  <div className="text-xs text-[#88643B] font-bold">
                    {workshop.instructor}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extralight uppercase tracking-wider text-[#181816] group-hover:text-[#0C478D] transition leading-snug">
                    {workshop.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-[#4A4A43] line-clamp-3 leading-relaxed font-normal">
                    {workshop.shortDesc}
                  </p>

                  {/* Location */}
                  <div className="pt-2 border-t border-[#88643B]/20 flex items-center justify-between gap-1.5 text-xs text-[#66665D]">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-[#88643B] shrink-0" />
                      <span className="truncate">{workshop.location}</span>
                    </div>
                    {workshop.ageRange && (
                      <span className="px-2.5 py-0.5 rounded bg-[#FAF9F3] text-[#181816] text-[11px] font-bold border border-[#88643B]/30 shrink-0">
                        {workshop.ageRange}
                      </span>
                    )}
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col gap-2">
                  <span className="w-full py-2.5 px-4 rounded bg-white group-hover:bg-[#0C478D] text-[#181816] group-hover:text-white border border-[#88643B]/30 group-hover:border-transparent text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs group-hover:shadow-md">
                    <span>{viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  {LINKS.forms.tallers[workshop.id as keyof typeof LINKS.forms.tallers] && (
                    <a
                      href={LINKS.forms.tallers[workshop.id as keyof typeof LINKS.forms.tallers]}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 px-4 rounded bg-[#88643B] hover:opacity-90 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs active:scale-95"
                    >
                      {reservar}
                    </a>
                  )}
                </div>

              </div>

            </div>
          );
          })}
        </div>

      </div>
    </section>
  );
};
