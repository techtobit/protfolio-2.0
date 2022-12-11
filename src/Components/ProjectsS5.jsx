import React, { useState } from 'react';
import ProjectList from './Shared/ProjectList';

const ProjectsS5 = () => {
 const [projects] = ProjectList();
 const [hoverInfo, setHoverInfo] = useState();


 const onScreenInfoHide = () => {
  setHoverInfo({
   display: "none"
  })
 }
 const onScreenInfoShow = () => {
  setHoverInfo({
   display: "flex"
  })
 }

 return (
  <div className='lg:p-20 p-4 grid  lg:grid-cols-2 grid-cols-1 justify-center'>
   <div className="d-left h-[100%]">
    <div className="projects grid justify-self-center content-center h-[100%] relative">
     {
      projects.slice(3, 4).map((mernProject) => {
       return (
        <div className="grid  justify-center items-center " key={mernProject.projectImg} onMouseLeave={onScreenInfoHide} onMouseEnter={onScreenInfoShow} >
         <img src={mernProject.projectImg} loading='lazy' alt="" className="project-img object-cover w-[100%] h-[130%] " />
         <div style={hoverInfo} className="project-info absolute  flex justify-center items-center text-white-200 bg-blue-50 w-[100%] h-[100%]">
          <p className='text-5xl font-bold'>{mernProject.project}</p>
          <div className="project-links">
           <div className="links">
            <a href={mernProject?.liveApp}>LiveApp</a>
           </div>
          </div>
         </div>
        </div>
       )
      })
     }
     {/* {
     projects.slice(5, 6).map((mernProject) => {
      return (
       <div className="grid justify-center" >
        <img src={mernProject.projectImg} loading='lazy' alt="" className="project-img w-[100%] h-[100%] object-cover " />
       </div>
      )
     })
    } */}
    </div>
   </div>
   <div className="d-right">
    <div className="projects grid grid-cols-3 justify-center justify-self-center content-center ">
     {
      projects.slice(0, 1).map((mernProject) => {
       return (
        <div className="grid col-span-2 justify-center" key={mernProject.projectImg}>
         <img src={mernProject.projectImg} loading='lazy' alt="" className="project-img object-cover " />
        </div>
       )
      })
     }
     {
      projects.slice(1, 2).map((mernProject) => {
       return (
        <div className="grid justify-center" key={mernProject.projectImg}>
         <img src={mernProject.projectImg} loading='lazy' alt="" className="project-img w-[100%] h-[100%] object-cover " />
        </div>
       )
      })
     }
    </div>
    <div className="projects grid grid-cols-3  justify-self-center content-center ">
     {
      projects.slice(2, 3).map((mernProject) => {
       return (
        <div className="grid  justify-center" key={mernProject.projectImg}>
         <img src={mernProject.projectImg} loading='lazy' alt="" className="project-img object-cover w-[100%] h-[100%] " />

        </div>
       )
      })
     }
     {
      projects.slice(4, 5).map((mernProject) => {
       return (
        <div className="grid justify-center col-span-2" >
         <img src={mernProject.projectImg} loading='lazy' alt="" className="project-img w-[100%] h-[100%] object-cover " />
        </div>
       )
      })
     }
    </div>
   </div>
  </div>
 );
};

export default ProjectsS5;