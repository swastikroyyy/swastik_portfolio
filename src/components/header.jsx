import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10 shadow">
      <nav className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <h1 className="text-2xl font-bold">Swastik Roy</h1>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
          <ul className="text-sm lg:flex-grow flex lg:justify-end">
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4 hidden sm:block">
              <Link smooth to="#home">Home</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4 hidden sm:block">
              <Link smooth to="#about">About</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4">
              <Link smooth to="#skills">Skills</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4">
              <Link smooth to="#experience">Experience</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4">
              <Link smooth to="#projects">Projects</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4">
              <Link smooth to="#education">Education</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4 hidden sm:block">
              <Link smooth to="#certifications">Certifications</Link>
            </li>
           
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline">
              <Link smooth to="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
