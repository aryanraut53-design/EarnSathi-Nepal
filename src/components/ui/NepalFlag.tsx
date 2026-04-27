import React from 'react';
import { motion } from 'motion/react';

export const NepalFlag = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      animate={{
        y: [0, -4, 0, 4, 0],
        rotate: [0, 2, 0, -2, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1, rotate: 10 }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 120" 
        className="drop-shadow-xl"
        width="100%" 
        height="100%"
      >
        <path 
          d="M 5,5 L 85,55 L 25,55 L 90,115 L 5,115 Z" 
          fill="#DC143C" 
          stroke="#003893" 
          strokeWidth="4" 
          strokeLinejoin="round" 
        />
        {/* Moon (top) */}
        <path d="M 18,35 Q 28,15 38,35 Q 28,25 18,35 Z" fill="#FFFFFF" />
        <circle cx="28" cy="31" r="4" fill="#FFFFFF" />
        {/* Sun (bottom) */}
        <circle cx="28" cy="85" r="9" fill="#FFFFFF" />
        <path d="M 28,70 L 28,100 M 13,85 L 43,85 M 18,75 L 38,95 M 18,95 L 38,75" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    </motion.div>
  );
};
