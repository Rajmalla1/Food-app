import React from 'react';

interface BoxProps {
  bgImage: string;
  locationName: string;
}

const BoxComponent: React.FC<BoxProps> = ({ bgImage, locationName }) => {
  return (
    <div
      className="relative w-72 sm:w-80 md:w-96 lg:w-[28rem] h-72 sm:h-64 md:h-80 bg-cover border border-gray-300 rounded-xl hover:shadow-2xl hover:transform transition ease-in-out delay-50 hover:cursor-pointer hover:-translate-y-1 "
      style={{ 
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="absolute bottom-4 left-5 pt-2 pb-2  bg-white rounded-lg border border-gray-400 lg:text-lg lg:font-semibold duration-300 hover:shadow-md sm:w-40 w-28 flex justify-center items-center">
        <span>{locationName}</span>
      </div>
    </div>
  );
};

export default BoxComponent;
