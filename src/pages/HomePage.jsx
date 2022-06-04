import React from 'react';
import PointSphere from '../components/PointSphere';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <>
      <div className="absolute top-0 h-screen w-screen">
        <PointSphere />
      </div>
      <div className="absolute top-0 h-screen w-screen">
        <div className="container mx-auto h-screen px-10 pt-24 pb-10 sm:py-20">
          <div className="flex h-full w-full justify-evenly border-0 border-black sm:border"></div>
        </div>
      </div>
      <div className="absolute top-0 h-screen w-screen">
        <div className="container mx-auto h-screen px-10 pt-24 pb-10 sm:py-20">
          <div className="flex h-full w-full justify-evenly">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 9.5, duration: 1 }}
              className="flex h-1/3 flex-col place-items-center justify-center sm:h-1/2"
            >
              <h1>I'm a developer</h1>
              <h1 className="mb-2">based out of Dallas</h1>
              <div className="h-10 w-px bg-black md:h-20"></div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 h-screen w-screen">
        <div className="container mx-auto h-screen px-10 pt-24 pb-10 sm:py-20">
          <div className="flex h-full w-full place-items-end justify-evenly">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 9.5, duration: 1 }}
              className="flex h-1/2 flex-col place-items-center justify-center"
            >
              <div className="mb-2 h-10 w-px bg-black md:h-20"></div>
              <h1>see how I made this</h1>
              <h1>on my github</h1>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
