import { FolderOpen, Github, Linkedin, Phone, Shapes, UserRound } from 'lucide-react';

import { Content } from '@/context/useDetailContext';

export const projects: Array<Content> = [
  {
    id: 'b970743f-2cc0-49aa-8135-ea640c110e0b',
    title: 'Águas Digitais',
    subtitle: 'Compesa',
    description:
      'A solução definitiva Compesa para gestão de toda sua estrutura, unificando o fluxo de trabalho das gerências, criando uma forma única de visualização e trabalho para todas elas, visualmente agradável, acessível e fluída.',
    tags: ['Loomi', 'Github', 'chakra ui'],
    images: [
      '/aguas-1.png',
      '/aguas-2.png',
      '/aguas-3.png',
      '/aguas-4.png',
      '/aguas-5.png',
      '/aguas-6.png',
      '/aguas-7.png',
    ],
  },
  {
    id: 'f456b7ab-1231-4635-8f69-b64ae565f629',
    title: 'Untold',
    subtitle: 'Ali Aksu',
    description:
      'Untold is a FINRA member impact investment platform in Hollywood that allows both accredited and non-accredited investors to invest in content (cinema, tv, streaming). As a funding portal technology, Untold also provides white label services to producers to raise capital via Reg CF (up to $5M annually). By providing access to the general public to invest in the entertainment industry, Untold is massive transformative purpose is to empower the middle class in the creator economy. We are a community of passionate creators and investors, and anyone who would like to be a part. Our gatherings around the world attract people from all backgrounds.',
    tags: ['Loomi', 'Github', 'shadcn ui', 'tailwind'],
    images: ['/untold-1.png', '/untold-2.png', '/untold-3.png'],
  },
  {
    id: '3f32b50d-c2c4-4925-adf9-fa2a0b4adc45',
    title: 'Jetops',
    subtitle: 'Jetops',
    description: 'Jetops soluções aeronaúticas.',
    tags: ['Loomi', 'Github', 'chakra', 'cra'],
    images: ['/jetops-1.png', '/jetops-2.png', '/jetops-3.png'],
  },
  {
    id: '89c7c584-ac57-47fd-93a4-b8f808031c3a',
    title: 'Next Plants',
    subtitle: 'Next js 14 application',
    description: 'Plants store with Next js 14 with TS, tailwind, shadcn ui and more.',
    tags: ['personal', 'Github', 'shadcn ui', 'tailwind'],
    images: ['/next-plants-1.png', '/next-plants-2.png'],
  },
  {
    id: '5459ae16-745e-4c68-972a-e009a8c32508',
    title: 'Chatbot with OpenAi',
    subtitle: 'Chatbot Next js 14 library store',
    description:
      'Chatbot Next js 14 library store with Next js 14 with TS, tailwind, shadcn, OpenAi API  ui and more.',
    tags: ['personal', 'Github', 'shadcn ui', 'open ai', 'tailwind'],
    images: ['/chatbot-1.png'],
  },
];

export const sideBarTabs = [
  {
    id: 'projects',
    label: 'Projects',
    icon: FolderOpen,
    path: '/',
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: Shapes,
    path: '/skills',
  },
  {
    id: 'about',
    label: 'About me',
    icon: UserRound,
    path: '/about-me',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: Phone,
    path: '/contact',
  },
  {
    id: 'github',
    label: 'Github',
    icon: Github,
    path: '/github',
  },
  {
    id: 'linkedin',
    label: 'Linkedin',
    icon: Linkedin,
    path: '/linkedin',
  },
];
