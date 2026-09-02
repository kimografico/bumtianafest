import type { Meta, StoryObj } from '@storybook/react';
import { VenuesSection } from './VenuesSection';

const meta: Meta<typeof VenuesSection> = {
  title: 'Sections/VenuesSection',
  component: VenuesSection,
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
type Story = StoryObj<typeof VenuesSection>;

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
