import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectsData = [
    {
      title: 'Bank Transaction Customer Prediction',
      description:
        'Developed a Streamlit web app to forecast transaction amounts and identify active customers from banking data. Used data preprocessing and feature scaling to train Random Forest models for accurate prediction.',
      tags: ['Machine Learning', 'Data Analysis', 'Web Application'],
      technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Multimedia Steganography Suite',
      description:
        'Built a tool for securely hiding information in audio, image, and video files using LSB encoding and AES encryption. Designed a user-friendly interface with real-time feedback and cross-platform media sharing capabilities.',
      tags: ['Security', 'Full Stack', 'Multimedia Processing'],
      technologies: ['React.js', 'Node.js', 'Python', 'Flask', 'OpenCV', 'FFmpeg'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Covid-19 Testing Management System',
      description:
        'Created a web portal for patient registration, online test booking, and lab result management. The system automates the process of sending test results back to the patient.',
      tags: ['Web Development', 'Database Management', 'Automation'],
      technologies: ['PHP', 'MySQL', 'HTML', 'AJAX', 'JavaScript', 'XAMPP'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Event Management System',
      description:
        'Developed a web-based application to automate event management, allowing valuable data to be stored and accessed easily. Automated the manual system to improve efficiency and record management.',
      tags: ['Automation', 'Database Design'],
      technologies: ['VB.NET', 'SQL'],
      liveDemo: null,
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full stack development, data science,
            and security
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-dark-100 border border-gray-700 rounded-2xl hover:border-cyan-500 transition-all duration-300">
                {/* Project Image Placeholder */}
                <div
                  className={`h-48 mb-6 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 text-center">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.liveDemo ? 'px-4' : 'flex-1 px-4'
                      } py-2 bg-dark-200 border border-gray-700 rounded-lg font-semibold text-center hover:border-cyan-500 transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <FaGithub />
                      {project.liveDemo ? '' : 'GitHub'}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
