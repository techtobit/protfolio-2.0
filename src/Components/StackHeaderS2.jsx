import React from 'react';
import '../Style/Main.scss';
import '../Style/StackHeaderS2.scss'
import frontEndIcon from '../Assets/stackHeader-icon/frontend.png';
import backEndIcon from '../Assets/stackHeader-icon/backend.png';
import wordpressSeoIcon from '../Assets/stackHeader-icon/seo.png'
import contentWrithingIcon from '../Assets/stackHeader-icon/content-creator.png'

const StackHeaderS2 = () => {
 return (
  <>
   <div className="stack-header flex justify-center relative ">
    <div className="stack-shadow absolute"></div>
    <div className="stack-shadow-two absolute"></div>
    <div className="stack-list absolute grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 rounded-2xl justify-items-center items-center content-center drop-shadow-xl">
     <div className="stack flex flex-col items-center lg:pb-0 pb-6 px-6 lg:border-r-[0.4px] ">
      <img src={frontEndIcon} alt="" />
      <h3 className='font-bold pt-4'>1.5+ Years</h3>
      <h3>FrontEnd Development</h3>
     </div>
     <div className="stack flex flex-col items-center lg:pb-0 pb-6  px-6 lg:border-r-[0.4px]">
      <img src={backEndIcon} alt="" />
      <h3 className='font-bold pt-4'> 6+ Months</h3>
      <h3>BackEnd Development</h3>
     </div>
     <div className="stack flex flex-col items-center lg:pb-0 pb-6 px-6 lg:border-r-[0.4px]">
      <img src={wordpressSeoIcon} alt="" />
      <h3 className='font-bold pt-4'>2+ Years</h3>
      <h3>Wordpress + SEO</h3>
     </div>
     <div className="stack flex flex-col items-center lg:pb-0 pb-6 px-6 ">
      <img src={contentWrithingIcon} alt="" />
      <h3 className='font-bold pt-4'>2+ Years</h3>
      <h3>Content Creation</h3>
     </div>
    </div>

   </div>
   <div className="stack-header-bottom-section"></div>
  </>
 );
};

export default StackHeaderS2;