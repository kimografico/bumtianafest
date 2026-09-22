import type { Meta, StoryObj } from '@storybook/react';
import { SpeakersSection } from '../../components/SpeakersSection';

const meta: Meta<typeof SpeakersSection> = {
  title: 'Secciones/SpeakersSection',
  component: SpeakersSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onSelectSpeaker: { action: 'onSelectSpeaker' },
  },
};

export default meta;
type Story = StoryObj<typeof SpeakersSection>;

export const CuadriculaPonentes: Story = {};
