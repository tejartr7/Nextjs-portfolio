'use client'

import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const [router, setRouter] = useState(usePathname() || '/');
  const [isNavOpen, setNavOpen] = useState(false);
  const isActive = (path) => router === path;
  const handler = (url) => setRouter(url);
  const handleToggleNav = () => setNavOpen(!isNavOpen);
  return (
    <nav className="py-4 md:py-6">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center w-full">
          <a href="/" className="font-bold text-xl text-indigo-600">
            Logo
          </a>
          <button
            className={`md:hidden border-4 border-solid border-gray-600 p-3 rounded text-gray-600 ${isNavOpen ? 'bg-gray-200' : ''}`}
            id="navbar-toggle"
            onClick={handleToggleNav}
            style={{ borderColor: '#ffff00' }}
          >
            <i className={`fas fa-bars text-3xl ${isNavOpen ? 'text-black-500' : 'text-white'}`}></i>
          </button>
        </div>

        <div
          className={`md:flex flex-col md:flex-row ${isNavOpen ? 'block' : 'hidden'} md:ml-auto mt-3 md:mt-0`}
          id="navbar-collapse"
        >
          <a
            href="/"
            onClick={() => handler('/')}
            className={`p-2 lg:px-4 md:mx-2 text-white rounded ${isActive('/') ? 'bg-gray-200 text-900' : ''}`}
            style={{
              backgroundColor: isActive('/') ? '#ffff00' : '#000000',
              color: isActive('/') ? 'black' : '#ffff00',
            }}
          >
            Home
          </a>

          <a
            href="/#about"
            onClick={() => handler('/#about')}
            className={`p-2 lg:px-4 md:mx-2 text-white rounded ${isActive('/#about') ? 'bg-gray-200 text-800' : ''}`}
            style={{
              backgroundColor: isActive('/#about') ? '#ffff00' : '#000000',
              color: isActive('/#about') ? 'black' : '#ffff00',
            }}
          >
            About
          </a>

          <a
            href="/#techstack"
            onClick={() => handler('/#techstack')}
            className={`p-2 lg:px-4 md:mx-2 text-white rounded ${isActive('/#techstack') ? 'bg-gray-200 text-800' : ''}`}
            style={{
              backgroundColor: isActive('/#techstack') ? '#ffff00' : '#000000',
              color: isActive('/#techstack') ? 'black' : '#ffff00',
            }}
          >
            TechStack
          </a>

          <a
            href="/#projects"
            onClick={() => handler('/#projects')}
            className={`p-2 lg:px-4 md:mx-2 text-white rounded ${isActive('/#projects') ? 'bg-gray-200 text-800' : ''}`}
            style={{
              backgroundColor: isActive('/#projects') ? '#ffff00' : '#000000',
              color: isActive('/#projects') ? 'black' : '#ffff00',
            }}
          >
            Projects
          </a>

          <a
            href="/#contact"
            onClick={() => handler('/#contact')}
            className={`p-2 lg:px-4 md:mx-2 text-white rounded ${isActive('/#contact') ? 'bg-gray-200 text-800' : ''}`}
            style={{
              backgroundColor: isActive('/#contact') ? '#ffff00' : '#000000',
              color: isActive('/#contact') ? 'black' : '#ffff00',
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
