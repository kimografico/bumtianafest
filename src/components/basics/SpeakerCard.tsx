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
  ctaText = 'Veure detalls de la xerrada',
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-8 rounded bg-festcard/90 backdrop-blur-xl border border-secondary/30 hover:border-secondary transition-all cursor-pointer flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg group ${className}`}
    >
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary/40 shadow-md shrink-0 bg-festbg group-hover:border-primary group-hover:scale-105 transition">
            <img
              src={image}
              alt=""
              width={64}
              height={64}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h3 className="font-extrabold text-xl text-festtext group-hover:text-primary transition">
              {name}
            </h3>
            <p className="text-xs font-bold text-secondary">{role}</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-base text-festtext leading-snug">
            {topicTitle}
          </h4>
          <p className="text-xs sm:text-sm text-festmuted line-clamp-3 leading-relaxed font-normal">
            {topicDescription}
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2 border-t border-secondary/20 text-xs text-festlabel font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center text-xs font-bold text-primary group-hover:text-secondary transition gap-1.5">
        <span>{ctaText}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
};
