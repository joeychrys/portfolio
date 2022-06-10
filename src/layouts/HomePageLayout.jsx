import HomePage from '../pages/HomePage';
import HomePageTransition from '../transitions/HomePageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';

const HomePageLayout = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <AnimatePresence>
      {loaded ? (
        <motion.div>
          <HomePage />
        </motion.div>
      ) : (
        <motion.div key="loader">
          <HomePageTransition />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomePageLayout;
