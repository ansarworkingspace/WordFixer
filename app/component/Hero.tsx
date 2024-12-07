import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center  justify-center"> {/* Set my-0 to eliminate vertical margin */}
      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl text-center font-bold text-white mb-4">
        Effortlessly Perfect Your Writing
      </h1>
      {/* Description */}
      <p className="text-[12px] md:text-lg md:px-16 px-8 text-gray-400 mb-8 text-center "> {/* Added text-center to align text */}
        Our intelligent grammar correction tool helps you enhance your writing with just a click.
        Say goodbye to errors and hello to polished prose!
      </p>



      
      {/* Call to action button */}
      <a 
        href="/tool"
        className="bg-purple-500 text-white text-xs md:text-sm mt-5 px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300"
      >
        Go to Correct
      </a>
    </div>
  );
};

export default Hero;
