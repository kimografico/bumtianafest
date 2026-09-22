import type { Meta, StoryObj } from '@storybook/react';
import { ConceptSection } from '../../components/ConceptSection';

const meta: Meta<typeof ConceptSection> = {
  title: 'Secciones/ConceptSection',
  component: ConceptSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConceptSection>;

export const PorDefecto: Story = {};
