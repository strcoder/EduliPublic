import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './styles.scss';

const Hero = () => {
  return (
    <section className='Hero bg-dark'>
      {/* <picture className='Hero__picture'>
        <source media='(min-width:425px)' srcSet='/hero-1.jpg' sizes='320px' />
        <source media='(min-width:650px)' srcSet='/hero-2.jpg' sizes='320px' />
        <img src='/hero-2.jpg' alt='Welcome' />
      </picture> */}
      <div className='Hero__body text-soft fadeIn'>
        <h3>Educación en linea como la necesitas</h3>
        <form className='form-control form-search'>
          <label htmlFor='HeroInput' className='form-label'>
            <small className='form-title'>Buscar en eduli</small>
            <input
              id='HeroInput'
              type='text'
              name='heroInput'
              className='form-input'
              placeholder='Digita una escuela'
            />
            <button type='submit' className='btn-secondary form-button' title='Search'>
              <FaSearch />
            </button>
          </label>
        </form>
        <div className='Hero__body--start'>
          <p>¿No sabes que necesitas?</p>
          <button type='button' className='btn-soft'>Comenzar</button>
          <button type='button' className='btn-outline-soft'>Institutos</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
