import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../container/Layout';
import { useStateValue } from '../Context';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
  const { theme } = useStateValue();
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.cookie = `theme=${theme}`;
    const body = document.body.classList;
    theme === 'light' ? body.remove('dark') : body.add(theme);
    theme === 'dark' ? body.remove('light') : body.add(theme);
  }
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
