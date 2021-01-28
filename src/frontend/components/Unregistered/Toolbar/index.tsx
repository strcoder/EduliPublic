import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaReact } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import { setTheme } from '../../../Context/actions';
import { useStateValue } from '../../../Context';
import './styles.scss';

const Toolbar = () => {
  const { theme, dispatch } = useStateValue();
  const [navActive, setNavActive] = useState(false);
  return (
    <header className={`Toolbar ${theme}`}>
      <nav className='Toolbar__nav'>
        <Link to='/' className='Toolbar__nav--logo'>
          <img src='/logo.png' alt='Eduli-Logotipo' />
        </Link>
      </nav>
      <div className='Toolbar__actions'>
        <div className='Toolbar__actions--theme flex'>
          <button
            type='button'
            className={`btn-link-soft ${theme === 'light' && 'bounceIn'}`}
            onClick={() => setTheme({ theme: 'light', dispatch })}
          >
            light
          </button>
          <div className='divider' />
          <button
            type='button'
            className={`btn-link-soft ${theme === 'dark' && 'bounceIn'}`}
            onClick={() => setTheme({ theme: 'dark', dispatch })}
          >
            dark
          </button>
        </div>
        <Link
          to='/register'
          className='btn-soft'
          onClick={() => {}}
        >
          Registrate
        </Link>
        <Link
          to='/login'
          className='btn-outline-soft single-line'
          onClick={() => {}}
        >
          Iniciar Sesión
        </Link>
        <button type='button' className='ToolbarOpenNav btn-link-soft bounceIn' onClick={() => setNavActive(!navActive)}>
          {navActive && (
            <figure className='bounceIn'>
              <FaTimes size={30} />
            </figure>
          )}
          {!navActive && (
            <figure className='bounceIn'>
              <HiMenuAlt1 size={30} />
            </figure>
          )}
        </button>
      </div>

      {navActive && (
        <nav className={`Toolbar__links ${theme} bounceInDown`}>
          <Link to='/' className='btn-link-soft'>
            <span>Home</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
          <Link to='/institutes' className='btn-link-soft'>
            <span>Schools</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
          <Link to='/areas' className='btn-link-soft'>
            <span>Areas</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
          <Link to='/levels' className='btn-link-soft'>
            <span>Levels</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
          <Link to='/courses' className='btn-link-soft'>
            <span>Courses</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
          <Link to='/platforms' className='btn-link-soft'>
            <span>Platforms</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
          <Link to='/' className='btn-link-soft'>
            <span>About</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
          <Link to='/institutes' className='btn-link-soft'>
            <span>Partners</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
          <Link to='/areas' className='btn-link-soft'>
            <span>Blog</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
          <Link to='/levels' className='btn-link-soft'>
            <span>Jobs</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
          <Link to='/courses' className='btn-link-soft'>
            <span>Support</span>
            <figure>
              <FaReact />
            </figure>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Toolbar;
