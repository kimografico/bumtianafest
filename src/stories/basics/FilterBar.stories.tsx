import type { Meta, StoryObj } from '@storybook/react';
import { FilterBar } from '../../components/basics/FilterBar';

const sampleOptions = [
  { id: 'all', label: 'Todos los talleres', count: 12 },
  { id: 'compartit', label: 'Familiar Compartido', count: 4 },
  { id: 'infantil', label: 'Infantil (3-10 años)', count: 5 },
  { id: 'adolescents', label: 'Jóvenes & Adolescentes', count: 3 },
];

const meta: Meta<typeof FilterBar> = {
  title: 'Básicos/Barra de Filtros',
  component: FilterBar,
  tags: ['autodocs'],
  args: {
    options: sampleOptions,
    activeId: 'all',
  },
  argTypes: {
    onSelect: { action: 'onSelect' },
  },
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

export const TodosSeleccionado: Story = {
  args: {
    options: sampleOptions,
    activeId: 'all',
  },
};

export const CategoriaSeleccionada: Story = {
  args: {
    options: sampleOptions,
    activeId: 'infantil',
  },
};

export const FranjasHorarias: Story = {
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
