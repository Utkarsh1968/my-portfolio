// import React from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, User, Briefcase, FileText, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-white font-bold text-xl">ML Engineer</span>
          </NavLink>
          
          <div className="flex space-x-8">
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
      </div>
    </nav>
  );
};

export default Navbar;