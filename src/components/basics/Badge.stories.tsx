import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Clock, MapPin, Sparkles, Users, Calendar } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Básicos/Tags & Badges',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['category', 'time', 'location', 'highlight', 'status', 'age'],
      description: 'Estilo visual del tag o badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Categoria: Story = {
  args: {
    variant: 'category',
    children: 'Familiar Compartido',
  },
};

export const Horario: Story = {
  args: {
    variant: 'time',
    children: '10:00h - 11:30h',
    icon: <Clock className="w-3.5 h-3.5 text-blue-600" />,
  },
};

export const Ubicacion: Story = {
  args: {
    variant: 'location',
    children: 'Jardins de Can Rius',
    icon: <MapPin className="w-3.5 h-3.5 text-blue-600" />,
  },
};

export const Destacado: Story = {
  args: {
    variant: 'highlight',
    children: 'MÁS POPULAR',
  },
};

export const RangoEdad: Story = {
  args: {
    variant: 'age',
    children: 'Infantil: 3 a 10 años',
    icon: <Users className="w-3.5 h-3.5 text-amber-700" />,
  },
};

export const CatalogoDeBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center p-6 bg-slate-50/50 rounded-2xl">
      <Badge variant="category">Espacio Infantil</Badge>
      <Badge variant="category">Crianza Consciente</Badge>
      <Badge variant="time" icon={<Clock className="w-3.5 h-3.5 text-blue-600" />}>
        16:30h - 18:00h
      </Badge>
      <Badge variant="location" icon={<MapPin className="w-3.5 h-3.5 text-blue-600" />}>
        Plaça de la Vila
      </Badge>
      <Badge variant="highlight">MÁS POPULAR</Badge>
      <Badge variant="age" icon={<Users className="w-3.5 h-3.5 text-amber-700" />}>
        Adolescentes (11-16)
      </Badge>
      <Badge variant="status">Plazas disponibles</Badge>
    </div>
  ),
};
