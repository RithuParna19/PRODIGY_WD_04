import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi';

const Projects = () => {
  // Sourced strictly from the resume's projects section
  const projects = [
    {
      name: 'AI Platform for Multilingual Document Processing',
      description: 'Developed an AI-based system for document ingestion and summarization using OCR and natural language processing techniques.',
      tech: ['Python', 'NLP', 'OCR'],
      github: 'https://github.com/RithuParna19',
      featured: true,
    },
    {
      name: 'AI-Assisted Telemedicine Application',
      description: 'Built a telemedicine prototype for symptom analysis and virtual consultation, designed for remote and low-connectivity environments.',
      tech: ['Python', 'Streamlit', 'NLP'],
      github: 'https://github.com/RithuParna19',
      featured: false,
    },
    {
      name: 'Bot HMI: No-Code Industrial Robot Workflow Builder',
      description: 'Designed a drag-and-drop platform for robot programming and workflow automation using ROS 2 concepts.',
      tech: ['ROS 2', 'Python', 'HMI'],
      github: 'https://github.com/RithuParna19',
      featured: false,
    },
    {
      name: 'Web Development Intern Projects',
      description: 'Developed responsive, modern webpages using semantic HTML, structured CSS layouts, and modular JavaScript logic.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/RithuParna19',
      featured: false,
    },
  ];

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#0F172A] transition-all-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
            Projects
          </h2>
          <div className="h-1.5 w-16 bg-[#5B5CEB] dark:bg-[#818CF8] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-[#5B5CEB] dark:text-[#818CF8] flex items-center space-x-1.5 font-semibold text-xs tracking-wider uppercase">
                <FiStar className="w-4 h-4 fill-current" />
                <span>Featured Project</span>
              </div>
              
              <div className="lg:col-span-8 space-y-4 text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#5B5CEB] dark:group-hover:text-[#818CF8] transition-colors">
                  {featuredProject.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-semibold text-[#5B5CEB] dark:text-[#818CF8] bg-[#5B5CEB]/10 dark:bg-[#818CF8]/10 px-3 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-end space-x-4">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-white bg-gray-100 hover:bg-[#5B5CEB] dark:bg-slate-800 dark:hover:bg-[#818CF8] p-3.5 rounded-xl border border-gray-200/50 dark:border-slate-700/50 transition-all duration-200 cursor-pointer"
                  aria-label="GitHub Repository"
                >
                  <FiGithub className="w-5 h-5" />
                  <span className="hidden sm:inline">Code Base</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800/80 p-6 rounded-2.5xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                {/* Header Icon */}
                <div className="flex justify-between items-center">
                  <div className="p-3 bg-gray-50 dark:bg-slate-800 text-gray-400 dark:text-gray-500 rounded-xl group-hover:text-[#5B5CEB] dark:group-hover:text-[#818CF8] transition-colors">
                    <FiFolder className="w-5 h-5" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#5B5CEB] dark:group-hover:text-[#818CF8] transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-6 mt-auto">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-800/80 px-2 py-0.5 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
