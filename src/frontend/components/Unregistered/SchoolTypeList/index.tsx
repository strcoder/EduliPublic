import React from 'react';
import { FaGraduationCap, FaChild, FaReact } from 'react-icons/fa';
import { GiBodyHeight, GiSwordman, GiSwordwoman } from 'react-icons/gi';
import SchoolTypeCard from '../SchoolTypeCard';
import './styles.scss';

const SchoolTypeList = () => {
  return (
    <section className='SchoolTypeList'>
      <SchoolTypeCard link='/schools' title='All schools' Icon={FaGraduationCap} />
      <SchoolTypeCard link='/schools?tag=basic' title='Basic' Icon={FaChild} />
      <SchoolTypeCard link='/schools?tag=middle' title='Middle' Icon={GiBodyHeight} />
      <SchoolTypeCard link='/schools?tag=hight' title='Hight' Icon={GiSwordman} />
      <SchoolTypeCard link='/schools?tag=university' title='University' Icon={GiSwordwoman} />
      <SchoolTypeCard link='/schools?tag=advanced' title='Advanced' Icon={FaReact} />
    </section>
  );
};

export default SchoolTypeList;
