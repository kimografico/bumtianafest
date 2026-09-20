import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../data/content';
import { FESTIVAL_IMAGES, FESTIVAL_LOGOS } from '../assets/images';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = {
    ca: {
      title: 'BUM Tiana FEST',
      year: '2026',
      subtitle: 'Un dia sencer a Tiana per compartir aprenentatges, tallers didàctics, xerrades de criança i música en família.',
      welcomeText: [
        'Benvingudes i benvinguts al BUM Tiana FEST 2026',
        'Un festival didàctic per a les famílies de Tiana i dels voltants.',
        'Unes jornades diferents on les famílies de Tiana i dels voltants podran',
        'gaudir d’un dia ple d’activitats on destaquen, tallers,',
        'xerrades i música, tot enfocat al públic familiar.'
      ],
      ctaWorkshops: 'Explorar Tallers',
      ctaProgram: 'Veure Programa',
      ctaVenues: 'Localitzacions',
    },
    es: {
      title: 'BUM Tiana FEST',
      year: '2026',
      subtitle: 'Un día entero en Tiana para compartir aprendizajes, talleres didácticos, charlas de crianza y música en familia.',
      welcomeText: [
        'Benvingudes i benvinguts al BUM Tiana FEST 2026',
        'Un festival didáctico para las familias de Tiana y alrededores.',
        'Unas jornadas diferentes donde las familias de Tiana y los alrededores podrán',
        'disfrutar de un día lleno de actividades donde destacan, talleres,',
        'charlas y música, todo enfocado al público familiar.'
      ],
      ctaWorkshops: 'Explorar Talleres',
      ctaProgram: 'Ver Programa',
      ctaVenues: 'Localizaciones',
    },
  }[lang];

  return (
    <section className="pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Screen-reader canonical H1 (WCAG 2.4.6) */}
      <h1 className="sr-only">
        {t.title} {t.year} - {t.subtitle}
      </h1>

      {/* Mobile Logo (visible first on mobile only) */}
      <div className="block lg:hidden mb-6">
        <img
          src={FESTIVAL_LOGOS.bumFest}
          alt={t.title + ' ' + t.year}
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
        
        {/* Text & 3 Action Buttons (order-2 on mobile, order-1 on desktop) */}
        <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 sm:space-y-8">
          <div className="space-y-4">
            {/* Desktop Logo (hidden on mobile) */}
            <div className="hidden lg:block">
              <img
                src={FESTIVAL_LOGOS.bumFest}
                alt={t.title + ' ' + t.year}
                className="h-20 xl:h-24 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-lg sm:text-2xl text-[#181816] font-medium leading-relaxed max-w-2xl text-center sm:text-left">
              {t.subtitle}
            </p>
            <div className="pt-2 text-sm sm:text-base text-[#3A3A34] leading-relaxed max-w-xl font-normal space-y-1 text-center sm:text-left">
              {t.welcomeText.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          {/* 3 Action Buttons: 100% width stacked on mobile, auto-width in row on desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full">
            <a
              href="#tallers"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0C478D] hover:bg-[#083266] text-white text-sm font-bold shadow-lg shadow-[#0C478D]/20 active:scale-95 transition cursor-pointer inline-flex items-center justify-center gap-2 text-center"
            >
              <span>{t.ctaWorkshops}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#programa"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#88643B] hover:bg-[#6E502F] text-white text-sm font-bold shadow-md shadow-[#88643B]/20 active:scale-95 transition cursor-pointer inline-flex items-center justify-center text-center"
            >
              {t.ctaProgram}
            </a>

            <a
              href="#espais"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/80 hover:bg-white text-[#181816] border border-[#88643B]/30 text-sm font-bold shadow-2xs active:scale-95 transition cursor-pointer inline-flex items-center justify-center text-center"
            >
              {t.ctaVenues}
            </a>
          </div>
        </div>

        {/* Corporate Image FamiliaMadera.png (order-1 on mobile, order-2 on desktop) */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-xs sm:max-w-md lg:max-w-none flex items-center justify-center">
            {/* Subtle warm glow background behind the wooden family */}
            <div className="absolute inset-0 bg-[#88643B]/15 rounded-full blur-3xl -z-10 scale-90" />
            <img
              src={FESTIVAL_IMAGES.familiaMadera}
              alt="BUM Tiana FEST - Família de Fusta"
              className="w-full h-auto max-h-[300px] sm:max-h-[420px] object-contain drop-shadow-xl select-none transition-transform duration-300 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
