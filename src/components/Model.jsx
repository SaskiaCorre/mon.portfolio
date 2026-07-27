import React from 'react';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projectsData';

// Arborescence du retour : img, title, shortStack, shortDescription
export default function Model({ projectsData }){
    return (
    <div className='model-grid'>
        {projectsData.map((models) => (
            <div key={models.title}
                 className='model-item'
            >
              <h3>{models.title}</h3>
                <p>{models.content}</p>
                <img src={models.image} className='card-img'/>     
                <p>{models.content2}</p>       
                  <button className='cta-btn'>
                    <Link to={models.figma}
                          className='link-to'
                    >
                      Voir la maquette
                      </Link>
                  </button>
            </div>
          ))}
        </div>   
    );
}