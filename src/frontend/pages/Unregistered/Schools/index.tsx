import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaAngleLeft, FaAngleRight, FaSearch } from 'react-icons/fa';
import SchoolCard from '../../../components/Unregistered/SchoolCard';
import Footer from '../../../components/Unregistered/Footer';
import Pagination from '../../../components/General/Pagination';
import SchoolFilter from '../../../components/Unregistered/SchoolsFilter';
import './styles.scss';

const Schools = () => {
  const [page, setPage] = useState(0);
  const [searchFocus, setSearchFocus] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Eduli - Schools</title>
        <meta name='description' content='Escuelas registradas dentro de eduli' />
      </Helmet>
      <SchoolFilter />
      <main className='Schools'>
        <section className='Schools__header'>
          <h2>Institutos</h2>
          <div className='flex'>
            <button
              type='button'
              title='Previous page'
              className='light__btn-link dark__btn-link-soft'
              disabled={page < 1}
              onClick={() => setPage(page - 1)}
            >
              <FaAngleLeft />
            </button>
            <p>
              <strong className='light__text-success dark__text-gray-400'>{`${page + 1}`}</strong>
              <strong>{`-${Math.ceil(100 / 7)}`}</strong>
            </p>
            <button
              type='button'
              className='light__btn-link dark__btn-link-soft'
              title='Next page'
              onClick={() => setPage(page + 1)}
              disabled={page + 1 >= Math.ceil(100 / 7)}
            >
              <FaAngleRight />
            </button>
          </div>
          <form className='from-control form-search'>
            <label htmlFor='SchoolSearcher' className='form-label'>
              <p className={`${searchFocus && 'active'}`}>Buscar</p>
              <input
                type='text'
                id='SchoolSearcher'
                className='form-input'
                placeholder='Que institucion buscas?'
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
            </label>
            <button type='button' className='form-button btn' title='Buscar institución'>
              <FaSearch />
            </button>
          </form>
        </section>
        <section className='Schools__body'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <React.Fragment key={item}>
              <SchoolCard />
            </React.Fragment>
          ))}
          <Pagination length={100} page={page} setPage={setPage} />
        </section>
        <aside className='SchoolsReference bg-base'>
          <p>Ejemplo</p>
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default Schools;
