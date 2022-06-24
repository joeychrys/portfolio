import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

