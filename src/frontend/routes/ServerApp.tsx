import React from 'react';
import RoutesManager from './Manager/serverRoutes';
import RoutesTeacher from './Teacher/serverRoutes';
import RoutesStudent from './Student/serverRoutes';
import RoutesUnregistered from './Unregistered/serverRoutes';

const ServerApp = ({ role }: any) => {
  return (
    <>
      {role === 'manager' && (
        <RoutesManager />
      )}
      {role === 'teacher' && (
        <RoutesTeacher />
      )}
      {role === 'student' && (
        <RoutesStudent />
      )}
      {!role && (
        <RoutesUnregistered />
      )}
    </>
  );
};

export default ServerApp;
