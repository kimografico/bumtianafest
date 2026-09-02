import React from 'react';
import { Clock, MapPin } from 'lucide-react';

export interface TimelineItemProps {
  time: string;
  badge?: string;
  title: string;
  description: string;
  location?: string;
  isLast?: boolean;
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  badge,
  title,
  description,
  location,
  isLast = false,
  className = '',
}) => {
  return (
    <div className={`relative group pl-8 sm:pl-10 pb-8 ${isLast ? 'pb-0' : ''} ${className}`}>
      {/* Continuous vertical timeline connector line */}
      {!isLast && (
        <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-blue-200" />
      )}

      {/* Timeline dot positioned on the line */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-xs group-hover:border-blue-800 group-hover:scale-125 transition" />

      <div className="space-y-2">
        {/* Time & Badge */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-2xs">
            {time}
          </span>

          {badge && (
            <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 shadow-2xs">
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-700 transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
          {description}
        </p>

        {/* Location if present */}
        {location && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pt-1">
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{location}</span>
          </div>
        )}
      </div>
    </div>
  );
};
