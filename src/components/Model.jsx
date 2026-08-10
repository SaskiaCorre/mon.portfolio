import React from 'react';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projectsData';

// Arborescence du retour : img, title, shortStack, shortDescription
export default function Model({ model, modelCards }){

    if (
        !model.title && !model.content && 
        !modelCards.title && !modelCards.content && 
        !modelCards.image && !modelCards.content2 && !modelCards.figma) {
        return null;
    }
    return (
     <div className="model">
        {model.title && (
            <h2 className="section-title">
                {model.title}
            </h2>
        )}
        {model.content && (   
            <p className="section-description">
                {model.content}
            </p>
        )}

        <div className='model-grid'>
            {modelCards.map((modelCards) => (
                <div key={modelCards.title}
                    className='model-card'
                >
                    {modelCards.title && (
                        <h3>{modelCards.title}</h3>
                    )}
                    {modelCards.content &&(
                        <p>{modelCards.content}</p>
                    )}
                    {modelCards.image && (
                        <img 
                            src={modelCards.image} 
                            className='card-img'
                        />
                    )}
                    {modelCards.content2 &&(    
                        <p>{modelCards.content2}</p>
                    )}
                    {modelCards.figma && (      
                      <button className='cta-btn'>
                        <Link 
                            to={modelCards.figma}
                            className='link-to'
                        >
                          Voir la maquette
                        </Link>
                      </button>
                    )}
                </div>
              ))}
        </div>

      </div>   
    );
}