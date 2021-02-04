import React from 'react';
import { FaReact, FaRegArrowAltCircleRight } from 'react-icons/fa';
import StarsScore from '../../General/StarsScore';
import './styles.scss';

const SchoolInfo = () => {
  return (
    <div className='SchoolInfo bg-base'>
      <div className='SchoolInfo__header fadeIn'>
        <div className='SchoolInfo__header--main'>
          <figure>
            <img src='/react.png' alt='' />
          </figure>
          <h1>Nombre de la escuela</h1>
          <StarsScore score={5} starColor='' />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea debitis sunt in aliquam ullam ratione sequi esse porro. Beatae sit maiores vitae ad fugit iusto vero cum corporis sint ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos dolorum dolores fugiat rem harum eius, quia quos ad consectetur esse possimus, illum impedit, quo ex saepe. Voluptatibus, natus accusamus.</p>
      </div>
      <div className='SchoolInfo__body fadeIn'>
        <div className='payment-information'>
          <div className='flex'>
            <p><strong>Tu inscripción incluye</strong></p>
            <p className='light__text-success dark__text-soft'><strong>Plan: Basic-Anual </strong></p>
          </div>
          <ul className='payment-information-list'>
            {[1, 2, 3, 4, 5].map((item) => (
              <React.Fragment key={item}>
                <li>
                  <FaRegArrowAltCircleRight />
                  <strong>{`Beneficio ${item}`}</strong>
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea debitis sunt in aliquam ullam ratione sequi esse porro.</li>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <form className=' SchoolInfo--payment form-control bounceIn'>
          <label htmlFor='' className='form-label'>
            <span>Select plan</span>
            <select
              id='SelectPayment'
              name='selectPayment'
              className='form-select light__btn-outline-primary dark__btn-outline-soft'
            >
              <option value='yearly'>Anual</option>
              <option value='monthly'>Mensual</option>
              <option value='quarterly'>Trimestral</option>
              <option value='biannual'>Semestral</option>
            </select>
          </label>
          <label htmlFor='' className='form-label'>
            <span>Select plan</span>
            <select
              id='SelectPlan'
              name='selectPlan'
              className='form-select light__btn-outline-primary dark__btn-outline-soft'
            >
              <option value='yearly'>Basic</option>
              <option value='monthly'>Expert</option>
              <option value='quarterly'>Pro</option>
            </select>
          </label>
          <div className='PaymentInfo'>
            <div className='flex'>
              <p>Inscripción: </p>
              <p>Ahorras: </p>
            </div>
            <div className='flex'>
              <p>Mensualidad: </p>
              <p>Ahorras: </p>
            </div>
            <div className='flex'>
              <p>Extras: </p>
              <p>Ahorras: </p>
            </div>
            <div className='flex'>
              <p>Total a pagar: </p>
              <p>Ahorras: </p>
            </div>
          </div>
          <button type='button' className='btn-secondary form-button'>
            Registrate
          </button>
        </form>
        <div className='SchoolInfo--details fadeIn'>
          <p>
            <FaReact />
            <strong>Areas: 10</strong>
          </p>
          <p>
            <strong>Niveles: 10</strong>
            <FaReact />
          </p>
          <p>
            <FaReact />
            <strong>Cursos: 10</strong>
          </p>
          <p>
            <strong>Profesores: 10</strong>
            <FaReact />
          </p>
          <p>
            <FaReact />
            <strong>Alumnos: 10</strong>
          </p>
          <p>
            <strong>Egresados: 10</strong>
            <FaReact />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolInfo;
