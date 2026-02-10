import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendar, FaStar } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'Master of Computer Applications',
      institution: 'PES University',
      duration: 'Oct 2023 - Jul 2025',
      cgpa: '7.7/10',
      coursework:
        'OOP, Databases, DSA, OS, Networks, ML, Data Mining, Algorithms, Information Retrieval, Image Processing',
      color: 'cyan',
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Presidency University',
      duration: 'Jul 2020 - Jun 2023',
      cgpa: '9.00/10',
      coursework: 'OS, Machine Learning, Computer Networks',
      color: 'purple',
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 bg-dark-100 border border-gray-700 rounded-2xl hover:border-${edu.color}-500 transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-14 h-14 bg-gradient-to-br from-${edu.color}-500/20 to-${edu.color}-600/20 rounded-xl flex items-center justify-center border border-${edu.color}-500/30`}
                >
                  <FaGraduationCap className={`text-2xl text-${edu.color}-400`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className={`text-${edu.color}-400 font-semibold`}>{edu.institution}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <FaCalendar className="text-cyan-400" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FaStar className="text-purple-400" />
                  <span>CGPA: {edu.cgpa}</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Coursework:</p>
                <p className="text-gray-400 leading-relaxed">{edu.coursework}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
