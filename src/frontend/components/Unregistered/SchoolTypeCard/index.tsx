import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../Context';
import './styles.scss';

const SchoolTypeCard = ({ link, title, Icon }) => {
  const { theme } = useStateValue();
  return (
    <Link
      to={link}
      className={`SchoolTypeCard ${theme} bounceIn`}
      title={`Go to ${title}`}
    >
      <figure><Icon size={30} /></figure>
      <span>{title}</span>
    </Link>
  );
};

export default SchoolTypeCard;
