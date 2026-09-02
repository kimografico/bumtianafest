import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelector } from './LanguageSelector';
import { Language } from '../../data/content';

const meta: Meta<typeof LanguageSelector> = {
  title: 'Básicos/Selector de Idioma',
  component: LanguageSelector,
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: 'radio',
      options: ['es', 'ca'],
      description: 'Idioma seleccionado',
    },
    onLanguageChange: { action: 'changedLanguage' },
  },
};

export default meta;
type Story = StoryObj<typeof LanguageSelector>;

export const CastellanoActivo: Story = {
  args: {
    lang: 'es',
  },
};

export const CatalanActivo: Story = {
  args: {
    lang: 'ca',
  },
};

export const Interactivo: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<Language>('es');
    return (
      <div className="p-8 bg-slate-100 rounded-3xl inline-flex flex-col items-start gap-4">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Probar interacción en directo:
        </div>
        <LanguageSelector lang={currentLang} onLanguageChange={setCurrentLang} />
        <div className="text-sm font-semibold text-slate-700">
          Idioma activo actualmente: <span className="text-blue-700 font-extrabold">{currentLang.toUpperCase()}</span>
        </div>
      </div>
    );
  },
};
