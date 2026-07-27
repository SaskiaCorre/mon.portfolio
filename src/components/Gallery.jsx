import React from 'react';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projectsData';

// Arborescence du retour : img, title, shortStack, shortDescription
export default function Gallery({ projectsData }){
    return (
    <div className='gallery-grid'>
      {projectsData.map((image) => (
        <figure key={image.title}
            className="gallery-item">
          <figcaption>
            <h3>{image.title}</h3>
          </figcaption>
          <img
            src={image.image}
            alt={image.title}
            className='details-img'
          /> 
            {image.content && (
              <p>{image.content}</p>
            )}             
        </figure>
      ))}
    </div>   
  );
}