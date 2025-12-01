import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`p-2 rounded-full ${scrolled ? 'bg-aba-blue text-white' : 'bg-white text-aba-blue'}`}>
              <Heart className="h-6 w-6 fill-current" />
            </div>
            <span className={`text-2xl font-bold font-serif ${scrolled ? 'text-aba-blue' : 'text-white drop-shadow-md'}`}>
              ABA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-200 ${
                    scrolled 
                      ? (isActive ? 'text-aba-blue' : 'text-gray-600 hover:text-aba-blue') 
                      : (isActive ? 'text-aba-orange' : 'text-white/90 hover:text-white drop-shadow-sm')
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/doar">
              <Button size="sm" variant={scrolled ? 'primary' : 'secondary'}>
                Doe Agora
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-600' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-50 text-aba-blue' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4">
              <Link to="/doar" className="block w-full">
                 <Button fullWidth variant="secondary">Doe Agora</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;