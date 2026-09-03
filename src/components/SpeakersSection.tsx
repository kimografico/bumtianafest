import React from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { Language, SPEAKERS_DATA } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';

interface SpeakersSectionProps {
  lang: Language;
  onSelectSpeaker: (speakerId: string) => void;
}

export const SpeakersSection: React.FC<SpeakersSectionProps> = ({
  lang,
  onSelectSpeaker,
}) => {
  const t = {
    ca: {
      title: 'Cicle de Ponències i Família',
      subtitle: 'Espais de reflexió, benestar i acompanyament en les diferents etapes del creixement.',
      viewDetails: 'Veure detalls de la xerrada',
    },
    es: {
      title: 'Ciclo de Ponencias y Familia',
      subtitle: 'Espacios de reflexión, bienestar y acompañamiento en las distintas etapas del crecimiento.',
      viewDetails: 'Ver detalles de la charla',
    },
  }[lang];

  const getSpeakerImage = (id: string) => {
    switch (id) {
      case 'armando-bastida':
        return FESTIVAL_IMAGES.armandoBastida;
      case 'laia-ferrer':
        return FESTIVAL_IMAGES.laiaFerrer;
      default:
        return FESTIVAL_IMAGES.laiaFerrer;
    }
  };

  return (
    <section id="xerrades" className="py-20 sm:py-28 bg-transparent border-b border-slate-200/60 relative">
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

        {/* Speakers Grid with Round Portrait Frame (2 Speakers) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {SPEAKERS_DATA.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => onSelectSpeaker(speaker.id)}
              className="p-8 rounded-[36px] bg-white/60 backdrop-blur-xl border border-white hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg group"
            >
              <div className="space-y-5">
                
                {/* Speaker profile header with round photo frame */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-md shrink-0 bg-slate-100 group-hover:border-blue-600 group-hover:scale-105 transition">
                    <img
                      src={getSpeakerImage(speaker.id)}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-blue-700 transition">
                      {speaker.name}
                    </h3>
                    <p className="text-xs font-bold text-blue-700">
                      {speaker.role[lang]}
                    </p>
                  </div>
                </div>

                {/* Talk title & description */}
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-slate-900 leading-snug">
                    {speaker.talkTitle[lang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {speaker.talkDescription[lang]}
                  </p>
                </div>

                {/* Schedule & Location */}
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-200/60 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{speaker.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">{speaker.location}</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200/60">
                <button className="w-full py-2.5 px-4 rounded-2xl bg-white/80 group-hover:bg-blue-900 text-slate-800 group-hover:text-white border border-slate-200/80 group-hover:border-transparent text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs group-hover:shadow-md cursor-pointer">
                  <span>{t.viewDetails}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
