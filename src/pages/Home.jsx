import '../styles/Hero.css';
import '../styles/Pages.css';
import React from 'react';
import Card from '../components/Card';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Hero from '../components/Hero';
import PROJECTS from '../data/projectsData';
import imgHome from '../assets/img/imgHome.png';
import PAGES from '../data/pagesData';
import MainContent from '../components/MainContent';

const homePage = PAGES.home;

const projectHero = PROJECTS.filter((project) => project.isFeatured);
  // console.log(projectHero);
  // console.log(PROJECTS);
  
export default function Home() {  
  
  return (
    <article>
      <Hero
        title={homePage.hero.title}
        subtitle={homePage.hero.subtitle}
        content={homePage.hero.content}
        cta={<button className='hero-cta'>{homePage.hero.cta}</button>}
        image={
          <img src={homePage.hero.image} alt="" />              
        }
      /> 

      <section className='page-layout'>
        
        <aside className='left-sidebar'>
          <LeftSidebar sidebar={homePage.sidebar}/> 
        </aside>

        <MainContent
          title={homePage.title}
          subtitle={homePage.subtitle}
          firstcontent={homePage.firstcontent}
          secondcontent={homePage.secondcontent}
        />
          
        <aside className='right-sidebar'>
          <RightSidebar image={
              <img src={homePage.mainImage} alt="" />
              
            } />
        </aside>
      </section>
        
      <section className='projects-preview'>
        <Card projects={projectHero}/>
      </section>

      <section className='about-preview'>
            
      </section>

      <section className='contact-preview'>
      </section>
      
    </article>
  );
}