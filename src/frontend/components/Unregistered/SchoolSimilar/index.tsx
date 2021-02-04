import React from 'react';
import SchoolList from '../SchoolList';
import './styles.scss';

const SchoolSimilar = () => {
  return (
    // <section className='SchoolSimilar'>
    //   <h2>Escuelas similares</h2>
    //   <div className='SchoolSimilar__body'>
    <SchoolList title='Escuelas similares' tag='similar' link='/' />
    // {/* </div>
    // </section> */}
  );
};

export default SchoolSimilar;
