
import graphPlotlySmall from '../assets/screenshots/graphPlotlySmall.png';
import eShopHomeSmall from '../assets/screenshots/eShopHomeSmall.png';
import receiptPythonPooSmall from '../assets/screenshots/receiptPythonPooSmall.png';
import network from '../assets/screenshots/network.png';

import cvEnLigne from '../assets/screenshots/cvEnLigne.png';

import averageCustomerSatisfaction from '../assets/images/galleries/graphsPython/averageCustomerSatisfaction.png';
import averageDeliveryTime from '../assets/images/galleries/graphsPython/averageDeliveryTime.png';
import monthlyRevenue from '../assets/images/galleries/graphsPython/monthlyRevenue.png';
import productsRanking from '../assets/images/galleries/graphsPython/productsRanking.png';
import salesByBrand from '../assets/images/galleries/graphsPython/salesByBrand.png';
import salesByChannel from '../assets/images/galleries/graphsPython/salesByChannel.png';
import salesByProduct from '../assets/images/galleries/graphsPython/salesByProduct.png';
import salesByRegion from '../assets/images/galleries/graphsPython/salesByRegion.png';

import confirmOrder from '../assets/images/galleries/appSymfony/confirmOrder.png';
import dashboardAdmin from '../assets/images/galleries/appSymfony/dashboardAdmin.png';
import userAccount from '../assets/images/galleries/appSymfony/userAccount.png';
import userAccountDetails from '../assets/images/galleries/appSymfony/userAccountDetails.png';
import miniShoppingCart from '../assets/images/galleries/appSymfony/miniShoppingCart.png';
import shoppingCart from '../assets/images/galleries/appSymfony/shoppingCart.png';
import useCaseEshop from '../assets/images/galleries/appSymfony/useCaseEshop.png';
import phoneModel from '../assets/images/galleries/appSymfony/phoneModel.png';
import db from '../assets/images/galleries/appSymfony/db.png';
import dbUser from '../assets/images/galleries/appSymfony/dbUser.png';
import userConnected from'../assets/images/galleries/appSymfony/userConnected.png';
import userRegistration from'../assets/images/galleries/appSymfony/userRegistration.png';
import diagActiviteSeConnecter from'../assets/images/galleries/appSymfony/diagActiviteSeConnecter.png';

import usersRights from '../assets/screenshots/usersRights.png';

import compteUtilisateur from '../assets/images/galleries/confReseau/compteUtilisateur.png';
import confServeurWind from '../assets/images/galleries/confReseau/confServeurWind.png';
import confVmGlpi from '../assets/images/galleries/confReseau/confVmGlpi.png';
import creationDossiers from '../assets/images/galleries/confReseau/creationDossiers.png';
import descripIncident from '../assets/images/galleries/confReseau/descripIncident.png';
import dossiersUtilisateurs from '../assets/images/galleries/confReseau/dossiersUtilisateurs.png';
import pingConnexion from '../assets/images/galleries/confReseau/pingConnexion.png';
import sansDroits from '../assets/images/galleries/confReseau/sansDroits.png';
import ticketEnCours from '../assets/images/galleries/confReseau/ticketEnCours.png';
import ticketUtilisateur from '../assets/images/galleries/confReseau/ticketUtilisateur.png';
import topoDhcp from '../assets/images/galleries/confReseau/topoDhcp.png';
import topoLan from '../assets/images/galleries/confReseau/topoLan.png';


import { ImConnection } from "react-icons/im";
import { BsCartCheck } from "react-icons/bs";
import { FaStripe } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaUsersCog } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { ImDatabase } from "react-icons/im";
import { FiBarChart2 } from "react-icons/fi";
import { FiPieChart } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";

import { FaServer } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdTerminal } from "react-icons/md";
import { RiNetworkFill } from "react-icons/ri";

