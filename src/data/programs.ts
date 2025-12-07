export interface Program {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: string;
  months: number;
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
  certification: string;
  isHomeDisplay: boolean;
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

  // Génie Civil et BTP

  {
    id: 'gc-btp-construction-bas-carbone-materiaux-biosources',
    title: "Construction Bas Carbone et Matériaux Biosourcés ( Bois, Chanvre, paille )",
    shortDescription: "Maîtrisez l'intégration des matériaux biosourcés et les approches bas carbone pour concevoir des bâtiments durables.",
    description: "Cette formation présente les enjeux carbone du secteur BTP et les méthodes pratiques pour concevoir, prescrire et mettre en œuvre des solutions biosourcées (bois, chanvre, paille). Vous apprendrez l'analyse du cycle de vie, la réglementation, le dimensionnement et l'évaluation économique à travers études de cas et retours d'expérience.",
    duration: '5 jours complets et 2 à 4 semaines en format hybride',
    months: 0,
    level: 'Hybride',
    hours: 35,
    cost: "300 000",
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
      'Bureaux d’études thermiques'
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
    certification: 'Diplôme reconnu CCBI',
    isHomeDisplay: true,
  },

  {
    id: 'gc-btp-construction-gestion-chantier-opc',
    title: "Gestion de Chantier : Planification, Ordonnancement et Pilotage (OPC)",
    shortDescription: "Acquérez les méthodes et outils pour planifier, ordonnancer et piloter efficacement un chantier (OPC).",
    description: "Formation pratique couvrant la planification, l'identification du chemin critique, l'ordonnancement et le pilotage opérationnel. Ateliers sur MS Project/Primavera, gestion des risques et coordination inter-entreprises via cas concrets de chantier.",
    duration: 'Typiquement 4 jours complets où 3 semaines',
    months: 0,
    level: 'Hybride',
    hours: 28,
    cost: "300 000",
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
    certification: 'Diplôme reconnu CCBI',
    isHomeDisplay: true,
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
    cost: "200 000",
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
    certification: 'Diplôme reconnu CCBI',
    isHomeDisplay: true,
  },

  // Industrie et Maintenance
  {
    id: 'im-prevention-installations-classees',
    title: "Prévention des installations classées ( Industrielle)",
    shortDescription: "Maîtrisez la réglementation ICPE et assurez la conformité de votre établissement industriel.",
    description: "Formation complète sur le cadre réglementaire des installations classées pour la protection de l'environnement (ICPE). Apprenez à classer votre site, constituer les dossiers réglementaires, assurer le suivi opérationnel et préparer les inspections. Étude de cas pratiques et audit de conformité inclus.",
    duration: 'Typiquement 3 jours complets',
    months: 0,
    level: 'Hybride',
    hours: 21,
    cost: "200 000",
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
    certification: 'Diplôme reconnu CCBI',
    isHomeDisplay: true,
  },

];
