import React from 'react';
import { TEAM_DATA } from '../data/content';
import { FESTIVAL_IMAGES, FESTIVAL_LOGOS } from '../assets/images';

export const TwoLBSection: React.FC = () => {
  const t = {
    title: 'Qui som?',
    subtitle: 'La visió darrera del BUMFEST: passió per la música, pedagogia infantil i compromís comunitari amb Tiana.',
    missionTitle: '2LB Produccions',
    missionDesc: '2LB és la productora artística i tècnica de Tiana que impulsa el BUMFEST juntament amb l’Ajuntament de Tiana. Neix de la passió compartida per crear espais on infants i adults puguin descobrir la música, la dansa i el teatre des d’un enfocament lúdic, respectuós i d’alta qualitat artística.',
    quote: '«Creiem que les millors experiències culturals de la infància són aquelles que es comparteixen en família i deixen una empremta que dura tota la vida.»',
  };

  return (
    <section id="organitzacio" className="py-20 sm:py-28 bg-transparent text-[#181816] relative overflow-hidden border-b border-[#88643B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-[#0C478D] font-display">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A43] leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 2LB Feature Box with 2LB.png */}
        <div className="rounded bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 shadow-lg overflow-hidden mb-12">
          <div className="grid lg:grid-cols-12 items-center">
            
            {/* Left Brand Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 bg-white/70 border-b lg:border-b-0 lg:border-r border-[#88643B]/20 flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-4 rounded-xl bg-white shadow-2xs border border-[#88643B]/20 w-full max-w-xs flex items-center justify-center">
                <img
                  src={FESTIVAL_LOGOS.twoLb}
                  alt="2LB Produccions"
                  width={280}
                  height={120}
                  className="w-48 sm:w-56 h-auto object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-xs font-semibold text-[#88643B] uppercase tracking-wider">
                Producció Artística & Direcció Tècnica
              </p>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extralight uppercase tracking-wider text-[#181816]">
                {t.missionTitle}
              </h3>

              <p className="text-sm sm:text-base text-[#4A4A43] leading-relaxed font-normal">
                {t.missionDesc}
              </p>

              <blockquote className="text-sm sm:text-base font-semibold text-[#0C478D] italic pt-1">
                {t.quote}
              </blockquote>
            </div>

          </div>
        </div>

        {/* Founders / Team Grid with Round Photos */}
        <div className="grid md:grid-cols-2 gap-8">
          {TEAM_DATA.map((member, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 hover:border-[#88643B] transition-all space-y-6 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-5">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#88643B]/50 shadow-md shrink-0 bg-[#EFEEE0] ring-2 ring-[#0C478D]/20">
                    <img
                      src={idx === 0 ? FESTIVAL_IMAGES.piMcCarthy : FESTIVAL_IMAGES.oriolRoca}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h3 className="font-extralight text-2xl uppercase tracking-wider text-[#181816]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#88643B] uppercase tracking-wider">
                      {member.role}
                    </p>
                    <span className="text-[11px] font-semibold text-[#66665D]">
                      2LB Produccions · Tiana
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#4A4A43] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
