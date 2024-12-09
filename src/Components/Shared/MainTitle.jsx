import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import React, { useEffect, useRef } from 'react';
import { useScrambleText } from "../Hook/useScrambleText";


const extractText = (children) => {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (React.isValidElement(children)) return extractText(children.props.children);
  return "";
}


gsap.registerPlugin();


const MainTitle = ({ children }) => {

  const scrambleRef = useRef(null);
  // const plainText = extractText(children);

  useScrambleText(scrambleRef, 4000)


  return (
    <div className='flex justify-center'>
      <h4 ref={scrambleRef} className='text-3xl font-bold '>{children}</h4>
    </div>
  );
};

export default MainTitle;