import React, { useState } from 'react';
import { FaTimes, FaReact, FaChevronDown } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../Context';
import { setTheme } from '../../../Context/actions';
import './styles.scss';

const Sidenav = () => {
  const { theme, dispatch } = useStateValue();
  const [active, setActive] = useState(false);
  const [navActive, setNavActive] = useState('');
  return (
    <>
      {active && (
        <button
          type='button'
          aria-label='Close sidenav'
          className={`SidenavCloser ${active}`}
          title='close'
          onClick={() => setActive(false)}
        />
      )}
      <button
        type='button'
        className='SidenavOpen btn-link-soft bounceIn'
        title='Open Sidenav'
        onClick={() => setActive(!active)}
      >
        <HiMenuAlt1 size={25} />
      </button>
      {active && (
        <section className={`Sidenav ${active} ${theme} backInLeft`}>
          <div className='flex'>
            <Link to='/' className='Sidenav--logo' title='Home'>
              <img src='/logo.png' alt='Eduli-Logotipo' />
            </Link>
            <button
              type='button'
              className='btn-link-soft'
              title='Closed sidenav'
              onClick={() => setActive(false)}
            >
              <FaTimes size={25} />
            </button>
          </div>

          <div className='Sidenav__nav'>
            <button
              type='button'
              className='btn-link-soft'
              title={`${navActive === 'products' ? 'Closed' : 'Open'} nav products`}
              onClick={() => setNavActive(navActive === 'products' ? '' : 'products')}
            >
              <span>Products</span>
              {navActive === 'products' && (
                <FaTimes />
              )}
              {navActive !== 'products' && (
                <FaChevronDown />
              )}
            </button>
            {navActive === 'products' && (
              <nav className='bounceIn'>
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
              </nav>
            )}
          </div>

          <div className='Sidenav__nav'>
            <button
              type='button'
              className='btn-link-soft'
              title={`${navActive === 'company' ? 'Closed' : 'Open'} nav company`}
              onClick={() => setNavActive(navActive === 'company' ? '' : 'company')}
            >
              <span>Company</span>
              {navActive === 'company' && (
                <FaTimes />
              )}
              {navActive !== 'company' && (
                <FaChevronDown />
              )}
            </button>
            {navActive === 'company' && (
              <nav className='bounceIn'>
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
          </div>

          <div className='Sidenav__theme'>
            <button
              type='button'
              className='btn-link-soft'
              title={`${navActive === 'theme' ? 'Closed' : 'Open'} theme select`}
              onClick={() => setNavActive(navActive === 'theme' ? '' : 'theme')}
            >
              <span>Theme</span>
              {navActive === 'theme' && (
                <FaTimes />
              )}
              {navActive !== 'theme' && (
                <FaChevronDown />
              )}
            </button>
            {navActive === 'theme' && (
              <div className='Sidenav__theme--items bounceIn'>
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
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Sidenav;
