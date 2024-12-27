import React from 'react';
import Header from '../components/Header';
import Footer from '../fragment/Footer';

function MainLayout({ children, onLogOut }) {
  return (
    <>
      <Header onLogOut={onLogOut}/>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
