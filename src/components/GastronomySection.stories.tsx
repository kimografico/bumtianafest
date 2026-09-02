import type { Meta, StoryObj } from '@storybook/react';
import { GastronomySection } from './GastronomySection';

const meta: Meta<typeof GastronomySection> = {
  title: 'Sections/GastronomySection',
  component: GastronomySection,
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
type Story = StoryObj<typeof GastronomySection>;

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
