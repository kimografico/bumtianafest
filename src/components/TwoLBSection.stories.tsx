import type { Meta, StoryObj } from '@storybook/react';
import { TwoLBSection } from './TwoLBSection';

const meta: Meta<typeof TwoLBSection> = {
  title: 'Sections/TwoLBSection',
  component: TwoLBSection,
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
type Story = StoryObj<typeof TwoLBSection>;

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
