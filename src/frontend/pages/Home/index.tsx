import React from 'react';
import Buttons from '../../components/Example/Buttons';
import CardsExample from '../../components/Example/Cards';
import './styles.scss';

const Home = () => {
  return (
    <div className='Home'>
      <Buttons />
      <CardsExample />
    </div>
  );
};

export default Home;
