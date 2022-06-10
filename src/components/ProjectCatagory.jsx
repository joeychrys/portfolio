import ProjectCard from './ProjectCard';
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

const catagoryMotion = {
  animate: {
    height: '30rem',
  },
};

const ProjectCatagory = (props) => {
  const { data, onClick } = props;
  return (
    <div key={data.id} onClick={onClick} className="flex border-t border-black p-6">
      <div
        className={classNames(
          'w-full space-y-3 overflow-hidden transition-all duration-500 ease-in-out',
          { 'h-[24rem]': data.active, 'h-24': !data.active },
        )}
      >
        <h1 className="text-3xl">{data.title}</h1>
        <div className="flex space-x-3">
          {data.tags.map((item) => (
            <div
              key={item.id}
              className="flex h-fit w-fit justify-center rounded-full border border-black px-3 py-1"
            >
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
        <ProjectCard />
      </div>
      <motion.div
        className="h-fit py-5"
        animate={data.active ? buttonMotion.animate : buttonMotion.inital}
      >
        <HiOutlinePlus className="h-10 w-10" />
      </motion.div>
    </div>
  );
};

export default ProjectCatagory;
