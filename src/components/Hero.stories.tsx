import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: 'radio',
      options: ['ca', 'es'],
      description: 'Idioma actual (Català / Castellano)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

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
