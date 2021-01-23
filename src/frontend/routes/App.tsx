import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
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

export default App;
