import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background glowing elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
      
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

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden p-2">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="md:col-span-3 bg-gradient-to-br from-blue-800 to-indigo-800 rounded-xl p-8">
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
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
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
              
              <div className="md:col-span-2 bg-white rounded-xl p-8 shadow-inner text-center flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-full"
                >
                  <h3 className="text-gray-900 text-xl font-semibold mb-6">Ready to begin?</h3>
                  
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc-bbuHN90zWLgKHiaLJU3rLQNOYVYDt_z-CmBrpEJEkyzuiA/viewform?usp=header"
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:from-blue-700 hover:to-indigo-700 mb-4 group"
                  >
                    Open Requirements Form
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <p className="text-gray-600 text-sm">
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
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc-bbuHN90zWLgKHiaLJU3rLQNOYVYDt_z-CmBrpEJEkyzuiA/viewform?usp=header"
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
              <a
                href="https://mail.google.com/mail/u/0/?hl=en#inbox?compose=new"
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