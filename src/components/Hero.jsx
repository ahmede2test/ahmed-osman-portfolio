import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight, MessageCircle } from 'lucide-react';

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

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/ahmede2test' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/ahmed-osman22' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/ahmed_elsisi' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center space-y-10"
      >
        {/* Profile Section */}
        <motion.div variants={itemVariants} className="relative inline-block">
          {/* Subtle Aura/Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 blur-3xl rounded-full scale-150 -z-10"></div>
          
          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-indigo-500">
            <div className="p-1 rounded-full bg-background">
              <img 
                src="/profile.png" 
                alt="Ahmed Osman" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/10"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <div className="space-y-4">
          <motion.p variants={itemVariants} className="text-slate-400 font-medium tracking-wide">
            Hello, I'm Ahmed Osman
          </motion.p>
          
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
              Mobile App Developer
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
              Flutter Expert
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-xl mx-auto space-y-2 py-4">
            <p className="text-lg md:text-xl text-slate-300 font-medium">
              CS Graduate 2025 (B+ Grade).
            </p>
            <p className="text-slate-400 leading-relaxed font-light">
              Building high-performance applications with Clean Architecture.
            </p>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border-white/5 hover:border-primary/50 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <a 
            href="#projects" 
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>View My Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full glass border-white/10 hover:border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <MessageCircle size={20} />
            <span>Let's Talk</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
