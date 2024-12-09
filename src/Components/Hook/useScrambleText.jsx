import { useEffect } from "react";

export const useScrambleText = (ref, duration = 3000) => {
  useEffect(() => {
    const scrambleText = (element) => {
      const chars = "!<>-_\\/[]{}—=+*^?#";
      const originalText = element.innerText || "";
      const textLength = originalText.length;
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
          clearInterval(scrambleInterval);
        }
      };

      startTime = Date.now();
      scrambleInterval = setInterval(scramble, 50);
    };

    if (ref.current) {
      scrambleText(ref.current);
    }
  }, [ref, duration]);
};
