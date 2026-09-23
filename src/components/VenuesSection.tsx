import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { VENUES_DATA } from '../data/content';
import { LINKS } from '../data/links';

export const VenuesSection: React.FC = () => {
  const title = 'Les Localitzacions del BUMFEST';
  const subtitle = 'Tots els equipaments municipals i espais culturals on tindrà lloc el festival a Tiana.';
  const openInMaps = 'Obrir a Google Maps';
  const activitiesTitle = 'Activitats en aquesta localització';

  return (
    <section id="espais" className="py-20 sm:py-28 bg-transparent border-b border-secondary/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-primary font-display">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-festmuted leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VENUES_DATA.map((venue) => (
            <div
              key={venue.id}
              className="p-8 rounded bg-festcard/90 backdrop-blur-xl border border-secondary/30 hover:border-secondary transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                
                {/* Venue Name */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-extralight uppercase tracking-wider text-festtext leading-tight">
                    {venue.name}
                  </h3>
                  <p className="text-xs text-festlabel flex items-center gap-1.5 font-medium pt-1">
                    <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>{venue.address}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-festmuted leading-relaxed font-normal">
                  {venue.description}
                </p>

                {/* Activities list */}
                <div className="space-y-2 pt-2 border-t border-secondary/20">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                    {activitiesTitle}
                  </h4>
                  <div className="space-y-1.5">
                    {venue.activities.map((act, i) => (
                      <div key={i} className="text-xs text-festtext font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Direct Google Maps Link */}
              <div className="pt-4 border-t border-secondary/20">
                <a
                  href={LINKS.maps.venue(venue.name, venue.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${openInMaps}: ${venue.name} (${venue.address})`}
                  className="w-full py-3 px-4 rounded bg-white hover:bg-festcard text-festtext border border-secondary/30 text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs hover:shadow-sm active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-primary" />
                  <span>{openInMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 text-secondary" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
