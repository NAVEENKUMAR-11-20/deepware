import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.15),_transparent_30%),#020617] text-white py-20">
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
