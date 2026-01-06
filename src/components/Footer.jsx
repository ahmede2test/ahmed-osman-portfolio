import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, ArrowUpRight, Zap } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/ahmed-osman22', label: 'LinkedIn' },
        { icon: <Github size={18} />, href: 'https://github.com/ahmede2test', label: 'GitHub' },
        { icon: <Instagram size={18} />, href: 'https://www.instagram.com/ahmed_el_sisiy?igsh=dW1pbHU1M2E0cG50', label: 'Instagram' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

    const techStack = ['Flutter', 'React', 'Firebase', 'State Management'];

    return (
        <footer className="relative mt-20 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl overflow-hidden px-6 sm:px-12 lg:px-24">
            {/* Glowing Border Edge */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_-5px_20px_-5px_rgba(99,102,241,0.3)]"></div>

            <div className="max-w-7xl mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    
                    {/* Column 1: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100">Explore</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium flex items-center justify-center md:justify-start group">
                                        <span>{link.name}</span>
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Tech Stack */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100">Specialization</h4>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {techStack.map((tech) => (
                                <div key={tech} className="px-3 py-1 rounded-lg glass border-white/5 text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <div className="pt-4 flex items-center justify-center md:justify-start space-x-2 text-slate-500 text-xs">
                           <Zap size={14} className="text-primary" />
                           <span>Building with Precision</span>
                        </div>
                    </div>

                    {/* Column 3: Social Connect */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100">Connect</h4>
                        <div className="flex flex-col space-y-4 items-center md:items-start">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.label} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 text-slate-400 hover:text-white transition-all group"
                                >
                                    <div className="p-2 rounded-lg bg-slate-900/50 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                        {social.icon}
                                    </div>
                                    <span className="text-sm font-medium">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-slate-500 text-sm font-medium">
                        © 2026 Ahmed Osman ElSisi. Portfolio
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <span>Built with</span>
                        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/5 text-slate-300 shadow-inner">
                             <span className="text-blue-400">React</span>
                             <span className="text-slate-600">&</span>
                             <span className="text-primary">Flutter Spirit</span>
                        </div>
                        <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
