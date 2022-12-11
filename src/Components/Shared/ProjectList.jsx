import React, { useEffect, useState } from 'react';

const ProjectList = () => {
 const [projects, setProjects] = useState([])
 useEffect(() => {
  fetch('Projects.json')
   .then(res => res.json())
   .then(data => setProjects(data))
 }, [])
 return [projects]
};

export default ProjectList;