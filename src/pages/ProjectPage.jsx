import ProjectCatagory from '../components/ProjectCatagory';
import ReactCards from '../components/ReactCards';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const initalData = [
  {
    id: 0,
    title: 'React',
    tags: [
      { id: 0, title: 'Redux' },
      { id: 1, title: 'Tailwind' },
      { id: 2, title: 'Three.js' },
    ],
    active: false,
  },
  {
    id: 1,
    title: 'Django',
    tags: [
      { id: 3, title: 'DRF' },
      { id: 4, title: 'Simple JWT' },
    ],
    active: false,
  },
  {
    id: 2,
    title: 'Streamlit',
    tags: [
      { id: 5, title: 'Pandas' },
      { id: 6, title: 'Plotly' },
    ],
    active: false,
  },
  {
    id: 3,
    title: 'Deployment',
    tags: [
      { id: 7, title: 'Docker' },
      { id: 8, title: 'Nginx' },
    ],
    active: false,
  },
];

const titleAnimation = {
  initial: { x: -500 },
  animate: { x: 0 },
  transition: {delay:1.5}
};

const ProjectPage = () => {
  const [projectData, setProjectData] = useState(initalData);

  const handleClick = (item) => {
    var index = projectData.findIndex((c) => c.id === item.id);
    var newData = [...projectData]; // makes a copy
    newData[index].active = !newData[index].active; //sets active state to !self
    setProjectData(newData); // sets the new data
  };

  return (
    <>
      <div className="container mx-auto overflow-hidden">
        <motion.h1
          variants={titleAnimation}
          animate="animate"
          initial="initial"
          transition={titleAnimation.transition}
          className="max-w-screen-sm px-6 pt-40 pb-20 text-6xl border-b md:border-none"
        >
          Creating next level digital products
        </motion.h1>
      </div>
      <div className="container p-6 mx-auto">
        {projectData.map((item) => (
          <>
            <ProjectCatagory data={item} onClick={() => handleClick(item)} />
          </>
        ))}
        <div className="w-full border-0 md:border-b"></div>
      </div>
      <div className="visible w-full mt-20 md:hidden">
        <ReactCards />
      </div>
    </>
  );
};

export default ProjectPage;
