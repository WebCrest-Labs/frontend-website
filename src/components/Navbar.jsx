import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import assets from '../assets/assets';
import useScrollDirection from '../hooks/useScrollDirection';
import ThemeToggleBtn from './ThemeToggleBtn';

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const navLinkClass = ({ isActive }) => `
    relative group cursor-pointer transition-all duration-300 ease-out 
    ${isActive ? 'text-primary dark:text-amber-400' : 'hover:text-primary dark:hover:text-amber-400'}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: scrollDirection === 'down' ? -100 : 0
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier for smooth, professional feel
      }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      {/* Brand Text Logo */}
      <Link to="/" className="leading-tight select-none group cursor-pointer">
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
      </Link>

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

        <NavLink
          to="/"
          onClick={() => setSidebarOpen(false)}
          className={navLinkClass}
        >
          <span className="relative z-10">Home</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </NavLink>
        <NavLink
          to="/about-us"
          onClick={() => setSidebarOpen(false)}
          className={navLinkClass}
        >
          <span className="relative z-10">About Us</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </NavLink>
        <NavLink
          to="/services"
          onClick={() => setSidebarOpen(false)}
          className={navLinkClass}
        >
          <span className="relative z-10">Services</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </NavLink>
        <NavLink
          to="/work"
          onClick={() => setSidebarOpen(false)}
          className={navLinkClass}
        >
          <span className="relative z-10">Our Work</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </NavLink>
        {/* <NavLink
          to="/team"
          onClick={() => setSidebarOpen(false)}
          className={navLinkClass}
        >
          <span className="relative z-10">Team</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </NavLink> */}
        <NavLink
          to="/contact"
          onClick={() => setSidebarOpen(false)}
          className={navLinkClass}
        >
          <span className="relative z-10">Contact Us</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-yellow-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </NavLink>
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

        <Link
          to="/contact"
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
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
