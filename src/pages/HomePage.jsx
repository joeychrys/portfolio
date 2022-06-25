import PointSphere from '../components/PointSphere';
import { motion } from 'framer-motion';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="absolute top-0 w-screen h-screen">
        <PointSphere />
      </div>
      <div className="absolute top-0 w-screen h-screen">
        <div className="container h-screen px-10 pt-24 pb-10 mx-auto sm:py-20">
          <div className="flex w-full h-full justify-evenly"></div>
        </div>
      </div>
      <div className="absolute top-0 w-screen h-screen">
        <div className="container h-screen px-10 pt-24 pb-10 mx-auto sm:py-20">
          <div className="flex w-full h-full justify-evenly">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 9.5, duration: 1 }}
              className="flex flex-col justify-center h-1/3 place-items-center sm:h-1/2"
            >
              <h1>I'm a developer</h1>
              <h1 className="mb-2">based out of Dallas</h1>
              <div className="w-px h-10 bg-black"></div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 w-screen h-screen">
        <div className="container h-screen px-10 pt-24 pb-10 mx-auto sm:py-20">
          <div className="flex w-full h-full place-items-end justify-evenly">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 9.5, duration: 1 }}
              className="flex flex-col justify-center h-1/2 place-items-center"
            >
              <div className="w-px h-10 bg-black"></div>
              <a
                className='p-3 text-center transition-all duration-200 ease-in-out border border-transparent rounded-full hover:border-black'
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
