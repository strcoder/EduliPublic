import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const SearcherCard = ({ title, description, placeholder, image, imageAlt, link, linkText }: any) => {
  return (
    <div className='SearcherCard bg-base bounceIn'>
      <div className='SearcherCard--form'>
        <p><strong>{title}</strong></p>
        <p>{description}</p>
        <form action='' className='form-control'>
          <label htmlFor=''>
            <small>Buscar</small>
            <input type='text' placeholder={placeholder} className='form-input' />
          </label>
          <button type='submit' className='btn-primary form-button' title='Search'>Buscar</button>
        </form>
      </div>
      <figure className='SearcherCard--image'>
        <img src={image} alt={imageAlt} />
        <Link
          to={link}
          className='light__btn-outline-primary dark__btn-outline-soft'
          title={linkText}
        >
          {linkText}
        </Link>
      </figure>
    </div>
  );
};

export default SearcherCard;
