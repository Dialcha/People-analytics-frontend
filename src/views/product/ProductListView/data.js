import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Este espacio está dirigido a los estudiantes de Ingeniería de Sistemas, que requieran apoyo en su proceso de formación,  por medio, de las Tutorías Académicas personalizadas.',
    media: '/static/images/products/antivirus.png',
    title: 'Tutorias Académicas',
    totalDownloads: '84'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Para ayudar en el cuidado de la salud mental y estabilidad emocional, se ofrece servicios de apoyo psicológico en línea y presencial de manera opcional y gratuita a estudiantes.',
    media: '/static/images/products/product_2.png',
    title: 'Acompañamiento Psicológico',
    totalDownloads: '50'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'En busca del fomento de la salud individual y colectiva, el Servicio de salud estudiantil de la Dirección de Bienestar Universitario pretende reforzar los lazos protectores y disminuir los riesgos en salud.',
    media: '/static/images/products/saludes.png',
    title: 'Salud Estudiantil',
    totalDownloads: '67'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'El Departamento de Deportes tiene  diferentes modalidades de entrenamiento para la práctica de actividades deportvivas:.',
    media: '/static/images/products/deporte.png',
    title: 'Actividades Deportivas',
    totalDownloads: '150'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Oferta de clases y charlas preparadas para reforzar en temas de dificultad por materias y encuentros de movitacion personal.',
    media: '/static/images/products/clases.png',
    title: 'Clases y charlas online',
    totalDownloads: '165'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Prestamo de herramientas y equipos de computo, para estudiantes de bajos recursos.',
    media: '/static/images/products/product_6.png',
    title: 'Prestamo de Herramientas',
    totalDownloads: '300'
  }
];
