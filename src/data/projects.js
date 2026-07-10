import corporacionPreview from '../assets/images/previews/corporacion-lyacos.png';
import drogueriaPreview from '../assets/images/previews/drogueria-lyacos.png';
import taxiPreview from '../assets/images/previews/taxi-on-time-miami.png';
import valetPreview from '../assets/images/previews/miami-elite-valet.png';
import tuclickwebPreview from '../assets/images/previews/tuclickweb.png';

export const projectCategories = [
  {
    id: 'sistemas',
    title: '1 - Sistemas empresariales',
    summary: 'Soluciones internas con Laravel, MySQL y logica de negocio para ordenar operaciones reales.',
    projects: [
      {
        title: 'Mini-ERP Corporacion Lyacos',
        type: 'Sistema empresarial',
        description:
          'Sistema interno desarrollado para gestionar productos, proveedores, ordenes de compra, recepcion de compras, almacenes, lotes, stock, kardex y transferencias.',
        technologies: ['Laravel', 'MySQL', 'SQL', 'Blade', 'Bootstrap', 'Git'],
        featuredStack: [
          { label: 'IA', value: 'Claude Code, Codex, ChatGPT' },
          { label: 'Base de datos', value: 'MySQL, modelado relacional, consultas SQL' },
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
    summary: 'Webs corporativas enfocadas en presencia digital, confianza, SEO basico y conversion.',
    projects: [
      {
        title: 'Drogueria Lyacos',
        type: 'Sitio web corporativo',
        description:
          'Sitio web orientado a presencia digital, catalogo informativo y posicionamiento para productos medicos en Peru.',
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
          'Pagina web para empresa de transporte, enfocada en captar clientes y facilitar el contacto directo.',
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
          'Sitio web profesional para servicio de valet parking, orientado a imagen corporativa, confianza y conversion.',
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
    title: '3 - Agencia digital',
    summary: 'Marca personal para crear sitios, landing pages, tiendas virtuales y soluciones digitales para negocios.',
    projects: [
      {
        title: 'TuClickWeb',
        type: 'Agencia digital',
        description:
          'Marca personal/agencia enfocada en desarrollo web profesional, landing pages, tiendas virtuales y soluciones digitales para negocios.',
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
