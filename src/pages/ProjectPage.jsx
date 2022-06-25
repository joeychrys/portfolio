import ProjectCatagory from '../components/ProjectCatagory';
import ReactCards from '../components/ReactCards';
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
      <div className="container mx-auto">
        <h1 className="text-6xl max-w-screen-sm border-b md:border-none px-6 pb-20 pt-40">
          Creating next level digital products
        </h1>
      </div>
      <div className="container mx-auto p-6">
        {projectData.map((item) => (
          <>
            <ProjectCatagory data={item} onClick={() => handleClick(item)} />
          </>
        ))}
        <div className="w-full md:border-b border-0"></div>
      </div>
      <div className="w-full visible md:hidden mt-20">
        <ReactCards />
      </div>
    </>
  );
};

export default ProjectPage;
