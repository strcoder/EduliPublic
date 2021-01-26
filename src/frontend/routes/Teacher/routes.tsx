import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../../components/Teacher/Layout';
import Home from '../../pages/Teacher/Home';
import NotFound from '../../pages/General/NotFound';

const RoutesTeacher = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesTeacher;
