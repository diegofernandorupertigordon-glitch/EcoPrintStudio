import mechanicalPart from '../../assets/mechanical_part.png';
import printedArchModel from '../../assets/printed_architectural_model.png';
import roboticJoint from '../../assets/robotic_joint_component.png';

export type Piece = {
  id: number;
  title: string;
  tag: string;
  img: string;
  alt: string;
};

export const pieces: Piece[] = [
  {
    id: 1,
    title: 'Paneles de impresión avanzada',
    tag: 'Ingeniería',
    img: mechanicalPart,
    alt: 'Instalaciones industriales',
  },
  {
    id: 2,
    title: 'Prototipado de precisión',
    tag: 'Arte',
    img: printedArchModel,
    alt: 'Mesa de trabajo',
  },
  {
    id: 3,
    title: 'Calidad certificada',
    tag: 'Producción',
    img: roboticJoint,
    alt: 'Control de calidad',
  },
];

