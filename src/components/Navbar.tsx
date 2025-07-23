import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Code size={28} className="text-blue-600" />
            <span className="font-bold text-xl text-gray-900">Deep Ware Studio</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/#services" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/#testimonials" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Testimonials
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 p-4"
        >
          <div className="flex flex-col space-y-4">
            <Link to="/" className="px-4 py-2 font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link
              to="/#services"
              className="px-4 py-2 font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/#testimonials"
              className="px-4 py-2 font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium"
            >
              Start Project
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;