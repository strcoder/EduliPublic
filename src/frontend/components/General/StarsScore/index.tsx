import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import './styles.scss';

const StarsScore = ({ score, starColor }: { score: number, starColor: string | undefined }) => {
  return (
    <div className='StarsScore flex'>
      <i className={`${starColor || 'light__text-secondary dark__text-base'}`}>
        {score < 0.5 ? <FaRegStar /> : score < 1 ? <FaStarHalfAlt /> : <FaStar />}
      </i>
      <i className={`${starColor || 'light__text-secondary dark__text-base'}`}>
        {score < 1.5 ? <FaRegStar /> : score < 2 ? <FaStarHalfAlt /> : <FaStar />}
      </i>
      <i className={`${starColor || 'light__text-secondary dark__text-base'}`}>
        {score < 2.5 ? <FaRegStar /> : score < 3 ? <FaStarHalfAlt /> : <FaStar />}
      </i>
      <i className={`${starColor || 'light__text-secondary dark__text-base'}`}>
        {score < 3.5 ? <FaRegStar /> : score < 4 ? <FaStarHalfAlt /> : <FaStar />}
      </i>
      <i className={`${starColor || 'light__text-secondary dark__text-base'}`}>
        {score < 4.5 ? <FaRegStar /> : score < 5 ? <FaStarHalfAlt /> : <FaStar />}
      </i>
      <span className={`${starColor || 'light__text-success dark__text-gray-400'}`}>
        {`(${score})`}
      </span>
    </div>
  );
};

export default StarsScore;
