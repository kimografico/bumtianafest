import type { Meta, StoryObj } from '@storybook/react';
import { ConceptSection } from './ConceptSection';

const meta: Meta<typeof ConceptSection> = {
  title: 'Sections/ConceptSection',
  component: ConceptSection,
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
type Story = StoryObj<typeof ConceptSection>;

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
