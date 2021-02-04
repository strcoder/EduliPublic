import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import StarsScore from '../../General/StarsScore';
import './styles.scss';

const AreaCard = ({ title, description, link, backgroundColor, score }) => {
  return (
    <div className='AreaCard bounceIn'>
      <figure className='AreaCard__back'>
        <img src='/reactjs.jpg' alt='reactjs' />
      </figure>
      <div className='AreaCard__body'>
        <p><strong>{title}</strong></p>
        <StarsScore score={score} starColor='text-soft' />
        <p>{description}</p>
        <div className='flex'>
          <Link to={link} className='btn-outline-soft'>
            <span>Guardar</span>
            <AiOutlineHeart />
          </Link>
          <Link to={link} className='btn-soft'>
            Conocer más
          </Link>
        </div>
      </div>
    </div>
  );
};

const LevelCard = ({ title, description, link, score }) => {
  return (
    <div className='LevelCard bg-base bounceIn'>
      <button
        type='button'
        title='Save on favorites'
        className='LevelCard--like light__btn-link-soft dark__btn-link-secondary'
      >
        <AiOutlineHeart />
      </button>
      <div className='LevelCard__back light__bg-primary dark__bg-soft' />
      <figure className='LevelCard__header'>
        <img src='/reactjs.jpg' alt='reactjs' />
      </figure>
      <div className='LevelCard__divider bg-base' />
      <div className='LevelCard__body'>
        <p><strong>{title}</strong></p>
        <StarsScore score={score} starColor='' />
        <p>{description}</p>
        <Link to={link} className='light__btn-link-success dark__btn-link-soft'>
          Conocer más
        </Link>
      </div>
    </div>
  );
};

const CourseCard = ({ title, description, link, score }) => {
  return (
    <div className='CourseCard bg-base bounceIn'>
      <button
        type='button'
        title='Save on favorites'
        className='CourseCard--like light__btn-link-secondary dark__btn-link-soft'
      >
        <AiOutlineHeart />
      </button>
      <div className='CourseCard__body'>
        <span className='CourseCard__body--subtitle'>
          4 days ago
        </span>
        <p><strong>{title}</strong></p>
        <StarsScore score={score} starColor='' />
        <p>{description}</p>
        <Link to={link} className='light__btn-outline-primary dark__btn-outline-soft'>
          Conocer más
        </Link>
      </div>
      <div className='CourseCard__footer'>
        <div className='CourseCard__footer--students border-base bg-primary'>
          <p>40</p>
          <span>students</span>
        </div>
        <div className='CourseCard__footer--lessons border-base bg-primary'>
          <p className='value'>5123</p>
          <span className='type'>lessons</span>
        </div>
        <div className='CourseCard__footer--reviews border-base bg-primary'>
          <p className='value'>32</p>
          <span className='type'>reviews</span>
        </div>
      </div>
    </div>
  );
};

const SchoolContain = () => {
  return (
    <div className='SchoolContain'>
      <h2 className='text-center'>Información de la escuela</h2>
      <h3>Areas academicas</h3>
      <div className='SchoolContain__areas'>
        {[101, 201, 301, 401].map((item) => (
          <React.Fragment key={item}>
            <AreaCard
              title='Nombre Area'
              description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia et sint aliquam nam laboriosam ut'
              link='/areas'
              backgroundColor='primary'
              score={5}
            />
          </React.Fragment>
        ))}
      </div>
      <h3>Niveles academicos</h3>
      <div className='SchoolContain__levels'>
        {[110, 210, 310, 410].map((item) => (
          <React.Fragment key={item}>
            <LevelCard
              title='Nombre Nivel'
              description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia et sint aliquam nam laboriosam ut'
              link='/level'
              score={5}
            />
          </React.Fragment>
        ))}
      </div>
      <h3>Cursos recomendados</h3>
      <div className='SchoolContain__courses'>
        {[111, 222, 333, 444].map((item) => (
          <React.Fragment key={item}>
            <CourseCard
              title='Nombre Curso'
              description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia et sint aliquam nam laboriosam ut'
              link='/course'
              score={5}
            />
          </React.Fragment>
        ))}
      </div>
      {/* // {tab === 'courses' && (
      //   <CourseCard
      //     title='Nombre Curso'
      //     description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia et sint aliquam nam laboriosam ut'
      //     link='/course'
      //     score={5}
      //   />
      // )}
      // {tab === 'reviews' && (
      //   <h1>Reseñas</h1>
      // )} */}
    </div>
  );
};

export default SchoolContain;
