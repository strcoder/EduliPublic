import React from 'react';
import { renderRoutes } from 'react-router-config';
import Layout from '../../components/Manager/Layout';
import Home from '../../pages/Manager/Home';
import NotFound from '../../pages/General/NotFound';

const serverRoutes = () => {
  return [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

const RoutesManager = () => {
  return (
    <Layout>
      {renderRoutes(serverRoutes())}
    </Layout>
  );
};

export default RoutesManager;
