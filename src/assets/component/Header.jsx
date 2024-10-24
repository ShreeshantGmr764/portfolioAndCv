import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to manage mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600"> <a className='no-underline' href="#home">Shreeshant Ghimire</a> </h1>
        
        {/* Navigation Menu */}
        <nav>
          <ul className={`md:flex space-x-6 text-lg ${isMenuOpen ? '' : 'hidden'} md:block`}>
            <li><Link to="#home" className="hover:text-indigo-600">Home</Link></li>
            <li><Link to="#about" className="hover:text-indigo-600">About</Link></li>
            <li><Link to="#skills" className="hover:text-indigo-600">Skills</Link></li>
            <li><Link to="#education" className="hover:text-indigo-600">Education</Link></li>
            <li><Link to="#contact" className="hover:text-indigo-600">Contact</Link></li>
          </ul>
        </nav>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-indigo-600"
            onClick={toggleMenu}  // Toggle menu on click
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
