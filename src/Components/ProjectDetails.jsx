import React, { useEffect, useState } from 'react';

const ProjectDetails = () => {
 const [projects, setProjects] = useState([])
 const projectId = '02';
 useEffect(() => {
  fetch(`Projects.json/${projectId}`)
   .then(res => res.json())
   .then(data => setProjects(data))
 }, [projectId])
 console.log(projects);
 return (
  <div>

  </div>
 );
};

export default ProjectDetails;