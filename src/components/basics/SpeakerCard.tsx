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
    <div
      onClick={onClick}
      className={`p-8 rounded-[36px] bg-white/70 backdrop-blur-xl border border-white hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg group ${className}`}
    >
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-md shrink-0 bg-slate-100 group-hover:border-blue-600 group-hover:scale-105 transition">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-blue-700 transition">
              {name}
            </h3>
            <p className="text-xs font-bold text-blue-700">{role}</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-base text-slate-900 leading-snug">
            {topicTitle}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
            {topicDescription}
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2 border-t border-slate-200/60 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center text-xs font-bold text-blue-900 group-hover:text-blue-600 transition gap-1.5">
        <span>{ctaText}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
