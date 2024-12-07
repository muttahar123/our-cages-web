// import React, { useState } from 'react';
import { Moon, Sun, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-600 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src="/src/assets/cafeDeCages logo.png" alt="Logo" width={100} height={32} />
          </div>

          {/* Navigation Links (hidden on mobile) */}
          <div
            className={`md:flex items-center space-x-4 ${
              isMenuOpen
                ? 'block absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-md p-4'
                : 'hidden'
            }`}
          >
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              Products
            </a>
          </div>

          {/* Right-side Options */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search..."
                className="pl-8 pr-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Avatar */}
            <div className="relative">
              <button className="flex items-center focus:outline-none">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Avatar"
                  className="h-7 w-8 rounded-full"
                />
              </button>
              {/* You can add a dropdown menu for user options here */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
