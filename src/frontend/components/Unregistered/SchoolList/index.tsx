import React from 'react';
import { Link } from 'react-router-dom';
import SchoolCard from '../SchoolCard';
import './styles.scss';

const SchoolList = ({ title, tag, link }) => {
  return (
    <section className='SchoolList'>
      <h2>{title}</h2>
      <div className='SchoolList--items'>
        <SchoolCard />
        <SchoolCard />
        <SchoolCard />
        <SchoolCard />
      </div>
      <Link
        to={link}
        className='light__btn-white dark__btn-dark'
        title={`Ver todas las escuelas ${tag}`}
      >
        Ver más...
      </Link>
    </section>
  );
};

export default SchoolList;
