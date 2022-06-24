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
      <div className="h-screen w-screen bg-black flex justify-center place-items-center">
        <h1 className="text-white text-6xl">{location}</h1>
      </div>
    </motion.div>
  );
};
