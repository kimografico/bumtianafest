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

export const LaiaFerrer: Story = {
  args: {
    name: 'Laia Ferrer',
    role: 'Médica Especialista en Pediatría',
    topicTitle: 'Neurodesarrollo, lenguaje y pantallas',
    topicDescription:
      '¿Qué consecuencias tiene el uso o abuso de pantallas en la etapa de los 0 a los 3 años? Una detección precoz y una correcta estimulación psicomotora marcan la diferencia para el futuro de esa criatura.',
    time: '16:00h - 17:00h',
    location: "Sala Petita d'El Casal de Tiana",
    image: FESTIVAL_IMAGES.laiaFerrer,
  },
};
