import type { Meta, StoryObj } from '@storybook/react';
import { ScheduleSection } from './ScheduleSection';

const meta: Meta<typeof ScheduleSection> = {
  title: 'Sections/ScheduleSection',
  component: ScheduleSection,
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
type Story = StoryObj<typeof ScheduleSection>;

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
