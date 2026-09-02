import type { Meta, StoryObj } from '@storybook/react';
import { GastronomySection } from '../../components/GastronomySection';

const meta: Meta<typeof GastronomySection> = {
  title: 'Secciones/GastronomySection',
  component: GastronomySection,
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
type Story = StoryObj<typeof GastronomySection>;

export const GastronomiaLocal: Story = {
  args: {
    lang: 'es',
  },
};
