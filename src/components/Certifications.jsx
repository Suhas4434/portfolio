import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaTrophy, FaAward } from 'react-icons/fa';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificationsData = [
    {
      title: 'Internship Completion Certificate',
      issuer: 'Inventech Info',
      icon: <FaCertificate />,
      color: 'cyan',
    },
    {
      title: 'Java Programming',
      issuer: 'Great Learning',
      icon: <FaCertificate />,
      color: 'purple',
    },
    {
      title: 'Data Structures & Algorithms in Java',
      issuer: 'Great Learning',
      icon: <FaCertificate />,
      color: 'green',
    },
    {
      title: 'Certificate of Appreciation',
      issuer: 'Presidency College',
      icon: <FaAward />,
      color: 'yellow',
    },
    {
      title: 'Active Volunteer - IT Fest Phoenix 2.0',
      issuer: 'College Event',
      icon: <FaTrophy />,
      color: 'pink',
    },
    {
      title: 'Specialization Certificate in Security Essentials',
      issuer: 'Professional Development',
      icon: <FaCertificate />,
      color: 'orange',
    },
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400">
            Recognition of continuous learning and professional growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 bg-dark-100 border border-gray-700 rounded-2xl hover:border-${cert.color}-500 transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-${cert.color}-500/20 to-${cert.color}-600/20 rounded-xl flex items-center justify-center border border-${cert.color}-500/30 flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <span className={`text-xl text-${cert.color}-400`}>{cert.icon}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 group-hover:text-gradient transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activate Windows Removal Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            ✓ Active continuous learner committed to professional development
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
