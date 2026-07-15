import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiCpu, FiTrendingUp } from 'react-icons/fi';

const Skills = () => {
  // Sourced strictly from the resume's skills list and bio summary details
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FiCode className="w-5 h-5" />,
      skills: ['Python (Basic)', 'Java (Basic)', 'C (Basic)'],
    },
    {
      title: 'Frontend & Frameworks',
      icon: <FiLayers className="w-5 h-5" />,
      skills: ['React', 'HTML', 'CSS', 'Flutter', 'Streamlit'],
    },
    {
      title: 'Databases & Design',
      icon: <FiDatabase className="w-5 h-5" />,
      skills: ['DBMS', 'Figma (UI/UX)'],
    },
    {
      title: 'Core CS Concepts',
      icon: <FiCpu className="w-5 h-5" />,
      skills: ['Data Structures', 'OOP', 'AI-assisted Development'],
    },
    {
      title: 'Soft Skills',
      icon: <FiTrendingUp className="w-5 h-5" />,
      skills: [
        'Problem Solving',
        'Team Collaboration',
        'Innovative Thinking',
        'Initiative',
        'Communication',
        'Creative',
        'Analytical Thinking',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0B0F19] transition-all-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
            Skills & Core Competencies
          </h2>
          <div className="h-1.5 w-16 bg-[#5B5CEB] dark:bg-[#818CF8] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-[#5B5CEB]/10 dark:bg-[#818CF8]/10 text-[#5B5CEB] dark:text-[#818CF8] rounded-xl">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-semibold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-slate-800/70 border border-gray-100 dark:border-slate-700/40 px-3 py-1.5 rounded-lg hover:border-[#5B5CEB]/30 dark:hover:border-[#818CF8]/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
