import { Mail, Phone, MapPin, Linkedin, Instagram, Send, CheckCircle2, AlertCircle, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import GlassPanel from '../components/GlassPanel';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    try {
      // Use EmailJS as requested
      // We ensure the script is loaded and initialized from index.html
      const response = await (window as any).emailjs.send("service_f37sh79", "template_exrmu2n", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please check your credentials or connection.');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden bg-gradient-to-b from-[#162d50] via-[#1a3358] to-slate-950">
      {/* Light navy blue gradient background with decorative glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-br from-[#1e3f6e]/80 via-[#1b3660]/60 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_center,rgba(56,139,248,0.15),transparent_60%)]" />
        <div className="absolute top-20 right-[15%] w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-[10%] w-96 h-96 rounded-full bg-gradient-to-bl from-blue-500/15 to-indigo-500/10 blur-3xl opacity-50" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-gradient-to-tr from-sky-600/12 to-violet-500/8 blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-4 font-semibold">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Contact DenveX
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Have a project in mind? We'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassPanel variant="dark" blur="lg" className="p-10 h-full">
              <h2 className="text-2xl font-semibold mb-8 text-white">Contact Details</h2>
              <p className="text-gray-300 mb-10 leading-relaxed">
                Ready to discuss your next big project? Reach out directly or connect with us on social media.
              </p>

              <div className="space-y-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 flex-shrink-0">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Office Location</p>
                    <p className="font-medium text-white">Arumbakkam, Chennai - 600205</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 flex-shrink-0">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="font-medium text-white">+91 73583 49394</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 flex-shrink-0">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="font-medium text-white">teamdenvex@gmail.com</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-5 font-semibold">Connect With Us</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/naveen-kumar-p-034658300/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-gray-300 hover:bg-blue-600/30 hover:text-blue-300 transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/NAVEENKUMAR-11-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-gray-300 hover:bg-pink-600/30 hover:text-pink-300 transition-all"
                    title="Github"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=teamdenvex@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-gray-300 hover:bg-emerald-600/30 hover:text-emerald-300 transition-all"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassPanel variant="gradient" blur="lg" className="p-10 h-full">
              <h2 className="text-2xl font-semibold mb-8 text-white">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="block"
                >
                  <span className="text-sm font-medium text-gray-300 mb-2 block">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-lg border border-white/20 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-emerald-400 focus:bg-slate-900/70"
                  />
                </motion.label>

                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="block"
                >
                  <span className="text-sm font-medium text-gray-300 mb-2 block">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-lg border border-white/20 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-emerald-400 focus:bg-slate-900/70"
                  />
                </motion.label>

                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="block"
                >
                  <span className="text-sm font-medium text-gray-300 mb-2 block">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border border-white/20 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-emerald-400 focus:bg-slate-900/70"
                  />
                </motion.label>

                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="block"
                >
                  <span className="text-sm font-medium text-gray-300 mb-2 block">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    className="w-full rounded-lg border border-white/20 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-emerald-400 focus:bg-slate-900/70"
                  />
                </motion.label>

                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="block"
                >
                  <span className="text-sm font-medium text-gray-300 mb-2 block">Your Message</span>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full rounded-lg border border-white/20 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-emerald-400 focus:bg-slate-900/70 resize-none"
                  />
                </motion.label>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center gap-3"
                    >
                      <CheckCircle2 size={20} />
                      <p className="text-sm font-medium">Your message has been sent successfully.</p>
                    </motion.div>
                  ) : status === 'error' ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 flex items-center gap-3"
                    >
                      <AlertCircle size={20} />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-500/50 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </motion.button>
              </form>
            </GlassPanel>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-300 mb-6">Not ready to contact yet?</p>
          <Link
            to="/register"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
