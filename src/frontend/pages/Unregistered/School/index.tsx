import React from 'react';
import SchoolContain from '../../../components/Unregistered/SchoolContain';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import StarsScore from '../../../components/General/StarsScore';
import SchoolInfo from '../../../components/Unregistered/SchoolInfo';
import Footer from '../../../components/Unregistered/Footer';
import './styles.scss';

const School = () => {
  return (
    <section className='School'>
      <SchoolInfo />
      <SchoolContain />
      <Footer />
    </section>
  );
};

export default School;
