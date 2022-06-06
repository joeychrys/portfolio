import React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { motion } from 'framer-motion';

const buttonMotion = {
  inital: {
    rotate: 0,
  },
  animate: {
    rotate: 45,
  },
};

const ProjectCatagory = (props) => {
  const { title, tags, projectId, active, handleClick } = props;
  return (
    <div
      key={projectId}
      className="flex place-items-center justify-between border-t border-black p-6"
    >
      <div className="space-y-3">
        <h1 className="text-3xl">{title}</h1>
        <div className="flex space-x-3">
          {tags.map((item) => (
            <div
              key={item.id}
              className="flex h-fit w-fit justify-center rounded-full border border-black px-3 py-1"
            >
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        animate={active ? buttonMotion.animate : buttonMotion.inital}
        onClick={handleClick}
      >
        <HiOutlinePlus className="h-10 w-10" />
      </motion.div>
    </div>
  );
};

export default ProjectCatagory;
