import '../styles/Pages.css'
import '../styles/Grid.css'
import React from 'react';
import { useParams } from 'react-router-dom';

import PROJECTS from '../data/projectsData';
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


export default function Projects({project, previewImages}) { 

  return (
    <article>
      <section className='page-projects'>

        <section className='page-layout'>                    
          <aside className='left-sidebar'>
            <LeftSidebar sidebar={projectsPage.sidebar}/>
          </aside>
          
          <MainContent
            title={projectsPage.title}
            subtitle={projectsPage.subtitle}
            firstcontent={projectsPage.firstcontent}
            secondcontent={projectsPage.secondcontent}
            cta={projectsPage.cta}
          /> 
          
          <aside className='right-sidebar'>
            <RightSidebar image={
              <img src={projectsPage.mainImage} alt="" />
            } />
          </aside>        
        </section>
        {/* APERÇU DES PROJETS */}
        <section className="projects-preview">
          {PROJECTS.map((project) => (
            <ProjectPreview
              key={project.slug}
              project={project}
            />
          ))}
        </section>
      </section>

    </article>    
  );
}