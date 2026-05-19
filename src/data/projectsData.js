
import graphPlotly from '../assets/screenshots/graphPlotly.png';
import eShopHome from '../assets/screenshots/eShopHome.png';
import receiptPythonPoo from '../assets/screenshots/receiptPythonPoo.png';
import topologyLan from '../assets/screenshots/topologyLan.png';
import cvEnLigne from '../assets/screenshots/cvEnLigne.png';

const PROJECTS = [
  {
    slug: "data-analysis",
    image: graphPlotly,
    title: "Analyse de données de ventes",
    stack: "Python - Pandas - Plotly",
    category: "data",
    description: "Graphismes interactifs",
    github: "https://github.com/SaskiaCorre/data.analysis.graphs",
    demo: "",
    isFeatured: true,
  },
  {
    slug: "e-commerce",
    image: eShopHome,
    title: "E-commerce",
    stack:  "PHP - Symfony - MySQL",
    category: "web",
    description: "Boutique en ligne avec caroussel, comptes utilisateurs et panier intéractifs, tableau de bord administrateur",
    github: "https://github.com/SaskiaCorre/eboutique.symfony",
    demo: "",
    isFeatured: true,
  },
  {
    slug: "receipt-python-poo",
    image: receiptPythonPoo,
    title: "Data Management",
    stack: " Python / POO",
    category: "data",
    description: "Ticket de caisse",
    github: "https://github.com/SaskiaCorre/ticket.caisse.python",
    demo: "",
    isFeatured: true,
  },
  {
    slug: "topology-lan",
    image: topologyLan,
    title: "Réseau LAN",
    stack: "Linux - Packet Cisco Tracer",
    category: "netwok",
    description: "Topologie réseau",
    github: "https://github.com/SaskiaCorre/mise_en_reseau_2_LAN",
    demo: "",
    isFeatured: false,
  },
  {
    slug: "cv-en-ligne",
    image: cvEnLigne,
    title: "CV en ligne | HTML / CSS pur",
    stack: "HTML / CSS",
    category: "web",
    description: "CV en ligne",
    github: "https://github.com/SaskiaCorre/mon.cv.interactif",
    demo: "",
    isFeatured: false,
  }
]

export default PROJECTS;
