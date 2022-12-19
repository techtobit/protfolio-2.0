import React from 'react';
import '../Style/AboutMeS3.scss'
import '../Style/Main.scss'
import me from '../Assets/AboutMe/ashraf-uddin-s1.jpg'
import compliedProjects from '../Assets/AboutMe/complited.png'
import teamProject from '../Assets/AboutMe/team-project.png'
import contents from '../Assets/AboutMe/content.png'
import MainTitle from './Shared/SectionTitle/MainTitle';
import SubTitle from './Shared/SectionTitle/SubTitle';

const AboutMeS3 = () => {
 return (
  <div className='about-me grid justify-center'>
   <div className="section-title text-center">
    <MainTitle className=''><span className='font-bold text-3xl uppercase'>About <span className='text-blue-200'>Me</span></span></MainTitle>
    <SubTitle>Short Brief About Me 💆‍♂️.</SubTitle>
   </div>
   <div className="my-data lg:pt-20 lg:px-16 px-6 grid lg:grid-cols-3 grid-cols-1 justify-center items-center">
    <div className="me flex justify-center relative lg:py-0 py-10">
     {/* <div className="avatar-bg absolute"></div>
     <div className="avatar-bg2 absolute"></div> */}
     <img className='my-avatar' src={me} alt="" />
    </div>
    <div className="about lg:px-16 lg:col-span-2">
     <div className="about-bg pb-6">
      <p className='lg:first-letter:text-6xl first-letter:text-4xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left'>
       As a tech enthusiast, I enjoy exploring and implementing new things. Web Development is the best path to discover and develop in new ways.I'm a FrontEnd base Backend Developer as well as I have good experience building a web page using WordPress and some knowledge of SEO. Also,love to create content on youtube and write content for my own blog to make better interaction with my viewers.
      </p>
     </div>
     <div className="about-works grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 ">
      <div className="works">
       <div className="stack flex flex-col lg:items-start  items-center lg:pb-0 pb-6 md:pr-0 lg:pr-6 pr-0">
        <img className='about-work-img' src={compliedProjects} alt="" />
        <h3 className='font-bold pt-4'>20+ Projects</h3>
        <h3>Complied FrontEnd & BackEnd </h3>
       </div>
      </div>
      <div className="work">
       <div className="stack flex flex-col lg:items-start  items-center lg:pb-0 pb-6  lg:px-6 ">
        <img className='about-work-img' src={teamProject} alt="" />
        <h3 className='font-bold pt-4'>1+ Team Project</h3>
        <h3>Role - Scrum & Team Lead</h3>
       </div>
      </div>
      <div className="work">
       <div className="stack flex flex-col lg:items-start  items-center lg:pb-0 pb-6  lg:px-6 ">
        <img className='about-work-img' src={contents} alt="" />
        <h3 className='font-bold pt-4'>30+ Videos & Blogs</h3>
        <h3>600K+ Youtube & Web Traffic</h3>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AboutMeS3;