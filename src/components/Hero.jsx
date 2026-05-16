import '../styles/Pages.css';

// function Content({ children }) {
//     return <>{children}</>
// }

// function MainContent({element}){ 
//     return <>{element}</>
// } 

export default function Hero({title, content}){
  return (
    <>
      {title}
      {content}
    </>
    )

  // (
  //   <article className="hero-layout"> 
  //   <div className='main-content'>
  //     <p><MainContent element={'Mon parcours atypique m\'a permis d\'acquérir de l\'expérience dans ces 3 domaines'} /></p>
  //     <p><MainContent element={'Aujourd\'hui formée à la conception et au développement web, ces 3 atouts me permettent d\'aborder le marketing digital naturellement.'} /></p>
  //   </div>
  //   </article>
  // )
}