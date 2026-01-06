import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#020617]">
      {/* Stars/Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-20"
          initial={{ 
            x: Math.random() * 2000 - 1000, 
            y: Math.random() * 2000 - 1000,
            opacity: Math.random() * 0.5 
          }}
          animate={{
            y: [null, Math.random() * 100 - 50],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Nebula Blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="blob w-[600px] h-[600px] bg-primary/10 top-[-15%] left-[-15%]"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="blob w-[700px] h-[700px] bg-secondary/10 bottom-[-25%] right-[-15%]"
      />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="blob w-[500px] h-[500px] bg-accent/10 top-[45%] left-[35%]"
      />
    </div>
  );
};

export default Background;
