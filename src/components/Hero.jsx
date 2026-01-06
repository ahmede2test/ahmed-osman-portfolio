import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, FileText } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Ahmed Osman El Sisi 👋";
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 80); // 80ms per character

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 2.5 // Wait for typewriter to finish
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      } 
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Typewriter Greeting */}
            <div className="text-xl md:text-2xl font-medium text-slate-300 min-h-[2rem]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)] font-semibold">
                {displayedText}
              </span>
              {!typingComplete && <span className="animate-pulse">|</span>}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={typingComplete ? "visible" : "hidden"}
              className="space-y-6"
            >
              {/* Main Headline with Shimmer */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight relative"
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 via-cyan-400 to-purple-600 bg-[length:200%_auto] drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  style={{ display: 'inline-block' }}
                >
                  Building Scalable Mobile Experiences
                </motion.span>
              </motion.h1>
              
              {/* Sub-headline */}
              <motion.p 
                variants={itemVariants} 
                className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
              >
                Specializing in Flutter & Dart to craft high-performance, cross-platform applications with Clean Architecture.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4"
              >
                <a 
                  href="#projects" 
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>View My Work</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a 
                    href="/CV.pdf" 
                    download="Ahmed_Osman_EL_Sisi_CV.pdf"
                    className="px-6 py-4 rounded-full glass border-white/10 hover:border-primary/30 text-white font-bold hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    <FileText size={18} className="text-primary" />
                    <span>Download CV</span>
                  </a>

                  <a 
                    href="#contact" 
                    className="px-6 py-4 rounded-full glass border-white/10 hover:border-white/20 text-white font-bold hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    <MessageCircle size={18} />
                    <span>Let's Talk</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image - Right Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 order-1 lg:order-2"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Subtle Aura/Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/30 to-purple-500/30 blur-3xl rounded-full scale-150 -z-10"></div>
              
              {/* Gradient Border */}
              <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-purple-600">
                <div className="p-1 rounded-full bg-background">
                  <img 
                    src="https://github.com/ahmede2test.png" 
                    alt="Ahmed Osman" 
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-2 border-white/10"
                  />
                </div>
              </div>
            </motion.div>

            {/* Subtitle with Pulse */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                scale: [1, 1.05, 1]
              }}
              transition={{
                opacity: { delay: 1, duration: 0.5 },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="text-xl md:text-2xl font-semibold text-slate-300"
            >
              Mobile App Developer
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
