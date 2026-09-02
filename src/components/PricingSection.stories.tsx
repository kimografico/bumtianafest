import type { Meta, StoryObj } from '@storybook/react';
import { PricingSection } from './PricingSection';

const meta: Meta<typeof PricingSection> = {
  title: 'Secciones/PricingSection',
  component: PricingSection,
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
type Story = StoryObj<typeof PricingSection>;

export const ComparativaDeTresTarifas: Story = {
  args: {
    lang: 'es',
  },
};
