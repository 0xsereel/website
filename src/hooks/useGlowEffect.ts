import { useState } from 'react';

export const useGlowEffect = () => {
  const [isGlowing, setIsGlowing] = useState(false);
  
  const glowProps = {
    onMouseEnter: () => setIsGlowing(true),
    onMouseLeave: () => setIsGlowing(false),
    style: {
      boxShadow: isGlowing 
        ? "0 0 30px rgba(28, 163, 110, 0.6), 0 0 60px rgba(255, 255, 255, 0.3)"
        : "none",
      transition: "box-shadow 0.3s ease"
    }
  };
  
  return { glowProps, isGlowing };
};
