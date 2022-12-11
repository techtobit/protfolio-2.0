import React from 'react';

const MainTitle = ({ children }) => {
 return (
  <div className='flex justify-center'>
   <h4 className='text-xl font-bold '>{children}</h4>
  </div>
 );
};

export default MainTitle;