import type { Meta, StoryObj } from '@storybook/react';
import { HeroCarousel } from './HeroCarousel';

const meta: Meta<typeof HeroCarousel> = {
  title: 'Components/HeroCarousel',
  component: HeroCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: 'radio',
      options: ['ca', 'es'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroCarousel>;

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
