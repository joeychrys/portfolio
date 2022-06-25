import React from 'react';

const PlaceHolderCard = () => {
  return (
    <div className="flex flex-col w-full space-y-6 md:justify-evenly md:flex-row md:space-y-0 place-items-center">
      <div className="flex flex-col w-full max-w-sm p-6 bg-black border rounded-lg md:h-full justify-evenly h-72">
        <h1 className="pb-3 text-2xl text-white border-b">Work in Progress!</h1>
        <h1 className="text-white">More publications are coming soon</h1>
      </div>
    </div>
  );
};

export default PlaceHolderCard;
