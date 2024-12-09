import React from 'react';
import '../Style/Main.scss';
import '../Style/StackHeaderS2.scss'


const StackHeaderS2 = () => {
  return (
    <>
      <div className="stack-header flex  justify-center absolute lg:bottom-[15%] bottom-[8%] ">
        <div className="stack-shadow absolute"></div>
        <div className="stack-shadow-two absolute"></div>
        <p className='stack-card-title z-40 absolute top-[90%] lg:left-[24%] text-md font-bold underline'>Open to work as</p>
        <div className="stack-list absolute z-30 grid grid-cols-3 rounded-2xl justify-items-center items-center content-center drop-shadow-xl">
          <div className="stack flex flex-col items-center lg:pb-0 lg:px-6 border-blue-50 lg:border-l-[0.4px] ">
            <h3>Full Time</h3>
          </div>
          <div className="stack flex flex-col items-center  lg:pb-0 lg:px-6 border-blue-50 lg:border-l-[0.4px]">
            <h3>Part Time</h3>
          </div>
          <div className="stack flex flex-col items-center lg:pb-0 lg:px-6 border-blue-50 lg:border-l-[0.4px]">
            <h3>Contractual</h3>
          </div>
        </div>

      </div>

    </>
  );
};

export default StackHeaderS2;