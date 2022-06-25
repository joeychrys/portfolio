import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between w-screen h-24 p-6 mx-auto mt-20 bg-black rounded-t-3xl place-items-end">
      <div className="">
        <h1 className="text-xs text-gray-500">Version</h1>
        <h1 className='text-white'>2022 © Edition</h1>
      </div>
      <div className="">
        <h1 className="text-xs text-gray-500">Socials</h1>
        <div className="flex space-x-6 text-white">
          <a href="https://www.linkedin.com/in/joey-chrys/" target="_blank">LinkedIn</a>
          <a href="https://github.com/joeychrys" target="_blank">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
