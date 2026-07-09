import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const RegistrationPage = () => {
  return (
    <div className="pt-28 pb-0 min-h-screen bg-[#082052] relative overflow-hidden">
      <SEO 
        title="Start Your Project – DenveX Custom Web Solutions"
        description="Ready to bring your vision to life? Fill out our project requirements form and get started with DenveX's professional web development services."
        keywords="start web project, custom web solutions, project inquiry, DenveX registration"
      />
      {/* Background gradients and glows matching the home page theme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#082052] via-[#0D2D73] to-[#082052] opacity-95" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.08),transparent_22%)] opacity-80 pointer-events-none" />
        <div className="absolute top-20 right-[15%] w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-[10%] w-96 h-96 rounded-full bg-gradient-to-bl from-blue-500/15 to-indigo-500/10 blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-white mb-8 transition-colors text-sm font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Start Your Project</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Let us know what you're looking for and we'll help bring your vision to life. Fill out our requirements form to get started.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mixed white and navy content section */}
      <div className="bg-[#F8F0E5] relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.2)] rounded-t-[3rem] py-16 -mt-4">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-[0_20px_50px_rgba(8,32,82,0.06)] overflow-hidden p-3">
              <div className="grid md:grid-cols-5 gap-6">
                {/* Information Column */}
                <div className="md:col-span-3 bg-slate-50/50 rounded-xl p-8 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[#082052] mb-6">Project Requirements</h2>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mb-8"
                    >
                      <h3 className="text-lg font-bold text-slate-700 mb-4">What to Expect</h3>

                      <ul className="space-y-5">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-[#082052] text-base">Project Overview and Objectives</h4>
                            <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">
                              You'll tell us about your project goals, target audience, and desired outcomes.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-[#082052] text-base">Desired Features and Functionality</h4>
                            <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">
                              Share the specific features and capabilities you need for your project.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-[#082052] text-base">Design Preferences and Inspiration</h4>
                            <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">
                              Provide examples of designs you like and your aesthetic preferences.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  </div>

                  <div className="text-sm text-slate-500 border-t border-slate-200/60 pt-4 leading-relaxed">
                    <p>After you submit the form, our team will review your requirements and contact you within 24 hours to discuss next steps.</p>
                  </div>
                </div>

                {/* Form Action Callout */}
                <div className="md:col-span-2 bg-[#082052] rounded-xl p-8 text-center flex flex-col items-center justify-center text-white relative overflow-hidden">
                  {/* Subtle decorative glow in card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D2D73] to-[#082052] -z-10" />
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl" />

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full relative z-10"
                  >
                    <h3 className="text-white text-xl font-bold mb-6">Ready to begin?</h3>

                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc-bbuHN90zWLgKHiaLJU3rLQNOYVYDt_z-CmBrpEJEkyzuiA/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3.5 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:from-blue-600 hover:to-cyan-600 mb-5 group hover:scale-[1.02]"
                    >
                      Open Requirements Form
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <p className="text-slate-400 text-xs leading-relaxed">
                      Your information is secure and will only be used to contact you about your project.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Questions Section */}
            <div className="mt-16 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#082052] mb-3">Have Questions?</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                If you'd prefer to speak with someone directly before submitting your requirements, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+917358349394"
                  className="px-8 py-3 bg-[#082052] hover:bg-[#0c2f7a] text-white rounded-full font-semibold shadow-md transition-all inline-flex items-center justify-center hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Us
                </a>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=team@denvex.in"
                  className="px-8 py-3 bg-white border border-slate-300 text-[#082052] rounded-full font-semibold shadow-sm hover:bg-slate-50 transition-all inline-flex items-center justify-center hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;