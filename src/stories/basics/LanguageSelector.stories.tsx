import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelector } from '../../components/basics/LanguageSelector';

const meta: Meta<typeof LanguageSelector> = {
  title: 'Básicos/Selector de Idioma',
  component: LanguageSelector,
  tags: ['autodocs'],
  args: {
    lang: 'es',
  },
  argTypes: {
    lang: {
      control: 'radio',
      options: ['es', 'ca'],
      description: 'Idioma seleccionado',
    },
    onLanguageChange: { action: 'onLanguageChange' },
  },
};

export default meta;
type Story = StoryObj<typeof LanguageSelector>;

export const Castellano: Story = {
  args: {
    lang: 'es',
  },
};

export const Catalan: Story = {
  args: {
    lang: 'ca',
  },
};
