import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCode,
  FaReact,
  FaDatabase,
  FaTools,
  FaBrain,
} from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <FaCode />,
      color: 'cyan',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'C', level: 75 },
        { name: 'SQL', level: 85 },
        { name: 'PHP', level: 70 },
        { name: 'HTML/CSS', level: 90 },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      icon: <FaReact />,
      color: 'purple',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Flask', level: 75 },
        { name: 'Pandas', level: 80 },
        { name: 'Scikit-learn', level: 75 },
        { name: 'Streamlit', level: 80 },
        { name: 'OpenCV', level: 70 },
      ],
    },
    {
      category: 'Databases',
      icon: <FaDatabase />,
      color: 'green',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: <FaTools />,
      color: 'orange',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'XAMPP', level: 75 },
        { name: 'FFmpeg', level: 65 },
      ],
    },
    {
      category: 'Core Competencies',
      icon: <FaBrain />,
      color: 'yellow',
      skills: [
        { name: 'Data Cleaning & Analysis', level: 85 },
        { name: 'Data Visualization', level: 80 },
        { name: 'Machine Learning', level: 78 },
        { name: 'Full Stack Dev', level: 85 },
        { name: 'REST API Integration', level: 82 },
        { name: 'Database Optimization', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 bg-dark-100 border border-gray-700 rounded-2xl hover:border-cyan-500 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-${category.color}-500/20 to-${category.color}-600/20 rounded-xl flex items-center justify-center border border-${category.color}-500/30`}
                >
                  <span className={`text-2xl text-${category.color}-400`}>
                    {category.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-dark-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
