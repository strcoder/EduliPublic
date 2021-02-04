import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../../components/Unregistered/Layout';
import Home from '../../pages/Unregistered/Home';
import NotFound from '../../pages/General/NotFound';
import Schools from '../../pages/Unregistered/Schools';
import School from '../../pages/Unregistered/School';

const RoutesUnregistered = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/schools' component={Schools} />
          <Route exact path='/school/:id' component={School} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesUnregistered;
