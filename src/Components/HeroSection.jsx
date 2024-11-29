import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import HeroWeb from '../Assets/hero-web-page.png'
import resume from '../Assets/MD ASHRAF UDDIN.pdf';
import { FaLinkedinIn, FaGithub, FaYoutube, FaDownload } from "react-icons/fa";
import { AiOutlineCloudDownload } from "react-icons/ai";

const HeroSection = () => {
 return (
  <div className='HeroSection lg:h-[100vh] h-[100vh] flex justify-center relative'>
   <div className="background-shadow absolute z-10 opacity-40 "></div>
   <div className="hero sections lg:gap-10 gap-2 z-20 absolute flex  w-full self-center lg:flex-row flex-col-reverse items-center justify-items-center justify-around ">
    <div className="hero-data text-blue-300  ">
     <h2 className='tracking-[0.1em]'>Hello ,</h2>
     <h1 className='font-bold '>I'm <span className='text-blue-100 underline'>Ashraf Uddin</span></h1>
     <h2 className=''>Full Stack Developer.</h2>
     <p className='pt-[2%] lg:w-96'>I'm glad to having you on my portfolio.As a developer create a things complicated is my hobby.I would like to introduce my thinkings, knowledged and skills sets with you throw this portfolio.You can also know about me more by downloading my resume.</p>
     <div className="btns flex  gap-4 lg:pt-[6%] pt-[4%]">
      <button className='bg-blue-100 hover:bg-blue-200 flex justify-center items-center px-4 py-2 rounded-md text-white-200 '><AiOutlineCloudDownload /><a href={resume} download className='pl-2'>Get Resume</a> </button>
      {/* <button className='bg-blue-100 flex justify-center items-center px-4 py-2 rounded-md text-white-200 '><FaDownload> </FaDownload> <span className='pl-2'>Get Resume</span> </button> */}
     </div>
     {/* social icons and links  */}
     <div className="social-links flex gap-4 pl-0 lg:pt-[3%] md:pt-[10%] pb-[4%] pt-[4%]">
      <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://www.linkedin.com/in/ashrafuddin17/" target="_blank"><FaLinkedinIn /></a></div>
      <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://github.com/techtobit" target="_blank"><FaGithub /></a></div>
      <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://www.youtube.com/channel/UC0pIXFHsiHUODADFzUQe_Tg" target="_blank"><FaYoutube /></a></div>
     </div>
    </div>
    <div className="lg:flex justify-center hero-blob lg:pt-0 mg:pt-20 pt-20 ">
     <img className='hero-illustration lg:w-[100%] w-[200px] lg:h-[100%] h-[200px]' src={HeroWeb} alt="" />
    </div>
   </div>
  </div>
 );
};

export default HeroSection;