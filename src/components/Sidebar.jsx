import '../styles/Pages.css';

function Skills({ children }) {
    return <>{children}</> 
}

export default function Sidebar({element}){ 
    return (<>{element}</>) 
} 

// export default function Sidebar() {
//   return (<>{}</>)
//     <article className="sidebar">
//         <SkillList element={'Expérience utilisateur'}/>
//          <h2>* *</h2>
//          <SkillList element={'Marketing'} />
//          <h2>* *</h2>
//          <SkillList element={'Communication'} />
//      </article>
//   );
// }