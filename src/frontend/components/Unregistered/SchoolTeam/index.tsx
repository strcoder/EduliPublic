import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import './styles.scss';

const TeamCard = ({ avatar }) => {
  return (
    <div className='TeamCard'>
      <figure className='TeamCard--avatar bg-base'>
        <img src={avatar} alt='profileImage' />
      </figure>
      <div className='TeamCard__body bg-base'>
        <h6 className='TeamCard__body--title'>Bonnie M. Green</h6>
        <div className='TeamCard__body--socialMedia flex'>
          <Link to='/' className='btn-link'>
            <FaFacebookF />
          </Link>
          <Link to='/' className='btn-link'>
            <FaTwitter />
          </Link>
          <Link to='/' className='btn-link'>
            <FaInstagram />
          </Link>
          <Link to='/' className='btn-link'>
            <FaLinkedinIn />
          </Link>
        </div>
        <div className='grid'>
          <p>Subdirector</p>
          <p>Pedagogia (UNAM)</p>
        </div>
      </div>
      <div className='TeamCard__footer'>
        <Link to='/' className='btn-primary'>
          <BiMailSend />
          <span>Send a message</span>
        </Link>
      </div>
    </div>
  );
};

const SchoolTeam = () => {
  return (
    <section className='SchoolTeam'>
      <h2>Team</h2>
      {/* <div className='SchoolTeam__header bg-base'>
        <figure className='SchoolTeam__header--avatar'>
          <img src='/team4.jpg' alt='User Avatar' />
        </figure>
        <div className='SchoolTeam__header--info'>
          <h4>Nombre de usuario</h4>
          <p>Director General</p>
          <p>Doctor en Educación (UNAM)</p>
        </div>
        <div className='SchoolTeam__header--socialMedia flex'>
          <Link to='/' className='btn-link' title='Go to user Facebook'>
            <FaFacebookF />
          </Link>
          <Link to='/' className='btn-link' title='Go to user Instagram'>
            <FaInstagram />
          </Link>
          <Link to='/' className='btn-link' title='Go to user Twitter'>
            <FaTwitter />
          </Link>
          <Link to='/' className='btn-link' title='Go to user Linkedin'>
            <FaLinkedinIn />
          </Link>
          <Link to='/' className='btn-link' title='Send e-mail to user'>
            <BiMailSend />
          </Link>
        </div>
        <div className='SchoolTeam__header--contact'>
          <Link to='/' className='btn-outline'>
            Enviar mensaje
          </Link>
        </div>
      </div> */}
      <div className='SchoolTeam__body'>
        <TeamCard avatar='/user.svg' />
        <TeamCard avatar='/user.svg' />
        <TeamCard avatar='/user.svg' />
        <TeamCard avatar='/user.svg' />
      </div>
    </section>
  );
};

export default SchoolTeam;
