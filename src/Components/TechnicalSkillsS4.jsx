import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import frontEndLoti from '../Assets/skills-catagories/front-end-developer.json';
import backEndLoti from '../Assets/skills-catagories/back-end-developer.json';
import techTollsLoti from '../Assets/skills-catagories/tech-tools.json';
import '../Style/Main.scss';
import '../Style/TechnicalSkillsS4.scss';
import SkillList from './Shared/SkillList';
import MainTitle from './Shared/SectionTitle/MainTitle';
import SubTitle from './Shared/SectionTitle/SubTitle';
import SectionNumBlob from './Shared/SectionTitle/SectionNumBlob';
import sectionIndicator1 from '../Assets/SectionTitle/section-arrow-one.svg'
import sectionIndicator2 from '../Assets/SectionTitle/section-arrow.svg'

const TechnicalSkillsS4 = () => {
 const [skillsIcons] = SkillList();

 return (
  <div className='TechnicalSkillsS4 relative lg:px-20 px-10 pt-[0rem] lg:pt-20'>
   <div className="section-title text-center pt-20">
    <MainTitle className=''><span className='font-bold text-3xl uppercase'>Technical <span className='text-blue-200'>Skills</span></span></MainTitle>
    <SubTitle>Web Development & Coding Is Fun 💻.</SubTitle>
   </div>
   {/* skill-section-one  */}
   <div className='skill-section-one '>
    <div className="flex justify-center flex-col items-center lg:pb-0 md:pb-0 pb-10">
     <SectionNumBlob> 1 </SectionNumBlob>
     <MainTitle className='capitalize'>FrontEnd Stack</MainTitle>
     {/* <SubTitle>Frontend Stack</SubTitle> */}
    </div>
    <div className="skills-catagories h-screen pt-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 items-center ">
     <div className="skills-icons grid grid-cols-3 ">
      {
       skillsIcons.slice(0, 12).map((frontEnd, index) => {
        return (
         <div key={index} className=' skills-list flex flex-col relative  items-center justify-center p-4'>
          <div className="stack-shadow absolute"></div>
          <img className='skills-icon ' loading="lazy" src={frontEnd.skillImg} alt="" />
          <p className='font-bold lg:text-base md:text-base text-xs  py-2'>{frontEnd.skillName}</p>
         </div>
        )
       })
      }
     </div>
     <div className="catagories-assets lg:flex md:flex justify-end hidden items-center">
      <div className="assets flex items-center ">
       <Player
        src={frontEndLoti}
        className="player lotiPlayer opacity-100"
        loop
        autoplay
       // style={{ height: '50vh', width: '50vw' }}
       />
      </div>
     </div>
    </div>
    <img className='absolute sectionIndicator1 lg:w-[20%] lg:h-[20%] md:w-[22%] md:h-[20%]  lg:bottom-[52.5%] md:bottom-[35%] lg:left-[28%] md:left-[24%] lg:rotate-[-14deg] md:rotate-[-10deg] lg:block md:block hidden' src={sectionIndicator1} alt="" />
   </div>
   {/* skill-section-two  */}
   <div className="skill-section-two  pt-20">
    <div className="flex justify-center flex-col items-center lg:pb-0 md:pb-0 pb-10">
     <SectionNumBlob> 2 </SectionNumBlob>
     <MainTitle className='capitalize'>Backend Stack</MainTitle>
     {/* <SubTitle>Frontend Stack</SubTitle> */}
    </div>
    <div className="skills-catagories h-screen grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 items-center">
     <div className="catagories-assets lg:flex md:flex justify-start hidden items-center">
      <div className="assets flex items-center">
       <Player
        src={backEndLoti}
        className="player lotiPlayer opacity-100"
        loop
        autoplay
       // style={{ height: '50vh', width: '50vw' }}
       />
      </div>
     </div>
     <div className="skills-icons grid grid-cols-3 ">
      {
       skillsIcons.slice(12, 24).map((backEnd, index) => {
        return (
         <div key={index} className=' skills-list flex flex-col relative  items-center justify-center p-4'>
          <div className="stack-shadow absolute"></div>
          <img className='skills-icon ' loading="lazy" src={backEnd.skillImg} alt="" />
          <p className='font-bold lg:text-base md:text-base text-xs  py-2'>{backEnd.skillName}</p>
         </div>
        )
       })
      }
     </div>
    </div>
    <img className='absolute sectionIndicator2 lg:w-[26%] lg:h-[26%] md:w-[34%] md:h-[22%]  lg:bottom-[19%] md:bottom-[12%] lg:left-[49.3%] md:left-[50%]  lg:block md:block hidden' src={sectionIndicator2} alt="" />
   </div>

   {/* skill-section-three  */}
   <div className="skill-section-three  pt-20 ">
    <div className="flex justify-center flex-col items-center lg:pb-0 md:pb-0 pb-10">
     <SectionNumBlob> 3 </SectionNumBlob>
     <MainTitle className='capitalize'>Technical Tools</MainTitle>
     {/* <SubTitle>Frontend Stack</SubTitle> */}
    </div>
    <div className="skills-catagories h-screen  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 items-center">
     <div className="skills-icons grid grid-cols-3 ">
      {
       skillsIcons.slice(24, 36).map((techTools, index) => {
        return (
         <div key={index} className=' skills-list flex flex-col relative  items-center justify-center p-4'>
          <div className="stack-shadow absolute"></div>
          <img className='skills-icon ' loading="lazy" src={techTools.skillImg} alt="" />
          <p className='font-bold lg:text-base md:text-base text-xs  py-2'>{techTools.skillName}</p>
         </div>
        )
       })
      }
     </div>
     <div className="catagories-assets lg:flex md:flex justify-end hidden items-center">
      <div className="assets flex items-center">
       <Player
        src={techTollsLoti}
        className="player lotiPlayer opacity-100"
        loop
        autoplay
       // style={{ height: '50vh', width: '50vw' }}
       />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default TechnicalSkillsS4;