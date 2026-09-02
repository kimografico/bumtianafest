import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'BUM Tiana Fest',
          'Básicos',
          'Componentes',
          'Secciones',
          'Páginas',
          'Navegación',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'white', value: '#ffffff' },
        { name: 'festival-blue', value: '#0f172a' },
        { name: 'festival-deep', value: '#030712' },
      ],
    },
  },
};

export default preview;
