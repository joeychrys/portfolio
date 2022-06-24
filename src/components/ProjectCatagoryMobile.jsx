import ProjectCard from './ProjectCard';
import React from 'react';

const ProjectCatagoryMobile = (props) => {
  const { data } = props;
  return (
    <div key={data.id} className="md:hidden mt-6 h-72">
      <ProjectCard />
    </div>
  );
};

export default ProjectCatagoryMobile;
