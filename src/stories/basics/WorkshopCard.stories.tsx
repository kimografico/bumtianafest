import type { Meta, StoryObj } from '@storybook/react';
import { WorkshopCard } from '../../components/basics/WorkshopCard';
import { FESTIVAL_IMAGES } from '../../assets/images';

const meta: Meta<typeof WorkshopCard> = {
  title: 'Básicos/Workshop Card',
  component: WorkshopCard,
  tags: ['autodocs'],
  args: {
    title: 'Sembrando Futuro: Taller de Huerto Urbano',
    facilitator: 'Guiado por Tiana Verda',
    category: 'Familiar Compartido',
    ageRange: '3-10 años',
    description:
      'Aprenderemos a plantar semillas autóctonas, preparar tierra fértil y crear maceteros reciclados para llevar a casa.',
    location: 'Jardins de Can Rius',
    image: FESTIVAL_IMAGES.gardening,
    ctaText: 'Más detalles',
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

export default meta;
type Story = StoryObj<typeof WorkshopCard>;

export const HuertoUrbano: Story = {
  args: {
    title: 'Sembrando Futuro: Taller de Huerto Urbano',
    facilitator: 'Guiado por Tiana Verda',
    category: 'Familiar Compartido',
    ageRange: '3-10 años',
    description:
      'Aprenderemos a plantar semillas autóctonas, preparar tierra fértil y crear maceteros reciclados para llevar a casa.',
    location: 'Jardins de Can Rius',
    image: FESTIVAL_IMAGES.gardening,
  },
};

export const BeatsDJ: Story = {
  args: {
    title: 'Beats & Loops: Iniciación a la Producción DJ',
    facilitator: 'Con DJ Pau & Kids Sound Lab',
    category: 'Jóvenes & Adolescentes',
    ageRange: '10-16 años',
    description:
      'Mesa de mezclas digital, creación de ritmos electrónicos y experimentación sonora colectiva.',
    location: 'Espai Jove Tiana',
    image: FESTIVAL_IMAGES.music,
  },
};
