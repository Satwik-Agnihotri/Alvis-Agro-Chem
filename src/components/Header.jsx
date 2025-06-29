import React, { useState, useEffect } from 'react';
import alvisLogo from '../assets/alvis.webp';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-lg shadow-md border-b border-green-200'
          : 'bg-white/30 backdrop-blur-md border-b border-transparent'
      }`}
      style={{
        transform: `translateY(${scrollY * -0.1}px)`,
      }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={alvisLogo}
            alt="Alvis Agro Chem"
            className="w-[120px] h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: 'Products', id: 'products' },
            { label: 'About Us', id: 'about' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-[#1d3a2f] font-medium text-sm tracking-wide hover:text-green-700 transition duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button
          onClick={() => scrollToSection('products')}
          className="hidden md:block bg-gradient-to-r from-green-500 to-lime-500 text-green-800 font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          Shop Now
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-green-100 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 px-6"
          >
            <div className="flex flex-col gap-4 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-md">
              {[
                { label: 'Products', id: 'products' },
                { label: 'About Us', id: 'about' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#1d3a2f] text-base font-medium hover:text-green-700 transition"
                >
                  {item.label}
                </button>
              ))}
              {/* Translucent Green CTA on Mobile */}
              <button
                onClick={() => scrollToSection('products')}
                className="bg-green-500/30 text-green-800 font-semibold px-4 py-2 rounded-full border border-green-400 shadow hover:scale-105 transition backdrop-blur-md"
              >
                Shop Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
