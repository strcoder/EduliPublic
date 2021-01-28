import React from 'react';
import Sidenav from '../Sidenav';
import Toolbar from '../Toolbar';

const Layout = ({ children }: any) => {
  return (
    <>
      <Sidenav />
      <Toolbar />
      <>{children}</>
    </>
  );
};

export default Layout;
