import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { cities } from '../../../utils/citys.json';
import Controller from './controller';
import './styles.scss';

const FilterItems = ({ filter, setFilter }: any) => {
  const { tags, price, town, city, area } = Controller();
  return (
    <div className='Schools__filter--items'>
      <button
        type='button'
        className={`${filter === 'all' ? 'light__btn-white' : 'light__btn-tertiary dark__btn-tertiary'}`}
        onClick={() => setFilter(filter !== 'all' && 'all')}
      >
        {tags === 'all' ? 'Todas' : tags === 'score' ? 'Mejores' : 'Nuevas'}
      </button>
      <button
        type='button'
        className={`${price < 0 ?
          'btn-danger' :
          filter === 'price' ?
            'light__btn-white' :
            'light__btn-tertiary dark__btn-tertiary'}`}
        onClick={() => setFilter(filter !== 'price' && 'price')}
      >
        {price >= 500000 ? 'Precio (Todas)' : price === 0 ? 'Gratis' : `Precio: ${price > 0 ? price : 'No valido'}`}
      </button>
      <button
        type='button'
        className={`${filter === 'address' ? 'light__btn-white' : 'light__btn-tertiary dark__btn-tertiary'}`}
        onClick={() => setFilter(filter !== 'address' && 'address')}
      >
        {city === 'all' ? 'Dirección (Todas)' : town === 'all' ? city : town}
      </button>
      <button
        type='button'
        className={`${filter === 'area' ? 'light__btn-white' : 'light__btn-tertiary dark__btn-tertiary'}`}
        onClick={() => setFilter(filter !== 'area' && 'area')}
      >
        {area === 'all' ? 'Area (Todas)' : area}
      </button>
    </div>
  );
};

const FilterChoiceAll = () => {
  const { setTags } = Controller();
  return (
    <div className='Filter__choice--all bounceIn'>
      <button
        type='button'
        className='btn-primary'
        onClick={() => setTags('all')}
      >
        All
      </button>
      <button
        type='button'
        className='btn-primary'
        onClick={() => setTags('score')}
      >
        Mejores
      </button>
      <button
        type='button'
        className='btn-primary'
        onClick={() => setTags('date')}
      >
        Nuevas
      </button>
    </div>
  );
};

const FilterChoicePrice = () => {
  const { register } = useForm();
  const { setPrice, price } = Controller();
  return (
    <div className='Filter__choice--price bounceIn'>
      <button
        type='button'
        className='btn-primary'
        onClick={() => setPrice(500000)}
      >
        All
      </button>
      <button
        type='button'
        className='btn-primary'
        onClick={() => setPrice(0)}
      >
        Gratis
      </button>
      <form className='form-control'>
        <label htmlFor='' className='form-label'>
          <p>Precio maximo</p>
          <small>$</small>
          <input
            type='number'
            ref={register}
            name='input-price'
            className='form-input'
            placeholder={price <= 0 ? 'Digita una cantidad' : `${price}`}
            value={price === 0 ? '' : price === 500000 ? price - 499000 : price}
            onChange={(event) => { event.target.value !== '' ? setPrice(parseInt(event.target.value, 10)) : setPrice(0); }}
          />
          <small>MX</small>
        </label>
        <button
          type='button'
          className='btn-outline-danger light'
          onClick={() => price >= 1000 && setPrice(price >= 500000 ? 1000 : price - 1000)}
        >
          <FaMinus />
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => price <= 500000 && setPrice(price >= 500000 ? 2000 : price + 1000)}
        >
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

const FilterChoiceAddress = () => {
  const { register } = useForm();
  const { handlerCity, handlerTown, handlerDefaultAddress, towns, town, city } = Controller();
  return (
    <div className='Filter__choice--address bounceIn'>
      <button type='button' className='btn-primary' onClick={handlerDefaultAddress}>All</button>
      <form className='form-control'>
        <select name='select-city' defaultValue={city} onChange={handlerCity} id='' className='form-select' ref={register}>
          <option value='default'>Selecciona el estado</option>
          {cities.map(({ city }) => (
            <option key={city} value={city.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}>{city}</option>
          ))}
        </select>
      </form>
      <form className='form-control'>
        <select name='select-town' id='' defaultValue={town} onChange={handlerTown} className='form-select' ref={register} disabled={city === 'all'}>
          <option value='default'>Selecciona el municipio o alcaldia</option>
          {towns.map((town) => (
            <option key={town} value={town.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}>{town}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

const FilterChoiceArea = () => {
  const { setArea } = Controller();
  return (
    <div className='Filter__choice--area bounceIn'>
      <button type='button' className='btn-primary' onClick={() => setArea('all')}>
        All
      </button>
      <button type='button' className='btn-primary' onClick={() => setArea('basic')}>
        Basica
      </button>
      <button type='button' className='btn-primary' onClick={() => setArea('middle')}>
        Media
      </button>
      <button type='button' className='btn-primary' onClick={() => setArea('hight')}>
        Superior
      </button>
      <button type='button' className='btn-primary' onClick={() => setArea('university')}>
        Universidad
      </button>
      <button type='button' className='btn-primary' onClick={() => setArea('advanced')}>
        Avanzado
      </button>
    </div>
  );
};

const SchoolFilter = () => {
  const [filter, setFilter] = useState('');
  const { handleQuery } = Controller();
  return (
    <>
      <section className='Schools__filter'>
        <FilterItems filter={filter} setFilter={setFilter} />
        <div className='Schools__filter--choice'>
          {filter === 'all' && (
            <FilterChoiceAll />
          )}
          {filter === 'price' && (
            <FilterChoicePrice />
          )}
          {filter === 'address' && (
            <FilterChoiceAddress />
          )}
          {filter === 'area' && (
            <FilterChoiceArea />
          )}
        </div>
        {filter && (
          <div className='Schools__filter--choice bounceIn'>
            <button type='button' className='btn-success' onClick={handleQuery}>Buscar</button>
          </div>
        )}
      </section>
    </>
  );
};

export default SchoolFilter;
