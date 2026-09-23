import React from "react";
import { TEAM_DATA } from "../data/content";
import { FESTIVAL_IMAGES } from "../assets/images";

export const TwoLBSection: React.FC = () => {
  const t = {
    title: "2LB Produccions",
    subtitle: "Creació artística, producció técnica i compromís amb la comunitat de Tiana.",
    missionTitle: "La nostra visió",
    missionDesc:
      "A 2LB Produccions unim trajectòria professional en la indústria musical i escènica amb la passió per la pedagogia viva. Vivim i treballem a Tiana. Compartir i fer tribu amb altres families, reflexionar, gaudir, i fer poble i comunitat es la pulsió de on naix BUMFEST.",
    quote: '"Natura, poble, art, criança i comunitat. Construim en familia i al carrer"',
  };

  return (
    <section
      id="organitzacio"
      className="py-20 sm:py-28 bg-transparent text-[#181816] relative overflow-hidden border-b border-[#88643B]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* 2LB Feature: PARDALS image + text */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left: PARDALS image */}
          <div className="lg:col-span-4">
            <img
              src={FESTIVAL_IMAGES.pardals}
              alt="Pardals"
              className="w-full h-auto object-cover rounded"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-[#0C478D] font-display">
                {t.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4A4A43] leading-relaxed font-normal">
                {t.subtitle}
              </p>
            </div>

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
                      alt=""
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

                <p className="text-sm text-[#4A4A43] leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
