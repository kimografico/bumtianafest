import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimelineItem } from './TimelineItem';

const meta: Meta<typeof TimelineItem> = {
  title: 'Básicos/Timeline Item',
  component: TimelineItem,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TimelineItem>;

export const ElementoEstandar: Story = {
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

export const ElementoDestacado: Story = {
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

export const SecuenciaDeTimeline: Story = {
  render: () => (
    <div className="p-8 bg-slate-100/70 rounded-3xl max-w-2xl relative">
      <TimelineItem
        time="09:30h"
        title="Acreditaciones y Bienvenida con Chocolatada"
        description="Punto de encuentro y entrega de acreditaciones y mochilas del festival."
        location="Plaça de la Vila"
        isLast={false}
      />
      <TimelineItem
        time="10:00h - 13:00h"
        badge="Talleres simultáneos"
        title="Bloque de Talleres Prácticos en Familia"
        description="Actividades divididas por franjas de edad en los diferentes equipamientos."
        location="Can Rius y Sala Albéniz"
        isLast={false}
      />
      <TimelineItem
        time="14:00h - 16:00h"
        badge="DJ Vermut"
        title="Comida Comunitaria y Sobremesa"
        description="Degustación en restaurantes colaboradores y música ambiente en la plaza."
        location="Terrazas y Restaurantes de Tiana"
        isLast={false}
      />
      <TimelineItem
        time="16:30h - 18:00h"
        title="Ciclo de Ponencias: Armando Bastida"
        description="Charla y coloquio abierto sobre crianza consciente y límites con respeto."
        location="Sala Albéniz"
        isLast={true}
      />
    </div>
  ),
};
