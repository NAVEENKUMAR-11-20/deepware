import { Code, Mail, MapPin, Phone, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code size={24} className="text-blue-500" />
              <span className="font-bold text-xl">DenveX</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating innovative digital solutions that help businesses thrive in the modern world.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://naveen-sport.vercel.app/"
                className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Portfolio"
              >
                <Briefcase size={16} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/naveen-kumar-p-034658300/"
                className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="https://github.com/NAVEENKUMAR-11-20/"
                className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Services
                </a>
              </li>

              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="https://naveen-sport.vercel.app/" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Start Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://webdevelopment-gamma.vercel.app/" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="https://logo-indol.vercel.app/" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Logo Design
                </a>
              </li>
              <li>
                <a href="https://post-woad-kappa.vercel.app/" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Poster/Pemplet Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Web Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Arumbakkam,Chennai-600205</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-blue-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+91-7358349394</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-blue-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">teamdenvex@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <img
              src="https://www.bing.com/ck/a?!&&p=4b9a401faee8a776f4cbb98edda57306ceb51cb0b46e30df25b6f55d670fdecfJmltdHM9MTc3NzA3NTIwMA&ptn=3&ver=2&hsh=4&fclid=0fc6cc50-50b4-652d-0348-da2651d6643c&u=a1L2ltYWdlcy9zZWFyY2g_cT1tc21lK2xvZ28maWQ9QjZEMzdBNEQ1MkQ2QjM5Q0JEQjU5QkM3QzM4N0JCNjNCMzBCOTM5OSZGT1JNPUlRRlJCQQ"
              alt="MSME Registered Logo"
              className="h-10 w-auto object-contain"
            />
            <p>&copy; {currentYear} Denvex. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;