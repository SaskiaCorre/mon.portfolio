// FICHIER A SUPPRIMER UNE FOIS LA MISE EN PAGE TERMINEE
<>
   <Header />

   <main>

      <section className="hero">

         <div className="hero-layout">

            <aside>
               Sidebar
            </aside>

            <div className="hero-content">

               <h1>Titre principal</h1>

               <p>Description</p>

               <div className="hero-buttons">
                  boutons
               </div>

            </div>

         </div>

      </section>

      <section className="projects-preview">

         <h2>Projets</h2>

         <div className="cards-grid">

            <article className="project-card">
            </article>

         </div>

      </section>

      <section className="about-preview">
      </section>

      <section className="contact-preview">
      </section>

   </main>

   <Footer />

_____________________________________________________________________________________
// HOME
<header>
   <img className='logo' />       
      <nav className='nav-container'>
        <NavLink className="nav-link"></NavLink>
      </nav>      
</header>

<main>
   <article className="home-page">
      {/* <Hero />  */}
      <section className="hero-layout">
         <div className="hero-content">
            <h1 className="hero-title"></h1>
               <p className="hero-text"></p>
            <div className="hero-cta">
               <button className="hero-cta"></button>
            </div>
         </div>
         <div className="hero-image"></div>        
      </section>

      <section className='page-layout'>       
        <aside className='left-sidebar'>
        </aside>

      {/* <MainContent /> */}
      <div className="page-content">
         <h1 className="page-title"></h1>
            <h2 className="page-subtitle"></h2>
            <p className="page-text"></p>
      </div>    
        <aside className='right-sidebar'>
            {/* <RightSidebar  /> */}
            <div className="main-image"></div> 
        </aside>
      </section>
        
      <section className='projects-preview'>
        {/* <Card /> */}
        <section className='cards-container'>
        <Link className='card-link'>
            <div className='one-card-container'>      
               <div className='card'>
                  <p className='card-category'></p>
                  <img className='card-img'></img>
                  <h2 className='card-title'>{project.title}</h2>
                  <h4 className='card-description'></h4>                   
               </div>
            </div>   
         </Link>
         </section> 
      </section>

      <section className="about-preview">
         <aside className='preview-sidebar'>
            {/* <RightSidebar /> */}
            <div className="main-image"></div> 
         </aside>
         {/* <MainContent /> */}
         <div className="page-content">
            <h1 className="page-title"></h1>
            <p className="page-text"></p>
            <button className="page-cta"></button>
         </div> 
      </section>

      <section className="contact-preview">
         {/* idem "about-preview" */}
      </section>
   </article>
</main>   

<footer>
   <div className='logo-footer'></div>
   <div className='copyright'></div>
   <div className='nav-container-footer'>
      <Link className='footer-links'>
         <img className="link-footer"></img>
      </Link>
   </div>
   </footer>

{/* ABOUT */} 
<article>
   {/* MainContent et SidebarS = Idem HOME */}
</article>

{/* PROJECTS */}
<article>
   <section className='page-projects'>
      {/* MainContent et SidebarS = Idem HOME */}        
   
      <section className="projects-preview">
         {/* <ProjectPreview /> */}
         <section className="one-project">      
            {/* <GridProject /> */}
            <div className="projects-preview">
               <Link>
                  <img />
               </Link>
            </div>
         </section>
      </section>

   </section>
</article>

{/* CONTACT */}
<article>     
   {/* MainContent et SidebarS = Idem HOME */}
   <section className='form-layout'>
      <div className='form-container'>
         <form className='form'>
            <input className='form-case' />
            <button className='submit-button'></button>
         </form>
      </div>
   </section>
</article>
</>

// CLICK AGRANDISSEMENT IMAGE
// 1. Dans Gallery, qui contient l'image à agrandir, ajouter :
//       import { useState } from 'react';
// 2. Entre export default... et le return :
//       const [selectedImage, setSelectedImage] = useState(null);
// 3. Dans <img /> :
//       className='details-img'
//       key={gallery.title}
//       onClick={() => setSelectedImage(gallery)}

// 4. Dans le CSS :
//    .details-img {
//   width: 100%;
//   height: auto;
//   display: block;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: transform 0.2s ease;
// }

// .details-img:hover {
//   transform: scale(1.03);
// }

// .lightbox {
//   position: fixed;
//   inset: 0;
//   z-index: 1000;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   padding: 2rem;

//   background: rgba(0, 0, 0, 0.85);

//   cursor: pointer;
// }


// .lightbox-content {
//   position: relative;

//   max-width: 90vw;
//   max-height: 90vh;

//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   cursor: default;
// }


// .lightbox-content img {
//   max-width: 90vw;
//   max-height: 80vh;

