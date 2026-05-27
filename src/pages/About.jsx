import '../styles/Pages.css'
import Hero from '../components/Hero';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import React from 'react';
import PAGES from '../data/pagesData';
import MainContent from '../components/MainContent';

const aboutPage = PAGES.about;

export default function About(){
    return (
    <article>
      <section className='page-layout'> 

        <aside className='left-sidebar'>
          <LeftSidebar sidebar={aboutPage.sidebar}/>          
        </aside>

        <MainContent
          title={aboutPage.title}
          subtitle={aboutPage.subtitle}
          firstcontent={aboutPage.firstcontent}
          secondcontent={aboutPage.secondcontent}
        />

        <aside className='right-sidebar'>
          <RightSidebar 
            image={
            <img src={aboutPage.mainImage} alt="" />
            } 
          />
        </aside>    
            
      </section>
    </article>
  );
}