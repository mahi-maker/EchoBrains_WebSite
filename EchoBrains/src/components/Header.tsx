import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const coursesDropdown = [
    { name: 'Java Full Stack', path: '/courses#java-fullstack' },
    { name: 'Python Full Stack', path: '/courses#python-fullstack' },
    { name: 'Embedded Systems', path: '/courses#embedded-systems' },
    { name: 'MySQL', path: '/courses#mysql' },
    { name: 'Oracle', path: '/courses#oracle' },
    { name: 'MongoDB', path: '/courses#mongodb' }
  ];

  const programsDropdown = [
    { name: 'Java Programs', path: '/programs#java' },
    { name: 'Python Programs', path: '/programs#python' },
    { name: 'Embedded Projects', path: '/programs#embedded' },
    { name: 'Data Science Projects', path: '/programs#data-science' }
  ];

  const placementDropdown = [
    { name: 'Placed Students', path: '/placement#students' },
    { name: 'Company Partners', path: '/placement#companies' },
    { name: 'Testimonials', path: '/placement#testimonials' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg group-hover:scale-105 transition-transform duration-200">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
              Echo Brains
            </span>
          </Link> */}
          <Link to="/" className="flex items-center space-x-2 group">
             <img 
                 src="/images/demo-accounting-logo-black.png" 
                 alt="Echo Brains Logo"
                 className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-200"
              />
          </Link>

          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('courses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  activeDropdown === 'courses' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                {coursesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('programs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <span>Programs</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  activeDropdown === 'programs' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                {programsDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Placement Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('placement')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <span>Placement</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  activeDropdown === 'placement' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                {placementDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="bg-gradient-to-r from-orange-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 hover:scale-105"
            >
              Student Login
            </Link>

            <a
              href="http://echo-reactapp.s3-website.ap-south-1.amazonaws.com/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-600 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-green-700 transition-all duration-200 hover:scale-105"
            >
              Take Exam
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2 border-t border-gray-100">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>

            {/* Mobile Courses Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('courses')}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <span className="font-medium">Courses</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'courses' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`ml-4 space-y-1 transition-all duration-200 ${
                  activeDropdown === 'courses' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {coursesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={toggleMenu}
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Programs Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('programs')}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <span className="font-medium">Programs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'programs' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`ml-4 space-y-1 transition-all duration-200 ${
                  activeDropdown === 'programs' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {programsDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={toggleMenu}
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Placement Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('placement')}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <span className="font-medium">Placement</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'placement' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`ml-4 space-y-1 transition-all duration-200 ${
                  activeDropdown === 'placement' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {placementDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={toggleMenu}
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={toggleMenu}
              className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/login"
              onClick={toggleMenu}
              className="block mx-4 mt-4 bg-gradient-to-r from-orange-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
            >
              Student Login
            </Link>

            <a
              href="http://echo-reactapp.s3-website.ap-south-1.amazonaws.com/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:from-indigo-700 hover:to-pink-700 transition-all duration-200"
            >
              Admin Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;