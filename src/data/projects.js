import corporacionPreview from '../assets/images/previews/corporacion-lyacos.png';
import drogueriaPreview from '../assets/images/previews/drogueria-lyacos.png';
import taxiPreview from '../assets/images/previews/taxi-on-time-miami.png';
import valetPreview from '../assets/images/previews/miami-elite-valet.png';
import tuclickwebPreview from '../assets/images/previews/tuclickweb.png';

export const projectCategories = [
  {
    id: 'sistemas',
    title: '1 - Sistemas empresariales',
    summary: 'Software interno con Laravel, MySQL, SQL y logica de negocio para ordenar operaciones reales.',
    projects: [
      {
        title: 'Mini-ERP Corporacion Lyacos',
        type: 'Sistema empresarial',
        description:
          'Sistema interno desarrollado para gestionar productos, proveedores, compras, almacenes, lotes, stock, kardex y transferencias, integrando logica de negocio y base de datos MySQL.',
        technologies: ['Laravel', 'MySQL', 'SQL', 'Blade', 'Bootstrap', 'Git'],
        featuredStack: [
          { label: 'IA', value: 'Claude, Codex, ChatGPT y prompts para analisis, codigo y documentacion' },
          { label: 'Base de datos', value: 'MySQL, modelado relacional, consultas SQL y trazabilidad' },
          { label: 'Backend', value: 'Laravel, PHP, controladores y reglas de negocio' },
          { label: 'Frontend', value: 'Blade, Bootstrap, dashboard responsive' },
          { label: 'Gestion', value: 'Git, GitHub y despliegue web' },
        ],
      
        link: 'https://corporacionlyacos.com',
        image: corporacionPreview,
        previewLabel: 'Preview real del sistema',
        accent: 'from-cyanGlow/30 to-mintGlow/10',
      },
    ],
  },
  {
    id: 'sitios-web',
    title: '2 - Sitios web',
    summary: 'Desarrollo web aplicado a sitios reales, cuidando estructura, responsive design, rendimiento y experiencia de usuario.',
    projects: [
      {
        title: 'Drogueria Lyacos',
        type: 'Sitio web corporativo',
        description:
          'Sitio web corporativo orientado a presencia digital, catalogo informativo, estructura clara y posicionamiento para productos medicos en Peru.',
        technologies: ['WordPress', 'SEO', 'Diseno Web'],
        link: 'https://droguerialyacos.com',
        image: drogueriaPreview,
        previewLabel: 'Preview real del sitio',
        accent: 'from-mintGlow/25 to-cyanGlow/10',
      },
      {
        title: 'Taxi On Time Miami',
        type: 'Sitio web corporativo',
        description:
          'Pagina web para empresa de transporte, enfocada en arquitectura simple, responsive design y contacto directo con usuarios.',
        technologies: ['WordPress', 'Responsive Design', 'WhatsApp'],
        link: 'https://taxiontimemiami.com',
        image: taxiPreview,
        previewLabel: 'Preview real del sitio',
        accent: 'from-yellow-300/25 to-cyanGlow/10',
      },
      {
        title: 'Miami Elite Valet Parking',
        type: 'Sitio web corporativo',
        description:
          'Sitio web profesional para servicio de valet parking, orientado a estructura visual, confianza, usabilidad y experiencia responsive.',
        technologies: ['WordPress', 'Diseno Web', 'SEO basico'],
        link: 'https://miamielitevaletparking.com',
        image: valetPreview,
        previewLabel: 'Preview real del sitio',
        accent: 'from-violetGlow/30 to-cyanGlow/10',
      },
    ],
  },
  {
    id: 'agencia-digital',
    title: '3 - Proyecto web personal',
    summary: 'Proyecto personal donde aplico desarrollo web, comunicacion digital, herramientas de IA y criterio tecnico.',
    projects: [
      {
        title: 'TuClickWeb',
        type: 'Proyecto web personal',
        description:
          'Proyecto personal enfocado en practicar desarrollo web, contenido digital, branding, SEO basico y uso de IA para planificar y mejorar soluciones.',
        technologies: ['WordPress', 'Diseno Web', 'Branding', 'SEO', 'IA aplicada'],
        link: 'https://tuclickweb.com',
        image: tuclickwebPreview,
        previewLabel: 'Preview real del sitio',
        accent: 'from-cyanGlow/25 to-violetGlow/10',
      },
    ],
  },
];

export const projects = projectCategories.flatMap((category) =>
  category.projects.map((project) => ({
    ...project,
    category: category.title,
  })),
);
