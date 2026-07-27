import '../App.css';
import { Link } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import logoFooter from '../assets/img/logoFooter.png';
// import githubLogo from '../assets/img/githubLogo.png';
// import linkedinLogo from '../assets/img/linkedinLogo.png';
import linktreeQRcode from '../assets/img/linktreeQRcode.png';


export default function Footer() {
  return (
    <footer>
      <div className='logo-footer'> 
        <img src={ logoFooter } alt="logo spm"/>
      </div>

      <div><p className='copyright'>&copy; Saskia Perriot-Magnanou - 2026</p>
      </div>

      <div className='footer-socials'>
        <Link className='footer-links' to={"https://github.com/SaskiaCorre"}><FaGithub /></Link>
        <Link className='footer-links' to={"https://www.linkedin.com/in/saskia-corre"}><FaLinkedin /></Link>
        <Link className='footer-links' to={"https://linktr.ee/saskiacorre"}><img className="link-footer" src="./src/assets/img/linktreeQRcode.png" alt="QRCode LinkTree"></img></Link>
      </div>
    </footer>
  );
}