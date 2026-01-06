import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Star, GitFork, ChevronDown } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch up to 100 repos sorted by latest update
        const response = await fetch('https://api.github.com/users/ahmede2test/repos?sort=updated&per_page=100');
        const data = await response.json();
        
        // Strict Filtering: 
        // 1. Exclude forked repositories
        // 2. Exclude repositories with "untitled" in name (case-insensitive)
        // 3. Exclude repositories without a description
        const filteredData = data.filter(repo => 
          !repo.fork &&
          repo.description && 
          !repo.name.toLowerCase().includes('untitled')
        );
        
        setProjects(filteredData);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  if (loading) {
    return (
      <div className="section-padding text-center min-h-[400px] flex flex-col justify-center items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full relative z-10"
          ></motion.div>
        </div>
        <p className="mt-8 text-slate-400 font-medium tracking-widest uppercase text-xs animate-pulse">Syncing Gallery...</p>
      </div>
    );
  }

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full"></div>

      <div className="text-center space-y-4 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full glass border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-2"
        >
          Project Gallery
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black tracking-tight"
        >
          My Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Portfolio</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-2xl mx-auto font-light"
        >
          A strictly curated collection of {projects.length} professional repositories, 
          synced real-time with my latest GitHub activity.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx % 6 * 0.1 }}
              className="group"
            >
              <div className="relative h-full glass rounded-[2.5rem] p-1 border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <div className="p-8 flex flex-col h-full bg-[#030712]/40 rounded-[2.3rem] backdrop-blur-xl">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-2xl bg-white/5 text-primary group-hover:scale-110 transition-transform duration-500">
                      <Code2 size={28} />
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={project.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 rounded-xl glass border-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                        title="View Source"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors line-clamp-1">
                      {project.name.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.language ? (
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/10">
                          {project.language}
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium border border-white/5">
                          Mobile
                        </span>
                      )}
                      
                      {project.topics && project.topics.length > 0 ? (
                        project.topics.slice(0, 2).map(topic => (
                          <span key={topic} className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium border border-white/5">
                            {topic}
                          </span>
                        ))
                      ) : (
                        <span key="default" className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium border border-white/5">
                          Project
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                          <Star size={16} className="text-yellow-500/80" />
                          <span>{project.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                          <GitFork size={16} className="text-blue-500/80" />
                          <span>{project.forks_count}</span>
                        </div>
                      </div>
                      
                      <a 
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary hover:text-white transition-colors flex items-center gap-1 group/btn"
                      >
                        <span>VIEW REPO</span>
                        <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visibleCount < projects.length && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <button 
            onClick={handleShowMore}
            className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-full glass border-white/10 hover:border-primary/50 text-white font-bold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Show More Projects</span>
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
