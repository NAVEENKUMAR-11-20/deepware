import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 text-black dark:text-white shadow-md py-3 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-[60px] md:h-[70px] lg:h-[65px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="DenveX Studio Logo"
              className="h-16 md:h-[80px] lg:h-[85px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-medium hover:text-blue-600 transition-colors">
              Home
            </a>

            <a href="#services" className="font-medium hover:text-blue-600 transition-colors">
              Services
            </a>

            <a href="#testimonials" className="font-medium hover:text-blue-600 transition-colors">
              Testimonials
            </a>

            <Link to="/about" className="font-medium hover:text-blue-600">
              About
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
            >
              Start Project
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">

            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-700 text-white"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white dark:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 p-4 bg-slate-900 dark:bg-slate-800 text-white shadow-xl"
        >
          <div className="flex flex-col space-y-4">

            <a href="#Home" className="px-4 py-2 font-medium hover:text-blue-300">
              Home
            </a>

            <a href="#Services" className="px-4 py-2 font-medium hover:text-blue-300">
              Services
            </a>

            <a href="#Testimonials" className="px-4 py-2 font-medium hover:text-blue-300">
              Testimonials
            </a>

            <Link to="/about" className="px-4 py-2 font-medium hover:text-blue-300">
              About
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