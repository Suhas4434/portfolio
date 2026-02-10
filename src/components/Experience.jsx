import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendar, FaCheckCircle, FaCode, FaRocket } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);

  const experienceData = {
    position: 'Junior Full Stack Developer',
    company: 'Inventech Info',
    duration: 'Mar 2025 - Jul 2025',
    responsibilities: [
      'Worked on full stack development tasks including frontend (React.js) and backend (Node.js, MySQL)',
      'Contributed to building responsive UI components, integrating REST APIs, and optimizing database performance',
      'Assisted in debugging and performance tuning, identifying and resolving key bottlenecks in database queries to enhance overall application speed and stability',
    ],
    technologies: ['React.js', 'Node.js', 'MySQL', 'JavaScript', 'Git'],
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent"></div>
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4"
          >
            <FaRocket className="inline mr-2" />
            Professional Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building real-world applications with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {/* Modern Timeline Container */}
          <div className="relative">
            {/* Animated Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px overflow-hidden">
              <motion.div
                initial={{ height: 0 }}
                animate={inView ? { height: '100%' } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full bg-gradient-to-b from-cyan-500 via-cyan-400 to-purple-600"
              ></motion.div>
            </div>

            {/* Experience Card */}
            <div className="relative md:pl-24 pb-12">
              {/* Pulsing Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute left-[-13px] md:left-[19px] top-8 w-7 h-7 z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-7 h-7 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full border-4 border-dark-300"></div>
              </motion.div>

              {/* Floating Date Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-6 inline-flex items-center gap-2 px-4 py-2 
           bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 
           border border-cyan-500/30 rounded-lg backdrop-blur-sm"

              >
                <FaCalendar className="text-cyan-400" />
                <span className="text-sm text-cyan-400 font-semibold whitespace-nowrap">
                  {experienceData.duration}
                </span>
              </motion.div>

              {/* Main Content Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="mt-16 md:mt-16 relative group"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* Card Content */}
                <div className="relative p-8 bg-dark-100/80 backdrop-blur-md border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-500">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 rounded-br-2xl"></div>

                  {/* Header Section */}
                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl blur-md"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-cyan-500/30 backdrop-blur-sm">
                        <FaBriefcase className="text-3xl text-cyan-400" />
                      </div>
                    </motion.div>

                    {/* Title and Company */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                        {experienceData.position}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                        <span className="text-gray-500">@</span>
                        <span>{experienceData.company}</span>
                        <div className="ml-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Decorative Code Symbol */}
                    <motion.div
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="hidden md:block text-cyan-500/20 text-4xl"
                    >
                      <FaCode />
                    </motion.div>
                  </div>

                  {/* Responsibilities List */}
                  <div className="mb-6 space-y-4 relative z-10">
                    {experienceData.responsibilities.map((responsibility, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-1">
                          <FaCheckCircle className="text-cyan-400 group-hover/item:text-cyan-300 transition-colors flex-shrink-0" />
                        </div>
                        <p className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors">
                          {responsibility}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {experienceData.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 1.3 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-1.5 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-transparent origin-left"
                  ></motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-8 p-6 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-cyan-400">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
              <p className="text-sm">
                <span className="font-semibold">Key Achievement:</span>
                <span className="text-gray-400 ml-2">
                  Successfully contributed to optimizing database performance, improving application speed and stability
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;