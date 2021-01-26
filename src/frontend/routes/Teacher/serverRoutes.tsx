import React from 'react';
import { renderRoutes } from 'react-router-config';
import Layout from '../../components/Teacher/Layout';
import Home from '../../pages/Teacher/Home';
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

const RoutesTeacher = () => {
  return (
    <Layout>
      {renderRoutes(serverRoutes())}
    </Layout>
  );
};

export default RoutesTeacher;
