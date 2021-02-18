import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  FaApple,
  FaGithub,
  FaGooglePlay,
  FaGraduationCap,
  FaPlus,
  FaReact,
  FaSlack,
  FaTimes,
  FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import Hero from '../../../components/Unregistered/Hero';
import SchoolTypeList from '../../../components/Unregistered/SchoolTypeList';
import SchoolList from '../../../components/Unregistered/SchoolList';
import EduliInfo from '../../../components/Unregistered/EduliInfo';
import EduliSupport from '../../../components/Unregistered/EduliSupport';
import ManagersLink from '../../../components/Unregistered/ManagersLink';
import PlatformsLinks from '../../../components/Unregistered/PlatformsLinks';
import Footer from '../../../components/Unregistered/Footer';
import SearcherSection from '../../../components/Unregistered/SearcherSection';
import StarsScore from '../../../components/General/StarsScore';
import './styles.scss';
import { useStateValue } from '../../../Context';

const Lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia et sint aliquam nam laboriosam ut';
const Lorem2 = 'Lorem ipsum dolor';

const IconBox = ({ title, Icon, color, total }) => {
  return (
    <div className='IconBox tada'>
      <figure className={`IconBox--icon ${color}`}>
        <Icon />
      </figure>
      <span>{title}</span>
      <p>{total}</p>
    </div>
  );
};

const LevelCard = ({ title, description, link, score }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className='LevelCard bg-base border-base bounceIn'>
      <button
        type='button'
        title='Save on favorites'
        className={`LevelCard--like btn-link-soft ${favorite && 'tada'}`}
        onClick={() => setFavorite(!favorite)}
      >
        {favorite && (
          <AiTwotoneHeart />
        )}
        {!favorite && (
          <AiOutlineHeart />
        )}
      </button>
      <div className={`LevelCard__back ${!favorite ? 'bg-primary' : 'bg-success'}`} />
      <figure className='LevelCard__header'>
        <img src='/reactjs.jpg' alt='reactjs' />
      </figure>
      <div className='LevelCard__divider bg-base' />
      <div className='LevelCard__body'>
        <p><strong>{title}</strong></p>
        <StarsScore score={score} starColor='' />
        <p className='light__text-gray-700 dark__text-gray-500'>{description}</p>
        <div className='flex'>
          <Link to={link} className='light__btn-link-secondary dark__btn-link-soft'>
            Conocer más
          </Link>
          <Link to={link} className='btn-success'>
            Inscribete
          </Link>
        </div>
      </div>
    </div>
  );
};

const AccordionCard = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={`AccordionCard bg-base border-base ${active && 'active'}`}>
      <button
        type='button'
        onClick={() => setActive(!active)}
        className={`AccordionCard__header ${active ? 'btn-tertiary' : 'light__btn-link dark__btn-link-soft'}`}
      >
        What is the question?
        <i className={active ? 'active' : ''}><FaPlus /></i>
      </button>
      <div className={`AccordionCard__body ${active ? 'active' : ''}`}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga laborum itaque velit? Aliquam, molestias tempore repellat, ipsam vitae consequatur delectus voluptatem temporibus nulla quis itaque quae obcaecati? Nostrum, ullam.</p>
      </div>
    </div>
  );
};

