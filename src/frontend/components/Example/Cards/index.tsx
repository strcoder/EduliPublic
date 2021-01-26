import React from 'react';
import { FaReact, FaRegCheckCircle, FaExclamationCircle, FaWindowClose } from 'react-icons/fa';
import './styles.scss';

const Card = ({ title, textColor, background, btn, Icon }: any) => {
  return (
    <div className={`Card ${background}`}>
      <div className='Card__header'>
        <h3 className={`text-capitalize ${textColor}`}>{title}</h3>
        <p>Ejemplo de un texto</p>
      </div>
      <div className='Card__body'>
        <figure className={textColor}>
          <Icon size={100} />
        </figure>
        <p>Ejemplo de un texto mas grande con mas de una linea de contenido</p>
      </div>
      <div className='Card__footer'>
        <button type='button' className={btn}>Aceptar</button>
        <button
          type='button'
          className={`light__btn-outline-${title} dark__btn-link-soft`}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

const CardsExample = () => {
  return (
    <section className='Cards'>
      <Card title='primary' textColor='light__text-primary dark__text-gray-400' background='light__bg-base dark__bg-primary' btn='light__btn-primary dark__btn-outline-soft' Icon={FaReact} />
      <Card title='secondary' textColor='light__text-secondary dark__text-gray-400' background='light__bg-base dark__bg-secondary' btn='light__btn-secondary dark__btn-outline-soft' Icon={FaReact} />
      <Card title='tertiary' textColor='light__text-tertiary dark__text-gray-400' background='light__bg-base dark__bg-tertiary' btn='light__btn-tertiary dark__btn-outline-soft' Icon={FaReact} />
      <Card title='success' textColor='light__text-success dark__text-gray-400' background='light__bg-base dark__bg-success' btn='light__btn-success dark__btn-outline-soft' Icon={FaRegCheckCircle} />
      <Card title='warning' textColor='light__text-warning dark__text-gray-400' background='light__bg-base dark__bg-warning' btn='light__btn-warning dark__btn-outline-white' Icon={FaExclamationCircle} />
      <Card title='danger' textColor='light__text-danger dark__text-gray-400' background='light__bg-base dark__bg-danger' btn='light__btn-danger dark__btn-outline-soft' Icon={FaWindowClose} />
      <Card title='dark' textColor='light__text-dark dark__text-gray-400' background='light__bg-base dark__bg-dark' btn='light__btn-dark dark__btn-outline-soft' Icon={FaReact} />
      <Card title='gray' textColor='light__text-gray dark__text-gray-400' background='light__bg-base dark__bg-gray' btn='light__btn-gray dark__btn-outline-soft' Icon={FaReact} />
      <Card title='white' textColor='light__text-white dark__text-dark' background='light__bg-white dark__text-dark dark__bg-white' btn='light__btn-white dark__btn-outline-gray' Icon={FaReact} />
      <Card title='soft' textColor='light__text-soft dark__text-dark' background='light__bg-soft dark__text-dark dark__bg-soft' btn='light__btn-soft dark__btn-outline-gray' Icon={FaReact} />
      <Card title='disable' textColor='light__text-disable dark__text-base' background='light__bg-base dark__bg-disable' btn='light__btn-disable dark__btn-outline-soft' Icon={FaReact} />
    </section>
  );
};

export default CardsExample;
