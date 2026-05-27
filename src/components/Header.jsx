import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../assets/img/logoSpm.png';

export default function Header() {
  return (
    <header>
      <img src={logo} className='logo' alt="logo spm"/> 
      
      <nav className='nav-container'>
        <NavLink className="nav-link" to={"/"}>Accueil</NavLink>
        <NavLink className="nav-link" to={"a-propos"}>A propos</NavLink>
        <NavLink className="nav-link" to={"projets"}>Projets</NavLink>
        <NavLink className="nav-link" to={"contact"}>Contact</NavLink>
      </nav>      
    </header>
  );
}