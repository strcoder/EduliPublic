import React from 'react';
import { Link } from 'react-router-dom';
import SchoolCard from '../SchoolCard';
import './styles.scss';

const SchoolList = () => {
  return (
    <section className='SchoolList'>
      <h2>Featured Schools</h2>
      <div className='SchoolList--items'>
        <SchoolCard />
        <SchoolCard />
        <SchoolCard />
        <SchoolCard />
      </div>
      <Link
        to='/institutes'
        className='light__btn-white dark__btn-dark'
        title='Ver todas las escuelas destacadas'
      >
        Ver más...
      </Link>
    </section>
  );
};

export default SchoolList;
