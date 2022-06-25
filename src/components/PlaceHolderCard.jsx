import React from 'react';

const PlaceHolderCard = () => {
  return (
    <div className="w-full flex md:justify-evenly flex-col space-y-6 md:flex-row md:space-y-0 place-items-center">
      <div className="flex md:h-full max-w-sm rounded-lg border bg-black p-6 flex-col justify-evenly h-72 w-full">
        <h1 className="text-white text-2xl border-b pb-3">Work in Progress!</h1>
        <h1 className="text-white">More publications are coming soon</h1>
      </div>
    </div>
  );
};

export default PlaceHolderCard;
