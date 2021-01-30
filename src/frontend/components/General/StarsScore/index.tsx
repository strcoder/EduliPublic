import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { useStateValue } from '../../../Context';
import './styles.scss';

const StarsScore = ({ score }: { score: number }) => {
  const { theme } = useStateValue();
  return (
    <div className='StarsScore flex'>
      <i className={`star-${theme}`}>
        {score < 0.5 ? <FaRegStar /> : score < 1 ? <FaStarHalfAlt /> : <FaStar />}
      </i>
      <i className={`star-${theme}`}>
        {score < 1.5 ? <FaRegStar /> : score < 2 ? <FaStarHalfAlt /> : <FaStar />}
      </i>
      <i className={`star-${theme}`}>
        {score < 2.5 ? <FaRegStar /> : score < 3 ? <FaStarHalfAlt /> : <FaStar />}
      </i>
      <i className={`star-${theme}`}>
        {score < 3.5 ? <FaRegStar /> : score < 4 ? <FaStarHalfAlt /> : <FaStar />}
      </i>
      <i className={`star-${theme}`}>
        {score < 4.5 ? <FaRegStar /> : score < 5 ? <FaStarHalfAlt /> : <FaStar />}
      </i>
      <span className='light__text-success dark__text-gray-400'>{`(${score})`}</span>
    </div>
  );
};

export default StarsScore;
