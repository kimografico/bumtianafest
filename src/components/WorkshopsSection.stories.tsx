import type { Meta, StoryObj } from '@storybook/react';
import { WorkshopsSection } from './WorkshopsSection';

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
    onSelectWorkshop: { action: 'selectedWorkshop' },
  },
};

export default meta;
type Story = StoryObj<typeof WorkshopsSection>;

export const TodosLosTalleres: Story = {
  args: {
    lang: 'es',
  },
};
