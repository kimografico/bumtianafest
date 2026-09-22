import type { Meta, StoryObj } from '@storybook/react';
import { WorkshopsSection } from '../../components/WorkshopsSection';

const meta: Meta<typeof WorkshopsSection> = {
  title: 'Secciones/WorkshopsSection',
  component: WorkshopsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onSelectWorkshop: { action: 'onSelectWorkshop' },
  },
};

export default meta;
type Story = StoryObj<typeof WorkshopsSection>;

export const CatalogoTalleres: Story = {};
