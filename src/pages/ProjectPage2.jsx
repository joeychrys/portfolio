import React, { useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
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
      { id: 0, title: 'Redux' },
      { id: 1, title: 'Tailwind' },
    ],
    active: false,
  },
];

const buttonMotion = {
  inital: {
    rotate: 0,
  },
  animate: {
    rotate: 45,
  },
};

const ProjectPage2 = () => {

  const [id, setid] = useState(" ")

  const handleClick = (e) => {
    const {value} = e.target
    setid(value.id)
  }

  console.log(id)

  return (
    <>
      <div className="container mx-auto flex">
        <h1 className="w-1/2 py-6 text-6xl">Projects</h1>
      </div>
      <div className="container mx-auto">
        {projects.map((item) => (
          <div
            key={item.id}
            className="flex place-items-center justify-between border-t border-black p-6"
          >
            <div className="space-y-3">
              <h1 className="text-3xl">{item.title}</h1>
              <div className="flex space-x-3">
                {item.tags.map((tag) => (
                  <div
                    key={tag.id}
                    className="flex h-fit w-fit justify-center rounded-full border border-black px-3 py-1"
                  >
                    <h1>{tag.title}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div id={item.title} value={item.title} onClick={handleClick}>
              <HiOutlinePlus className="h-10 w-10" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectPage2;
