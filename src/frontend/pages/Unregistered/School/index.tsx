import React from 'react';
import { Helmet } from 'react-helmet';
import SchoolContain from '../../../components/Unregistered/SchoolContain';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import StarsScore from '../../../components/General/StarsScore';
import SchoolInfo from '../../../components/Unregistered/SchoolInfo';
import Footer from '../../../components/Unregistered/Footer';
import './styles.scss';
import SchoolTeam from '../../../components/Unregistered/SchoolTeam';
import SchoolReviews from '../../../components/Unregistered/SchoolReviews';
import SchoolSimilar from '../../../components/Unregistered/SchoolSimilar';

const School = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Eduli - SchoolName</title>
        <meta name='description' content='Descriccion de la institucion educativa' />
      </Helmet>
      <section className='School'>
        <SchoolInfo />
        <SchoolContain />
        <SchoolTeam />
        <SchoolReviews />
        <SchoolSimilar />
        <Footer />
      </section>
    </>
  );
};

export default School;
