import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiDownload, HiEye } from 'react-icons/hi';
import { Link } from 'react-scroll';
import profileImg from "../assets/sk.jpeg";


const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      href: 'mailto:Suhaskgbd46@gmail.com',
      label: 'Email',
    },
    {
      icon: <FaPhone />,
      href: 'tel:+919901171107',
      label: 'Phone',
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/919901171107',
      label: 'WhatsApp',
    },
    {
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/suhas-k-431178230',
      label: 'LinkedIn',
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/suhas-k',
      label: 'GitHub',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4">
              ● Available for opportunities
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold">
            Hi, I'm <br />
            <span className="text-gradient">Suhas K</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-2xl text-cyan-400 font-semibold">
            Data analyst
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-xl">
            Leveraging analytical and technical skills to build innovative solutions that drive
            growth and solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <HiEye className="text-xl" />
              View My Work
            </Link>
            <a
              href="suhas resume.pdf"
              download
              className="px-6 py-3 bg-dark-100 border border-gray-700 rounded-lg font-semibold hover:border-cyan-500 transition-all duration-300 flex items-center gap-2"
            >
              <HiDownload className="text-xl" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-100 border border-gray-700 rounded-lg flex items-center justify-center text-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Placeholder for your profile picture or 3D graphic */}
            <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-lg border border-cyan-500/30 flex items-center justify-center animate-float">
              <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                {/* Add your image here */}
                <img
                  src={profileImg}
                  alt="Suhas K"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="text-white text-center">
                        <div class="text-6xl mb-4">&lt;/&gt;</div>
                        <p class="text-xl">Full Stack Developer</p>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center animate-float delay-200">
              <span className="text-2xl">&lt;/&gt;</span>
            </div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30 animate-float delay-500"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
