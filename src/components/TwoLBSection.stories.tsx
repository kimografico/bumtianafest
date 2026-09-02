import type { Meta, StoryObj } from '@storybook/react';
import { TwoLBSection } from './TwoLBSection';

const meta: Meta<typeof TwoLBSection> = {
  title: 'Secciones/TwoLBSection',
  component: TwoLBSection,
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
type Story = StoryObj<typeof TwoLBSection>;

export const PresentacionFundacion: Story = {
  args: {
    lang: 'es',
  },
};
