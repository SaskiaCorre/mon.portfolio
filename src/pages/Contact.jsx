import '../styles/Pages.css'
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import { useState } from "react";

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
        <section className='hero-layout'>
           <div className='sidebar'>              
               <h2><Sidebar element={'A l\'écoute'}/></h2>
               <h2><Sidebar element={'de vos opportunités'}/></h2>
               <h2>* *</h2>
               <h2>*</h2>
               <h2><Sidebar element={'Disponible'}/></h2>
               <h2>* *</h2>
               <h2>*</h2>
               <h2><Sidebar element={'Mobile'}/></h2>
           </div>
           <div className='main-content'>
                <h1><Hero title={'Envie d\'échanger , N\'hésitez pas à me contacter'} /></h1>
               <main className='margin-content'>
                <form className='form' onSubmit={handleSubmit}>
                    <input className='form-case'
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

                <button className='submit-button' type="submit">Envoyer</button>
                </form>
                </main>
            </div>
        </section>
    </article>

  );
}


