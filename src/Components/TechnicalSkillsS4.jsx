import React, { useEffect, useRef } from 'react';
import '../Style/Main.scss';
import '../Style/TechnicalSkillsS4.scss';
import MainTitle from './Shared/MainTitle';
import SubTitle from './Shared/SubTitle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import useSkillList from './Hook/useSkillList';



const TechnicalSkillsS4 = () => {
  const [skillsIcons] = useSkillList()

  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const accordionsHeight = document.querySelector(".accordions").offsetHeight;
    const viewportHeight = window.innerHeight;
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.accordions',
        pin: true,
        pinSpacing: true,
        // markers: true,
        // y:330,
        // x:300,
        start: "top top",
        // end: `+=${accordionsHeight + viewportHeight}px`,
        end: '+=500',
        // end:'bottom 20%+=100px',
        // end: 'bottom top',
        scrub: 1,
        ease: 'linear'
        // snap: {
        //   snapTo: 'labels', 
        //   duration: { min: 0.2, max: 5 },
        //   delay: 0.2,
        //   ease: 'power1.inOut' 
        // }
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
    <div className='TechnicalSkillsS4 lg:mt-[10%] mt-[20%] h-ldh'>
      <div className="section-title text-center mb-2">
        <MainTitle className=''><span className='font-bold text-3xl uppercase'>Technical <span className='text-blue-200'>Skills</span></span></MainTitle>
        <SubTitle>Web Development & Coding Is Fun 💻.</SubTitle>
      </div>

      <div ref={wrapperRef}>
        <div ref={contentRef}>
          <div className="accordions gap-4 flex flex-col justify-center items-center">
            {/* skill-section-one  */}
            <div className='skill-section-one accordion lg:w-[60%] w-[95%] h-auto lg:p-6 bg-white-100 rounded-xl'>
              <p className='border-l-4 p-2 font-bold rounded-t-xl'>Front End Skill Set</p>
              <div className="list skills-icons grid lg:grid-cols-6 grid-cols-6 h-[12rem]">
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
            </div>
            {/* skill-section-two  */}
            <div className="skill-section-two accordion lg:w-[60%] w-[95%] z-10 lg:p-6 bg-white-100 rounded-xl">
            <p className='border-l-4 p-2 font-bold rounded-t-xl '>Back End Skill Set</p>
              <div className="list skills-icons grid lg:grid-cols-6 grid-cols-6 h-[12rem]">
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
            {/* skill-section-three  */}
            <div className="skill-section-three accordion lg:w-[60%] w-[95%] z-10 lg:p-6 bg-white-100 rounded-xl">
            <p className='border-l-4 p-2 font-bold rounded-t-xl'>Tools</p>
              <div className="list skills-icons grid grid-cols-6 h-[12rem]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsS4;