import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import { Logo } from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // If not home page, always show background for contrast
  const showBackground = scrolled || !isHomePage;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        showBackground 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-100' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              className="relative bg-white p-1.5 rounded-xl shadow-sm border border-gray-100"
            >
              <Logo 
                size="md" 
                showText={false} 
              />
              <motion.div 
                className="absolute inset-0 bg-aba-blue/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="logo-glow"
              />
            </motion.div>
            <div className="hidden md:flex flex-col">
              <span className={`text-2xl font-bold font-serif transition-colors duration-300 leading-none ${
                showBackground ? 'text-aba-blue' : 'text-white'
              }`}>
                ABA
              </span>
              <span className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                showBackground ? 'text-gray-500' : 'text-white/80'
              }`}>
                Associação Barnabé
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 relative py-1 ${
                    showBackground 
                      ? (isActive ? 'text-aba-blue' : 'text-gray-600 hover:text-aba-blue') 
                      : (isActive ? 'text-aba-orange' : 'text-white/90 hover:text-white drop-shadow-sm')
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full ${
                    isActive ? 'after:w-full' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/doar">
              <Button size="sm" variant={showBackground ? 'primary' : 'secondary'}>
                Doe Agora
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${showBackground ? 'text-gray-600' : 'text-white'}`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white absolute w-full shadow-2xl overflow-hidden glass-effect"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 border-t border-gray-100">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive ? 'bg-blue-50 text-aba-blue' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 px-3">
                <Link to="/doar" className="block w-full">
                   <Button fullWidth variant="secondary">Doe Agora</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;