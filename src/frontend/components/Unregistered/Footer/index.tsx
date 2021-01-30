import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  return (
    <section className='Footer'>
      <div className='Footer__header'>
        <h2>Eduli</h2>
        {/* <p>{institute?.slogan}</p> */}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, veniam nemo. Maxime, optio eveniet! Aperiam eaque facilis iure, ipsa similique minus obcaecati ullam quod, numquam error nemo, ut culpa amet.</p>
        <nav className='Footer__header--socialMedia'>
          <Link to='/social-media/facebook' className='btn-link-facebook' title='Facebook Eduli'>
            <FaFacebookF size={20} />
          </Link>
          <Link to='/social-media/instagram' className='btn-link-instagram' title='Instagram Eduli'>
            <FaInstagram size={20} />
          </Link>
          <Link to='/social-media/twitter' className='btn-link-twitter' title='Twitter Eduli'>
            <FaTwitter size={20} />
          </Link>
          <Link to='/social-media/linkedin' className='btn-link-linkedin' title='Linkedin Eduli'>
            <FaLinkedin size={20} />
          </Link>
        </nav>
        <Link to='/'>All copyright reserved @ eduli 2020</Link>
      </div>
      <div className='Footer__body'>
        <div className='Footer__body--navigation'>
          <p><strong>Products</strong></p>
          <nav>
            <Link to='/'>Schools</Link>
            <Link to='/'>Areas</Link>
            <Link to='/'>Levels</Link>
            <Link to='/'>Courses</Link>
            <Link to='/'>Platforms</Link>
          </nav>
        </div>
        <div className='Footer__body--about'>
          <p><strong>About</strong></p>
          <nav>
            <Link to='/'>Blog</Link>
            <Link to='/'>Jobs</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Partners</Link>
          </nav>
        </div>
        <div className='Footer__body--product'>
          <p><strong>Links</strong></p>
          <nav>
            <Link to='/'>Videos</Link>
            <Link to='/'>Images</Link>
            <Link to='/'>Registrate</Link>
            <Link to='/'>Iniciar Sesión</Link>
            <Link to='/'>Documentation</Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Footer;
