import React from 'react';
import './styles.scss';

const EduliSupport = () => {
  return (
    <section className='EduliSupport bounceIn'>
      <p>
        <strong>Empresas que respaldan Eduli</strong>
      </p>
      <div className='flex'>
        <figure className='EduliSupport__logo'>
          <img src='/google.png' alt='' />
        </figure>
        <figure className='EduliSupport__logo'>
          <img src='/react-logo.png' alt='' />
        </figure>
        <figure className='EduliSupport__logo'>
          <img src='/angular.png' alt='' />
        </figure>
      </div>
    </section>
  );
};

export default EduliSupport;
