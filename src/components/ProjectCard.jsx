import React from 'react';
import '../styles/Card.css';

export default function Card({ projects }){
    return (
    <article className='cards-container'>
        {projects.map((project, index) => (
            <div key={index} className='card'>
                <p className='card-category'
                    style={{ border: project.category === "data" ? "solid 5px lightGreen" : project.category === "web" ? "solid 5px dodgerblue" : "solid 5px green"}}
                >
                    {project.category}
                </p>
                <h2 className='card-title'>{project.title}</h2>
                <h4 className='card-description'>{project.description}</h4>
                
                <img src={project.image} alt={`Image from ${project.title}`} className='card-img'/>
            </div>
        ))}       
    </article>
    );
}