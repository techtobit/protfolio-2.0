import React, { useState } from 'react';
import { FaRegPaperPlane, FaGithub } from "react-icons/fa";
import '../Style/Main.scss'
import MainTitle from './Shared/MainTitle';
import SubTitle from './Shared/SubTitle';
import useProjectList from './Hook/useProjectList';

const ProjectsS5 = () => {
  const [projects] = useProjectList();

  const [filterProjects, setFilterProjects] = useState('front_end')


  console.log(filterProjects);

  projects.filter((project) => project.projectType === filterProjects).map(project => {
    console.log(project);

  })



  return (
    <div className='projects-showcase-section relative h-lvh grid  items-center justify-center justify-items-center'>
      <div className="section-title text-center">
        <MainTitle className=''><span className='font-bold text-3xl uppercase'>About <span className='text-blue-200'>Projects</span></span></MainTitle>
        <SubTitle>My most favorite projects 💡.</SubTitle>
      </div>
      <div className="background-shadow opacity-30 w-[100%] h-[100%] z-0 absolute"></div>
      
      <div className='bg-white-100 z-10 lg:w-[60%] w-[95%] flex lg:flex-none flex-wrap items-center justify-center py-[5px] my-10 rounded-md'>
        <div className='flex lg:gap-10 gap-4 lg:flex-none flex-wrap  justify-center'>
          <button onClick={() => setFilterProjects('front_end')} className=' bg-blue-100 !cursor-pointer hover:bg-blue-200 flex justify-center items-center px-2 py-[5px] rounded-md text-white-200 '>Frontend</button>
          <button onClick={() => setFilterProjects('mern')} className=' bg-blue-100 !cursor-pointer hover:bg-blue-200 flex justify-center items-center px-2 py-[5px] rounded-md text-white-200 '>MernStack </button>
          <button onClick={() => setFilterProjects('django')} className=' bg-blue-100 !cursor-pointer hover:bg-blue-200 flex justify-center items-center px-2 py-[5px] rounded-md text-white-200 '>Djnago </button>
          <button onClick={() => setFilterProjects('api')} className=' bg-blue-100 !cursor-pointer hover:bg-blue-200 flex justify-center items-center px-2 py-[5px] rounded-md text-white-200 '>API </button>
        </div>
      </div>


      <div className="projects grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 justify-center justify-self-center content-center  ">
        {
          projects.filter((project) => project.projectType === filterProjects).map((project, index) => {
            return (
              <div className="grid project cursor-pointer  relative justify-center rounded-lg lg:w-[500px] md:w-[300px] w-[280px] lg:h-[300px] md:h-[220px] h-[200px] "
              // onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  
              >
                <img className="project-img card-shadow w-[100%] h-[100%] rounded-lg p-4 bg-white-200 " src={project.projectImg} key={index} loading='lazy' alt="" />
                {/* here is project details.normaly its hidden and after hover its will display the div  */}
                <div className='project-hover-card flex-col justify-center items-center absolute rounded-lg w-[100%] h-[100%] '>
                  <h2 className=' lg:text-4xl text-2xl font-bold uppercase lg:tracking-[.2em] text-white-200'>{project.project}</h2>
                  <div className="project-external-links flex lg:flex-row flex-col pt-4 gap-2">
                    <a className='flex justify-center items-center lg:p-2 p-[6px]  rounded-md lg:font-semibold font-normal text-xs hover:text-white-200 bg-white-200 bg-blue-100 hover:bg-blue-100 text-blue-100' href={project.liveApp} target="_blank"><FaRegPaperPlane /> <span className='pl-2'>Live App</span></a>
                    <a className='flex justify-center items-center lg:p-2 p-[6px] rounded-md lg:font-semibold font-normal text-xs  hover:text-white-200 bg-white-200 bg-blue-100 hover:bg-blue-100 text-blue-100' href={project.frontEndRepo} target="_blank"><FaGithub /> <span className='pl-2'>FrontEnd Repo</span></a>
                    {
                      (project.backendRepo)
                        ?
                        <a className='flex justify-center items-center lg:p-2 p-[6px] rounded-md lg:font-semibold font-normal text-xs hover:text-white-200 bg-white-200 bg-blue-100 hover:bg-blue-100 text-blue-100' href={project.backendRepo} target="_blank"><FaGithub /> <span className='pl-2'>Backend Repo</span></a>
                        : ""
                    }

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