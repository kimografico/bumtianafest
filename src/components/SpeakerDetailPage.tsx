import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Globe, 
  ExternalLink, 
  Navigation, 
  Instagram 
} from 'lucide-react';
import { SPEAKERS_DATA, VENUES_DATA } from '../data/content';
import { FESTIVAL_IMAGES } from '../assets/images';
import { LINKS } from '../data/links';

interface SpeakerDetailPageProps {
  speakerId: string;
  onBack: () => void;
  onSelectSpeaker: (id: string) => void;
}

export const SpeakerDetailPage: React.FC<SpeakerDetailPageProps> = ({
  speakerId,
  onBack,
  onSelectSpeaker,
}) => {
  const speaker = SPEAKERS_DATA.find((s) => s.id === speakerId) || SPEAKERS_DATA[0];
  
  // Find venue
  const venue = VENUES_DATA.find((v) => 
    speaker.location.toLowerCase().includes(v.name.toLowerCase())
  ) || VENUES_DATA[1]; // default Sala Albéniz

  const otherSpeakers = SPEAKERS_DATA.filter((s) => s.id !== speaker.id);

  const t = {
    back: 'Tornar a la programació',
    talkTitle: 'Xerrada / Ponència',
    bioTitle: 'Sobre el ponent / especialista',
    highlightsTitle: 'Aspectes clau que s’abordaran',
    website: 'Web',
    venueCard: 'Com arribar a l’espai de la xerrada',
    openMaps: 'Obrir a Google Maps',
    otherTitle: 'Altres xerrades de criança i família',
    viewTalk: 'Veure ponència →',
    accessNote: 'Activitat 100% gratuïta. Aforament limitat per estricte ordre d’arribada.',
  };

  return (
    <div className="min-h-screen pt-8 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Top Back Navigation Bar */}
      <div className="mb-8">
        <button
          onClick={() => {
            onBack();
            setTimeout(() => {
              const el = document.getElementById('xerrades');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 60);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#FAF9F3] hover:bg-white text-[#181816] border border-[#88643B]/30 text-xs font-bold transition shadow-2xs active:scale-95 cursor-pointer backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4 text-[#0C478D]" />
          <span>{t.back}</span>
        </button>
      </div>

      {/* Main Speaker Card */}
      <div className="rounded bg-[#FAF9F3]/90 backdrop-blur-xl border border-[#88643B]/30 shadow-xl overflow-hidden mb-12">
        
        {/* Header Profile Zone */}
        <div className="p-6 sm:p-10 border-b border-[#88643B]/30 bg-[#0C478D] text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/40 shadow-xl shrink-0 bg-[#EFEEE0] ring-4 ring-[#88643B]/30">
              <img
                src={
                  speaker.id === 'armando-bastida'
                    ? FESTIVAL_IMAGES.armandoBastida
                    : FESTIVAL_IMAGES.laiaFerrer
                }
                alt=""
                width={96}
                height={96}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-1.5 flex-grow">
              <div className="inline-block px-3 py-1 rounded bg-[#88643B] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                {speaker.role}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extralight uppercase tracking-wider text-white font-display">
                {speaker.name}
              </h1>
              {speaker.organization && (
                <p className="text-xs sm:text-sm text-[#EFEEE0]/90 font-medium">
                  {speaker.organization}
                </p>
              )}
            </div>

            {speaker.website && (
              <a
                href={speaker.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-white/15 hover:bg-white/25 text-xs font-bold text-white border border-white/30 transition active:scale-95"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{t.website}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            )}
            {speaker.instagram && (
              <a
                href={speaker.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-white/15 hover:bg-white/25 text-xs font-bold text-white border border-white/30 transition active:scale-95"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            )}
          </div>
        </div>

        {/* Talk details */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Talk Title & Schedule Banner */}
          <div className="p-6 rounded bg-white border border-[#88643B]/25 space-y-4 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0C478D]">
                {t.talkTitle}
              </span>
              <div className="flex items-center gap-4 text-xs font-bold text-[#181816]">
                <span className="flex items-center gap-1.5 bg-[#FAF9F3] px-3 py-1 rounded border border-[#88643B]/20 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-[#88643B]" />
                  {speaker.time}
                </span>
                <span className="flex items-center gap-1.5 bg-[#FAF9F3] px-3 py-1 rounded border border-[#88643B]/20 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-[#88643B]" />
                  {speaker.location}
                </span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#181816] leading-snug">
              {speaker.talkTitle}
            </h2>
            
            <p className="text-sm sm:text-base text-[#4A4A43] leading-relaxed font-normal">
              {speaker.talkDescription}
            </p>
          </div>

          {/* Key highlights / takeaways */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#181816]">{t.highlightsTitle}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {speaker.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded bg-white border border-[#88643B]/20 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0C478D] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#181816]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Speaker Biography */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#181816]">{t.bioTitle}</h3>
            <div className="p-6 rounded bg-white border border-[#88643B]/20 shadow-2xs text-sm sm:text-base text-[#3A3A34] leading-relaxed">
              {speaker.bio}
            </div>
          </div>

          {/* Location & Google Maps Card */}
          <div className="p-6 rounded bg-[#0C478D] text-white space-y-4 shadow-lg border border-[#88643B]/30">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">{t.venueCard}</span>
                <h4 className="text-xl font-bold font-display text-white">{venue.name}</h4>
                <p className="text-xs text-white/90 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#88643B]" />
                  <span className="text-white">{venue.address}</span>
                </p>
              </div>

              <a
                href={LINKS.maps.venue(venue.name, venue.address)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.openMaps}: ${venue.name} (${venue.address})`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white text-[#181816] hover:bg-[#FAF9F3] text-xs font-bold shadow-md transition active:scale-95 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#0C478D]" />
                <span>{t.openMaps}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 text-[#88643B]" />
              </a>
            </div>
            
            <p className="text-xs text-white/90 border-t border-white/20 pt-3 leading-relaxed">
              {venue.description}
            </p>
          </div>

          {/* Access Note */}
          <div className="p-4 rounded bg-white border border-[#88643B]/20 text-xs text-[#4A4A43]">
            {t.accessNote}
          </div>

          {/* Reservar Plaza Button */}
          <a
            href={LINKS.forms.xerrades[speaker.id as keyof typeof LINKS.forms.xerrades] || LINKS.forms.reservarPlaca}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3.5 rounded bg-[#88643B] hover:opacity-90 text-white text-xs sm:text-sm font-bold shadow-md shadow-[#88643B]/20 active:scale-95 transition text-center"
          >
            Reservar plaça
          </a>

        </div>
      </div>

      {/* Other Talks */}
      {otherSpeakers.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-[#181816] font-display">{t.otherTitle}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherSpeakers.map((other) => (
              <button
                key={other.id}
                onClick={() => onSelectSpeaker(other.id)}
                className="w-full text-left p-6 rounded bg-[#FAF9F3] border border-[#88643B]/30 hover:border-[#88643B] transition-all cursor-pointer space-y-3 shadow-2xs hover:shadow-md group"
              >
                <div className="text-[11px] font-bold text-[#88643B] uppercase">{other.role}</div>
                <h4 className="font-bold text-lg text-[#181816] group-hover:text-[#0C478D] transition">
                  {other.name}
                </h4>
                <p className="text-xs text-[#4A4A43] line-clamp-2">{other.talkTitle}</p>
                <div className="text-xs font-bold text-[#0C478D] pt-1">{t.viewTalk}</div>
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
