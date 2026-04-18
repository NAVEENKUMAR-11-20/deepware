import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md py-3">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-[60px] md:h-[70px] lg:h-[80px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="DenveX Studio Logo"
              className="h-16 md:h-[80px] lg:h-[100px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </a>

            <a href="#services" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Services
            </a>

            <a href="#testimonials" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Testimonials
            </a>

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
            className="md:hidden text-gray-800"
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
          className="md:hidden absolute top-full left-0 right-0 p-4 bg-white text-black shadow-xl"
        >
          <div className="flex flex-col space-y-4">
            <Link to="/" className="px-4 py-2 font-medium text-gray-800 hover:text-blue-600">
              Home
            </Link>

            <Link to="/#services" className="px-4 py-2 font-medium text-gray-800 hover:text-blue-600">
              Services
            </Link>

            <Link to="/#testimonials" className="px-4 py-2 font-medium text-gray-800 hover:text-blue-600">
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