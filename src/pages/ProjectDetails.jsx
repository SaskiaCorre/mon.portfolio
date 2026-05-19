import { useParams } from 'react-router-dom';
import PROJECTS from '../data/projectsData';

export default function ProjectDetails(){
const { slug } = useParams();

const project = PROJECTS.find(
  (p) => p.slug === slug
);


    return(
    <>
    <h1>{project.title}</h1>
    <img src={project.image}  className='card-img'/>
    <p>{project.description}</p>
    </>
    )
}