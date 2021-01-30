import React from 'react';
import Footer from '../../General/Footer';
import Sidenav from '../Sidenav';
import Toolbar from '../Toolbar';

const Layout = ({ children }: any) => {
  return (
    <>
      <Sidenav />
      <Toolbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
