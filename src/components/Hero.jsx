import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowRight, FiDownload } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-white dark:bg-[#0B0F19] transition-all-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        {/* Left Side: Intro Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-1 md:col-span-7 flex flex-col justify-center space-y-8 text-left"
        >
          {/* Label Badge */}
          <motion.div variants={itemVariants} className="inline-flex self-start">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5CEB] dark:text-[#818CF8] px-3.5 py-1.5 rounded-full bg-[#5B5CEB]/10 dark:bg-[#818CF8]/10 border border-[#5B5CEB]/15 dark:border-[#818CF8]/15">
              B.E. Computer Science Engineering (IoT) Student
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Rithu Parna V.P
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl"
            >
              Exploring Web Development, Data Structures, and AI. Combining clean design with efficient backend functionality.
            </motion.p>
          </div>

          {/* Short Bio Summary */}
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl"
          >
            I enjoy combining good design with efficient functionality to create applications that are both useful and easy to use. Curious about emerging technologies like robotics and drone systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="group flex items-center space-x-2 text-sm font-semibold text-white bg-[#5B5CEB] hover:bg-[#4a4bc7] dark:bg-[#818CF8] dark:hover:bg-[#707be4] py-3.5 px-6 rounded-xl shadow-lg shadow-[#5b5ceb]/15 dark:shadow-[#818cf8]/5 transition-all duration-200 cursor-pointer"
            >
              <span>View Projects</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Rithu_Parna_Resume.pdf"
              download="Rithu_Parna_Resume.pdf"
              className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 py-3.5 px-6 rounded-xl border border-gray-200/50 dark:border-slate-700/50 transition-all duration-200 cursor-pointer"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Contact Details & Social Links */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-gray-100 dark:border-slate-800/80 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="mailto:parnarithu06@gmail.com"
              className="flex items-center space-x-2 hover:text-[#5B5CEB] dark:hover:text-[#818CF8] transition-colors"
            >
              <FiMail className="w-4 h-4" />
              <span>parnarithu06@gmail.com</span>
            </a>
            <a
              href="tel:9940156830"
              className="flex items-center space-x-2 hover:text-[#5B5CEB] dark:hover:text-[#818CF8] transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              <span>+91 9940156830</span>
            </a>
            <div className="flex items-center space-x-4 ml-0 sm:ml-auto">
              <a
                href="https://github.com/RithuParna19"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-50 dark:bg-slate-800/60 hover:bg-gray-100 dark:hover:bg-slate-700/80 text-gray-600 dark:text-gray-300 hover:text-[#5B5CEB] dark:hover:text-[#818CF8] transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/rithu-parna"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-50 dark:bg-slate-800/60 hover:bg-gray-100 dark:hover:bg-slate-700/80 text-gray-600 dark:text-gray-300 hover:text-[#5B5CEB] dark:hover:text-[#818CF8] transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
          className="col-span-1 md:col-span-5 flex justify-center items-center"
        >
          <div className="relative group max-w-[320px] sm:max-w-[360px] w-full">
            {/* Background Accent Box decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5B5CEB] to-purple-500 rounded-3xl rotate-3 scale-102 opacity-15 blur-sm transition-transform duration-300 group-hover:rotate-1"></div>
            
            {/* Image Border wrapper */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-200/55 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 p-3 shadow-xl">
              <img
                src={profileImg}
                alt="Rithu Parna V.P Portrait"
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-103"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
