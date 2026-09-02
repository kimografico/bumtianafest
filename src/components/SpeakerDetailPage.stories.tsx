import type { Meta, StoryObj } from '@storybook/react';
import { SpeakerDetailPage } from './SpeakerDetailPage';
import { SPEAKERS_DATA } from '../data/content';

const meta: Meta<typeof SpeakerDetailPage> = {
  title: 'Pages/SpeakerDetailPage',
  component: SpeakerDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: 'radio',
      options: ['ca', 'es'],
    },
    speakerId: {
      control: 'select',
      options: SPEAKERS_DATA.map((s) => s.id),
      description: 'ID de la persona ponent',
    },
    onBack: { action: 'clickedBack' },
    onSelectSpeaker: { action: 'selectedSpeaker' },
  },
};

export default meta;
type Story = StoryObj<typeof SpeakerDetailPage>;

export const ArmandoBastidaCatalan: Story = {
  args: {
    speakerId: 'armando-bastida',
    lang: 'ca',
  },
};

export const ArmandoBastidaSpanish: Story = {
  args: {
    speakerId: 'armando-bastida',
    lang: 'es',
  },
};

export const MiriamTirado: Story = {
  args: {
    speakerId: 'miriam-tirado',
    lang: 'ca',
  },
};
