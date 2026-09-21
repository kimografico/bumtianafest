import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export interface WorkshopCardProps {
  title: string;
  facilitator: string;
  category?: string;
  ageRange?: string;
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
  const showCategory = category && !category.toLowerCase().includes('compartit');

  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-[32px] bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 hover:border-[#88643B] transition-all cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-lg overflow-hidden group ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden bg-[#EFEEE0]">
        <img
          src={image}
          alt={title}
          width={400}
          height={192}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        {showCategory && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0C478D] text-white text-[11px] font-bold backdrop-blur-md shadow-xs">
            {category}
          </div>
        )}
        {ageRange && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FAF9F3] text-[#181816] text-[11px] font-bold backdrop-blur-md border border-[#88643B]/30 shadow-xs">
            {ageRange}
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-extrabold text-xl text-[#181816] group-hover:text-[#0C478D] transition">
            {title}
          </h3>
          <p className="text-xs font-semibold text-[#88643B] mt-0.5">
            {facilitator}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#4A4A43] line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-[#88643B]/20 text-xs">
          <span className="text-[#66665D] font-medium flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#88643B]" />
            {location}
          </span>
          <span className="font-bold text-[#0C478D] flex items-center gap-1 group-hover:text-[#88643B] transition">
            {ctaText} <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </button>
  );
};
