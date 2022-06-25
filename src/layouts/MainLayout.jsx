import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className="relative min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

