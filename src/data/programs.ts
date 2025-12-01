export interface Program {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: string;
  months: number;
  level: 'Présentiel ' | 'Hybride' | 'En ligne';
  hours: number;
  cost: number;
  startDate : Date;
  image: string;
  objectives: string[];
  targetAudience: string[];
  modules: string[];
  internshipDuration: string;
  certification: string;
  credits?: string;
}

export const programsData: Program[] = [
  {
    id: 'gestion-chantier',
    title: 'Expert BIM ( Revit)',
    shortDescription: 'Formation complète en gestion et coordination de projets de construction',
    description: 'Formation complète en gestion et coordination de projets de construction. Maîtrisez les techniques modernes de management de chantier et optimisez vos ressources.',
    duration: '6 mois',
    months: 6,
    level: 'Hybride',
    hours: 60,
    cost: 45000,
    startDate: new Date('2026-01-15'),
    image: 'https://www.cadinterop.com/images/CADInterop/CAD/autodesk-revit.webp?auto=compress&cs=tinysrgb&w=600',
    objectives: [
      'Maîtriser les principes de base de la gestion de chantier',
      'Gérer efficacement les ressources humaines et matérielles',
      'Optimiser les délais et les coûts de construction',
      'Assurer la qualité et la sécurité sur le chantier',
      'Communiquer efficacement avec tous les intervenants',
      'Utiliser les outils numériques modernes de gestion',
    ],
    targetAudience: [
      'Conducteurs de travaux',
      'Chefs de chantier',
      'Responsables de projet',
      'Professionnels du BTP en reconversion',
      'Techniciens supérieurs en construction',
    ],
    modules: [
      'Fondamentaux de la gestion de projet',
      'Management des ressources',
      'Planification et ordonnancement',
      'Contrôle de qualité et sécurité',
      'Gestion financière du chantier',
      'Communication et leadership',
    ],
    internshipDuration: '1-2 mois',
    certification: 'Diplôme reconnu CCBI',
    credits: '45 ECTS',
  },
  {
    id: 'architecture-design',
    title: 'Maintenance des Automates Siemens',
    shortDescription: 'Maîtrisez les techniques de conception et de planification architecturale',
    description: 'Maîtrisez les techniques modernes de conception et de planification architecturale. Apprenez à créer des espaces innovants et fonctionnels.',
    duration: '3 jours',
    months: 8,
    level: 'Présentiel ',
    hours: 24,
    cost: 65000,
    startDate: new Date('2026-02-02'),
    image: 'https://www.usinenouvelle.com/expo/img/simatic-s7-1200-controleur-modulaire-compact-pour-solutions-d-automatisation-000240754-product_zoom.jpg?auto=compress&cs=tinysrgb&w=600',
    objectives: [
      'Concevoir des projets architecturaux innovants',
      'Maîtriser les outils CAO et BIM',
      'Respecter les normes et réglementations',
      'Intégrer les principes du développement durable',
      'Gérer les aspects techniques et aesthetiques',
      'Présenter et défendre ses projets efficacement',
    ],
    targetAudience: [
      'Architectes',
      'Designers d\'intérieur',
      'Techniciens en architecture',
      'Professionnels de l\'urbanisme',
      'Promoteurs immobiliers',
    ],
    modules: [
      'Principes fondamentaux de l\'architecture',
      'Logiciels CAO et BIM',
      'Conception durable et écologique',
      'Design d\'intérieur',
      'Réglementations et normes',
      'Gestion de projets architecturaux',
    ],
    internshipDuration: '2-3 mois',
    certification: 'Diplôme Expert CCBI',
    credits: '60 ECTS',
  },
 
];
