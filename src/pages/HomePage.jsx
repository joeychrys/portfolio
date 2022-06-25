import PointSphere from '../components/PointSphere';
import { motion } from 'framer-motion';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="top-0 absolute h-screen w-screen">
        <PointSphere />
      </div>
      <div className="top-0 absolute h-screen w-screen">
        <div className="container mx-auto h-screen px-10 pt-24 pb-10 sm:py-20">
          <div className="flex h-full w-full justify-evenly"></div>
        </div>
      </div>
      <div className="top-0 absolute h-screen w-screen">
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
              <div className="h-10 w-px bg-black"></div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="top-0 absolute h-screen w-screen">
        <div className="container mx-auto h-screen px-10 pt-24 pb-10 sm:py-20">
          <div className="flex h-full w-full place-items-end justify-evenly">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 9.5, duration: 1 }}
              className="flex h-1/2 flex-col place-items-center justify-center"
            >
              <div className="h-10 w-px bg-black"></div>
              <a
                className='text-center hover:border-black border-transparent border rounded-full p-3 transition-all duration-200 ease-in-out'
                href="https://github.com/joeychrys/portfolio/blob/master/src/components/PointSphere.jsx"
                target="_blank"
              > 
                <h1>see how I made this</h1>
                <h1>on my github</h1>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
