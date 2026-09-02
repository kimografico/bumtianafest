import type { Meta, StoryObj } from '@storybook/react';
import { WorkshopsSection } from './WorkshopsSection';

const meta: Meta<typeof WorkshopsSection> = {
  title: 'Sections/WorkshopsSection',
  component: WorkshopsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: 'radio',
      options: ['ca', 'es'],
    },
    onSelectWorkshop: { action: 'selectedWorkshop' },
  },
};

export default meta;
type Story = StoryObj<typeof WorkshopsSection>;

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
