import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Language, SCHEDULE_DATA } from '../data/content';

interface ScheduleSectionProps {
  lang: Language;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { ca: 'Tot el dia', es: 'Todo el día' } },
    { id: 'tallers', label: { ca: 'Tallers Matinals', es: 'Talleres Mañana' } },
    { id: 'xerrades', label: { ca: 'Xerrades', es: 'Charlas' } },
    { id: 'gastronomia', label: { ca: 'Gastronomia & Vermut', es: 'Gastronomía & Vermut' } },
    { id: 'espectacle', label: { ca: 'Espectacles & Teatre', es: 'Espectáculos & Teatro' } },
  ];

  const filteredSchedule = SCHEDULE_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const t = {
    ca: {
      title: 'Horaris del Festival',
      subtitle: 'Una jornada completa des de les 10:00h del matí fins a les 20:00h del vespre.',
    },
    es: {
      title: 'Horarios del Festival',
      subtitle: 'Una jornada completa desde las 10:00h de la mañana hasta las 20:00h de la tarde.',
    },
  }[lang];

  return (
    <section id="programa" className="py-20 sm:py-28 bg-[#0C478D] text-white relative border-b border-[#88643B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#EFEEE0]/90 leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-[#0C478D] shadow-md shadow-black/10'
                  : 'bg-white/10 hover:bg-white/20 text-[#EFEEE0] border border-white/20 backdrop-blur-md'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Clean Vertical Timeline with exact centered dots */}
        <div className="relative max-w-4xl pl-8 sm:pl-10 space-y-10">
          
          {/* Continuous vertical line in light brown */}
          <div className="absolute left-[6px] sm:left-[7px] top-3 bottom-3 w-0.5 bg-accent" />

          {filteredSchedule.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              {/* Timeline dot positioned on the line */}
              <div className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-[#0C478D] border-4 border-accent shadow-xs group-hover:border-white group-hover:scale-125 transition" />

              <div className="space-y-2">
                {/* Time & Badges Row */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-white bg-white/15 px-3 py-1 rounded-full border border-white/25 shadow-2xs">
                    {item.time}
                  </span>

                  {item.badge && (
                    <span className="text-xs font-bold text-white bg-[#88643B] px-3 py-1 rounded-full shadow-2xs">
                      {item.badge[lang]}
                    </span>
                  )}
                </div>

                {/* Event Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#EFEEE0] transition">
                  {item.title[lang]}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#EFEEE0]/85 leading-relaxed max-w-2xl font-normal">
                  {item.description[lang]}
                </p>

                {/* Location pin in light brown */}
                <div className="flex items-center gap-1.5 text-xs text-[#EFEEE0]/75 font-medium pt-1">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
