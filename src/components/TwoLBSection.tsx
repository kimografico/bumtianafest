import React from 'react';
import { Language, TEAM_DATA } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';

interface TwoLBSectionProps {
  lang: Language;
}

export const TwoLBSection: React.FC<TwoLBSectionProps> = ({ lang }) => {
  const t = {
    ca: {
      title: '2LB Produccions',
      subtitle: 'Creació artística, producció musical i compromís amb la comunitat de Tiana.',
      missionTitle: 'La nostra visió',
      missionDesc: 'A 2LB Produccions unim trajectòria professional en la indústria musical i escènica amb la passió per la pedagogia viva. Vivim i treballem a Tiana, i creem el BUM Tiana FEST com un espai on les famílies comparteixen cultura de primer nivell, des de la proximitat i sense filtres.',
      experiencePill: 'Estudi de gravació i producció a Tiana (Maresme)',
      quote: '“La cultura i la creativitat es construeixen en família i al carrer.”',
    },
    es: {
      title: '2LB Produccions',
      subtitle: 'Creación artística, producción musical y compromiso con la comunidad de Tiana.',
      missionTitle: 'Nuestra visión',
      missionDesc: 'En 2LB Produccions unimos trayectoria profesional en la industria musical y escénica con la pasión por la pedagogía viva. Vivimos y trabajamos en Tiana, creando BUM Tiana FEST como un espacio donde las familias comparten cultura de primer nivel desde la cercanía.',
      experiencePill: 'Estudio de grabación y producción en Tiana (Maresme)',
      quote: '“La cultura y la creatividad se construyen en familia y en la calle.”',
    },
  }[lang];

  return (
    <section id="organitzacio" className="py-20 sm:py-28 bg-transparent border-b border-[#88643B]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C478D] tracking-tight font-display">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A43] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Highlight Vision Card with Interspersed Image */}
        <div className="rounded-[36px] bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 shadow-xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-12 gap-0 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden">
              <img
                src={FESTIVAL_IMAGES.twoLbVision}
                alt="2LB Produccions a Tiana"
                width={540}
                height={360}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 lg:from-transparent to-transparent" />
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#181816]">
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
              className="p-8 sm:p-10 rounded-[36px] bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 hover:border-[#88643B] transition-all space-y-6 shadow-md flex flex-col justify-between"
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
                    <h3 className="font-extrabold text-2xl text-[#181816]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#88643B] uppercase tracking-wider">
                      {member.role[lang]}
                    </p>
                    <span className="text-[11px] font-semibold text-[#66665D]">
                      2LB Produccions · Tiana
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#4A4A43] leading-relaxed">
                  {member.bio[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
