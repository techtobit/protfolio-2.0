import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import React, { useEffect, useRef } from 'react';


const extractText = (children) => {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (React.isValidElement(children)) return extractText(children.props.children);
  return "";
}


gsap.registerPlugin();


const MainTitle = ({ children }) => {

  const scrambleRef = useRef(null);

  const scrambleText = (element, duration = 3000) => {
    const chars = "!<>-_\\/[]{}—=+*^?#";
    const originalText = element.innerText || "";
    const textLength = Math.max(originalText.length);
    let scrambleInterval;
    let startTime;

    const scramble = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      let scrambledText = "";
      for (let i = 0; i < textLength; i++) {
        if (i < progress * originalText.length) {
          scrambledText += originalText[i] || "";
        } else {
          scrambledText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      element.innerText = scrambledText;

      if (progress === 1) {
        clearInterval(scrambleInterval); // End animation
      }
    };

    startTime = Date.now();
    scrambleInterval = setInterval(scramble, 50);
  };

  useEffect(() => {
    if (scrambleRef.current) {
      scrambleText(scrambleRef.current);
    }
  }, []);

  return (
    <div className='flex justify-center'>
      <h4 ref={scrambleRef} className='text-xl font-bold '>{children}</h4>
    </div>
  );
};

export default MainTitle;