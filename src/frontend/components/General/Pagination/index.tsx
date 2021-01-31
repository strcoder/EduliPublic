import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './styles.css';

const Pagination = ({
  length,
  page,
  setPage,
}: {
  length: number;
  page: number;
  setPage: Function;
}) => {
  const max = Math.ceil(length / 7);
  // console.log(!((page < 3 && max > 2) && (page < 3 && max > 5)));
  return (
    <div className='Pagination flex'>
      <button
        type='button'
        disabled={page < 1}
        title='Previus page'
        className='light__btn-link dark__btn-link-soft'
        onClick={() => setPage(page - 1)}
      >
        <FaAngleLeft size={25} />
      </button>
      <button
        type='button'
        title='Go to page 1'
        onClick={() => setPage(0)}
        className={`${page === 0 ?
          'light__btn-link-success dark__btn-outline-soft' :
          'light__btn-link dark__btn-link-soft'}`}
      >
        1
      </button>
      {page > 2 && max > 5 && <p className='btn-link'>...</p>}
      {(page < 3 || max <= 5) && max > 1 && (
        <button
          type='button'
          title='Go to page 2'
          onClick={() => setPage(1)}
          className={`${page === 1 ?
            'light__btn-link-success dark__btn-outline-soft' :
            'light__btn-link dark__btn-link-soft'}`}
        >
          2
        </button>
      )}
      {((page < 3 && max > 3 && page + 3 < max) || max === 3 || max === 4) && (
        <button
          type='button'
          title='Go to page 3'
          onClick={() => setPage(2)}
          className={`${page === 2 ?
            'light__btn-link-success dark__btn-outline-soft' :
            'light__btn-link dark__btn-link-soft'}`}
        >
          3
        </button>
      )}
      {((page < 3 && max > 4 && page + 3 < max) || max === 4) && (
        <button
          type='button'
          title='Go to page 4'
          onClick={() => setPage(3)}
          className={`${page === 3 ?
            'light__btn-link-success dark__btn-outline-soft' :
            'light__btn-link dark__btn-link-soft'}`}
        >
          4
        </button>
      )}
      {page > 2 && max > 5 && page < max - 3 && (
        <button
          type='button'
          className='light__btn-link dark__btn-link-soft'
          title={`Go to page ${page}`}
          onClick={() => setPage(page - 1)}
        >
          {page}
        </button>
      )}
      {page > 2 && max > 5 && page + 1 < max - 2 && (
        <button
          type='button'
          onClick={() => setPage(page)}
          title={`Go to page ${page + 1}`}
          className='light__btn-link-success dark__btn-outline-soft'
        >
          {page + 1}
        </button>
      )}
      {page > 2 && max > 5 && page + 2 < max - 1 && (
        <button
          type='button'
          className='light__btn-link dark__btn-link-soft'
          title={`Go to page ${page + 2}`}
          onClick={() => setPage(page + 1)}
        >
          {page + 2}
        </button>
      )}
      {page + 3 >= max && max > 5 && (
        <button
          type='button'
          title={`Go to page ${max - 3}`}
          onClick={() => setPage(max - 4)}
          className={`${page === max - 4 ?
            'light__btn-link-success dark__btn-outline-soft' :
            'light__btn-link dark__btn-link-soft'}`}
        >
          {max - 3}
        </button>
      )}
      {page + 3 >= max && max > 4 && (
        <button
          type='button'
          title={`Go to page ${max - 2}`}
          onClick={() => setPage(max - 3)}
          className={`${page === max - 3 ?
            'light__btn-link-success dark__btn-outline-soft' :
            'light__btn-link dark__btn-link-soft'}`}
        >
          {max - 2}
        </button>
      )}
      {page + 3 >= max && max > 4 && (
        <button
          type='button'
          title={`Go to page ${max - 1}`}
          onClick={() => setPage(max - 2)}
          className={`${page === max - 2 ?
            'light__btn-link-success dark__btn-outline-soft' :
            'light__btn-link dark__btn-link-soft'}`}
        >
          {max - 1}
        </button>
      )}
      {page + 4 <= max && max > 5 && <p className='btn-link'>...</p>}
      {max >= 5 && (
        <button
          type='button'
          title='Last page'
          onClick={() => setPage(max - 1)}
          className={`${page === max - 1 ?
            'light__btn-link-success dark__btn-outline-soft' :
            'light__btn-link dark__btn-link-soft'}`}
        >
          {max}
        </button>
      )}
      <button
        type='button'
        title='Next page'
        className='light__btn-link dark__btn-link-soft'
        onClick={() => setPage(page + 1)}
        disabled={page + 1 >= Math.ceil(length / 7)}
      >
        <FaAngleRight size={25} />
      </button>
    </div>
  );
};

export default Pagination;
