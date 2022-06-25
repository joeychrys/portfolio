import React from 'react';

const ReactCards = () => {
  return (
    <div className="flex flex-col w-full space-y-6 md:justify-evenly md:flex-row md:space-y-0 place-items-center">
      <div className="flex flex-col w-full max-w-sm p-6 bg-black border rounded-lg md:h-full justify-evenly h-72">
        <h1 className="pb-3 text-2xl text-white border-b">Flowbite-React</h1>
        <h1 className="text-white">
          Open Source contributor to Tailwind component library for React.js
        </h1>
        <div className="flex flex-row">
          <a
            href="https://github.com/themesberg/flowbite-react"
            target="_blank"
            className="p-3 text-white border border-white rounded-full w-fit"
          >
            Github
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-sm p-6 bg-black border rounded-lg md:h-full justify-evenly h-72">
        <h1 className="pb-3 text-2xl text-white border-b">JWT Authentication</h1>
        <h1 className="text-white">
          Simple JWT authentication application with React, Redux, and Django
        </h1>
        <div className="flex flex-row">
          <a
            href="https://github.com/joeychrys/redux-auth"
            target="_blank"
            className="p-3 text-white border border-white rounded-full w-fit"
          >
            Github
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-sm p-6 bg-black border rounded-lg md:h-full justify-evenly h-72">
        <h1 className="pb-3 text-2xl text-white border-b">Point Cloud</h1>
        <h1 className="text-white">Point cloud experiment with Three.js and React.js</h1>
        <div className="flex flex-row">
          <a
            href="https://github.com/joeychrys/portfolio/blob/master/src/components/PointSphere.jsx"
            target="_blank"
            className="p-3 text-white border border-white rounded-full w-fit"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReactCards;
