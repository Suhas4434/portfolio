import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaPhone, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const quickLinks = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      href: 'mailto:Suhaskgbd46@gmail.com',
      label: 'Email',
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
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/919901171107',
      label: 'WhatsApp',
    },
    {
      icon: <FaPhone />,
      href: 'tel:+919901171107',
      label: 'Phone',
    },
  ];

  return (
    <footer className="bg-dark-200 border-t border-gray-800 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Suhas K</h3>
            <p className="text-gray-400 mb-4">
              data analyst building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-dark-100 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Suhas K. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
