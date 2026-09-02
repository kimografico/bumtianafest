import type { Meta, StoryObj } from '@storybook/react';
import { WorkshopDetailPage } from './WorkshopDetailPage';
import { WORKSHOPS_DATA } from '../data/content';

const meta: Meta<typeof WorkshopDetailPage> = {
  title: 'Pages/WorkshopDetailPage',
  component: WorkshopDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: 'radio',
      options: ['ca', 'es'],
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

export const GardeningWorkshopCatalan: Story = {
  args: {
    workshopId: 'jardineria',
    lang: 'ca',
  },
};

export const GardeningWorkshopSpanish: Story = {
  args: {
    workshopId: 'jardineria',
    lang: 'es',
  },
};

export const DJWorkshop: Story = {
  args: {
    workshopId: 'beats-dj',
    lang: 'ca',
  },
};
