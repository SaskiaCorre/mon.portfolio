import React from 'react';
import '../styles/Grid.css';
import '../styles/Card.css';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projectsData';
import GridProject from './GridProject';

// Arborescence du retour : img, title, shortStack, shortDescription
export default function ProjectPreview({ project }) {
  const previewImages = project.gallery.filter(
    (image) => image.isInGrid
  );

  return (
    <section className="one-project">
      <h2 className='one-project-title'>{project.title}</h2>
      <p className='one-project-cta'>{project.cta}</p>

      <GridProject
        images={previewImages}
        slug={project.slug}
      />
    </section>
  );
}     
        