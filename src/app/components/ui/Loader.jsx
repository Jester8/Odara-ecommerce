import React from 'react';
import lightlogo from '../../assets/img/Odara invert.png';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <Image 
          src={lightlogo} 
          alt="Odara Logo" 
          width={150} 
          height={50} 
          className="mx-auto"
        />
      </div>
    </div>
  );
}

export default Loader;
