import type { Meta, StoryObj } from '@storybook/react';
import { TimelineItem } from '../../components/basics/TimelineItem';

const meta: Meta<typeof TimelineItem> = {
  title: 'Básicos/Timeline Item',
  component: TimelineItem,
  tags: ['autodocs'],
  args: {
    time: '10:00h - 13:00h',
    badge: 'Talleres simultáneos',
    title: 'Talleres Prácticos y Espacio Infantil',
    description:
      'Apertura simultánea de los espacios creativos en Can Rius y Sala Albéniz: jardinería, música, videoclips y cocina.',
    location: 'Jardins de Can Rius & Espais Municipals',
    isLast: false,
  },
};

export default meta;
type Story = StoryObj<typeof TimelineItem>;

export const Estandar: Story = {
  args: {
    time: '10:00h - 13:00h',
    badge: 'Mañana Creativa',
    title: 'Talleres Prácticos y Espacio Infantil',
    description:
      'Apertura simultánea de los espacios creativos en Can Rius y Sala Albéniz: jardinería, música, videoclips y cocina.',
    location: 'Jardins de Can Rius & Espais Municipals',
    isLast: false,
  },
};

export const Destacado: Story = {
  args: {
    time: '18:00h - 19:30h',
    badge: 'Gran Cierre Musical',
    title: 'Concierto Familiar de Cierre: Xiula',
    description:
      'Fiesta comunitaria con energía, humor y canciones para bailar juntos toda la familia.',
    location: 'Plaça de la Vila',
    isLast: true,
  },
};