const Home = () => {
  const { theme } = useStateValue();
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Eduli - Home</title>
        <meta name='description' content='Plataforma de educación en linea' />
      </Helmet>
      <Hero />
      <SchoolTypeList />
      <section className='GeneralEduliInfo flex'>
        <IconBox
          title='Total users'
          total='198475'
          Icon={FaUser}
          color='bg-primary'
        />
        <IconBox
          title='Total intitutes'
          total='542'
          Icon={FaReact}
          color='bg-accent'
        />
        <IconBox
          title='Total courses'
          total='1545'
          Icon={FaReact}
          color='bg-success'
        />
        <IconBox
          title='Total graduates'
          total='34535'
          Icon={FaGraduationCap}
          color='bg-warning'
        />
      </section>
      <section className='InstitutesSection bg-base'>
        <Link
          to='/schools?tag=featured'
          className='InstitutesSection__header border-base dark__text-soft bounceIn'
        >
          Featured Schools
        </Link>
        {[1, 2, 3, 4].map((item) => (
          <React.Fragment key={item}>
            <LevelCard
              title='Nombre Nivel'
              description={item === 1 || item === 3 ? Lorem : Lorem2}
              link='/level'
              score={5}
            />
          </React.Fragment>
        ))}
        <Link
          to='/schools?tag=featured'
          className='InstitutesSection__footer border-base dark__text-soft bounceIn'
        >
          Show More
        </Link>
      </section>
      <div className='custom-shape-divider-top-1612553442'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            className={`shape-fill ${theme}`}
          />
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            className={`shape-fill ${theme}`}
          />
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            className={`shape-fill ${theme}`}
          />
        </svg>
      </div>
      <section className='AppsSection fadeIn'>
        <h2>¿Prefieres el entorno movile?</h2>
        <Link to='/app-android' className='light__btn-white dark__btn-black dark__text-soft'>
          <FaGooglePlay size={30} />
          <div>
            <span>Aviable on</span>
            <span>Google Play</span>
          </div>
        </Link>
        <Link to='/app-ios' className='btn-white light__btn-white dark__btn-black dark__text-soft'>
          <FaApple size={40} />
          <div>
            <span>Aviable on</span>
            <span>App Store</span>
          </div>
        </Link>
      </section>
      <SearcherSection />
      <section className='WhatIsEduli RegisterSchool'>
        <h2>Registra tu institucion</h2>
        {/* <p>Actualiza tu escual y haz que tus alumnos disfruten estudiar</p> */}
        <figure className='WhatIsEduli--image'>
          <img src='/docs.svg' alt='' />
        </figure>
        <div className='WhatIsEduli__info'>
          <h3>Beneficios</h3>
          <div>
            <span><FaReact size={30} /></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ad minima fugiat.</p>
          </div>
          <div>
            <span><FaReact size={30} /></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ad minima fugiat.</p>
          </div>
          <div>
            <span><FaReact size={30} /></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ad minima fugiat.</p>
          </div>
        </div>
      </section>
      <div className='custom-shape-divider-bottom-1612553577'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            className={`shape-fill ${theme}`}
          />
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            className={`shape-fill ${theme}`}
          />
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            className={`shape-fill ${theme}`}
          />
        </svg>
      </div>
      <section className='InstitutesSection bg-base'>
        <Link
          to='/schools?tag=featured'
          className='InstitutesSection__header border-base dark__text-soft bounceIn'
        >
          New Schools
        </Link>
        {[1, 2, 3, 4].map((item) => (
          <React.Fragment key={item}>
            <LevelCard
              title='Nombre Nivel'
              description={item === 1 || item === 3 ? Lorem : Lorem2}
              link='/level'
              score={5}
            />
          </React.Fragment>
        ))}
        <Link
          to='/schools?tag=featured'
          className='InstitutesSection__footer border-base dark__text-soft bounceIn'
        >
          Show More
        </Link>
      </section>
      <div className='custom-shape-divider-top-1612553442'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            className={`shape-fill ${theme}`}
          />
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            className={`shape-fill ${theme}`}
          />
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            className={`shape-fill ${theme}`}
          />
        </svg>
      </div>
      <section className='WhatIsEduli'>
        <h2>¿Qué es Eduli?</h2>
        <div className='WhatIsEduli__info'>
          <div>
            <span><FaReact size={30} /></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ad minima fugiat. Recusandae nam cumque a error soluta quasi, voluptatem, voluptatum illo rem nobis porro doloremque saepe accusamus odit id!</p>
          </div>
          <div>
            <span><FaReact size={30} /></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ad minima fugiat. Recusandae nam cumque a error soluta quasi, voluptatem, voluptatum illo rem nobis porro doloremque saepe accusamus odit id!</p>
          </div>
          <div>
            <span><FaReact size={30} /></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ad minima fugiat. Recusandae nam cumque a error soluta quasi, voluptatem, voluptatum illo rem nobis porro doloremque saepe accusamus odit id!</p>
          </div>
          <div>
            <span><FaReact size={30} /></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ad minima fugiat. Recusandae nam cumque a error soluta quasi, voluptatem, voluptatum illo rem nobis porro doloremque saepe accusamus odit id!</p>
          </div>
        </div>
        <figure className='WhatIsEduli--image'>
          <img src='/world.svg' alt='' />
        </figure>
      </section>
      <EduliSupport />
      <section className='EduliFAQ'>
        <h2>Preguntas frecuentes</h2>
        <div className='FaqAccordion border-base'>
          <AccordionCard />
          <AccordionCard />
          <AccordionCard />
          <AccordionCard />
        </div>
      </section>
      <div className='custom-shape-divider-bottom-1612553577'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            className='shape-fill bg-tertiary'
          />
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            className='shape-fill bg-tertiary'
          />
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            className='shape-fill bg-tertiary'
          />
        </svg>
      </div>
      <Footer />
      {/* <main>
        <SchoolList title='Featured Schools' tag='destacadas' link='/school?tag=featured' />
        <PlatformsLinks />
        <SchoolList title='New Schools' tag='nuevas' link='/school?tag=new' />
        <ManagersLink />
      </main>
      <EduliInfo /> */}
    </>
  );
};

export default Home;
