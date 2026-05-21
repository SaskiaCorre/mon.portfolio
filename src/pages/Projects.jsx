import '../styles/Pages.css'
import React from 'react';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
// import PROJECTS from '../data/projectsData';
import imgProjects from '../assets/img/imgProjects.png';
  
export default function Projects() {  
  
  return (
    <article>
      <div className='hero'>    
        <section className='hero-layout'>
          <aside className='sidebar'>
            <h2><Sidebar element={'Développement'}/></h2>
            <h2>* * *</h2>
            <h2>*</h2>
            <h2><Sidebar element={'Conception'}/></h2>
            <h2>* * *</h2>
            <h2>*</h2>
            <h2><Sidebar element={'Analyse'}/></h2>
          </aside>

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
      <Hero className='hero-image' 
            image={
              <img src={imgProjects} 
                  alt="Ma photo de profil">                       
              </img>
          } 
      />
        </section>
      </div>
      {/* <section>
       <Card projects={PROJECTS}/>
      </section> */}
      
    </article>
  );
}