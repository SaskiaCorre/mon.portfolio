import React from 'react';
import '../styles/Grid.css';
import '../styles/Card.css';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projectsData';

// Arborescence du retour : img, title, shortStack, shortDescription
export default function GridProject({ gallery, slug}){
{gallery.map((item, index) => (
   <Link key={index} to={`/projects/${slug}`} className='grid-card'>
         <div key={index} className='grid-image-item'>
            <img src={item.image} alt={item.title} />
            <h2 className='card-title'>{item.title}</h2>
            <h3>{item.content}</h3>
         </div>
      </Link>
   ),
)}  
}         
        