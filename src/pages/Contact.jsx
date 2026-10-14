import '../styles/Contact.css';
import { useState } from "react";
import PAGES from '../data/pagesData';
import MainContent from '../components/MainContent';

const contactPage = PAGES.contact;

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
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
    setValues({ name: "", email: "", phone: "",message: "" });
  };

  return (
    <article className='contact-page'>     
      <section className='page-layout'>
        <MainContent
          title={contactPage.title}
          subtitle={contactPage.subtitle}
          badges={contactPage.badges}
          firstcontent={contactPage.firstcontent}
          secondcontent={contactPage.secondcontent}
        />
          
        <div className='form-layout'>
          <div className='form-container'>

            <form className='form' onSubmit={handleSubmit}>
              <label htmlFor="name">Nom</label>
                <input 
                  className='form-case'
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder='Vos nom et prénom'
                  required
                />

              <label htmlFor="name">Mail</label>
                <input
                  className='form-case'
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder='Votre adresse mail'
                  required
                />

              <label htmlFor="name">Téléphone</label>
                <input
                  className='form-case'
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder='Votre numéro de téléphone'              
                />

              <label htmlFor="name">Message</label>
                <textarea
                  className='form-case'
                  type="text"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  required
                />

              <button className='submit-btn' type="submit">
                Envoyer
              </button>

            </form>
          </div>
            
        </div>
      </section>
    </article>

  );
}


