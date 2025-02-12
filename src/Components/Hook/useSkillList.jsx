import React, { useEffect, useState } from 'react';

const useSkillList = () => {
 const [skillsIcons, setSkillsIcons] = useState([])
 useEffect(() => {
  fetch('MySkills.json')
   .then(res => res.json())
   .then(data => setSkillsIcons(data))
 }, [])
 return [skillsIcons]
};

export default useSkillList;