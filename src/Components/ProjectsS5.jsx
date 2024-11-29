import React, { useState } from 'react';
import ProjectList from './Shared/ProjectList';
import { FaRegPaperPlane, FaGithub } from "react-icons/fa";
import '../Style/Main.scss'
import MainTitle from './Shared/SectionTitle/MainTitle';
import SubTitle from './Shared/SectionTitle/SubTitle';

const ProjectsS5 = () => {
  const [projects] = ProjectList();
  // const [hoverInfo, setHoverInfo] = useState({});
  const [hover, setHover] = useState(false)

  const hoverStyle = {
    display: "block",
    // backgroundColor: 'red'
  }

  const normalStyle = {
    display: "none"
  }





  return (
    <div className='projects-showcase-section relative lg:p-20 p-4 grid justify-center'>
      <div className="section-title text-center">
        <MainTitle className=''><span className='font-bold text-3xl uppercase'>About <span className='text-blue-200'>Projects</span></span></MainTitle>
        <SubTitle>My most favorite projects 💡.</SubTitle>
      </div>
      <div className="background-shadow opacity-30 w-[100%] h-[100%] z-0 absolute"></div>
      <div className="projects lg:pt-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 justify-center justify-self-center content-center  ">
        {
          projects.slice(0, 8).map((mernProject, index) => {
            return (
              <div className="grid project cursor-pointer  relative justify-center rounded-lg lg:w-[500px] md:w-[300px] w-[280px] lg:h-[300px] md:h-[220px] h-[200px] "
              // onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  
              >
                <img className="project-img card-shadow w-[100%] h-[100%] rounded-lg p-4 bg-white-200 " src={mernProject.projectImg} key={index} loading='lazy' alt="" />
                {/* here is project details.normaly its hidden and after hover its will display the div  */}
                <div className='project-hover-card flex-col justify-center items-center absolute rounded-lg w-[100%] h-[100%] '>
                  <h2 className=' lg:text-4xl text-2xl font-bold uppercase lg:tracking-[.2em] text-white-200'>{mernProject.project}</h2>
                  <div className="project-external-links flex lg:flex-row flex-col pt-4 gap-2">
                    <a className='flex justify-center items-center lg:p-2 p-[6px]  rounded-md lg:font-semibold font-normal text-xs hover:text-white-200 bg-white-200 bg-blue-100 hover:bg-blue-100 text-blue-100' href={mernProject.liveApp} target="_blank"><FaRegPaperPlane /> <span className='pl-2'>Live App</span></a>
                    <a className='flex justify-center items-center lg:p-2 p-[6px] rounded-md lg:font-semibold font-normal text-xs  hover:text-white-200 bg-white-200 bg-blue-100 hover:bg-blue-100 text-blue-100' href={mernProject.frontEndRepo} target="_blank"><FaGithub /> <span className='pl-2'>FrontEnd</span></a>
                    <a className='flex justify-center items-center lg:p-2 p-[6px] rounded-md lg:font-semibold font-normal text-xs hover:text-white-200 bg-white-200 bg-blue-100 hover:bg-blue-100 text-blue-100' href={mernProject.backendRepo} target="_blank"><FaGithub /> <span className='pl-2'>Backend</span></a>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ProjectsS5;