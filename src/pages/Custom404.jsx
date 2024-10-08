// import React from 'react';
// import { AiOutlineWarning, AiOutlineHome } from 'react-icons/ai';

// const Custom404 = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
//       <div className="text-center">
//         <AiOutlineWarning className="mx-auto h-16 w-16 text-red-500 mb-4" />
//         <h1 className="text-4xl font-bold text-[#FFFFFF] mb-2">Oops! Page Not Found</h1>
//         <p className="text-xl text-[#A3A3A3] mb-8">
//           We couldn't find the page you're looking for. It might have been moved or doesn't exist.
//         </p>
//         <a
//           href="/"
//           className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ff0059]  hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
//         >
//           <AiOutlineHome className="mr-2 h-5 w-5" />
//           Go back home
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Custom404;
import React from 'react';
import { AiOutlineWarning, AiOutlineHome } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <div className="text-center">
        <AiOutlineWarning className="mx-auto h-16 w-16 text-red-500 mb-4" />
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#FFFFFF] mb-2"
        >
          Oops! Page Not Found
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-[#A3A3A3] mb-8"
        >
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </motion.p>
        <motion.a
          href="/"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ff0059] hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
        >
          <AiOutlineHome className="mr-2 h-5 w-5" />
          Go back home
        </motion.a>
      </div>
    </div>
  );
};

export default Custom404;