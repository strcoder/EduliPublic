import React from 'react';
import { Link } from 'react-router-dom';
import StarsScore from '../../General/StarsScore';
import './styles.scss';

const SchoolCard = ({ institute }: any) => {
  return (
    <div className='SchoolCard bg-base fadeIn'>
      <div className='SchoolCard__header'>
        <figure>
          <img src='/react.png' alt='Logo de la escuela' />
        </figure>
        <div>
          <p><strong>{institute?.name || 'Ejemplo'}</strong></p>
          <StarsScore score={institute?.score || 5} />
        </div>
      </div>
      <div className='SchoolCard__body'>
        <p>{institute?.description || 'Aqui deberia de ir la descripcion de la escuela'}</p>
        <p className='light__text-secondary dark__text-gray-400'>
          <strong>{institute?.price || 'Precio desde: $2000 MX'}</strong>
        </p>
        <div className='flex'>
          <Link
            to={`/school/${institute?._id || '123'}`}
            className='light__btn-link-secondary dark__btn-link-soft'
            title='Conoce más acerca de '
          >
            Conocer más
          </Link>
          <Link
            to='/school-register/123'
            className='light__btn-outline-primary dark__btn-outline-primary'
            title='Comienza tu registro en'
          >
            Registrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
