import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Language, VENUES_DATA } from '../data/content';

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
    <section id="espais" className="py-20 sm:py-28 bg-transparent border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VENUES_DATA.map((venue) => (
            <div
              key={venue.id}
              className="p-8 rounded-[36px] bg-white/70 backdrop-blur-xl border border-white hover:border-blue-200 transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                
                {/* Venue Name & sub-tag directly under the name */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                    {venue.name}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold uppercase tracking-wider">
                    {venue.type[lang]}
                  </div>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium pt-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{venue.address}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {venue.description[lang]}
                </p>

                {/* Activities list */}
                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                    {t.activitiesTitle}
                  </div>
                  <div className="space-y-1.5">
                    {venue.activities[lang].map((act, i) => (
                      <div key={i} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Direct Google Maps Link */}
              <div className="pt-4 border-t border-slate-200/60">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${venue.name}, ${venue.address}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs hover:shadow-sm active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-blue-600" />
                  <span>{t.openInMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
