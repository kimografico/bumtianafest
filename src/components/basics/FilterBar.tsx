import React from 'react';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterBarProps {
  options: FilterOption[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  options,
  activeId,
  onSelect,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      {options.map((option) => {
        const isActive = activeId === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              isActive
                ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                : 'bg-white/70 hover:bg-white text-slate-700 border border-white hover:border-blue-200'
            }`}
          >
            <span>{option.label}</span>
            {typeof option.count === 'number' && (
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                }`}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
