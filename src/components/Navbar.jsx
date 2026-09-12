import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About-Me', href: '#about-me' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contacts', href: '#contacts' },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-40 bg-[#1e293b]/40 backdrop-blur-md border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src="./logo/Logo.png" alt="Logo" className="w-6 h-6 object-contain" />
          <span className="text-2xl font-bold text-white tracking-tight font-mono">
            Titus
          </span>
        </div>

        {/* Desktop Navigation Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8 font-mono text-gray-300">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-sm group transition-colors duration-300 ease-in-out flex items-center"
            >
              <span className="text-[#c084fc] mr-1">#</span>
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-[#1e293b]/90 backdrop-blur-sm border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6 font-mono text-gray-300">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)}
                  className="text-base flex items-center border-b border-white/5 pb-4 last:border-b-0"
                >
                  <span className="text-[#c084fc] mr-3">#</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;