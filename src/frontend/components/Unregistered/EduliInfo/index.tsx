import React from 'react';
import './styles.scss';

const EduliInfo = () => {
  return (
    <section className='EduliInfo fadeIn'>
      <h2>¿Que es eduli?</h2>
      <div className='EduliInfo--info'>
        <p>Eduli es una plataforma en la cual podras encontrar facilmente una institutcion adecuada a tu nivel academico, ubicacion y al preecio que mejor se adapte a tu bolsillo.</p>
        <p>Podras encontrar instituciones con educacion 100% en linea o 100% precencial o ambos.</p>
        <p>Cada institucion contara con diferentes herramientas para brindar educacion especializada a cada alumno.</p>
        <p>Las instituciones que cuenten con eduacion en linea contaran con contenido en streaming asi como archivos y actividades al cual se podra acceder en el momento que se desee.</p>
        <p>Con eduli se podran generar varias formas de evaluar y el alumno podra aprender a su ritmo.</p>
        <p>Cada institutcion contara con diferentes metodos de pagos asi como diferentes precios adaptables a tu bolsillo asi como escuelas sin ningun costo.</p>
      </div>
      <figure className='EduliInfo__image'>
        <img src='/test.svg' alt='' />
      </figure>
    </section>
  );
};

export default EduliInfo;
