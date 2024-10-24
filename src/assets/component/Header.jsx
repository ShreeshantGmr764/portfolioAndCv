import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import from react-scroll

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          <a className="no-underline" href="#home">
            Shreeshant Ghimire
          </a>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg">
            <li>
              <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="education" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">
                Education
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Button for Mobile */}
        <button
          id="menu-btn"
          className="md:hidden text-indigo-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-indigo-600">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-indigo-600">
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-indigo-600">
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="education" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-indigo-600">
              Education
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-indigo-600">
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
