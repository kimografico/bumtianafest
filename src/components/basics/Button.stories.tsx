import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowRight, ArrowLeft, Ticket, Sparkles, Filter } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Básicos/Botones',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'back', 'filter'],
      description: 'Estilo visual del botón',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del botón',
    },
    isActive: {
      control: 'boolean',
      description: 'Solo aplica para variante filter',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrincipalCTA: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Comprar Entradas Festival',
    icon: <Ticket className="w-5 h-5" />,
    iconPosition: 'left',
  },
};

export const ConFlecha: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Ver detalles de la charla',
    icon: <ArrowRight className="w-4 h-4" />,
    iconPosition: 'right',
  },
};

export const Secundario: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Explorar Talleres',
  },
};

export const BotonVolver: Story = {
  args: {
    variant: 'back',
    children: 'Volver a la programación',
    icon: <ArrowLeft className="w-4 h-4" />,
    iconPosition: 'left',
  },
};

export const FiltroActivo: Story = {
  args: {
    variant: 'filter',
    size: 'md',
    isActive: true,
    children: 'Familiar Compartido',
  },
};

export const FiltroInactivo: Story = {
  args: {
    variant: 'filter',
    size: 'md',
    isActive: false,
    children: 'Infantil (3-10 años)',
  },
};

export const CatalogoDeBotones: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center p-6 bg-slate-50/50 rounded-2xl">
      <Button variant="primary" size="lg" icon={<Ticket className="w-5 h-5" />} iconPosition="left">
        Comprar Entrada
      </Button>
      <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
        Ver Detalles
      </Button>
      <Button variant="secondary" size="md">
        Secundario
      </Button>
      <Button variant="outline" size="md">
        Contorno
      </Button>
      <Button variant="back" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
        Volver
      </Button>
      <Button variant="filter" isActive={true}>
        Activo (12)
      </Button>
      <Button variant="filter" isActive={false}>
        Inactivo
      </Button>
    </div>
  ),
};
