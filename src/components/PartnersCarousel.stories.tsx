import type { Meta, StoryObj } from '@storybook/react';
import { PartnersCarousel } from './PartnersCarousel';

const meta: Meta<typeof PartnersCarousel> = {
  title: 'Componentes/PartnersCarousel',
  component: PartnersCarousel,
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
  },
};

export default meta;
type Story = StoryObj<typeof PartnersCarousel>;

export const CintaColaboradores: Story = {
  args: {
    lang: 'es',
  },
};
