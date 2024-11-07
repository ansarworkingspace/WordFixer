import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center  justify-center"> {/* Set my-0 to eliminate vertical margin */}
      {/* Main heading */}
      <h1 className="text-6xl font-bold text-white mb-4">
        Effortlessly Perfect Your Writing
      </h1>
      {/* Description */}
      <p className="text-1/3 text-gray-400 mb-8 text-center"> {/* Added text-center to align text */}
        Our intelligent grammar correction tool helps you enhance your writing with just a click.<br />
        Say goodbye to errors and hello to polished prose!
      </p>



      
      {/* Call to action button */}
      <a 
        href="/tool"
        className="bg-purple-500 text-white mt-10 px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300"
      >
        Go to Correct
      </a>
    </div>
  );
};

export default Hero;
