import type { Meta, StoryObj } from '@storybook/react';
import { SpeakersSection } from './SpeakersSection';

const meta: Meta<typeof SpeakersSection> = {
  title: 'Sections/SpeakersSection',
  component: SpeakersSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: 'radio',
      options: ['ca', 'es'],
    },
    onSelectSpeaker: { action: 'selectedSpeaker' },
  },
};

export default meta;
type Story = StoryObj<typeof SpeakersSection>;

export const Catalan: Story = {
  args: {
    lang: 'ca',
  },
};

export const Spanish: Story = {
  args: {
    lang: 'es',
  },
};
