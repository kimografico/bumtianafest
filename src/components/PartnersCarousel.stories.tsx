import type { Meta, StoryObj } from '@storybook/react';
import { PartnersCarousel } from './PartnersCarousel';

const meta: Meta<typeof PartnersCarousel> = {
  title: 'Components/PartnersCarousel',
  component: PartnersCarousel,
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
type Story = StoryObj<typeof PartnersCarousel>;

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
