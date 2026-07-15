import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiZap } from 'react-icons/fi';

const Achievements = () => {
  // Sourced strictly from the resume's achievements section
  const achievements = [
    {
      title: 'Winner — 3rd Prize in IDEA VERSE Competition',
      organization: 'SRM Easwari Engineering College',
      description: 'Awarded third prize for developing and presenting a prototype engineering solution.',
      icon: <FiAward className="w-5 h-5 text-yellow-500" />,
      tag: 'Competition Winner',
    },
    {
      title: 'Top Finalist — Smart India Hackathon',
      organization: 'Government of India',
      description: 'Recognized as a Top Finalist in one of India\'s largest national level hackathons for innovative problem-solving.',
      icon: <FiZap className="w-5 h-5 text-indigo-500" />,
      tag: 'National Hackathon',
    },
    {
      title: 'Top Finalist — National Level Hackathon',
      organization: 'Saveetha Engineering College',
      description: 'Selected as a Top Finalist for exceptional software design execution and technical presentation.',
      icon: <FiStar className="w-5 h-5 text-purple-500" />,
      tag: 'National Hackathon',
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-[#0B0F19] transition-all-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
            Achievements & Certifications
          </h2>
          <div className="h-1.5 w-16 bg-[#5B5CEB] dark:bg-[#818CF8] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800/80 p-8 rounded-2.5xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left relative overflow-hidden group"
            >
              {/* Category Badge */}
              <span className="text-[10px] font-bold text-[#5B5CEB] dark:text-[#818CF8] bg-[#5B5CEB]/10 dark:bg-[#818CF8]/10 px-2.5 py-1 rounded-md mb-6">
                {ach.tag}
              </span>

              {/* Icon Container */}
              <div className="p-3 bg-gray-50 dark:bg-slate-800/60 rounded-xl mb-6">
                {ach.icon}
              </div>

              {/* Title & Info */}
              <div className="space-y-3 flex-grow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#5B5CEB] dark:group-hover:text-[#818CF8] transition-colors">
                  {ach.title}
                </h3>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {ach.organization}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
