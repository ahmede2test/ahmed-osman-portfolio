import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    // Placeholder IDs - Replace with real ones from EmailJS dashboard
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          setStatus({ submitting: false, success: true, error: false });
          form.current.reset();
          setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      }, (error) => {
          console.error(error.text);
          setStatus({ submitting: false, success: false, error: true });
          setTimeout(() => setStatus(prev => ({ ...prev, error: false })), 5000);
      });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Let's Build Something <span className="text-gradient">Epic</span>
            </h2>
            <p className="text-slate-400 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities in the mobile development space.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-sm text-slate-200">ahmed.osman.is.fcai@gmail.com</p>
                </div>
              </div>

              <a href="https://linkedin.com/in/ahmed-osman22" target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-secondary/20 transition-all group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">LinkedIn</p>
                  <p className="text-sm text-slate-200">ahmed-osman22</p>
                </div>
              </a>

              <a href="https://github.com/ahmede2test" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">GitHub</p>
                  <p className="text-sm text-slate-200">ahmede2test</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative p-[1px] rounded-[24px] bg-gradient-to-b from-white/10 to-transparent"
        >
          <div className="bg-slate-950/40 backdrop-blur-xl p-8 rounded-[23px] space-y-6">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    placeholder="Ahmed Osman"
                    className="w-full px-6 py-4 rounded-xl bg-white/[0.03] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all focus:shadow-[0_0_20px_rgba(99,102,241,0.1)] text-slate-200 placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    placeholder="ahmed@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-white/[0.03] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all focus:shadow-[0_0_20px_rgba(99,102,241,0.1)] text-slate-200 placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  placeholder="I'd love to hear about your next project..."
                  className="w-full px-6 py-4 rounded-xl bg-white/[0.03] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all focus:shadow-[0_0_20px_rgba(99,102,241,0.1)] text-slate-200 placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>
              
              <motion.button 
                disabled={status.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={status.submitting ? {} : {
                  boxShadow: [
                    "0 0 0px rgba(99,102,241,0)",
                    "0 0 20px rgba(99,102,241,0.2)",
                    "0 0 0px rgba(99,102,241,0)"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-indigo-500 to-accent text-white font-bold tracking-widest uppercase text-xs flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{status.submitting ? 'Sending Message...' : 'Send Message'}</span>
                {!status.submitting && <Send size={16} />}
              </motion.button>
            </form>

          {/* Success/Error Overlays */}
          {status.success && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 space-y-4"
            >
              <CheckCircle2 size={64} className="text-primary animate-bounce" />
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
            </motion.div>
          )}

          {status.error && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 space-y-4"
            >
              <AlertCircle size={64} className="text-red-500" />
              <h3 className="text-2xl font-bold">Oops!</h3>
              <p className="text-slate-400">Something went wrong. Please try again or email me directly.</p>
              <button 
                onClick={() => setStatus(prev => ({ ...prev, error: false }))}
                className="text-primary font-semibold hover:underline"
              >
                Try again
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
