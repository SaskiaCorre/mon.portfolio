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
import { Link } from 'react-router-dom';

const homePage = PAGES.home;

const projectHero = PROJECTS.filter((project) => project.isFeatured);
  // console.log(projectHero);
  // console.log(PROJECTS);

const contactPreview = homePage.ctaTo.find(
  (item) => item.slug === "contact"
);

const aboutPreview = homePage.ctaTo.find(
  (item) => item.slug === "about"
);

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

      <section className="about-preview">


  <MainContent
    title={aboutPreview.title}
    firstcontent={aboutPreview.content}
    // img={
    //   <img src={aboutPreview.image} alt="" />
    // }
    cta={
      <Link to={aboutPreview.link}>
        {aboutPreview.cta}
      </Link>
    }
  />
  <aside className='preview-sidebar'>
    <RightSidebar image={
      <img src={aboutPreview.image} alt="" />
    } />
  </aside>
</section>

<section className="contact-preview">
  <MainContent
    title={contactPreview.title}
    firstcontent={contactPreview.content}
    cta={
      <Link to={contactPreview.link}>
        {contactPreview.cta}
      </Link>
    }
  />
  <aside className='preview-sidebar'>
          <RightSidebar image={
              <img src={contactPreview.image} alt="" />
              
            } />
        </aside>
</section>
      
    </article>
  );
}