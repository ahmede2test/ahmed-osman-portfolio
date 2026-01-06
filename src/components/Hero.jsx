import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, FileText } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Welcome Greeting */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium text-slate-300"
            >
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)] font-semibold">Ahmed Osman El Sisi</span> 👋
            </motion.p>

            <div className="space-y-6">
              <motion.h1 
                variants={itemVariants} 
                className="text-4xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] leading-tight"
              >
                Building Scalable Mobile Experiences
              </motion.h1>
              
              <motion.p 
                variants={itemVariants} 
                className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
              >
                Specializing in Flutter & Dart to craft high-performance, cross-platform applications with Clean Architecture.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href="/resume.pdf" 
                  download
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
          </div>

          {/* Profile Image - Right Side */}
          <motion.div 
            variants={itemVariants}
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

            {/* Subtitle under image */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-slate-300"
            >
              Mobile App Developer
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
