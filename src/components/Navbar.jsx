import { motion } from 'framer-motion';
import { useState } from 'react';
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      {/* Brand Text Logo */}
      <div className="leading-tight select-none group cursor-pointer">
        <span
          className="
            block text-lg sm:text-xl font-extrabold
            bg-gradient-to-r from-primary via-indigo-500 to-sky-500
            dark:from-amber-400 dark:via-orange-400 dark:to-yellow-500
            bg-clip-text text-transparent
            transition-all duration-300
            group-hover:tracking-widest
            dark:font-mono
          "
        >
          WebCrest
        </span>
        <span
          className="
            block text-xs sm:text-sm font-semibold uppercase
            tracking-[0.25em]
            text-gray-600 dark:text-gray-300
            transition-all duration-300
            group-hover:tracking-[0.4em]
            dark:font-mono
          "
        >
          Labs
        </span>
      </div>

      {/* Sidebar / Menu Links */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm fixed sm:static top-0 bottom-0 right-0 h-full sm:h-auto flex flex-col sm:flex-row sm:items-center gap-5 sm:bg-transparent transition-all duration-300
          ${
          sidebarOpen
            ? 'w-60 pl-10 bg-primary text-white pt-20'
            : 'w-0 overflow-hidden sm:w-auto sm:pl-0 sm:pt-0'
          }`}
      >
        <img
          src={assets.close_icon}
          alt="close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="relative group cursor-pointer transition-all duration-300 ease-out hover:text-primary dark:hover:text-amber-400"
        >
          <span className="relative z-10">Home</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="relative group cursor-pointer transition-all duration-300 ease-out hover:text-primary dark:hover:text-amber-400"
        >
          <span className="relative z-10">Services</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="relative group cursor-pointer transition-all duration-300 ease-out hover:text-primary dark:hover:text-amber-400"
        >
          <span className="relative z-10">Our Work</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact-us"
          className="relative group cursor-pointer transition-all duration-300 ease-out hover:text-primary dark:hover:text-amber-400"
        >
          <span className="relative z-10">Contact Us</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt="menu"
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        <a
          href="#contact-us"
          className="text-sm hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-indigo-600 dark:from-amber-500 dark:to-orange-500 text-white px-6 py-2 rounded-full cursor-pointer group relative overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-amber-500/50"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-2px]">
            Contact
          </span>
          <img
            src={assets.arrow_icon}
            width={14}
            alt="arrow"
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
          />
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-primary dark:from-orange-500 dark:to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
