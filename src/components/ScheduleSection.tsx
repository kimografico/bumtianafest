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
    { id: 'espectacle', label: { ca: 'Espectacles & Concert', es: 'Espectáculos & Concierto' } },
  ];

  const filteredSchedule = SCHEDULE_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const t = {
    ca: {
      title: 'Horaris del Festival',
      subtitle: 'Una jornada completa des de les 09:30h del matí fins a les 19:00h del vespre.',
    },
    es: {
      title: 'Horarios del Festival',
      subtitle: 'Una jornada completa desde las 09:30h de la mañana hasta las 19:00h de la tarde.',
    },
  }[lang];

  return (
    <section id="programa" className="py-20 sm:py-28 bg-transparent border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-10 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                  : 'bg-white/70 hover:bg-white text-slate-700 border border-white'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Clean Vertical Timeline with exact centered dots */}
        <div className="relative max-w-4xl pl-8 sm:pl-10 space-y-10">
          
          {/* Continuous vertical line moved 1px to the left */}
          <div className="absolute left-[6px] sm:left-[7px] top-3 bottom-3 w-0.5 bg-blue-200" />

          {filteredSchedule.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              {/* Timeline dot positioned on the line */}
              <div className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-xs group-hover:border-blue-800 group-hover:scale-125 transition" />

              <div className="space-y-2">
                {/* Time & Badges Row */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-2xs">
                    {item.time}
                  </span>

                  {item.badge && (
                    <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 shadow-2xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Event Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-700 transition">
                  {item.title[lang]}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
                  {item.description[lang]}
                </p>

                {/* Location pin */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pt-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
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
