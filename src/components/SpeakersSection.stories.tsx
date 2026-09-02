import type { Meta, StoryObj } from '@storybook/react';
import { SpeakersSection } from './SpeakersSection';

const meta: Meta<typeof SpeakersSection> = {
  title: 'Secciones/SpeakersSection',
  component: SpeakersSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    lang: 'es',
  },
  argTypes: {
    lang: {
      control: 'radio',
      options: ['es', 'ca'],
    },
    onSelectSpeaker: { action: 'selectedSpeaker' },
  },
};

export default meta;
type Story = StoryObj<typeof SpeakersSection>;

export const CuadriculaCompleta: Story = {
  args: {
    lang: 'es',
  },
};
