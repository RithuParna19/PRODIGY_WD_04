import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-[#0B0F19] border-t border-gray-100 dark:border-slate-800/80 transition-all-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm">
        <p className="text-gray-500 dark:text-gray-400">
          &copy; 2026 Rithu Parna V.P. All rights reserved.
        </p>
        <p className="text-[#5B5CEB] dark:text-[#818CF8] font-semibold tracking-wide uppercase text-xs">
          B.E. Computer Science Engineering (IoT)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
