import React from 'react';
import Toolbar from '../../components/General/Toolbar';

const Layout = ({ children }: any) => {
  return (
    <>
      <Toolbar />
      <>{children}</>
    </>
  );
};

export default Layout;
