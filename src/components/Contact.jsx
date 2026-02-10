import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setCharCount(0);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'Suhaskgbd46@gmail.com',
      link: 'mailto:Suhaskgbd46@gmail.com',
      color: 'red',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 9901171107',
      link: 'tel:+919901171107',
      color: 'green',
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      value: '+91 9901171107',
      link: 'https://wa.me/919901171107',
      color: 'green',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'suhas-k-431178230',
      link: 'https://linkedin.com/in/suhas-k-431178230',
      color: 'blue',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/suhas-k',
      link: 'https://github.com/suhas-k',
      color: 'purple',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-gray-400">
            Feel free to reach out for collaborations, opportunities, or just a chat!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-4 p-4 bg-dark-100 border border-gray-700 rounded-xl hover:border-${info.color}-500 transition-all duration-300 group`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-${info.color}-500/20 to-${info.color}-600/20 rounded-lg flex items-center justify-center border border-${info.color}-500/30 group-hover:scale-110 transition-transform`}
                >
                  <span className={`text-xl text-${info.color}-400`}>{info.icon}</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <p className="text-white font-semibold">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-dark-100 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-dark-100 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  maxLength="500"
                  required
                  className="w-full px-4 py-3 bg-dark-100 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                <div className="text-right text-gray-500 text-sm mt-1">{charCount}/500</div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
