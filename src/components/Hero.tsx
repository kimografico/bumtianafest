import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../data/content';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = {
    ca: {
      title: 'BUM TIANA FEST',
      year: '2026',
      subtitle: 'Un dia sencer a Tiana per compartir aprenentatges, tallers didàctics, xerrades de criança i música en família.',
      welcomeText: [
        'Benvingudes i benvinguts al BUM TIANA FEST 2026',
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
      title: 'BUM TIANA FEST',
      year: '2026',
      subtitle: 'Un día entero en Tiana para compartir aprendizajes, talleres didácticos, charlas de crianza y música en familia.',
      welcomeText: [
        'Benvingudes i benvinguts al BUM TIANA FEST 2026',
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
      <div className="max-w-4xl space-y-8">
        
        {/* Main Title & Subtitle without Card container */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-blue-950 tracking-tight leading-none">
            {t.title} <span className="text-blue-600">{t.year}</span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-700 font-medium leading-relaxed max-w-3xl">
            {t.subtitle}
          </p>
          <div className="pt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal space-y-1">
            {t.welcomeText.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        {/* Clean Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#tallers"
            className="px-8 py-4 rounded-2xl bg-blue-900 hover:bg-blue-800 text-white text-sm font-bold shadow-lg shadow-blue-900/20 active:scale-95 transition cursor-pointer inline-flex items-center gap-2"
          >
            <span>{t.ctaWorkshops}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#programa"
            className="px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-sm font-bold shadow-xs active:scale-95 transition cursor-pointer"
          >
            {t.ctaProgram}
          </a>

          <a
            href="#espais"
            className="px-7 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 text-sm font-bold transition cursor-pointer"
          >
            {t.ctaVenues}
          </a>
        </div>

      </div>
    </section>
  );
};
