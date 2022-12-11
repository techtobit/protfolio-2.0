import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import HeroImg from '../Assets/hero-banner.svg'
// import HeroImg2 from '../Assets/programmer.png'
import HeroImg2 from '../Assets/mam2.png'
import HeroBgPlayer from '../Assets/development.json'
import StackHeaderS2 from './StackHeaderS2';

const HeroSection = () => {
 return (
  <div className='HeroSection sec-h-w flex justify-center relative'>
   <div className="stack-shadow absolute z-10 opacity-30 "></div>
   {/* <div className="heroBgPlayer z-10 absolute ">
    <Player
     src={HeroBgPlayer}
     className="player opacity-40"
     // loop
     autoplay
     style={{ height: '100vh', width: '100vw' }}
    />
   </div> */}
   <div className="hero sections gap-10 z-20 absolute flex  w-full self-center lg:flex-row flex-col-reverse items-center justify-items-center justify-around ">
    <div className="hero-data ">
     <h3>Hello</h3>
     <h1 className='font-bold '>Im Ashraf Uddin</h1>
     <h2>Full Stack Developer</h2>
     <div className="btns">
      <button>Get Resume</button>
     </div>
    </div>
    <div className="flex justify-center">
     <img src={HeroImg2} alt="" />
    </div>
   </div>
  </div>
 );
};

export default HeroSection;