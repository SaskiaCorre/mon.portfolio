import { NavLink } from 'react-router-dom';
import '../App.css';
import logoHeader2 from '../assets/img/logoHeader2.png';

export default function Header() {
  return (
    <header>
      <img src={logoHeader2} className='logo' alt="logo spm"/> 
      
      <nav className='nav-container'>
        <NavLink className="nav-link" to={"/"}>Accueil</NavLink>
        <NavLink className="nav-link" to={"projets"}>Projets</NavLink>
        <NavLink className="nav-link" to={"a-propos"}>Profil</NavLink>
        <NavLink className="nav-link" to={"contact"}>Contact</NavLink>
      </nav>      
    </header>
  );
}