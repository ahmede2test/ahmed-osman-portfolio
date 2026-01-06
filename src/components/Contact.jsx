import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    try {
      // Placeholder IDs - Replace with real ones from EmailJS dashboard
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      // Check if EmailJS credentials are configured
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        console.warn('⚠️ EmailJS credentials not configured. Please update Contact.jsx with your EmailJS keys.');
        console.error('Missing credentials:', { serviceId, templateId, publicKey });
        setStatus({ submitting: false, success: false, error: true });
        setTimeout(() => setStatus(prev => ({ ...prev, error: false })), 5000);
        return;
      }

      const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      console.log('✅ Email successfully sent!', result.status, result.text);
      setStatus({ submitting: false, success: true, error: false });
      form.current.reset();
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (error) {
      console.error('❌ FAILED TO SEND EMAIL...', error);
      // Detailed logging as requested by user
      if (error.text) {
        console.log('Error Text:', error.text);
      }
      if (error.status) {
        console.log('Error Status Code:', error.status);
      }
      
      setStatus({ submitting: false, success: false, error: true });
      // Keep error message visible for a bit or until user clicks "Try again"
    }
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

          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Email */}
            <motion.a
              href="mailto:ahmed.osman.is.fcai@gmail.com"
              whileHover={{ scale: 1.2 }}
              className="group w-16 h-16 rounded-full backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:border-primary/30"
            >
              <Mail size={24} className="text-slate-300 group-hover:text-primary transition-colors" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/ahmed-osman22"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="group w-16 h-16 rounded-full backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:border-sky-500/30"
            >
              <Linkedin size={24} className="text-slate-300 group-hover:text-sky-400 transition-colors" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/ahmede2test"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="group w-16 h-16 rounded-full backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:border-purple-500/30"
            >
              <Github size={24} className="text-slate-300 group-hover:text-purple-400 transition-colors" />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/ahmed_el_sisiy?igsh=dW1pbHU1M2E0cG50"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="group w-16 h-16 rounded-full backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:border-pink-500/30"
            >
              <Instagram size={24} className="text-slate-300 group-hover:text-pink-400 transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative p-[1px] rounded-[24px] bg-gradient-to-b from-white/10 to-transparent"
        >
          <div className="bg-slate-950/40 backdrop-blur-xl p-8 rounded-[23px] space-y-6 h-full">
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
                type="submit"
                disabled={status.submitting}
                whileHover={status.submitting ? {} : { scale: 1.02 }}
                whileTap={status.submitting ? {} : { scale: 0.98 }}
                animate={status.submitting ? {} : {
                  boxShadow: [
                    "0 0 0px rgba(99,102,241,0)",
                    "0 0 20px rgba(99,102,241,0.2)",
                    "0 0 0px rgba(99,102,241,0)"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-indigo-500 to-accent text-white font-bold tracking-widest uppercase text-xs flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed font-sans"
              >
                <span>{status.submitting ? 'Sending Message...' : 'Send Message'}</span>
                {!status.submitting && <Send size={16} />}
              </motion.button>
            </form>

            <AnimatePresence>
              {status.success && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 space-y-4 rounded-[23px] z-10"
                >
                  <CheckCircle2 size={64} className="text-primary animate-bounce" />
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              )}

              {status.error && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 space-y-4 rounded-[23px] z-10"
                >
                  <AlertCircle size={64} className="text-red-500" />
                  <h3 className="text-2xl font-bold font-sans">Something went wrong</h3>
                  <p className="text-slate-400 text-sm">Check the browser console for details.</p>
                  <button 
                    onClick={() => setStatus(prev => ({ ...prev, error: false }))}
                    className="mt-4 px-6 py-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition-colors font-semibold"
                  >
                    Try again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
