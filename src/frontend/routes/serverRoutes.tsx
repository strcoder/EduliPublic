import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const serverRoutes = () => {
  const routes = [
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
  return routes;
};

export default serverRoutes;
