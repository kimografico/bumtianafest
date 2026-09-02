import type { Meta, StoryObj } from '@storybook/react';
import { SpeakerCard } from '../../components/basics/SpeakerCard';
import { FESTIVAL_IMAGES } from '../../assets/images';

const meta: Meta<typeof SpeakerCard> = {
  title: 'Básicos/Speaker Card',
  component: SpeakerCard,
  tags: ['autodocs'],
  args: {
    name: 'Armando Bastida',
    role: 'Enfermero Pediátrico & Divulgador',
    topicTitle: 'Criar con Sentido Común: Claves de la Crianza Respetuosa',
    topicDescription:
      'Una sesión interactiva para desmontar mitos, reducir la culpa parental y aprender pautas prácticas de convivencia diaria.',
    time: '16:30h - 18:00h',
    location: 'Sala Albéniz de Tiana',
    image: FESTIVAL_IMAGES.armandoBastida,
    ctaText: 'Ver detalles de la charla',
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

export default meta;
type Story = StoryObj<typeof SpeakerCard>;

export const ArmandoBastida: Story = {
  args: {
    name: 'Armando Bastida',
    role: 'Enfermero Pediátrico & Divulgador',
    topicTitle: 'Criar con Sentido Común: Claves de la Crianza Respetuosa',
    topicDescription:
      'Una sesión interactiva para desmontar mitos, reducir la culpa parental y aprender pautas prácticas de convivencia diaria.',
    time: '16:30h - 18:00h',
    location: 'Sala Albéniz de Tiana',
    image: FESTIVAL_IMAGES.armandoBastida,
  },
};

export const LuleSoler: Story = {
  args: {
    name: 'Lule Soler',
    role: 'Psicopedagoga & Especialista en Apego',
    topicTitle: 'Límites sin Gritos: Gestión Emocional en Casa',
    topicDescription:
      'Herramientas prácticas para acompañar rabietas, desacuerdos y momentos de tensión desde la calma y la firmeza amorosa.',
    time: '12:00h - 13:30h',
    location: 'Sala Albéniz de Tiana',
    image: FESTIVAL_IMAGES.luleSoler,
  },
};
