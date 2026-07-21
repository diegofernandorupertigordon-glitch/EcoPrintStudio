import fdmImg from '../../assets/fdm.png';
import entregaImg from '../../assets/entrega.png';
import garantiaImg from '../../assets/garantia.png';

export type Service = {
  id: string;
  img: string;
  title: string;
  desc: string;
};

export const services: Service[] = [
  {
    id: 'fdm-resina',
    img: fdmImg,
    title: 'FDM & Resina',
    desc: 'Múltiples tecnologías para cada necesidad: plásticos de ingeniería, resinas de alta resolución y filamentos especiales.',
  },
  {
    id: 'entrega-rapida',
    img: entregaImg,
    title: 'Entrega Rápida',
    desc: 'Prototipos listos en 24-48 horas. Línea express disponible para proyectos urgentes sin sacrificar calidad.',
  },
  {
    id: 'garantia-calidad',
    img: garantiaImg,
    title: 'Garantía de Calidad',
    desc: 'Cada pieza pasa por inspección dimensional con pie de rey digital. Certificado de proceso incluido.',
  },
];


