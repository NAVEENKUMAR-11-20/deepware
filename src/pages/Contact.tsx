import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, AlertCircle, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/SEO';

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const emailjs = (window as any).emailjs;
      if (!emailjs) {
        throw new Error('EmailJS is not loaded. Check that the CDN script and initialization are present in index.html.');
      }

      const response = await emailjs.send('service_f37sh79', 'template_exrmu2n', {
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
        setErrorMessage(response.text || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please check your connection and EmailJS credentials.'
      );
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-0 relative overflow-hidden bg-[#082052]">
      <SEO 
        title="Contact DenveX – Get Custom Web Solutions Today"
        description="Contact DenveX for high-end web development services and UI/UX design. Let's build your next digital masterpiece together."
        keywords="contact DenveX, web design inquiry, custom web solutions, hire web developers, UI/UX design company"
      />
      {/* Background gradients and glows matching the home page theme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#082052] via-[#0D2D73] to-[#082052] opacity-95" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.08),transparent_22%)] opacity-80 pointer-events-none" />
        <div className="absolute top-20 right-[15%] w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-[10%] w-96 h-96 rounded-full bg-gradient-to-bl from-blue-500/15 to-indigo-500/10 blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4 font-semibold">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Contact DenveX
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Have a project in mind? We'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </motion.div>
      </div>

      {/* Mixed white and navy content section */}
      <div className="bg-[#F8F0E5] relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.2)] rounded-t-[3rem] py-20 -mt-4">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-10 h-full rounded-2xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(8,32,82,0.05)] text-slate-800 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(8,32,82,0.08)] flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-8 text-[#082052]">Contact Details</h2>
                  <p className="text-slate-600 mb-10 leading-relaxed">
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
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 border border-blue-200 flex-shrink-0">
                        <MapPin size={20} />
                      </span>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Office Location</p>
                        <p className="font-semibold text-[#082052] text-lg">Arumbakkam, Chennai - 600106</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-start gap-4"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 border border-blue-200 flex-shrink-0">
                        <Phone size={20} />
                      </span>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Phone</p>
                        <p className="font-semibold text-[#082052] text-lg">+91 73583 49394 </p>
                        <p className="font-semibold text-[#082052] text-lg">+91 8940788486 </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 border border-blue-200 flex-shrink-0">
                        <Mail size={20} />
                      </span>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Email</p>
                        <p className="font-semibold text-[#082052] text-lg">team@denvex.in</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-slate-100 pt-8">
                  <p className="text-sm uppercase tracking-wider text-slate-500 mb-5 font-semibold">Connect With Us</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/denvex/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      title="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://github.com/NAVEENKUMAR-11-20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-pink-600 hover:text-white transition-all shadow-sm"
                      title="Github"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=team@denvex.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                    >
                      <Mail size={20} />
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
              transition={{ duration: 0.6 }}
            >
              <div className="p-10 h-full rounded-2xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(8,32,82,0.05)] text-slate-800 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(8,32,82,0.08)]">
                <h2 className="text-2xl font-bold mb-8 text-[#082052]">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.label
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="block"
                  >
                    <span className="text-sm font-semibold text-slate-700 mb-2 block">Your Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20"
                    />
                  </motion.label>

                  <motion.label
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="block"
                  >
                    <span className="text-sm font-semibold text-slate-700 mb-2 block">Your Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20"
                    />
                  </motion.label>

                  <motion.label
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="block"
                  >
                    <span className="text-sm font-semibold text-slate-700 mb-2 block">Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20"
                    />
                  </motion.label>

                  <motion.label
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="block"
                  >
                    <span className="text-sm font-semibold text-slate-700 mb-2 block">Subject</span>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20"
                    />
                  </motion.label>

                  <motion.label
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="block"
                  >
                    <span className="text-sm font-semibold text-slate-700 mb-2 block">Your Message</span>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 resize-none"
                    />
                  </motion.label>

                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3"
                      >
                        <CheckCircle2 size={20} className="text-emerald-600" />
                        <p className="text-sm font-medium">Your message has been sent successfully.</p>
                      </motion.div>
                    ) : status === 'error' ? (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 flex items-center gap-3"
                      >
                        <AlertCircle size={20} className="text-red-600" />
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
                    className="w-full inline-flex items-center justify-center rounded-lg bg-[#082052] hover:bg-[#0c2f7a] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-blue-900/10 transition disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
              </div>
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
            <p className="text-slate-600 mb-6">Not ready to contact yet?</p>
            <Link
              to="/register"
              className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
