import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '../../components/Hero';

const meta: Meta<typeof Hero> = {
  title: 'Secciones/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Principal: Story = {};
