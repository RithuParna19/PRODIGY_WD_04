import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCompass } from 'react-icons/fi';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#0F172A] transition-all-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
            About Me
          </h2>
          <div className="h-1.5 w-16 bg-[#5B5CEB] dark:bg-[#818CF8] rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Objective Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Career Objective & Professional Focus
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              I am a Computer Science student with a strong interest in building practical and user friendly technology solutions. I have experience in UI/UX design using Figma, web development with React, and backend development using Java Spring Boot.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              I enjoy combining good design with efficient functionality to create applications that are both useful and easy to use. I am also curious about emerging technologies such as robotics and drone systems. I am always eager to learn new tools, improve my technical skills, and work on projects that solve real-world problems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex space-x-4">
                <div className="flex-shrink-0 p-3 bg-[#5B5CEB]/10 dark:bg-[#818CF8]/10 text-[#5B5CEB] dark:text-[#818CF8] rounded-xl h-12 w-12 flex items-center justify-center">
                  <FiCompass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Emerging Fields</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">IoT, Robotics & Drone Systems</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0 p-3 bg-[#5B5CEB]/10 dark:bg-[#818CF8]/10 text-[#5B5CEB] dark:text-[#818CF8] rounded-xl h-12 w-12 flex items-center justify-center">
                  <FiAward className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Design Philosophy</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Sleek layouts paired with robust engineering</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5B5CEB] dark:bg-[#818CF8]"></div>
              
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="inline-flex text-xs font-semibold text-[#5B5CEB] dark:text-[#818CF8] bg-[#5B5CEB]/10 dark:bg-[#818CF8]/10 px-2.5 py-1 rounded-md">
                    Jul 2024 — May 2028
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#5B5CEB] dark:group-hover:text-[#818CF8] transition-colors">
                    B.E. Computer Science Engineering (IoT)
                  </h4>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Sri Sai Ram Institute of Technology
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Sairam Group of Institutions
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-xl text-gray-500 dark:text-gray-400">
                  <FiBookOpen className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Grade / Performance</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-slate-800 px-3 py-1 rounded-lg border border-gray-100 dark:border-slate-700/50">
                  GPA: 8.61 / 10
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
