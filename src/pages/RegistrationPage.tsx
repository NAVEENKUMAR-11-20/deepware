import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const RegistrationPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-[#162d50] via-[#1a3358] to-slate-950 text-white relative overflow-hidden">
      <SEO 
        title="Start Your Project – DenveX Custom Web Solutions"
        description="Ready to bring your vision to life? Fill out our project requirements form and get started with DenveX's professional web development services."
        keywords="start web project, custom web solutions, project inquiry, DenveX registration"
      />
      {/* Light navy blue gradient background with decorative glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-br from-[#1e3f6e]/80 via-[#1b3660]/60 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_center,rgba(56,139,248,0.15),transparent_60%)]" />
        <div className="absolute top-20 right-[15%] w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-[10%] w-96 h-96 rounded-full bg-gradient-to-bl from-blue-500/15 to-indigo-500/10 blur-3xl opacity-50" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-gradient-to-tr from-sky-600/12 to-violet-500/8 blur-3xl opacity-40" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
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

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Start Your Project</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Let us know what you're looking for and we'll help bring your vision to life. Fill out our requirements form to get started.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden p-2 border border-white/10">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="md:col-span-3 bg-gradient-to-br from-[#1a3660] to-[#162d50] rounded-xl p-8 border border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Project Requirements</h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-medium mb-4">What to Expect</h3>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">Project Overview and Objectives</h4>
                        <p className="text-blue-200 text-sm">
                          You'll tell us about your project goals, target audience, and desired outcomes.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">Desired Features and Functionality</h4>
                        <p className="text-blue-200 text-sm">
                          Share the specific features and capabilities you need for your project.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">Design Preferences and Inspiration</h4>
                        <p className="text-blue-200 text-sm">
                          Provide examples of designs you like and your aesthetic preferences.
                        </p>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                <div className="text-sm text-blue-200">
                  <p>After you submit the form, our team will review your requirements and contact you within 24 hours to discuss next steps.</p>
                </div>
              </div>

              <div className="md:col-span-2 bg-[#0f2240]/80 backdrop-blur-md rounded-xl p-8 border border-white/10 text-center flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-full"
                >
                  <h3 className="text-white text-xl font-semibold mb-6">Ready to begin?</h3>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc-bbuHN90zWLgKHiaLJU3rLQNOYVYDt_z-CmBrpEJEkyzuiA/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:from-blue-600 hover:to-cyan-600 mb-4 group"
                  >
                    Open Requirements Form
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <p className="text-gray-400 text-sm">
                    Your information is secure and will only be used to contact you about your project.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
            <p className="text-blue-200 mb-6">
              If you'd prefer to speak with someone directly before submitting your requirements, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917358349394"
                className="px-8 py-3 bg-blue-800 text-white rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
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
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=teamdenvex@gmail.com"
                className="px-8 py-3 bg-transparent border border-blue-400 text-white rounded-full font-medium hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
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
  );
};

export default RegistrationPage;