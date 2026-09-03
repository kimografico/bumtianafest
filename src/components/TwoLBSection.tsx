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
      missionDesc: 'A 2LB Produccions unim trajectòria professional en la indústria musical i escènica amb la passió per la pedagogia viva. Vivim i treballem a Tiana, i creem el BUM Fest com un espai on les famílies comparteixen cultura de primer nivell, des de la proximitat i sense filtres.',
      experiencePill: 'Estudi de gravació i producció a Tiana (Maresme)',
      quote: '“La cultura i la creativitat es construeixen en família i al carrer.”',
    },
    es: {
      title: '2LB Produccions',
      subtitle: 'Creación artística, producción musical y compromiso con la comunidad de Tiana.',
      missionTitle: 'Nuestra visión',
      missionDesc: 'En 2LB Produccions unimos trayectoria profesional en la industria musical y escénica con la pasión por la pedagogía viva. Vivimos y trabajamos en Tiana, creando BUM Fest como un espacio donde las familias comparten cultura de primer nivel desde la cercanía.',
      experiencePill: 'Estudio de grabación y producción en Tiana (Maresme)',
      quote: '“La cultura y la creatividad se construyen en familia y en la calle.”',
    },
  }[lang];

  return (
    <section id="organitzacio" className="py-20 sm:py-28 bg-transparent border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Highlight Vision Card with Interspersed Image */}
        <div className="rounded-[36px] bg-white/60 backdrop-blur-xl border border-white shadow-xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-12 gap-0 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden">
              <img
                src={FESTIVAL_IMAGES.twoLbVision}
                alt="2LB Produccions a Tiana"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 lg:from-transparent to-transparent" />
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.missionTitle}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {t.missionDesc}
              </p>

              <blockquote className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-sm font-semibold text-blue-950 italic">
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
              className="p-8 sm:p-10 rounded-[36px] bg-white/60 backdrop-blur-xl border border-white hover:border-blue-200 transition-all space-y-6 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-5">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-blue-400/40 shadow-md shrink-0 bg-slate-100 ring-2 ring-blue-500/20">
                    <img
                      src={idx === 0 ? FESTIVAL_IMAGES.piMcCarthy : FESTIVAL_IMAGES.oriolRoca}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-2xl text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                      {member.role[lang]}
                    </p>
                    <span className="text-[11px] font-semibold text-slate-500">
                      2LB Produccions · Tiana
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
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
