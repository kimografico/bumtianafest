import React from 'react';
import { FESTIVAL_IMAGES } from '../assets/images';

export const ConceptSection: React.FC = () => {
  const title = 'Per què neix el BUMFEST?';
  const subtitle = 'Una jornada pensada per viure la cultura de tu a tu, sense presses i compartint temps de qualitat.';
  const cardNameTitle = 'Per què "BUM"?';
  const cardNameDesc = "Un esclat d'energia creativa i expressió artística que neix a Tiana. És el batec de la música, el ritme dels instruments i l'impuls per descobrir passions noves en família.";
  const cardTargetTitle = 'A qui va dirigit?';
  const cardTargetDesc = 'A totes les famílies amb infants de primera infància, avis, àvies i acompanyants de Tiana i pobles veïns que vulguin compartir temps de qualitat a través de la cultura.';
  const card1Title = 'Aprenentatge Compartit';
  const card1Desc = 'No és una guarderia on deixar els fills: és un espai on infants i adults experimenten, creen i aprenen alhora.';
  const card2Title = 'Tiana com a Gran Espai Comunitari';
  const card2Desc = 'Els carrers, places, teatres i ateneus de Tiana s’omplen de vida cultural per gaudir i enfortir els vincles comunitaris.';

  return (
    <section id="concepte" className="py-20 sm:py-28 bg-[#0C478D] text-white relative overflow-hidden">
      
      {/* Translucent background overlay image of Tiana */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-10 mix-blend-luminosity scale-105"
        style={{ backgroundImage: `url(${FESTIVAL_IMAGES.village})` }}
      />
      
      {/* Soft ambient background glow in corporate colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#88643B]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0C478D]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-white font-display">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#EFEEE0]/90 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* 4 Cards Grid with crisp readable background for original logo clarity */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Por que el nombre BUM */}
          <div className="p-7 sm:p-8 rounded bg-[#FAF9F3] text-[#181816] border border-[#88643B]/30 flex flex-col justify-start shadow-xl hover:border-[#88643B] transition group">
            <div className="space-y-2">
              <h3 className="text-xl font-extralight uppercase tracking-wider text-[#0C478D]">{cardNameTitle}</h3>
              <p className="text-xs sm:text-sm text-[#4A4A43] leading-relaxed font-normal">{cardNameDesc}</p>
            </div>
          </div>

          {/* Card 2: A quien va dirigido */}
          <div className="p-7 sm:p-8 rounded bg-[#FAF9F3] text-[#181816] border border-[#88643B]/30 flex flex-col justify-start shadow-xl hover:border-[#88643B] transition group">
            <div className="space-y-2">
              <h3 className="text-xl font-extralight uppercase tracking-wider text-[#0C478D]">{cardTargetTitle}</h3>
              <p className="text-xs sm:text-sm text-[#4A4A43] leading-relaxed font-normal">{cardTargetDesc}</p>
            </div>
          </div>

          {/* Card 3: Aprenentatge Compartit */}
          <div className="p-7 sm:p-8 rounded bg-[#FAF9F3] text-[#181816] border border-[#88643B]/30 flex flex-col justify-start shadow-xl hover:border-[#88643B] transition group">
            <div className="space-y-2">
              <h3 className="text-xl font-extralight uppercase tracking-wider text-[#0C478D]">{card1Title}</h3>
              <p className="text-xs sm:text-sm text-[#4A4A43] leading-relaxed font-normal">{card1Desc}</p>
            </div>
          </div>

          {/* Card 4: Tiana com a gran espai comunitari */}
          <div className="p-7 sm:p-8 rounded bg-[#FAF9F3] text-[#181816] border border-[#88643B]/30 flex flex-col justify-start shadow-xl hover:border-[#88643B] transition group">
            <div className="space-y-2">
              <h3 className="text-xl font-extralight uppercase tracking-wider text-[#0C478D]">{card2Title}</h3>
              <p className="text-xs sm:text-sm text-[#4A4A43] leading-relaxed font-normal">{card2Desc}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
