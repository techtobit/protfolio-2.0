import React from 'react';
import sectionNumBlob from '../../../Assets/SectionTitle/blob.svg'

const SectionNumBlob = ({ children }) => {
 return (
  <div className='w-20 h-16 p-0 relative'>
   <img src={sectionNumBlob} alt="" />
   <h4 className='absolute text-3xl text-white-200 font-bold top-4 left-8'>{children}</h4>
  </div>
 );
};

export default SectionNumBlob;