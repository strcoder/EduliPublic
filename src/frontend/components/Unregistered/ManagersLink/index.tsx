import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const ManagersLink = () => {
  return (
    <section className='ManagersLink'>
      <figure className='mask bg-secondary' />
      <div className='ManagersLink__body'>
        <h2 className='text-white'>
          ¿Tienes una institución?
        </h2>
        <Link
          to='/manager/signin'
          className='btn-soft'
          title='Registra tu escuela'
        >
          Registrala
        </Link>
      </div>
    </section>
  );
};

export default ManagersLink;
