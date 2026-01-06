import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Database, 
  Wrench, 
  Code2, 
  Layers, 
  Cloud, 
  Zap,
  Layout
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-primary" />,
      skills: [
        { name: "Flutter", level: "Expert" },
        { name: "Dart", level: "Expert" },
        { name: "iOS/Android", level: "Advanced" },
        { name: "Clean Architecture", level: "Expert" }
      ]
    },
    {
      title: "State Management & Logic",
      icon: <Layers className="text-secondary" />,
      skills: [
        { name: "BLoC / Cubit", level: "Expert" },
        { name: "Provider", level: "Advanced" },
        { name: "GetX", level: "Advanced" },
        { name: "Riverpod", level: "Intermediate" }
      ]
    },
    {
      title: "Backend & Services",
      icon: <Database className="text-accent" />,
      skills: [
        { name: "Firebase", level: "Expert" },
        { name: "Supabase", level: "Advanced" },
        { name: "REST API", level: "Expert" },
        { name: "Node.js", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Extras",
      icon: <Wrench className="text-slate-400" />,
      skills: [
        { name: "Git / GitHub", level: "Expert" },
        { name: "Postman", level: "Advanced" },
        { name: "Vercel / Netlify", level: "Advanced" },
        { name: "Figma", level: "Intermediate" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full"></div>

      <div className="text-center space-y-4 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          My <span className="text-gradient">Tech Stack</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          Specialized in high-performance mobile engineering and scalable backend ecosystems.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass glass-hover p-6 rounded-3xl space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-slate-800/50">
                {category.icon}
              </div>
              <h3 className="font-bold text-lg">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group cursor-default">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-300 font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                    <span className="text-xs text-slate-500">{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level === 'Expert' ? '90%' : skill.level === 'Advanced' ? '70%' : '50%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${idx % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
