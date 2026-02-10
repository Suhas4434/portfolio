import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImg from "../assets/5031659.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const stats = [
    { number: '6 months', label: 'Internship', icon: '💼' },
    { number: '4+', label: 'Projects', icon: '🚀' },
    { number: '6+', label: 'Certifications', icon: '🏆' },
    { number: '8+', label: 'Languages', icon: '💻' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4">
            Get to Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate analyst crafting innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - 3D Interactive Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative w-full h-[500px]"
              style={{ perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main 3D Image Container */}
              <motion.div
                animate={{
                  rotateX: mousePosition.y,
                  rotateY: mousePosition.x,
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-3xl blur-2xl animate-pulse"></div>

                {/* Main Image Frame */}
                <div className="relative w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-3xl border-2 border-cyan-500/30 overflow-hidden backdrop-blur-sm">
                  {/* Image Container with 3D Effect */}
                  <div className="relative w-full h-full p-4">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                      {/* Replace this src with your actual image path */}
                      <img
                        src={profileImg}
                        alt="Suhas K"
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const placeholder = document.createElement('div');
                          placeholder.className = 'w-full h-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center flex-col';
                          placeholder.innerHTML = `
                            <div class="text-8xl mb-6">💻</div>
                            <p class="text-2xl font-bold mb-2 text-white">Full Stack Developer</p>
                            <p class="text-lg opacity-80 text-white">Data Enthusiast</p>
                          `;
                          e.target.parentElement.appendChild(placeholder);
                        }}
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                        <p className="text-white font-bold text-xl">Suhas K</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Decorative Elements */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/50"
                    style={{ transform: 'translateZ(50px)' }}
                  >
                    &lt;/&gt;
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 20, 0],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.5,
                    }}
                    className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-4xl shadow-lg shadow-purple-500/50"
                    style={{ transform: 'translateZ(50px)' }}
                  >
                    ⚡
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                    className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-pink-500/50"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    🚀
                  </motion.div>
                </div>

                {/* Bottom Reflection Effect */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              A passionate data and software enthusiast with a Master's in Computer Applications
              from PES University. I thrive in dynamic environments where I can leverage my
              analytical, technical, and collaboration skills to solve real-world business problems
              and drive growth.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With experience in full stack development and a strong foundation in data science and
              machine learning, I'm committed to continuous learning and creating impactful
              solutions.
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateZ: 2,
                    transition: { type: 'spring', stiffness: 300 }
                  }}
                  className="p-6 bg-dark-100 border border-gray-700 rounded-xl text-center hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">{stat.number}</h3>
                  <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;