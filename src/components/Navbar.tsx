import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, User, Briefcase, FileText, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-white font-bold text-xl">ML Engineer</span>
          </NavLink>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/about" className={({ isActive }) => 
              `flex items-center space-x-1 text-sm font-medium transition-colors ${
                isActive ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}>
              <User className="w-4 h-4" />
              <span>About</span>
            </NavLink>
            
            <NavLink to="/projects" className={({ isActive }) => 
              `flex items-center space-x-1 text-sm font-medium transition-colors ${
                isActive ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}>
              <Briefcase className="w-4 h-4" />
              <span>Projects</span>
            </NavLink>
            
            <NavLink to="/resume" className={({ isActive }) => 
              `flex items-center space-x-1 text-sm font-medium transition-colors ${
                isActive ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}>
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </NavLink>
            
            <NavLink to="/contact" className={({ isActive }) => 
              `flex items-center space-x-1 text-sm font-medium transition-colors ${
                isActive ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}>
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </NavLink>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/90 rounded-lg mt-2">
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-purple-400 bg-gray-800/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-purple-400 bg-gray-800/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/resume"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-purple-400 bg-gray-800/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  }`
                }
              >
                Resume
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-purple-400 bg-gray-800/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;