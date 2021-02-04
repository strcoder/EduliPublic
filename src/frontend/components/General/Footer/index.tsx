import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className='FooterFixed bg-base'>
      <nav className='FooterFixed__nav'>
        <small>Terminos y condiciones</small>
        <small>Contacto</small>
        <small>Privacidad</small>
        <small>FAQ</small>
        <small>Novedades</small>
      </nav>
    </footer>
  );
};

export default Footer;
