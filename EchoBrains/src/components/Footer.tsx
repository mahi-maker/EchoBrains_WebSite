import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-600 to-teal-600 p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Echo Brains</span>
            </Link> */}
            <Link to="/" className="flex items-center space-x-2 group">
             <img 
                 src="/images/demo-accounting-logo-black.png" 
                 alt="Echo Brains Logo"
                 className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-200"
             />
            </Link>


            <p className="text-gray-300 leading-relaxed">
              Empowering Skills for Tomorrow – Learn with Real-Time Experts at Echo Brains Learning and Placement Center.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/echobrains"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/echobrains"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/echobrains"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-800 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/placement" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Placement
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses#java-fullstack" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Java Full Stack
                </Link>
              </li>
              <li>
                <Link to="/courses#python-fullstack" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Python Full Stack
                </Link>
              </li>
              <li>
                <Link to="/courses#embedded-systems" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Embedded Systems
                </Link>
              </li>
              <li>
                <Link to="/courses#data-science" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Data Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">
                  No. 75, 4th Floor, 9th Cross, 16th Main, Tavarekere Main Rd, BTM 1st Stage, Bengaluru, Karnataka 560027
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+919900007503"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  +91 9900007503
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@echobrains.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  info@echobrains.in
                </a>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://wa.me/919900007503"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Echo Brains. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;