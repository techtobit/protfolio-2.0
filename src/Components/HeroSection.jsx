import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import HeroWeb from '../Assets/hero-web-page.png'
import resume from '../Assets/MD ASHRAF UDDIN.pdf';
import { FaLinkedinIn, FaGithub, FaYoutube, FaDownload } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className='HeroSection lg:h-[92vh] h-[100vh] flex justify-center relative'>
      <div className="background-shadow absolute z-10 opacity-40 "></div>
      <div className="hero sections lg:gap-10 gap-2 z-20 absolute flex  w-full self-center lg:flex-row flex-col-reverse items-center justify-items-center justify-around ">
        <div className="hero-data  text-blue-300 flex flex-col justify-center items-center ">
          <span className='text-center hover:animate-shake'>
            <h2 className='tracking-[0.1em]'>Hello ,</h2>
            <h1 className='font-bold '>I'm <span className='text-blue-100 underline uppercase'>Md Ashraf Uddin</span></h1>
            <h2 className=''>Junior Software Engineer</h2>
          </span>
          <p className='pt-[2%] lg:w-[50%] text-justify'>I'm thrilled to welcome you to my portfolio! As an engineer, I take joy in creating complex and innovative solutions. Through this portfolio, I aim to share my knowledge and skill set with you. Feel free to explore, learn more about me, download my resume, and watch intro video for additional insights .</p>
          <div className="btns flex  gap-4 lg:pt-[3%] pt-[4%]">
            <button className='bg-blue-100 hover:bg-blue-200 flex justify-center items-center px-4 py-2 rounded-md text-white-200 '><AiOutlineCloudDownload /><a href={resume} download className='pl-2'>Get Resume</a> </button>
            <div className='flex justify-center items-center'>
              <button className='relative bg-blue-100 w-10 h-10 flex justify-center items-center rounded-full text-white 
     shadow-lg transform hover:scale-105 transition-transform duration-200'>
                <span className="absolute inset-0 rounded-full bg-blue-100 opacity-50 animate-ping"></span>
                <span className='relative z-20 p-0'> <AiFillPlayCircle className=' w-8 h-8 text-white-200' /></span>
              </button>
            </div>

          </div>
          {/* social icons and links  */}
          <div className="social-links fixed left-10 bottom-0 flex flex-col gap-4 pl-0 lg:pt-[2%] md:pt-[4%] pb-[4%] pt-[4%]">
            <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://www.linkedin.com/in/ashrafuddin17/" target="_blank"><FaLinkedinIn /></a></div>
            <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://github.com/techtobit" target="_blank"><FaGithub /></a></div>
            <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://www.youtube.com/channel/UC0pIXFHsiHUODADFzUQe_Tg" target="_blank"><FaYoutube /></a></div>
          </div>
        </div>
        {/* <div className="lg:flex justify-center hero-blob lg:pt-0 mg:pt-20 pt-20 ">
     <img className='hero-illustration lg:w-[100%] w-[200px] lg:h-[100%] h-[200px]' src={HeroWeb} alt="" />
    </div> */}
      </div>
    </div>
  );
};

export default HeroSection;