import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useStateValue } from '../../../Context';
import './styles.scss';

const Hero = () => {
  const { theme } = useStateValue();
  return (
    <>
      <section className='Hero bg-tertiary'>
        <div className='Hero__body text-soft fadeIn'>
          <h1>Educación en linea como la necesitas</h1>
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
              <button
                type='submit'
                className='btn-secondary form-button'
                title='Search'
              >
                <FaSearch />
              </button>
            </label>
          </form>
          <div className='Hero__body--start'>
            <p>¿No sabes que necesitas?</p>
            <button type='button' className='btn-soft'>
              Comenzar
            </button>
            <button type='button' className='btn-outline-soft'>
              Institutos
            </button>
          </div>
        </div>
      </section>
      <div className='custom-shape-divider-top-1612483813'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className={`shape-fill ${theme}`}
          />
        </svg>
      </div>
    </>
  );
};

export default Hero;
