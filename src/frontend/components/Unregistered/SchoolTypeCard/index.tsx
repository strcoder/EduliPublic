import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const SchoolTypeCard = ({ link, title, Icon }) => {
  return (
    <Link
      to={link}
      className='SchoolTypeCard bg-base border-base light__text-secondary dark__text-base bounceIn'
      title={`Go to ${title}`}
    >
      <figure><Icon size={30} /></figure>
      <span>{title}</span>
    </Link>
  );
};

export default SchoolTypeCard;
