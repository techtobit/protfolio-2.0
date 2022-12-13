import React, { useState } from 'react';
import ProjectList from './Shared/ProjectList';
import { FaRegPaperPlane, FaGithub } from "react-icons/fa";
import '../Style/Main.scss'

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
   <div className="background-shadow opacity-30 w-[100%] h-[100%] z-0 absolute"></div>
   <div className="projects grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 justify-center justify-self-center content-center  ">
    {
     projects.slice(0, 8).map((mernProject, index) => {
      return (
       <div className="grid project  relative justify-center rounded-lg lg:w-[500px] md:w-[300px] w-[280px] lg:h-[300px] md:h-[220px] h-[200px] "
       // onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  
       >
        <img className="project-img card-shadow w-[100%] h-[100%] rounded-lg p-4 bg-white-200 " src={mernProject.projectImg} key={index} loading='lazy' alt="" />
        <div className='project-hover-card justify-center items-center absolute rounded-lg w-[100%] h-[100%] bg-blue-50'>
         <h2 className='text-4xl font-bold uppercase lg:tracking-[.2em] text-white-200'>{mernProject.project}</h2>

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