import type { Meta, StoryObj } from '@storybook/react';
import { HeroCarousel } from '../../components/HeroCarousel';

const meta: Meta<typeof HeroCarousel> = {
  title: 'Componentes/HeroCarousel',
  component: HeroCarousel,
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
type Story = StoryObj<typeof HeroCarousel>;

export const PorDefecto: Story = {
  args: {
    lang: 'es',
  },
};
