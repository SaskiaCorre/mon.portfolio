
import graphPlotlySmall from '../assets/screenshots/graphPlotlySmall.png';
import eShopHomeSmall from '../assets/screenshots/eShopHomeSmall.png';
import receiptPythonPooSmall from '../assets/screenshots/receiptPythonPooSmall.png';
import topologyLan from '../assets/screenshots/topologyLan.png';
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

import { ImConnection } from "react-icons/im";
import { BsCartCheck } from "react-icons/bs";
import { FaStripe } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaUsersCog } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const PROJECTS = [
// GRAPHIQUES PYTHON
  {
    slug: "data-analysis",

    title: "Analyse de données de ventes",
    
    subtitle: "Comment créaliser des diagrammes ?",

    image: graphPlotlySmall,

    hero: {
      title: "Analyse de données",
      subtitle: "Concevoir des graphiques par extraction de données",
      content: "Une visualisation rapide des données permet de s'adapter au marché en temps réel",
      // cta: "Voir le projet",
    },

    shortStack: "Python",

    fullStacks: [
      {stack: "Python"}, 
      {stack: "Pandas"}, 
      {stack: "Plotly"}
    ],

    category: "Projet personnel",
    
    shortDescription: "Graphismes interactifs",

    fullDescription: "Les graphiques permettent d'avoir une une vue d'ensemble rapide pour accélérer les prises de décisions",

    contextTitle: "Le contexte",

    context: "Projet personnel",

    contextItems: [
      {
        title: "Durée",
        content: "3 mois",
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

    objectiveTitle: "Objectifs",
   
    objectives: [
      {
        title: "Archi",
        content: "Créer une architecture robuste",
      },
      {
        title: "Utilisateur",
        content: "Mettre l'utilisateur au centre",
      },
      {
        title: "Admin",
        content: "Développer un back-office sécurisé",
      }
    ],
   
    approachTitle: "Ma démarche",

    approaches: [  // Démarche
      {
        title: "Besoin",
        content: "Une vitrine Internet pour PME",
      },
      {
        title: "Conception UX",
        content: "Application pensée tant pour le client que pour le gérant",
      },
      {
        title: "Développement",
        content: "Création de la base de données, des entités et leurs relations",
      },
      {
        title: "Tests",
        content: "Réalisation des tests de connectivité et d'authentification",
      },
      {
        title: "Amélioration",
        content: "Modifications pour améliorer l'UX",
      }
    ],
    
    featureTitle: "Fonctionnalités",

    features: [  // Fonctionnalités
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
        content: ``,
      },
    ],
    skills: ``, // Compétences

    

    diagramTitle: "Architecture",

    diagrams: [
      {
        title: "Cas d'utilisation",
        choiseTitle: "Pourquoi cette architecture ?",
        content1: "Les diagrammes, réalisés avec StarUml, m'ont permis d'établir une architecture cohérente des fonctionnalités.",
        content2: "Réalisé en respectant la méthode CRUD, le cas d'utilisation (Use Case) facilite la mise en place des droits utilisateurs",
        image: useCaseEshop,
      },
    ],

    modelTitle: "Maquettes",

    models: [ // Maquettes
      {
        title: "Maquette pour téléphone",
        content1: "Avant de développer, j'ai réalisé les interfaces sur Figma.",
        content2: "Chaque écran a été pensé afin de limiter le nombre d'actions nécessaires pour finaliser un achat.",
        image: phoneModel,
        figma: "https://www.figma.com/proto/nZtNDB6IlRGOHR5dmcG8kG/MaBoutique?page-id=0%3A1&node-id=1-2445&t=G8UqJwOrcQ2S1I2k-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2553",
      },
    ], 

    galleryTitle: "Screenshots",

    gallery: [
      {
        title: "Note moyenne de la satisfaction client",
        content: "",
        objective: "", 
        image: averageCustomerSatisfaction,
        isInGrid: true,
      },
      {
        title: "Average Delivery Time",
        content: "",
        objective: "",  
        image: averageDeliveryTime,
        isInGrid: false,
      },
      {
        title: "Monthly Revenue",
        content: "",
        objective: "",  
        image: monthlyRevenue,
        isInGrid: false,
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
        isInGrid: true,
      }
    ],

    github: "https://github.com/SaskiaCorre/data.analysis.graphs",

    demo: "",

    cta: "",

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

    category: "Projet fil rouge",

    shortDescription: "Espace client, tableau de bord Administrateur, panier dynamique AJAX, paiement Stripe.",
    
    fullDescription: "Développer un site e-commerce complet permettant à un commerçant de gérer son catalogue, ses commandes et ses clients depuis une interface d'administration sécurisée.",
    
    contextTitle: "Le contexte",

    context: "Projet personnel",

    contextItems: [
      {
        title: "Durée",
        content: "3 mois",
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

    objectiveTitle: "Objectifs",
   
    objectives: [
      {
        title: "Archi",
        content: "Créer une architecture robuste",
      },
      {
        title: "Utilisateur",
        content: "Mettre l'utilisateur au centre",
      },
      {
        title: "Admin",
        content: "Développer un back-office sécurisé",
      }
    ],
   
    approachTitle: "Ma démarche",

    approaches: [  // Démarche
      {
        title: "Besoin",
        content: "Une vitrine Internet pour PME",
      },
      {
        title: "Conception UX",
        content: "Application pensée tant pour le client que pour le gérant",
      },
      {
        title: "Développement",
        content: "Création de la base de données, des entités et leurs relations",
      },
      {
        title: "Tests",
        content: "Réalisation des tests de connectivité et d'authentification",
      },
      // {
      //   title: "Amélioration",
      //   content: "Modifications pour améliorer l'UX",
      // }
    ],
    
    featureTitle: "Fonctionnalités",

    features: [  // Fonctionnalités
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

    diagramTitle: "Architecture",

    // diagramSubtitle: "Pourquoi cette architecture ?",

    // diagramContents: [
    //   {
    //     title: "Pourquoi cette architecture ?",
    //     content1: "Les diagrammes, réalisés avec StarUml, m'ont permis d'établir une architecture cohérente des fonctionnalités.",
    //     content2: "Réalisé en respectant la méthode CRUD, le cas d'utilisation (Use Case) facilite la mise en place des droits utilisateurs",
    //   }, 
    // ],

    diagrams: [
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

    modelTitle: "Maquettes",

    models: [ // Maquettes
      {
        title: "Maquette pour téléphone",
        content1: "Avant de développer, j'ai réalisé les interfaces sur Figma.",
        content2: "Chaque écran a été pensé afin de limiter le nombre d'actions nécessaires pour finaliser un achat.",
        image: phoneModel,
        figma: "https://www.figma.com/proto/nZtNDB6IlRGOHR5dmcG8kG/MaBoutique?page-id=0%3A1&node-id=1-2445&t=G8UqJwOrcQ2S1I2k-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2553",
      },
    ], 

    galleryTitle: "Screenshots",

    gallery: [
      {
        title: "Page d'accueil", 
        content: "Le visiteur peut naviguer sur la site, s'inscrire ou se connecter",
        objective: "", 
        image: eShopHomeSmall,
        isInGrid: false,
      },
      {
        title: "Compte utilisateur", 
        content: "Depuis son compte, l'utilisateur peut modifier ses données et consulter ses commandes",
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
  {
    slug: "receipt-python-poo",
    
    title: "Data Management",

    subtitle: "Gestion de caisse",

    image: receiptPythonPooSmall,

    hero: {
      title: "Ticket de caisse avec gestion des vendeurs",
      subtitle: "Comment concevoir une application de gestion de ticket de vente",
      content: "Gérer les tickets en temps réel",
      image: dashboardAdmin,
      // cta: "Voir le GitHub du projet"
    },

    shortStack: "Python",

    fullStacks: [
      {stack: "Python"},
      {stack: "POO"},
    ],

    category: "Projet personnel",

    shortDescription: "Ticket de caisse",

    fullDescription: "",

    contextTitle: "Le contexte",

    context: "Projet personnel",

    contextItems: [
      {
        title: "Durée",
        content: "3 mois",
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

    objectiveTitle: "Objectifs",
   
    objectives: [
      {
        title: "Archi",
        content: "Créer une architecture robuste",
      },
      {
        title: "Utilisateur",
        content: "Mettre l'utilisateur au centre",
      },
      {
        title: "Admin",
        content: "Développer un back-office sécurisé",
      }
    ],
   
    approachTitle: "Ma démarche",

    approaches: [  // Démarche
      {
        title: "Besoin",
        content: "Une vitrine Internet pour PME",
      },
      {
        title: "Conception UX",
        content: "Application pensée tant pour le client que pour le gérant",
      },
      {
        title: "Développement",
        content: "Création de la base de données, des entités et leurs relations",
      },
      {
        title: "Tests",
        content: "Réalisation des tests de connectivité et d'authentification",
      },
      {
        title: "Amélioration",
        content: "Modifications pour améliorer l'UX",
      }
    ],
    
    featureTitle: "Fonctionnalités",

    features: [  // Fonctionnalités
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
    skills: ``, 

    diagramTitle: "Architecture",

    diagrams: [
      {
        title: "Cas d'utilisation",
        choiseTitle: "Pourquoi cette architecture ?",
        content1: "Les diagrammes, réalisés avec StarUml, m'ont permis d'établir une architecture cohérente des fonctionnalités.",
        content2: "Réalisé en respectant la méthode CRUD, le cas d'utilisation (Use Case) facilite la mise en place des droits utilisateurs",
        image: useCaseEshop,
      },
    ],

    modelTitle: "Maquettes",

    models: [ // Maquettes
      {
        title: "Maquette pour téléphone",
        content1: "Avant de développer, j'ai réalisé les interfaces sur Figma.",
        content2: "Chaque écran a été pensé afin de limiter le nombre d'actions nécessaires pour finaliser un achat.",
        image: phoneModel,
        figma: "https://www.figma.com/proto/nZtNDB6IlRGOHR5dmcG8kG/MaBoutique?page-id=0%3A1&node-id=1-2445&t=G8UqJwOrcQ2S1I2k-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2553",
      },
    ], 

    galleryTitle: "Screenshots",
    
    gallery: [
      {
        title: "Average Customer Satisfaction",
        content: "",
        objective: "",  
        image: averageCustomerSatisfaction,
        isInGrid: true,
      },
      {
        title: "Average Delivery Time", 
        content: "",
        objective: "", 
        image: averageDeliveryTime,
        isInGrid: false,
      },
      {
        title: "Monthly Revenue",
        content: "",
        objective: "",  
        image: monthlyRevenue,
        isInGrid: false,
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
        isInGrid: true,
      }
    ],

    github: "https://github.com/SaskiaCorre/ticket.caisse.python",

    demo: "",

    cta: "",

    isFeatured: true,
    
    isDetailled: true,
  },
// Topologie LAN
  // {
  //   slug: "topology-lan",
  //   image: topologyLan,
  //   title: "Réseau LAN",
  //   shortStack: "Linux",
  //   fullStacks: [
  //     {title: "Linux"},
  //     {title: "Packet Cisco Tracer"}
  //   ],
  //   category: "netwok",
  //   shortDescription: "Topologie réseau",
  //   fullDescription: ``,
  //   features: [
  //     {
  //       title: "",
  //       content: ""
  //     },
  //   ],
  //   challenges: [
  //     {
  //       title: "",
  //       content: ``,
  //     },
  //   ],
  //   skills: ``, // Compétences
  //   diagrams: [
  //     {
  //       title: "",
  //       content: ``,
  //       img: "",
  //     },
  //   ],
  //   models: [ // Maquettes
  //     {
  //       title: "",
  //       content: ``,
  //       img: "",
  //       figma: "",
  //     },
  //   ],
  //   github: "https://github.com/SaskiaCorre/mise_en_reseau_2_LAN",
  //   demo: "",
  //   cta: "",
  //   isFeatured: false,
  // },
// CV en ligne
  // {
  //   slug: "cv-en-ligne",
  //   image: cvEnLigne,
  //   title: "CV en ligne | HTML / CSS pur",
  //   shortStack: "HTML",
  //   fullStacks: [
  //     {title:"HTML"},
  //     {title:"CSS"}
  //   ],
  //   category: "web",
  //   shortDescription: "CV en ligne",
  //   fullDescription: ``,
  //   features: [
  //     {
  //       title: "",
  //       content: ""
  //     },
  //   ],
  //   challenges: [
  //     {
  //       title: "",
  //       content: ``,
  //     },
  //   ],
  //   skills: ``, // Compétences
  //   diagrams: [
  //     {
  //       title: "",
  //       content: ``,
  //       img: "",
  //     },
  //   ],
  //   models: [ // Maquettes
  //     {
  //       title: "",
  //       content: ``,
  //       img: "",
  //       figma: "",
  //     },
  //   ],
  //   github: "https://github.com/SaskiaCorre/mon.cv.interactif",
  //   demo: "",
  //   cta: "",
  //   isFeatured: false,
  // }
]

export default PROJECTS;
