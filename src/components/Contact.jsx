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

          <div className="space-y-6">
            <div className="flex items-center space-x-6 p-4 rounded-2xl glass border-primary/10">
              <div className="p-3 rounded-xl bg-primary/20 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                <p className="text-slate-200">ahmed.osman.is.fcai@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 p-4 rounded-2xl glass border-secondary/10">
              <div className="p-3 rounded-xl bg-secondary/20 text-secondary">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Professional</p>
                <a href="https://linkedin.com/in/ahmed-osman22" className="text-slate-200 hover:text-secondary transition-colors">
                  linkedin.com/in/ahmed-osman22
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6 p-4 rounded-2xl glass border-accent/10">
              <div className="p-3 rounded-xl bg-accent/20 text-accent">
                <Github size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Code</p>
                <a href="https://github.com/ahmede2test" className="text-slate-200 hover:text-accent transition-colors">
                  github.com/ahmede2test
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-[2.5rem] border-white/10 relative overflow-hidden"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/10 focus:border-primary/50 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/10 focus:border-primary/50 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
              <textarea 
                name="message"
                required
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/10 focus:border-primary/50 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button 
              disabled={status.submitting}
              className="btn-primary w-full flex items-center justify-center space-x-2 group disabled:opacity-50"
            >
              <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
              {!status.submitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
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
