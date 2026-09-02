import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterBar } from './FilterBar';

const meta: Meta<typeof FilterBar> = {
  title: 'Básicos/Barra de Filtros',
  component: FilterBar,
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selectedFilter' },
  },
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

const sampleOptions = [
  { id: 'all', label: 'Todos los talleres', count: 12 },
  { id: 'compartit', label: 'Familiar Compartido', count: 4 },
  { id: 'infantil', label: 'Infantil (3-10 años)', count: 5 },
  { id: 'adolescents', label: 'Jóvenes & Adolescentes', count: 3 },
];

export const FiltroTodosActivo: Story = {
  args: {
    options: sampleOptions,
    activeId: 'all',
  },
};

export const FiltroInfantilActivo: Story = {
  args: {
    options: sampleOptions,
    activeId: 'infantil',
  },
};

export const FiltrosHorarios: Story = {
  args: {
    options: [
      { id: 'all', label: 'Todo el día' },
      { id: 'manana', label: 'Talleres Mañana (10:00 - 13:00)' },
      { id: 'comida', label: 'Gastronomía & Vermut' },
      { id: 'tarde', label: 'Charlas & Ponencias' },
      { id: 'concierto', label: 'Espectáculo de Cierre' },
    ],
    activeId: 'manana',
  },
};

export const InteractivoConEstado: Story = {
  render: () => {
    const [active, setActive] = useState('all');
    return (
      <div className="p-8 bg-slate-100 rounded-3xl space-y-4">
        <FilterBar options={sampleOptions} activeId={active} onSelect={setActive} />
        <div className="text-xs font-semibold text-slate-500">
          Filtro seleccionado: <span className="text-blue-900 font-extrabold">{active}</span>
        </div>
      </div>
    );
  },
};
