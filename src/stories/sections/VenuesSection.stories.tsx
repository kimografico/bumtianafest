import type { Meta, StoryObj } from '@storybook/react';
import { VenuesSection } from '../../components/VenuesSection';

const meta: Meta<typeof VenuesSection> = {
  title: 'Secciones/VenuesSection',
  component: VenuesSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VenuesSection>;

export const Localizaciones: Story = {};
