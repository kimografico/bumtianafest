import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';

interface HeroCarouselProps {
  lang: Language;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ lang }) => {
  const slides = [
    {
      image: FESTIVAL_IMAGES.hero,
      tag: {
        ca: 'BUM Tiana Fest 2026',
        es: 'BUM Tiana Fest 2026',
      },
      title: {
        ca: 'Un dia sencer de creativitat i família',
        es: 'Un día entero de creatividad y familia',
      },
      desc: {
        ca: 'Tallers, xerrades, jocs i arts escèniques als carrers de Tiana.',
        es: 'Talleres, charlas, juegos y artes escénicas en las calles de Tiana.',
      },
    },
    {
      image: FESTIVAL_IMAGES.workshop,
      tag: {
        ca: 'Tallers Didàctics',
        es: 'Talleres Didácticos',
      },
      title: {
        ca: 'Aprenentatge compartit entre grans i petits',
        es: 'Aprendizaje compartido entre grandes y pequeños',
      },
      desc: {
        ca: 'Art, cuina, natura, robòtica i tecnologia creativa.',
        es: 'Arte, cocina, naturaleza, robótica y tecnología creativa.',
      },
    },
    {
      image: FESTIVAL_IMAGES.village,
      tag: {
        ca: 'Localitzacions de Tiana',
        es: 'Localizaciones de Tiana',
      },
      title: {
        ca: 'El poble com a gran espai comunitari',
        es: 'El pueblo como gran espacio comunitario',
      },
      desc: {
        ca: 'Espais emblemàtics i equipaments municipals a Tiana.',
        es: 'Espacios emblemáticos y equipamientos municipales en Tiana.',
      },
    },
    {
      image: FESTIVAL_IMAGES.music,
      tag: {
        ca: 'Música & Arts Escèniques',
        es: 'Música & Artes Escénicas',
      },
      title: {
        ca: 'Concerts i espectacles en viu',
        es: 'Conciertos y espectáculos en vivo',
      },
      desc: {
        ca: 'Teatre infantil i gran concert final a la Sala Albéniz.',
        es: 'Teatro infantil y gran concierto final en la Sala Albéniz.',
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      aria-label="Galeria del festival" 
      className="w-full relative overflow-hidden bg-slate-950 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full width edge-to-edge container without rounded borders or margins */}
      <div className="relative h-72 sm:h-96 md:h-[480px] lg:h-[520px] w-full overflow-hidden">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title[lang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              
              {/* Soft gradient overlay for high contrast text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              
              {/* Caption Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-14 max-w-7xl mx-auto flex flex-col justify-end">
                <div className="max-w-2xl space-y-2 sm:space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/30">
                    {slide.tag[lang]}
                  </span>
                  
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
                    {slide.title[lang]}
                  </h2>
                  
                  <p className="text-sm sm:text-base text-slate-200 line-clamp-2 max-w-xl font-normal drop-shadow-sm">
                    {slide.desc[lang]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Anterior imatge"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Següent imatge"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-5 right-6 sm:right-10 z-20 flex items-center gap-2">
          {slides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Veure diapositiva ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                dotIdx === currentIndex
                  ? 'w-7 bg-white'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
