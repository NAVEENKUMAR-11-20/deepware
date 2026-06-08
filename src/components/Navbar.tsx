import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/8 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="DenveX Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-[0.95rem] font-medium text-gray-100 hover:text-blue-300 transition-colors"
            >
              Home
            </Link>

            <button
              onClick={() => navigateToSection('services')}
              className="text-[0.95rem] font-medium text-gray-100 hover:text-blue-300 transition-colors"
            >
              Services
            </button>

            <button
              onClick={() => navigateToSection('testimonials')}
              className="text-[0.95rem] font-medium text-gray-100 hover:text-blue-300 transition-colors"
            >
              Testimonials
            </button>
            <Link
              to="/about"
              className="text-[0.95rem] font-medium text-gray-100 hover:text-blue-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-[0.95rem] font-medium text-gray-100 hover:text-blue-300"
            >
              Contact
            </Link>

            <Link
              to="/register"
              className="px-6 py-2.5 text-[0.95rem] bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-100 bg-white/10 p-2 rounded-full hover:bg-white/20 focus:outline-none transition-colors"
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
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 p-4 backdrop-blur-lg bg-slate-900/90 border-b border-white/10 shadow-xl"
        >
          <div className="flex flex-col space-y-4">

            <Link
              to="/"
              className="px-4 py-2 font-medium text-gray-100 hover:text-blue-300 transition-colors"
            >
              Home
            </Link>

            <button
              onClick={() => navigateToSection('services')}
              className="px-4 py-2 font-medium text-gray-100 hover:text-blue-300 text-left transition-colors"
            >
              Services
            </button>

            <button
              onClick={() => navigateToSection('testimonials')}
              className="px-4 py-2 font-medium text-gray-100 hover:text-blue-300 text-left transition-colors"
            >
              Testimonials
            </button>

            <Link
              to="/about"
              className="px-4 py-2 font-medium text-gray-100 hover:text-blue-300 transition-colors"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 font-medium text-gray-100 hover:text-blue-300 transition-colors"
            >
              Contact
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/30 transition-all"
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