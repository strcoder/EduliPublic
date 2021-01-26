import React from 'react';
import { useStateValue } from '../Context';
import RoutesManager from './Manager/routes';
import RoutesStudent from './Student/routes';
import RoutesTeacher from './Teacher/routes';
import RoutesUnregistered from './Unregistered/routes';

const App = () => {
  const { theme, user } = useStateValue();
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.cookie = `theme=${theme}`;
    const body = document.body.classList;
    theme === 'light' ? body.remove('dark') : body.add(theme);
    theme === 'dark' ? body.remove('light') : body.add(theme);
  }
  return (
    <>
      {user?.role === 'manager' && (
        <RoutesManager />
      )}
      {user?.role === 'teacher' && (
        <RoutesTeacher />
      )}
      {user?.role === 'student' && (
        <RoutesStudent />
      )}
      {!user?.role && (
        <RoutesUnregistered />
      )}
    </>
  );
};

export default App;
