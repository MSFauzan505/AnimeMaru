import React from 'react';
import Header from '../components/Header';
import Footer from '../fragment/Footer';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
