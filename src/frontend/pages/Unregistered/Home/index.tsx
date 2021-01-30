import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../../components/Unregistered/Hero';
import './styles.scss';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Eduli - Home</title>
        <meta name='description' content='Plataforma de educación en linea' />
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
