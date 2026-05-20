import '../styles/Pages.css'
import React from 'react';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import PROJECTS from '../data/projectsData';
  
export default function Projects() {  
  
  return (
    <article>    
     <section className='hero-layout'>
        <div className='sidebar'>
          <h2><Sidebar element={'Expérience utilisateur'}/></h2>
          <h2>* * *</h2>
          <h2>*</h2>
          <h2><Sidebar element={'Marketing'}/></h2>
          <h2>* * *</h2>
          <h2>*</h2>
          <h2><Sidebar element={'Communication'}/></h2>
          </div>
          <div className='main-content'>
            <h1><Hero title={'Développeuse d\'applications web | Orientée Data & UX'} /></h1>
              <main className='margin-content'>
                <p><Hero content={'Mon parcours atypique m\'a permis d\'acquérir de l\'expérience dans ces 3 domaines'} /></p>
                <p><Hero content={'Aujourd\'hui formée à la conception et au développement web, ces 3 atouts me permettent d\'aborder le marketing digital naturellement.'}/></p>
              </main>
          </div>
      </section>

      <section>
       <Card projects={PROJECTS}/>
      </section>
      
    </article>
  );
}