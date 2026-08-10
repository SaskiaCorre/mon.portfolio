import '../styles/Projects.css'
import '../styles/Grid.css'
import React from 'react';
import { useParams, Link } from 'react-router-dom';

import PROJECTS from '../data/projectsData';
import Hero from '../components/Hero';
import GridProject from '../components/GridProject';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Card from '../components/Card';
import PAGES from '../data/pagesData';
import MainContent from '../components/MainContent';
import ProjectDetails from './ProjectDetails';
import ProjectPreview from '../components/ProjectPreview';

import productsRanking from '../assets/images/galleries/graphsPython/productsRanking.png';
import averageCustomersSatisfaction from '../assets/images/galleries/graphsPython/averageCustomerSatisfaction.png';
import salesByChannel from '../assets/images/galleries/graphsPython/salesByChannel.png';
import salesByRegion from '../assets/images/galleries/graphsPython/salesByRegion.png';

import eShopHome from '../assets/screenshots/eShopHome.png';
import userAccount from '../assets/images/galleries/appSymfony/userAccount.png';
import dashboardAdmin from '../assets/images/galleries/appSymfony/dashboardAdmin.png';
import shoppingCart from '../assets/images/galleries/appSymfony/shoppingCart.png';


const projectsPage = PAGES.projects;

// const Icon = projectsPage.gitIcon;
export default function Projects({project, previewImages}) { 

  return (
    <article className='projects-page'>
      <Hero
        title={projectsPage.hero.title}
        subtitle={projectsPage.hero.subtitle}
        content={projectsPage.hero.content}
        cta={
          <Link 
            to={projectsPage.hero.github}
            className='link'
          >
            {projectsPage.hero.cta}
          </Link>
        }
        image={<img src={projectsPage.hero.image} alt="" />}
      /> 
        {/* APERÇU DES PROJETS */}
        <section>
          {PROJECTS.map((project) => (
            <ProjectPreview
              key={project.slug}
              project={project}
            />
          ))}
        </section>
      {/* </section> */}
    </article>    
  );
}