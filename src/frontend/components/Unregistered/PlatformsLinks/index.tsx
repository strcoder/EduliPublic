import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const PlatformsLinks = () => {
  return (
    <section className='PlatformsLinks'>
      <figure className='mask light__bg-primary dark__bg-tertiary' />
      <h2 className='text-white'>
        Tambien puedes descargar la aplicación
      </h2>
      <div className='PlatformsLinks__body'>
        <Link to='/app-android' className='PlatformsLinks__body--item'>
          <img src='/google-play.png' alt='Google play' />
        </Link>
        <Link to='/app-ios' className='PlatformsLinks__body--item'>
          <img src='/apple-store.png' alt='App store' />
        </Link>
      </div>
    </section>
  );
};

export default PlatformsLinks;
