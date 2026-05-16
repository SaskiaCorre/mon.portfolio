import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../assets/img/logo-spm-2.png';

export default function Header() {
  return (
    <header>
      <img src={logo} className='logo' alt="logo spm"/> 
      
      <nav className='nav-container'>
        <NavLink className="link" to={"/"}>Accueil</NavLink>
        <NavLink className="link" to={"a-propos"}>A propos</NavLink>
        <NavLink className="link" to={"projets"}>Projets</NavLink>
        <NavLink className="link" to={"contact"}>Contact</NavLink>
      </nav>      
    </header>
  );
}