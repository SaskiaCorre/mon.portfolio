import dashboardAdmin from '../assets/images/galleries/appSymfony/dashboardAdmin.png';
import imgHomeSmallGreen from '../assets/img/imgHomeSmallGreen.png';
import imgHome from '../assets/img/imgHome.png';
import imgAboutDark from '../assets/img/imgAboutDark.png';
import greenPhone from '../assets/img/greenPhone.png';
import greenPhoneSmall from '../assets/img/greenPhoneSmall.png';
import imgPageProjects from '../assets/img/imgPageProjects.png';
import { FaGithub } from "react-icons/fa";

const PAGES = {
  home: {
    hero: {
      subtitle: "Saskia Perriot-Magnanou",
      title: "Développeuse UX & Data",
      // content: "Je conçois des applications pensées pour l'utilisateur, appuyées par l'analyse de données et une logique métier concrète.",
      content: "Issue de 15 ans d'expérience terrain dans le commerce de tourisme, je conçois des applications centrées utilisateur grâce à une approche qui combine expérience client, communication et développement web.",

      cta: "Voir mes projets",
      image : dashboardAdmin, 
    },

    title: "20 ans d'expérience terrain",

    subtitle: "Développeuse d'applications web | Orientée Data & UX",

    firstcontent: "Après plusieurs années dans le commerce et la communication, j'ai choisi de me spécialiser dans le développement d'applications web. Cette expérience me permet aujourd'hui de comprendre aussi bien les attentes des utilisateurs que les enjeux métier derrière chaque projet.",
    secondcontent: "À travers ce portfolio, je présente des réalisations mêlant développement web, analyse de données et expérience utilisateur, avec un objectif constant : concevoir des outils utiles, performants et agréables à utiliser.",
    
    mainImage: imgHome,

    // sidebar: [
    //   "Expérience utilisateur",
    //   "Marketing",
    //   "Communication",
    // ],

    experiences: [
      {
        title:"Relation client", 
        content: "15 ans au contact d'une clientèle française et internationale"
      },
      {
        title:"Adaptabilité", 
        content: "Habituée aux pics d'activité et aux environnements exigeants"
      },
      {
        title: "Vision utilisateur", 
        content: "Comprendre les besoins avant de construire la solution"
      },
    ],

    cta: "Découvrir mes projets",

    ctaTo: [
      {
        slug: "about",
        titlebis: "Mon parcours dans le commerce : un vrai atout",
        content: "Découvrez pourquoi mon parcours dans le commerce m'aide à concevoir de meilleures applications",
        cta: "Découvrir mon parcours",
        link: "/a-propos",
        image: imgHomeSmallGreen,
      },
      {
        slug: "contact",
        titlebis: "Échangeons autour de vos besoins",
        content: "Les meilleurs projets naissent souvent de parcours différents. Échangeons.",
        cta: "Me contacter",
        link: "/contact",
        image: greenPhoneSmall,
      },
      {
        slug: "project",
        cta: "Voir mes projets",
        link: "/projets",
      },
    ]
  },

  projects: {
    hero: {
      title: "Mes projets",

      // content: "Je conçois des applications pensées pour l'utilisateur, appuyées par l'analyse de données et une logique métier concrète.",
      content: "Applications web, visualisation de données et optimisation de l'expérience utilisateur.",
      cta: "Voir mon GitHub",
      image : imgPageProjects,
      github: "https://github.com/SaskiaCorre",
      gitIcon: FaGithub, 
    },

    title: "Mes projets",

    subtitle: "Cliquez sur un projet pour explorer ses coulisses",

    firstcontent: "Repo, README, maquettes, etc.",
    secondcontent: "Découvrez le back-end de mes projets",

    // sidebar: [
    //   "Analyse de Données",
    //   "* *",
    //   "Extractions de données",
    //   "* *",
    //   "Nettoyage fichier CSV",
    // ],

    cta:"Voir le projet",
  },

  about: {
    title: "Mon parcours",

    subtitle: "Du commerce à la conception d'applications web",

    firstcontent: "Une fois diplômée en communication, portée par la curiosité et l'envie de découvrir de nouveaux horizons, je me suis naturellement tournée vers le terrain plutôt que vers un parcours de bureau traditionnel. Pendant près de vingt ans, j'ai exercé dans le commerce, la vente et la restauration, principalement au sein d'une station balnéaire à forte fréquentation. Cette expérience m'a permis d'évoluer au contact quotidien d'une clientèle française et internationale, dans des environnements où la réactivité, l'écoute et l'adaptation sont essentielles.",
    secondcontent: "Au fil des saisons, j'ai développé des compétences qui me servent aujourd'hui encore :",
    thirdcontent: "Avec le recul, je réalise que cette expérience de terrain constitue une véritable force dans mon métier actuel. Avant même d'apprendre à coder, j'ai appris à observer, écouter et comprendre les utilisateurs. Ces réflexes sont aujourd'hui au cœur de ma manière de concevoir des applications web : partir du besoin réel avant de construire une solution.",
    fourthcontent: "Animée par l'envie de créer et de résoudre des problématiques concrètes, j'ai entrepris une reconversion dans le développement d'applications web. Diplômée en communication des entreprises et titulaire d'un CCP Développeuse d'Applications, j'ai progressivement orienté mon profil vers trois domaines complémentaires : le développement web, l'expérience utilisateur (UX) et l'analyse de données.",
    fifthcontent: "J'apprécie particulièrement les projets qui nécessitent à la fois une réflexion fonctionnelle et une approche technique. Comprendre un besoin, structurer l'information, analyser les données disponibles puis transformer l'ensemble en une solution claire et utile est ce qui me motive au quotidien.",
    conclusion: "Aujourd'hui, mon objectif est de mettre cette double expérience — terrain et technique — au service de projets numériques pensés pour leurs utilisateurs. Parce qu'une application performante ne se résume pas à son code : elle doit avant tout répondre à un besoin réel, de manière simple, efficace et intuitive.",
    
    list: [
      "comprendre rapidement les besoins d'un client ;",
      "trouver des solutions adaptées à des situations variées ;",
      "communiquer efficacement avec des interlocuteurs aux profils très différents ;",
      "gérer les périodes de forte affluence avec méthode et sang-froid ;",
      "garder en permanence l'expérience utilisateur au centre des décisions.",
    ],
    
    mainImage: imgAboutDark,

    sidebar: [
      "Enthousiaste",
      "* *",
      "Curieuse",
      "* *",
      "Créatrice",
    ],

    badges: [
      "Observer",
      "Comprendre",
      "Construire",
    ],
  },

  contact: {
    title: "Échangeons",

    subtitle: "Les meilleurs projets naissent souvent de parcours différents",

    firstcontent: "Vous recherchez une développeuse orientée expérience utilisateur, analyse de données et communication ?",
    secondcontent: "Je serais ravie d'échanger avec vous autour de vos besoins, de vos projets ou d'une opportunité professionnelle.",
  
    badges: [
      "A l'écoute",
      "Disponible",
      "Mobile",
    ],

    cta:"",
  },
}


export default PAGES;