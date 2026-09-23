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
  ctaText = 'Més detalls',
  onClick,
  className = '',
}) => {
  const showCategory = category && !category.toLowerCase().includes('compartit');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`w-full text-left rounded bg-festcard/90 backdrop-blur-xl border border-secondary/30 hover:border-secondary transition-all cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-lg overflow-hidden group ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden bg-festbg">
        <img
          src={image}
          alt=""
          width={400}
          height={192}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        {showCategory && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded bg-primary text-white text-[11px] font-bold backdrop-blur-md shadow-xs">
            {category}
          </div>
        )}
        {ageRange && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded bg-festcard text-festtext text-[11px] font-bold backdrop-blur-md border border-secondary/30 shadow-xs">
            {ageRange}
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-extrabold text-xl text-festtext group-hover:text-primary transition">
            {title}
          </h3>
          <p className="text-xs font-semibold text-secondary mt-0.5">
            {facilitator}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-festmuted line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-secondary/20 text-xs">
          <span className="text-festlabel font-medium flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-secondary" />
            {location}
          </span>
          <span className="font-bold text-primary flex items-center gap-1 group-hover:text-secondary transition">
            {ctaText} <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
