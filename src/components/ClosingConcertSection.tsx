import React from 'react';
import { Music, Clock, MapPin, Sparkles, Navigation, Users, CheckCircle2 } from 'lucide-react';
import { Language } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';

interface ClosingConcertSectionProps {
  lang: Language;
}

export const ClosingConcertSection: React.FC<ClosingConcertSectionProps> = ({ lang }) => {
  const t = {
    ca: {
      tag: 'Gran Cloenda del Festival',
      title: 'Concert de Cloenda: Sedajazz Young Band',
      subtitle:
        'El colofó d’or del BUMFEST 2026: música creativa, ritme i improvisació per acomiadar una jornada inoblidable en família.',
      timeLabel: '19:00h - 20:00h',
      locationLabel: 'Sala Albéniz (Carrer de Sant Domènec, 1, Tiana)',
      accessLabel: 'Accés inclòs amb la polsera oficial',
      description:
        'Sedajazz Young Band és una formació que sorgeix com a resultat de l’aposta que el col·lectiu de músics valencià Sedajazz porta dècades fent per integrar la música creativa i la improvisació en l’educació musical dels nens i nenes des de ben petits. Oferiran un concert amb un repertori del que podran gaudir tant adults com els més menuts.',
      highlights: [
        {
          title: 'Pedagogia Musical Viva',
          desc: 'Joves intèrprets formats en la improvisació, l’escolta col·lectiva i el llenguatge jazzístic.',
        },
        {
          title: 'Repertori Intergeneracional',
          desc: 'Composicions i arranjaments pensats perquè vibrin tant els infants com els adults a la sala.',
        },
        {
          title: 'Escenari Emblemàtic',
          desc: 'La Sala Albéniz de Tiana ofereix una acústica càlida i una comoditat ideal per a tota la família.',
        },
      ],
      openMap: 'Com arribar a la Sala Albéniz',
      viewSchedule: 'Veure horari al programa',
      badgeBand: 'Sedajazz Young Band en directe',
    },
    es: {
      tag: 'Gran Clausura del Festival',
      title: 'Concierto de Clausura: Sedajazz Young Band',
      subtitle:
        'El broche de oro de BUMFEST 2026: música creativa, ritmo e improvisación para despedir una jornada inolvidable en familia.',
      timeLabel: '19:00h - 20:00h',
      locationLabel: 'Sala Albéniz (Carrer de Sant Domènec, 1, Tiana)',
      accessLabel: 'Acceso incluido con la pulsera oficial',
      description:
        'Sedajazz Young Band es una formación que surge como resultado de la apuesta que el colectivo de músicos valenciano Sedajazz lleva décadas haciendo para integrar la música creativa y la improvisación en la educación musical de niños y niñas desde muy pequeños. Ofrecerán un concierto con un repertorio del que podrán disfrutar tanto adultos como los más pequeños.',
      highlights: [
        {
          title: 'Pedagogía Musical Viva',
          desc: 'Jóvenes intérpretes formados en la improvisación, la escucha colectiva y el lenguaje jazzístico.',
        },
        {
          title: 'Repertorio Intergeneracional',
          desc: 'Composiciones y arreglos pensados para que vibren tanto los peques como los adultos en la sala.',
        },
        {
          title: 'Escenario Emblemático',
          desc: 'La Sala Albéniz de Tiana ofrece una acústica cálida y un confort ideal para toda la familia.',
        },
      ],
      openMap: 'Cómo llegar a la Sala Albéniz',
      viewSchedule: 'Ver horario en el programa',
      badgeBand: 'Sedajazz Young Band en directo',
    },
  }[lang];

  return (
    <section id="cloenda" className="py-20 sm:py-28 bg-[#EFEEE0] border-b border-[#88643B]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C478D]/10 text-[#0C478D] border border-[#0C478D]/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#88643B]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C478D] tracking-tight font-display">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A43] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#FAF9F3] rounded-3xl border border-[#88643B]/25 p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-[#EFEEE0] border border-[#88643B]/20 group">
                <img
                  src={FESTIVAL_IMAGES.music}
                  alt="Sedajazz Young Band en concert a BUMFEST"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C478D]/90 backdrop-blur-xs text-xs font-bold shadow-xs">
                    <Music className="w-3.5 h-3.5 text-[#EFEEE0]" />
                    {t.badgeBand}
                  </span>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges / Logistics row */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0C478D]/10 text-[#0C478D] border border-[#0C478D]/15">
                  <Clock className="w-4 h-4 text-[#0C478D] shrink-0" />
                  <span>{t.timeLabel}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#88643B]/10 text-[#88643B] border border-[#88643B]/20">
                  <MapPin className="w-4 h-4 text-[#88643B] shrink-0" />
                  <span>{t.locationLabel}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#EFEEE0] text-[#181816] border border-[#88643B]/25">
                  <CheckCircle2 className="w-4 h-4 text-[#0C478D] shrink-0" />
                  <span>{t.accessLabel}</span>
                </div>
              </div>

              {/* Main Editorial Text */}
              <p className="text-base sm:text-lg text-[#181816] leading-relaxed font-normal">
                {t.description}
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {t.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/70 border border-[#88643B]/20 space-y-1.5"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0C478D]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0C478D] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#4A4A43] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sala+Albéniz+Tiana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-[#0C478D] hover:opacity-90 text-white text-xs sm:text-sm font-bold shadow-md shadow-[#0C478D]/20 active:scale-95 transition cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t.openMap}</span>
                </a>
                <a
                  href="#programa"
                  className="px-6 py-3.5 rounded-2xl bg-white hover:bg-[#88643B]/10 text-[#181816] border border-[#88643B]/30 text-xs sm:text-sm font-bold active:scale-95 transition cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4 text-[#88643B]" />
                  <span>{t.viewSchedule}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
