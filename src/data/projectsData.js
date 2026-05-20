
import graphPlotly from '../assets/screenshots/graphPlotly.png';
import eShopHome from '../assets/screenshots/eShopHome.png';
import receiptPythonPoo from '../assets/screenshots/receiptPythonPoo.png';
import topologyLan from '../assets/screenshots/topologyLan.png';
import cvEnLigne from '../assets/screenshots/cvEnLigne.png';

const PROJECTS = [
// Graphiques Python
  {
    slug: "data-analysis",
    image: graphPlotly,
    title: "Analyse de données de ventes",
    shortStack: "Python",
    fullStacks: [
      {title: "Python"}, 
      {title: "Pandas"}, 
      {title: "Plotly"}
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
  },
// E-boutique Symfony
  {
    slug: "e-boutique-symfony",
    image: eShopHome,
    title: "MaBoutique - E-commerce Personnalisable",
    shortStack: "PHP",
    fullStacks:  [
      {title: "PHP"}, 
      {title: "Symfony"}, 
      {title: "MySQL"},
      {title: "AJAX"}
    ],
    // fullStacks: ["PHP", "Symfony", "MySQL", "AJAX"],
    category: "web",
    shortDescription: "Boutique e-commerce complète avec espace client, tableau de bord Administrateur, panier dynamique AJAX, paiement Stripe sécurisé.",
    fullDescription: ``,
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
  },
// Ticket de caisse Python
  {
    slug: "receipt-python-poo",
    image: receiptPythonPoo,
    title: "Data Management",
    shortStack: "Python",
    fullStacks: [
      {title: "Python"},
      {title: "POO"},
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
