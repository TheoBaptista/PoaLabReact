import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import image1 from '../images/ifrs.png';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'> 
            <a href="http://poa.ifrs.edu.br/" target="http://poa.ifrs.edu.br/"> 
              <img  title="facebook" alt="facebook" src={image1}/>
            </a>
          </div>
          <div className='footer-link-items'>                         
          </div>
          <div className='footer-link-items'>            
            <h2>Coordenação</h2>
              <a href="http://www.inf.poa.ifrs.edu.br/~peres/" > André Peres</a>
              andre.peres@poa.ifrs.edu.br
              R. Cel. Vicente, 281
              Sala 1016 - Torre Sul
              Centro Histórico
              Porto Alegre - RS
              CEP: 90030-041
          </div>
          <div className='footer-link-items'>                         
          </div>
          <div className='footer-link-items'>
            <h2>Redes Sociais</h2>
            <a href='https://www.facebook.com/poalab'>Facebook</a>
            <a href='https://www.youtube.com/user/ComunicaIFRS'>Youtube</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              POALAB
            </Link>
          </div>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href="https://www.facebook.com/poalab"             
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link youtube'
              href="https://www.youtube.com/user/ComunicaIFRS"
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
