import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassPanel from '../components/GlassPanel';

const Contact = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-emerald-600/20 to-teal-500/10 blur-3xl opacity-40" />
        <div className="absolute bottom-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-600/20 to-violet-500/10 blur-3xl opacity-40" />
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
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-gray-300 hover:bg-pink-600/30 hover:text-pink-300 transition-all"
                    title="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="mailto:teamdenvex@gmail.com"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-gray-300 hover:bg-emerald-600/30 hover:text-emerald-300 transition-all"
                    title="Email"
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
              <form className="space-y-6">
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
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
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
                    placeholder="Tell us about your project..."
                    className="w-full rounded-lg border border-white/20 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-emerald-400 focus:bg-slate-900/70 resize-none"
                  />
                </motion.label>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-500/50 hover:from-emerald-600 hover:to-teal-600"
                >
                  Send Message
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
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="p-8 sm:p-10 lg:p-14">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-300 mb-3">Contact Us</p>
              <h1 className="text-4xl font-bold sm:text-5xl">Get in touch with DenveX</h1>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                Send your message and we’ll reach out soon. Whether you need a new website, design support, or a full digital strategy, our team is ready.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/70 border border-white/10 p-6">
                  <h2 className="text-xl font-semibold mb-4">Contact details</h2>
                  <p className="text-gray-400 mb-6">Want to discuss a project? Reach out directly through email or phone, or connect with us on socials.</p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                        <MapPin size={18} />
                      </span>
                      <div>
                        <p className="text-sm text-gray-400">Office</p>
                        <p className="font-medium">Arumbakkam, Chennai - 600205</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                        <Phone size={18} />
                      </span>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <p className="font-medium">+91 73583 49394</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                        <Mail size={18} />
                      </span>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="font-medium">teamdenvex@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-4">Connect With Us</p>
                    <div className="flex items-center gap-3">
                      <a href="https://www.linkedin.com/in/naveen-kumar-p-034658300/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white hover:bg-white/20 transition">
                        <Linkedin size={20} />
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white hover:bg-white/20 transition">
                        <Instagram size={20} />
                      </a>
                      <a href="mailto:teamdenvex@gmail.com" title="Email" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white hover:bg-white/20 transition">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <form className="rounded-3xl bg-slate-950/80 border border-white/10 p-6 shadow-xl">
                  <div className="grid gap-5">
                    <label className="block">
                      <span className="text-sm text-gray-300">Your Name</span>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm text-gray-300">Your Email</span>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm text-gray-300">Your Phone Number</span>
                      <input
                        type="tel"
                        placeholder="Enter your phone"
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm text-gray-300">Subject</span>
                      <input
                        type="text"
                        placeholder="Project or inquiry subject"
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm text-gray-300">Your Message</span>
                      <textarea
                        rows={5}
                        placeholder="Write your message here"
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
                      />
                    </label>

                    <button
                      type="submit"
                      className="mt-2 inline-flex w-full items-center justify-center rounded-3xl bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-slate-950/70 px-8 py-6 sm:px-10 sm:py-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <p className="text-gray-400">Prefer a faster response? Use the contact form above or email us directly.</p>
              </div>
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
