import React from 'react';
import paths from './paths';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProjectPage from '../pages/ProjectPage';
import ProjectPage2 from '../pages/ProjectPage2';

import NavBarLayout from '../layouts/NavBarLayout';
import { useEffect } from 'react';

const App = () => {
  useEffect(()=>{
    document.body.className="overflow-x-hidden"
  },[])

  return (
    <Routes>
      <Route element={<NavBarLayout />}>
        <Route path={paths.HomePage} element={<HomePage />} />
        <Route path={paths.AboutPage} element={<AboutPage />} />
        <Route path={paths.ContactPage} element={<ContactPage />} />
        <Route path={paths.ProjectPage} element={<ProjectPage2 />} />
      </Route>
    </Routes>
  );
};

export default App;
