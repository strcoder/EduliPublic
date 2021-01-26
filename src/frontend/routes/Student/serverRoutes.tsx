import React from 'react';
import { renderRoutes } from 'react-router-config';
import Layout from '../../components/Student/Layout';
import Home from '../../pages/Student/Home';
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

const RoutesStudent = () => {
  return (
    <Layout>
      {renderRoutes(serverRoutes())}
    </Layout>
  );
};

export default RoutesStudent;
