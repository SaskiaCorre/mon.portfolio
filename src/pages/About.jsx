import '../App.css'
import '../styles/About.css'
import Hero from '../components/Hero';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import React from 'react';
import PAGES from '../data/pagesData';
import MainContent from '../components/MainContent';

const aboutPage = PAGES.about;

export default function About(){
    return (
    <article className='about-page'>
      <section className='page-layout'> 

        {/* <aside className='left-sidebar'>
          <LeftSidebar sidebar={aboutPage.sidebar}/>          
        </aside> */}

        <MainContent
          subtitle={aboutPage.subtitle}
          title={aboutPage.title}          
          badges={aboutPage.badges}
          firstcontent={aboutPage.firstcontent}
          secondcontent={aboutPage.secondcontent}
          list={aboutPage.list}
          // thirdcontent={aboutPage.thirdcontent}
          // fourthcontent={aboutPage.fourthcontent}
          // fifthcontent={aboutPage.fifthcontent}
          // conclusion={aboutPage.conclusion}
        />

        {/* <ul>
          <li>être à l'écoute des clients</li>
          <li>trouver des solutions à leurs attentes</li>
          <li>les fidéliser en rendant leur expérience inoub</li>
        </ul> */}

        <aside className='right-sidebar'>
          <RightSidebar 
            image={
            <img src={aboutPage.mainImage} alt="" />
            } 
          />
        </aside>    
            
      </section>

      <MainContent
        // secondcontent={aboutPage.secondcontent}
        // list={aboutPage.list}
        thirdcontent={aboutPage.thirdcontent}
        fourthcontent={aboutPage.fourthcontent}
        fifthcontent={aboutPage.fifthcontent}
        conclusion={aboutPage.conclusion}
      />
    </article>
  );
}