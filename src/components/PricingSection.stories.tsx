import type { Meta, StoryObj } from '@storybook/react';
import { PricingSection } from './PricingSection';

const meta: Meta<typeof PricingSection> = {
  title: 'Sections/PricingSection',
  component: PricingSection,
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
type Story = StoryObj<typeof PricingSection>;

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
