import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Clock, MapPin, ArrowRight, Target, Users, Heart, Utensils, ExternalLink } from 'lucide-react';
import { FESTIVAL_IMAGES, FESTIVAL_LOGOS } from '../../assets/images';

const meta: Meta = {
  title: 'Básicos/Cards',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

export const TarjetaPonente: StoryObj = {
  render: () => (
    <div className="max-w-sm p-8 rounded-[36px] bg-white/70 backdrop-blur-xl border border-white hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg group">
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-md shrink-0 bg-slate-100 group-hover:border-blue-600 group-hover:scale-105 transition">
            <img
              src={FESTIVAL_IMAGES.armandoBastida}
              alt="Armando Bastida"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-blue-700 transition">
              Armando Bastida
            </h3>
            <p className="text-xs font-bold text-blue-700">
              Enfermero Pediátrico & Divulgador
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-base text-slate-900 leading-snug">
            Criar con Sentido Común: Claves de la Crianza Respetuosa
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
            Una sesión interactiva para desmontar mitos, reducir la culpa parental y aprender pautas prácticas de convivencia diaria.
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2 border-t border-slate-200/60 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>16:30h - 18:00h</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>Sala Albéniz de Tiana</span>
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center text-xs font-bold text-blue-900 group-hover:text-blue-600 transition gap-1.5">
        <span>Ver detalles de la charla</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  ),
};

export const TarjetaTaller: StoryObj = {
  render: () => (
    <div className="max-w-md rounded-[32px] bg-white/70 backdrop-blur-xl border border-white hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-lg overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={FESTIVAL_IMAGES.gardening}
          alt="Taller de Jardinería"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-900/90 text-white text-[11px] font-bold backdrop-blur-md">
          Familiar Compartido
        </div>
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 text-slate-800 text-[11px] font-bold backdrop-blur-md">
          3-10 años
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-blue-700 transition">
            Sembrando Futuro: Taller de Huerto Urbano
          </h3>
          <p className="text-xs font-semibold text-blue-700 mt-0.5">
            Guiado por Tiana Verda
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          Aprenderemos a plantar semillas autóctonas, preparar tierra fértil y crear maceteros reciclados para llevar a casa.
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 text-xs">
          <span className="text-slate-500 font-medium flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            Jardins de Can Rius
          </span>
          <span className="font-bold text-blue-900 flex items-center gap-1 group-hover:text-blue-600 transition">
            Más detalles <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  ),
};

export const TarjetaLocalizacion: StoryObj = {
  render: () => (
    <div className="max-w-sm p-8 rounded-[36px] bg-white/70 backdrop-blur-xl border border-white hover:border-blue-200 transition-all flex flex-col justify-between space-y-6 shadow-sm">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
            Sala Albéniz
          </h3>
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold uppercase tracking-wider">
            Auditorio Central
          </div>
          <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium pt-1">
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>Carrer d'Isaac Albéniz, 8, Tiana</span>
          </p>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Espacio teatral histórico con acústica óptima y climatización donde se celebran las conferencias magistrales y ponencias de expertos.
        </p>

        <div className="space-y-2 pt-2 border-t border-slate-200/60">
          <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
            Actividades en este espacio
          </div>
          <div className="space-y-1.5 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Ponencia Armando Bastida (16:30h)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Charla Nutrición Infantil (11:30h)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200/60">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 transition"
        >
          <span>Abrir en Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  ),
};

export const TarjetaGastronomica: StoryObj = {
  render: () => (
    <div className="max-w-sm rounded-[32px] bg-blue-900/40 backdrop-blur-xl border border-blue-800/80 p-6 text-white space-y-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center shadow-md">
          <img
            src={FESTIVAL_LOGOS.casal}
            alt="El Casal de Tiana"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="px-3 py-1 rounded-full bg-blue-800 text-blue-200 text-xs font-bold border border-blue-700">
          Menú Especial 16€
        </span>
      </div>

      <div>
        <h3 className="font-extrabold text-xl text-white">El Casal de Tiana</h3>
        <p className="text-xs text-blue-200 flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3 text-teal-400" />
          Avinguda d'Isaac Albéniz, 12
        </p>
      </div>

      <p className="text-xs text-blue-100/80 leading-relaxed">
        Cocina tradicional catalana, paella, fideuá, carnes a la brasa y menú infantil con terraza amplia y zona peatonal.
      </p>

      <div className="pt-3 border-t border-blue-800/80 flex items-center justify-between text-xs">
        <span className="text-teal-300 font-bold">Opciones sin gluten</span>
        <span className="font-bold text-white flex items-center gap-1 hover:text-teal-300 transition cursor-pointer">
          Ver menú <ExternalLink className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  ),
};

export const TarjetaConceptoBUM: StoryObj = {
  render: () => (
    <div className="max-w-sm p-8 rounded-[32px] bg-blue-900/40 backdrop-blur-xl border border-blue-800/80 flex flex-col justify-start shadow-lg text-white space-y-4">
      <div className="h-12 flex items-center justify-start mb-2">
        <img
          src={FESTIVAL_LOGOS.bumFest}
          alt="BUM Fest"
          className="h-10 w-auto max-w-[120px] object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-extrabold text-white">¿Por qué "BUM"?</h3>
        <p className="text-sm text-blue-100/90 leading-relaxed font-normal">
          BUM simboliza la energía positiva, el despertar creativo y la chispa que conecta a las familias con su entorno comunitario y cultural.
        </p>
      </div>
    </div>
  ),
};
