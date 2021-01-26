import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../../components/Student/Layout';
import Home from '../../pages/Student/Home';
import NotFound from '../../pages/General/NotFound';

const RoutesStudent = () => {
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

export default RoutesStudent;
