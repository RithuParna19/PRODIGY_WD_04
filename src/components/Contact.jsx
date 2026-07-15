import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setForm({ name: '', email: '', message: '' });

      // Hide toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0F172A] transition-all-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <div className="h-1.5 w-16 bg-[#5B5CEB] dark:bg-[#818CF8] rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                I am open to internship opportunities, collaboration requests, and questions. Feel free to reach out directly.
              </p>

              <div className="space-y-4 pt-4">
                {/* Email */}
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-[#5B5CEB]/10 dark:bg-[#818CF8]/10 text-[#5B5CEB] dark:text-[#818CF8] rounded-xl">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Email</span>
                    <a href="mailto:parnarithu06@gmail.com" className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#5B5CEB] dark:hover:text-[#818CF8] transition-colors">
                      parnarithu06@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-[#5B5CEB]/10 dark:bg-[#818CF8]/10 text-[#5B5CEB] dark:text-[#818CF8] rounded-xl">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Phone</span>
                    <a href="tel:9940156830" className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#5B5CEB] dark:hover:text-[#818CF8] transition-colors">
                      +91 9940156830
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-[#5B5CEB]/10 dark:bg-[#818CF8]/10 text-[#5B5CEB] dark:text-[#818CF8] rounded-xl">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Chennai, Tamil Nadu
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-100 dark:border-slate-800/80 flex items-center space-x-4">
              <a
                href="https://github.com/RithuParna19"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-[#5B5CEB] dark:hover:text-[#818CF8] bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800 px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/rithu-parna"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-[#5B5CEB] dark:hover:text-[#818CF8] bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800 px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-sm text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700/50 rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#5B5CEB] dark:focus:border-[#818CF8] focus:bg-white dark:focus:bg-[#1e293b] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700/50 rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#5B5CEB] dark:focus:border-[#818CF8] focus:bg-white dark:focus:bg-[#1e293b] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Message
                  </label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700/50 rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#5B5CEB] dark:focus:border-[#818CF8] focus:bg-white dark:focus:bg-[#1e293b] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 text-sm font-semibold text-white bg-[#5B5CEB] hover:bg-[#4a4bc7] dark:bg-[#818CF8] dark:hover:bg-[#707be4] py-3.5 px-8 rounded-xl shadow-md shadow-[#5b5ceb]/10 dark:shadow-[#818cf8]/5 transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 p-4 rounded-2xl shadow-xl flex items-center space-x-3 pointer-events-auto max-w-sm"
            >
              <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div className="text-left">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Message Sent!</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
