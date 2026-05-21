import React from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projectsData';

// Arborescence du retour : img, title, shortStack, shortDescription
export default function Card({ projects }){
    return (
    <section className='cards-container'>
        {projects.map((project) => (
        <Link key={project.slug} to={`/projects/${project.slug}`} className='card-link'>
            <div className='one-card-container'>      
                <div className='card'>
                    <p className='card-category'
                        style={{ border: project.category === "data" ? "solid 5px lightGreen" : project.category === "web" ? "solid 5px dodgerblue" : "solid 5px green"}}
                    >
                        {project.category}
                    </p>

                    <img className='card-img' src={project.image} alt={project.title}/>
                    <h2 className='card-title'>{project.title}</h2>
                    <h2>{project.shortStack}</h2>
                    <h4 className='card-description'>{project.shortDescription}</h4>
                    
                </div>
            </div>   
        </Link>
        ))}           
    </section>    
    );
}