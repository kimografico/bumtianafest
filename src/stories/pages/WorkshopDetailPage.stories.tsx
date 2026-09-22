import type { Meta, StoryObj } from '@storybook/react';
import { WorkshopDetailPage } from '../../components/WorkshopDetailPage';
import { WORKSHOPS_DATA } from '../../data/content';

const meta: Meta<typeof WorkshopDetailPage> = {
  title: 'Páginas/WorkshopDetailPage',
  component: WorkshopDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    workshopId: 'jardineria',
  },
  argTypes: {
    workshopId: {
      control: 'select',
      options: WORKSHOPS_DATA.map((w) => w.id),
      description: 'ID del taller',
    },
    onBack: { action: 'onBack' },
    onSelectWorkshop: { action: 'onSelectWorkshop' },
  },
};

export default meta;
type Story = StoryObj<typeof WorkshopDetailPage>;

export const TallerNatura: Story = {
  args: {
    workshopId: 'jardineria',
  },
};

export const TallerPercussio: Story = {
  args: {
    workshopId: 'percussio',
  },
};

export const TallerTeatre: Story = {
  args: {
    workshopId: 'teatre-expressio',
  },
};
