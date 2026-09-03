import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  ExternalLink,
  Navigation
} from 'lucide-react';
import { Language, Speaker, SPEAKERS_DATA, VENUES_DATA } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';

interface SpeakerDetailPageProps {
  speakerId: string;
  lang: Language;
  onBack: () => void;
  onSelectSpeaker: (id: string) => void;
}

export const SpeakerDetailPage: React.FC<SpeakerDetailPageProps> = ({
  speakerId,
  lang,
  onBack,
  onSelectSpeaker,
}) => {
  const speaker = SPEAKERS_DATA.find((s) => s.id === speakerId) || SPEAKERS_DATA[0];
  
  // Find venue
  const venue = VENUES_DATA.find((v) => 
    speaker.location.toLowerCase().includes(v.name.toLowerCase())
  ) || VENUES_DATA[1]; // default El Casal

  const otherSpeakers = SPEAKERS_DATA.filter((s) => s.id !== speaker.id);

  const t = {
    ca: {
      back: 'Tornar a la programació',
      talkTitle: 'Xerrada / Ponència',
      schedule: 'Horari',
      location: 'Espai',
      bioTitle: 'Sobre el ponent / especialista',
      synopsisTitle: 'Contingut de la sessió',
      highlightsTitle: 'Aspectes clau que s’abordaran',
      website: 'Web oficial',
      venueCard: 'Com arribar a l’espai de la xerrada',
      openMaps: 'Obrir a Google Maps',
      otherTitle: 'Altres xerrades de criança i família',
      accessNote: 'Accés inclòs amb qualsevol dels Bonos del BUM Fest. Aforament limitat per ordre d’arribada.',
    },
    es: {
      back: 'Volver a la programación',
      talkTitle: 'Charla / Ponencia',
      schedule: 'Horario',
      location: 'Espacio',
      bioTitle: 'Sobre el ponente / especialista',
      synopsisTitle: 'Contenido de la sesión',
      highlightsTitle: 'Aspectos clave que se abordarán',
      website: 'Web oficial',
      venueCard: 'Cómo llegar al espacio de la charla',
      openMaps: 'Abrir en Google Maps',
      otherTitle: 'Otras charlas de crianza y familia',
      accessNote: 'Acceso incluido con cualquiera de los Bonos de BUM Fest. Aforo limitado por orden de llegada.',
    },
  }[lang];

  return (
    <div className="min-h-screen pt-8 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={() => {
            onBack();
            setTimeout(() => {
              const el = document.getElementById('xerrades');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 60);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/70 hover:bg-white text-slate-700 hover:text-slate-900 border border-white text-xs font-bold transition shadow-2xs active:scale-95 cursor-pointer backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.back}</span>
        </button>
      </div>

      {/* Main Speaker Card */}
      <div className="rounded-[36px] bg-white/60 backdrop-blur-xl border border-white shadow-xl overflow-hidden mb-12">
        
        {/* Header Profile Zone */}
        <div className="p-6 sm:p-10 border-b border-slate-200/60 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/40 shadow-xl shrink-0 bg-slate-100 ring-4 ring-white/10">
              <img
                src={
                  speaker.id === 'armando-bastida'
                    ? FESTIVAL_IMAGES.armandoBastida
                    : FESTIVAL_IMAGES.laiaFerrer
                }
                alt={speaker.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-1.5 flex-grow">
              <div className="inline-block px-3 py-1 rounded-full bg-teal-400/20 border border-teal-300/30 text-teal-200 text-[11px] font-bold uppercase tracking-wider">
                {speaker.role[lang]}
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
                {speaker.name}
              </h1>
              {speaker.organization && (
                <p className="text-xs sm:text-sm text-blue-200 font-medium">
                  {speaker.organization}
                </p>
              )}
            </div>

            {speaker.website && (
              <a
                href={speaker.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/20 transition active:scale-95"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{t.website}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}
          </div>
        </div>

        {/* Talk details */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Talk Title & Schedule Banner */}
          <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-100 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                {t.talkTitle}
              </span>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-blue-100 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  {speaker.time}
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-blue-100 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {speaker.location}
                </span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
              {speaker.talkTitle[lang]}
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {speaker.talkDescription[lang]}
            </p>
          </div>

          {/* Key highlights / takeaways */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">{t.highlightsTitle}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {speaker.highlights[lang].map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-white shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Speaker Biography */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">{t.bioTitle}</h3>
            <div className="p-6 rounded-3xl bg-white/70 border border-white shadow-2xs text-sm sm:text-base text-slate-700 leading-relaxed">
              {speaker.bio[lang]}
            </div>
          </div>

          {/* Location & Google Maps Card */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-lg border border-white/20">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider">{t.venueCard}</span>
                <h4 className="text-xl font-bold">{venue.name}</h4>
                <p className="text-xs text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{venue.address}</span>
                </p>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${venue.name}, ${venue.address}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold shadow-md transition active:scale-95 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>{t.openMaps}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
            
            <p className="text-xs text-slate-300 border-t border-white/10 pt-3">
              {venue.description[lang]}
            </p>
          </div>

          {/* Access Note */}
          <div className="p-4 rounded-2xl bg-slate-100 text-xs text-slate-600">
            {t.accessNote}
          </div>

        </div>
      </div>

      {/* Other Talks */}
      {otherSpeakers.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-slate-900">{t.otherTitle}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherSpeakers.map((other) => (
              <div
                key={other.id}
                onClick={() => onSelectSpeaker(other.id)}
                className="p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white hover:border-blue-300 transition-all cursor-pointer space-y-3 shadow-2xs hover:shadow-md group"
              >
                <div className="text-[11px] font-bold text-blue-700 uppercase">{other.role[lang]}</div>
                <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-700 transition">
                  {other.name}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">{other.talkTitle[lang]}</p>
                <div className="text-xs font-bold text-blue-600 pt-1">Veure ponència →</div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
