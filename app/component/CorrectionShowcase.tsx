// import React from 'react';

// const CorrectionShowcase = () => {
//   return (
//     <div className="flex items-center justify-center ">
//       {/* Incorrect Sentence */}
//       <div className="bg-red-100 text-red-800 p-4 rounded-md shadow-md w-1/3 text-center">
//         <p className="text-sm">She go to the store yesterday.</p>
//       </div>

//       {/* Arrow */}
//       <div className="mx-4 text-3xl">
//         <span className="relative flex items-center">

//           <span className="font-bold text-white">&rarr;</span>
//         </span>
//       </div>

//       {/* Correct Sentence */}
//       <div className="bg-green-100 text-green-800 p-4 rounded-md shadow-md w-1/3 text-center">
//         <p className="text-sm">She went to the store yesterday.</p>
//       </div>
//     </div>
//   );
// };

// export default CorrectionShowcase;



'use client'

import React from "react";

const CorrectionShowcase = () => {
  return (
    <div className="flex items-center  justify-center">
      <div className="flex gap-3 justify-center items-center">
        <p className="text-lg">
          She <span className="text-[#f9a8d4]  font-bold">gone</span> to the store <span className="text-[#f9a8d4]  font-bold">yesterdays</span>.
        </p>
        <div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-6 h-6"  
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" 
            />
          </svg>
        </div>
        <p className="text-lg">
          She <span className="text-[#8b5cf6]  font-bold">went</span> to the store <span className="text-[#8b5cf6] font-bold">yesterday</span>.
        </p>
      </div>
    </div>
  );
};

export default CorrectionShowcase;
