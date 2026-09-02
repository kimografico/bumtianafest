import type { Meta, StoryObj } from '@storybook/react';
import { AccordionItem } from '../../components/basics/AccordionItem';

const meta: Meta<typeof AccordionItem> = {
  title: 'Básicos/Accordion',
  component: AccordionItem,
  tags: ['autodocs'],
  args: {
    question: '¿Qué incluye la entrada de adulto y la entrada infantil?',
    answer:
      'La entrada general da acceso a todas las ponencias, espacios comunes y espectáculos del festival. Los talleres infantiles requieren inscripción de pase infantil para garantizar el aforo y material adecuado.',
    isOpen: false,
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Estado abierto/cerrado del acordeón',
    },
    onToggle: { action: 'onToggle' },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionItem>;

export const Cerrado: Story = {
  args: {
    question: '¿Qué incluye la entrada de adulto y la entrada infantil?',
    answer:
      'La entrada general da acceso a todas las ponencias, espacios comunes y espectáculos del festival. Los talleres infantiles requieren inscripción de pase infantil para garantizar el aforo y material adecuado.',
    isOpen: false,
  },
};

export const Abierto: Story = {
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
