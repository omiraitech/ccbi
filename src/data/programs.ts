export interface Program {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: string;
  months: number;
  competences: string[];
  level: 'Présentiel ' | 'Hybride' | 'En ligne';
  hours: number;
  cost: string;
  startDate: Date;
  image: string;
  objectives: string[];
  targetAudience: string[];
  modules: { title: string; submodules: string[] }[];
  category: string; // TODO:: Readjust this field in all programs
  subCategory: string;// TODO:: Readjust this field in all programs
  certification: string[];
  isHomeDisplay: boolean;
  isVisible: boolean;
}

export const programsData: Program[] = [
  // {
  //   id: 'gestion-chantier',
  //   title: 'Expert BIM ( Revit)',
  //   shortDescription: 'Formation complète en gestion et coordination de projets de construction',
  //   description: 'Formation complète en gestion et coordination de projets de construction. Maîtrisez les techniques modernes de management de chantier et optimisez vos ressources.',
  //   duration: '6 mois',
  //   months: 6,
  //   level: 'Hybride',
  //   hours: 60,
  //   cost: 45000,
  //   startDate: new Date('2026-01-15'),
  //   image: 'https://www.cadinterop.com/images/CADInterop/CAD/autodesk-revit.webp?auto=compress&cs=tinysrgb&w=600',
  //   objectives: [
  //     'Maîtriser les principes de base de la gestion de chantier',
  //     'Gérer efficacement les ressources humaines et matérielles',
  //     'Optimiser les délais et les coûts de construction',
  //     'Assurer la qualité et la sécurité sur le chantier',
  //     'Communiquer efficacement avec tous les intervenants',
  //     'Utiliser les outils numériques modernes de gestion',
  //   ],
  //   targetAudience: [
  //     'Conducteurs de travaux',
  //     'Chefs de chantier',
  //     'Responsables de projet',
  //     'Professionnels du BTP en reconversion',
  //     'Techniciens supérieurs en construction',
  //   ],
  //   modules: [
  //     'Fondamentaux de la gestion de projet',
  //     'Management des ressources',
  //     'Planification et ordonnancement',
  //     'Contrôle de qualité et sécurité',
  //     'Gestion financière du chantier',
  //     'Communication et leadership',
  //   ],
  //   internshipDuration: '1-2 mois',
  //   certification: 'Diplôme reconnu CCBI',
  //   credits: '45 ECTS',
  // },
  // {
  //   id: 'architecture-design',
  //   title: 'Maintenance des Automates Siemens',
  //   shortDescription: 'Maîtrisez les techniques de conception et de planification architecturale',
  //   description: 'Maîtrisez les techniques modernes de conception et de planification architecturale. Apprenez à créer des espaces innovants et fonctionnels.',
  //   duration: '3 jours',
  //   months: 8,
  //   level: 'Présentiel ',
  //   hours: 24,
  //   cost: 65000,
  //   startDate: new Date('2026-02-02'),
  //   image: 'https://www.usinenouvelle.com/expo/img/simatic-s7-1200-controleur-modulaire-compact-pour-solutions-d-automatisation-000240754-product_zoom.jpg?auto=compress&cs=tinysrgb&w=600',
  //   objectives: [
  //     'Concevoir des projets architecturaux innovants',
  //     'Maîtriser les outils CAO et BIM',
  //     'Respecter les normes et réglementations',
  //     'Intégrer les principes du développement durable',
  //     'Gérer les aspects techniques et aesthetiques',
  //     'Présenter et défendre ses projets efficacement',
  //   ],
  //   targetAudience: [
  //     'Architectes',
  //     'Designers d\'intérieur',
  //     'Techniciens en architecture',
  //     'Professionnels de l\'urbanisme',
  //     'Promoteurs immobiliers',
  //   ],
  //   modules: [
  //     'Principes fondamentaux de l\'architecture',
  //     'Logiciels CAO et BIM',
  //     'Conception durable et écologique',
  //     'Design d\'intérieur',
  //     'Réglementations et normes',
  //     'Gestion de projets architecturaux',
  //   ],
  //   internshipDuration: '2-3 mois',
  //   certification: 'Diplôme Expert CCBI',
  //   credits: '60 ECTS',
  // },

  // I - Génie Civil et BTP

  // 1. Construction Durable et Règlementation

  {
    id: 'gc-btp-construction-bas-carbone-materiaux-biosources',
    title: "Construction Bas Carbone et Matériaux Biosourcés ( Bois, Chanvre, paille )",
    shortDescription: "Maîtrisez l'intégration des matériaux biosourcés et les approches bas carbone pour concevoir des bâtiments durables.",
    description: "Cette formation présente les enjeux carbone du secteur BTP et les méthodes pratiques pour concevoir, prescrire et mettre en œuvre des solutions biosourcées (bois, chanvre, paille). Vous apprendrez l'analyse du cycle de vie, la réglementation, le dimensionnement et l'évaluation économique à travers études de cas et retours d'expérience.",
    duration: '5 jours complets et 2 à 4 semaines en format hybride',
    months: 0,
    level: 'Hybride',
    hours: 35,
    cost: "300 428 FCFA (€ 458)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/46801/coal-briquette-black-46801.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Analyser l'impact environnemental des matériaux de construction grâce à l'analyse du cycle de vie et principes d'approche Bas Carbone.",
      "Intégrer les exigences de la réglementation environnementale en vigueur spécifiques au volet Carbone et Matériaux.",
      "Choisir et Prescrire les matériaux Biosourcés les plus adaptés à un projet, en fonction des contraintes techniques, thermiques et financières.",
      "Superviser et valider les techniques de mise en œuvre"
    ],
    targetAudience: [
      'Architectes et bureaux d’études',
      'Ingénieurs structure',
      'Chefs de projet et conducteurs de travaux',
      'Responsables RSE / développement durable',
      "Bureaux d’études thermiques"
    ],
    competences: [
      "Maîtrise des matériaux de construction"
    ],
    modules: [
      {
        title: 'Fondamentaux du Carbone et AVC',
        submodules: [
          "Comprendre l'impact carbone du secteur BTP : Émissions, énergie grise, et enjeux climatiques.",
          "Introduction à l'analyse du cycle de vie (ACV): Méthodologie, indicateurs Clés et outils de calcul.",
          "Cadre réglementaires : Explication des objectifs Bas Carbone des normes environnementales"
        ]
      },
      {
        title: 'Le Bois, Matériau Structurant',
        submodules: [
          "La filière bois- construction : Approvisionnement, labellisation et transformation. ",
          "Techniques constructives : Ossature Bois, Poteaux-poutres, CLT",
          "Points Critiques : Gestion de l'humidité, protection incendie, durabilité et traitement. "
        ]
      },
      {
        title: "Les Agro-matériaux d'isolation et de Remplissage",
        submodules: [
          "La Chanvre : Propriétés thermiques et hygroscopique",
          "La Paille : Technique du GREB et méthode de remplissage des mûres , Règlementation incendie"
        ]
      },
      {
        title: 'Conception et Économie de Projet',
        submodules: [
          "Conception bioclimatique : Intégré les Biosourcés dès l'esquisse ",
          "Détails techniques : Gestion des ponts thermiques et de l'étanchéité à l'air spécifique",
          "Analyse Économique : coût global des matériaux Biosourcés (achat, pose, maintenance) ",
          "Évaluation finale : Étude de cas complète et présentation d'un projet intégrant une chaîne de matériaux bas carbone."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Construction Durable et Règlementation',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: true,
    isVisible: true,
  },
  {
    id: 'gc-btp-construction-application-re2020',
    title: "Application de la RE2020/Réglementations similaires ( Calculs et Conformité)",
    shortDescription: "Maîtrisez l'intégration des matériaux biosourcés et les approches bas carbone pour concevoir des bâtiments durables.",
    description: "Cette formation présente les enjeux carbone du secteur BTP et les méthodes pratiques pour concevoir, prescrire et mettre en œuvre des solutions biosourcées (bois, chanvre, paille). Vous apprendrez l'analyse du cycle de vie, la réglementation, le dimensionnement et l'évaluation économique à travers études de cas et retours d'expérience.",
    duration: '5 jours complets et 2 à 4 semaines en format hybride',
    months: 0,
    level: 'Hybride',
    hours: 35,
    cost: "300 428 FCFA (€ 458)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/46801/coal-briquette-black-46801.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Analyser l'impact environnemental des matériaux de construction grâce à l'analyse du cycle de vie et principes d'approche Bas Carbone.",
      "Intégrer les exigences de la réglementation environnementale en vigueur spécifiques au volet Carbone et Matériaux.",
      "Choisir et Prescrire les matériaux Biosourcés les plus adaptés à un projet, en fonction des contraintes techniques, thermiques et financières.",
      "Superviser et valider les techniques de mise en œuvre"
    ],
    targetAudience: [
      'Thermiciens',
      "Bureaux d'études"
    ],
    competences: [
      "Efficacité Énergétique"
    ],
    modules: [
      {
        title: 'Fondamentaux du Carbone et AVC',
        submodules: [
          "Comprendre l'impact carbone du secteur BTP : Émissions, énergie grise, et enjeux climatiques.",
          "Introduction à l'analyse du cycle de vie (ACV): Méthodologie, indicateurs Clés et outils de calcul.",
          "Cadre réglementaires : Explication des objectifs Bas Carbone des normes environnementales"
        ]
      },
      {
        title: 'Le Bois, Matériau Structurant',
        submodules: [
          "La filière bois- construction : Approvisionnement, labellisation et transformation. ",
          "Techniques constructives : Ossature Bois, Poteaux-poutres, CLT",
          "Points Critiques : Gestion de l'humidité, protection incendie, durabilité et traitement. "
        ]
      },
      {
        title: "Les Agro-matériaux d'isolation et de Remplissage",
        submodules: [
          "La Chanvre : Propriétés thermiques et hygroscopique",
          "La Paille : Technique du GREB et méthode de remplissage des mûres , Règlementation incendie"
        ]
      },
      {
        title: 'Conception et Économie de Projet',
        submodules: [
          "Conception bioclimatique : Intégré les Biosourcés dès l'esquisse ",
          "Détails techniques : Gestion des ponts thermiques et de l'étanchéité à l'air spécifique",
          "Analyse Économique : coût global des matériaux Biosourcés (achat, pose, maintenance) ",
          "Évaluation finale : Étude de cas complète et présentation d'un projet intégrant une chaîne de matériaux bas carbone."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Construction Durable et Règlementation',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'gc-btp-construction-audit-energetique-batiments',
    title: "Audit Énergétique des Bâtiments Tertiaires et Résidentiels",
    shortDescription: "Apprenez à réaliser des audits énergétiques complets pour identifier les économies d'énergie et les solutions de rénovation.",
    description: "Formation complète sur la méthodologie d'audit énergétique, les outils de diagnostic, l'analyse des consommations et la formulation de recommandations pour la rénovation. Cas pratiques et visites de sites incluent.",
    duration: '5 jours complets et 2 à 4 semaines en format hybride',
    months: 0,
    level: 'Hybride',
    hours: 35,
    cost: "300 428 FCFA (€ 458)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/46801/coal-briquette-black-46801.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Analyser l'impact environnemental des matériaux de construction grâce à l'analyse du cycle de vie et principes d'approche Bas Carbone.",
      "Intégrer les exigences de la réglementation environnementale en vigueur spécifiques au volet Carbone et Matériaux.",
      "Choisir et Prescrire les matériaux Biosourcés les plus adaptés à un projet, en fonction des contraintes techniques, thermiques et financières.",
      "Superviser et valider les techniques de mise en œuvre"
    ],
    targetAudience: [
      "Professionnels de la Rénovation"
    ],
    competences: [
      "Diagnostic Bâtiment"
    ],
    modules: [
      {
        title: 'Fondamentaux du Carbone et AVC',
        submodules: [
          "Comprendre l'impact carbone du secteur BTP : Émissions, énergie grise, et enjeux climatiques.",
          "Introduction à l'analyse du cycle de vie (ACV): Méthodologie, indicateurs Clés et outils de calcul.",
          "Cadre réglementaires : Explication des objectifs Bas Carbone des normes environnementales"
        ]
      },
      {
        title: 'Le Bois, Matériau Structurant',
        submodules: [
          "La filière bois- construction : Approvisionnement, labellisation et transformation. ",
          "Techniques constructives : Ossature Bois, Poteaux-poutres, CLT",
          "Points Critiques : Gestion de l'humidité, protection incendie, durabilité et traitement. "
        ]
      },
      {
        title: "Les Agro-matériaux d'isolation et de Remplissage",
        submodules: [
          "La Chanvre : Propriétés thermiques et hygroscopique",
          "La Paille : Technique du GREB et méthode de remplissage des mûres , Règlementation incendie"
        ]
      },
      {
        title: 'Conception et Économie de Projet',
        submodules: [
          "Conception bioclimatique : Intégré les Biosourcés dès l'esquisse ",
          "Détails techniques : Gestion des ponts thermiques et de l'étanchéité à l'air spécifique",
          "Analyse Économique : coût global des matériaux Biosourcés (achat, pose, maintenance) ",
          "Évaluation finale : Étude de cas complète et présentation d'un projet intégrant une chaîne de matériaux bas carbone."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Construction Durable et Règlementation',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'gc-btp-gestion-chantier-opc',
    title: "Gestion de Chantier : Planification, Ordonnancement et Pilotage (OPC)",
    shortDescription: "Acquérez les méthodes et outils pour planifier, ordonnancer et piloter efficacement un chantier (OPC).",
    description: "Formation pratique couvrant la planification, l'identification du chemin critique, l'ordonnancement et le pilotage opérationnel. Ateliers sur MS Project/Primavera, gestion des risques et coordination inter-entreprises via cas concrets de chantier.",
    duration: 'Typiquement 4 jours complets où 3 semaines',
    months: 0,
    level: 'Hybride',
    hours: 28,
    cost: "300 428 FCFA (€ 458)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/373489/pexels-photo-373489.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Planification : Établir, Structurer et visualiser la planification d'un Chantier (Gros Œuvre et/ou Corps d'état secondaire)",
      "Ordonnancement : Optimiser les enchaînements des tâches, identifier les marges libres et Totales, et maîtriser le chemin critique du projet",
      "Pilotage & Coordination : Animer les réunions de coordination, anticiper les conflits d'interface.",
      "Outils Numériques : Utiliser efficacement les logiciels de planification et de suivi ( MS Project, Primavera, ou équivalent)."
    ],
    targetAudience: [
      'Conducteurs de travaux',
      'Chefs de chantier',
      'Responsables OPC / planification',
      'Directeurs de projet',
      'PMO et planificateurs'
    ],
    competences: [
      "Conduite des Projets ( Travaux)"
    ],
    modules: [
      {
        title: "Les Fondamentaux et le Cadrage de l'OPC",
        submodules: [
          "Rôle et Mission de l'OPC : Différence entre OPC, Maitrise d'oeuvre et Maîtrise d'ouvrage. Les livrables contractuelle ( Plan d'OPC, Synthèse). ",
          "Structuration du Projet : Création du WBS ( Work Break down Structure) et du OBS ( Organisation Breakdown Structures).",
          "Le Cycle de vie d'un chantier : Phases administratives, études, Exécution et réception.",
          "La notion de temps : Identification des tâches, durée, ressources nécessaires et dépendances. "
        ]
      },
      {
        title: 'Planification et Ordonnances',
        submodules: [
          "Méthodes de planification : Maitrise de la méthode des Antécédents",
          "Le chemin Critique : Calcul des dates au plus tôt/au plus tard, identification des marges libres et Totales",
          "Planification en phase d'études : Ordonnancement des livrables ( plans, notes de calculs).",
          "Atelier Logiciel Pratique : Création d'un planning de référence ( baseline) sur MS Project"
        ]
      },
      {
        title: "Pilotage et Coordination d'exécution",
        submodules: [
          "Le suivi temporel : Mise à jour et avancement du planning",
          "Coordination : Préparation et animation des réunions d'OPC. ",
          "Gestion des aléas et des dérives : Techniques d'accélération et identification des impacts.",
          "Reporting : Création de tableaux de bord et de rapports d'état d'avancement pour le client ( Maitrise d'ouvrage). "
        ]
      },
      {
        title: 'Outils Avancés et Maîtrise des Risques',
        submodules: [
          "Gestion des interfaces Complexes : Coordination des Corps d'État Techniques (CVC, Électricité) avec le Gros Oeuvre. ",
          "Maitrise contractuelle : Lien entre le planning et les clauses du marché ( pénalités de retard, ordres de service). ",
          "Simulation et gestion des risques : Identification et évaluation des risques ( Météo, approvisionnement, main-d'œuvre) sur le planning. ",
          "Évaluation finale : Cas pratique d'un retard de Chantier, nécessitant une analyse du chemin critique et des propositions de rattrapage argumentées."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Management, Sécurité et Juridique',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: true,
    isVisible: false
  },
  {
    id: 'gc-btp-sse-chantier',
    title: "Santé, Sécurité et Environnement ( SSE) en Chantier de Construction",
    shortDescription: "Comprendre et appliquer les règles SST et environnementales pour garantir la sécurité et la conformité des chantiers.",
    description: "Programme complet sur la réglementation SSE, l'évaluation des risques, la gestion des déchets et la prévention des pollutions. Exercices pratiques, mise en situation d'urgence et préparation aux audits et visites réglementaires.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/8488021/pexels-photo-8488021.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Règlementation & Prévention : Identifier les obligations légales ( employeur, intervenants) en matière de SSE et déployer une politique de prévention des risques professionnels conforme aux normes en vigueur",
      "Évaluation des Risques : Réaliser un Document Unique d'évaluation des risques Professionnels et Analyser les risques spécifiques au BTP ( Travail en hauteur, coactivité, manutention, risques chimiques).",
      "Environnement : Gérer et tracer les déchets de chantier, maîtriser la réglementation ICPE ( Installations classées pour la Protection de l'environnement)  et prévenir les pollutions accidentelles.",
      "Intervention : Coordonner la sécurité entre différents entreprises ( plan de prévention, PPSPS) et intervenir efficacement en cas d'accident ou de situation d'urgence."
    ],
    targetAudience: [
      'Responsables QHSE',
      'Coordonnateurs SPS',
      'Chefs de chantier et conducteurs de travaux',
      'Préventeurs et responsables sécurité',
      'Entrepreneurs et chefs d’équipes'
    ],
    competences: [],
    modules: [
      {
        title: "Le cadre Réglementaire et les Enjeux",
        submodules: [
          "Le code du travail et les responsabilités : Obligations de l'employeur, du chef de chantier, et des salariés.",
          "Les acteurs de la prévention : Rôle de l'inspection du travail, de la CARSAT, du Coordonnateur SPS ( Sécurité et Protection de la santé).",
          "Les documents clés : Maîtrise et mise à jour du DUERP ( Document Unique d'évaluation des Risques) et du PPSPS ( Plan Particulier de Sécurité et de Protection de la santé). ",
          "Le coût de l'insécurité : Analyse des accidents du travail et des maladies professionnelles dans le BTP"
        ]
      },
      {
        title: 'Évaluation et Gestion des Risques Spécifiques au BTP',
        submodules: [
          "Travail en hauteur : Choix des équipements de protection collective ( EPC ) et Individuelle ( EPI) ; réglementation sur les échafaudages, les nacelles, et les moyens antichute.",
          "Risques physiques : Manutention ( port de charges, TMS), risques électriques ( habilitation théorique), bruit et vibrations.",
          "Risques chimiques : Animante, plomb, poussières de silice ( gestion des fiches de données de sécurité - FDS ).",
          "La coactivité : Mise en place et suivi du plan de prévention lors de l'intervention d'entreprise extérieures.",
          "Atelier : vérification et utilisation des EPI antichute, analyse de situation à risques sur plan ou simulation"
        ]
      },
      {
        title: "Gestion de l'environnement en Chantier",
        submodules: [
          "La gestion des déchets : identification, tri (dangereux/non dangereux), traçabilité et filières de valorisation.",
          "Prévention des pollutions : Protection des eaux et des sols ( Cuvettes de rétention, aires de lavage ).",
          "Puissance de chantier : Gestion du Bruit, de la poussière et des relations avec le voisinage.",
          "Évaluation : Audit rapide de conformité environnement d'un Chantier."
        ]
      },
      {
        title: "Actions en Cas d'urgence et Audit",
        submodules: [
          "Procédure d'urgence : Que faire en cas d'accident grave ? Le rôle des sauveteurs secouristes du travail ou équivalent.",
          "Communication de crise : Comment informer les autorités et les médias.",
          "Les inspection et les visites : Préparation aux visites de l'inspection du travail et audits internes.",
          "Mise en situation pratique : Simulation d'une situation d'urgence sur un espace et exercices de remplissage d'un rapport d'incident."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Management, Sécurité et Juridique',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: true,
    isVisible: true,
  },
  {
    id: 'gc-btp-management-qualite-projets-btp-gc',
    title: "Management de la Qualité des Projets BTP et Génie civil",
    shortDescription: "Maîtrisez les méthodes de management qualité pour assurer l'excellence dans les projets de construction.",
    description: "Formation sur les systèmes de qualité, les normes ISO 9001, la gestion documentaire et les procédures de contrôle qualité en BTP. Application pratique à travers des cas d'étude et mise en place d'outils qualité.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/8488021/pexels-photo-8488021.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Règlementation & Prévention : Identifier les obligations légales ( employeur, intervenants) en matière de SSE et déployer une politique de prévention des risques professionnels conforme aux normes en vigueur",
      "Évaluation des Risques : Réaliser un Document Unique d'évaluation des risques Professionnels et Analyser les risques spécifiques au BTP ( Travail en hauteur, coactivité, manutention, risques chimiques).",
      "Environnement : Gérer et tracer les déchets de chantier, maîtriser la réglementation ICPE ( Installations classées pour la Protection de l'environnement)  et prévenir les pollutions accidentelles.",
      "Intervention : Coordonner la sécurité entre différents entreprises ( plan de prévention, PPSPS) et intervenir efficacement en cas d'accident ou de situation d'urgence."
    ],
    targetAudience: [
      'Chefs de projet',
      'Responsables qualité',
      'Conducteurs de travaux',
      'Ingénieurs BTP',
      'Techniciens qualité'
    ],
    competences: [],
    modules: [
      {
        title: "Le cadre Réglementaire et les Enjeux",
        submodules: [
          "Le code du travail et les responsabilités : Obligations de l'employeur, du chef de chantier, et des salariés.",
          "Les acteurs de la prévention : Rôle de l'inspection du travail, de la CARSAT, du Coordonnateur SPS ( Sécurité et Protection de la santé).",
          "Les documents clés : Maîtrise et mise à jour du DUERP ( Document Unique d'évaluation des Risques) et du PPSPS ( Plan Particulier de Sécurité et de Protection de la santé). ",
          "Le coût de l'insécurité : Analyse des accidents du travail et des maladies professionnelles dans le BTP"
        ]
      },
      {
        title: 'Évaluation et Gestion des Risques Spécifiques au BTP',
        submodules: [
          "Travail en hauteur : Choix des équipements de protection collective ( EPC ) et Individuelle ( EPI) ; réglementation sur les échafaudages, les nacelles, et les moyens antichute.",
          "Risques physiques : Manutention ( port de charges, TMS), risques électriques ( habilitation théorique), bruit et vibrations.",
          "Risques chimiques : Animante, plomb, poussières de silice ( gestion des fiches de données de sécurité - FDS ).",
          "La coactivité : Mise en place et suivi du plan de prévention lors de l'intervention d'entreprise extérieures.",
          "Atelier : vérification et utilisation des EPI antichute, analyse de situation à risques sur plan ou simulation"
        ]
      },
      {
        title: "Gestion de l'environnement en Chantier",
        submodules: [
          "Réalisation d'audits qualité internes.",
          "Pilotage d'actions d'amélioration.",
          "Outils d'amélioration continue (PDCA, 8D, etc.)."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Management, Sécurité et Juridique',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'gc-btp-habilitation-travaux-hauteur-harnais',
    title: "Habilitation aux Travaux en Hauteur et Port du Harnais",
    shortDescription: "Comprendre et appliquer les règles SST et environnementales pour garantir la sécurité et la conformité des chantiers.",
    description: "Programme complet sur la réglementation SSE, l'évaluation des risques, la gestion des déchets et la prévention des pollutions. Exercices pratiques, mise en situation d'urgence et préparation aux audits et visites réglementaires.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/8488021/pexels-photo-8488021.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Comprendre les réglementations et obligations légales liées aux travaux en hauteur.",
      "Savoir évaluer les risques et mettre en place des mesures de prévention adaptées.",
      "Maîtriser les techniques de port du harnais et d'utilisation des équipements de protection individuelle (EPI).",
      "Être capable de réaliser des interventions en hauteur en toute sécurité."
    ],
    targetAudience: [
      'Travailleurs susceptibles d\'effectuer des travaux en hauteur',
      'Responsables de la sécurité',
      "Chefs d'équipe",
      'Préventeurs'
    ],
    competences: [
      "Sécurité "
    ],
    modules: [
      {
        title: "Le cadre Réglementaire et les Enjeux",
        submodules: [
          "Le code du travail et les responsabilités : Obligations de l'employeur, du chef de chantier, et des salariés.",
          "Les acteurs de la prévention : Rôle de l'inspection du travail, de la CARSAT, du Coordonnateur SPS ( Sécurité et Protection de la santé).",
          "Les documents clés : Maîtrise et mise à jour du DUERP ( Document Unique d'évaluation des Risques) et du PPSPS ( Plan Particulier de Sécurité et de Protection de la santé). ",
          "Le coût de l'insécurité : Analyse des accidents du travail et des maladies professionnelles dans le BTP"
        ]
      },
      {
        title: 'Évaluation et Gestion des Risques Spécifiques au BTP',
        submodules: [
          "Travail en hauteur : Choix des équipements de protection collective ( EPC ) et Individuelle ( EPI) ; réglementation sur les échafaudages, les nacelles, et les moyens antichute.",
          "Risques physiques : Manutention ( port de charges, TMS), risques électriques ( habilitation théorique), bruit et vibrations.",
          "Risques chimiques : Animante, plomb, poussières de silice ( gestion des fiches de données de sécurité - FDS ).",
          "La coactivité : Mise en place et suivi du plan de prévention lors de l'intervention d'entreprise extérieures.",
          "Atelier : vérification et utilisation des EPI antichute, analyse de situation à risques sur plan ou simulation"
        ]
      },
      {
        title: "Gestion de l'environnement en Chantier",
        submodules: [
          "La gestion des déchets : identification, tri (dangereux/non dangereux), traçabilité et filières de valorisation.",
          "Prévention des pollutions : Protection des eaux et des sols ( Cuvettes de rétention, aires de lavage ).",
          "Puissance de chantier : Gestion du Bruit, de la poussière et des relations avec le voisinage.",
          "Évaluation : Audit rapide de conformité environnement d'un Chantier."
        ]
      },
      {
        title: "Actions en Cas d'urgence et Audit",
        submodules: [
          "Procédure d'urgence : Que faire en cas d'accident grave ? Le rôle des sauveteurs secouristes du travail ou équivalent.",
          "Communication de crise : Comment informer les autorités et les médias.",
          "Les inspection et les visites : Préparation aux visites de l'inspection du travail et audits internes.",
          "Mise en situation pratique : Simulation d'une situation d'urgence sur un espace et exercices de remplissage d'un rapport d'incident."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Management, Sécurité et Juridique',
    certification: ['Attestation de formation délivrée', 'Habilitation Travaux en Hauteur'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'gc-btp-qhse',
    title: "QHSE",
    shortDescription: "Comprendre et appliquer les règles SST et environnementales pour garantir la sécurité et la conformité des chantiers.",
    description: "Programme complet sur la réglementation SSE, l'évaluation des risques, la gestion des déchets et la prévention des pollutions. Exercices pratiques, mise en situation d'urgence et préparation aux audits et visites réglementaires.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/8488021/pexels-photo-8488021.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Règlementation & Prévention : Identifier les obligations légales ( employeur, intervenants) en matière de SSE et déployer une politique de prévention des risques professionnels conforme aux normes en vigueur",
      "Évaluation des Risques : Réaliser un Document Unique d'évaluation des risques Professionnels et Analyser les risques spécifiques au BTP ( Travail en hauteur, coactivité, manutention, risques chimiques).",
      "Environnement : Gérer et tracer les déchets de chantier, maîtriser la réglementation ICPE ( Installations classées pour la Protection de l'environnement)  et prévenir les pollutions accidentelles.",
      "Intervention : Coordonner la sécurité entre différents entreprises ( plan de prévention, PPSPS) et intervenir efficacement en cas d'accident ou de situation d'urgence."
    ],
    targetAudience: [
      'Tous intervenants'
    ],
    competences: [
      "Santé et sécurité dans le chantier",
      "Gestion des déchets chantier",
      "EIES",
      "PGES"
    ],
    modules: [
      {
        title: "Le cadre Réglementaire et les Enjeux",
        submodules: [
          "Le code du travail et les responsabilités : Obligations de l'employeur, du chef de chantier, et des salariés.",
          "Les acteurs de la prévention : Rôle de l'inspection du travail, de la CARSAT, du Coordonnateur SPS ( Sécurité et Protection de la santé).",
          "Les documents clés : Maîtrise et mise à jour du DUERP ( Document Unique d'évaluation des Risques) et du PPSPS ( Plan Particulier de Sécurité et de Protection de la santé). ",
          "Le coût de l'insécurité : Analyse des accidents du travail et des maladies professionnelles dans le BTP"
        ]
      },
      {
        title: 'Évaluation et Gestion des Risques Spécifiques au BTP',
        submodules: [
          "Travail en hauteur : Choix des équipements de protection collective ( EPC ) et Individuelle ( EPI) ; réglementation sur les échafaudages, les nacelles, et les moyens antichute.",
          "Risques physiques : Manutention ( port de charges, TMS), risques électriques ( habilitation théorique), bruit et vibrations.",
          "Risques chimiques : Animante, plomb, poussières de silice ( gestion des fiches de données de sécurité - FDS ).",
          "La coactivité : Mise en place et suivi du plan de prévention lors de l'intervention d'entreprise extérieures.",
          "Atelier : vérification et utilisation des EPI antichute, analyse de situation à risques sur plan ou simulation"
        ]
      },
      {
        title: "Gestion de l'environnement en Chantier",
        submodules: [
          "La gestion des déchets : identification, tri (dangereux/non dangereux), traçabilité et filières de valorisation.",
          "Prévention des pollutions : Protection des eaux et des sols ( Cuvettes de rétention, aires de lavage ).",
          "Puissance de chantier : Gestion du Bruit, de la poussière et des relations avec le voisinage.",
          "Évaluation : Audit rapide de conformité environnement d'un Chantier."
        ]
      },
      {
        title: "Actions en Cas d'urgence et Audit",
        submodules: [
          "Procédure d'urgence : Que faire en cas d'accident grave ? Le rôle des sauveteurs secouristes du travail ou équivalent.",
          "Communication de crise : Comment informer les autorités et les médias.",
          "Les inspection et les visites : Préparation aux visites de l'inspection du travail et audits internes.",
          "Mise en situation pratique : Simulation d'une situation d'urgence sur un espace et exercices de remplissage d'un rapport d'incident."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Management, Sécurité et Juridique',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false
  },
  {
    id: 'gc-btp-maitrise-droit-marches-publics-prives-ccag-ccap',
    title: "Maitrise du Droit des Marchés Publics et Privés (CCAG, CCAP)",
    shortDescription: "Maîtrisez le cadre juridique des marchés publics et privés pour une meilleure contractualisation en BTP.",
    description: "Formation approfondie sur les contrats publics (CCAG), les cahiers des charges, les obligations contractuelles et la gestion des litiges. Conseils pratiques pour sécuriser vos contrats.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/8488021/pexels-photo-8488021.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Comprendre le cadre juridique des marchés publics et privés.",
      "Maîtriser les spécificités des CCAG et CCAP.",
      "Savoir rédiger des clauses contractuelles claires et conformes.",
      "Être capable de gérer les litiges et de sécuriser les relations contractuelles."
    ],
    targetAudience: [
      'Juristes',
      'Responsables administratifs',
      'Chefs de projet',
      'Conducteurs de travaux'
    ],
    competences: [],
    modules: [
      {
        title: "Le cadre Réglementaire et les Enjeux",
        submodules: [
          "Les fondements juridiques des marchés publics et privés.",
          "Les acteurs et leur rôle dans le processus de commande publique.",
          "Les documents contractuels de base."
        ]
      },
      {
        title: 'Évaluation et Gestion des Risques Spécifiques au BTP',
        submodules: [
          "Travail en hauteur : Choix des équipements de protection collective ( EPC ) et Individuelle ( EPI) ; réglementation sur les échafaudages, les nacelles, et les moyens antichute.",
          "Risques physiques : Manutention ( port de charges, TMS), risques électriques ( habilitation théorique), bruit et vibrations.",
          "Risques chimiques : Animante, plomb, poussières de silice ( gestion des fiches de données de sécurité - FDS ).",
          "La coactivité : Mise en place et suivi du plan de prévention lors de l'intervention d'entreprise extérieures.",
          "Atelier : vérification et utilisation des EPI antichute, analyse de situation à risques sur plan ou simulation"
        ]
      },
      {
        title: "Gestion de l'environnement en Chantier",
        submodules: [
          "La gestion des déchets : identification, tri (dangereux/non dangereux), traçabilité et filières de valorisation.",
          "Prévention des pollutions : Protection des eaux et des sols ( Cuvettes de rétention, aires de lavage ).",
          "Puissance de chantier : Gestion du Bruit, de la poussière et des relations avec le voisinage.",
          "Évaluation : Audit rapide de conformité environnement d'un Chantier."
        ]
      },
      {
        title: "Actions en Cas d'urgence et Audit",
        submodules: [
          "Procédure d'urgence : Que faire en cas d'accident grave ? Le rôle des sauveteurs secouristes du travail ou équivalent.",
          "Communication de crise : Comment informer les autorités et les médias.",
          "Les inspection et les visites : Préparation aux visites de l'inspection du travail et audits internes.",
          "Mise en situation pratique : Simulation d'une situation d'urgence sur un espace et exercices de remplissage d'un rapport d'incident."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Management, Sécurité et Juridique',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'gc-btp-diagnostic-desordres-techniques-reparation-structures',
    title: "Diagnostic des désordres et techniques de réparation des structures",
    shortDescription: "Identifiez les pathologies des bâtiments et appliquez les solutions de réparation structurelle appropriées.",
    description: "Formation sur l'identification des fissures, des infiltrations, de la corrosion et des dégradations. Apprentissage des techniques de diagnostic et des solutions de renforcement et réparation structurelle.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/8488021/pexels-photo-8488021.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Règlementation & Prévention : Identifier les obligations légales ( employeur, intervenants) en matière de SSE et déployer une politique de prévention des risques professionnels conforme aux normes en vigueur",
      "Évaluation des Risques : Réaliser un Document Unique d'évaluation des risques Professionnels et Analyser les risques spécifiques au BTP ( Travail en hauteur, coactivité, manutention, risques chimiques).",
      "Environnement : Gérer et tracer les déchets de chantier, maîtriser la réglementation ICPE ( Installations classées pour la Protection de l'environnement)  et prévenir les pollutions accidentelles.",
      "Intervention : Coordonner la sécurité entre différents entreprises ( plan de prévention, PPSPS) et intervenir efficacement en cas d'accident ou de situation d'urgence."
    ],
    targetAudience: [
      "Experts Bâtiment",
      "Chef de Chantier",
      "Conducteurs de travaux"
    ],
    competences: [
      "Pathologie des structures"
    ],
    modules: [
      {
        title: "Le cadre Réglementaire et les Enjeux",
        submodules: [
          "Le code du travail et les responsabilités : Obligations de l'employeur, du chef de chantier, et des salariés.",
          "Les acteurs de la prévention : Rôle de l'inspection du travail, de la CARSAT, du Coordonnateur SPS ( Sécurité et Protection de la santé).",
          "Les documents clés : Maîtrise et mise à jour du DUERP ( Document Unique d'évaluation des Risques) et du PPSPS ( Plan Particulier de Sécurité et de Protection de la santé). ",
          "Le coût de l'insécurité : Analyse des accidents du travail et des maladies professionnelles dans le BTP"
        ]
      },
      {
        title: 'Évaluation et Gestion des Risques Spécifiques au BTP',
        submodules: [
          "Travail en hauteur : Choix des équipements de protection collective ( EPC ) et Individuelle ( EPI) ; réglementation sur les échafaudages, les nacelles, et les moyens antichute.",
          "Risques physiques : Manutention ( port de charges, TMS), risques électriques ( habilitation théorique), bruit et vibrations.",
          "Risques chimiques : Animante, plomb, poussières de silice ( gestion des fiches de données de sécurité - FDS ).",
          "La coactivité : Mise en place et suivi du plan de prévention lors de l'intervention d'entreprise extérieures.",
          "Atelier : vérification et utilisation des EPI antichute, analyse de situation à risques sur plan ou simulation"
        ]
      },
      {
        title: "Gestion de l'environnement en Chantier",
        submodules: [
          "La gestion des déchets : identification, tri (dangereux/non dangereux), traçabilité et filières de valorisation.",
          "Prévention des pollutions : Protection des eaux et des sols ( Cuvettes de rétention, aires de lavage ).",
          "Puissance de chantier : Gestion du Bruit, de la poussière et des relations avec le voisinage.",
          "Évaluation : Audit rapide de conformité environnement d'un Chantier."
        ]
      },
      {
        title: "Actions en Cas d'urgence et Audit",
        submodules: [
          "Procédure d'urgence : Que faire en cas d'accident grave ? Le rôle des sauveteurs secouristes du travail ou équivalent.",
          "Communication de crise : Comment informer les autorités et les médias.",
          "Les inspection et les visites : Préparation aux visites de l'inspection du travail et audits internes.",
          "Mise en situation pratique : Simulation d'une situation d'urgence sur un espace et exercices de remplissage d'un rapport d'incident."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Techniques de Construction et Structure',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'gc-btp-dimensionnement-structures-beton-arme-eurocodes',
    title: "Dimensionnement des structures en Béton Armé selon les Eurocodes / Structures métallique",
    shortDescription: "Maîtrisez le calcul et le dimensionnement des structures béton et acier en conformité avec les Eurocodes.",
    description: "Formation techniques sur les Eurocodes 2 (béton) et 3 (acier), les méthodes de calcul et la vérification de la résistance. Utilisation d'outils informatiques et études de cas pratiques.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/8488021/pexels-photo-8488021.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Comprendre les Eurocodes et leur application au dimensionnement des structures.",
      "Savoir dimensionner une structure en béton armé selon l'Eurocode 2.",
      "Savoir dimensionner une structure métallique selon l'Eurocode 3.",
      "Être capable d'utiliser des logiciels de calcul de structures."
    ],
    targetAudience: [
      'Ingénieurs structure',
      "Bureaux d'études",
      'Techniciens de calcul',
      'Conducteurs de travaux'
    ],
    competences: [
      "Calcul de structures"
    ],
    modules: [
      {
        title: "Le cadre Réglementaire et les Enjeux",
        submodules: [
          "Le code du travail et les responsabilités : Obligations de l'employeur, du chef de chantier, et des salariés.",
          "Les acteurs de la prévention : Rôle de l'inspection du travail, de la CARSAT, du Coordonnateur SPS ( Sécurité et Protection de la santé).",
          "Les documents clés : Maîtrise et mise à jour du DUERP ( Document Unique d'évaluation des Risques) et du PPSPS ( Plan Particulier de Sécurité et de Protection de la santé). ",
          "Le coût de l'insécurité : Analyse des accidents du travail et des maladies professionnelles dans le BTP"
        ]
      },
      {
        title: 'Évaluation et Gestion des Risques Spécifiques au BTP',
        submodules: [
          "Travail en hauteur : Choix des équipements de protection collective ( EPC ) et Individuelle ( EPI) ; réglementation sur les échafaudages, les nacelles, et les moyens antichute.",
          "Risques physiques : Manutention ( port de charges, TMS), risques électriques ( habilitation théorique), bruit et vibrations.",
          "Risques chimiques : Animante, plomb, poussières de silice ( gestion des fiches de données de sécurité - FDS ).",
          "La coactivité : Mise en place et suivi du plan de prévention lors de l'intervention d'entreprise extérieures.",
          "Atelier : vérification et utilisation des EPI antichute, analyse de situation à risques sur plan ou simulation"
        ]
      },
      {
        title: "Gestion de l'environnement en Chantier",
        submodules: [
          "La gestion des déchets : identification, tri (dangereux/non dangereux), traçabilité et filières de valorisation.",
          "Prévention des pollutions : Protection des eaux et des sols ( Cuvettes de rétention, aires de lavage ).",
          "Puissance de chantier : Gestion du Bruit, de la poussière et des relations avec le voisinage.",
          "Évaluation : Audit rapide de conformité environnement d'un Chantier."
        ]
      },
      {
        title: "Actions en Cas d'urgence et Audit",
        submodules: [
          "Procédure d'urgence : Que faire en cas d'accident grave ? Le rôle des sauveteurs secouristes du travail ou équivalent.",
          "Communication de crise : Comment informer les autorités et les médias.",
          "Les inspection et les visites : Préparation aux visites de l'inspection du travail et audits internes.",
          "Mise en situation pratique : Simulation d'une situation d'urgence sur un espace et exercices de remplissage d'un rapport d'incident."
        ]
      }
    ],
    category: 'Génie Civil et BTP',
    subCategory: 'Techniques de Construction et Structure',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false
  },
  // II - Industrie et Maintenance

  // 1. Sécurité Industrielle
  {
    id: 'im-prevention-installations-classees',
    title: "Prévention des installations classées ( Industrielle)",
    shortDescription: "Maîtrisez la réglementation ICPE et assurez la conformité de votre établissement industriel.",
    description: "Formation complète sur le cadre réglementaire des installations classées pour la protection de l'environnement (ICPE). Apprenez à classer votre site, constituer les dossiers réglementaires, assurer le suivi opérationnel et préparer les inspections. Étude de cas pratiques et audit de conformité inclus.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      "Dirigeant d'entreprise industrielles",
      "Chargé d'affaires et chefs de projet",
      "Technicien de maintenance",
      "Responsables/Managers QSE"
    ],
    competences: [
      "ERP",
      "IGH",
      "Sécurité Incendie",
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Sécurité Industrielle',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: true,
    isVisible: false
  },
  {
    id: 'im-securite-incendie',
    title: "Sécurité incendie",
    shortDescription: "Maîtrisez la réglementation ICPE et assurez la conformité de votre établissement industriel.",
    description: "Formation complète sur le cadre réglementaire des installations classées pour la protection de l'environnement (ICPE). Apprenez à classer votre site, constituer les dossiers réglementaires, assurer le suivi opérationnel et préparer les inspections. Étude de cas pratiques et audit de conformité inclus.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      "Technicien incendie",
      "Responsables/Managers QSE"
    ],
    competences: [
      "Diagnostic, gestion et prévention des risques incendie",
      "Moyen de lutte Contre incendie"
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Sécurité Industrielle',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false
  },

  // 2. Management Industriel et Amélioration Continue
  {
    id: 'im-methodes-5s-vsm-kaizen-optimisation-flux',
    title: " Méthodes 5S, VSM ( Value Stream Mapping ) et Kaizen pour l'optimisation des flux",
    shortDescription: "Maîtrisez la réglementation ICPE et assurez la conformité de votre établissement industriel.",
    description: "Formation complète sur le cadre réglementaire des installations classées pour la protection de l'environnement (ICPE). Apprenez à classer votre site, constituer les dossiers réglementaires, assurer le suivi opérationnel et préparer les inspections. Étude de cas pratiques et audit de conformité inclus.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      "Chefs d'équipe",
      "Responsables de Production"
    ],
    competences: [
      "Lean Manufacturing"
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Management Industriel et Amélioration Continue',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false
  },
  {
    id: 'im-optimisation-systemes-erp-gpao',
    title: "Optimisation des Systèmes ERP/GPAO (Gestion de la Production Assistée par Ordinateur).",
    shortDescription: "Maîtrisez la réglementation ICPE et assurez la conformité de votre établissement industriel.",
    description: "Formation complète sur le cadre réglementaire des installations classées pour la protection de l'environnement (ICPE). Apprenez à classer votre site, constituer les dossiers réglementaires, assurer le suivi opérationnel et préparer les inspections. Étude de cas pratiques et audit de conformité inclus.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      "Planificateurs",
      "Responsables logistique"
    ],
    competences: [
      "Gestion de Production"
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Management Industriel et Amélioration Continue',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false
  },
  {
    id: 'im-mise-en-place-norme-iso-45001-14001',
    title: "Mise en Place de la norme ISO 45001 ( Santé/Sécurité) et ISO 14001 ( Environnement).",
    shortDescription: "Maîtrisez la réglementation ICPE et assurez la conformité de votre établissement industriel.",
    description: "Formation complète sur le cadre réglementaire des installations classées pour la protection de l'environnement (ICPE). Apprenez à classer votre site, constituer les dossiers réglementaires, assurer le suivi opérationnel et préparer les inspections. Étude de cas pratiques et audit de conformité inclus.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      "Responsable/Managers QSE "
    ],
    competences: [
      "Santé/Sécurité et environnement en milieu industriel"
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Management Industriel et Amélioration Continue',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false
  },

  // 3. Maintenance et Fiabilité ( Prédictive) 
  {
    id: 'im-analyse-vibratoire-niveau-1-2-diagnostic-machines-tournantes',
    title: "Analyse Vibratoire Niveau 1 et 2 pour le diagnostic des machines tournantes",
    shortDescription: "Maîtrisez la réglementation ICPE et assurez la conformité de votre établissement industriel.",
    description: "Formation complète sur le cadre réglementaire des installations classées pour la protection de l'environnement (ICPE). Apprenez à classer votre site, constituer les dossiers réglementaires, assurer le suivi opérationnel et préparer les inspections. Étude de cas pratiques et audit de conformité inclus.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      "Techniciens de maintenance",
      "Ingénieurs"
    ],
    competences: [
      "Maintenance Prédictive"
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Maintenance et Fiabilité ( Prédictive)',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'im-maitrise-analyse-causale-amdec-rcm-reliability-centered-maintenance',
    title: "Maîtrise de l'analyse causale ( AMDEC) et du RCM (Reliability-Centered Maintenance)",
    shortDescription: "Optimisez vos stratégies de maintenance avec l'AMDEC et le RCM pour améliorer la fiabilité des systèmes.",
    description: "Formation sur la méthodologie d'analyse des modes de défaillance (AMDEC) et la maintenance centrée sur la fiabilité (RCM). Application à des cas réels pour une meilleure prise de décision maintenance.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      "Responsable maintenance",
      "Ingénieurs"
    ],
    competences: [
      "Maîtrise des méthodes d'analyse Industrielle"
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Maintenance et Fiabilité ( Prédictive)',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'im-depannage-avance-systemes-variation-vitesse-moteurs-asynchrones',
    title: "Dépannage avancé des systèmes de variation de vitesse et des moteurs asynchrones",
    shortDescription: "Maîtrisez le diagnostic et la réparation des variateurs et moteurs asynchrones en environnement industriel.",
    description: "Formation pratique sur les variateurs de fréquence, la motorisation asynchrone et les techniques de dépannage avancé. Cas pratiques et exercices sur équipements réels.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      "Techniciens de maintenance",
      "Électrotechniciens "
    ],
    competences: [
      "Électrotechnique"
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Maintenance et Fiabilité ( Prédictive)',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'im-programmation-depannage-api-siemens-s7',
    title: "Programmation et Dépannage des API Siemens ( S7)",
    shortDescription: "Développez vos compétences en programmation d'automates Siemens pour l'automatisation industrielle.",
    description: "Formation complète sur la programmation en STEP 7, la création de blocs fonctionnels et le dépannage des automates Siemens. Travaux pratiques sur logiciel et matériel.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      'Techniciens de maintenance',
      'Ingénieurs'
    ],
    competences: [
      "Automates Programmables"
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Automatisation et Systèmes industriels',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'im-initiation-programmation-robots-industriels-fanuc-kuka-abb-cobots',
    title: "Initiation à la programmation de Robots Industriels ( FANUC, KUKA, ABB) et Cobots",
    shortDescription: "Apprenez à programmer et utiliser les robots industriels et collaboratifs pour l'automatisation de la production.",
    description: "Formation complète sur la programmation des principaux robots du marché (FANUC, KUKA, ABB) et des cobots. Apprentissage du langage propriétaire et des procédures de sécurité.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      'Opérateurs',
      'Techniciens en Robotique'
    ],
    competences: [
      "Robotique"
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Automatisation et Systèmes industriels',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },
  {
    id: 'im-conception-utilisation-systemes-scada-ihm',
    title: "Conception et utilisation des systèmes SCADA et IHM ( Interfaces Homme-Machine)",
    shortDescription: "Créez et optimisez les interfaces de supervision pour une meilleure pilotage des installations industrielles.",
    description: "Formation sur la conception d'interfaces SCADA/HMI, la supervision des processus et l'intégration avec les automates. Utilisation de logiciels courants (Wonderware, Factory Talk, Ignition).",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Compréhension légale : Identifier la réglementation ICPE applicable à son site ( Déclaration, Enregistrement, Automatisation) et déterminer le statut de son Installation.",
      "Gestion des Risques : Élaborer et mettre à jour le Plan d'opération interne ( POI) et maîtriser la méthode d'évaluation des risques liés aux ICPE.",
      "Conformité Opérationnelle : Assurer le suivi des contrôles périodiques, la gestion des non - conformités, et rédiger les documents réglementaires obligatoires.",
      "Veille et Communication : Mettre en place une veille réglementaire efficace et assurer la communication avec les autorités administratives."
    ],
    targetAudience: [
      'Ingénieurs de production',
      'Techniciens de maintenance',
      'Responsables de site'
    ],
    competences: [
      "Supervision"
    ],
    modules: [
      {
        title: "Le cadre réglementaire ICPE",
        submodules: [
          "Introduction aux ICPE : Historique, objectifs (prévention des risques et des nuisances).",
          "Les trois régimes de classement : Déclaration, Enregistrement et Autorisation ( Seveso seuil haut/bas en survol).",
          "Méthodologie de classement : Comment Identifier les rubriques ICPE applicables à son site ( les seuils, les activités concernées).",
          "Étude de cas : Classement d'un site industriel simple"
        ]
      },
      {
        title: 'Montage des Dossiers et Demandes',
        submodules: [
          "Le Dossier de Demande d'autorisation ( DDA) : Contenu et exigences des études ( Étude de dangers, Étude D'impact).",
          "Règles d'éloignement : La maîtrise de l'urbanisme et des documents d'urbanisme.",
          "Phase Instruction et Décision : Consultation du public, rôle de la DREAL et de la préfecture.",
          "Gestion des modifications : Que faire en cas de changement d'activité ou d'extension"
        ]
      },
      {
        title: "Suivi Opérationnel et Maîtrise des Risques",
        submodules: [
          "les contrôles et Inspections : Préparation aux visites de l'inspection des ICPE.",
          "Les obligations permanent ; tenue des registres, autocontrôle ( rejets aqueux, atmosphériques).",
          "La prévention des accidents : Organisation de la sécurité, mise en place du POI ( plan d'opération Interne ) et exercices de simulation de crise.",
          "Gestion des non-conformités et des incidents: Procédure de déclaration d'un incident ou d'une pollution accidentelle."
        ]
      },
      {
        title: "La veille Réglementaire et Audit ",
        submodules: [
          "méthode de veille : Comment suivre l'évolution des arrêtés ministériels et des prescriptions locales.",
          "L'audit de conformité : Mener un audit interne pour évaluer le niveau de conformité de l'établissement par rapport aux prescriptions de l'arrêté préfectoral.",
          "Évaluation finale : Présentation d'un plan d'action ICPE pour le site de l'apprenant."
        ]
      }
    ],
    category: 'Industrie et Maintenance',
    subCategory: 'Automatisation et Systèmes industriels',
    certification: ['Attestation de formation délivrée'],
    isHomeDisplay: false,
    isVisible: false,
  },

  // III - Pétrole
    // 1. Sécurité industrielle, Qualité et Environnement
  {
    id: 'petrole-formation-hse-levels-1-2-4-permis-travail',
    title: "Formations HSE Levels 1, 2,4 et Permis de Travail",
    shortDescription: "Maîtrisez la réglementation ICPE et assurez la conformité de votre établissement industriel.",
    description: "Formation complète sur le cadre réglementaire des installations classées pour la protection de l'environnement (ICPE). Apprenez à classer votre site, constituer les dossiers réglementaires, assurer le suivi opérationnel et préparer les inspections. Étude de cas pratiques et audit de conformité inclus.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 35,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://www.shutterstock.com/image-vector/hse-health-safety-environment-acronym-260nw-1499185475.jpg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Reconnaître et évaluer les risques courant en milieu industriel ( Chutes, incendie, électricité, produits chimiques)  et appliquer les procédures d'urgence de base.",
      "Comprendre le Système de permis de travail, rédiger /Valider un permis pour les travaux à risques ( points chauds, Espace Confiné).",
      "Maîtriser l'utilisation des équipements de protection individuelle (EPI ) spécifiques aux tâches à haut risque et intégrer la culture de la sécurité au quotidien.",
      "Respecter les règles de sécurité, de santé et d'environnement dictées par les réglementations locales et les standards internationaux des compagnies pétrolières/minières."
    ],
    targetAudience: [
      "HSE 1 ( Opérateur/Induction): Tout Nouvel employé, Sous-traitant accèdent à un site industriel.",
      "HSE 2 & 3 ( Superviseur/Encadrement): Chef d'équipe, Superviseur HSE",
      "Permis de travail : Personnel designer pour initier , valider ou contrôler des travaux non routinier à haut risque."
    ],
    competences: [],
    modules: [
      {
        title: "HSE level 1 ( Sécurité Fondamentale Opérateur)",
        submodules: [
          "Culture et Responsabilité : La pyramide des accidents, le droit de retrait, l'obligation d'alerte.",
          "Risques de base : Chutes de hauteur et de plein-pied, risques mécaniques ( machines tournantes), risques électriques ( base).",
          "Équipements de protection : Utilisation et entretien des EPI de base ( casque, lunettes, chaussures, gants ).",
          "Gestion d'urgence : Procédure d'alerte, lieux de rassemblement, utilisation d'un extincteur."
        ]
      },
      {
        title: "HSE level 2 & 3 ( Sécurité pour l'encadrement et L'environnement)",
        submodules: [
          "Règlementation : les obligations légales de l'encadrement et la gestion de la sous-traitance.",
          "Évaluation des risques : Méthodologie du Document Unique et de l'analyse des risques au poste de travail ( JSA/TRA).",
          "Environnement et Santé : Gestion des déchets, prévention des pollutions, risques ergonomique (TMS) et stress.",
          "Analyse d'accident : Méthode de l'arbre des  causes et mise en place d'actions correctives.",
          "Leadership HSE : Rôle du superviseur dans la promotion d'une culture sécurité positive."
        ]
      },
      {
        title: "Le système de permis de travail",
        submodules: [
          "Principes et Enjeux ; Pourquoi un permis, qui peut le demander, qui peut l'autoriser ( rôles et responsabilités).",
          "Le Processus PTW : Demande, Évaluation/Préparation, Autorisation, Exécution, Suspension/ Annulation, clôture.",
          "Conflits et Co-Activité: Comment le Permis de travail gère la superposition des travaux et les interférences."
        ]
      },
      {
        title: "Permis de travail Spécifiques et à Haut Risque",
        submodules: [
          "Permis Point Chaud ( Travaux par Feu) : Définition, mesures de prévention obligatoires ( nappe ignifuge, extincteur, veilleur feu ) et procédure de fin de travail.",
          "Permis Espace Confiné : Définition ( Risques atmosphériques, d' ensevelissement) rôle du surveillant, Ventilation, et gestion de l'intervention de secours.",
          "Permis Électrique ( Cadenassage) Lock-out - Tagout ): Procédure de consignation et de de consignation des énergies ( mécaniques, électrique, hydraulique)."
        ]
      }
    ],
    category: 'Pétrole',
    subCategory: 'Sécurité industrielle, Qualité et Environnement',
    certification: ["Attestation de formation délivrée", "Certificat de réussite aux Niveau HSE level 1, 2, 3 et Attestation de formation 'Permis de Travail: Opérateur et Demandeur"],
    isHomeDisplay: true,
    isVisible: true,
  },
  {
    id: 'petrole-securite-incendie-avancee-lutte-contre-feux-hydrocarbures',
    title: "Sécurité Incendie Avancée ( Lutte contre les feux d'hydrocarbures)",
    shortDescription: "Maîtrisez la réglementation ICPE et assurez la conformité de votre établissement industriel.",
    description: "Formation complète sur le cadre réglementaire des installations classées pour la protection de l'environnement (ICPE). Apprenez à classer votre site, constituer les dossiers réglementaires, assurer le suivi opérationnel et préparer les inspections. Étude de cas pratiques et audit de conformité inclus.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 30,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/5965196/pexels-photo-5965196.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Comprendre les phénomènes thermiques complexes, spécifiques aux feux de produits pétroliers et de gaz",
      "Choisir la stratégie d'extinction appropriée (refroidissement, étouffement, dilution) en fonction de la classe de feu",
      "Utiliser efficacement les équipements d'intervention lourds",
      "Intervenir en sécurité au sein d'une équipe, sous protection respiratoire, et coordonner l'action avec un PC de crise"
    ],
    targetAudience: [
      "Personnel affecté aux équipes de sécurité incendie du site",
      "technicien d'exploitation et de maintenance sur plateforme offshore",
      "Raffineries"
    ],
    competences: [],
    modules: [
      {
        title: "Les hydrocarbures et le Feu",
        submodules: [
          "Phénomènes spécifiques aux feux de liquides et de gaz, Dangers ( explosion, rayonnement thermique).",
          "Classification des agents extincteurs et normes d'application."
        ]
      },
      {
        title: "Les Moyens hydrauliques",
        submodules: [
          "Calcul de débits",
          "Choix des lances ( diffuseur, jet plein. Et ajutage.",
          "Travail en binôme pour la tenue et la déplacement des lances sous pression."
        ]
      },
      {
        title: "Extinction Avancée",
        submodules: [
          "Mise en œuvre des générateurs de mousse et applications tactique"
        ]
      },
      {
        title: "Intervention en Sécurité",
        submodules: [
          "Utilisation de l'appareil Respiratoire isolant : Vérification, enfilage, procédures d'urgence et sauvetage d'un coéquipiers sous ARI."
        ]
      }
    ],
    category: 'Pétrole',
    subCategory: 'Sécurité industrielle, Qualité et Environnement',
    certification: ['Attestation de formation délivrée', "Certificat d'équipier d'intervention Avancée/ Pompier industrielle de Première ligne"],
    isHomeDisplay: true,
    isVisible: true,
  },
   {
    id: 'petrole-sauvetage-secourisme-milieu-isole',
    title: "Sauvetage et Secourisme en Milieu Isolé",
    shortDescription: "Formez-vous aux techniques de sauvetage et secourisme adaptées aux environnements isolés et aux zones d'exploitation.",
    description: "Formation complète en sauvetage et secourisme en milieu isolé, couvrant l'évaluation rapide des patients, la gestion des urgences vitales, le traitement des traumatismes graves et les procédures d'évacuation sanitaire. Cette formation prépare les équipes à gérer les situations d'urgence médicale sur les sites éloignés où l'assistance médicale n'est pas immédiatement disponible.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 35,
    cost: "200 000 FCFA (€ 305)",
    startDate: new Date('2026-01-15'),
    image: 'https://images.pexels.com/photos/8943252/pexels-photo-8943252.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectives: [
      "Évaluer rapidement un patient ( primaire et secondaire) et stabiliser les fonctions vitales en attendant l'évacuation.",
      "Prendre en charge les blessures graves avec des ressources limitées",
      "Gérer l'état d'un patient sur plusieurs heures ( douleur, hypothermie, hydratation ) en l'absence de médecin",
      "Déclencher une évacuation sanitaire, préparer le patient pour le transport et communiquer efficacement avec l'équipe médicale a distance"
    ],
    targetAudience: [
      "Personnel HSE",
      "Personnel médical",
      "Chefs d'équipe",
      "Technicien"
    ],
    competences: [],
    modules: [
      {
        title: "Évaluation et Urgences Vitales",
        submodules: [
          "Protocole d'intervention en milieu isolé.",
          "Gestion des voies respiratoires, réanimation cardio-pulmonaire avancée."
        ]
      },
      {
        title: "Gestion des Traumatismes",
        submodules: [
          "Prise en charge des brûlures thermiques et chimiques",
          "Immobilisations des fractures et lésions spinales."
        ]
      },
      {
        title: "Urgences Médicales Spécifiques",
        submodules: [
          "Reconnaissance et Traitement initial de l'infarctus. AVC, chocs anaphylactiques, et maladies tropicales (paludisme, déshydratation)."
        ]
      },
      {
        title: "Soins Prolongés et Évacuation",
        submodules: [
          "Gestion de la trousse de secours avancée et des médicaments.",
          "Techniques de conditionnement (emballage) du patient pour évacuation terrestre ou héliportée."
        ]
      }
    ],
    category: 'Pétrole',
    subCategory: 'Sécurité industrielle, Qualité et Environnement',
    certification: ['Attestation de formation délivrée', "Certificat de Secouriste en Milieu Isolé"],
    isHomeDisplay: true,
    isVisible: true,
  },
];
