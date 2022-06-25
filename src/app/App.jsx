import Cursor from '../components/Cursor';
import MainLayout from '../layouts/MainLayout';
import { PageLoader } from '../transitions/PageLoader';
import paths from './paths';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

const AboutPage = React.lazy(() => import('../pages/AboutPage'));
const ContactPage = React.lazy(() => import('../pages/ContactPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const ProjectPage = React.lazy(() => import('../pages/ProjectPage'));

const App = () => {
  const loading = useSelector((state) => state.router.isLoaded);

  useEffect(() => {
    document.body.className = 'overflow-x-hidden bg-white';
  }, []);

  return (
    <>
      <AnimatePresence>
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
              <Route
                path={paths.HomePage}
                element={
                  <Suspense>
                    <HomePage />
                  </Suspense>
                }
              />
              <Route
                path={paths.AboutPage}
                element={
                  <Suspense>
                    <AboutPage />
                  </Suspense>
                }
              />
              <Route
                path={paths.ContactPage}
                element={
                  <Suspense>
                    <ContactPage />
                  </Suspense>
                }
              />
              <Route
                path={paths.ProjectPage}
                element={
                  <Suspense>
                    <ProjectPage />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Cursor />
    </>
  );
};

export default App;
