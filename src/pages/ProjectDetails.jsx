import { useParams, Link } from 'react-router-dom';
import PROJECTS from '../data/projectsData';
import Hero from '../components/Hero';
import Context from '../components/Context';
import Objective from '../components/Objective';
import Approach from '../components/Approach';
import Feature from '../components/Feature';
import Diagram from '../components/Diagram';
import Model from '../components/Model';
import Gallery from '../components/Gallery';

import '../App.css';
import '../styles/Details.css';
import '../styles/Grid.css';

import { ImConnection } from "react-icons/im";
import { BsCartCheck } from "react-icons/bs";
import { FaStripe } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaUsersCog } from "react-icons/fa";

//  Hero du projet, fullDescription, fonctionnalité, challenges, img,
// , diagramme UML, maquette Figma, GitHub, démo, compétences acquises

export default function ProjectDetails({project}){
  const { slug } = useParams();

  const projectDetails = PROJECTS.find(
    (p) => p.slug === slug
  );
      
  const Icon = projectDetails.gitIcon;
  

    return(
    <article className='details-page'> 
    <h2 className='hero-subtitle'>{projectDetails.hero.subtitle}</h2>
    
      <Hero
        // subtitle={projectDetails.hero.subtitle} 
        badges={projectDetails.hero.badges}
        title={projectDetails.hero.title}
        content={projectDetails.hero.content}
        cta={projectDetails.hero.cta}
        image={<img src={projectDetails.hero.image} alt="" />}
      />

      <section className='context'>
        <h2 className='section-title'>{projectDetails.contextTitle}</h2>
        <p className='section-content'>{projectDetails.fullDescription}</p>
        <Context
          projectsData={projectDetails.contextItems}
        />
      </section>

      <section className='objectives'>
        <h2 className='section-title'>{projectDetails.objectiveTitle}</h2>
          <Objective projectsData={projectDetails.objectives} />
      </section>

      <section className='approach'>
        <h2 className='section-title'>{projectDetails.approachTitle}</h2>
          <Approach projectsData={projectDetails.approaches} />
      </section>
      
      <section className='feature'>
        <h2 className='section-title'>{projectDetails.featureTitle}</h2>
          <Feature projectsData={projectDetails.features}/>
      </section>

      {/* <h4><em>Ce que ce projet m'a apporté</em></h4>
        <ul>
          {projectDetails.challenges.map((challenge) => (
            <div key={challenge.title}>
              <h3>{challenge.title}</h3>
            <p>{challenge.content}</p>
            </div>
          ))}
        </ul> */}
      
      {/* Diagramme UML */}
      <section className='diagram'>
        <h2 className='section-title'>{projectDetails.diagramTitle}</h2>
        <Diagram projectsData={projectDetails.diagrams} />
      </section>

      <section className='model'>
        <h2 className='section-title'>{projectDetails.modelTitle}</h2>
        <Model projectsData={projectDetails.models} />
      </section>

      {/* <h4><em>GitHub:</em></h4>
      <h4><em>Démo:</em></h4>
      <h4><em>Compétences acquises:</em></h4>
      <p></p> */}
          
      <section className="gallery">
        <h2 className='section-title'>{projectDetails.galleryTitle}</h2>
        <Gallery projectsData={projectDetails.gallery} />
      </section>

      <button className='git-btn'>
        <Link 
          to={projectDetails.github}
          className='git-link'  
        >
          Voir le Repository
          <Icon className='git-icon' />
        </Link>
      </button>

    </article>
    )
}