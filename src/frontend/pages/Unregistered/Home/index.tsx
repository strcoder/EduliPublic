import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../../components/Unregistered/Hero';
import SchoolTypeList from '../../../components/Unregistered/SchoolTypeList';
import SchoolList from '../../../components/Unregistered/SchoolList';
import EduliInfo from '../../../components/Unregistered/EduliInfo';
import EduliSupport from '../../../components/Unregistered/EduliSupport';
import ManagersLink from '../../../components/Unregistered/ManagersLink';
import PlatformsLinks from '../../../components/Unregistered/PlatformsLinks';
import Footer from '../../../components/Unregistered/Footer';
import SearcherSection from '../../../components/Unregistered/SearcherSection';
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
      <SchoolTypeList />
      <main>
        <SchoolList title='Featured Schools' tag='destacadas' link='/school?tag=featured' />
        <PlatformsLinks />
        <SchoolList title='New Schools' tag='nuevas' link='/school?tag=new' />
        <ManagersLink />
        <SearcherSection />
      </main>
      <EduliInfo />
      <EduliSupport />
      <Footer />
    </>
  );
};

export default Home;
