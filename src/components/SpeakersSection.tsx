import React from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { Language, SPEAKERS_DATA } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';
import { LINKS } from '../data/links';

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
      title: 'Xerrades',
      subtitle: 'Espais de reflexió, benestar i acompanyament en les diferents etapes del creixement.',
      viewDetails: 'Veure detalls de la xerrada',
      reservar: 'Reservar plaça',
    },
    es: {
      title: 'Charlas',
      subtitle: 'Espacios de reflexión, bienestar y acompañamiento en las distintas etapas del crecimiento.',
      viewDetails: 'Ver detalles de la charla',
      reservar: 'Reservar plaza',
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
    <section id="xerrades" className="py-20 sm:py-28 bg-transparent border-b border-[#88643B]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header without tag */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-[#0C478D] font-display">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A43] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Speakers Grid with Round Portrait Frame (2 Speakers) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {SPEAKERS_DATA.map((speaker) => (
            <button
              key={speaker.id}
              onClick={() => onSelectSpeaker(speaker.id)}
              className="w-full text-left p-8 rounded bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 hover:border-[#88643B] transition-all cursor-pointer flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg group"
            >
              <div className="space-y-5">
                
                {/* Speaker profile header with round photo frame */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#88643B]/40 shadow-md shrink-0 bg-[#EFEEE0] group-hover:border-[#0C478D] group-hover:scale-105 transition">
                    <img
                      src={getSpeakerImage(speaker.id)}
                      alt={speaker.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      fetchPriority="low"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h3 className="font-extralight text-3xl uppercase tracking-wider text-[#181816] group-hover:text-[#0C478D] transition">
                      {speaker.name}
                    </h3>
                    <p className="text-xs font-bold text-[#88643B]">
                      {speaker.role[lang]}
                    </p>
                  </div>
                </div>

                {/* Talk title & description */}
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-[#181816] leading-snug">
                    {speaker.talkTitle[lang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A4A43] line-clamp-3 leading-relaxed font-normal">
                    {speaker.talkDescription[lang]}
                  </p>
                </div>

                {/* Schedule & Location */}
                <div className="flex flex-col gap-2 pt-2 border-t border-[#88643B]/20 text-xs text-[#66665D] font-medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#88643B] shrink-0" />
                    <span>{speaker.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#88643B] shrink-0" />
                    <span className="truncate">{speaker.location}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#88643B]/20 flex flex-col gap-2">
                <span className="w-full py-2.5 px-4 rounded bg-white/80 group-hover:bg-[#0C478D] text-[#181816] group-hover:text-white border border-[#88643B]/30 group-hover:border-transparent text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs group-hover:shadow-md">
                  <span>{t.viewDetails}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <a
                  href={LINKS.forms.reservarPlaca}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full py-2.5 px-4 rounded bg-[#88643B] hover:opacity-90 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-2xs active:scale-95"
                >
                  {t.reservar}
                </a>
              </div>

            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
