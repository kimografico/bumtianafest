import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../../components/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Navegación/Navbar',
  component: Navbar,
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
      description: 'Idioma actual del festival',
    },
    setLang: { action: 'setLang' },
    onNavigateHome: { action: 'onNavigateHome' },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Principal: Story = {
  args: {
    lang: 'es',
  },
};
