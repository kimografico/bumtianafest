import type { Meta, StoryObj } from '@storybook/react';
import { ScheduleSection } from './ScheduleSection';

const meta: Meta<typeof ScheduleSection> = {
  title: 'Secciones/ScheduleSection',
  component: ScheduleSection,
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
type Story = StoryObj<typeof ScheduleSection>;

export const CronogramaCompleto: Story = {
  args: {
    lang: 'es',
  },
};
