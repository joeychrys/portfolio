import React from 'react';

const Footer = () => {
  return (
    <footer className="flex w-screen justify-between p-6 mt-20 mx-auto bg-black rounded-t-3xl h-24 place-items-end">
      <div className="">
        <h1 className="text-xs text-gray-500">Version</h1>
        <h1 className='text-white'>2022 © Edition</h1>
      </div>
      <div className="">
        <h1 className="text-xs text-gray-500">Socials</h1>
        <div className="flex space-x-6 text-white">
          <h2>LinkedIn</h2>
          <h2>Github</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
