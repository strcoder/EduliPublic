import React from 'react';
import { renderRoutes } from 'react-router-config';
import Layout from '../../components/Unregistered/Layout';
import Home from '../../pages/Unregistered/Home';
import NotFound from '../../pages/General/NotFound';
import Schools from '../../pages/Unregistered/Schools';

const serverRoutes = () => {
  return [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      path: '/schools',
      exact: true,
      component: Schools,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

const RoutesUnregistered = () => {
  return (
    <Layout>
      {renderRoutes(serverRoutes())}
    </Layout>
  );
};

export default RoutesUnregistered;
