import type { Meta, StoryObj } from '@storybook/react';
import { PricingCard } from '../../components/basics/PricingCard';

const meta: Meta<typeof PricingCard> = {
  title: 'Básicos/Bloque de Tarifa',
  component: PricingCard,
  tags: ['autodocs'],
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
  argTypes: {
    highlighted: {
      control: 'boolean',
      description: 'Resalta la tarjeta como opción recomendada',
    },
    onSelect: { action: 'onSelect' },
  },
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Estandar: Story = {
  args: {
    name: 'Pase Individual Adulto',
    price: '18€',
    period: 'por persona / jornada completa',
    description: 'Acceso para 1 persona a todas las conferencias magistrales, debates y conciertos.',
    features: [
      'Acceso a todas las ponencias de la Sala Albéniz',
      'Entrada al concierto familiar de cierre',
      'Descuentos en menús gastronómicos de Tiana',
      'Mochila oficial con kit de bienvenida',
    ],
    highlighted: false,
    ctaText: 'Comprar Pase Individual',
  },
};

export const Destacada: Story = {
  args: {
    name: 'Pack Familiar (2+2)',
    price: '45€',
    period: 'válido para 2 adultos + hasta 3 niños',
    description: 'La opción ideal para disfrutar de la jornada completa en familia con reserva prioritaria.',
    features: [
      'Acceso completo para toda la unidad familiar',
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

export const Infantil: Story = {
  args: {
    name: 'Pase Infantil & Joven',
    price: '12€',
    period: 'de 3 a 16 años',
    description: 'Diseñado para participar activamente en todos los talleres prácticos del festival.',
    features: [
      'Acceso a talleres matinales guiados por monitores',
      'Kit de materiales y manualidades para llevar a casa',
      'Acceso al concierto infantil y espectáculo de tarde',
    ],
    highlighted: false,
    ctaText: 'Comprar Pase Infantil',
  },
};
