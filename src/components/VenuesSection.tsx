import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Language, VENUES_DATA } from '../data/content';
import { LINKS } from '../data/links';

interface VenuesSectionProps {
  lang: Language;
}

export const VenuesSection: React.FC<VenuesSectionProps> = ({ lang }) => {
  const t = {
    ca: {
      title: 'Les Localitzacions del Festival',
      subtitle: 'Tots els equipaments municipals i espais culturals on tindrà lloc el festival a Tiana.',
      openInMaps: 'Obrir a Google Maps',
      activitiesTitle: 'Activitats en aquesta localització',
    },
    es: {
      title: 'Las Localizaciones del Festival',
      subtitle: 'Todos los equipamientos municipales y espacios culturales donde tendrá lugar el festival en Tiana.',
      openInMaps: 'Abrir en Google Maps',
      activitiesTitle: 'Actividades en esta localización',
    },
  }[lang];

  return (
    <section id="espais" className="py-20 sm:py-28 bg-transparent border-b border-[#88643B]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-[#0C478D] font-display">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A43] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VENUES_DATA.map((venue) => (
            <div
              key={venue.id}
              className="p-8 rounded bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 hover:border-[#88643B] transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                
                {/* Venue Name & sub-tag directly under the name */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-extralight uppercase tracking-wider text-[#181816] leading-tight">
                    {venue.name}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded bg-[#0C478D]/10 text-[#0C478D] border border-[#0C478D]/20 text-xs font-bold uppercase tracking-wider">
                    {venue.type[lang]}
                  </div>
                  <p className="text-xs text-[#66665D] flex items-center gap-1.5 font-medium pt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#88643B] shrink-0" />
                    <span>{venue.address}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#4A4A43] leading-relaxed font-normal">
                  {venue.description[lang]}
                </p>

                {/* Activities list */}
                <div className="space-y-2 pt-2 border-t border-[#88643B]/20">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#88643B]">
                    {t.activitiesTitle}
                  </div>
                  <div className="space-y-1.5">
                    {venue.activities[lang].map((act, i) => (
                      <div key={i} className="text-xs text-[#181816] font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0C478D] shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Direct Google Maps Link */}
              <div className="pt-4 border-t border-[#88643B]/20">
                <a
                  href={LINKS.maps.venue(venue.name, venue.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.openInMaps}: ${venue.name} (${venue.address})`}
                  className="w-full py-3 px-4 rounded bg-white hover:bg-[#FAF9F3] text-[#181816] border border-[#88643B]/30 text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs hover:shadow-sm active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#0C478D]" />
                  <span>{t.openInMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 text-[#88643B]" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
