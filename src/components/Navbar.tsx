import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail, Linkedin, Instagram, MessageCircle, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToSection = (section: string) => {
    setIsOpen(false); // Close mobile menu
    if (location.pathname !== '/') {
      navigate(`/#${section}`);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b border-white/5 shadow-sm transition-all duration-300 ${isOpen ? 'bg-[#082052]' : 'backdrop-blur-md bg-[#082052]/90'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/DenveX.svg"
              alt="DenveX Logo"
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Right side container (Contact Info & Buttons) */}
          <div className="flex items-center space-x-6 md:space-x-10">
            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 text-gray-100 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="font-semibold">+91 7358349394</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="font-semibold">team@denvex.in</span>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <Link
                to="/register"
                className="hidden md:inline-flex px-6 py-2.5 text-[0.95rem] bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
              >
                Start Project
              </Link>

              {/* Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 text-gray-100 hover:text-white transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                <span className="font-bold text-sm tracking-widest hidden md:block uppercase">Menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Dark backdrop overlay to dim the right side page content */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 w-[60%] md:w-[300px] p-6 bg-[#082052] border-l border-b border-white/10 shadow-xl z-50 h-[calc(100vh-96px)] flex flex-col justify-between overflow-y-auto"
            style={{ opacity: 1 }}
          >
            <div className="flex flex-col space-y-4">

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 font-medium text-gray-100 hover:text-blue-300 transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 font-medium text-gray-100 hover:text-blue-300 transition-colors"
              >
                About
              </Link>
              
              <Link
                to="/team"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 font-medium text-gray-100 hover:text-blue-300 transition-colors"
              >
                Our Team
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 font-medium text-gray-100 hover:text-blue-300 transition-colors"
              >
                Contact
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/30 transition-all mt-4"
              >
                Start Project
              </Link>

            </div>

            {/* Social Icons (Bottom) */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-4 px-2">Connect With Us</p>
              <div className="flex items-center space-x-4 px-2">
                <a href="https://www.linkedin.com/company/denvex/" className="text-gray-300 hover:text-[#60A5FA] transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/denvex_official?igsh=MTZoYTMyZWJqa2lsdA==" className="text-gray-300 hover:text-[#60A5FA] transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/917358349394" className="text-gray-300 hover:text-[#60A5FA] transition-colors" aria-label="WhatsApp">
                  <MessageCircle size={20} />
                </a>
                <a href="https://github.com/NAVEENKUMAR-11-20/" className="text-gray-300 hover:text-[#60A5FA] transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://naveen-port.vercel.app/" className="text-gray-300 hover:text-[#60A5FA] transition-colors" aria-label="Portfolio">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
};

export default Navbar;