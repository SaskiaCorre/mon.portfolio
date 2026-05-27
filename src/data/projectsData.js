
import graphPlotly from '../assets/screenshots/graphPlotly.png';
import eShopHome from '../assets/screenshots/eShopHome.png';
import receiptPythonPoo from '../assets/screenshots/receiptPythonPoo.png';
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


const PROJECTS = [
// GRAPHIQUES PYTHON
  {
    slug: "data-analysis",
    title: "Analyse de données de ventes",
    image: graphPlotly,
    hero: {
      title: "Analyse de données",
      subtitle: "Python + Plotly",

      contents: [
         "Analyse interactive",
         "Visualisation des ventes"
      ],

      cta: "Voir le projet"
    },
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
    shortStack: "Python",
    fullStacks: [
      {stack: "Python"}, 
      {stack: "Pandas"}, 
      {stack: "Plotly"}
    ],
    // fullStacks: ["Python", "Pandas", "Plotly"],
    category: "data",
    shortDescription: "Graphismes interactifs",
    fullDescription: ``,
    features: [ // Fonctionnalités
      {
        title: "",
        content: ""
      },
    ],
    challenges: [
      {
        title: "",
        content: ``,
      },
    ],
    skills: ``, // Compétences
    diagrams: [
      {
        title: "",
        content: ``,
        img: "",
      },
    ],
    models: [ // Maquettes
      {
        title: "",
        content: ``,
        img: "",
        figma: "",
      },
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
    title: "MaBoutique - E-commerce personnalisable",
    image: eShopHome,
    gallery: [
      {
        title: "User Account", 
        content: "",
        objective: "", 
        image: userAccount,
        isInGrid: true,
      },
      {
        title: "User Account Details", 
        content: "",
        objective: "", 
        image: userAccountDetails,
        isInGrid: false,
      },
      {
        title: "Mini Basket", 
        content: "",
        objective: "", 
        image: miniShoppingCart,
        isInGrid: false,
      },
      {
        title: "Full Basket", 
        content: "",
        objective: "", 
        image: shoppingCart,
        isInGrid: true,
      },
      {
        title: "Confirm Order", 
        content: "",
        objective: "", 
        image:confirmOrder,
        isInGrid: false,
      },
      {
        title: 'dashboardAdminAdmin',
        content: "",
        objective: "", 
        image: dashboardAdmin,
        isInGrid: true,
      }
    ],
    shortStack: "PHP",
    fullStacks:  ["PHP", "Symfony", "MySQL", "AJAX"],
    category: "web",
    shortDescription: "Boutique e-commerce complète avec espace client, tableau de bord Administrateur, panier dynamique AJAX, paiement Stripe sécurisé.",
    fullDescription: `Développement d'une application e-commerce complète et sécurisée sous 
           Symfony & MySQL, pensée comme une vitrine technologique pour 
          les artisans et commerçants.
          De la conception de la base de données (MCD/MLD) jusqu'à l'UX dynamique 
          (JavaScript/AJAX pour un panier sans rechargement), ce projet 
          démontre ma capacité à livrer un produit web robuste, incluant un tunnel de paiement 
           Stripe et un tableau de bord d'administration (EasyAdmin) intuitif.`,
    features: [  // Fonctionnalités
      {
        title: "Authentification utilisateurs",
        content: "Compte Utilisateur et mot de passe haché."
      },

      {
        title: "Panier dynamique",
        content: "Mise à jour en AJAX sans rechargement."
      },
      {
        title: "Paiement sécurisé",
        content: "Intégration Stripe avec tunnel sécurisé."
      },

      {
        title: "Dashboard Admin",
        content: "Tableau de bord côté Administrateur pour la gestion des commandes et des produits."
      }
    ],
    challenges: [
      {
        title: "",
        content: ``,
      },
    ],
    skills: [   // Compétences
      {skill1:``}, 
      {skill2:``}, 
      {skill3:``}
    ],
    diagrams: [
      {
        title: "",
        content: ``,
        img: "",
      },
    ],
    models: [ // Maquettes
      {
        title: "",
        content: ``,
        img: "",
        figma: "",
      },
    ], 
    github: "https://github.com/SaskiaCorre/eboutique.symfony",
    demo: "",
    cta: "Découvrir le code & l'architecture",
    isFeatured: true,
    isDetailled: true,
  },
// TICKET DE CAISSE PYTHON
  {
    slug: "receipt-python-poo",
    image: receiptPythonPoo,
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
    title: "Data Management",
    shortStack: "Python",
    fullStacks: [
      {stack: "Python"},
      {stack: "POO"},
    ],
    // fullStacks: ["Python", "POO"],
    category: "data",
    shortDescription: "Ticket de caisse",
    fullDescription: ``,
    features: [
      {
        title: "",
        content: ""
      },
    ],
    challenges: [
      {
        title: "",
        content: ``,
      },
    ],
    skills: ``, // Compétences
    diagrams: [
      {
        title: "",
        content: ``,
        img: "",
      },
    ],
    models: [ // Maquettes
      {
        title: "",
        content: ``,
        img: "",
        figma: "",
      },
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
