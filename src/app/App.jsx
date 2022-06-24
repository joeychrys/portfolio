import Cursor from '../components/Cursor';
import MainLayout from '../layouts/MainLayout';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import { PageLoader } from '../transitions/PageLoader';
import paths from './paths';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route} from 'react-router-dom';

const App = () => {
  const loading = useSelector((state) => state.router.isLoaded);

  useEffect(() => {
    document.body.className = 'overflow-x-hidden bg-white';
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <motion.div key="loader">
            <PageLoader />
          </motion.div>
        ) : (
          ''
        )}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path={paths.HomePage} element={<HomePage />} />
              <Route path={paths.AboutPage} element={<AboutPage />} />
              <Route path={paths.ContactPage} element={<ContactPage />} />
              <Route path={paths.ProjectPage} element={<ProjectPage />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Cursor />
    </>
  );
};

export default App;
