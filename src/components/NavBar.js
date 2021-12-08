/* eslint-disable */
import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header className="bg-gray-800 md:sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link to="/about" className="title-font font-medium text-white mb-4 md:mb-0">
        <p className="ml-3 text-xl">Jocyline</p>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <Link to="/" className="mr-5 hover:text-white">
          Past Work
        </Link>
        <Link to="/skills" className="mr-5 hover:text-white">
          Skills
        </Link>
      </nav>
      <Link
        to="/contact"
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      >
        Hire Me
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </Link>
    </div>
  </header>
);

export default NavBar;
