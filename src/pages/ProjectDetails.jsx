import { useParams } from 'react-router-dom';
import PROJECTS from '../data/projectsData';
import '../App.css'

//  Hero du projet, fullDescription, fonctionnalité, challenges, img,
// , diagramme UML, maquette Figma, GitHub, démo, compétences acquises

export default function ProjectDetails(){
const { slug } = useParams();

const project = PROJECTS.find(
  (p) => p.slug === slug
);

    return(
    <>
    <ul>
      {project.fullStacks.map((fullStack) => (
        <article key={fullStack.stack}>
         <p className='badge'>{fullStack.stack}</p>
        </article>
      ))}
    </ul>

    <h4><em>Description du projet:</em></h4>
      <p>{project.fullDescription}</p>

    <h4><em>Fonctionnalités:</em></h4>
      <ul>
        {project.features.map((feature) => (
          <article key={feature.title}>
            <h3>{feature.title}</h3>
          <p>{feature.content}</p>
          </article>
        ))}
      </ul>

    <h4><em>Challenges:</em></h4>
      <ul>
        {project.challenges.map((challenge) => (
          <article key={challenge.title}>
            <h3>{challenge.title}</h3>
          <p>{challenge.content}</p>
          </article>
        ))}
      </ul>
    
    <h4><em>Diagramme UML:</em></h4>
      <ul>
        {project.diagrams.map((diagram) => (
          <article key={diagram.title}>
            <h3>{diagram.title}</h3>
              <img src={diagram.image}  className='card-img'/>
              <p>{diagram.content}</p>
          </article>
        ))}
      </ul>

    <h4><em>Maquette:</em></h4>
      <ul>
        {project.models.map((model) => (
          <article key={model.title}>
            <h3>{model.title}</h3>
              <img src={model.image}  className='card-img'/>
              <p>{model.content}</p>
              <p>{model.figma}</p>
          </article>
        ))}
      </ul>

    <h4><em>GitHub:</em></h4>
    <h4><em>Démo:</em></h4>
    <h4><em>Compétences acquises:</em></h4>
    <p></p>
        
      <p>{project.cta}</p>
        
{/* LA SECTION SUIVANTE FONCTIONNE */}
    <section className="project-gallery">
      {project.gallery.map((image) => (
        <figure key={image.title}>
          <img
            src={image.image}
            alt={image.title}
          />

          <figcaption>
            <h3>{image.title}</h3>

            {image.content && (
              <p>{image.content}</p>
            )}
          </figcaption>
        </figure>
      ))}
    </section>

    </>
    )
}