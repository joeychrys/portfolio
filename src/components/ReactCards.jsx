import React from 'react';

const ReactCards = () => {
  return (
    <div className="w-full flex md:justify-evenly flex-col space-y-6 md:flex-row md:space-y-0 place-items-center">
      <div className="flex md:h-full max-w-sm rounded-lg border bg-black p-6 flex-col justify-evenly h-72 w-full">
        <h1 className="text-white text-2xl border-b pb-3">Flowbite-React</h1>
        <h1 className="text-white">
          Open Source contributor to Tailwind component library for React.js
        </h1>
        <div className="flex flex-row">
          <a
            href="https://github.com/themesberg/flowbite-react"
            target="_blank"
            className="text-white border border-white w-fit p-3 rounded-full"
          >
            Github
          </a>
        </div>
      </div>
      <div className="flex md:h-full max-w-sm rounded-lg border bg-black p-6 flex-col justify-evenly h-72 w-full">
        <h1 className="text-white text-2xl border-b pb-3">JWT Authentication</h1>
        <h1 className="text-white">
          Simple JWT authentication application with React, Redux, and Django
        </h1>
        <div className="flex flex-row">
          <a
            href="https://github.com/joeychrys/redux-auth"
            target="_blank"
            className="text-white border border-white w-fit p-3 rounded-full"
          >
            Github
          </a>
        </div>
      </div>
      <div className="flex md:h-full max-w-sm rounded-lg border bg-black p-6 flex-col justify-evenly h-72 w-full">
        <h1 className="text-white text-2xl border-b pb-3">Point Cloud</h1>
        <h1 className="text-white">Point cloud experiment with Three.js and React.js</h1>
        <div className="flex flex-row">
          <a
            href="https://github.com/joeychrys/portfolio/blob/master/src/components/PointSphere.jsx"
            target="_blank"
            className="text-white border border-white w-fit p-3 rounded-full"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReactCards;
