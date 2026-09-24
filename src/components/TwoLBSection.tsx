import React from "react";
import { TEAM_DATA } from "../data/content";
import { FESTIVAL_LOGOS, FESTIVAL_IMAGES } from "../assets/images";

export const TwoLBSection: React.FC = () => {
  const t = {
    subtitle: "Creació artística, producció técnica i compromís amb la comunitat de Tiana.",
    missionTitle: "La nostra visió",
    missionDesc:
      "A 2LB Produccions unim trajectòria professional en la indústria musical i escènica amb la passió per la pedagogia viva. Vivim i treballem a Tiana. Compartir i fer tribu amb altres families, reflexionar, gaudir, i fer poble i comunitat es la pulsió de on naix BUMFEST.",
    quote: '"Natura, poble, art, criança i comunitat. Construim en familia i al carrer"',
  };

  return (
    <section
      id="organitzacio"
      className="py-20 sm:py-28 bg-transparent text-festtext relative overflow-hidden border-b border-secondary/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 2LB Feature: Logo + text */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: 2LB Logo */}
          <div className="lg:col-span-4 flex justify-center items-start">
            <img
              src={FESTIVAL_LOGOS.twoLb}
              alt="2LB Produccions"
              className="w-full max-w-[200px] h-auto object-contain mb-8"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-sm sm:text-base text-festmuted leading-relaxed font-normal">
              {t.subtitle}
            </p>

            <h3 className="text-2xl sm:text-3xl font-extralight uppercase tracking-wider text-festtext">
              {t.missionTitle}
            </h3>

            <p className="text-sm sm:text-base text-festmuted leading-relaxed font-normal">
              {t.missionDesc}
            </p>

            <blockquote className="text-sm sm:text-base font-semibold text-primary italic pt-1">
              {t.quote}
            </blockquote>
          </div>
        </div>

        {/* Founders / Team Grid with Round Photos */}
        <div className="grid md:grid-cols-2 gap-8">
          {TEAM_DATA.map((member, idx) => (
            <div
              key={idx}
              className="rounded bg-festcard text-festtext border border-secondary/30 hover:border-secondary transition-all overflow-hidden shadow-lg hover:shadow-xl group flex flex-col sm:flex-row"
            >
              {/* Left Column: Photo */}
              <div className="sm:w-2/5 min-h-[190px] sm:min-h-full relative overflow-hidden shrink-0 bg-festbg">
                <img
                  src={idx === 0 ? FESTIVAL_IMAGES.piMcCarthy : FESTIVAL_IMAGES.oriolRoca}
                  alt=""
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Right Column: Details */}
              <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extralight uppercase tracking-wider text-festtext group-hover:text-primary transition leading-snug">
                      {member.name}
                    </h3>
                    <span className="text-xs font-bold text-secondary">{member.role}</span>
                    <p className="text-[11px] font-semibold text-festlabel mt-0.5">
                      2LB Produccions · Tiana
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-festmuted leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
