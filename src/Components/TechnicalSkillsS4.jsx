import React, { useEffect, useRef } from 'react';
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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';



const TechnicalSkillsS4 = () => {
  const [skillsIcons] = SkillList();

  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const accordionsHeight = document.querySelector(".accordions").offsetHeight;
    const viewportHeight = window.innerHeight;
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.accordions',
        markers: true,
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: `+=${accordionsHeight+viewportHeight}px`,
        scrub: 1,
        ease: 'linear'
      },

    });

    tl.to('.accordion .list', {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
    });

    tl.to(
      '.accordion',
      {
        marginBottom: -15,
        stagger: 0.5,
      },
      
    )

    return () => {
      ScrollTrigger.killAll();
    }
  }, []);





  return (
    <div ref={wrapperRef} className='TechnicalSkillsS4  scroll-smooth overflow-hidden  lg:px-20 px-10 pt-[0rem] lg:pt-20'>
      <div ref={contentRef}>

        <div className="section-title text-center ">
          <MainTitle className=''><span className='font-bold text-3xl uppercase'>Technical <span className='text-blue-200'>Skills</span></span></MainTitle>
          <SubTitle>Web Development & Coding Is Fun 💻.</SubTitle>
        </div>
        <div className="accordions  overflow-hidden flex flex-col h-[100%]">

          {/* skill-section-one  */}
          <div className='skill-section-one accordion  '>
            <div className="list flex justify-center flex-col items-center lg:my-0 md:my-0 ">
              <SectionNumBlob> 1 </SectionNumBlob>
              <MainTitle className='capitalize'>FrontEnd Stack</MainTitle>
            </div>
            <div className="list skills-catagories grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 items-center ">

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
          </div>
          {/* skill-section-two  */}
          <div className="skill-section-two accordion">
            <div className="list flex justify-center flex-col items-center !my-5 mb-10 lg:my-0 md:my-0  ">
              <SectionNumBlob> 2 </SectionNumBlob>
              <MainTitle className='capitalize'>Backend Stack</MainTitle>
            </div>
            <div className="list skills-catagories grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 items-center">
              <div className="catagories-assets lg:flex md:flex justify-start hidden items-center">
                <div className="assets flex items-center">
                  <Player
                    src={backEndLoti}
                    className="player lotiPlayer opacity-100"
                    loop
                    autoplay
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
          </div>
          {/* skill-section-three  */}
          <div className="skill-section-three accordion ">
            <div className="list flex justify-center flex-col items-center !my-5 lg:my-0 md:my-0 ">
              <SectionNumBlob> 3 </SectionNumBlob>
              <MainTitle className='capitalize'>Technical Tools</MainTitle>
            </div>
            <div className="list skills-catagories  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 items-center">
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
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsS4;