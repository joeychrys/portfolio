import React from 'react';
import ProjectCatagory from '../components/ProjectCatagory';
import { useState } from 'react';

const initalData = [
  {
    id: 0,
    title: 'React',
    tags: [
      { id: 0, title: 'Redux' },
      { id: 1, title: 'Tailwind' },
    ],
    active: false,
  },
  {
    id: 1,
    title: 'Django',
    tags: [
      { id: 0, title: 'DRF' },
      { id: 1, title: 'Simple JWT' },
    ],
    active: false,
  },
];

const ProjectPage2 = () => {
  const [projectData, setProjectData] = useState(initalData)

  const handleClick = () => {
    setProjectData({...initalData, active})
  }

  return (
    <>
      <div className="container mx-auto flex">
        <h1 className="w-1/2 py-6 text-6xl">Projects</h1>
      </div>
      <div className="container mx-auto">
        {projectData.map((item) => (
          <ProjectCatagory
            title={item.title}
            tags={item.tags}
            key={item.key}
            active={item.active}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectPage2;
