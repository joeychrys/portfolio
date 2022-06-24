import React from 'react';

const ProjectCard = () => {
  return (
    <>
      <div className="flex h-full max-w-sm place-items-end rounded-lg border bg-black p-6">
        <div className="flex flex-col space-y-6">
          <h1 className="h-fit text-2xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex space-x-3">
            <div className="h-fit w-fit rounded-full border p-3">
              <h1 className="text-white">Github</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
