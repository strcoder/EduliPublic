import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../../components/Unregistered/Layout';
import Home from '../../pages/Unregistered/Home';
import NotFound from '../../pages/General/NotFound';

const RoutesUnregistered = () => {
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

export default RoutesUnregistered;
