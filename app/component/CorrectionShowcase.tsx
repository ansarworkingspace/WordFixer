


// 'use client'

// import React from "react";

// const CorrectionShowcase = () => {
//   return (
//     <div className="flex items-center  justify-center">
//       <div className="flex gap-3 justify-center items-center">
//         <p className="text-[15px] md:text-lg">
//           She <span className="text-[#f9a8d4]  font-bold">gone</span> to the store <span className="text-[#f9a8d4]  font-bold">yesterdays</span>.
//         </p>
//         <div>
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             strokeWidth="1.5" 
//             stroke="currentColor" 
//             className=" w-6 h-6 "  
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" 
//             />
//           </svg>
//         </div>
//         <p className="text-[15px] md:text-lg">
//           She <span className="text-[#8b5cf6]  font-bold">went</span> to the store <span className="text-[#8b5cf6] font-bold">yesterday</span>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CorrectionShowcase;


'use client'

import React from "react";

const CorrectionShowcase = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex md:flex-row flex-col gap-3 justify-center items-center">

        {/* First Paragraph */}
        <p className="text-[15px] md:text-lg">
          She <span className="text-[#f9a8d4] font-bold">gone</span> to the store <span className="text-[#f9a8d4] font-bold">yesterdays</span>.
        </p>

        {/* Arrow for below md screens */}
        <div className="md:hidden text-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-6 h-6 mx-auto"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 4v16m0 0l-4-4m4 4l4-4" 
            />
          </svg>
        </div>

        {/* Old Arrow for md screens and above */}
        <div className="hidden md:block">
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

        {/* Second Paragraph */}
        <p className="text-[15px] md:text-lg">
          She <span className="text-[#8b5cf6] font-bold">went</span> to the store <span className="text-[#8b5cf6] font-bold">yesterday</span>.
        </p>
      </div>
    </div>
  );
};

export default CorrectionShowcase;
