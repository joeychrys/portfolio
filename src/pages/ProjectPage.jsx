import React from 'react';
import placeHolder from '../assets/placeholder.jpg';

const ProjectPage = () => {
  return (
    <>
      <div className="max-w-4xl px-6 lg:py-6 lg:px-0 mx-auto">
        <h1 className='w-3/5'>Freelance Work & Personal Projects</h1>
      </div>
      <div className="mx-auto max-w-4xl p-6 lg:p-0">
        <div className="relative top-0 grid gap-6 md:grid-cols-2 ">
          {[...Array(4)].map((e, i) => (
            <div key={i} className="flex flex-col space-y-2">
              <div
                className="h-[30rem] w-full bg-cover bg-center bg-no-repeat rounded-xl"
                style={{
                  backgroundImage: `url(${placeHolder})`,
                }}
              ></div>
              <h1 className="text-lg">lorem ipsum</h1>
              <div className="border-b"></div>
              <div className="flex justify-between">
                <h1>interaction & development</h1>
                <h1>2022</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
