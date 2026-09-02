import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

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
      description: 'Idioma actual del festival (por defecto Castellano)',
    },
    setLang: { action: 'setLang' },
    onNavigateHome: { action: 'navigatedHome' },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const PrincipalFlotante: Story = {
  args: {
    lang: 'es',
  },
};

export const EnPaginaDeDetalle: Story = {
  args: {
    lang: 'es',
    onNavigateHome: () => console.log('Volviendo al inicio desde detalle'),
  },
};
