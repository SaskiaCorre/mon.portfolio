import dashboardAdmin from '../assets/images/galleries/appSymfony/dashboardAdmin.png';
import imgHome from '../assets/img/imgHome.png';
import imgAbout from '../assets/img/imgAbout.png';
import greenPhone from '../assets/img/greenPhone.png';
import greenPhoneSmall from '../assets/img/greenPhoneSmall.png';
import imgPageProjects from '../assets/img/imgPageProjects.png';

const PAGES = {
  home: {
    hero: {
      title: "Développeuse web orientée Data & UX",

      content: "Je conçois des applications pensées pour l'utilisateur, appuyées par l'analyse de données et une logique métier concrète.",

      cta: "Voir mes projets",
      image : dashboardAdmin, 
    },

    title: "Bienvenue sur mon portfolio",

    subtitle: "Développeuse d'applications web | Orientée Data & UX",

    firstcontent: "Mon parcours atypique m'a permis d'acquérir de l'expérience dans ces 3 domaines",
    secondcontent: "Aujourd'hui formée à la conception et au développement web, ces 3 atouts me permettent d'aborder le marketing digital naturellement.",
    
    mainImage: imgHome,

    sidebar: [
      "Expérience utilisateur",
      "* *",
      "Marketing",
      "* *",
      "Communication",
    ],

    cta: "Découvrir mes projets",

    ctaTo: [
  {
    slug: "contact",
    title: "Échangeons autour de vos besoins",
    content:
      "Les meilleurs projets naissent souvent de parcours différents. Échangeons.",
    cta: "Me contacter",
    link: "/contact",
    image: greenPhone,
  },

  {
    slug: "about",
    title: "Pourquoi mon parcours est un atout",
    content:
      "Découvrez pourquoi mon expérience dans le commerce est un atout pour concevoir des applications orientées UX & Data.",
    cta: "Découvrir mon parcours",
    link: "/about",
    image: imgAbout,
  },
]
  },

  about: {
    title: "A propos de moi",

    subtitle: "Du commerce à la conception d'applications web || Un parcours atypique",

    firstcontent: "Une fois diplômée, éprise de liberté et de soif de découvertes, je n\'ai su me résigner à travaillerdans un bureau, cela m\'aurait obligé à me sédentariser.",
    secondcontent: "Issue d\'une famille de commerçants et négociateurs, j\'ai vite intégrer les bons reflexes:",
    
    mainImage: imgAbout,

    sidebar: [
      "Enthousiaste",
      "* *",
      "Curieuse",
      "* *",
      "Créatrice",
    ],
  },

  contact: {
    title: "Envie d\'échanger ?",

    subtitle: "N\'hésitez pas à me contacter",

    firstcontent: "Nous pourrions échanger sur vos opportunité,",
    secondcontent: "sur mes hardskills et mes softskills",
    
    mainImage: greenPhoneSmall,

    sidebar: [
      "A l\'écoute",
      "de vos opportunités",
      "* *",
      "Disponible",
      "* *",
      "Mobile",
    ],
    cta:"",
  },

  projects: {
    title: "Mes projets",

    subtitle: "Cliquez sur un projet pour explorer ses coulisses",

    firstcontent: "Repo, README, maquettes, etc.",
    secondcontent: "Découvrez le back-end de mes projets",
    
    mainImage: imgPageProjects,

    sidebar: [
      "Analyse de Données",
      "* *",
      "Extractions de données",
      "* *",
      "Nettoyage fichier CSV",
    ],
    cta:"Voir le projet",
  },
}


export default PAGES;