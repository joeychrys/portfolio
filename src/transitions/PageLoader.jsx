import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export const PageLoader = () => {
  const location = useSelector((state) => state.router.location);

  return (
    <motion.div
      className="absolute top-0 z-20"
      animate={{ y: 0 }}
      initial={{ y: -1500 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center w-screen h-screen bg-black place-items-center">
        <h1 className="text-6xl text-white">{location}</h1>
      </div>
    </motion.div>
  );
};
