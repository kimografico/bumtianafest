import type { Meta, StoryObj } from '@storybook/react';
import { ConceptSection } from './ConceptSection';

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

export const CuatroTarjetasConcepto: Story = {
  args: {
    lang: 'es',
  },
};
