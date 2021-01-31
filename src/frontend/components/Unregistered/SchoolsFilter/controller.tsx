import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { cities } from '../../../utils/citys.json';

type paramProps = {
  filterBy?: string,
  city?: string,
  town?: string,
  area?: string,
  price?: string
}

const replaceAll = (text: string, busca: string, reemplaza: string) => {
  let aux = text;
  while (aux.toString().indexOf(busca) !== -1) aux = aux.toString().replace(busca, reemplaza);
  return aux;
};

const parseParams = (params = '') => {
  const rawParams = params.replace('?', '');
  const aux = replaceAll(rawParams, '%20', ' ').split('&');
  const extractedParams = {};
  if (params) {
    aux.map((item) => {
      [, extractedParams[item.split('=')[0]]] = item.split('=');
      return 0;
    });
  }
  return extractedParams;
};

const Controller = () => {
  const { search } = useLocation();
  const queryParams: paramProps = parseParams(search);
  // const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');
  const [tags, setTags] = useState(queryParams.filterBy || 'all');
  const [city, setCity] = useState(queryParams.city || 'all');
  const [town, setTown] = useState(queryParams.town || 'all');
  const [area, setArea] = useState(queryParams.area || 'all');
  const [price, setPrice] = useState(queryParams.price === '0' ? 0 : parseInt(queryParams.price, 10) || 500000);
  const history = useHistory();
  const [towns, setTowns] = useState(
    city === 'all' ? [] :
      cities.find((value) => value.city.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === city.normalize('NFD').replace(/[\u0300-\u036f]/g, '')).towns,
  );

  const handlerCity = ({ target }) => {
    if (target.value === 'default') {
      setCity('all');
      setTown('all');
      setTowns([]);
    } else {
      const { towns } = cities.find(({ city }) => city.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === target.value);
      setCity(target.value);
      setTowns(towns);
      setTown('all');
    }
  };

  const handlerTown = ({ target }) => {
    if (target.value === 'default') {
      setTown('all');
    } else {
      setTown(target.value);
    }
  };

  const handlerDefaultAddress = () => {
    setCity('all');
    setTown('all');
  };

  const handleQuery = () => {
    let newQuery = '';
    tags !== 'all' && (newQuery += `filterBy=${tags}`);
    if (tags !== 'all' && (city !== 'all' || price !== 500000 || area !== 'all')) { newQuery += '&'; }
    city !== 'all' && (newQuery += `city=${city.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}&town=${town.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`);
    if ((city !== 'all' || town !== 'all') && (price !== 500000 || area !== 'all')) { newQuery += '&'; }
    price !== 500000 && (newQuery += `price=${price}`);
    if (price !== 500000 && area !== 'all') { newQuery += '&'; }
    area !== 'all' && (newQuery += `area=${area}`);

    setQuery(newQuery);
    if (Object.keys(newQuery).length === 0) {
      history.push('/institutes');
    } else {
      history.push(`/institutes?${newQuery}`);
    }
  };

  return {
    handleQuery,
    handlerCity,
    handlerTown,
    handlerDefaultAddress,
    query,
    setTags,
    setArea,
    setPrice,
    towns,
    tags,
    price,
    town,
    city,
    area,
    setCity,
    setTown,
  };
};

export default Controller;
