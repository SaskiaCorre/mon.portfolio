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