import '../styles/Pages.css'
import React from 'react';
import Card from '../components/ProjectCard';
import graphPlotly from '../assets/screenshots/graphPlotly.png';
import eShopHome from '../assets/screenshots/eShopHome.png';
import receiptPythonPoo from '../assets/screenshots/receiptPythonPoo.png';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';

const PROJECTS = [
  {
    slug: "data-analysis",
    image: graphPlotly,
    title: "Analyse de données de ventes",
    stack: "Python - Pandas - Plotly",
    category: "data",
    description: "Graphismes interactifs",
    github: "https://github.com/SaskiaCorre/data.analysis.graphs",
    demo: "",
  },
  {
    slug: "e-commerce",
    image: eShopHome,
    title: "E-commerce",
    stack:  "PHP - Symfony - MySQL",
    category: "web",
    description: "Boutique en ligne avec caroussel, comptes utilisateurs et panier intéractifs, tableau de bord administrateur",
    github: "https://github.com/SaskiaCorre/eboutique.symfony",
    demo: "",
  },
  {
    slug: "receipt-python-poo",
    image: receiptPythonPoo,
    title: "Data Management",
    stack: " Python / POO",
    category: "data",
    description: "Ticket de caisse",
    github: "https://github.com/SaskiaCorre/ticket.caisse.python",
    demo: "",
  },
]


export default function Home() {
  return (
    <article>    
     <section className='hero-layout'>
        <div className='sidebar'>
          <h2><Sidebar element={'Expérience utilisateur'}/></h2>
          <h2>* * *</h2>
          <h2>*</h2>
          <h2><Sidebar element={'Marketing'}/></h2>
          <h2>* * *</h2>
          <h2>*</h2>
          <h2><Sidebar element={'Communication'}/></h2>
          </div>
          <div className='main-content'>
            <h1><Hero title={'Développeuse d\'applications web | Orientée Data & UX'} /></h1>
              <main className='margin-content'>
                <p><Hero content={'Mon parcours atypique m\'a permis d\'acquérir de l\'expérience dans ces 3 domaines'} /></p>
                <p><Hero content={'Aujourd\'hui formée à la conception et au développement web, ces 3 atouts me permettent d\'aborder le marketing digital naturellement.'}/></p>
              </main>
          </div>
      </section>

      <section>
       <Card projects={PROJECTS}/>
      </section>
      
    </article>
  );
}