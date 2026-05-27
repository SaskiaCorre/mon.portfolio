import '../styles/Pages.css'
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import React from 'react';
import { useState } from "react";
import PAGES from '../data/pagesData';
import MainContent from '../components/MainContent';

const contactPage = PAGES.contact;

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Mise à jour des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();               // Empêche le rechargement de la page
    // Traitement des données (ex. appel API)
    console.log("Données du formulaire :", values);
    // Réinitialiser le formulaire si besoin
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <article>     
      <section className='page-layout'>

        <aside className='left-sidebar'>
          <LeftSidebar sidebar={contactPage.sidebar}/>
        </aside>

        <MainContent
          title={contactPage.title}
          subtitle={contactPage.subtitle}
          firstcontent={contactPage.firstcontent}
          secondcontent={contactPage.secondcontent}
        />

        <aside className='right-sidebar'>          
          <RightSidebar 
            image={
              <img src={contactPage.mainImage} alt="" />
            } 
          />
        </aside>
            
      </section>
          
      <section className='form-layout'>
        <div className='form-container'>

          <form className='form' onSubmit={handleSubmit}>
            <input 
              className='form-case'
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder='Nom'
              required
            />

            <input
              className='form-case'
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder='email'
              required
            />

            <textarea
              className='form-case'
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder='Message'
              required
            />

            <button className='submit-button' type="submit">
              Envoyer
            </button>

          </form>
        </div>
          
      </section>
    </article>

  );
}


