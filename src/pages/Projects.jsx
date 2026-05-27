import '../styles/Pages.css'
import '../styles/Grid.css'
import React from 'react';
import { useParams } from 'react-router-dom';

import PROJECTS from '../data/projectsData';
import Gallery from '../components/Gallery';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Card from '../components/Card';
import PAGES from '../data/pagesData';
import MainContent from '../components/MainContent';

import productsRanking from '../assets/images/galleries/graphsPython/productsRanking.png';
import averageCustomersSatisfaction from '../assets/images/galleries/graphsPython/averageCustomerSatisfaction.png';
import salesByChannel from '../assets/images/galleries/graphsPython/salesByChannel.png';
import salesByRegion from '../assets/images/galleries/graphsPython/salesByRegion.png';

import eShopHome from '../assets/screenshots/eShopHome.png';
import userAccount from '../assets/images/galleries/appSymfony/userAccount.png';
import dashboardAdmin from '../assets/images/galleries/appSymfony/dashboardAdmin.png';
import shoppingCart from '../assets/images/galleries/appSymfony/shoppingCart.png';
import ProjectDetails from './ProjectDetails';

const projectsPage = PAGES.projects;

export default function Projects({project}) { 
 
  return (
    <article>
{/* GRAPHIQUE PYTHON */}
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

      {/* {PROJECTS.map((project) => {
      <section
         key={project.slug}
         className="one-project"
      >
      <Gallery gallery={project.gallery} slug={project.slug} />
      </section>
      })}  */}
      
      {/* <ProjectDetails project={project} /> */}

       
{/* E-COMMERCE SYMFONY */}
      {/* <section className='hero-layout'>
        <aside className='right-sidebar'>
          <RightSidebar image={
            <img src={eShopHome} alt="" />
          } />
        </aside>

        

        <div className='hero'>    
          <section className='hero-layout'>

            <Hero className='hero-image' 
                  image={
                    <img src={eShopHome} alt="e-shop home"></img>
                  } 
            />

            <div className='hero-content'>
              <h1>
                <Hero title={'Apperçu de mes projets'} />
              </h1>
              <h2 className='hero-subtitle'>
                <Hero subtitle={'Application e-commerce Symfony'} />
              </h2>
                <p><Hero content={'Mon parcours atypique m\'a permis d\'acquérir de l\'expérience dans ces 3 domaines'} /></p>
                <p><Hero content={'Aujourd\'hui formée à la conception et au développement web, ces 3 atouts me permettent d\'aborder le marketing digital naturellement.'}/></p>
            </div>
            
            <aside className='left-sidebar'>
              <h2><LeftSidebar element={'Compte Utilisateur'}/></h2>
              <h2>* * *</h2>
              <h2>*</h2>
              <h2><LeftSidebar element={'Dashboard Admin'}/></h2>
              <h2>* * *</h2>
              <h2>*</h2>
              <h2><LeftSidebar element={'Panier Dynamique'}/></h2>
            </aside>
          </section>
        </div>
        <section className='project-preview'>
          <img className='grid-img' src={userAccount} alt=""></img>
          <img className='grid-img' src={dashboardAdmin} alt=""></img>
          <img className='grid-img' src={shoppingCart} alt=""></img>
        </section>
      </section>   */}
    
    
    </article>    
  );
}