const PROJECTS = [
// GRAPHIQUES PYTHON
  {
    slug: "data-analysis",

    title: "Graphiques | Analyse de données de ventes",
    
    subtitle: "Comment créaliser des diagrammes ?",

    image: graphPlotlySmall,

    hero: {
      title: "Analyses de données",
      subtitle: "Concevoir des graphiques par extraction de données",
      badges: ["Python", "Pandas", "Plotly"],
      content: "Une visualisation rapide des données permet de s'adapter au marché en temps réel",
      image: monthlyRevenue,
      // cta: "Voir le projet",
    },

    shortStack: "Python",

    fullStacks: [
      {stack: "Python"}, 
      {stack: "Pandas"}, 
      {stack: "Plotly"}
    ],
    
    shortDescription: "Graphismes interactifs",

    fullDescription: "Les graphiques permettent d'avoir une une vue d'ensemble rapide pour accélérer les prises de décisions",

    context: {
  title: "Le Contexte",
  category: "Projet personnel",
  content:
    "À partir d'un jeu de données de ventes dans un contexte dermo-cosmétique, l'objectif était d'explorer les données, d'en extraire des indicateurs pertinents et de les transformer en visualisations permettant de mieux comprendre l'activité."
},

contextCards: [
  {
    title: "Durée",
    content: "2 jours",
  },
  {
    title: "Technologies",
    content: "Python / Pandas / Plotly",
  },
  {
    title: "Niveau",
    content: "Intermédiaire",
  },
  {
    title: "Objectif",
    content: "Analyse et visualisation de données",
  }
],

objective: {
  title: "Objectifs",
  content:
    "Transformer des données brutes en informations lisibles afin d'identifier des tendances et de faciliter leur interprétation.",
},

objectiveCards: [
  {
    title: "Préparer les données",
    content:
      "Importer, explorer et nettoyer les données issues du fichier CSV afin de disposer d'un jeu de données exploitable.",
  },
  {
    title: "Analyser les ventes",
    content:
      "Explorer les données afin d'identifier des indicateurs et des tendances utiles à la compréhension de l'activité.",
  },
  {
    title: "Visualiser les résultats",
    content:
      "Créer des graphiques interactifs permettant de rendre les résultats plus lisibles et plus faciles à interpréter.",
  }
],

approach: {
  title: "Ma démarche",
  content:
    "J'ai abordé le projet comme une analyse de données de bout en bout, de la préparation du fichier source jusqu'à la restitution visuelle des résultats.",
},

approachCards: [
  {
    title: "Explorer",
    content:
      "Découvrir la structure du jeu de données et identifier les informations disponibles avant de commencer l'analyse.",
  },
  {
    title: "Préparer",
    content:
      "Nettoyer et préparer les données avec Pandas afin de pouvoir les exploiter de manière fiable.",
  },
  {
    title: "Analyser",
    content:
      "Sélectionner et croiser les informations pertinentes pour faire ressortir des indicateurs et tendances.",
  },
  {
    title: "Restituer",
    content:
      "Transformer les résultats en visualisations interactives avec Plotly afin de faciliter leur lecture.",
  },
],

feature: {
  title: "Fonctionnalités",
  content:
    "Le projet propose une analyse visuelle des données permettant d'explorer différents indicateurs liés à l'activité commerciale.",
},

featureCards: [
  {
    title: "Import et traitement des données",
    icon: ImDatabase,
  },
  {
    title: "Analyse des indicateurs",
    icon: FiBarChart2,
  },
  {
    title: "Visualisations interactives",
    icon: FiPieChart,
  },
  {
    title: "Lecture des tendances",
    icon: FiTrendingUp,
  },
],

    challenges: [
      {
        title: "",
        content: ``,
      },
    ],
    skills: ``, // Compétences

    diagram: {
      title: null,
      content: null,
    },

    diagramCards: [
      {
        title: null,
        image: null,
      },
    ],

    model: {
      title: null,
      content: null,
    },

    modelCards: [ // Maquettes
      {
        title: null,
        content1: null,
        content2: null,
        image: null,
        figma: null,
      },
    ], 

    gallerySection: {
      title: "Screenshots",
      content: "",
    },

    gallery: [
      {
        title: "Note moyenne de la satisfaction client",
        content: "",
        objective: "", 
        image: averageCustomerSatisfaction,
        isInGrid: false,
      },
      {
        title: "Average Delivery Time",
        content: "",
        objective: "",  
        image: averageDeliveryTime,
        isInGrid: true,
      },
      {
        title: "Monthly Revenue",
        content: "",
        objective: "",  
        image: monthlyRevenue,
        isInGrid: true,
      },
      {
        title: "Products Ranking", 
        content: "",
        objective: "", 
        image: productsRanking,
        isInGrid: true,
      },
      {
        title: "Sales by Brand",
        content: "",
        objective: "",  
        image: salesByBrand,
        isInGrid: false,
      },
      {
        title: "Sales by Channel",
        content: "",
        objective: "",  
        image: salesByChannel,
        isInGrid: false,
      },
      {
        title: "Sales by Product",
        content: "",
        objective: "",  
        image: salesByProduct,
        isInGrid: false,
      },
      {
        title: "Sales by Region",
        content: "",
        objective: "",  
        image: salesByRegion,
        isInGrid: false,
      }
    ],

    github: "https://github.com/SaskiaCorre/data.analysis.graphs",
    gitIcon: FaGithub,

    demo: "",

    cta: "Créer des graphiques à partir d'une base de données de vente permet de s'adapter au marché en temps réel",

    isFeatured: true,

    isDetailled: true,
  },

// E-BOUTIQUE SYMFONY
  {
    slug: "e-boutique-symfony",

    title: "MaBoutique.com | E-commerce personnalisable",

    subtitle: "Comment concevoir une boutique en ligne simple à administrer et agréable à utiliser ?",
    
    image: eShopHomeSmall,

    hero: {
      title: "E-commerce personnalisable",
      subtitle: "Comment concevoir une boutique en ligne simple à administrer et agréable à utiliser",
      badges: ["Symfony", "Twig", "MySQL", "Stripe"],
      content: "Créer une boutique en ligne entièrement administrable avec paiement sécurisé.",
      image: dashboardAdmin,
      // cta: "Voir le GitHub du projet"
    },

    shortStack: "Symfony",

    fullStacks:  [
      {stack: "Symfony"}, 
      {stack: "Twig"}, 
      {stack: "MySQL"}, 
      {stack: "Stripe"}
    ],

    // category: "Projet fil rouge",

    shortDescription: "Espace client, tableau de bord Administrateur, panier dynamique AJAX, paiement Stripe.",

    // context: "Projet personnel",

    context: {
      title: "Le Contexte",
      category: "Projet fil rouge",
      content: "Développer un site e-commerce complet permettant à un commerçant de gérer son catalogue, ses commandes et ses clients depuis une interface d'administration sécurisée."
    },

    contextCards: [
      {
        title: "Durée",
        content: "7 mois",
      },
      {
        title: "Technology",
        content: "Symfony",
      },
      {
        title: "Niveau",
        content: "Intermédiaire",
      },
      {
        title: "Objectif",
        content: "Architecture MVC",
      }
    ],

    objective: {
      title: "Objectifs",
      content: "Construire une application fluide et fiable",
    },
   
    objectiveCards: [
      {
        title: "Robustesse",
        content: "Créer une architecture robuste",
      },
      {
        title: "UX",
        content: "Mettre l'utilisateur au centre",
      },
      {
        title: "Admin",
        content: "Développer un back-office sécurisé",
      }
    ],
   
    approach: {
      title: "Ma démarche",
      content: "Proposer une vitrine Internet accessible aux Petites & Moyennes Entreprises",
    },

    approachCards: [  // Démarche
      // {
      //   title: "Besoin",
      //   content: "Une vitrine Internet pour Petites & Moyennes Entreprises",
      // },
      {
        title: "Concevoir",
        content: "Application pensée tant pour le client que pour le gérant",
      },
      {
        title: "Développer",
        content: "Création de la base de données, des entités et leurs relations",
      },
      {
        title: "Tester",
        content: "Réalisation des tests de connectivité et d'authentification",
      },
      // {
      //   title: "Amélioration",
      //   content: "Modifications pour améliorer l'UX",
      // }
    ],
    
    feature: {
      title: "Fonctionnalités",
      content:"",
    },

    featureCards: [  // Fonctionnalités
      {
        title: "Connexion",
        icon: ImConnection,
      },
      {
        title: "Panier",
        icon: BsCartCheck,
      },
      {
        title: "Stripe",
        icon: FaStripe,
      },
      {
        title: "Tableau de bord",
        icon: MdOutlineDashboardCustomize,
      },
      {
        title: "CRUD Produits",
        icon: RxDashboard,

      },
      {
        title: "Gestion Clients",
        icon: FaUsersCog,

      },
      // {
      //   title: "Architecture & Conception :",
      //   content: "Avant de coder, j'ai analysé les besoins métiers pour concevoir les maquettes sur Figma, les diagrammes UML sur StarUML, et modélisé la base de données MySQL via JMerise."
      // },
      // {
      //   title: "Sécurité (Symfony Security) :",
      //   content: "Authentification robuste des utilisateurs, hachage des mots de passe, et sécurisation du compte client ('Mon Compte')."
      // },
      // {
      //   title: "Expérience Utilisateur Dynamique (UX) :",
      //   content: "Pour éviter les rechargements de page intempestifs, j'ai développé des scripts JavaScript natifs (AJAX / Fetch) gérant en temps réel le panier (CRUD complet), les listes de favoris (Wishlist) et le comparateur de produits."
      // },
      // {
      //   title: "Logistique & Paiement :",
      //   content: "Intégration d'un système de livraison avec calcul dynamique des frais de port (3 transporteurs au choix) et d'un tunnel de paiement sécurisé avec l'API Stripe."
      // },
      // {
      //   title: "Back-Office (EasyAdmin) :",
      //   content: "Création d'une interface d'administration épurée permettant au commerçant de gérer ses produits, catégories et visuels en totale autonomie."
      // }
    ],
    
    challenges: [
      {
        title: "",
        content: `Ce projet fil rouge m'a permis de maîtriser l'architecture MVC de Symfony, de centraliser la logique métier dans des Services réutilisables, et de manipuler les bases de données proprement grâce à Doctrine ORM et son QueryBuilder. Il démontre ma capacité à gérer un projet web de sa phase de modélisation jusqu'à la préparation de son plan de déploiement sécurisé.`,
      },
    ],

    skills: [
      {skill1: ""}, 
      {skill2:``}, 
      {skill3:``}
    ],

    diagram: {
      title: "Architecture",
      content: "Les diagrammes, réalisés avec StarUml, m'ont permis d'établir une architecture cohérente des fonctionnalités.",
    },
    // diagramSubtitle: "Pourquoi cette architecture ?",

    // diagramContents: [
    //   {
    //     title: "Pourquoi cette architecture ?",
    //     content1: "Les diagrammes, réalisés avec StarUml, m'ont permis d'établir une architecture cohérente des fonctionnalités.",
    //     content2: "Réalisé en respectant la méthode CRUD, le cas d'utilisation (Use Case) facilite la mise en place des droits utilisateurs",
    //   }, 
    // ],

    diagramCards: [
      {
        title: "Cas d'utilisation",
        // choiseTitle: "Pourquoi cette architecture ?",
        // content1: "Les diagrammes, réalisés avec StarUml, m'ont permis d'établir une architecture cohérente des fonctionnalités.",
        // content2: "Réalisé en respectant la méthode CRUD, le cas d'utilisation (Use Case) facilite la mise en place des droits utilisateurs",
        image: useCaseEshop,
      },
      {
        title: "Se connecter",
        // choiseTitle: "Pourquoi cette architecture ?",
        // content1: "Les diagrammes, réalisés avec StarUml, m'ont permis d'établir une architecture cohérente des fonctionnalités.",
        // content2: "Réalisé en respectant la méthode CRUD, le cas d'utilisation (Use Case) facilite la mise en place des droits utilisateurs",
        image: diagActiviteSeConnecter,
      },
    ],

    model: {
      title: "Maquettes",
      content:"",
    },

    modelCards: [
      {
        title: "Maquette pour téléphone",
        content1: "Avant de développer, j'ai réalisé les interfaces sur Figma.",
        content2: "Chaque écran a été pensé afin de limiter le nombre d'actions nécessaires pour finaliser un achat.",
        image: phoneModel,
        figma: "https://www.figma.com/proto/nZtNDB6IlRGOHR5dmcG8kG/MaBoutique?page-id=0%3A1&node-id=1-2445&t=G8UqJwOrcQ2S1I2k-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2553",
      },
    ],  

    gallerySection: {
      title: "Screenshots",
      content: "",
    },

    gallery: [
      {
        title: "Page d'accueil", 
        content: "Le visiteur peut naviguer sur le site, s'inscrire ou se connecter",
        objective: "", 
        image: eShopHomeSmall,
        isInGrid: false,
      },
      {
        title: "Compte utilisateur", 
        content: "L'utilisateur peut modifier ses données et consulter ses commandes",
        objective: "", 
        image: userAccount,
        isInGrid: true,
      },
      {
        title: "Compte utilisateur - Détails", 
        content: "",
        objective: "", 
        image: userAccountDetails,
        isInGrid: false,
      },
      {
        title: "Panier", 
        content: "",
        objective: "", 
        image: shoppingCart,
        isInGrid: true,
      },
      {
        title: "Panier - Icone", 
        content: "",
        objective: "", 
        image: miniShoppingCart,
        isInGrid: false,
      },
      {
        title: "Confirmation commande", 
        content: "",
        objective: "", 
        image:confirmOrder,
        isInGrid: false,
      },
      {
        title: 'Tableau de bord Administrateur',
        content: "",
        objective: "", 
        image: dashboardAdmin,
        isInGrid: true,
      },
      {
        title: 'Base de données',
        content: "",
        objective: "", 
        image: db,
        isInGrid: false,
      },
      {
        title: 'Table Utilisateur',
        content: "Les utilisateurs enregistrés",
        objective: "", 
        image: dbUser,
        isInGrid: false,
      },
      {
        title: 'Utilisateur connecté',
        content: "",
        objective: "", 
        image: userConnected,
        isInGrid: false,
      },
      {
        title: 'Créer un compte',
        content: "",
        objective: "", 
        image: userRegistration,
        isInGrid: false,
      }
    ],

    github: "https://github.com/SaskiaCorre/eboutique.symfony",
    gitIcon: FaGithub,
    
    demo: "",
    
    cta:  `Comment concevoir une boutique en ligne robuste, sécurisée et ultra-fluide pour les commerçants 
      et artisans ? Découvrez mon projet fil rouge : une application e-commerce complète avec panier dynamique en AJAX, 
      espace client sécurisé et tunnel de paiement Stripe intégré. Une véritable vitrine technologique conçue de A à Z.`,
    
    isFeatured: true,
    
    isDetailled: true,
  },

// TICKET DE CAISSE PYTHON
  // {
  //   slug: "receipt-python-poo",
    
  //   title: "Data Management",

  //   subtitle: "Gestion de caisse",

  //   image: receiptPythonPooSmall,

  //   hero: {
  //     title: "Ticket de caisse avec gestion des vendeurs",
  //     subtitle: "Comment concevoir une application de gestion de ticket de vente",
  //     content: "Gérer les tickets en temps réel",
  //     image: dashboardAdmin,
  //     // cta: "Voir le GitHub du projet"
  //   },

  //   shortStack: "Python",

  //   fullStacks: [
  //     {stack: "Python"},
  //     {stack: "POO"},
  //   ],

  //   category: "Projet personnel",

  //   shortDescription: "Ticket de caisse",

  //   fullDescription: "",

  //   contextTitle: "Le contexte",

  //   context: "Projet personnel",

  //   contextItems: [
  //     {
  //       title: "Durée",
  //       content: "3 mois",
  //     },
  //     {
  //       title: "Technology",
  //       content: "Symfony",
  //     },
  //     {
  //       title: "Niveau",
  //       content: "Intermédiaire",
  //     },
  //     {
  //       title: "Objectif",
  //       content: "Architecture MVC",
  //     }
  //   ],

  //   objectiveTitle: "Objectifs",
   
  //   objectives: [
  //     {
  //       title: "Archi",
  //       content: "Créer une architecture robuste",
  //     },
  //     {
  //       title: "Utilisateur",
  //       content: "Mettre l'utilisateur au centre",
  //     },
  //     {
  //       title: "Admin",
  //       content: "Développer un back-office sécurisé",
  //     }
  //   ],
   
  //   approachTitle: "Ma démarche",

  //   approaches: [  // Démarche
  //     {
  //       title: "Besoin",
  //       content: "Une vitrine Internet pour PME",
  //     },
  //     {
  //       title: "Conception UX",
  //       content: "Application pensée tant pour le client que pour le gérant",
  //     },
  //     {
  //       title: "Développement",
  //       content: "Création de la base de données, des entités et leurs relations",
  //     },
  //     {
  //       title: "Tests",
  //       content: "Réalisation des tests de connectivité et d'authentification",
  //     },
  //     {
  //       title: "Amélioration",
  //       content: "Modifications pour améliorer l'UX",
  //     }
  //   ],
    
  //   featureTitle: "Fonctionnalités",

  //   features: [  // Fonctionnalités
  //     {
  //       title: "Connexion",
  //       icon: ImConnection,
  //     },
  //     {
  //       title: "Panier",
  //       icon: BsCartCheck,
  //     },
  //     {
  //       title: "Stripe",
  //       icon: FaStripe,
  //     },
  //     {
  //       title: "Tableau de bord",
  //       icon: MdOutlineDashboardCustomize,
  //     },
  //     {
  //       title: "CRUD Produits",
  //       icon: RxDashboard,

  //     },
  //     {
  //       title: "Gestion Clients",
  //       icon: FaUsersCog,

  //     },
  //     // {
  //     //   title: "Architecture & Conception :",
  //     //   content: "Avant de coder, j'ai analysé les besoins métiers pour concevoir les maquettes sur Figma, les diagrammes UML sur StarUML, et modélisé la base de données MySQL via JMerise."
  //     // },
  //     // {
  //     //   title: "Sécurité (Symfony Security) :",
  //     //   content: "Authentification robuste des utilisateurs, hachage des mots de passe, et sécurisation du compte client ('Mon Compte')."
  //     // },
  //     // {
  //     //   title: "Expérience Utilisateur Dynamique (UX) :",
  //     //   content: "Pour éviter les rechargements de page intempestifs, j'ai développé des scripts JavaScript natifs (AJAX / Fetch) gérant en temps réel le panier (CRUD complet), les listes de favoris (Wishlist) et le comparateur de produits."
  //     // },
  //     // {
  //     //   title: "Logistique & Paiement :",
  //     //   content: "Intégration d'un système de livraison avec calcul dynamique des frais de port (3 transporteurs au choix) et d'un tunnel de paiement sécurisé avec l'API Stripe."
  //     // },
  //     // {
  //     //   title: "Back-Office (EasyAdmin) :",
  //     //   content: "Création d'une interface d'administration épurée permettant au commerçant de gérer ses produits, catégories et visuels en totale autonomie."
  //     // }
  //   ],
    
  //   challenges: [
  //     {
  //       title: "",
  //       content: `Ce projet fil rouge m'a permis de maîtriser l'architecture MVC de Symfony, de centraliser la logique métier dans des Services réutilisables, et de manipuler les bases de données proprement grâce à Doctrine ORM et son QueryBuilder. Il démontre ma capacité à gérer un projet web de sa phase de modélisation jusqu'à la préparation de son plan de déploiement sécurisé.`,
  //     },
  //   ],
  //   skills: ``, 

  //   diagramTitle: "Architecture",

  //   diagrams: [
  //     {
  //       title: "Cas d'utilisation",
  //       choiseTitle: "Pourquoi cette architecture ?",
  //       content1: "Les diagrammes, réalisés avec StarUml, m'ont permis d'établir une architecture cohérente des fonctionnalités.",
  //       content2: "Réalisé en respectant la méthode CRUD, le cas d'utilisation (Use Case) facilite la mise en place des droits utilisateurs",
  //       image: useCaseEshop,
  //     },
  //   ],

  //   modelTitle: "Maquettes",

  //   models: [ // Maquettes
  //     {
  //       title: "Maquette pour téléphone",
  //       content1: "Avant de développer, j'ai réalisé les interfaces sur Figma.",
  //       content2: "Chaque écran a été pensé afin de limiter le nombre d'actions nécessaires pour finaliser un achat.",
  //       image: phoneModel,
  //       figma: "https://www.figma.com/proto/nZtNDB6IlRGOHR5dmcG8kG/MaBoutique?page-id=0%3A1&node-id=1-2445&t=G8UqJwOrcQ2S1I2k-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2553",
  //     },
  //   ], 

  //   galleryTitle: "Screenshots",
    
  //   gallery: [
  //     {
  //       title: "Average Customer Satisfaction",
  //       content: "",
  //       objective: "",  
  //       image: averageCustomerSatisfaction,
  //       isInGrid: true,
  //     },
  //     {
  //       title: "Average Delivery Time", 
  //       content: "",
  //       objective: "", 
  //       image: averageDeliveryTime,
  //       isInGrid: false,
  //     },
  //     {
  //       title: "Monthly Revenue",
  //       content: "",
  //       objective: "",  
  //       image: monthlyRevenue,
  //       isInGrid: false,
  //     },
  //     {
  //       title: "Products Ranking",
  //       content: "",
  //       objective: "",  
  //       image: productsRanking,
  //       isInGrid: true,
  //     },
  //     {
  //       title: "Sales by Brand", 
  //       content: "",
  //       objective: "", 
  //       image: salesByBrand,
  //       isInGrid: false,
  //     },
  //     {
  //       title: "Sales by Channel",
  //       content: "",
  //       objective: "",  
  //       image: salesByChannel,
  //       isInGrid: false,
  //     },
  //     {
  //       title: "Sales by Product", 
  //       content: "",
  //       objective: "", 
  //       image: salesByProduct,
  //       isInGrid: false,
  //     },
  //     {
  //       title: "Sales by Region", 
  //       content: "",
  //       objective: "", 
  //       image: salesByRegion,
  //       isInGrid: true,
  //     }
  //   ],

  //   github: "https://github.com/SaskiaCorre/ticket.caisse.python",

  //   demo: "",

  //   cta: "",

  //   isFeatured: true,
    
  //   isDetailled: true,
  // },
// TOPOLOGIE LAN / DHCP
  {
    slug: "topology-lan",

    title: "Réseaux | Administration Systèmes",

    subtitle: "",

    image: network,

    hero: {
      title: "Administration Systèmes & Réseaux",
      subtitle: "Comment configurer un réseau interne",
      badges: ["Windows Server", "Linux", "Cisco Tracer"],
      content: "Configurer le réseau interne d'une entreprise, en attribuant aux utilisateurs leurs différents droits en fonction de leur rôle",
      image: topoDhcp,
      // cta: "Voir le projet",
    },

    shortStack: "Windows Server / Linux",

    fullStacks: [
      {title: "Linux"},
      {title: "Packet Cisco Tracer"}
    ],

    shortDescription: "Topologie réseau",

    fullDescription: "",

    context: {
      title: "Le Contexte",
      category: "Test de candidature",
      content: "Mise en place, sécurisation et administration d'une infrastructure réseau et système pour la structure RUE25, incluant la gestion d'un serveur Windows en mode Core et le cloisonnement des données par services."
    },

    contextCards: [
      {
        title: "Durée",
        content: "Projet technique",
      },
      {
        title: "Technology",
        content: "Windows Server Core / PowerShell / AD / NTFS",
      },
      {
        title: "Niveau",
        content: "Technicien / TSSR",
      },
      {
        title: "Objectif",
        content: "Infrastructure et Sécurité",
      }
    ],

    objective: {
        title: "Objectifs",
        content: "Structurer un environnement serveur robuste, administrer les identités et sécuriser les partages de fichiers selon des politiques d'accès métiers stricts.",
    }, 

    objectiveCards: [
      {
        title: "Gestion des Accès",
        content: "Mettre en place une segmentation rigoureuse des dossiers partagés (Direction, Commerciaux, Consultants, Comptables) avec des droits NTFS granulaires.",
      },
      {
        title: "Résolution d'Incidents",
        content: "Diagnostiquer et corriger les pannes de résolution DNS et les blocages d'héritage de permissions (Ownership / takeown).",
      },
      {
        title: "Administration Sécurisée",
        content: "Gérer l'annuaire Active Directory (utilisateurs et groupes) et configurer un serveur en mode Core via la ligne de commande et PowerShell.",
      }
    ],

    approach: {
        title: "Ma démarche",
        content: "Une approche méthodique de dépannage et de sécurisation, combinant l'utilisation de la ligne de commande (CLI/PowerShell) et le respect des bonnes pratiques d'administration système.",
    },

    approachCards: [ 
      {
        title: "Diagnostic Réseau",
        content: "Résolution des problèmes de connectivité et de configuration suite au changement d'adresse IP et de nom d'hôte du serveur.",
      },
      {
        title: "Nettoyage & Restructuration",
        content: "Suppression des comptes obsolètes, réattribution des membres aux groupes AD et prise de possession des dossiers pour éliminer les accès refusés.",
      },
      {
        title: "Sécurisation Avancée",
        content: "Utilisation de la commande icacls pour appliquer des permissions strictes (Modify, Read) et casser l'héritage des dossiers partagés.",
      },
    ],

    feature: {
        title: "Fonctionnalités & Réalisations",
        content: "Les briques techniques déployées et administrées sur l'infrastructure RUE25.",
    },

    featureCards: [ 
      {
        title: "Windows Server Core",
        icon: FaServer,
      },
      {
        title: "Active Directory (AD DS)",
        icon: FaUserShield,
      },
      {
        title: "Permissions NTFS & icacls",
        icon: IoShieldCheckmark,
      },
      {
        title: "Automatisation PowerShell",
        icon: MdTerminal,
      },
      {
        title: "Gestion DNS & Réseau",
        icon: RiNetworkFill,
      },
    ],

    challenges: [
      {
        title: "",
        content: ``,
      },
    ],

    skills: ``, // Compétences

    diagram: {
      title: null,
      content: null,
    },

    diagramCards: [
      {
        title: null,
        image: null,
      },
    ],

    model: {
      title: null,
      content: null,
    },

    modelCards: [ // Maquettes
      {
        title: null,
        content1: null,
        content2: null,
        image: null,
        figma: null,
      },
    ], 

    gallerySection: {
      title: "Screenshots",
      content: "",
    },

    gallery: [
      {
        title: "Compte utilisateur",
        content: "",
        objective: "",  
        image: compteUtilisateur,
        isInGrid: true,
      },
      {
        title: "Serveur Windows",
        content: "",
        objective: "",  
        image: confServeurWind,
        isInGrid: false,
      },
      {
        title: "Serveur GLPI",
        content: "",
        objective: "",  
        image: confVmGlpi,
        isInGrid: false,
      },
      {
        title: "Création des dossiers des utilisateurs",
        content: "",
        objective: "",  
        image: creationDossiers,
        isInGrid: true,
      },
      {
        title: "Description de l'incident",
        content: "",
        objective: "",  
        image: descripIncident,
        isInGrid: false,
      },
      {
        title: "Dossiers Utilisateurs",
        content: "",
        objective: "",  
        image: dossiersUtilisateurs,
        isInGrid: false,
      },
      {
        title: "Connexion",
        content: "",
        objective: "",  
        image: pingConnexion,
        isInGrid: false,
      },
      {
        title: "Utilisateur sans droits",
        content: "",
        objective: "",  
        image: sansDroits,
        isInGrid: false,
      },
      {
        title: "Ticket en cours",
        content: "",
        objective: "",  
        image: ticketEnCours,
        isInGrid: false,
      },
      {
        title: "Ticket utilisateur",
        content: "",
        objective: "",  
        image: sansDroits,
        isInGrid: false,
      },
      {
        title: "Topolgie LAN",
        content: "",
        objective: "", 
        image: topoLan,
        isInGrid: false,
      },
      {
        title: "Topologie DHCP", 
        content: "",
        objective: "", 
        image: topoDhcp,
        isInGrid: true,
      },
    ],    

    github: "https://github.com/SaskiaCorre/mise_en_reseau_2_LAN",
    gitIcon: FaGithub,

    demo: "",

    cta: "",

    isFeatured: true,
    
    isDetailled: true,
  },
// CV en ligne
//   {
//     slug: "cv-en-ligne",
//     image: cvEnLigne,
//     title: "CV en ligne | HTML / CSS pur",
//     shortStack: "HTML",
//     fullStacks: [
//       {title:"HTML"},
//       {title:"CSS"}
//     ],
//     category: "web",
//     shortDescription: "CV en ligne",
//     fullDescription: ``,
//     features: [
//       {
//         title: "",
//         content: ""
//       },
//     ],
//     challenges: [
//       {
//         title: "",
//         content: ``,
//       },
//     ],
//     skills: ``, // Compétences
//     diagrams: [
//       {
//         title: "",
//         content: ``,
//         img: "",
//       },
//     ],
//     models: [ // Maquettes
//       {
//         title: "",
//         content: ``,
//         img: "",
//         figma: "",
//       },
//     ],
//     github: "https://github.com/SaskiaCorre/mon.cv.interactif",
//     demo: "",
//     cta: "",
//     isFeatured: false,
//   }
]

export default PROJECTS;
