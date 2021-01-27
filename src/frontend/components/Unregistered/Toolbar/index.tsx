import React from 'react';
import { Link } from 'react-router-dom';
import { setTheme } from '../../../Context/actions';
import { useStateValue } from '../../../Context';
import './styles.scss';

const Toolbar = () => {
  const { theme, dispatch } = useStateValue();
  return (
    <header className={`Toolbar ${theme}`}>
      <nav className='Toolbar__nav'>
        <Link to='/' className='Toolbar__nav--logo'>
          <img src='/logo.png' alt='Eduli-Logotipo' />
        </Link>
      </nav>
      <div className='Toolbar__actions flex'>
        <button
          type='button'
          className={`btn-link-soft ${theme}`}
          onClick={() => setTheme({ theme: 'light', dispatch })}
        >
          light
        </button>
        <div className='divider' />
        <button
          type='button'
          className={`btn-link-soft ${theme}`}
          onClick={() => setTheme({ theme: 'dark', dispatch })}
        >
          dark
        </button>
      </div>
    </header>
  );
};

export default Toolbar;
