import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../../components/Manager/Layout';
import Home from '../../pages/Manager/Home';
import NotFound from '../../pages/General/NotFound';

const RoutesManager = () => {
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

export default RoutesManager;
