import '../styles/Hero.css';
import '../styles/Pages.css';
import React from 'react';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import PROJECTS from '../data/projectsData';
import imgHome from '../assets/img/imgHome.png';

const PROJECTS_HERO = PROJECTS.filter((project) => project.isFeatured);
  // console.log(PROJECTS_HERO);
  // console.log(PROJECTS);
  
export default function Home() {  
  
  return (
    <article>    
      <div className='hero'>
        <section className='hero-layout'>
          <aside className='sidebar'>
            <h2><Sidebar element={'Expérience utilisateur'}/></h2>
            <h2>* * *</h2>
            <h2>*</h2>
            <h2><Sidebar element={'Marketing'}/></h2>
            <h2>* * *</h2>
            <h2>*</h2>
            <h2><Sidebar element={'Communication'}/></h2>
          </aside>

          <div className='hero-content'>
            <h1 className='hero-title'>
              <Hero title={'Bienvenue sur mon Portfolio'} />
            </h1>
            <h2 className='hero-subtitle'>
              <Hero subtitle={'Développeuse d\'applications web | Orientée Data & UX'} />
            </h2>
                <p><Hero content={'Mon parcours atypique m\'a permis d\'acquérir de l\'expérience dans ces 3 domaines'} /></p>
                <p><Hero content={'Aujourd\'hui formée à la conception et au développement web, ces 3 atouts me permettent d\'aborder le marketing digital naturellement.'}/></p>
                {/* TEST : bouton à supprimer sur cette page*/}
                <button className='hero-button'>
                  <Hero cta={'Voir mes projets'}/>
                </button>
          </div>
          <Hero className='hero-image' 
                          image={
                            <img src={imgHome} 
                                 alt="Ma photo de profil">                       
                            </img>
                          } 
                    />
        </section>
        <div className='projects-preview'>
          <Card projects={PROJECTS_HERO}/>
        </div>
      </div>

      
      
    </article>
  );
}