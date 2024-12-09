import React from 'react';
import '../Style/Main.scss';
import '../Style/StackHeaderS2.scss'


const StackHeaderS2 = () => {
  return (
    <>
      <div className="stack-header flex justify-center w-full h-[20vh] bg-red-500 items-center absolute ">
        <div className="stack-shadow absolute"></div>
        <div className="stack-shadow-two absolute"></div>
        <p className='stack-card-title  text-md font-bold underline'>Open to work as</p>
        <div className="stack-list grid grid-cols-3 w-full  rounded-2xl justify-items-center items-center content-center drop-shadow-xl">
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