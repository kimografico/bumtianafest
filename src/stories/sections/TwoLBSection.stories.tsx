import type { Meta, StoryObj } from '@storybook/react';
import { TwoLBSection } from '../../components/TwoLBSection';

const meta: Meta<typeof TwoLBSection> = {
  title: 'Secciones/TwoLBSection',
  component: TwoLBSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TwoLBSection>;

export const Fundacion: Story = {};
