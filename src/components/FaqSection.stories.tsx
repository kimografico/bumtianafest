import type { Meta, StoryObj } from '@storybook/react';
import { FaqSection } from './FaqSection';

const meta: Meta<typeof FaqSection> = {
  title: 'Sections/FaqSection',
  component: FaqSection,
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
type Story = StoryObj<typeof FaqSection>;

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
