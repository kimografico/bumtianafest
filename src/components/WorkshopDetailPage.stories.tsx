import type { Meta, StoryObj } from '@storybook/react';
import { WorkshopDetailPage } from './WorkshopDetailPage';
import { WORKSHOPS_DATA } from '../data/content';

const meta: Meta<typeof WorkshopDetailPage> = {
  title: 'Páginas/WorkshopDetailPage',
  component: WorkshopDetailPage,
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
      description: 'Idioma del festival',
    },
    workshopId: {
      control: 'select',
      options: WORKSHOPS_DATA.map((w) => w.id),
      description: 'ID del taller',
    },
    onBack: { action: 'clickedBack' },
    onSelectWorkshop: { action: 'selectedWorkshop' },
  },
};

export default meta;
type Story = StoryObj<typeof WorkshopDetailPage>;

export const TallerHuertoUrbano: Story = {
  args: {
    workshopId: 'jardineria',
    lang: 'es',
  },
};

export const TallerProduccionDJ: Story = {
  args: {
    workshopId: 'beats-dj',
    lang: 'es',
  },
};

export const TallerVideoclipsConIA: Story = {
  args: {
    workshopId: 'videoclips-ia',
    lang: 'es',
  },
};
