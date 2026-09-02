import type { Meta, StoryObj } from '@storybook/react';
import { SpeakerDetailPage } from '../../components/SpeakerDetailPage';
import { SPEAKERS_DATA } from '../../data/content';

const meta: Meta<typeof SpeakerDetailPage> = {
  title: 'Páginas/SpeakerDetailPage',
  component: SpeakerDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    lang: 'es',
    speakerId: 'armando-bastida',
  },
  argTypes: {
    lang: {
      control: 'radio',
      options: ['es', 'ca'],
      description: 'Idioma del festival',
    },
    speakerId: {
      control: 'select',
      options: SPEAKERS_DATA.map((s) => s.id),
      description: 'ID de la persona ponente',
    },
    onBack: { action: 'onBack' },
    onSelectSpeaker: { action: 'onSelectSpeaker' },
  },
};

export default meta;
type Story = StoryObj<typeof SpeakerDetailPage>;

export const ArmandoBastida: Story = {
  args: {
    speakerId: 'armando-bastida',
    lang: 'es',
  },
};

export const LuleSoler: Story = {
  args: {
    speakerId: 'lule-soler',
    lang: 'es',
  },
};

export const NutricioInfantil: Story = {
  args: {
    speakerId: 'nutricio-infantil',
    lang: 'es',
  },
};
