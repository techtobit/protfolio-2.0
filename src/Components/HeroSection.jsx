import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useRef } from 'react';
import resume from '../Assets/MD ASHRAF UDDIN.pdf';
import { FaLinkedinIn, FaGithub, FaYoutube, FaDownload } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import bulb from '../Assets/Hero/Lightbulb.png'
import eng from '../Assets/Hero/Sticker_eng.png'
import coffee from '../Assets/Hero/Coffee Cup.png'
import react from '../Assets/Hero/Sticker_React.png'
import mysql from '../Assets/Hero/mysql.png'
import javascript from '../Assets/Hero/java-script.png'
import python from '../Assets/Hero/python.png'
import aws from '../Assets/Hero/aws.png'
import typescript from '../Assets/Hero/typescript.png'
import c from '../Assets/Hero/c-.png'
import { useScrambleText } from './Hook/useScrambleText';

const HeroSection = () => {

  const scrambleRef = useRef(null);
  // useScrambleText(scrambleRef, 4000)

  return (
    <div className='HeroSection lg:h-[92vh] h-[100vh] flex justify-center relative'>
      <div className="background-shadow absolute z-10 opacity-40 "></div>
      <div className='w-full h-full animate-shake animate-infinite animate-duration-[20000ms]'>
        <img src={bulb} className='w-20 absolute lg:top-[50%] top-[7%] lg:left-[15%] left-[13%] rotate-[-20deg] opacity-50' />
        <img src={typescript} className='w-10 absolute lg:top-[50%] top-[4%] lg:right-[15%] right-[35%] lg:rotate-[-20deg] opacity-50' />
        <img src={python} className='w-10 absolute lg:top-[32%] top-[23%] left-[4%] rotate-[-40deg] opacity-50' />
        <img src={c} className='w-10 absolute lg:top-[32%] top-[16%] lg:right-[4%] right-[7%] rotate-[-40deg] opacity-50' />
        <img src={react} className='w-14 absolute lg:top-[10%] top-[15%] lg:left-[16%] left-[6%] rotate-[-10deg] opacity-50' />
        <img src={mysql} className='w-10 absolute lg:top-[10%] top-[9%] lg:right-[16%] right-[18%] lg:rotate-[-10deg] rotate-[10deg] opacity-100' />
        <img src={javascript} className='w-10 absolute lg:bottom-[6%] top-[5%] lg:left-[10%] left-[35%] rotate-[-30deg] opacity-50' />
        <img src={aws} className='w-10 absolute lg:bottom-[6%] top-[24%] lg:right-[10%] right-[3%] rotate-[-30deg] opacity-50' />
      </div>
      <div className="hero sections lg:gap-10 gap-2 z-20 absolute flex  w-full self-center lg:flex-row flex-col-reverse items-center justify-items-center justify-around ">
        <div className="hero-data  text-blue-300 flex flex-col justify-center items-center ">
          <span className='text-center hover:animate-shake animate-infinite animate-duration-[20000ms]'>
            <h2 className='tracking-[0.1em]'>Hello ,</h2>
            <h1 className='font-bold  '>I'm <span className='text-blue-100 underline uppercase'>Md Ashraf Uddin</span></h1>
            <h2 ref={scrambleRef} id="scrambleText" className='scramble'>Junior Software Engineer</h2>
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
          <div className="social-links flex lg:flex-col lg:absolute lg:left-10 lg:-bottom-[35%] lg:mt-0 md:mt-0 mt-4 gap-4">
            <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://www.linkedin.com/in/ashrafuddin17/" target="_blank"><FaLinkedinIn /></a></div>
            <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://github.com/techtobit" target="_blank"><FaGithub /></a></div>
            <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://www.youtube.com/channel/UC0pIXFHsiHUODADFzUQe_Tg" target="_blank"><FaYoutube /></a></div>

          </div>
          <button className='lg:flex flex-col hidden absolute !rotate-[90deg]  hover:translate-y-6 right-0 -bottom-[26%]  justify-center '>
            <p className=''> scroll down</p>
            <div className='absolute -left-12 w-[0.5px] h-20 bg-blue-300 rotate-[90deg] '></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;