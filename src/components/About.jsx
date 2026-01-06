import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code2, Cpu, CheckCircle2 } from 'lucide-react';

const CodeSnippet = () => {
  const code = `
class UserBloc extends Bloc<UserEvent, UserState> {
  UserBloc({required this.repository}) : super(UserInitial()) {
    on<FetchUser>((event, emit) => {
      // Clean Architecture Pattern
      return repository.getUser(event.id)
        .then((user) => emit(UserLoaded(user)))
        .catchError((e) => emit(UserError(e)));
    });
  }
}`;

  return (
    <div className="glass p-6 rounded-3xl border-white/10 shadow-2xl font-mono text-[10px] md:text-xs leading-relaxed overflow-hidden relative group">
      <div className="flex items-center space-x-2 mb-4 border-b border-white/5 pb-2">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        </div>
        <span className="text-slate-500 text-[10px] uppercase tracking-widest pl-2">user_bloc.dart</span>
      </div>
      <pre className="text-slate-300">
        <code dangerouslySetInnerHTML={{ 
          __html: code
            .replace(/class|extends|on|return/g, '<span class="text-primary">$0</span>')
            .replace(/repository|emit|repository/g, '<span class="text-accent">$0</span>')
            .replace(/UserBloc|UserInitial|UserLoaded|UserError/g, '<span class="text-secondary">$0</span>')
        }} />
      </pre>
      <div className="absolute bottom-4 right-4 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity">
        <CheckCircle2 size={16} />
      </div>
    </div>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -z-10 w-96 h-96 bg-accent/5 blur-[120px] rounded-full"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Visual Content */}
        <motion.div variants={itemVariants} className="order-2 lg:order-1">
          <div className="relative space-y-6">
            <CodeSnippet />
            
            <div className="grid grid-cols-2 gap-4">
                <div className="glass p-6 rounded-3xl border-white/5 group hover:border-primary/20 transition-colors">
                    <Smartphone className="text-primary mb-3" size={24} />
                    <h4 className="font-bold text-sm">Performance</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">iOS & Android</p>
                </div>
                <div className="glass p-6 rounded-3xl border-white/5 group hover:border-accent/20 transition-colors">
                    <Code2 className="text-accent mb-3" size={24} />
                    <h4 className="font-bold text-sm">Architecture</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Clean & Modular</p>
                </div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div variants={itemVariants} className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              The Engineering <span className="text-gradient">Philosophy</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto lg:mx-0"></div>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              I'm a passionate Flutter developer focused on high-performance mobile apps for Android & iOS.
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Beyond just writing code, I specialize in crafting clean, maintainable architectures using <span className="text-slate-200 font-semibold">Dart, Firebase, and State Management (BLoC/Provider)</span>. I believe great apps are built with strategic thinking and a deep understanding of user needs.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
             {[
               { label: 'Strategic Thinking', icon: <Cpu size={16} /> },
               { label: 'User Centric', icon: <Smartphone size={16} /> },
               { label: 'Modular Code', icon: <Code2 size={16} /> }
             ].map((feature, i) => (
               <div key={i} className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900/50 border border-white/5 text-xs text-slate-300 font-bold uppercase tracking-widest">
                 {feature.icon}
                 <span>{feature.label}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
