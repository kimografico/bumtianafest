import type { Meta, StoryObj } from '@storybook/react';
import { FaqSection } from './FaqSection';

const meta: Meta<typeof FaqSection> = {
  title: 'Secciones/FaqSection',
  component: FaqSection,
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
type Story = StoryObj<typeof FaqSection>;

export const DudasFrecuentes: Story = {
  args: {
    lang: 'es',
  },
};
