import { motion } from 'framer-motion';
import React from 'react';

const pageTransition = {
  initial: {
    y: 0,
  },
  exit: {
    y: -1500,
  },
  animate: {
    y: 0,
  },
  transition: {
    duration: 1,
    type: 'Tween',
  },
};

const textTransition = {

}

const HomePageTransition = () => {
  return (
    <motion.div
      initial={pageTransition.initial}
      exit={pageTransition.exit}
      animate={pageTransition.animate}
      transition={pageTransition.transition}
      className="absolute top-0 h-screen w-screen bg-black"
    >
      <div className="p-6 overflow-hidden">
        <h1 className="text-xl text-white">Joey Chrysanthopoulos</h1>
        <h1 className="text-xl text-white">Portfolio 2022</h1>
      </div>
    </motion.div>
  );
};

export default HomePageTransition;
