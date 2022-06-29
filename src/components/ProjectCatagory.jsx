import PlaceHolderCard from './PlaceHolderCard';
import ReactCards from './ReactCards';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

const buttonMotion = {
  inital: {
    rotate: 0,
  },
  animate: {
    rotate: 135,
  },
};

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const containerTitle = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const ProjectCatagory = (props) => {
  const { data, onClick } = props;
  return (
    <>
      <div key={data.id} onClick={onClick} className="hidden p-6 border-t md:flex">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className={classNames(
            'w-full space-y-3 overflow-hidden transition-all duration-500 ease-in-out',
            { 'h-[24rem]': data.active, 'h-24': !data.active },
          )}
        >
          <motion.h1 variants={containerTitle} className="text-3xl">
            {data.title}
          </motion.h1>
          <div className="flex space-x-3">
            {data.tags.map((item) => (
              <div
                key={item.id}
                className="flex justify-center px-3 py-1 border border-black rounded-full h-fit w-fit"
              >
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
          <div className="flex w-full p-1 h-72">
            {data.id === 0 ? <ReactCards /> : <PlaceHolderCard />}
          </div>
        </motion.div>
        <motion.div
          className="py-5 h-fit"
          animate={data.active ? buttonMotion.animate : buttonMotion.inital}
        >
          <HiOutlinePlus className="w-10 h-10" />
        </motion.div>
      </div>
    </>
  );
};

export default ProjectCatagory;
