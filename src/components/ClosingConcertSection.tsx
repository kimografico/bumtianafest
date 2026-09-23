import React from 'react';
import { Navigation } from 'lucide-react';
import { FESTIVAL_IMAGES } from '../assets/images';
import { LINKS } from '../data/links';

export const ClosingConcertSection: React.FC = () => {
  const t = {
    title: 'Concert de Cloenda: Sedajazz Young Band',
    subtitle:
      'Música creativa, ritme i improvisació per acomiadar una jornada inoblidable en família.',
    description:
      'Sedajazz Young Band és una formació que sorgeix com a resultat de l\u2019aposta que el col·lectiu de músics valencià Sedajazz porta dècades fent per integrar la música creativa i la improvisació en l\u2019educació musical dels nens i nenes des de ben petits. Oferiran un concert amb un repertori del que podran gaudir tant adults com els més menuts.',
    highlights: [
      {
        title: 'Pedagogia Musical Viva',
        desc: 'Joves intèrprets formats en la improvisació, l\u2019escolta col·lectiva i el llenguatge jazzístic.',
      },
      {
        title: 'Repertori Intergeneracional',
        desc: 'Composicions i arranjaments pensats perquè vibrin tant els infants com els adults a la sala.',
      },
      {
        title: 'L\u2019Espai',
        desc: 'La Plaça de la Vila de Tiana es convertirà en un gran escenari a l\u2019aire lliure per a tota la família.',
      },
    ],
    openMap: 'Com arribar a la Plaça de la Vila',
  };

  return (
    <section id="cloenda" className="py-20 sm:py-28 bg-festbg border-b border-secondary/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-primary font-display">
            Concert de Cloenda:
            <br />
            <span className="text-xl sm:text-2xl text-secondary">Sedajazz Young Band</span>
          </h2>
          <p className="text-base sm:text-lg text-festmuted leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="rounded bg-festcard text-festtext border border-secondary/30 hover:border-secondary transition-all overflow-hidden shadow-lg hover:shadow-xl group flex flex-col sm:flex-row">
          {/* Left Column: Cloenda Photo */}
          <div className="sm:w-2/5 min-h-[190px] sm:min-h-full relative overflow-hidden shrink-0 bg-festbg">
            <img
              src={FESTIVAL_IMAGES.sedajazz}
              alt="Sedajazz Young Band en concert a BUMFEST"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="low"
              decoding="async"
            />
          </div>

          {/* Right Column: Details */}
          <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {/* Main Editorial Text */}
              <p className="text-sm sm:text-base text-festtext leading-relaxed font-normal">
                {t.description}
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {t.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded bg-white/70 border border-secondary/20 space-y-1.5"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-festmuted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={LINKS.maps.venue('Plaça de la Vila', 'Plaça de la Vila, Tiana')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded bg-primary hover:opacity-90 text-white text-xs sm:text-sm font-bold shadow-md shadow-[#0C478D]/20 active:scale-95 transition cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.openMap}</span>
              </a>
              <span className="px-4 py-3.5 rounded bg-secondary/15 text-secondary text-xs sm:text-sm font-bold border border-secondary/30">
                19:00h - 20:00h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
