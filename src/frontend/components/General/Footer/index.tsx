import React from 'react';
import { useStateValue } from '../../../Context';
import './styles.scss';

const Footer = () => {
  const { theme } = useStateValue();
  return (
    <footer className={`FooterFixed ${theme}`}>
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
