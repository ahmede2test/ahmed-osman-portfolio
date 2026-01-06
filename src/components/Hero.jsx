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
        className="max-w-4xl w-full text-center space-y-10"
      >
        {/* Main Headline */}
        <div className="space-y-6">
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            Building Scalable Mobile Experiences
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Specializing in Flutter & Dart to craft high-performance, cross-platform applications with Clean Architecture.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
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
              className="px-8 py-4 rounded-full glass border-white/10 hover:border-primary/30 text-white font-bold text-lg hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <FileText size={20} className="text-primary" />
              <span>Download CV</span>
            </a>

            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full glass border-white/10 hover:border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle size={20} />
              <span>Let's Talk</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
