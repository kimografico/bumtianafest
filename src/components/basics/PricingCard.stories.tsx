import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PricingCard } from './PricingCard';

const meta: Meta<typeof PricingCard> = {
  title: 'Básicos/Bloque de Tarifa',
  component: PricingCard,
  tags: ['autodocs'],
  argTypes: {
    highlighted: {
      control: 'boolean',
      description: 'Resalta la tarjeta como opción recomendada',
    },
    onSelect: { action: 'selectedPricing' },
  },
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const TarifaEstandar: Story = {
  args: {
    name: 'Pase Individual',
    price: '18€',
    period: 'por persona / jornada completa',
    description: 'Acceso para 1 persona a todas las conferencias y conciertos.',
    features: [
      'Acceso a todas las ponencias de la Sala Albéniz',
      'Entrada al concierto familiar de cierre',
      'Descuentos en menús gastronómicos de Tiana',
      'Mochila oficial con kit de bienvenida',
    ],
    highlighted: false,
    ctaText: 'Comprar Pase',
  },
};

export const TarifaDestacada: Story = {
  args: {
    name: 'Pack Familiar (2+2)',
    price: '45€',
    period: 'válido para 2 adultos + 2 niños',
    description: 'La opción ideal para disfrutar de la jornada completa en familia con reserva prioritaria.',
    features: [
      'Acceso completo para 4 miembros de la familia',
      'Inscripción incluida en hasta 2 talleres por niño',
      'Reserva de mesa prioritaria en comida familiar',
      '2 Mochilas de bienvenida y regalos oficiales',
      'Acceso exclusivo a zona de descanso con sombra',
    ],
    highlighted: true,
    tag: 'MÁS POPULAR',
    ctaText: 'Elegir Pack Familiar',
  },
};

export const ComparativaDeTarifas: Story = {
  render: () => (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl p-6 bg-slate-100 rounded-3xl">
      <PricingCard
        name="Pase Infantil"
        price="12€"
        period="de 3 a 16 años"
        description="Diseñado para disfrutar de todos los talleres prácticos."
        features={[
          'Acceso a talleres matinales',
          'Materiales y kit artístico incluido',
          'Concierto infantil de cierre',
        ]}
        highlighted={false}
        ctaText="Comprar Infantil"
      />
      <PricingCard
        name="Pack Familiar"
        price="45€"
        period="2 adultos + hasta 3 niños"
        description="Acceso global y talleres prioritarios para todo el día."
        features={[
          'Pase completo para toda la familia',
          'Talleres ilimitados con reserva previa',
          'Concierto familiar y sorpresas',
          'Pack de bienvenida oficial',
        ]}
        highlighted={true}
        tag="MÁS POPULAR"
        ctaText="Comprar Pack Familiar"
      />
      <PricingCard
        name="Pase Adulto"
        price="18€"
        period="acceso individual"
        description="Para padres, educadores y profesionales de la infancia."
        features={[
          'Ponencias completas de expertos',
          'Coloquio y ronda de preguntas',
          'Concierto y vermut musical',
        ]}
        highlighted={false}
        ctaText="Comprar Adulto"
      />
    </div>
  ),
};
