import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export interface WorkshopCardProps {
  title: string;
  facilitator: string;
  category: string;
  ageRange: string;
  description: string;
  location: string;
  image: string;
  ctaText?: string;
  onClick?: () => void;
  className?: string;
}

export const WorkshopCard: React.FC<WorkshopCardProps> = ({
  title,
  facilitator,
  category,
  ageRange,
  description,
  location,
  image,
  ctaText = 'Más detalles',
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-[32px] bg-white/70 backdrop-blur-xl border border-white hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-lg overflow-hidden group ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-900/90 text-white text-[11px] font-bold backdrop-blur-md">
          {category}
        </div>
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 text-slate-800 text-[11px] font-bold backdrop-blur-md">
          {ageRange}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-blue-700 transition">
            {title}
          </h3>
          <p className="text-xs font-semibold text-blue-700 mt-0.5">
            {facilitator}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 text-xs">
          <span className="text-slate-500 font-medium flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            {location}
          </span>
          <span className="font-bold text-blue-900 flex items-center gap-1 group-hover:text-blue-600 transition">
            {ctaText} <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
