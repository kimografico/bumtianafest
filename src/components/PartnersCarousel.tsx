import React from 'react';
import { FESTIVAL_LOGOS } from '../assets/images';

export const PartnersCarousel: React.FC = () => {
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

  const title = 'Amb el suport i la col·laboració de:';

  return (
    <section className="py-12 bg-[#0C478D] border-y border-[#88643B]/30 overflow-hidden relative">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center sm:text-left">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EFEEE0]/90">
          {title}
        </h2>
      </div>

      {/* Simplified Infinite Logo Stream */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left gradient fade overlay */}
        <div 
          aria-hidden="true" 
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0C478D] to-transparent z-10 pointer-events-none" 
        />

        <div className="flex animate-marquee gap-8 sm:gap-12 md:gap-16 items-center shrink-0 py-2">
          {repeatedPartners.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center shrink-0 w-28 sm:w-36 h-14 sm:h-16 px-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xs transition-colors duration-200"
            >
              <img
                src={item.logo}
                alt={`Logotip col·laborador ${item.name}`}
                width={120}
                height={50}
                className="max-h-9 sm:max-h-11 max-w-[90%] w-auto object-contain opacity-85 hover:opacity-100 transition-opacity duration-200 brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Right gradient fade overlay */}
        <div 
          aria-hidden="true" 
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0C478D] to-transparent z-10 pointer-events-none" 
        />
      </div>
    </section>
  );
};
