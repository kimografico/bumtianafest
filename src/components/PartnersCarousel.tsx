import React from 'react';
import { Language } from '../data/content';
import { FESTIVAL_LOGOS } from '../assets/images';

interface PartnersCarouselProps {
  lang: Language;
}

export const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ lang }) => {
  const partners = [
    {
      name: 'ACIST Tiana',
      logo: FESTIVAL_LOGOS.acist,
    },
    {
      name: 'El Casal de Tiana',
      logo: FESTIVAL_LOGOS.casal,
    },
    {
      name: 'Bàrbar Tiana',
      logo: FESTIVAL_LOGOS.barbar,
    },
    {
      name: 'El Casino de Tiana',
      logo: FESTIVAL_LOGOS.casino,
    },
    {
      name: 'Espai Ecològic',
      logo: FESTIVAL_LOGOS.espaiEco,
    },
    {
      name: 'Floristeria Verd És Bo',
      logo: FESTIVAL_LOGOS.verdEsBo,
    },
    {
      name: 'Tiriti Pizzeria',
      logo: FESTIVAL_LOGOS.tirati,
    },
    {
      name: "L'Avi Mingo",
      logo: FESTIVAL_LOGOS.aviMingo,
    },
  ];

  // Duplicate list to create a seamless infinite marquee effect
  const repeatedPartners = [...partners, ...partners, ...partners];

  const title = lang === 'ca' ? 'Amb el suport i la col·laboració de:' : 'Con el apoyo y la colaboración de:';

  return (
    <section className="py-12 bg-[#0C478D] border-y border-[#B0814D]/30 overflow-hidden relative">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#B0814D] shrink-0" />
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EFEEE0]/90">
            {title}
          </h3>
        </div>
      </div>

      {/* Simplified Infinite Logo Stream */}
      <div className="relative w-full overflow-hidden py-6 sm:py-8">
        
        {/* Soft edge gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#0C478D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#0C478D] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee items-center gap-16 sm:gap-24 md:gap-28 hover:[animation-play-state:paused]">
          {repeatedPartners.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center shrink-0 group transition-transform duration-300 hover:scale-110"
              title={item.name}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-14 sm:h-20 md:h-24 w-auto max-w-[200px] sm:max-w-[280px] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm brightness-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 36s linear infinite;
        }
      `}</style>
    </section>
  );
};
