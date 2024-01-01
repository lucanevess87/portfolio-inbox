import { FolderOpen, Github, Linkedin, Phone, Shapes, UserRound } from 'lucide-react';

import { Content } from '@/context/useDetailContext';

export const projects: Array<Content> = [
  {
    id: 'b970743f-2cc0-49aa-8135-ea640c110e0b',
    title: 'Águas Digitais',
    subtitle: 'Compesa',
    description: 'Solução para mapeamento de ordens de serviço e suprimentos',
    tags: ['Loomi', 'Github', 'shadcn ui'],
  },
  {
    id: 'f456b7ab-1231-4635-8f69-b64ae565f629',
    title: 'Untold',
    subtitle: 'Ali Aksu',
    description: 'Crowd funding for movies',
    tags: ['Loomi', 'Github', 'shadcn ui'],
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
