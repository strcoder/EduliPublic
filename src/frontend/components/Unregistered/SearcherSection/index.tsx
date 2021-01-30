import React from 'react';
import SearcherCard from '../SearcherCard';
import './styles.scss';

const SearcherSection = () => {
  return (
    <section className='SearcherSection'>
      <h2>¿Buscas algo más especializado?</h2>
      <p>Puedes hacer tu busqueda por area academica, nivel academico o un curso en especial</p>
      <SearcherCard
        title='Areas'
        description='Tenemos las areas escenciales como primaria, secundaria y más ...'
        placeholder='Digita el area que desas'
        image='/search1.svg'
        imageAlt='SearchArea'
        link='/areas'
        linkText='Ver todas las areas'
      />
      <SearcherCard
        title='Niveles'
        description='Tenemos varios niveles de interes como nievles basicos, computacion, ciencias y más ...'
        placeholder='Digita el nivel que desas'
        image='/search2.svg'
        imageAlt='SearchLevel'
        link='/levels'
        linkText='Ver todos los niveles'
      />
      <SearcherCard
        title='Cursos'
        description='Contamos con cursos que esten dentro de instituciones asi como fuera de instituciones con cursos desde basicos hasta avanzados de muchos temas'
        placeholder='Digita el curso que desas'
        image='/search3.svg'
        imageAlt='SearchCourse'
        link='/course'
        linkText='Ver todos los cursos'
      />
    </section>
  );
};

export default SearcherSection;
