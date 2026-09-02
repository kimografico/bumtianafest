import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '../../components/Hero';

const meta: Meta<typeof Hero> = {
  title: 'Secciones/Hero',
  component: Hero,
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
      description: 'Idioma del festival',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Principal: Story = {
  args: {
    lang: 'es',
  },
};
