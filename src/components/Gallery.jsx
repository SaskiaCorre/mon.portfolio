import React from 'react';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projectsData';

// Arborescence du retour : img, title, shortStack, shortDescription
export default function Gallery({ gallerySection, gallery }){
    return (
    <div className="gallery">
      {gallerySection.title && (
        <h2 className="section-title">
            {gallerySection.title}
        </h2>
      )}
      {gallerySection.content && (   
        <p className="section-content">
          {gallerySection.content}
        </p>
      )}

      <div className='gallery-grid'>
        {gallery.map((gallery) => (
          <figure 
            key={gallery.title}
            className="gallery-card"
          >
            <figcaption>
              <h3>{gallery.title}</h3> 
              {gallery.content && (
                <p className='img-description'>{gallery.content}</p>
              )}
            </figcaption>
            
            <img
              src={gallery.image}
              alt={gallery.title}
              className='details-img'
            /> 
                        
          </figure>
        ))}
      </div>

    </div>   
  );
}