//   width: auto;
//   height: auto;

//   object-fit: contain;

//   border-radius: 8px;
// }


// .lightbox-content p {
//   margin-top: 1rem;

//   color: white;
//   text-align: center;
// }


// .lightbox-close {
//   position: absolute;

//   top: -45px;
//   right: -10px;

//   border: none;
//   background: transparent;

//   color: white;

//   font-size: 2.5rem;
//   line-height: 1;

//   cursor: pointer;
// }


<article className='details-page'> 
   <h2 className='hero-subtitle'></h2>
   <section className="hero-layout">
      <div className="hero-content">
         <ul className="page-badges">
            <div className="badge"></div>  {/* nombre de "badge" variable */}
            <div className="badge"></div>  {/* en fonction du projet */}
         </ul>
         <h1 className="hero-title"></h1>
         <p className="hero-text"></p>
      </div>
      <div className="hero-image"></div>
   </section>

   <section className='project-details'>
      <div className="context">
         <h2 className="section-title"></h2>
            <p className="section-category"></p>
            <p className="section-description"></p>
            <div className="context-grid">
               <div className="context-card">
                  <h3></h3>
                  <p></p>
               </div>
               <div className="context-card">...</div>
               <div className="context-card">...</div>
               <div className="context-card">...</div>
         </div>
      </div>

      <div className="objective">
         <h2 className="section-title"></h2>
         <p className="section-description"></p>
         <div className='objectives-grid'>
            <div className='objective-card'>
               <h3></h3>
               <p></p>
            </div>
            <div className='objective-card'>...</div>
            <div className='objective-card'>...</div>
         </div>
      </div>
         
      <div className="approach">
         <h2 className="section-title"></h2>
            <p className="section-description"></p>
         <div className='approach-grid'>
            <div className='approach-card'>
               <h3></h3>
               <p></p>
            </div>
            <div className='approach-card'>...</div>  {/* nombre de "approach-card" variable */}
            <div className='approach-card'>...</div>  {/* en fonction du projet */}
         </div>
      </div>
         
      <div className="feature">
         <h2 className="section-title"></h2>
            <div className="features-grid">
               <div className="feature-card">
                  <svg className="feature-icon">...</svg>
                  <h3></h3>
               </div>
                <div className="feature-card">...</div> {/*nombre de "feature-card" variable */}
               <div className="feature-card">...</div>  {/* en fonction du projet */}
            </div>
      </div>

      <div className="datamodel"> {/* uniquement sur le projet Ecommerce Symfony */}
         <h2 className="section-title"></h2>
            <p className="section-description">...</p>
            <div className="datamodel-grid">
               <div className="datamodel-card">
                  <h3></h3>
                  <img className='grid-img'>
               </div>
               <div className="datamodel-card">...</div>
               <div className="datamodel-card">...</div>
            </div>
            <h3 className="datamodel-subtitle"></h3>
            <div className="data-choices">
               <div className="datamodel-card">
                  <svg className="datamodel-icon"></svg>
                  <h3></h3>
                     <p className="section-description"></p>
               </div>
               <div className="datamodel-card">...</div>
               <div className="datamodel-card">...</div>
               <div className="datamodel-card">...</div>
               <div className="datamodel-card">...</div>
               <div className="datamodel-card">...</div>
               <div className="datamodel-card">...</div>
            </div>
      </div>

      <div className="diagram"> {/* uniquement sur le projet Ecommerce Symfony */}
         <h2 className="section-title"></h2>
            <p className="section-description"></p>
         <div className="diagram-grid">
            <div className="diagram-card">
               <h3></h3>
                  <p></p>
                  <img className='grid-img'>
            </div>
            <div className="diagram-card">...</div>
         </div>
      </div>

      <div className="model"> {/* uniquement sur le projet Ecommerce Symfony */}
         <h2 className="section-title"></h2>
            <div className='model-grid'>
               <div className='model-card'>
                  <h3></h3>
                  <img className='card-img'>
                  <p></p>
                  <button className='cta-btn'>
                     <Link className='link-to'></Link>
                  </button>
               </div>
            </div>
      </div>
         
      <div className="gallery">
         <h2 className="section-title"></h2>
         <div className='gallery-grid'>
            <figure className="gallery-card">
               <figcaption>
                  <h3></h3>
                  <p className='img-description'></p>
               </figcaption>
               <img className='details-img'> 
            </figure>
            <figure className="gallery-card">...</figure>  {/* nombre de "gallery-card" variable */}
            <figure className="gallery-card">...</figure>  {/* en fonction du projet */}
         </div>
      </div>
   </section>

   <button className='git-btn'>
      <a className='git-link'>
         <p></ p>
         <svg className='git-icon'></svg>
     </a>
   </button>
</article>