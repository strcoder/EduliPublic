import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarsScore from '../../General/StarsScore';
import './styles.scss';

const CardReview = () => {
  return (
    <div className='CardReview boder-base'>
      <div className='CardReview__header'>
        <figure className='CardReview__header--avatar'>
          <img src='/user.svg' alt='User avatar' />
        </figure>
        <div className='CardReview__header--user flex'>
          <Link to='/' className='btn-link' title='Nombre de usuario'>
            Nombre de usuario
          </Link>
          <span className='badge' title='User Active'>Active</span>
        </div>
        <StarsScore score={5} starColor='' />
      </div>
      <div className='CardReview_body'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium commodi quis suscipit, reprehenderit aliquid dolore illum! Odit asperiores voluptatum earum nesciunt, aliquid similique suscipit blanditiis eius, magnam autem optio nobis.</p>
      </div>
      <div className='CardReview--date'>
        <p>01/01/2021</p>
      </div>
    </div>
  );
};

const SchoolReviews = () => {
  return (
    <section className='SchoolReviews'>
      <h2>Reviews</h2>
      <div className='SchoolReview__body'>
        <CardReview />
        <CardReview />
        <CardReview />
        <CardReview />
      </div>
    </section>
  );
};

export default SchoolReviews;
