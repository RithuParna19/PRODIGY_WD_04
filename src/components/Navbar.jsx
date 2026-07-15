import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glassmorphism shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
          Rithu Parna<span className="text-[#5B5CEB] dark:text-[#818CF8] ml-0.5 font-extrabold text-2xl">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#5B5CEB] dark:hover:text-[#818CF8] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>

          {/* Resume Download */}
          <a
            href="/Rithu_Parna_Resume.pdf"
            download="Rithu_Parna_Resume.pdf"
            className="flex items-center space-x-2 text-sm font-semibold text-white bg-[#5B5CEB] hover:bg-[#4a4bc7] dark:bg-[#818CF8] dark:hover:bg-[#707be4] py-2.5 px-5 rounded-xl shadow-md shadow-[#5b5ceb]/10 dark:shadow-[#818cf8]/5 transition-all duration-200 cursor-pointer"
          >
            <span>Resume</span>
            <FiDownload className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Actions (Menu Button + Theme Toggle) */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glassmorphism border-t border-gray-100 dark:border-slate-800/50 mt-4 px-6 py-6"
          >
            <nav className="flex flex-col space-y-4 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#5B5CEB] dark:hover:text-[#818CF8] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href="/Rithu_Parna_Resume.pdf"
              download="Rithu_Parna_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 text-base font-semibold text-white bg-[#5B5CEB] hover:bg-[#4a4bc7] dark:bg-[#818CF8] dark:hover:bg-[#707be4] py-3 px-5 rounded-xl shadow-md shadow-[#5b5ceb]/10 transition-all duration-200 cursor-pointer"
            >
              <span>Download Resume</span>
              <FiDownload className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
