import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { SCHEDULE_DATA } from '../data/content';

export const ScheduleSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tot el dia' },
    { id: 'tallers', label: 'Tallers Matinals' },
    { id: 'xerrades', label: 'Xerrades' },
    { id: 'gastronomia', label: 'Gastronomia & Vermut' },
    { id: 'espectacle', label: 'Espectacles & Teatre' },
  ];

  const filteredSchedule = SCHEDULE_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const title = 'Horaris del Festival';
  const subtitle = 'Una jornada completa des de les 10.00 h del matí fins a les 20.00 h del vespre.';

  return (
    <section id="programa" className="py-20 sm:py-28 bg-primary text-white relative border-b border-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-white font-display">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-festbg/90 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-5 py-2.5 rounded text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-primary shadow-md shadow-black/10'
                  : 'bg-white/10 hover:bg-white/20 text-festbg border border-white/20 backdrop-blur-md'
              }`}
            >
              {cat.label}
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
              <div className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-accent shadow-xs group-hover:border-white group-hover:scale-125 transition" />

              <div className="space-y-2">
                {/* Time & Badges Row */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-white bg-white/15 px-3 py-1 rounded border border-white/25 shadow-2xs">
                    {item.time}
                  </span>

                  {item.badge && (
                    <span className="text-xs font-bold text-white bg-secondary px-3 py-1 rounded shadow-2xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Event Title */}
                <h3 className="text-xl sm:text-2xl font-extralight uppercase tracking-wider text-white group-hover:text-festbg transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-festbg/85 leading-relaxed max-w-2xl font-normal">
                  {item.description}
                </p>

                {/* Location pin in light brown */}
                <div className="flex items-center gap-1.5 text-xs text-festbg/75 font-medium pt-1">
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
