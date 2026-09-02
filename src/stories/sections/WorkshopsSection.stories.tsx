import type { Meta, StoryObj } from '@storybook/react';
import { WorkshopsSection } from '../../components/WorkshopsSection';

const meta: Meta<typeof WorkshopsSection> = {
  title: 'Secciones/WorkshopsSection',
  component: WorkshopsSection,
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
    onSelectWorkshop: { action: 'onSelectWorkshop' },
  },
};

export default meta;
type Story = StoryObj<typeof WorkshopsSection>;

export const CatalogoTalleres: Story = {
  args: {
    lang: 'es',
  },
};
