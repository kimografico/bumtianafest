import React from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export interface SpeakerCardProps {
  name: string;
  role: string;
  topicTitle: string;
  topicDescription: string;
  time: string;
  location: string;
  image: string;
  ctaText?: string;
  onClick?: () => void;
  className?: string;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  topicTitle,
  topicDescription,
  time,
  location,
  image,
  ctaText = 'Ver detalles de la charla',
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-8 rounded-[36px] bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 hover:border-[#88643B] transition-all cursor-pointer flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg group ${className}`}
    >
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#88643B]/40 shadow-md shrink-0 bg-[#EFEEE0] group-hover:border-[#0C478D] group-hover:scale-105 transition">
            <img
              src={image}
              alt={name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h3 className="font-extrabold text-xl text-[#181816] group-hover:text-[#0C478D] transition">
              {name}
            </h3>
            <p className="text-xs font-bold text-[#88643B]">{role}</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-base text-[#181816] leading-snug">
            {topicTitle}
          </h4>
          <p className="text-xs sm:text-sm text-[#4A4A43] line-clamp-3 leading-relaxed font-normal">
            {topicDescription}
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2 border-t border-[#88643B]/20 text-xs text-[#66665D] font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#88643B] shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#88643B] shrink-0" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center text-xs font-bold text-[#0C478D] group-hover:text-[#88643B] transition gap-1.5">
        <span>{ctaText}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
};
