import '../styles/Pages.css';

function Skills({ children }) {
    return <>{children}</> 
}

function SkillList({element}){ 
    return (
        <h3>{element}</h3>
    ) 
} 

export default function Sidebar() {
  return (
    <article className="sidebar">
        <SkillList element={'Expérience utilisateur'}/>
         <h2>* *</h2>
         <SkillList element={'Marketing'} />
         <h2>* *</h2>
         <SkillList element={'Communication'} />
     </article>
  );
}