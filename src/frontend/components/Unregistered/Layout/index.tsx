import React from 'react';
import Sidenav from '../Sidenav';
import Toolbar from '../Toolbar';

const Layout = ({ children }: any) => {
  return (
    <>
      <Toolbar />
      <Sidenav />
      <>{children}</>
    </>
  );
};

export default Layout;
