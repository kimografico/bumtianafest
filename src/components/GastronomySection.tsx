import React from 'react';
import { Music, MapPin, ExternalLink } from 'lucide-react';
import { RESTAURANTS_DATA } from '../data/content';
import { FESTIVAL_IMAGES, FESTIVAL_LOGOS } from '../assets/images';
import { LINKS } from '../data/links';

export const GastronomySection: React.FC = () => {
  const title = 'Dinar Familiar & DJ';
  const subtitle = 'De 14:00h a 16:00h, el dinar és el moment central de convivència i trobada familiar als carrers, places i terrasses de Tiana.';
  const restaurantsTitle = 'Establiments Col·laboradors de Tiana';
  const visitWebsite = 'Veure lloc web / contacte';

  const getRestaurantImage = (id?: string) => {
    switch (id) {
      case 'casal':
        return FESTIVAL_IMAGES.restoCasal;
      case 'barbar':
        return FESTIVAL_IMAGES.restoBarbar;
      case 'tiriti':
        return FESTIVAL_IMAGES.restoTiriti;
      case 'aviMingo':
        return FESTIVAL_IMAGES.restoAviMingo;
      default:
        return FESTIVAL_IMAGES.restoCasal;
    }
  };

  const getRestaurantLogo = (id?: string) => {
    switch (id) {
      case 'casal':
        return FESTIVAL_LOGOS.casal;
      case 'barbar':
        return FESTIVAL_LOGOS.barbar;
      case 'tiriti':
        return FESTIVAL_LOGOS.tirati;
      case 'aviMingo':
        return FESTIVAL_LOGOS.aviMingo;
      default:
        return null;
    }
  };

  return (
    <section id="gastronomia" className="py-20 sm:py-28 bg-transparent text-[#181816] relative overflow-hidden border-b border-[#88643B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-[#0C478D] font-display">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A43] leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Informative Card: Tiquets + DJ */}
        <div className="p-8 sm:p-10 rounded bg-[#FAF9F3]/90 backdrop-blur-xl text-[#181816] border border-[#88643B]/30 shadow-sm mb-14">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-sm sm:text-base text-[#4A4A43] font-normal">
                Ensenya la teva polsera als següents establiments i allí trobaràs el teu menú BUMFEST.
              </p>
              <p className="text-sm sm:text-base text-[#4A4A43] font-normal">
                Hi hauran taules preparades a disposició de les famílies, al Parc Antic de Futbol, per a poder dinar tots junts.
              </p>
            </div>

            {/* Ambient Music Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded bg-[#88643B] text-white text-xs font-bold shrink-0 shadow-md">
              <Music className="w-4 h-4 text-white shrink-0" />
              <span>DJ VINAXA (12:00h - 14:00h)</span>
            </div>
          </div>
        </div>

        {/* Restaurants Grid with horizontal card format */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-extralight uppercase tracking-wider text-[#0C478D] font-display">
            {restaurantsTitle}
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {RESTAURANTS_DATA.map((resto, idx) => (
              <div
                key={idx}
                className="rounded bg-[#FAF9F3] text-[#181816] border border-[#88643B]/30 hover:border-[#88643B] transition-all overflow-hidden shadow-lg hover:shadow-xl group flex flex-col sm:flex-row"
              >
                {/* Left Column: Restaurant Photo */}
                <div className="sm:w-2/5 min-h-[190px] sm:min-h-full relative overflow-hidden shrink-0 bg-[#EFEEE0]">
                  <img
                    src={getRestaurantImage(resto.id)}
                    alt={`${resto.name} - ${resto.type} a Tiana`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    fetchPriority="low"
                    decoding="async"
                  />
                </div>

                {/* Right Column: Restaurant Details */}
                <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-lg sm:text-xl font-extralight uppercase tracking-wider text-[#181816] group-hover:text-[#0C478D] transition leading-snug">
                          {resto.name}
                        </h4>
                        <span className="text-xs font-bold text-[#88643B]">
                          {resto.type}
                        </span>
                      </div>
                      {getRestaurantLogo(resto.id) && (
                        <div className="w-20 sm:w-24 h-9 sm:h-11 aspect-[2/1] shrink-0 flex items-center justify-end">
                          <img
                            src={getRestaurantLogo(resto.id)!}
                            alt={`Logotip de ${resto.name}`}
                            width={96}
                            height={44}
                            className="w-full h-full object-contain object-right"
                            style={{
                              filter: 'brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(1837%) hue-rotate(200deg) brightness(90%) contrast(98%)',
                            }}
                            referrerPolicy="no-referrer"
                            loading="eager"
                            fetchPriority="low"
                            decoding="async"
                          />
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t border-[#88643B]/20 flex items-center gap-1.5 text-xs text-[#66665D]">
                      <MapPin className="w-3.5 h-3.5 text-[#88643B] shrink-0" />
                      <span className="truncate">{resto.address}, Tiana</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-1">
                    <a
                      href={resto.websiteUrl || LINKS.google.searchRestaurant(resto.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${visitWebsite}: ${resto.name}`}
                      className="w-full py-2.5 px-4 rounded bg-white hover:bg-[#0C478D] hover:text-white text-[#181816] border border-[#88643B]/30 hover:border-transparent text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs active:scale-95 cursor-pointer"
                    >
                      <span>{visitWebsite}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
