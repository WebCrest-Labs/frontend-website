import { motion } from "framer-motion";
import { useState } from "react";
import assets from "../assets/assets";

const Footer = ({ theme }) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const footerLinks = {
    company: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
    ],
    services: [
      { name: "Services", href: "/services" },
      { name: "Our Work", href: "/work" },
    ],
    connect: [
      { name: "Team", href: "/team" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/webcrestlabs",
      icon: assets.instagram_icon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/webcrest-labs",
      icon: assets.linkedin_icon,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950 mt-20 sm:mt-32 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 dark:from-primary/10 dark:to-indigo-500/10 pointer-events-none" />

      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
      >
        {/* Top Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
          {/* Brand & Description - Takes more space */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            {/* Brand Logo */}
            <div className="leading-tight select-none group cursor-pointer inline-block">
              <span className="block text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-primary via-indigo-500 to-sky-500 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-500 bg-clip-text text-transparent transition-all duration-500 group-hover:tracking-wider">
                WebCrest
              </span>
              <span className="block text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-gray-600 dark:text-gray-300 transition-all duration-500 group-hover:tracking-[0.45em]">
                Labs
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
              From strategy to execution, we craft digital solutions that move your business forward.
              Transforming ideas into exceptional digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-primary hover:to-indigo-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Columns */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-4 relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-indigo-500" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-indigo-500" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-4 relative inline-block">
              Connect
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-indigo-500" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-sm text-gray-600 dark:text-gray-400"
        >
          <p className="text-center sm:text-left">
            © 2026 <span className="font-semibold text-gray-900 dark:text-white">WebCrest Labs</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://ghagsagar23.github.io/vue_js_udemy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300 group"
            >
              <span className="relative">
                Crafted by Sagar Ghag
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-primary via-indigo-500 to-sky-500 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-500" />
    </footer>
  );
};

export default Footer;
