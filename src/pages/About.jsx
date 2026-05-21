import '../styles/Pages.css'
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import imgAbout2 from '../assets/img/imgAbout2.png'

export default function About(){
    return (
    <article>
      <div className='hero'>
        <section className='hero-layout'>
          
          <aside className='sidebar'>          
            <h2><Sidebar element={'Enthousiaste'}/></h2>
            <h2>* *</h2>
            <h2>*</h2>
            <h2><Sidebar element={'Ecolo'}/></h2>
            <h2>* *</h2>
            <h2>*</h2>
            <h2><Sidebar element={'Curieuse'}/></h2>
            <h2>* *</h2>
            <h2>*</h2>
            <h2><Sidebar element={'Objective'}/></h2>
          </aside>
              
          <div className='hero-content'>         
            <h1>
              <Hero title={'A propos de moi'} />
            </h1>
            <h2 className='hero-subtitle'>
              <Hero subtitle={'Un parcours atypique'} />
            </h2>        
              <p><Hero content={'Une fois diplômée, éprise de liberté et de soif de découvertes, je n\'ai su me résigner à travaillerdans un bureau, cela m\'aurait obligé à me sédentariser.'} /></p>
              <p><Hero content={'Issue d\'une famille de commerçants et négociateurs, j\'ai vite intégrer les bons reflexes:'}/></p>
                <ul className='list-hero'>
                  <li><Hero content={'Etre à l\'écoute des clients'}/></li>
                  <li><Hero content={'Trouver les réponses à leur besoin'}/></li>
                  <li><Hero content={'Les fidéliser'}/></li>
                </ul>
          </div>
          <Hero className='hero-image' 
                image={
                  <img src={imgAbout2} 
                       alt="Ma photo de profil">                       
                  </img>
                } 
          />
        </section>
      </div>
    </article>
  );
}