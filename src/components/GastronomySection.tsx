import React from 'react';
import { Utensils, Music, MapPin, ExternalLink, Ticket, CheckCircle2 } from 'lucide-react';
import { Language, RESTAURANTS_DATA } from '../data/content';
import { FESTIVAL_IMAGES, FESTIVAL_LOGOS } from '../assets/images';

interface GastronomySectionProps {
  lang: Language;
}

export const GastronomySection: React.FC<GastronomySectionProps> = ({ lang }) => {
  const t = {
    ca: {
      title: 'Dinar Familiar & DJ',
      subtitle: 'De 14:00h a 16:00h, el dinar és el moment central de convivència i trobada familiar als carrers, places i terrasses de Tiana.',
      ticketsTitle: 'Com funciona el sistema de tiquets i menús?',
      ticketsDesc: 'El festival promou el comerç de proximitat coordinat amb els establiments del poble perquè tothom mengi còmodament sense cues:',
      ticketPoints: [
        'Tiquets de Menú Familiar: Disponibles anticipadament o als punts d’informació del festival amb preus populars per a infants i adults.',
        'Opcions per a tothom: Menús tradicionals, fideuà, tapes de la terra, pizzes artesanes i alternatives vegetarianes / al·lèrgies.',
        'DJ Vermut com a acompanyament: A la Plaça de la Vila, Xavi Vinyasa posarà música i ambient distès per acompanyar el vermut i la sobretaula en família.',
      ],
      restaurantsTitle: 'Establiments Col·laboradors de Tiana',
      visitWebsite: 'Veure lloc web / menú',
    },
    es: {
      title: 'Comida Familiar & DJ',
      subtitle: 'De 14:00h a 16:00h, la comida es el momento central de convivencia y encuentro familiar en las calles, plazas y terrazas de Tiana.',
      ticketsTitle: '¿Cómo funciona el sistema de tickets y menús?',
      ticketsDesc: 'El festival promueve el comercio de proximidad coordinado con los establecimientos del pueblo para comer cómodamente y sin colas:',
      ticketPoints: [
        'Tickets de Menú Familiar: Disponibles anticipadamente o en los puntos de información del festival con precios populares para peques y adultos.',
        'Opciones para todos: Menús tradicionales, fideuá, tapas de proximidad, pizzas artesanas y alternativas vegetarianas / alergias.',
        'DJ Vermut como acompañamiento: En la Plaça de la Vila, Xavi Vinyasa pondrá música y ambiente distendido para acompañar el vermut y la sobremesa en familia.',
      ],
      restaurantsTitle: 'Establecimientos Colaboradores de Tiana',
      visitWebsite: 'Ver sitio web / menú',
    },
  }[lang];

  const getRestaurantImage = (id?: string) => {
    switch (id) {
      case 'casal':
        return FESTIVAL_IMAGES.restoCasal;
      case 'barbar':
        return FESTIVAL_IMAGES.restoBarbar;
      case 'casino':
        return FESTIVAL_IMAGES.restoCasino;
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
      case 'casino':
        return FESTIVAL_LOGOS.casino;
      case 'tiriti':
        return FESTIVAL_LOGOS.tirati;
      default:
        return null;
    }
  };

  return (
    <section id="gastronomia" className="py-20 sm:py-28 bg-blue-950 text-white relative overflow-hidden border-b border-blue-900/60">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Informative Card: How tickets work + DJ accompaniment */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-blue-900/40 backdrop-blur-xl border border-blue-800/80 shadow-2xl mb-14 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-blue-800/70">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-800/60 border border-blue-700/80 text-teal-300 flex items-center justify-center shrink-0 shadow-inner">
                <Ticket className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {t.ticketsTitle}
                </h3>
                <p className="text-xs sm:text-sm text-blue-200/80 font-normal">
                  {t.ticketsDesc}
                </p>
              </div>
            </div>

            {/* Ambient Music Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-blue-950/80 border border-blue-700/80 text-white text-xs font-bold shrink-0 shadow-inner">
              <Music className="w-4 h-4 text-teal-300 shrink-0" />
              <span>DJ Vermut amb Xavi Vinyasa (14:00h - 16:00h)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 pt-2">
            {t.ticketPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-blue-950/60 border border-blue-800/60">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants Grid with the same horizontal card format as Workshops */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Utensils className="w-5 h-5 text-teal-400" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {t.restaurantsTitle}
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {RESTAURANTS_DATA.map((resto, idx) => (
              <div
                key={idx}
                className="rounded-[36px] bg-blue-900/40 backdrop-blur-xl border border-blue-800/80 hover:border-teal-500/50 transition-all overflow-hidden shadow-lg hover:shadow-xl group flex flex-col sm:flex-row"
              >
                {/* Left Column: Restaurant Photo */}
                <div className="sm:w-2/5 min-h-[190px] sm:min-h-full relative overflow-hidden shrink-0">
                  <img
                    src={getRestaurantImage(resto.id)}
                    alt={resto.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Right Column: Restaurant Details */}
                <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-teal-300 transition leading-snug">
                          {resto.name}
                        </h4>
                        <span className="text-xs font-bold text-teal-400">
                          {resto.type}
                        </span>
                      </div>
                      {getRestaurantLogo(resto.id) && (
                        <div className="w-10 h-10 rounded-xl bg-blue-950/90 border border-blue-700/60 p-1.5 shrink-0 flex items-center justify-center shadow-inner">
                          <img
                            src={getRestaurantLogo(resto.id)!}
                            alt={resto.name}
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-blue-100/85 leading-relaxed font-normal">
                      {resto.specialOffer[lang]}
                    </p>

                    <div className="pt-2 border-t border-blue-800/60 flex items-center gap-1.5 text-xs text-blue-200/70">
                      <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span className="truncate">{resto.address}, Tiana</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-1">
                    <a
                      href={resto.websiteUrl || `https://www.google.com/search?q=${encodeURIComponent(`${resto.name} Tiana`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-2xl bg-blue-950/80 hover:bg-teal-500 hover:text-blue-950 text-white border border-blue-700/80 hover:border-transparent text-xs font-bold transition flex items-center justify-center gap-2 shadow-inner active:scale-95 cursor-pointer"
                    >
                      <span>{t.visitWebsite}</span>
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
