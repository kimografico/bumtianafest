import type { Meta, StoryObj } from '@storybook/react';
import { ConceptSection } from '../../components/ConceptSection';

const meta: Meta<typeof ConceptSection> = {
  title: 'Secciones/ConceptSection',
  component: ConceptSection,
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
type Story = StoryObj<typeof ConceptSection>;

export const PorDefecto: Story = {
  args: {
    lang: 'es',
  },
};
