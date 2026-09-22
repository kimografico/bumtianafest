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
    speakerId: 'armando-bastida',
  },
  argTypes: {
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
  },
};

export const LaiaFerrer: Story = {
  args: {
    speakerId: 'laia-ferrer',
  },
};
