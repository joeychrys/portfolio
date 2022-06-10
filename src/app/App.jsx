import HomePageLayout from '../layouts/HomePageLayout';
import NavBarLayout from '../layouts/NavBarLayout';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import HomePageTransition from '../transitions/HomePageTransition';
import paths from './paths';
import React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    document.body.className = 'overflow-x-hidden';
  }, []);

  return (
    <Routes>
      <Route element={<NavBarLayout />}>
        <Route path={paths.HomePage} element={<HomePageLayout />} />
        <Route path={paths.AboutPage} element={<AboutPage />} />
        <Route path={paths.ContactPage} element={<ContactPage />} />
        <Route path={paths.ProjectPage} element={<ProjectPage />} />
      </Route>
      <Route path={paths.Transition} element={<HomePageTransition />} />
      <Route path={paths.HomePageTrans} element={<HomePageLayout />} />
    </Routes>
  );
};

export default App;
