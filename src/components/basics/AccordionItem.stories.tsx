import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AccordionItem } from './AccordionItem';

const meta: Meta<typeof AccordionItem> = {
  title: 'Básicos/Accordion',
  component: AccordionItem,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Estado abierto/cerrado',
    },
    onToggle: { action: 'toggled' },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionItem>;

export const ElementoCerrado: Story = {
  args: {
    question: '¿Qué incluye la entrada de adulto y la entrada infantil?',
    answer:
      'La entrada general da acceso a todas las ponencias, espacios comunes y espectáculos del festival. Los talleres infantiles requieren inscripción de pase infantil para garantizar el aforo y material adecuado.',
    isOpen: false,
  },
};

export const ElementoAbierto: Story = {
  args: {
    question: '¿Es necesario reservar plaza para los talleres prácticos?',
    answer:
      'Sí, recomendamos registrarse en los talleres específicos con antelación para asegurar plaza de materiales (huerto, DJ, cocina). El acceso a las ponencias principales es libre hasta completar aforo.',
    isOpen: true,
  },
};

export const ConInsigniaNumerica: Story = {
  args: {
    question: '¿Cómo llegar en transporte público desde Barcelona?',
    answer:
      'Tiana cuenta con líneas directas de autobús (B29 y B35) conectadas con Badalona y la estación de tren de Montgat (Rodalies R1), además de zonas habilitadas de aparcamiento disuasorio.',
    isOpen: true,
    indexBadge: '01',
  },
};

export const ListaInteractiva: Story = {
  render: () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);
    const items = [
      {
        q: '¿El festival es apto para todas las edades?',
        a: '¡Por supuesto! El programa está dividido por franjas desde los 3 años hasta adolescentes y adultos con actividades compartidas en familia.',
      },
      {
        q: '¿Hay opciones para comer dentro de Tiana?',
        a: 'Sí, colaboramos con los restaurantes locales del pueblo para ofrecer menús cerrados familiares, tapas y opciones vegetarianas.',
      },
      {
        q: '¿Qué pasa en caso de lluvia?',
        a: 'La mayoría de equipamientos municipales (Sala Albéniz, Casal, Poliesportiu) son cubiertos y las actividades se adaptarán sin cancelaciones.',
      },
    ];

    return (
      <div className="p-8 bg-slate-100 rounded-3xl space-y-3 max-w-3xl">
        {items.map((item, idx) => (
          <AccordionItem
            key={idx}
            question={item.q}
            answer={item.a}
            isOpen={openIdx === idx}
            onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
          />
        ))}
      </div>
    );
  },
};
