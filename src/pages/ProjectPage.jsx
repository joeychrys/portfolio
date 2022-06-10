import ProjectCatagory from '../components/ProjectCatagory';
import React from 'react';
import { useState } from 'react';

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
      { id: 0, title: 'DRF' },
      { id: 1, title: 'Simple JWT' },
    ],
    active: false,
  },
  {
    id: 2,
    title: 'Streamlit',
    tags: [
      { id: 0, title: 'Pandas' },
      { id: 1, title: 'Plotly' },
    ],
    active: false,
  },
  {
    id: 3,
    title: 'Deployment',
    tags: [
      { id: 0, title: 'Docker' },
      { id: 1, title: 'Nginx' },
      { id: 2, title: 'Nginx' },
    ],
    active: false,
  },
];

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
      <div className="container mx-auto flex">
        <h1 className="w-1/2 py-6 text-6xl">Projects</h1>
      </div>
      <div className="container mx-auto">
        {projectData.map((item) => (
          <>
            <ProjectCatagory data={item} onClick={() => handleClick(item)} />
          </>
        ))}
        <div className="border-b border-black"></div>
      </div>
    </>
  );
};

export default ProjectPage;
